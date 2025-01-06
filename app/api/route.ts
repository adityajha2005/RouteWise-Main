import Roadmaps from "@/models/Roadmaps";
import dotenv from 'dotenv';
dotenv.config();
// const apiKey = process.env.TOGETHER_API_KEY;
export async function POST(req: Request) {
    // console.log("API Key:", process.env.TOGETHER_AI_API_KEY); 

    const data = await req.json();
    const prompt = data.prompt;
    const roadmapId = data.roadmapId;

    let message = `
        ROLE: Roadmap Generator Tool
        DESCRIPTION: A tool that generates a roadmap based on the user's input prompt.
        INPUT: User input prompt.
        OUTPUT: The output should be generated in json file that contains two objects are 'nodes' and 'edges'. This json file is designed for reactflow input. Generate only json without markdown.

        FORMAT:

        {
            "nodes": [
                {
                    "id": "1",
                    "type": "start",
                    "data": {
                        "label": "Start learning HTML & CSS at W3Schools",
                        "description": "Learn the basics of web development with HTML and CSS"
                    },
                    "position": {
                        "x": 250,
                        "y": 50
                    }
                },
                {
                    "id": "2",
                    "data": {
                        "label": "Learn JavaScript at Codecademy",
                        "description": "Master JavaScript fundamentals with interactive coding lessons"
                    },
                    "position": {
                        "x": 250,
                        "y": 150
                    }
                },
                and more...
            ],
            "edges": [
                {
                    "id": "e1-2",
                    "source": "1",
                    "target": "2",
                    "animated": false
                },
                and more...
            ]
        }

        PROMPT:

        ${prompt}
    `;

    try {
        // Call Together AI API
        const response = await fetch("https://api.together.xyz/v1/completions", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                Authorization: `Bearer ${process.env.TOGETHER_AI_API_KEY}`,
            },
            body: JSON.stringify({
                model: "deepseek-ai/DeepSeek-V3", // Replace with the model you want to use
                prompt: message,
                max_tokens: 1000,
                temperature: 0.7,
            }),
        });

        if (!response.ok) {
            throw new Error(`API request failed with status ${response.status}`);
        }

        const result = await response.json();
        console.log("API Response:", result);

        if (result.choices && result.choices.length > 0) {
            const msg = result.choices[0].text;
            console.log("Raw Response Text:", msg);

            // Remove triple backticks from the string
            const jsonStr = msg.replace(/```json\n/g, '').replace(/\n```/g, '');
            console.log("Parsed JSON String:", jsonStr);

            try {
                const jsonObject = JSON.parse(jsonStr);
                console.log("Parsed JSON Object:", jsonObject);

                // Update the roadmap in the database
                const newRoadmap = {
                    name: prompt,
                    prompt: prompt,
                    roadmap: jsonStr,
                };

                const roadmapResponse = await Roadmaps.findByIdAndUpdate(
                    { _id: roadmapId },
                    newRoadmap,
                    { new: true }
                );
                console.log(roadmapResponse);

                const responseBody = JSON.stringify(jsonObject);
                console.log("Response Body:", responseBody);
                return new Response(responseBody, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            } catch (error) {
                console.error("Error parsing JSON:", error);
                console.error("Error message:", error.message);
                console.error("Error stack:", error.stack);
                const responseBody = JSON.stringify({ error: "Invalid JSON response" });
                console.log("Response Body:", responseBody);
                return new Response(responseBody, {
                    headers: {
                        "Content-Type": "application/json",
                    },
                });
            }
        } else {
            const responseBody = JSON.stringify({ error: "No choices found in the API response" });
            console.log("Response Body:", responseBody);
            return new Response(responseBody, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
        }
    } catch (error) {
        console.error("Fetch error:", error);
        console.error("Error message:", error.message);
        console.error("Error stack:", error.stack);
        const responseBody = JSON.stringify({ error: "Error occurred during API request" });
        console.log("Response Body:", responseBody);
        return new Response(responseBody, {
            headers: {
                "Content-Type": "application/json",
            },
        });
    }
}
