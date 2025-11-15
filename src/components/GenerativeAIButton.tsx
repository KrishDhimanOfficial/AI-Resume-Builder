import { Sparkles } from "lucide-react"
import { Button } from "./ui/button"

interface GenerativeAIButtonProps {
    onclick?: () => void,
    isGenerating?: boolean
}

const GenerativeAIButton = ({ onclick, isGenerating }: GenerativeAIButtonProps) => {
    return (
        <Button
            onClick={onclick}
            disabled={isGenerating}
            className="w-25 bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow">
            <Sparkles className="w-4 h-4" />
            {isGenerating ? 'Generating...' : 'Generate with AI'}
        </Button>
    )
}

export default GenerativeAIButton