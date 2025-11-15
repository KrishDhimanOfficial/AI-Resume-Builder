import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PersonalInfoForm } from "./form-sections/PersonalInfoForm"
import { EducationForm } from "./form-sections/EducationForm"
import { ExperienceForm } from "./form-sections/ExperienceForm"
import { SkillsForm } from "./form-sections/SkillsForm"
import { ProjectsForm } from "./form-sections/ProjectsForm"
import type { ResumeData } from "@/types/resume"
import config from "@/config/config"

interface ResumeFormProps {
  resumeData: ResumeData
  onUpdateResumeData: (data: ResumeData) => void
}

export const ResumeForm = ({ resumeData, onUpdateResumeData }: ResumeFormProps) => {

  return (
    <Card className="p-6 shadow-medium bg-card/80 backdrop-blur-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Your Information</h2>
        <p className="text-muted-foreground text-sm">
          Fill in your details or upload an existing resume to auto-fill
        </p>
      </div>

      <Tabs defaultValue="personal" className="w-full">
        <TabsList className="grid grid-cols-5 w-full mb-6">
          <TabsTrigger value="personal">Personal</TabsTrigger>
          <TabsTrigger value="education">Education</TabsTrigger>
          <TabsTrigger value="experience">Experience</TabsTrigger>
          <TabsTrigger value="skills">Skills</TabsTrigger>
          <TabsTrigger value="projects">Projects</TabsTrigger>
        </TabsList>

        <TabsContent value="personal" className="space-y-4">
          <PersonalInfoForm
            data={resumeData.personal}
            onUpdate={(personal) => onUpdateResumeData({ ...resumeData, personal })}
          />
        </TabsContent>

        <TabsContent value="education" className="space-y-4">
          <EducationForm
            education={resumeData.education}
            onUpdate={(education) => onUpdateResumeData({ ...resumeData, education })}
          />
        </TabsContent>

        <TabsContent value="experience" className="space-y-4">
          <ExperienceForm
            experience={resumeData.experience}
            onUpdate={(experience) => onUpdateResumeData({ ...resumeData, experience })}
          />
        </TabsContent>

        <TabsContent value="skills" className="space-y-4">
          <SkillsForm
            skills={resumeData.skills}
            onUpdate={(skills) => onUpdateResumeData({ ...resumeData, skills })}
          />
        </TabsContent>

        <TabsContent value="projects" className="space-y-4">
          <ProjectsForm
            projects={resumeData.projects}
            onUpdate={(projects) => onUpdateResumeData({ ...resumeData, projects })}
          />
        </TabsContent>
      </Tabs>

    </Card>
  )
}
