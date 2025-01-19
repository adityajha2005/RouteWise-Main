"use client";

import { useCallback, useState, useMemo } from 'react';
import ReactFlow, {
    addEdge,
    Connection,
    Edge,
    Controls,
    ReactFlowProvider,
    Background,
    BackgroundVariant,
    ControlButton,
    MiniMap,
    Node
} from 'reactflow';
    
import 'reactflow/dist/style.css';
import { DownloadFlow } from './roadmappdf';
import { RiMap2Line } from 'react-icons/ri';

interface RoadMapProps {
    nodes: any;
    edges: any;
    onNodesChange: any;
    onEdgesChange: any;
    setNodes: any;
    setEdges: any;
}

// Custom node component
const CustomNode = ({ data }: { data: any }) => {
    return (
        <div className="p-4 rounded-lg shadow-md">
            <h3 className="font-bold text-lg mb-2">{data.label}</h3>
            <p className="text-sm mb-2">{data.description}</p>
            {data.difficulty && (
                <span className={`text-xs px-2 py-1 rounded ${
                    data.difficulty === 'beginner' ? 'bg-blue-100 text-blue-800' :
                    data.difficulty === 'intermediate' ? 'bg-orange-100 text-orange-800' :
                    'bg-red-100 text-red-800'
                }`}>
                    {data.difficulty}
                </span>
            )}
            {data.estimatedHours && (
                <div className="text-xs mt-2">
                    Estimated time: {data.estimatedHours}h
                </div>
            )}
            {data.resources && data.resources.length > 0 && (
                <div className="mt-2">
                    <h4 className="text-sm font-semibold">Resources:</h4>
                    <ul className="text-xs">
                        {data.resources.map((resource: any, index: number) => (
                            <li key={index}>
                                <a href={resource.url} 
                                   target="_blank" 
                                   rel="noopener noreferrer"
                                   className="text-blue-500 hover:underline">
                                    {resource.title}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>
            )}
        </div>
    );
};

const nodeTypes = {
    custom: CustomNode
};

export const RoadMap = ({
    nodes,
    edges,
    onNodesChange,
    onEdgesChange,
    setNodes,
    setEdges
}: RoadMapProps) => {

    const [showMap, setShowMap] = useState<boolean>(false);

    const onConnect = useCallback(
        (params: Connection | Edge) => setEdges((eds: Edge[]) => addEdge(params, eds)),
        [setEdges],
    );

    const proOptions = { hideAttribution: true };

    return (
        <div className='w-[75vw] h-[100vh]'>
            <ReactFlowProvider>
                <ReactFlow
                    nodes={nodes}
                    edges={edges}
                    onNodesChange={onNodesChange}
                    onEdgesChange={onEdgesChange}
                    onConnect={onConnect}
                    proOptions={proOptions}
                    nodeTypes={nodeTypes}
                    fitView
                >
                    <Controls className='p-1 flex flex-col items-center justify-center bg-slate-800 rounded-sm'>
                        <ControlButton>
                            <DownloadFlow nodes={nodes} />
                        </ControlButton>
                        <ControlButton onClick={() => setShowMap(!showMap)}>
                            <RiMap2Line title='Map view' />
                        </ControlButton>
                    </Controls>
                    <Background variant={BackgroundVariant.Dots} gap={12} size={1} />
                    {showMap && (
                        <MiniMap 
                            nodeStrokeColor={(n) => {
                                if (n.data?.difficulty === 'beginner') return '#74c0fc';
                                if (n.data?.difficulty === 'intermediate') return '#ffa94d';
                                if (n.data?.difficulty === 'advanced') return '#ff6b6b';
                                return '#222';
                            }}
                            nodeColor={(n) => {
                                if (n.data?.difficulty === 'beginner') return '#e7f5ff';
                                if (n.data?.difficulty === 'intermediate') return '#fff4e6';
                                if (n.data?.difficulty === 'advanced') return '#fff5f5';
                                return '#fff';
                            }}
                        />
                    )}
                </ReactFlow>
            </ReactFlowProvider>
        </div>
    );
};