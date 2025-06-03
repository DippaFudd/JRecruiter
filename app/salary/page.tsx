import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Building2, Search, TrendingUp, DollarSign, MapPin } from "lucide-react"
import Link from "next/link"

const salaryData = [
  {
    title: "Software Engineer",
    avgSalary: "$95,000",
    range: "$70,000 - $130,000",
    growth: "+8%",
    location: "National Average",
  },
  {
    title: "Product Manager",
    avgSalary: "$115,000",
    range: "$85,000 - $150,000",
    growth: "+12%",
    location: "National Average",
  },
  {
    title: "Data Scientist",
    avgSalary: "$105,000",
    range: "$80,000 - $140,000",
    growth: "+15%",
    location: "National Average",
  },
  {
    title: "UX Designer",
    avgSalary: "$75,000",
    range: "$55,000 - $100,000",
    growth: "+10%",
    location: "National Average",
  },
  {
    title: "Marketing Manager",
    avgSalary: "$85,000",
    range: "$60,000 - $110,000",
    growth: "+6%",
    location: "National Average",
  },
  {
    title: "DevOps Engineer",
    avgSalary: "$110,000",
    range: "$85,000 - $145,000",
    growth: "+18%",
    location: "National Average",
  },
]

const topPayingCities = [
  { city: "San Francisco, CA", avgSalary: "$145,000", costOfLiving: "Very High" },
  { city: "New York, NY", avgSalary: "$125,000", costOfLiving: "Very High" },
  { city: "Seattle, WA", avgSalary: "$115,000", costOfLiving: "High" },
  { city: "Los Angeles, CA", avgSalary: "$110,000", costOfLiving: "High" },
  { city: "Boston, MA", avgSalary: "$105,000", costOfLiving: "High" },
  { city: "Austin, TX", avgSalary: "$95,000", costOfLiving: "Medium" },
]

export default function SalaryPage() {
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
              <Link href="/salary" className="text-blue-600 font-medium">
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Salary Insights</h1>
          <p className="text-xl mb-8 text-blue-100">Research salaries and negotiate with confidence</p>

          {/* Search Bar */}
          <div className="max-w-4xl mx-auto">
            <div className="flex flex-col md:flex-row gap-4 bg-white p-4 rounded-lg shadow-lg">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-3 h-5 w-5 text-gray-400" />
                <Input placeholder="Job title" className="pl-10 h-12 text-gray-900" />
              </div>
              <div className="flex-1">
                <Select>
                  <SelectTrigger className="h-12 text-gray-900">
                    <SelectValue placeholder="Location" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="national">National Average</SelectItem>
                    <SelectItem value="sf">San Francisco, CA</SelectItem>
                    <SelectItem value="ny">New York, NY</SelectItem>
                    <SelectItem value="seattle">Seattle, WA</SelectItem>
                    <SelectItem value="la">Los Angeles, CA</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Button size="lg" className="h-12 px-8">
                Search Salaries
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Salary Data */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Popular Job Salaries</h2>

        <div className="grid gap-6">
          {salaryData.map((job, index) => (
            <Card key={index} className="hover:shadow-lg transition-shadow">
              <CardContent className="p-6">
                <div className="flex justify-between items-center">
                  <div>
                    <h3 className="text-xl font-semibold text-gray-900">{job.title}</h3>
                    <div className="flex items-center text-sm text-gray-600 mt-1">
                      <MapPin className="h-4 w-4 mr-1" />
                      {job.location}
                    </div>
                  </div>
                  <div className="text-right">
                    <div className="text-2xl font-bold text-green-600">{job.avgSalary}</div>
                    <div className="text-sm text-gray-600">Average</div>
                  </div>
                  <div className="text-right">
                    <div className="text-lg font-medium text-gray-900">{job.range}</div>
                    <div className="text-sm text-gray-600">Range</div>
                  </div>
                  <div className="text-right">
                    <div className="flex items-center text-lg font-medium text-green-600">
                      <TrendingUp className="h-4 w-4 mr-1" />
                      {job.growth}
                    </div>
                    <div className="text-sm text-gray-600">Growth</div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Top Paying Cities */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <h2 className="text-3xl font-bold text-gray-900 mb-8">Top Paying Cities</h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {topPayingCities.map((city, index) => (
            <Card key={index}>
              <CardHeader>
                <CardTitle className="flex items-center">
                  <MapPin className="h-5 w-5 mr-2 text-blue-600" />
                  {city.city}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-2">
                  <div className="flex justify-between">
                    <span className="text-gray-600">Average Salary:</span>
                    <span className="font-semibold text-green-600">{city.avgSalary}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-gray-600">Cost of Living:</span>
                    <span className="font-medium">{city.costOfLiving}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* Salary Calculator */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">Salary Calculator</h2>
          <p className="text-lg text-gray-600 mb-8">
            Calculate your potential earnings based on experience, location, and skills
          </p>
          <Button size="lg" className="px-8">
            <DollarSign className="h-5 w-5 mr-2" />
            Launch Calculator
          </Button>
        </div>
      </section>
    </div>
  )
}
