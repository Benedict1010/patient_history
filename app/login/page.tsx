"use client"

import { useState } from "react"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Shield, User } from "lucide-react"

export default function LoginPage() {
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const handleLogin = async (userType: "citizen" | "official") => {
    setIsLoading(true)
    // Simulate login process
    await new Promise((resolve) => setTimeout(resolve, 1000))

    if (userType === "citizen") {
      router.push("/dashboard/citizen")
    } else {
      router.push("/dashboard/official")
    }
    setIsLoading(false)
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-indigo-100 dark:from-gray-900 dark:to-gray-800 flex items-center justify-center p-4">
      <div className="w-full max-w-md">
        <div className="text-center mb-8">
          <Link
            href="/"
            className="inline-flex items-center space-x-2 text-2xl font-bold text-gray-900 dark:text-white"
          >
            <Shield className="h-8 w-8 text-blue-600" />
            <span>Grievance Hub</span>
          </Link>
          <p className="text-gray-600 dark:text-gray-400 mt-2">Sign in to your account</p>
        </div>

        <Tabs defaultValue="citizen" className="w-full">
          <TabsList className="grid w-full grid-cols-2">
            <TabsTrigger value="citizen" className="flex items-center space-x-2">
              <User className="h-4 w-4" />
              <span>Citizen</span>
            </TabsTrigger>
            <TabsTrigger value="official" className="flex items-center space-x-2">
              <Shield className="h-4 w-4" />
              <span>Official</span>
            </TabsTrigger>
          </TabsList>

          <TabsContent value="citizen">
            <Card>
              <CardHeader>
                <CardTitle>Citizen Login</CardTitle>
                <CardDescription>Access your account to submit and track complaints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="citizen-email">Email</Label>
                  <Input id="citizen-email" type="email" placeholder="Enter your email" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="citizen-password">Password</Label>
                  <Input id="citizen-password" type="password" placeholder="Enter your password" />
                </div>
                <Button className="w-full" onClick={() => handleLogin("citizen")} disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
                <div className="text-center text-sm">
                  {"Don't have an account? "}
                  <Link href="/signup" className="text-blue-600 hover:underline">
                    Sign up
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="official">
            <Card>
              <CardHeader>
                <CardTitle>Official Login</CardTitle>
                <CardDescription>Access the official portal to manage complaints</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="space-y-2">
                  <Label htmlFor="official-id">Official ID</Label>
                  <Input id="official-id" placeholder="Enter your official ID" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="official-password">Password</Label>
                  <Input id="official-password" type="password" placeholder="Enter your password" />
                </div>
                <Button className="w-full" onClick={() => handleLogin("official")} disabled={isLoading}>
                  {isLoading ? "Signing in..." : "Sign In"}
                </Button>
                <div className="text-center text-sm">
                  Need official access?{" "}
                  <Link href="/official-signup" className="text-blue-600 hover:underline">
                    Request access
                  </Link>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  )
}
