import config from "@/config/config"
import { createGoogleGenerativeAI } from '@ai-sdk/google';
import { generateText } from 'ai'

const useCorrectWithAi = () => {

    const google = createGoogleGenerativeAI({
        apiKey: config.geminiApiKey
    })

    const GenerateWithAI = async (incorrectText: string): Promise<string> => {

        try {
            const prompt = `
            You are an expert resume writer and ATS specialist. 
            Your job is to take any description the user provides (experience, project details, role summary, tasks, responsibilities, achievements, or skills) and rewrite it to be:

            • Clear, professional, and resume-ready  
            • Grammatically correct  
            • Action-driven (start with strong verbs)  
            • Quantified when possible  
            • ATS-optimized (keywords included naturally)  
            • Concise but impactful  
            • Written in first-person implied form (no “I”, “me”, or full sentences)

            Guidelines:
            - Never change the meaning.
            - Do not add fake achievements or numbers.
            - Fix grammar, structure, and clarity.
            - Convert weak statements into strong, result-oriented bullet points.
            - If the text is a paragraph, convert it into bullet points.
            - If the user provides bullet points, improve each one individually.

            Format Output:
            - Provide final improved text only.
            - No explanations.

            User Input:
            “{{${incorrectText}}}”`;

            const { text } = await generateText({
                model: google('gemini-2.0-flash'),
                prompt,
            })

            return text
        } catch (error) {
            console.error("AI Correction Error:", error)
            throw error
        }
    }

    return {
        GenerateWithAI
    }
}

export default useCorrectWithAi