import axios from "axios";
import { GOOGLE_API_URL } from "./googleConfig";

const generateAiContent = async (userPrompt) => {
  try {
    const response = await axios.post(
      GOOGLE_API_URL,
      {
        contents: [
          {
            parts: [
              {
                text: userPrompt,
              },
            ],
          },
        ],
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const result = response.data?.candidates?.[0]?.content?.parts?.[0]?.text;
    return result || "No Response From AI";
  } catch (error) {
    console.log("Google API Error:", error);
    return "Error generating response";
  }
};

export default generateAiContent;
