import { Mail, Phone, MapPin } from "lucide-react"
import type { ResumeData } from "@/types/resume"

interface TemplateProps {
    data: ResumeData
}

export const ClassicTemplate = ({ data }: TemplateProps) => {
    const { personal, education, experience, skills, projects } = data

    if (!personal.fullName) {
        return (
            <div className="flex items-center justify-center h-full text-gray-400">
                <div className="text-center">
                    <p className="text-lg font-medium">Start filling in your information</p>
                    <p className="text-sm">Your resume will appear here in real-time</p>
                </div>
            </div>
        )
    }

    return (
        <div className="space-y-5 text-gray-900 font-serif">
            {/* Header */}
            <div className="text-center border-b-2 border-gray-800 pb-4">
                <h1 className="text-4xl font-bold text-gray-900 mb-2">{personal.fullName}</h1>
                <p className="text-base text-gray-700 mb-3">{personal.title}</p>
                <div className="flex justify-center flex-wrap gap-4 text-sm text-gray-600">
                    {personal.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="w-3 h-3" />
                            <span>{personal.email}</span>
                        </div>
                    )}
                    {personal.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="w-3 h-3" />
                            <span>{personal.phone}</span>
                        </div>
                    )}
                    {personal.location && (
                        <div className="flex items-center gap-1">
                            <MapPin className="w-3 h-3" />
                            <span>{personal.location}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Summary */}
            {personal.summary && (
                <div>
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-2 border-b border-gray-300 pb-1">
                        Summary
                    </h2>
                    <p className="text-gray-700 text-sm leading-relaxed">{personal.summary}</p>
                </div>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <div>
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">
                        Experience
                    </h2>
                    <div className="space-y-4">
                        {experience.map((exp) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-baseline mb-1">
                                    <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                                    <p className="text-sm text-gray-600">
                                        {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                    </p>
                                </div>
                                <p className="text-gray-700 italic mb-2">
                                    {exp.company} • {exp.location}
                                </p>
                                <p className="text-sm text-gray-700 whitespace-pre-line">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Education */}
            {education.length > 0 && (
                <div>
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">
                        Education
                    </h2>
                    <div className="space-y-3">
                        {education.map((edu) => (
                            <div key={edu.id}>
                                <div className="flex justify-between items-baseline">
                                    <h3 className="font-semibold text-gray-900">{edu.degree}, {edu.field}</h3>
                                    <p className="text-sm text-gray-600">
                                        {edu.startDate} - {edu.endDate}
                                    </p>
                                </div>
                                <p className="text-gray-700 italic">{edu.school}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
                <div>
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">
                        Skills
                    </h2>
                    <p className="text-sm text-gray-700">
                        {skills.map((skill) => skill.name).join(" • ")}
                    </p>
                </div>
            )}

            {/* Projects */}
            {projects.length > 0 && (
                <div>
                    <h2 className="text-lg font-bold text-gray-900 uppercase tracking-wide mb-3 border-b border-gray-300 pb-1">
                        Projects
                    </h2>
                    <div className="space-y-3">
                        {projects.map((project) => (
                            <div key={project.id}>
                                <h3 className="font-semibold text-gray-900">{project.name}</h3>
                                <p className="text-sm text-gray-700 mb-1">{project.description}</p>
                                {project.technologies.length > 0 && (
                                    <p className="text-sm text-gray-600 italic">
                                        Technologies: {project.technologies.join(", ")}
                                    </p>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}
