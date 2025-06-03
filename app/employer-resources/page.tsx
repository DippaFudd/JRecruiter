import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, BookOpen, Users, TrendingUp, FileText, Video, Download } from "lucide-react"
import Link from "next/link"

const resources = [
  {
    title: "Hiring Best Practices Guide",
    description: "Learn proven strategies for attracting and hiring top talent",
    type: "Guide",
    icon: BookOpen,
    downloadUrl: "#",
  },
  {
    title: "Salary Benchmarking Report 2024",
    description: "Comprehensive salary data across industries and locations",
    type: "Report",
    icon: TrendingUp,
    downloadUrl: "#",
  },
  {
    title: "Writing Effective Job Descriptions",
    description: "Templates and tips for creating compelling job postings",
    type: "Template",
    icon: FileText,
    downloadUrl: "#",
  },
  {
    title: "Remote Work Policy Template",
    description: "Ready-to-use policy template for remote and hybrid work",
    type: "Template",
    icon: FileText,
    downloadUrl: "#",
  },
  {
    title: "Interview Question Bank",
    description: "200+ interview questions organized by role and skill level",
    type: "Resource",
    icon: Users,
    downloadUrl: "#",
  },
  {
    title: "Diversity & Inclusion Toolkit",
    description: "Strategies for building diverse and inclusive teams",
    type: "Toolkit",
    icon: Users,
    downloadUrl: "#",
  },
]

const webinars = [
  {
    title: "The Future of Recruiting: AI and Automation",
    date: "March 15, 2024",
    time: "2:00 PM EST",
    speaker: "Sarah Johnson, Head of Talent at TechCorp",
    registered: 1250,
  },
  {
    title: "Building Your Employer Brand",
    date: "March 22, 2024",
    time: "1:00 PM EST",
    speaker: "Mike Chen, HR Director at StartupXYZ",
    registered: 890,
  },
  {
    title: "Effective Remote Onboarding",
    date: "March 29, 2024",
    time: "3:00 PM EST",
    speaker: "Lisa Rodriguez, People Operations Lead",
    registered: 650,
  },
]

export default function EmployerResourcesPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Employer Resources</h1>
          <p className="text-xl mb-8 text-blue-100">Everything you need to hire better, faster, and more effectively</p>
        </div>
      </section>

      {/* Resources Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Free Resources & Templates</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {resources.map((resource, index) => {
            const IconComponent = resource.icon
            return (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardHeader>
                  <div className="flex items-center justify-between mb-2">
                    <IconComponent className="h-8 w-8 text-blue-600" />
                    <span className="text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">{resource.type}</span>
                  </div>
                  <CardTitle className="text-lg">{resource.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-600 mb-4">{resource.description}</p>
                  <Button className="w-full">
                    <Download className="h-4 w-4 mr-2" />
                    Download
                  </Button>
                </CardContent>
              </Card>
            )
          })}
        </div>
      </section>

      {/* Webinars Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-8">Upcoming Webinars</h2>

          <div className="grid gap-6">
            {webinars.map((webinar, index) => (
              <Card key={index} className="hover:shadow-lg transition-shadow">
                <CardContent className="p-6">
                  <div className="flex justify-between items-start">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-gray-900 mb-2">{webinar.title}</h3>
                      <div className="space-y-1 text-sm text-gray-600 mb-4">
                        <p>
                          📅 {webinar.date} at {webinar.time}
                        </p>
                        <p>👤 {webinar.speaker}</p>
                        <p>👥 {webinar.registered} registered</p>
                      </div>
                    </div>
                    <div className="ml-6 flex flex-col gap-2">
                      <Button>
                        <Video className="h-4 w-4 mr-2" />
                        Register
                      </Button>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Latest from Our Blog</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <CardTitle className="text-lg">5 Trends Shaping the Future of Work</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">
                Explore the key trends that will define how we work in the coming years...
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>March 10, 2024</span>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <CardTitle className="text-lg">How to Reduce Time-to-Hire</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">
                Practical strategies to streamline your hiring process and find candidates faster...
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>March 8, 2024</span>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>

          <Card className="hover:shadow-lg transition-shadow">
            <CardHeader>
              <div className="w-full h-48 bg-gray-200 rounded-lg mb-4"></div>
              <CardTitle className="text-lg">Building a Strong Employer Brand</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600 text-sm mb-4">
                Learn how to attract top talent by developing a compelling employer brand...
              </p>
              <div className="flex justify-between items-center text-sm text-gray-500">
                <span>March 5, 2024</span>
                <Button variant="link" className="p-0">
                  Read More
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Need Personalized Help?</h2>
          <p className="text-xl mb-8 text-blue-100">Our team of hiring experts is here to help you succeed</p>
          <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
            Contact Our Team
          </Button>
        </div>
      </section>
    </div>
  )
}
