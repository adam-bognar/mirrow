import { Calendar, Users, DollarSign, TrendingUp } from "lucide-react";
import { Link } from "wouter";

interface Business {
    id: string;
    name: string;
    type: string;
    location: string;
    phoneNumber?: string;
    imageUrl?: string;
    createdAt: string;
}

type Props = {
    business: Business;
}

export function BusinessOverview({ business }: Props) {
    return (
        <div>

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
    {/* Quick Actions */ }
    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden mb-8">
        <div className="p-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4">Quick Actions</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <Link to={`/business-calendar/${business.id}`}>
                    <button className="flex items-center justify-center gap-2 p-4 border border-teal-200 rounded-lg hover:bg-teal-50 transition-colors w-full">
                        <Calendar className="h-5 w-5 text-teal-600" />
                        <span className="font-medium text-gray-700">View Calendar</span>
                    </button>
                </Link>
                <Link to={`/customer-management/${business.id}`}>
                    <button className="flex items-center justify-center gap-2 p-4 border border-blue-200 rounded-lg hover:bg-blue-50 transition-colors w-full">
                        <Users className="h-5 w-5 text-blue-600" />
                        <span className="font-medium text-gray-700">Manage Customers</span>
                    </button>
                </Link>
                <Link to={`/business-analytics/${business.id}`}>
                    <button className="flex items-center justify-center gap-2 p-4 border border-green-200 rounded-lg hover:bg-green-50 transition-colors w-full">
                        <TrendingUp className="h-5 w-5 text-green-600" />
                        <span className="font-medium text-gray-700">View Analytics</span>
                    </button>
                </Link>
            </div>
        </div>
    </div>

    {/* Recent Activity */ }
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

)
}