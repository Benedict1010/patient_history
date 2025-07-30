"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Badge } from "@/components/ui/badge"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Shield, Search, Filter, MapPin, Calendar, User, Eye } from "lucide-react"

export default function ComplaintsPage() {
  const [searchTerm, setSearchTerm] = useState("")
  const [statusFilter, setStatusFilter] = useState("all")
  const [authorityFilter, setAuthorityFilter] = useState("all")

  // Mock complaint data
  const complaints = [
    {
      id: "GH001",
      title: "Street Light Not Working",
      description:
        "The street light on MG Road has been non-functional for over a week, causing safety concerns for pedestrians.",
      location: "MG Road, Mumbai, Maharashtra",
      authority: "Municipal Corporation",
      status: "Open",
      date: "2024-01-15",
      submittedBy: "Rahul Sharma",
      views: 234,
      hasEvidence: true,
    },
    {
      id: "GH002",
      title: "Water Supply Disruption",
      description:
        "No water supply in our area for the past 3 days. Multiple complaints to the water department have gone unanswered.",
      location: "Sector 15, Delhi",
      authority: "Water Supply Department",
      status: "In Progress",
      date: "2024-01-14",
      submittedBy: "Priya Patel",
      views: 456,
      hasEvidence: false,
    },
    {
      id: "GH003",
      title: "Traffic Signal Malfunction",
      description:
        "Traffic signal at the main intersection has been malfunctioning, causing traffic jams and accidents.",
      location: "Brigade Road, Bangalore, Karnataka",
      authority: "Police Department",
      status: "Resolved",
      date: "2024-01-13",
      submittedBy: "Amit Kumar",
      views: 189,
      hasEvidence: true,
    },
    {
      id: "GH004",
      title: "Electricity Bill Discrepancy",
      description:
        "Received an unusually high electricity bill without any increase in usage. Need clarification and correction.",
      location: "Anna Nagar, Chennai, Tamil Nadu",
      authority: "Electricity Board",
      status: "Open",
      date: "2024-01-12",
      submittedBy: "Lakshmi Iyer",
      views: 123,
      hasEvidence: true,
    },
    {
      id: "GH005",
      title: "Road Pothole Repair Needed",
      description: "Large potholes on the main road are causing damage to vehicles and creating traffic hazards.",
      location: "SG Highway, Ahmedabad, Gujarat",
      authority: "Public Works Department",
      status: "In Progress",
      date: "2024-01-11",
      submittedBy: "Vikram Shah",
      views: 345,
      hasEvidence: true,
    },
  ]

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Open":
        return "destructive"
      case "In Progress":
        return "default"
      case "Resolved":
        return "secondary"
      default:
        return "outline"
    }
  }

  const filteredComplaints = complaints.filter((complaint) => {
    const matchesSearch =
      complaint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.location.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || complaint.status.toLowerCase() === statusFilter.toLowerCase()
    const matchesAuthority = authorityFilter === "all" || complaint.authority === authorityFilter

    return matchesSearch && matchesStatus && matchesAuthority
  })

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Grievance Hub</h1>
          </Link>
          <nav className="flex items-center space-x-4">
            <Link href="/submit-complaint">
              <Button>Submit Complaint</Button>
            </Link>
            <Link href="/login">
              <Button variant="outline">Login</Button>
            </Link>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Public Complaints</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Browse all public complaints submitted by citizens across the country
          </p>
        </div>

        {/* Search and Filters */}
        <div className="mb-8 space-y-4">
          <div className="flex flex-col md:flex-row gap-4">
            <div className="flex-1 relative">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
              <Input
                placeholder="Search complaints..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="pl-10"
              />
            </div>
            <Select value={statusFilter} onValueChange={setStatusFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by Status" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Status</SelectItem>
                <SelectItem value="open">Open</SelectItem>
                <SelectItem value="in progress">In Progress</SelectItem>
                <SelectItem value="resolved">Resolved</SelectItem>
              </SelectContent>
            </Select>
            <Select value={authorityFilter} onValueChange={setAuthorityFilter}>
              <SelectTrigger className="w-full md:w-48">
                <SelectValue placeholder="Filter by Authority" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="all">All Authorities</SelectItem>
                <SelectItem value="Police Department">Police Department</SelectItem>
                <SelectItem value="Municipal Corporation">Municipal Corporation</SelectItem>
                <SelectItem value="Water Supply Department">Water Supply Department</SelectItem>
                <SelectItem value="Electricity Board">Electricity Board</SelectItem>
                <SelectItem value="Public Works Department">Public Works Department</SelectItem>
              </SelectContent>
            </Select>
          </div>
        </div>

        {/* Complaints List */}
        <div className="space-y-6">
          {filteredComplaints.map((complaint) => (
            <Card key={complaint.id} className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <div className="flex justify-between items-start">
                  <div className="flex-1">
                    <div className="flex items-center space-x-2 mb-2">
                      <Badge variant="outline">#{complaint.id}</Badge>
                      <Badge variant={getStatusColor(complaint.status)}>{complaint.status}</Badge>
                      {complaint.hasEvidence && <Badge variant="secondary">Has Evidence</Badge>}
                    </div>
                    <CardTitle className="text-xl mb-2">{complaint.title}</CardTitle>
                    <CardDescription className="text-base">{complaint.description}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 text-sm text-gray-600 dark:text-gray-400">
                  <div className="flex items-center space-x-2">
                    <MapPin className="h-4 w-4" />
                    <span>{complaint.location}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Shield className="h-4 w-4" />
                    <span>{complaint.authority}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(complaint.date).toLocaleDateString()}</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <Eye className="h-4 w-4" />
                    <span>{complaint.views} views</span>
                  </div>
                </div>
                <div className="mt-4 flex items-center justify-between">
                  <div className="flex items-center space-x-2 text-sm text-gray-500">
                    <User className="h-4 w-4" />
                    <span>Submitted by {complaint.submittedBy}</span>
                  </div>
                  <Button variant="outline" size="sm">
                    View Details
                  </Button>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {filteredComplaints.length === 0 && (
          <div className="text-center py-12">
            <Filter className="h-12 w-12 mx-auto text-gray-400 mb-4" />
            <h3 className="text-lg font-semibold text-gray-900 dark:text-white mb-2">No complaints found</h3>
            <p className="text-gray-600 dark:text-gray-400">Try adjusting your search or filter criteria</p>
          </div>
        )}
      </div>
    </div>
  )
}
