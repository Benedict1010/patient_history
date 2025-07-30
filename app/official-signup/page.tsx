"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Textarea } from "@/components/ui/textarea"
import { Shield, AlertCircle } from "lucide-react"
import { Alert, AlertDescription } from "@/components/ui/alert"

export default function OfficialSignupPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const departments = [
    "Police Department",
    "Municipal Corporation",
    "Water Supply Department",
    "Electricity Board",
    "Motor Vehicle Department (MVD)",
    "Cyber Crime Cell",
    "Revenue Department",
    "Health Department",
    "Education Department",
    "Public Works Department",
  ]

  const handleSignup = async () => {
    setIsLoading(true)
    // Simulate signup process
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push("/login")
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-2xl">
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white"
          >
            <Shield className="h-8 w-8 text-blue-600" />
            <span>Grievance Hub</span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Official Access Request</p>
        </div>

        <Alert className="mb-6">
          <AlertCircle className="h-4 w-4" />
          <AlertDescription>
            Official accounts require verification. Your request will be reviewed by our admin team within 24-48 hours.
          </AlertDescription>
        </Alert>

        <Card>
          <CardHeader>
            <CardTitle>Official Registration</CardTitle>
            <CardDescription>Request access to the official portal for managing complaints</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="first-name">First Name</Label>
                <Input id="first-name" placeholder="Enter first name" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="last-name">Last Name</Label>
                <Input id="last-name" placeholder="Enter last name" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="official-email">Official Email</Label>
              <Input id="official-email" type="email" placeholder="official@department.gov.in" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="employee-id">Employee/Badge ID</Label>
              <Input id="employee-id" placeholder="Enter your official ID number" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="department">Department</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select your department" />
                </SelectTrigger>
                <SelectContent>
                  {departments.map((dept) => (
                    <SelectItem key={dept} value={dept}>
                      {dept}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="space-y-2">
                <Label htmlFor="designation">Designation</Label>
                <Input id="designation" placeholder="e.g., Inspector, Engineer" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="jurisdiction">Jurisdiction/Area</Label>
                <Input id="jurisdiction" placeholder="e.g., Mumbai Central" />
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="office-address">Office Address</Label>
              <Textarea id="office-address" placeholder="Enter complete office address" rows={3} />
            </div>

            <div className="space-y-2">
              <Label htmlFor="phone">Contact Number</Label>
              <Input id="phone" type="tel" placeholder="+91 98765 43210" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="verification-docs">Verification Documents</Label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-4 text-center">
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">
                  Upload official documents for verification
                </p>
                <p className="text-xs text-gray-500 mb-2">(ID Card, Authorization Letter, etc.)</p>
                <Button variant="outline" size="sm">
                  Choose Files
                </Button>
              </div>
            </div>

            <div className="space-y-2">
              <Label htmlFor="password">Password</Label>
              <Input id="password" type="password" placeholder="Create a strong password" />
            </div>

            <div className="space-y-2">
              <Label htmlFor="confirm-password">Confirm Password</Label>
              <Input id="confirm-password" type="password" placeholder="Confirm your password" />
            </div>

            <Button className="w-full" onClick={handleSignup} disabled={isLoading}>
              {isLoading ? "Submitting Request..." : "Submit Request"}
            </Button>

            <div className="text-center text-sm">
              Already have an account?{" "}
              <Link href="/login" className="text-blue-600 hover:underline">
                Sign in
              </Link>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
