import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Users, Shield, Eye, Clock, CheckCircle, AlertTriangle } from "lucide-react"

export default function LandingPage() {
  const stats = [
    { label: "Total Complaints", value: "2,847", icon: AlertTriangle },
    { label: "Resolved Issues", value: "1,923", icon: CheckCircle },
    { label: "Active Users", value: "15,432", icon: Users },
    { label: "Response Time", value: "2.3 days", icon: Clock },
  ]

  const features = [
    {
      title: "Public Transparency",
      description: "All complaints are publicly visible, ensuring accountability and transparency in governance.",
      icon: Eye,
    },
    {
      title: "Multi-Authority Support",
      description: "Submit complaints to various authorities including Police, Electricity, Water, MVD, and more.",
      icon: Shield,
    },
    {
      title: "Real-time Updates",
      description: "Track your complaint status and receive updates from authorities in real-time.",
      icon: Clock,
    },
  ]

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Grievance Hub</h1>
          </div>
          <nav className="flex items-center space-x-4">
            <Link href="/complaints">
              <Button variant="ghost">View Complaints</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
            <Link href="/signup">
              <Button>Get Started</Button>
            </Link>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <Badge className="mb-4" variant="secondary">
            Empowering Citizens Through Transparency
          </Badge>
          <h2 className="text-5xl font-bold text-gray-900 dark:text-white mb-6">
            Your Voice, <span className="text-blue-600">Heard</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 max-w-3xl mx-auto">
            A public platform where citizens can raise complaints about government authorities. Every complaint is
            visible to the public until resolved, ensuring accountability and transparency.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/submit-complaint">
              <Button size="lg" className="px-8">
                Submit Complaint
              </Button>
            </Link>
            <Link href="/complaints">
              <Button size="lg" variant="outline" className="px-8 bg-transparent">
                Browse Complaints
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 px-4 bg-white dark:bg-gray-900">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <Card key={index} className="text-center">
                <CardContent className="pt-6">
                  <stat.icon className="h-8 w-8 mx-auto mb-2 text-blue-600" />
                  <div className="text-3xl font-bold text-gray-900 dark:text-white mb-1">{stat.value}</div>
                  <div className="text-sm text-gray-600 dark:text-gray-400">{stat.label}</div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h3 className="text-3xl font-bold text-gray-900 dark:text-white mb-4">How It Works</h3>
            <p className="text-lg text-gray-600 dark:text-gray-300 max-w-2xl mx-auto">
              Our platform ensures transparency and accountability in governance through public visibility of all
              complaints.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="text-center">
                <CardHeader>
                  <feature.icon className="h-12 w-12 mx-auto mb-4 text-blue-600" />
                  <CardTitle>{feature.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">{feature.description}</CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 bg-blue-600 text-white">
        <div className="container mx-auto text-center">
          <h3 className="text-3xl font-bold mb-4">Ready to Make Your Voice Heard?</h3>
          <p className="text-xl mb-8 opacity-90">
            Join thousands of citizens working towards better governance and accountability.
          </p>
          <div className="flex justify-center space-x-4">
            <Link href="/signup">
              <Button size="lg" variant="secondary" className="px-8">
                Sign Up as Citizen
              </Button>
            </Link>
            <Link href="/official-signup">
              <Button
                size="lg"
                variant="outline"
                className="px-8 text-white border-white hover:bg-white hover:text-blue-600 bg-transparent"
              >
                Official Login
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-4">
            <Shield className="h-6 w-6" />
            <span className="text-lg font-semibold">Grievance Hub</span>
          </div>
          <p className="text-gray-400">Empowering citizens through transparency and accountability.</p>
        </div>
      </footer>
    </div>
  )
}
