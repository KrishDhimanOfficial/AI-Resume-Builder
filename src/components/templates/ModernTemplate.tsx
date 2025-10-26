import { Mail, Phone, MapPin, ExternalLink } from "lucide-react"
import type { ResumeData } from "@/types/resume"

interface TemplateProps {
    data: ResumeData
}

export const ModernTemplate = ({ data }: TemplateProps) => {
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
        <div className="space-y-6 text-gray-900">
            {/* Header */}
            <div className="border-b-2 border-indigo-600 pb-4">
                <h1 className="text-3xl font-bold text-gray-900 mb-1">{personal.fullName}</h1>
                <p className="text-lg text-indigo-600 font-medium mb-3">{personal.title}</p>
                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                    {personal.email && (
                        <div className="flex items-center gap-1">
                            <Mail className="w-4 h-4" />
                            <span>{personal.email}</span>
                        </div>
                    )}
                    {personal.phone && (
                        <div className="flex items-center gap-1">
                            <Phone className="w-4 h-4" />
                            <span>{personal.phone}</span>
                        </div>
                    )}
                    {personal.location && (
                        <div className="flex items-center gap-1">
                            <MapPin className="w-4 h-4" />
                            <span>{personal.location}</span>
                        </div>
                    )}
                </div>
            </div>

            {/* Summary */}
            {personal.summary && (
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-2">Professional Summary</h2>
                    <p className="text-gray-700 text-sm leading-relaxed">{personal.summary}</p>
                </div>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Work Experience</h2>
                    <div className="space-y-4">
                        {experience.map((exp) => (
                            <div key={exp.id}>
                                <div className="flex justify-between items-start mb-1">
                                    <div>
                                        <h3 className="font-semibold text-gray-900">{exp.position}</h3>
                                        <p className="text-indigo-600 font-medium">{exp.company}</p>
                                    </div>
                                    <div className="text-right text-sm text-gray-600">
                                        <p>{exp.location}</p>
                                        <p>
                                            {exp.startDate} - {exp.current ? "Present" : exp.endDate}
                                        </p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 whitespace-pre-line mt-2">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Education */}
            {education.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Education</h2>
                    <div className="space-y-3">
                        {education.map((edu) => (
                            <div key={edu.id} className="flex justify-between items-start">
                                <div>
                                    <h3 className="font-semibold text-gray-900">{edu.degree} in {edu.field}</h3>
                                    <p className="text-indigo-600">{edu.school}</p>
                                </div>
                                <p className="text-sm text-gray-600">
                                    {edu.startDate} - {edu.endDate}
                                </p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Skills</h2>
                    <div className="flex flex-wrap gap-2">
                        {skills.map((skill) => (
                            <span
                                key={skill.id}
                                className="px-3 py-1 bg-indigo-100 text-indigo-700 rounded-full text-sm font-medium"
                            >
                                {skill.name}
                            </span>
                        ))}
                    </div>
                </div>
            )}

            {/* Projects */}
            {projects.length > 0 && (
                <div>
                    <h2 className="text-xl font-bold text-gray-900 mb-3">Projects</h2>
                    <div className="space-y-3">
                        {projects.map((project) => (
                            <div key={project.id}>
                                <div className="flex items-start justify-between mb-1">
                                    <h3 className="font-semibold text-gray-900">{project.name}</h3>
                                    {project.link && (
                                        <a
                                            href={project.link}
                                            target="_blank"
                                            rel="noopener noreferrer"
                                            className="text-indigo-600 hover:text-indigo-700"
                                        >
                                            <ExternalLink className="w-4 h-4" />
                                        </a>
                                    )}
                                </div>
                                <p className="text-sm text-gray-700 mb-2">{project.description}</p>
                                {project.technologies.length > 0 && (
                                    <div className="flex flex-wrap gap-2">
                                        {project.technologies.map((tech, idx) => (
                                            <span
                                                key={idx}
                                                className="text-xs px-2 py-1 bg-gray-100 text-gray-600 rounded"
                                            >
                                                {tech}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            )}
        </div>
    )
}