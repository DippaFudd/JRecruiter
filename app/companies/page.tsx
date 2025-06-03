import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Input } from "@/components/ui/input"
import { Building2, MapPin, Users, Search, Star } from "lucide-react"
import Link from "next/link"

const mockCompanies = [
  {
    id: 1,
    name: "TechFlow Solutions",
    industry: "Technology",
    location: "San Francisco, CA",
    employees: "500-1000",
    rating: 4.5,
    openJobs: 12,
    description: "Leading provider of cloud-based software solutions for enterprise clients.",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 2,
    name: "BrandVision Inc",
    industry: "Marketing",
    location: "New York, NY",
    employees: "200-500",
    rating: 4.2,
    openJobs: 8,
    description: "Creative marketing agency specializing in brand development and digital campaigns.",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 3,
    name: "DesignCraft Studio",
    industry: "Design",
    location: "Austin, TX",
    employees: "50-200",
    rating: 4.7,
    openJobs: 5,
    description: "Award-winning design studio creating exceptional user experiences.",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 4,
    name: "DataInsights Corp",
    industry: "Analytics",
    location: "Seattle, WA",
    employees: "1000+",
    rating: 4.3,
    openJobs: 15,
    description: "Data analytics company helping businesses make informed decisions.",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 5,
    name: "InnovateTech",
    industry: "Technology",
    location: "Los Angeles, CA",
    employees: "200-500",
    rating: 4.4,
    openJobs: 10,
    description: "Innovative technology company developing cutting-edge products.",
    logo: "/placeholder.svg?height=80&width=80",
  },
  {
    id: 6,
    name: "WebCraft Solutions",
    industry: "Web Development",
    location: "Remote",
    employees: "100-200",
    rating: 4.6,
    openJobs: 7,
    description: "Full-service web development agency building modern applications.",
    logo: "/placeholder.svg?height=80&width=80",
  },
]

export default function CompaniesPage() {
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
              <Link href="/companies" className="text-blue-600 font-medium">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Explore Companies</h1>
          <p className="text-xl mb-8 text-blue-100">Discover great places to work and learn about company culture</p>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="flex gap-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="Search companies..." className="pl-10 h-12 text-gray-900" />
              </div>
              <Button size="lg" className="h-12 px-8">
                Search
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Companies Grid */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex justify-between items-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900">Featured Companies</h2>
          <p className="text-gray-600">{mockCompanies.length} companies</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {mockCompanies.map((company) => (
            <Card key={company.id} className="hover:shadow-lg transition-shadow">
              <CardHeader className="text-center">
                <div className="w-20 h-20 mx-auto mb-4 bg-gray-100 rounded-lg flex items-center justify-center">
                  <Building2 className="h-10 w-10 text-blue-600" />
                </div>
                <CardTitle className="text-xl">{company.name}</CardTitle>
                <div className="flex items-center justify-center gap-1 mt-2">
                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                  <span className="text-sm font-medium">{company.rating}</span>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Badge variant="secondary">{company.industry}</Badge>
                  <div className="flex items-center text-sm text-gray-600">
                    <MapPin className="h-4 w-4 mr-1" />
                    {company.location}
                  </div>
                  <div className="flex items-center text-sm text-gray-600">
                    <Users className="h-4 w-4 mr-1" />
                    {company.employees} employees
                  </div>
                </div>
                <p className="text-sm text-gray-700">{company.description}</p>
                <div className="flex justify-between items-center pt-4">
                  <span className="text-sm font-medium text-blue-600">{company.openJobs} open jobs</span>
                  <Button variant="outline" size="sm">
                    View Company
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>
    </div>
  )
}
