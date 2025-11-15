import { Sparkles } from "lucide-react"
import { Button } from "./ui/button"

interface GenerativeAIButtonProps {
    onclick?: () => void
}

const GenerativeAIButton = ({ onclick }: GenerativeAIButtonProps) => {
    return (
        <Button
            onClick={onclick}
            className="w-25 bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow">
            <Sparkles className="w-4 h-4" />
            Generate with AI
        </Button>
    )
}

export default GenerativeAIButton