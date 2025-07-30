"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Upload, ArrowLeft } from "lucide-react"

export default function SubmitComplaintPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)
  const [selectedState, setSelectedState] = useState("")
  const [selectedDistrict, setSelectedDistrict] = useState("")

  const states = ["Maharashtra", "Delhi", "Karnataka", "Tamil Nadu", "Gujarat"]
  const districts = {
    Maharashtra: ["Mumbai", "Pune", "Nagpur", "Nashik"],
    Delhi: ["Central Delhi", "North Delhi", "South Delhi", "East Delhi"],
    Karnataka: ["Bangalore", "Mysore", "Hubli", "Mangalore"],
    "Tamil Nadu": ["Chennai", "Coimbatore", "Madurai", "Salem"],
    Gujarat: ["Ahmedabad", "Surat", "Vadodara", "Rajkot"],
  }

  const authorities = [
    "Police Department",
    "Electricity Board",
    "Water Supply Department",
    "Motor Vehicle Department (MVD)",
    "Cyber Crime Cell",
    "Municipal Corporation",
    "Revenue Department",
    "Health Department",
    "Education Department",
    "Public Works Department",
  ]

  const handleSubmit = async () => {
    setIsLoading(true)
    // Simulate complaint submission
    await new Promise((resolve) => setTimeout(resolve, 2000))
    router.push("/complaints")
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 p-4">
      <div className="container mx-auto max-w-2xl">
        <div className="mb-6">
          <Link href="/" className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-800">
            <ArrowLeft className="h-4 w-4" />
            <span>Back to Home</span>
          </Link>
        </div>

        <div className="text-center mb-8">
          <div className="inline-flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white mb-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <span>Submit Complaint</span>
          </div>
          <p className="text-gray-600 dark:text-gray-400">Report issues with government authorities publicly</p>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>New Complaint</CardTitle>
            <CardDescription>
              Fill out the form below to submit your complaint. All complaints are public and visible to everyone.
            </CardDescription>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Location Selection */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Location Details</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="state">State</Label>
                  <Select value={selectedState} onValueChange={setSelectedState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select State" />
                    </SelectTrigger>
                    <SelectContent>
                      {states.map((state) => (
                        <SelectItem key={state} value={state}>
                          {state}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="district">District</Label>
                  <Select value={selectedDistrict} onValueChange={setSelectedDistrict} disabled={!selectedState}>
                    <SelectTrigger>
                      <SelectValue placeholder="Select District" />
                    </SelectTrigger>
                    <SelectContent>
                      {selectedState &&
                        districts[selectedState as keyof typeof districts]?.map((district) => (
                          <SelectItem key={district} value={district}>
                            {district}
                          </SelectItem>
                        ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <Label htmlFor="area">Local Area</Label>
                  <Input id="area" placeholder="Enter area/locality" />
                </div>
              </div>
            </div>

            {/* Authority Selection */}
            <div className="space-y-2">
              <Label htmlFor="authority">Authority Type</Label>
              <Select>
                <SelectTrigger>
                  <SelectValue placeholder="Select Authority" />
                </SelectTrigger>
                <SelectContent>
                  {authorities.map((authority) => (
                    <SelectItem key={authority} value={authority}>
                      {authority}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>

            {/* Complaint Details */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Complaint Details</h3>
              <div className="space-y-2">
                <Label htmlFor="title">Complaint Title</Label>
                <Input id="title" placeholder="Brief title for your complaint" />
              </div>
              <div className="space-y-2">
                <Label htmlFor="description">Description</Label>
                <Textarea id="description" placeholder="Provide detailed description of the issue..." rows={6} />
              </div>
            </div>

            {/* File Upload */}
            <div className="space-y-2">
              <Label htmlFor="evidence">Upload Evidence (Photos/Videos)</Label>
              <div className="border-2 border-dashed border-gray-300 dark:border-gray-600 rounded-lg p-6 text-center">
                <Upload className="h-8 w-8 mx-auto mb-2 text-gray-400" />
                <p className="text-sm text-gray-600 dark:text-gray-400 mb-2">Click to upload or drag and drop</p>
                <p className="text-xs text-gray-500">PNG, JPG, MP4 up to 10MB</p>
                <Input type="file" className="hidden" id="file-upload" multiple accept="image/*,video/*" />
                <Button
                  variant="outline"
                  className="mt-2 bg-transparent"
                  onClick={() => document.getElementById("file-upload")?.click()}
                >
                  Choose Files
                </Button>
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-4">
              <Button className="w-full" size="lg" onClick={handleSubmit} disabled={isLoading}>
                {isLoading ? "Submitting Complaint..." : "Submit Complaint"}
              </Button>
              <p className="text-xs text-gray-500 mt-2 text-center">
                By submitting, you agree that this complaint will be publicly visible
              </p>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  )
}
