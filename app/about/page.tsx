import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Building2, Users, Target, Award, Heart, Globe } from "lucide-react"
import Link from "next/link"

const teamMembers = [
  {
    name: "Sarah Johnson",
    role: "CEO & Founder",
    bio: "Former VP of Talent at Google with 15+ years in recruiting",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Michael Chen",
    role: "CTO",
    bio: "Ex-Amazon engineer passionate about building scalable platforms",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "Emily Rodriguez",
    role: "Head of Product",
    bio: "Product leader focused on creating exceptional user experiences",
    image: "/placeholder.svg?height=200&width=200",
  },
  {
    name: "David Kim",
    role: "VP of Sales",
    bio: "Sales executive helping companies find the right talent solutions",
    image: "/placeholder.svg?height=200&width=200",
  },
]

const stats = [
  { number: "2M+", label: "Job Seekers" },
  { number: "50K+", label: "Companies" },
  { number: "1M+", label: "Jobs Posted" },
  { number: "95%", label: "Success Rate" },
]

export default function AboutPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">About JRecruiter</h1>
          <p className="text-xl mb-8 text-blue-100 max-w-3xl mx-auto">
            We're on a mission to connect talented individuals with amazing opportunities, making the job search and
            hiring process better for everyone.
          </p>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Target className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Our Mission</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To revolutionize the way people find jobs and companies find talent through innovative technology and
                exceptional user experience.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Heart className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Our Values</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                We believe in transparency, equality, and empowering every individual to reach their full potential in
                their career journey.
              </p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Globe className="h-12 w-12 text-blue-600 mx-auto mb-4" />
              <CardTitle>Our Vision</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">
                To become the world's most trusted platform where careers are built and companies thrive through
                meaningful connections.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Stats */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Our Impact</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl font-bold text-blue-600 mb-2">{stat.number}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Meet Our Team</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {teamMembers.map((member, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
                  <Users className="h-16 w-16 text-gray-400" />
                </div>
                <CardTitle className="text-lg">{member.name}</CardTitle>
                <p className="text-blue-600 font-medium">{member.role}</p>
              </CardHeader>
              <CardContent>
                <p className="text-gray-600 text-sm">{member.bio}</p>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Company Story */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-8">Our Story</h2>
          <div className="prose prose-lg mx-auto text-gray-600">
            <p>
              JRecruiter was founded in 2020 with a simple idea: job searching and hiring should be easier, more
              transparent, and more effective for everyone involved. Our founders, having experienced the frustrations
              of traditional job boards firsthand, set out to create something better.
            </p>
            <p>
              Starting as a small team of passionate individuals, we've grown into a platform that serves millions of
              job seekers and thousands of companies worldwide. Our focus has always been on creating genuine
              connections between talented individuals and great opportunities.
            </p>
            <p>
              Today, we continue to innovate and improve our platform, always keeping our users at the center of
              everything we do. We're proud to have helped countless people find their dream jobs and assisted companies
              in building amazing teams.
            </p>
          </div>
        </div>
      </section>

      {/* Awards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Recognition & Awards</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>Best Job Board 2023</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Recognized by HR Tech Awards for innovation in recruitment technology</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>Top Startup 2022</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Featured in TechCrunch's list of most promising HR technology startups</p>
            </CardContent>
          </Card>

          <Card className="text-center">
            <CardHeader>
              <Award className="h-12 w-12 text-yellow-500 mx-auto mb-4" />
              <CardTitle>User Choice Award</CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-gray-600">Highest rated job platform by users for ease of use and effectiveness</p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Join Our Mission</h2>
          <p className="text-xl mb-8 text-blue-100">
            Whether you're looking for your next opportunity or seeking great talent, we're here to help.
          </p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Find Jobs
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Post a Job
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
