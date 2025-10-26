import type { ResumeData } from "@/types/resume"

interface TemplateProps {
    data: ResumeData
}

export const MinimalTemplate = ({ data }: TemplateProps) => {
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
        <div className="space-y-8 text-gray-900">
            {/* Header */}
            <div>
                <h1 className="text-5xl font-light text-gray-900 mb-1">{personal.fullName}</h1>
                <p className="text-xl text-gray-500 mb-4">{personal.title}</p>
                <div className="text-sm text-gray-600 space-y-1">
                    {personal.email && <p>{personal.email}</p>}
                    {personal.phone && <p>{personal.phone}</p>}
                    {personal.location && <p>{personal.location}</p>}
                </div>
            </div>

            {/* Summary */}
            {personal.summary && (
                <div>
                    <p className="text-gray-700 text-sm leading-relaxed">{personal.summary}</p>
                </div>
            )}

            {/* Experience */}
            {experience.length > 0 && (
                <div>
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                        Experience
                    </h2>
                    <div className="space-y-6">
                        {experience.map((exp) => (
                            <div key={exp.id}>
                                <div className="grid grid-cols-3 gap-4 mb-2">
                                    <div className="col-span-2">
                                        <h3 className="font-medium text-gray-900">{exp.position}</h3>
                                        <p className="text-gray-600 text-sm">{exp.company}</p>
                                    </div>
                                    <div className="text-right text-sm text-gray-500">
                                        <p>{exp.startDate}</p>
                                        <p>{exp.current ? "Present" : exp.endDate}</p>
                                    </div>
                                </div>
                                <p className="text-sm text-gray-700 whitespace-pre-line">{exp.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Education */}
            {education.length > 0 && (
                <div>
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                        Education
                    </h2>
                    <div className="space-y-4">
                        {education.map((edu) => (
                            <div key={edu.id} className="grid grid-cols-3 gap-4">
                                <div className="col-span-2">
                                    <h3 className="font-medium text-gray-900">{edu.degree}</h3>
                                    <p className="text-gray-600 text-sm">{edu.field}</p>
                                    <p className="text-gray-500 text-sm">{edu.school}</p>
                                </div>
                                <div className="text-right text-sm text-gray-500">
                                    <p>{edu.startDate}</p>
                                    <p>{edu.endDate}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            )}

            {/* Skills */}
            {skills.length > 0 && (
                <div>
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                        Skills
                    </h2>
                    <div className="grid grid-cols-2 gap-2 text-sm text-gray-700">
                        {skills.map((skill) => (
                            <div key={skill.id}>{skill.name}</div>
                        ))}
                    </div>
                </div>
            )}

            {/* Projects */}
            {projects.length > 0 && (
                <div>
                    <h2 className="text-sm font-bold text-gray-900 uppercase tracking-widest mb-4">
                        Projects
                    </h2>
                    <div className="space-y-4">
                        {projects.map((project) => (
                            <div key={project.id}>
                                <h3 className="font-medium text-gray-900 mb-1">{project.name}</h3>
                                <p className="text-sm text-gray-700 mb-2">{project.description}</p>
                                {project.technologies.length > 0 && (
                                    <p className="text-xs text-gray-500">
                                        {project.technologies.join(" · ")}
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