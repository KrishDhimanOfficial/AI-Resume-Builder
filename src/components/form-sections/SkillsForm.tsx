import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Plus, Trash2 } from "lucide-react"
import type { Skill } from "@/types/resume"

interface SkillsFormProps {
    skills: Skill[]
    onUpdate: (skills: Skill[]) => void
}

export const SkillsForm = ({ skills, onUpdate }: SkillsFormProps) => {
    const addSkill = () => {
        onUpdate([
            ...skills,
            {
                id: Date.now().toString(),
                name: "",
                level: "intermediate",
            },
        ])
    }

    const removeSkill = (id: string) => {
        onUpdate(skills.filter((skill) => skill.id !== id))
    }

    const updateSkill = (id: string, field: keyof Skill, value: string) => {
        onUpdate(
            skills.map((skill) =>
                skill.id === id ? { ...skill, [field]: value } : skill
            )
        )
    }

    return (
        <div className="space-y-4">
            <div className="grid gap-4">
                {skills.map((skill) => (
                    <div key={skill.id} className="flex gap-4 items-end">
                        <div className="flex-1">
                            <Label>Skill Name</Label>
                            <Input
                                value={skill.name}
                                onChange={(e) => updateSkill(skill.id, "name", e.target.value)}
                                placeholder="React, Python, Communication..."
                            />
                        </div>
                        <div className="w-40">
                            <Label>Proficiency</Label>
                            <Select
                                value={skill.level}
                                onValueChange={(value) => updateSkill(skill.id, "level", value)}
                            >
                                <SelectTrigger>
                                    <SelectValue />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="beginner">Beginner</SelectItem>
                                    <SelectItem value="intermediate">Intermediate</SelectItem>
                                    <SelectItem value="advanced">Advanced</SelectItem>
                                    <SelectItem value="expert">Expert</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeSkill(skill.id)}
                            className="mb-0.5"
                        >
                            <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                    </div>
                ))}
            </div>

            <Button
                variant="outline"
                onClick={addSkill}
                className="w-full border-dashed"
            >
                <Plus className="w-4 h-4 mr-2" />
                Add Skill
            </Button>
        </div>
    )
}