export interface PersonalInfo {
    fullName: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    photoUrl?: string;
}

export interface Education {
    id: string;
    school: string;
    degree: string;
    field: string;
    startDate: string;
    endDate: string;
    gpa?: string;
}

export interface Experience {
    id: string;
    company: string;
    position: string;
    location: string;
    startDate: string;
    endDate: string;
    current: boolean;
    description: string;
}

export interface Skill {
    id: string;
    name: string;
    level: "beginner" | "intermediate" | "advanced" | "expert";
}

export interface Project {
    id: string;
    name: string;
    description: string;
    technologies: string[];
    link?: string;
}

export interface ResumeData {
    personal: PersonalInfo;
    education: Education[];
    experience: Experience[];
    skills: Skill[];
    projects: Project[];
}

export type Template = "modern" | "classic" | "minimal"