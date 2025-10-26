import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Plus, Trash2 } from "lucide-react"
import type { Project } from "@/types/resume"

interface ProjectsFormProps {
    projects: Project[]
    onUpdate: (projects: Project[]) => void
}

export const ProjectsForm = ({ projects, onUpdate }: ProjectsFormProps) => {
    const addProject = () => {
        onUpdate([
            ...projects,
            {
                id: Date.now().toString(),
                name: "",
                description: "",
                technologies: [],
                link: "",
            },
        ])
    }

    const removeProject = (id: string) => {
        onUpdate(projects.filter((project) => project.id !== id))
    }

    const updateProject = (id: string, field: keyof Project, value: string | string[]) => {
        onUpdate(
            projects.map((project) =>
                project.id === id ? { ...project, [field]: value } : project
            )
        )
    }

    return (
        <div className="space-y-6">
            {projects.map((project) => (
                <div key={project.id} className="p-4 border border-border rounded-lg bg-muted/30 space-y-4">
                    <div className="flex justify-between items-start">
                        <Label className="text-base font-semibold">Project</Label>
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => removeProject(project.id)}
                            className="h-8 w-8"
                        >
                            <Trash2 className="w-4 h-4 text-destructive" />
                        </Button>
                    </div>

                    <div>
                        <Label>Project Name</Label>
                        <Input
                            value={project.name}
                            onChange={(e) => updateProject(project.id, "name", e.target.value)}
                            placeholder="E-commerce Platform"
                        />
                    </div>

                    <div>
                        <Label>Description</Label>
                        <Textarea
                            value={project.description}
                            onChange={(e) => updateProject(project.id, "description", e.target.value)}
                            placeholder="Built a full-stack e-commerce platform with real-time inventory management..."
                            rows={3}
                        />
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                        <div>
                            <Label>Technologies (comma-separated)</Label>
                            <Input
                                value={project.technologies.join(", ")}
                                onChange={(e) =>
                                    updateProject(
                                        project.id,
                                        "technologies",
                                        e.target.value.split(",").map((t) => t.trim())
                                    )
                                }
                                placeholder="React, Node.js, MongoDB"
                            />
                        </div>
                        <div>
                            <Label>Project Link (optional)</Label>
                            <Input
                                value={project.link}
                                onChange={(e) => updateProject(project.id, "link", e.target.value)}
                                placeholder="https://github.com/username/project"
                            />
                        </div>
                    </div>
                </div>
            ))}

            <Button
                variant="outline"
                onClick={addProject}
                className="w-full border-dashed"
            >
                <Plus className="w-4 h-4 mr-2" />
                Add Project
            </Button>
        </div>
    )
}
