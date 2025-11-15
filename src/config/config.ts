/// <reference types="vite/client" />
interface Config {
    geminiApiKey: string
}

const config: Config = {
    geminiApiKey: import.meta.env.VITE_GEMINI_API_KEY
}


export default config