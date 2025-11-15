import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Checkbox } from "@/components/ui/checkbox"
import { Plus, Trash2 } from "lucide-react"
import type { Experience } from "@/types/resume"
import useCorrectWithAi from "@/hooks/useCorrectWithAi"
import GenerativeAIButton from "../GenerativeAIButton"
import { useState } from "react"

interface ExperienceFormProps {
    experience: Experience[]
    onUpdate: (experience: Experience[]) => void
}

export const ExperienceForm = ({ experience, onUpdate }: ExperienceFormProps) => {
    const { GenerateWithAI } = useCorrectWithAi()
    const [isGenerating, setIsGenerating] = useState(false)

    const addExperience = () => {
        onUpdate([
            ...experience,
            {
                id: Date.now().toString(),
                company: "",
                position: "",
                location: "",
                startDate: "",
                endDate: "",
                current: false,
                description: "",
            },
        ])
    }

    const removeExperience = (id: string) => {
        onUpdate(experience.filter((exp) => exp.id !== id))
    }

    const updateExperience = (id: string, field: keyof Experience, value: string | boolean) => {
        onUpdate(
            experience.map((exp) =>
                exp.id === id ? { ...exp, [field]: value } : exp
            )
        )
    }

    const handleGenerateWithAI = async (id: string) => {
        try {
            setIsGenerating(true)
            const data = experience.find((exp) => exp.id === id)
            const description = await GenerateWithAI(data.description)
            onUpdate(
                experience.map((exp) =>
                    exp.id === id ? { ...exp, description } : exp
                )
            )
            setIsGenerating(false)
        } catch (error) {
            console.error("AI Correction Error:", error)
            setIsGenerating(false)
        }
    }

    return (
        <div className="space-y-6">
            {experience.map((exp) => (
                <div key={exp.id} className="p-4 border border-border rounded-lg bg-muted/30 space-y-4">
                    <div className="flex justify-between items-start">
                        <Label className="text-base font-semibold">Work Experience</Label>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeExperience(exp.id)}
                            className="h-8 w-8"
                        >
                            <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Company</Label>
                            <Input
                                value={exp.company}
                                onChange={(e) => updateExperience(exp.id, "company", e.target.value)}
                                placeholder="Google"
                            />
                        </div>
                        <div>
                            <Label>Position</Label>
                            <Input
                                value={exp.position}
                                onChange={(e) => updateExperience(exp.id, "position", e.target.value)}
                                placeholder="Senior Software Engineer"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <Label>Location</Label>
                            <Input
                                value={exp.location}
                                onChange={(e) => updateExperience(exp.id, "location", e.target.value)}
                                placeholder="Mountain View, CA"
                            />
                        </div>
                        <div>
                            <Label>Start Date</Label>
                            <Input
                                type="month"
                                value={exp.startDate}
                                onChange={(e) => updateExperience(exp.id, "startDate", e.target.value)}
                            />
                        </div>
                        <div>
                            <Label>End Date</Label>
                            <Input
                                type="month"
                                value={exp.endDate}
                                onChange={(e) => updateExperience(exp.id, "endDate", e.target.value)}
                                disabled={exp.current}
                            />
                        </div>
                    </div>

                    <div className="flex items-center space-x-2">
                        <Checkbox
                            id={`current-${exp.id}`}
                            checked={exp.current}
                            onCheckedChange={(checked) =>
                                updateExperience(exp.id, "current", checked as boolean)
                            }
                        />
                        <Label htmlFor={`current-${exp.id}`} className="text-sm font-normal cursor-pointer">
                            I currently work here
                        </Label>
                    </div>

                    <div>
                        <div className="flex align-center justify-between mb-3">
                            <Label>Description</Label>
                            <GenerativeAIButton
                                onclick={() => handleGenerateWithAI(exp.id)}
                                isGenerating={isGenerating}
                            />
                        </div>
                        <Textarea
                            value={exp.description}
                            onChange={(e) => updateExperience(exp.id, "description", e.target.value)}
                            placeholder="• Developed and maintained web applications&#10• Led a team of 5 engineers&#10• Improved performance by 40%"
                            rows={4}
                        />
                    </div>
                </div>
            ))}

            <Button
                variant="outline"
                onClick={addExperience}
                className="w-full border-dashed"
            >
                <Plus className="w-4 h-4 mr-2" />
                Add Experience
            </Button>
        </div>
    )
}
