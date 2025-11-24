import { GoogleGenAI, Type } from "@google/genai";
import { DesignAdvice } from '../types';

const ai = new GoogleGenAI({ apiKey: process.env.API_KEY });

export const getProductInsights = async (productName: string, material: string): Promise<DesignAdvice | null> => {
  try {
    const prompt = `
      You are an expert interior designer and woodworker.
      Provide 3 short, stylish tips on how to decorate a room with a "${productName}" made of "${material}".
      Also provide 1 concise care instruction for this specific wood type.
    `;

    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            tips: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "List of 3 styling tips"
            },
            careInstructions: {
              type: Type.STRING,
              description: "One sentence care instruction"
            }
          },
          required: ["tips", "careInstructions"]
        }
      }
    });

    const text = response.text;
    if (!text) return null;
    return JSON.parse(text) as DesignAdvice;

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      tips: ["Place in a well-lit area to highlight the grain.", "Pair with neutral colors for a timeless look.", "Add greenery nearby to complement the wood tones."],
      careInstructions: "Dust regularly with a soft cloth and avoid direct sunlight to prevent fading."
    };
  }
};
