import { Card } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Download, Share2 } from "lucide-react"
import { ModernTemplate } from "./templates/ModernTemplate"
import { ClassicTemplate } from "./templates/ClassicTemplate"
import { MinimalTemplate } from "./templates/MinimalTemplate"
import type { ResumeData, Template } from "@/types/resume"

interface ResumePreviewProps {
  resumeData: ResumeData
  template: Template
  onTemplateChange: (template: Template) => void
}

export const ResumePreview = ({ resumeData, template, onTemplateChange }: ResumePreviewProps) => {
  const renderTemplate = () => {
    switch (template) {
      case "modern":
        return <ModernTemplate data={resumeData} />
      case "classic":
        return <ClassicTemplate data={resumeData} />
      case "minimal":
        return <MinimalTemplate data={resumeData} />
      default:
        return <ModernTemplate data={resumeData} />
    }
  }

  return (
    <div className="sticky top-24">
      <Card className="p-6 shadow-medium bg-card/80 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-4">
          <h2 className="text-2xl font-bold">Preview</h2>
          <div className="flex gap-2">
            {/* <Button size="sm" className="bg-gradient-accent">
              <Download className="w-4 h-4 mr-2" />
              Download PDF
            </Button> */}
          </div>
        </div>

        {/* Template Selector */}
        <div className="flex gap-2 mb-6">
          <Button
            variant={template === "modern" ? "default" : "outline"}
            size="sm"
            onClick={() => onTemplateChange("modern")}
            className={template === "modern" ? "bg-gradient-primary" : ""}
          >
            Modern
          </Button>
          <Button
            variant={template === "classic" ? "default" : "outline"}
            size="sm"
            onClick={() => onTemplateChange("classic")}
            className={template === "classic" ? "bg-gradient-primary" : ""}
          >
            Classic
          </Button>
          <Button
            variant={template === "minimal" ? "default" : "outline"}
            size="sm"
            onClick={() => onTemplateChange("minimal")}
            className={template === "minimal" ? "bg-gradient-primary" : ""}
          >
            Minimal
          </Button>
        </div>

        {/* Resume Preview */}
        <div className="bg-white rounded-lg shadow-strong p-8 min-h-[800px] overflow-auto">
          {renderTemplate()}
        </div>
      </Card>
    </div>
  )
}
