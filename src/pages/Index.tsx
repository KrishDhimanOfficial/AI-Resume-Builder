import { useState } from "react"
import { ResumeForm } from "@/components/ResumeForm"
import { ResumePreview } from "@/components/ResumePreview"
import { Header } from "@/components/Header"
import { Sparkles } from "lucide-react"
import type { ResumeData, Template } from "@/types/resume"

const Index = () => {
  const [resumeData, setResumeData] = useState<ResumeData>({
    personal: {
      fullName: "",
      title: "",
      email: "",
      phone: "",
      location: "",
      summary: "",
    },
    education: [],
    experience: [],
    skills: [],
    projects: [],
  })

  const [selectedTemplate, setSelectedTemplate] = useState<Template>("modern")

  return (
    <div className="min-h-screen bg-gradient-subtle">
      <Header />
      
      <main className="container mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fade-in">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-4">
            <Sparkles className="w-4 h-4" />
            <span className="text-sm font-medium">AI-Powered Resume Builder</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            Build Your Perfect Resume
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Create a professional resume in minutes with AI assistance. Choose from modern templates and let AI enhance your content.
          </p>
        </div>

        {/* Two-Panel Layout */}
        <div className="grid lg:grid-cols-2 gap-8 max-w-7xl mx-auto">
          {/* Left Panel - Form */}
          <div className="animate-slide-up">
            <ResumeForm 
              resumeData={resumeData} 
              onUpdateResumeData={setResumeData}
            />
          </div>

          {/* Right Panel - Preview */}
          <div className="animate-slide-in-right">
            <ResumePreview 
              resumeData={resumeData}
              template={selectedTemplate}
              onTemplateChange={setSelectedTemplate}
            />
          </div>
        </div>
      </main>
    </div>
  )
}

export default Index