import { GoogleGenAI } from "@google/genai";

let aiClient: GoogleGenAI | null = null;

const getClient = (): GoogleGenAI => {
  if (!aiClient) {
    // Assuming process.env.API_KEY is available as per instructions
    aiClient = new GoogleGenAI({ apiKey: process.env.API_KEY });
  }
  return aiClient;
};

export const askCommitteeAI = async (question: string): Promise<string> => {
  try {
    const ai = getClient();
    
    const prompt = `
      You are the AI Spokesperson for the "Family Happiness Referendum" (家庭幸福公投).
      The event hosts are Lucas and Penny. The baby is nicknamed "Bobo" (波波).
      The event is a gender reveal party disguised as a formal political/tech referendum.
      
      Your tone should be:
      1. Official and bureaucratic but playful and heartwarming.
      2. Use tech/legal jargon (e.g., "System optimization," "Core algorithm," "Protocol").
      3. Keep responses concise (under 100 words).
      4. Respond in Traditional Chinese (Taiwan).

      The user is asking: "${question}"
      
      If they ask about gender, say that information is classified under Protocol G-01 until 19:00.
      If they ask for a blessing, give a heartwarming blessing using tech metaphors.
    `;

    const response = await ai.models.generateContent({
      model: 'gemini-2.5-flash',
      contents: prompt,
    });

    return response.text || "系統忙線中，請稍後再試 (System Busy).";
  } catch (error) {
    console.error("AI Error:", error);
    return "通訊協定錯誤：無法連接至幸福運算核心。請稍後再試。";
  }
};
