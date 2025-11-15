import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import type { PersonalInfo } from "@/types/resume"
import GenerativeAIButton from "../GenerativeAIButton"
import useCorrectWithAi from "@/hooks/useCorrectWithAi"
import { useState } from "react"

interface PersonalInfoFormProps {
    data: PersonalInfo
    onUpdate: (data: PersonalInfo) => void
}

export const PersonalInfoForm = ({ data, onUpdate }: PersonalInfoFormProps) => {
    const { GenerateWithAI } = useCorrectWithAi()
    const [isGenerating, setIsGenerating] = useState(false)

    const handleGenerateWithAI = async () => {
        try {
            setIsGenerating(true)
            const summary = await GenerateWithAI(data.summary)
            onUpdate({ ...data, summary: summary })
            setIsGenerating(false)
        } catch (error) {
            console.error("AI Correction Error:", error)
            setIsGenerating(false)
        }
    }

    return (
        <div className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="fullName">Full Name</Label>
                    <Input
                        id="fullName"
                        value={data.fullName}
                        onChange={(e) => onUpdate({ ...data, fullName: e.target.value })}
                        placeholder="John Doe"
                    />
                </div>
                <div>
                    <Label htmlFor="title">Professional Title</Label>
                    <Input
                        id="title"
                        value={data.title}
                        onChange={(e) => onUpdate({ ...data, title: e.target.value })}
                        placeholder="Software Engineer"
                    />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
                <div>
                    <Label htmlFor="email">Email</Label>
                    <Input
                        id="email"
                        type="email"
                        value={data.email}
                        onChange={(e) => onUpdate({ ...data, email: e.target.value })}
                        placeholder="john@example.com"
                    />
                </div>
                <div>
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                        id="phone"
                        value={data.phone}
                        onChange={(e) => onUpdate({ ...data, phone: e.target.value })}
                        placeholder="+1 (555) 000-0000"
                    />
                </div>
            </div>

            <div>
                <Label htmlFor="location">Location</Label>
                <Input
                    id="location"
                    value={data.location}
                    onChange={(e) => onUpdate({ ...data, location: e.target.value })}
                    placeholder="San Francisco, CA"
                />
            </div>

            <div>
                <div className="flex align-center justify-between mb-3">
                    <Label htmlFor="summary">Professional Summary</Label>
                    <GenerativeAIButton
                        onclick={() => handleGenerateWithAI()}
                        isGenerating={isGenerating}
                    />
                </div>
                <Textarea
                    id="summary"
                    value={data.summary}
                    onChange={(e) => onUpdate({ ...data, summary: e.target.value })}
                    placeholder="Brief overview of your professional background and career goals..."
                    rows={4}
                />
            </div>
        </div>
    )
}
