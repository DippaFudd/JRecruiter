import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Separator } from "@/components/ui/separator"
import { MapPin, DollarSign, Clock, Building2, Phone, Mail, Users, Calendar } from "lucide-react"
import Link from "next/link"

const mockJobDetails = {
  1: {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA",
    salary: "$120,000 - $160,000",
    type: "Full-time",
    posted: "2 days ago",
    phone: "(415) 555-0123",
    email: "careers@techflow.com",
    employees: "500-1000",
    founded: "2015",
    description:
      "We're looking for a senior software engineer to join our growing team and help build the next generation of cloud-based solutions.",
    responsibilities: [
      "Design and develop scalable web applications using modern technologies",
      "Collaborate with cross-functional teams to define and implement new features",
      "Mentor junior developers and contribute to code reviews",
      "Optimize application performance and ensure high availability",
      "Stay up-to-date with emerging technologies and industry best practices",
    ],
    requirements: [
      "5+ years of experience in software development",
      "Proficiency in JavaScript, TypeScript, React, and Node.js",
      "Experience with cloud platforms (AWS, Azure, or GCP)",
      "Strong understanding of database design and optimization",
      "Excellent problem-solving and communication skills",
      "Bachelor's degree in Computer Science or related field",
    ],
    benefits: [
      "Competitive salary and equity package",
      "Comprehensive health, dental, and vision insurance",
      "401(k) with company matching",
      "Flexible work arrangements and remote options",
      "Professional development budget",
      "Unlimited PTO policy",
    ],
  },
}

export default function JobDetailPage({ params }: { params: { id: string } }) {
  const job = mockJobDetails[1] // Using mock data for demo

  if (!job) {
    return <div>Job not found</div>
  }

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

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2">
            <Card>
              <CardHeader>
                <div className="flex justify-between items-start mb-4">
                  <div>
                    <CardTitle className="text-3xl text-gray-900 mb-2">{job.title}</CardTitle>
                    <p className="text-xl font-semibold text-blue-600">{job.company}</p>
                  </div>
                  <Badge variant="secondary" className="text-sm">
                    {job.type}
                  </Badge>
                </div>

                <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                  <div className="flex items-center">
                    <MapPin className="h-4 w-4 mr-1" />
                    {job.location}
                  </div>
                  <div className="flex items-center">
                    <DollarSign className="h-4 w-4 mr-1" />
                    {job.salary}
                  </div>
                  <div className="flex items-center">
                    <Clock className="h-4 w-4 mr-1" />
                    Posted {job.posted}
                  </div>
                </div>
              </CardHeader>

              <CardContent className="space-y-6">
                <div>
                  <h3 className="text-lg font-semibold mb-3">Job Description</h3>
                  <p className="text-gray-700">{job.description}</p>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Responsibilities</h3>
                  <ul className="space-y-2">
                    {job.responsibilities.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Requirements</h3>
                  <ul className="space-y-2">
                    {job.requirements.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-blue-600 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <Separator />

                <div>
                  <h3 className="text-lg font-semibold mb-3">Benefits</h3>
                  <ul className="space-y-2">
                    {job.benefits.map((item, index) => (
                      <li key={index} className="flex items-start">
                        <span className="text-green-600 mr-2">•</span>
                        <span className="text-gray-700">{item}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            {/* Apply Card */}
            <Card>
              <CardHeader>
                <CardTitle>Apply for this position</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <Button className="w-full" size="lg">
                  Apply Now
                </Button>
                <Button variant="outline" className="w-full">
                  Save Job
                </Button>
                <p className="text-sm text-gray-600 text-center">By applying, you agree to our Terms of Service</p>
              </CardContent>
            </Card>

            {/* Company Info */}
            <Card>
              <CardHeader>
                <CardTitle>About {job.company}</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-3">
                  <div className="flex items-center text-sm">
                    <Users className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">Company size:</span>
                    <span className="ml-auto font-medium">{job.employees} employees</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Calendar className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">Founded:</span>
                    <span className="ml-auto font-medium">{job.founded}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">Phone:</span>
                    <span className="ml-auto font-medium">{job.phone}</span>
                  </div>
                  <div className="flex items-center text-sm">
                    <Mail className="h-4 w-4 mr-2 text-gray-400" />
                    <span className="text-gray-600">Email:</span>
                    <span className="ml-auto font-medium">{job.email}</span>
                  </div>
                </div>
                <Separator />
                <Button variant="outline" className="w-full">
                  View Company Profile
                </Button>
              </CardContent>
            </Card>

            {/* Similar Jobs */}
            <Card>
              <CardHeader>
                <CardTitle>Similar Jobs</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-blue-600">Full Stack Developer</h4>
                    <p className="text-sm text-gray-600">WebTech Solutions</p>
                    <p className="text-sm text-gray-500">$90,000 - $120,000</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-blue-600">Software Engineer</h4>
                    <p className="text-sm text-gray-600">CodeCraft Inc</p>
                    <p className="text-sm text-gray-500">$100,000 - $140,000</p>
                  </div>
                  <div className="border-l-4 border-blue-600 pl-4">
                    <h4 className="font-medium text-blue-600">Backend Developer</h4>
                    <p className="text-sm text-gray-600">DataFlow Systems</p>
                    <p className="text-sm text-gray-500">$95,000 - $125,000</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  )
}
