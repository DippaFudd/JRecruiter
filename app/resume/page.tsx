import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Upload, FileText, Download, Edit, Eye } from "lucide-react"
import Link from "next/link"

const resumeTemplates = [
  {
    id: 1,
    name: "Professional",
    description: "Clean and modern design perfect for corporate roles",
    preview: "/placeholder.svg?height=300&width=200",
    category: "Business",
  },
  {
    id: 2,
    name: "Creative",
    description: "Eye-catching design for creative professionals",
    preview: "/placeholder.svg?height=300&width=200",
    category: "Design",
  },
  {
    id: 3,
    name: "Technical",
    description: "Structured layout ideal for technical positions",
    preview: "/placeholder.svg?height=300&width=200",
    category: "Technology",
  },
  {
    id: 4,
    name: "Executive",
    description: "Sophisticated design for senior-level positions",
    preview: "/placeholder.svg?height=300&width=200",
    category: "Executive",
  },
]

export default function ResumePage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">
                <Link href="/">JRecruiter</Link>
              </span>
            </div>
            <nav className="hidden md:flex space-x-8">
              <Link href="/" className="text-gray-700 hover:text-blue-600">
                Find Jobs
              </Link>
              <Link href="/companies" className="text-gray-700 hover:text-blue-600">
                Companies
              </Link>
              <Link href="/salary" className="text-gray-700 hover:text-blue-600">
                Salary
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login">
                <Button variant="outline">Sign In</Button>
              </Link>
              <Link href="/signup">
                <Button>Sign Up</Button>
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Resume Builder</h1>
          <p className="text-xl mb-8 text-blue-100">Create a professional resume that gets you hired</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              <FileText className="h-5 w-5 mr-2" />
              Build New Resume
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              <Upload className="h-5 w-5 mr-2" />
              Upload Existing
            </Button>
          </div>
        </div>
      </section>

      {/* Resume Templates */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Choose a Template</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {resumeTemplates.map((template) => (
            <Card key={template.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="p-4">
                <div className="aspect-[3/4] bg-gray-100 rounded-lg mb-4 flex items-center justify-center">
                  <FileText className="h-16 w-16 text-gray-400" />
                </div>
                <CardTitle className="text-lg">{template.name}</CardTitle>
                <Badge variant="secondary" className="w-fit">
                  {template.category}
                </Badge>
              </CardHeader>
              <CardContent className="p-4 pt-0">
                <p className="text-sm text-gray-600 mb-4">{template.description}</p>
                <div className="flex gap-2">
                  <Button size="sm" className="flex-1">
                    <Eye className="h-4 w-4 mr-1" />
                    Preview
                  </Button>
                  <Button size="sm" variant="outline" className="flex-1">
                    Use Template
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Features */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Why Use Our Resume Builder?</h2>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Edit className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Easy to Use</h3>
              <p className="text-gray-600">
                Simple drag-and-drop interface makes creating your resume quick and effortless.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <FileText className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">ATS Optimized</h3>
              <p className="text-gray-600">
                All templates are designed to pass through Applicant Tracking Systems successfully.
              </p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Download className="h-8 w-8 text-blue-600" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Multiple Formats</h3>
              <p className="text-gray-600">Download your resume in PDF, Word, or plain text format.</p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Build Your Resume?</h2>
          <p className="text-xl mb-8 text-blue-100">
            Join thousands of job seekers who have successfully landed their dream jobs with our resume builder.
          </p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Get Started for Free
          </Button>
        </div>
      </section>
    </div>
  )
}
