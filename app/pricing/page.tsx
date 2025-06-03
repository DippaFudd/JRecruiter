import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Building2, Check, Star } from "lucide-react"
import Link from "next/link"

const pricingPlans = [
  {
    name: "Job Seeker",
    price: "Free",
    period: "Forever",
    description: "Perfect for individual job seekers",
    features: ["Unlimited job applications", "Resume builder", "Job alerts", "Basic profile", "Email support"],
    popular: false,
  },
  {
    name: "Employer Basic",
    price: "$99",
    period: "per job posting",
    description: "Great for small businesses",
    features: [
      "30-day job posting",
      "Applicant tracking",
      "Basic analytics",
      "Email notifications",
      "Standard support",
    ],
    popular: false,
  },
  {
    name: "Employer Pro",
    price: "$199",
    period: "per job posting",
    description: "Most popular for growing companies",
    features: [
      "60-day job posting",
      "Featured listing",
      "Advanced analytics",
      "Priority support",
      "Candidate screening tools",
      "Multiple team members",
    ],
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    period: "Contact us",
    description: "For large organizations",
    features: [
      "Unlimited job postings",
      "Custom branding",
      "API access",
      "Dedicated account manager",
      "Advanced integrations",
      "Custom reporting",
    ],
    popular: false,
  },
]

export default function PricingPage() {
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
          <h1 className="text-4xl md:text-6xl font-bold mb-6">Simple, Transparent Pricing</h1>
          <p className="text-xl mb-8 text-blue-100">Choose the plan that works best for you</p>
        </div>
      </section>

      {/* Pricing Cards */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {pricingPlans.map((plan, index) => (
            <Card key={index} className={`relative ${plan.popular ? "border-blue-600 border-2" : ""}`}>
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 transform -translate-x-1/2">
                  <Badge className="bg-blue-600 text-white px-3 py-1">
                    <Star className="h-3 w-3 mr-1" />
                    Most Popular
                  </Badge>
                </div>
              )}
              <CardHeader className="text-center">
                <CardTitle className="text-xl">{plan.name}</CardTitle>
                <div className="mt-4">
                  <span className="text-4xl font-bold">{plan.price}</span>
                  {plan.period !== "Contact us" && <span className="text-gray-600">/{plan.period}</span>}
                </div>
                <p className="text-gray-600 mt-2">{plan.description}</p>
              </CardHeader>
              <CardContent>
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-4 w-4 text-green-600 mr-2 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Button className={`w-full ${plan.popular ? "bg-blue-600 hover:bg-blue-700" : ""}`}>
                  {plan.price === "Custom" ? "Contact Sales" : "Get Started"}
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </section>

      {/* FAQ Section */}
      <section className="bg-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">Frequently Asked Questions</h2>

          <div className="space-y-8">
            <div>
              <h3 className="text-lg font-semibold mb-2">How long do job postings stay active?</h3>
              <p className="text-gray-600">
                Job postings stay active for 30 days with Basic plan, 60 days with Pro plan, and can be customized with
                Enterprise plans.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Can I edit my job posting after it's published?</h3>
              <p className="text-gray-600">
                Yes, you can edit your job posting at any time while it's active. Changes are reflected immediately on
                the platform.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Do you offer refunds?</h3>
              <p className="text-gray-600">
                We offer a 7-day money-back guarantee if you're not satisfied with our service. Contact support for
                assistance.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">Can I upgrade or downgrade my plan?</h3>
              <p className="text-gray-600">
                Yes, you can change your plan at any time. Upgrades take effect immediately, and downgrades take effect
                at the next billing cycle.
              </p>
            </div>

            <div>
              <h3 className="text-lg font-semibold mb-2">
                Is there a limit to the number of applications I can receive?
              </h3>
              <p className="text-gray-600">
                No, there's no limit to the number of applications you can receive for your job postings.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-blue-600 text-white py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
          <p className="text-xl mb-8 text-blue-100">Join thousands of companies and job seekers who trust JRecruiter</p>
          <div className="flex justify-center gap-4">
            <Button size="lg" className="bg-white text-blue-600 hover:bg-gray-100">
              Start Free Trial
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white hover:text-blue-600">
              Contact Sales
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
