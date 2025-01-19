import Roadmaps from "@/models/Roadmaps";
import dotenv from 'dotenv';
import { JsonValidator } from "@/src/utils/JsonValidator";
dotenv.config();

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const validationResult = JsonValidator.safeParseJson(JSON.stringify(body));
        
        if (!validationResult.success) {
            return new Response(JSON.stringify({ 
                error: validationResult.error,
                partialData: validationResult.partialData 
            }), {
                status: 400,
                headers: { 'Content-Type': 'application/json' }
            });
        }

        const data = validationResult.data;
        const { prompt, roadmapId } = data;

        const message = `
            ROLE: Advanced Roadmap Generator
            TASK: Generate a comprehensive learning roadmap with a main title node connected to descriptive sub-nodes.
            
            REQUIREMENTS:
            1. Create a main title node as the central focus
            2. Generate multiple connected sub-nodes with detailed descriptions
            3. Each sub-node should explain a specific aspect or component
            4. Include clear connections between nodes
            5. Maintain hierarchical structure from main topic to subtopics
            6. IMPORTANT: Respond ONLY with a valid JSON object
            7. DO NOT include any additional text or code blocks
            
            OUTPUT MUST BE A VALID JSON OBJECT WITH THIS EXACT STRUCTURE:
            {
                "nodes": [
                    {
                        "id": "main-node",
                        "type": "main",
                        "data": {
                            "label": "Main Topic",
                            "description": "Description",
                            "difficulty": "intermediate",
                            "estimatedHours": 100,
                            "isMainNode": true,
                            "details": "Details here"
                        },
                        "position": {"x": 0, "y": 0},
                        "style": {
                            "background": "#e8f5e9",
                            "border": "#2e7d32",
                            "borderRadius": "10px",
                            "padding": "10px",
                            "fontSize": "24px",
                            "width": 250,
                            "height": "auto"
                        }
                    }
                ],
                "edges": [
                    {
                        "id": "edge-1",
                        "source": "main-node",
                        "target": "node-1",
                        "type": "smoothstep",
                        "animated": true,
                        "style": {
                            "stroke": "#4dabf7",
                            "strokeWidth": 2
                        }
                    }
                ]
            }

            TOPIC TO CREATE ROADMAP FOR:
            ${prompt}

            REMEMBER: RESPOND ONLY WITH THE JSON OBJECT, NO OTHER TEXT
        `;

        try {
            const response = await fetch("https://api.together.xyz/v1/completions", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                    Authorization: `Bearer ${process.env.TOGETHER_AI_API_KEY}`,
                },
                body: JSON.stringify({
                    model: "meta-llama/Llama-3.3-70B-Instruct-Turbo-Free",
                    prompt: message,
                    max_tokens: 4000,
                    temperature: 0.7,
                    top_p: 0.9,
                    frequency_penalty: 0.1,
                    presence_penalty: 0.1,
                    stop: ["}"],
                }),
            });

            if (!response.ok) {
                throw new Error(`API request failed with status ${response.status}`);
            }

            const result = await response.json();
            
            if (!result.choices?.[0]?.text) {
                throw new Error('Invalid API response structure');
            }

            const msg = result.choices[0].text;
            console.log("Raw API response:", msg);

            // Enhanced JSON extraction
            let jsonStr = '';
            try {
                // First clean the response
                jsonStr = msg
                    .replace(/```json\s*|\s*```/g, '')
                    .replace(/\/\*[\s\S]*?\*\/|\/\/.*/g, '')
                    .replace(/const\s+\w+\s*=\s*/, '')
                    .replace(/return\s+/, '')
                    .replace(/;\s*$/, '')
                    .trim();

                // Extract JSON object
                const jsonMatch = jsonStr.match(/\{[\s\S]*\}/);
                if (!jsonMatch) {
                    throw new Error('No JSON object found in response');
                }

                jsonStr = jsonMatch[0];
                
                // Clean up JSON structure
                jsonStr = jsonStr
                    .replace(/,(\s*[}\]])/g, '$1')
                    .replace(/\s+/g, ' ')
                    .replace(/([{[,:])\s+/g, '$1')
                    .replace(/\s+([}\],:])/g, '$1');

                // Validate and parse JSON
                const jsonObject = JSON.parse(jsonStr);
                
                if (!jsonObject.nodes?.length || !jsonObject.edges?.length) {
                    throw new Error('Invalid roadmap structure: empty nodes or edges arrays');
                }

                if (!jsonObject.nodes.some((node: { type: string; }) => node.type === 'main')) {
                    throw new Error('Invalid roadmap structure: missing main node');
                }

                // Update database
                await Roadmaps.findByIdAndUpdate(
                    roadmapId,
                    {
                        name: prompt,
                        prompt: prompt,
                        roadmap: JSON.stringify(jsonObject)
                    },
                    { new: true }
                );

                return new Response(JSON.stringify(jsonObject), {
                    status: 200,
                    headers: { "Content-Type": "application/json" }
                });

            } catch (jsonError) {
                console.error("JSON Processing Error:", jsonError);
                console.error("Attempted JSON string:", jsonStr);
                
                // Attempt to construct a valid JSON object from the response
                try {
                    const defaultStructure = {
                        nodes: [],
                        edges: []
                    };

                    // Extract nodes array if possible
                    const nodesMatch = msg.match(/nodes\s*=\s*\[([\s\S]*?)\];/);
                    if (nodesMatch) {
                        defaultStructure.nodes = JSON.parse(`[${nodesMatch[1]}]`);
                    }

                    // Extract edges array if possible
                    const edgesMatch = msg.match(/edges\s*=\s*\[([\s\S]*?)\];/);
                    if (edgesMatch) {
                        defaultStructure.edges = JSON.parse(`[${edgesMatch[1]}]`);
                    }

                    return new Response(JSON.stringify(defaultStructure), {
                        status: 200,
                        headers: { "Content-Type": "application/json" }
                    });

                } catch (fallbackError) {
                    return new Response(JSON.stringify({
                        error: "JSON Processing Error",
                        details: (jsonError as Error).message,
                        rawResponse: msg,
                    }), {
                        status: 400,
                        headers: { "Content-Type": "application/json" }
                    });
                }
            }

        } catch (apiError) {
            console.error("API Error:", apiError);
            return new Response(JSON.stringify({
                error: "API Request Error",
                details: (apiError as Error).message
            }), {
                status: 500,
                headers: { "Content-Type": "application/json" }
            });
        }
    } catch (error) {
        return new Response(JSON.stringify({ 
            error: `Request processing error: ${(error as Error).message}`
        }), {
            status: 500,
            headers: { 'Content-Type': 'application/json' }
        });
    }
}
