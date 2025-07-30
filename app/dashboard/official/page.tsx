"use client"

import { useState } from "react"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import {
  Shield,
  Search,
  Filter,
  MapPin,
  Calendar,
  User,
  Eye,
  MessageSquare,
  Clock,
  CheckCircle,
  AlertTriangle,
} from "lucide-react"

export default function OfficialDashboard() {
  const [activeTab, setActiveTab] = useState("overview")
  const [statusFilter, setStatusFilter] = useState("all")
  const [searchTerm, setSearchTerm] = useState("")

  // Mock official data
  const official = {
    name: "Inspector Rajesh Kumar",
    department: "Municipal Corporation",
    jurisdiction: "Mumbai Central",
    badgeNumber: "MC001",
    assignedComplaints: 12,
    resolvedComplaints: 8,
    pendingComplaints: 4,
  }

  // Mock complaints assigned to this official
  const assignedComplaints = [
    {
      id: "GH001",
      title: "Street Light Not Working",
      description: "The street light on MG Road has been non-functional for over a week.",
      location: "MG Road, Mumbai, Maharashtra",
      status: "Open",
      date: "2024-01-15",
      submittedBy: "Rahul Sharma",
      priority: "Medium",
      views: 234,
      lastUpdate: null,
    },
    {
      id: "GH008",
      title: "Pothole on Main Road",
      description: "Large pothole causing traffic issues and vehicle damage.",
      location: "FC Road, Mumbai, Maharashtra",
      status: "In Progress",
      date: "2024-01-12",
      submittedBy: "Priya Patel",
      priority: "High",
      views: 189,
      lastUpdate: "2024-01-16",
    },
    {
      id: "GH009",
      title: "Garbage Collection Delay",
      description: "Garbage not collected for 3 days in residential area.",
      location: "Bandra West, Mumbai, Maharashtra",
      status: "Open",
      date: "2024-01-14",
      submittedBy: "Amit Singh",
      priority: "Low",
      views: 156,
      lastUpdate: null,
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

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High":
        return "destructive"
      case "Medium":
        return "default"
      case "Low":
        return "secondary"
      default:
        return "outline"
    }
  }

  const filteredComplaints = assignedComplaints.filter((complaint) => {
    const matchesSearch =
      complaint.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      complaint.description.toLowerCase().includes(searchTerm.toLowerCase())
    const matchesStatus = statusFilter === "all" || complaint.status.toLowerCase() === statusFilter.toLowerCase()

    return matchesSearch && matchesStatus
  })

  const handleStatusUpdate = (complaintId: string, newStatus: string) => {
    // Handle status update logic here
    console.log(`Updating complaint ${complaintId} to ${newStatus}`)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800">
      {/* Header */}
      <header className="border-b bg-white/80 backdrop-blur-sm dark:bg-gray-900/80">
        <div className="container mx-auto px-4 py-4 flex justify-between items-center">
          <Link href="/" className="flex items-center space-x-2">
            <Shield className="h-8 w-8 text-blue-600" />
            <h1 className="text-2xl font-bold text-gray-900 dark:text-white">Grievance Hub</h1>
            <Badge variant="outline" className="ml-2">
              Official Portal
            </Badge>
          </Link>
          <nav className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <Shield className="h-5 w-5 text-gray-600" />
              <div className="text-right">
                <div className="text-sm font-medium">{official.name}</div>
                <div className="text-xs text-gray-500">{official.department}</div>
              </div>
            </div>
          </nav>
        </div>
      </header>

      <div className="container mx-auto px-4 py-8">
        <div className="mb-8">
          <h2 className="text-3xl font-bold text-gray-900 dark:text-white mb-2">Official Dashboard</h2>
          <p className="text-gray-600 dark:text-gray-400">
            Manage complaints assigned to your jurisdiction: {official.jurisdiction}
          </p>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
          <TabsList className="grid w-full grid-cols-3">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="complaints">Assigned Complaints</TabsTrigger>
            <TabsTrigger value="updates">Post Updates</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Assigned Complaints</CardTitle>
                  <AlertTriangle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{official.assignedComplaints}</div>
                  <p className="text-xs text-muted-foreground">In your jurisdiction</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Resolved</CardTitle>
                  <CheckCircle className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{official.resolvedComplaints}</div>
                  <p className="text-xs text-muted-foreground">Successfully resolved</p>
                </CardContent>
              </Card>
              <Card>
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Pending</CardTitle>
                  <Clock className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">{official.pendingComplaints}</div>
                  <p className="text-xs text-muted-foreground">Require attention</p>
                </CardContent>
              </Card>
            </div>

            {/* Official Info */}
            <Card>
              <CardHeader>
                <CardTitle>Official Information</CardTitle>
                <CardDescription>Your official details and jurisdiction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium">Name</label>
                    <p className="text-sm text-gray-600 mt-1">{official.name}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Department</label>
                    <p className="text-sm text-gray-600 mt-1">{official.department}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Badge Number</label>
                    <p className="text-sm text-gray-600 mt-1">{official.badgeNumber}</p>
                  </div>
                  <div>
                    <label className="text-sm font-medium">Jurisdiction</label>
                    <p className="text-sm text-gray-600 mt-1">{official.jurisdiction}</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
                <CardDescription>Latest updates on complaints in your jurisdiction</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-blue-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Status updated for complaint #GH008</p>
                      <p className="text-xs text-gray-500">2 hours ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-orange-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">New complaint #GH009 assigned</p>
                      <p className="text-xs text-gray-500">1 day ago</p>
                    </div>
                  </div>
                  <div className="flex items-center space-x-4">
                    <div className="w-2 h-2 bg-green-500 rounded-full"></div>
                    <div className="flex-1">
                      <p className="text-sm font-medium">Complaint #GH007 marked as resolved</p>
                      <p className="text-xs text-gray-500">2 days ago</p>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="complaints" className="space-y-6">
            {/* Search and Filters */}
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 h-4 w-4" />
                <Input
                  placeholder="Search assigned complaints..."
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
            </div>

            {/* Complaints List */}
            <div className="space-y-4">
              {filteredComplaints.map((complaint) => (
                <Card key={complaint.id}>
                  <CardHeader>
                    <div className="flex justify-between items-start">
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-2">
                          <Badge variant="outline">#{complaint.id}</Badge>
                          <Badge variant={getStatusColor(complaint.status)}>{complaint.status}</Badge>
                          <Badge variant={getPriorityColor(complaint.priority)}>{complaint.priority} Priority</Badge>
                        </div>
                        <CardTitle className="text-lg">{complaint.title}</CardTitle>
                        <CardDescription className="text-base">{complaint.description}</CardDescription>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-sm text-gray-600 dark:text-gray-400 mb-4">
                      <div className="flex items-center space-x-2">
                        <MapPin className="h-4 w-4" />
                        <span>{complaint.location}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(complaint.date).toLocaleDateString()}</span>
                      </div>
                      <div className="flex items-center space-x-2">
                        <User className="h-4 w-4" />
                        <span>By {complaint.submittedBy}</span>
                      </div>
                    </div>
                    <div className="flex justify-between items-center">
                      <div className="flex items-center space-x-4 text-sm text-gray-600">
                        <div className="flex items-center space-x-1">
                          <Eye className="h-4 w-4" />
                          <span>{complaint.views} views</span>
                        </div>
                        {complaint.lastUpdate && (
                          <div className="flex items-center space-x-1">
                            <MessageSquare className="h-4 w-4" />
                            <span>Updated {new Date(complaint.lastUpdate).toLocaleDateString()}</span>
                          </div>
                        )}
                      </div>
                      <div className="flex space-x-2">
                        <Select onValueChange={(value) => handleStatusUpdate(complaint.id, value)}>
                          <SelectTrigger className="w-32">
                            <SelectValue placeholder="Update Status" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="open">Open</SelectItem>
                            <SelectItem value="in-progress">In Progress</SelectItem>
                            <SelectItem value="resolved">Resolved</SelectItem>
                          </SelectContent>
                        </Select>
                        <Button variant="outline" size="sm">
                          View Details
                        </Button>
                      </div>
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
          </TabsContent>

          <TabsContent value="updates" className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle>Post Public Update</CardTitle>
                <CardDescription>Share updates on complaint progress with the public for transparency</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Select Complaint</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Choose a complaint to update" />
                    </SelectTrigger>
                    <SelectContent>
                      {assignedComplaints.map((complaint) => (
                        <SelectItem key={complaint.id} value={complaint.id}>
                          #{complaint.id} - {complaint.title}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Update Status</label>
                  <Select>
                    <SelectTrigger>
                      <SelectValue placeholder="Select new status" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="open">Open</SelectItem>
                      <SelectItem value="in-progress">In Progress</SelectItem>
                      <SelectItem value="resolved">Resolved</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Public Update Message</label>
                  <Textarea
                    placeholder="Provide details about the progress, actions taken, or resolution..."
                    rows={4}
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Expected Resolution Date (Optional)</label>
                  <Input type="date" />
                </div>
                <Button className="w-full">Post Update</Button>
              </CardContent>
            </Card>

            {/* Recent Updates */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Updates Posted</CardTitle>
                <CardDescription>Your recent public updates on complaints</CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <div className="border-l-4 border-blue-500 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Complaint #GH008 - Pothole on Main Road</h4>
                      <span className="text-xs text-gray-500">2 hours ago</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Work has begun on filling the pothole. Road repair crew has been dispatched and work is expected
                      to complete by tomorrow evening.
                    </p>
                    <Badge variant="default">In Progress</Badge>
                  </div>
                  <div className="border-l-4 border-green-500 pl-4">
                    <div className="flex justify-between items-start mb-2">
                      <h4 className="font-medium">Complaint #GH007 - Bus Stop Maintenance</h4>
                      <span className="text-xs text-gray-500">2 days ago</span>
                    </div>
                    <p className="text-sm text-gray-600 mb-2">
                      Bus stop has been fully repaired and cleaned. New seating arrangements have been installed.
                    </p>
                    <Badge variant="secondary">Resolved</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
