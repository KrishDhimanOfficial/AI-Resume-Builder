import { Card } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { PersonalInfoForm } from "./form-sections/PersonalInfoForm"
import { EducationForm } from "./form-sections/EducationForm"
import { ExperienceForm } from "./form-sections/ExperienceForm"
import { SkillsForm } from "./form-sections/SkillsForm"
import { ProjectsForm } from "./form-sections/ProjectsForm"
import { Upload, Sparkles } from "lucide-react"
import { Button } from "@/components/ui/button"
import type { ResumeData } from "@/types/resume"
import { GoogleGenerativeAI } from "@google/generative-ai"
import  config  from "@/config/config"
import { useEffect } from "react"

interface ResumeFormProps {
  resumeData: ResumeData
  onUpdateResumeData: (data: ResumeData) => void
}

export const ResumeForm = ({ resumeData, onUpdateResumeData }: ResumeFormProps) => {

  const genAI = new GoogleGenerativeAI(config.geminiApiKey)
  const model = genAI.getGenerativeModel({ model: "gemini-1.5-flash" })

  return (
    <Card className="p-6 shadow-medium bg-card/80 backdrop-blur-sm">
      <div className="mb-6">
        <h2 className="text-2xl font-bold mb-2">Your Information</h2>
        <p className="text-muted-foreground text-sm">
          Fill in your details or upload an existing resume to auto-fill
        </p>
      </div>

      {/* Upload Resume Button */}
      <div className="mb-6 p-4 border-2 border-dashed border-border rounded-lg bg-muted/30 hover:bg-muted/50 transition-colors cursor-pointer group">
        <div className="flex items-center justify-center gap-3 text-muted-foreground group-hover:text-foreground transition-colors">
          <Upload className="w-5 h-5" />
          <span className="font-medium">Upload Resume (PDF/DOCX)</span>
          <Sparkles className="w-4 h-4 text-ai-primary" />
        </div>
        <p className="text-xs text-center text-muted-foreground mt-2">
          AI will automatically extract and fill your information
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

      {/* AI Generate Button */}
      <Button className="w-full mt-6 bg-gradient-primary hover:opacity-90 transition-opacity shadow-glow">
        <Sparkles className="w-4 h-4 mr-2" />
        Generate with AI
      </Button>
    </Card>
  )
}
