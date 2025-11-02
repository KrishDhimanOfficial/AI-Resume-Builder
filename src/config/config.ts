/// <reference types="vite/client" />

const config: Config = {
    geminiApiKey: import.meta.env.VITE_GEMINI_API_KEY
}

interface Config {
    geminiApiKey: string
}

export default config