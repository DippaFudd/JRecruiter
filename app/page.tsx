"use client"

import type React from "react"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Search, MapPin, DollarSign, Clock, Building2 } from "lucide-react"
import Link from "next/link"

const mockJobs = [
  {
    id: 1,
    title: "Senior Software Engineer",
    company: "TechFlow Solutions",
    location: "San Francisco, CA",
    salary: "$120,000 - $160,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "We're looking for a senior software engineer to join our growing team...",
    phone: "(415) 555-0123",
  },
  {
    id: 2,
    title: "Marketing Manager",
    company: "BrandVision Inc",
    location: "New York, NY",
    salary: "$75,000 - $95,000",
    type: "Full-time",
    posted: "1 day ago",
    description: "Lead our marketing initiatives and drive brand awareness...",
    phone: "(212) 555-0456",
  },
  {
    id: 3,
    title: "UX Designer",
    company: "DesignCraft Studio",
    location: "Austin, TX",
    salary: "$65,000 - $85,000",
    type: "Full-time",
    posted: "3 days ago",
    description: "Create intuitive and beautiful user experiences for our products...",
    phone: "(512) 555-0789",
  },
  {
    id: 4,
    title: "Data Analyst",
    company: "DataInsights Corp",
    location: "Seattle, WA",
    salary: "$70,000 - $90,000",
    type: "Full-time",
    posted: "1 day ago",
    description: "Analyze complex datasets to drive business decisions...",
    phone: "(206) 555-0321",
  },
  {
    id: 5,
    title: "Product Manager",
    company: "InnovateTech",
    location: "Los Angeles, CA",
    salary: "$100,000 - $130,000",
    type: "Full-time",
    posted: "4 days ago",
    description: "Lead product strategy and development for our flagship products...",
    phone: "(323) 555-0654",
  },
  {
    id: 6,
    title: "Frontend Developer",
    company: "WebCraft Solutions",
    location: "Remote",
    salary: "$80,000 - $110,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "Build responsive and interactive web applications using modern frameworks...",
    phone: "(555) 123-4567",
  },
  {
    id: 7,
    title: "DevOps Engineer",
    company: "CloudTech Systems",
    location: "Denver, CO",
    salary: "$95,000 - $125,000",
    type: "Full-time",
    posted: "5 days ago",
    description: "Manage cloud infrastructure and deployment pipelines...",
    phone: "(303) 555-7890",
  },
  {
    id: 8,
    title: "Sales Representative",
    company: "SalesForce Pro",
    location: "Chicago, IL",
    salary: "$50,000 - $80,000",
    type: "Full-time",
    posted: "1 day ago",
    description: "Drive revenue growth through strategic client relationships...",
    phone: "(312) 555-2468",
  },
  {
    id: 9,
    title: "Cybersecurity Specialist",
    company: "SecureNet Solutions",
    location: "Washington, DC",
    salary: "$110,000 - $140,000",
    type: "Full-time",
    posted: "3 days ago",
    description: "Protect organizational assets from cyber threats and vulnerabilities...",
    phone: "(202) 555-1357",
  },
  {
    id: 10,
    title: "HR Manager",
    company: "PeopleFirst Corp",
    location: "Atlanta, GA",
    salary: "$65,000 - $85,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "Lead talent acquisition and employee development initiatives...",
    phone: "(404) 555-9876",
  },
  {
    id: 11,
    title: "Mobile App Developer",
    company: "AppCraft Studios",
    location: "Miami, FL",
    salary: "$85,000 - $115,000",
    type: "Full-time",
    posted: "4 days ago",
    description: "Develop cutting-edge mobile applications for iOS and Android...",
    phone: "(305) 555-4321",
  },
  {
    id: 12,
    title: "Financial Analyst",
    company: "FinanceWise Group",
    location: "Boston, MA",
    salary: "$70,000 - $95,000",
    type: "Full-time",
    posted: "1 day ago",
    description: "Analyze financial data and provide strategic recommendations...",
    phone: "(617) 555-8642",
  },
  {
    id: 13,
    title: "Content Writer",
    company: "ContentCraft Media",
    location: "Remote",
    salary: "$45,000 - $65,000",
    type: "Full-time",
    posted: "6 days ago",
    description: "Create engaging content across multiple digital platforms...",
    phone: "(555) 987-6543",
  },
  {
    id: 14,
    title: "Machine Learning Engineer",
    company: "AI Innovations Lab",
    location: "San Jose, CA",
    salary: "$130,000 - $170,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "Build and deploy machine learning models at scale...",
    phone: "(408) 555-1122",
  },
  {
    id: 15,
    title: "Project Manager",
    company: "ProjectPro Solutions",
    location: "Phoenix, AZ",
    salary: "$80,000 - $105,000",
    type: "Full-time",
    posted: "3 days ago",
    description: "Lead cross-functional teams to deliver projects on time and budget...",
    phone: "(602) 555-3344",
  },
  {
    id: 16,
    title: "Graphic Designer",
    company: "Visual Arts Studio",
    location: "Portland, OR",
    salary: "$55,000 - $75,000",
    type: "Full-time",
    posted: "5 days ago",
    description: "Create compelling visual designs for print and digital media...",
    phone: "(503) 555-5566",
  },
  {
    id: 17,
    title: "Backend Developer",
    company: "ServerSide Tech",
    location: "Remote",
    salary: "$90,000 - $120,000",
    type: "Full-time",
    posted: "1 day ago",
    description: "Develop robust server-side applications and APIs...",
    phone: "(555) 777-8888",
  },
  {
    id: 18,
    title: "Business Analyst",
    company: "Strategy Consultants Inc",
    location: "Dallas, TX",
    salary: "$75,000 - $100,000",
    type: "Full-time",
    posted: "4 days ago",
    description: "Analyze business processes and recommend improvements...",
    phone: "(214) 555-9900",
  },
  {
    id: 19,
    title: "Quality Assurance Engineer",
    company: "TestPro Systems",
    location: "Minneapolis, MN",
    salary: "$65,000 - $85,000",
    type: "Full-time",
    posted: "2 days ago",
    description: "Ensure software quality through comprehensive testing strategies...",
    phone: "(612) 555-1010",
  },
  {
    id: 20,
    title: "Social Media Manager",
    company: "Digital Buzz Agency",
    location: "Nashville, TN",
    salary: "$50,000 - $70,000",
    type: "Full-time",
    posted: "3 days ago",
    description: "Manage social media presence and engagement strategies...",
    phone: "(615) 555-2020",
  },
]

export default function HomePage() {
  const [searchQuery, setSearchQuery] = useState("")
  const [locationQuery, setLocationQuery] = useState("")
  const [filteredJobs, setFilteredJobs] = useState(mockJobs)

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()

    const filtered = mockJobs.filter((job) => {
      const matchesSearch =
        searchQuery === "" ||
        job.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.company.toLowerCase().includes(searchQuery.toLowerCase()) ||
        job.description.toLowerCase().includes(searchQuery.toLowerCase())

      const matchesLocation = locationQuery === "" || job.location.toLowerCase().includes(locationQuery.toLowerCase())

      return matchesSearch && matchesLocation
    })

    setFilteredJobs(filtered)
  }

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="flex items-center">
              <Building2 className="h-8 w-8 text-blue-600" />
              <span className="ml-2 text-2xl font-bold text-gray-900">JRecruiter</span>
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Dream Job</h1>
          <p className="text-xl mb-8 text-blue-100">Discover thousands of job opportunities from top companies</p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSearch} className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="Job title, keywords, or company"
                  className="pl-10 h-12 text-gray-900"
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input
                  placeholder="City, state, or remote"
                  className="pl-10 h-12 text-gray-900"
                  value={locationQuery}
                  onChange={(e) => setLocationQuery(e.target.value)}
                />
              </div>
              <Button size="lg" className="h-12 px-8" type="submit">
                Search Jobs
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Job Listings */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Latest Jobs</h2>
          <p className="text-gray-600">{filteredJobs.length} jobs found</p>
        </div>

        {filteredJobs.length > 0 ? (
          <div className="grid gap-6">
            {filteredJobs.map((job) => (
              <Card key={job.id} className="hover:shadow-lg transition-shadow cursor-pointer">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="text-xl text-blue-600 hover:text-blue-800">
                        <Link href={`/job/${job.id}`}>{job.title}</Link>
                      </CardTitle>
                      <p className="text-lg font-semibold text-gray-900 mt-1">{job.company}</p>
                    </div>
                    <Badge variant="secondary">{job.type}</Badge>
                  </div>
                </CardHeader>
                <CardContent>
                  <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
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
                      {job.posted}
                    </div>
                  </div>
                  <p className="text-gray-700 mb-4">{job.description}</p>
                  <div className="flex justify-between items-center">
                    <span className="text-sm text-gray-500">Phone: {job.phone}</span>
                    <Link href={`/job/${job.id}`}>
                      <Button>View Details</Button>
                    </Link>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        ) : (
          <div className="text-center py-12">
            <h3 className="text-xl font-medium text-gray-900 mb-2">No jobs found</h3>
            <p className="text-gray-600 mb-6">Try adjusting your search criteria</p>
            <Button
              onClick={() => {
                setSearchQuery("")
                setLocationQuery("")
                setFilteredJobs(mockJobs)
              }}
            >
              Reset Search
            </Button>
          </div>
        )}
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 mt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center mb-4">
                <Building2 className="h-6 w-6 text-blue-400" />
                <span className="ml-2 text-xl font-bold">JRecruiter</span>
              </div>
              <p className="text-gray-400">Your trusted partner in finding the perfect job opportunity.</p>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Job Seekers</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/browse" className="hover:text-white">
                    Browse Jobs
                  </Link>
                </li>
                <li>
                  <Link href="/salary" className="hover:text-white">
                    Salary Guide
                  </Link>
                </li>
                <li>
                  <Link href="/resume" className="hover:text-white">
                    Resume Builder
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">For Employers</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/post-job" className="hover:text-white">
                    Post a Job
                  </Link>
                </li>
                <li>
                  <Link href="/pricing" className="hover:text-white">
                    Pricing
                  </Link>
                </li>
                <li>
                  <Link href="/employer-resources" className="hover:text-white">
                    Resources
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-semibold mb-4">Company</h3>
              <ul className="space-y-2 text-gray-400">
                <li>
                  <Link href="/about" className="hover:text-white">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-white">
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-white">
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-gray-400">
            <p>&copy; 2024 JRecruiter. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
