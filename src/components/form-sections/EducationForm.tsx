import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Plus, Trash2 } from "lucide-react"
import type { Education } from "@/types/resume"

interface EducationFormProps {
    education: Education[]
    onUpdate: (education: Education[]) => void
}

export const EducationForm = ({ education, onUpdate }: EducationFormProps) => {
    const addEducation = () => {
        onUpdate([
            ...education,
            {
                id: Date.now().toString(),
                school: "",
                degree: "",
                field: "",
                startDate: "",
                endDate: "",
            },
        ])
    }

    const removeEducation = (id: string) => {
        onUpdate(education.filter((edu) => edu.id !== id))
    }

    const updateEducation = (id: string, field: keyof Education, value: string) => {
        onUpdate(
            education.map((edu) =>
                edu.id === id ? { ...edu, [field]: value } : edu
            )
        )
    }

    return (
        <div className="space-y-6">
            {education.map((edu) => (
                <div key={edu.id} className="p-4 border border-border rounded-lg bg-muted/30 space-y-4">
                    <div className="flex justify-between items-start">
                        <Label className="text-base font-semibold">Education Entry</Label>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeEducation(edu.id)}
                            className="h-8 w-8"
                        >
                            <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>School/University</Label>
                            <Input
                                value={edu.school}
                                onChange={(e) => updateEducation(edu.id, "school", e.target.value)}
                                placeholder="Harvard University"
                            />
                        </div>
                        <div>
                            <Label>Degree</Label>
                            <Input
                                value={edu.degree}
                                onChange={(e) => updateEducation(edu.id, "degree", e.target.value)}
                                placeholder="Bachelor of Science"
                            />
                        </div>
                    </div>

                    <div className="grid grid-cols-3 gap-4">
                        <div>
                            <Label>Field of Study</Label>
                            <Input
                                value={edu.field}
                                onChange={(e) => updateEducation(edu.id, "field", e.target.value)}
                                placeholder="Computer Science"
                            />
                        </div>
                        <div>
                            <Label>Start Date</Label>
                            <Input
                                type="month"
                                value={edu.startDate}
                                onChange={(e) => updateEducation(edu.id, "startDate", e.target.value)}
                            />
                        </div>
                        <div>
                            <Label>End Date</Label>
                            <Input
                                type="month"
                                value={edu.endDate}
                                onChange={(e) => updateEducation(edu.id, "endDate", e.target.value)}
                            />
                        </div>
                    </div>
                </div>
            ))}

            <Button
                variant="outline"
                onClick={addEducation}
                className="w-full border-dashed"
            >
                <Plus className="w-4 h-4 mr-2" />
                Add Education
            </Button>
        </div>
    )
}
