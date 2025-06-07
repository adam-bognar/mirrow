import { useState, useEffect } from "preact/hooks";
import { Building2, Calendar, Users, TrendingUp, DollarSign, Settings, ArrowLeft } from "lucide-react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Link, useParams } from "wouter";

interface Business {
    id: string;
    name: string;
    type: string;
    location: string;
    phoneNumber?: string;
    imageUrl?: string;
    createdAt: string;
}

export function BusinessDashboard() {
    const params = useParams();
    const businessId = params.id;
    
    // Mock data - in real app this would come from API based on businessId
    const [business, setBusiness] = useState<Business | null>(null);

    useEffect(() => {
        // Mock API call to get business details
        const mockBusiness: Business = {
            id: businessId || "1",
            name: "Elite Hair Salon",
            type: "Hair Salon",
            location: "123 Main St, City Center",
            phoneNumber: "+1 (555) 123-4567",
            createdAt: "2024-01-15"
        };
        setBusiness(mockBusiness);
    }, [businessId]);

    if (!business) {
        return (
            <>
                <Navbar />
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading business dashboard...</p>
                    </div>
                </div>
            </>
        );
    }

    return (
        <>
            <Navbar />
            <main className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-gray-50 to-white pt-10 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    {/* Header */}
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                            <Link to="/business-management">
                                <button className="mr-4 p-2 rounded-md hover:bg-gray-100 transition-colors">
                                    <ArrowLeft className="h-5 w-5 text-gray-600" />
                                </button>
                            </Link>
                            <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                                <Building2 className="h-5 w-5 text-teal-600" />
                            </div>
                            <div className="ml-3">
                                <h1 className="text-3xl font-bold text-gray-800">{business.name}</h1>
                                <p className="text-gray-500">{business.type}</p>
                            </div>
                        </div>
                        
                        <button className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
                            <Settings className="h-4 w-4" />
                            Settings
                        </button>
                    </div>

                    {/* Stats Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center">
                                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-teal-600" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Today's Appointments</p>
                                    <p className="text-2xl font-bold text-gray-900">8</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center">
                                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Users className="h-6 w-6 text-blue-600" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Total Customers</p>
                                    <p className="text-2xl font-bold text-gray-900">248</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center">
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <DollarSign className="h-6 w-6 text-green-600" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Monthly Revenue</p>
                                    <p className="text-2xl font-bold text-gray-900">$12,450</p>
                                </div>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center">
                                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                                    <TrendingUp className="h-6 w-6 text-yellow-600" />
                                </div>
                                <div className="ml-4">
                                    <p className="text-sm font-medium text-gray-500">Rating</p>
                                    <p className="text-2xl font-bold text-gray-900">4.8</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Quick Actions */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
                            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                                <button className="flex items-center justify-center gap-2 p-4 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors">
                                    <Calendar className="h-5 w-5 text-teal-600" />
                                    <span className="font-medium text-gray-700">View Calendar</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors">
                                    <Users className="h-5 w-5 text-blue-600" />
                                    <span className="font-medium text-gray-700">Manage Customers</span>
                                </button>
                                <button className="flex items-center justify-center gap-2 p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors">
                                    <TrendingUp className="h-5 w-5 text-green-600" />
                                    <span className="font-medium text-gray-700">View Analytics</span>
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Recent Activity */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6">
                            <h2 className="text-xl font-semibold text-gray-800 mb-4">Recent Activity</h2>
                            <div className="space-y-4">
                                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                    <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                                        <Calendar className="h-4 w-4 text-green-600" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">New appointment booked</p>
                                        <p className="text-xs text-gray-500">Sarah Johnson - Hair cut & styling - 2:00 PM today</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                    <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                                        <Users className="h-4 w-4 text-blue-600" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">New customer registered</p>
                                        <p className="text-xs text-gray-500">Mike Davis joined your customer list</p>
                                    </div>
                                </div>
                                <div className="flex items-center p-3 bg-gray-50 rounded-lg">
                                    <div className="h-8 w-8 rounded-full bg-yellow-100 flex items-center justify-center">
                                        <TrendingUp className="h-4 w-4 text-yellow-600" />
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">New review received</p>
                                        <p className="text-xs text-gray-500">Emily Chen left a 5-star review</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
