import { useState, useEffect } from "preact/hooks";
import { TrendingUp, ArrowLeft, DollarSign, Users, Calendar, Star, ArrowUp, ArrowDown } from "lucide-react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Link, useParams } from "wouter";

interface AnalyticsData {
    revenue: {
        current: number;
        previous: number;
        change: number;
    };
    appointments: {
        current: number;
        previous: number;
        change: number;
    };
    customers: {
        current: number;
        previous: number;
        change: number;
    };
    rating: {
        current: number;
        previous: number;
        change: number;
    };
    monthlyData: {
        month: string;
        revenue: number;
        appointments: number;
        customers: number;
    }[];
    topServices: {
        name: string;
        bookings: number;
        revenue: number;
        percentage: number;
    }[];
}

interface Business {
    id: string;
    name: string;
    type: string;
}

export function BusinessAnalytics() {
    const params = useParams();
    const businessId = params.id;
    
    const [business, setBusiness] = useState<Business | null>(null);
    const [analytics, setAnalytics] = useState<AnalyticsData | null>(null);
    const [timeRange, setTimeRange] = useState<'7d' | '30d' | '90d' | '1y'>('30d');

    useEffect(() => {
        // Mock business data
        const mockBusiness: Business = {
            id: businessId || "1",
            name: "Elite Hair Salon",
            type: "Hair Salon"
        };
        setBusiness(mockBusiness);

        // Mock analytics data
        const mockAnalytics: AnalyticsData = {
            revenue: {
                current: 12450,
                previous: 11200,
                change: 11.16
            },
            appointments: {
                current: 156,
                previous: 142,
                change: 9.86
            },
            customers: {
                current: 248,
                previous: 235,
                change: 5.53
            },
            rating: {
                current: 4.8,
                previous: 4.6,
                change: 4.35
            },
            monthlyData: [
                { month: "Oct", revenue: 8500, appointments: 98, customers: 180 },
                { month: "Nov", revenue: 9200, appointments: 112, customers: 195 },
                { month: "Dec", revenue: 11200, appointments: 142, customers: 235 },
                { month: "Jan", revenue: 10800, appointments: 135, customers: 240 },
                { month: "Feb", revenue: 12450, appointments: 156, customers: 248 },
                { month: "Mar", revenue: 13200, appointments: 168, customers: 260 }
            ],
            topServices: [
                { name: "Hair Cut & Styling", bookings: 45, revenue: 4500, percentage: 36.1 },
                { name: "Hair Coloring", bookings: 28, revenue: 3360, percentage: 27.0 },
                { name: "Hair Wash & Blow Dry", bookings: 35, revenue: 2100, percentage: 16.9 },
                { name: "Beard Trim", bookings: 22, revenue: 1320, percentage: 10.6 },
                { name: "Hair Treatment", bookings: 15, revenue: 1170, percentage: 9.4 }
            ]
        };
        setAnalytics(mockAnalytics);
    }, [businessId, timeRange]);

    const formatCurrency = (amount: number) => {
        return new Intl.NumberFormat('en-US', {
            style: 'currency',
            currency: 'USD'
        }).format(amount);
    };

    const getChangeIcon = (change: number) => {
        return change >= 0 ? (
            <ArrowUp className="h-4 w-4 text-green-500" />
        ) : (
            <ArrowDown className="h-4 w-4 text-red-500" />
        );
    };

    const getChangeColor = (change: number) => {
        return change >= 0 ? 'text-green-600' : 'text-red-600';
    };

    if (!business || !analytics) {
        return (
            <>
                <Navbar />
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading analytics...</p>
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
                            <Link to={`/business-dashboard/${businessId}`}>
                                <button className="mr-4 p-2 rounded-md hover:bg-gray-100 transition-colors">
                                    <ArrowLeft className="h-5 w-5 text-gray-600" />
                                </button>
                            </Link>
                            <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center">
                                <TrendingUp className="h-5 w-5 text-green-600" />
                            </div>
                            <div className="ml-3">
                                <h1 className="text-3xl font-bold text-gray-800">Analytics</h1>
                                <p className="text-gray-500">{business.name}</p>
                            </div>
                        </div>
                        
                        <select
                            value={timeRange}
                            onChange={(e) => setTimeRange((e.target as HTMLSelectElement).value as '7d' | '30d' | '90d' | '1y')}
                            className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent"
                        >
                            <option value="7d">Last 7 days</option>
                            <option value="30d">Last 30 days</option>
                            <option value="90d">Last 90 days</option>
                            <option value="1y">Last year</option>
                        </select>
                    </div>

                    {/* Key Metrics */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Revenue</p>
                                    <p className="text-2xl font-bold text-gray-900">{formatCurrency(analytics.revenue.current)}</p>
                                </div>
                                <div className="h-12 w-12 rounded-full bg-green-100 flex items-center justify-center">
                                    <DollarSign className="h-6 w-6 text-green-600" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center">
                                {getChangeIcon(analytics.revenue.change)}
                                <span className={`ml-2 text-sm font-medium ${getChangeColor(analytics.revenue.change)}`}>
                                    {Math.abs(analytics.revenue.change).toFixed(1)}%
                                </span>
                                <span className="ml-2 text-sm text-gray-500">vs last period</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Appointments</p>
                                    <p className="text-2xl font-bold text-gray-900">{analytics.appointments.current}</p>
                                </div>
                                <div className="h-12 w-12 rounded-full bg-blue-100 flex items-center justify-center">
                                    <Calendar className="h-6 w-6 text-blue-600" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center">
                                {getChangeIcon(analytics.appointments.change)}
                                <span className={`ml-2 text-sm font-medium ${getChangeColor(analytics.appointments.change)}`}>
                                    {Math.abs(analytics.appointments.change).toFixed(1)}%
                                </span>
                                <span className="ml-2 text-sm text-gray-500">vs last period</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Customers</p>
                                    <p className="text-2xl font-bold text-gray-900">{analytics.customers.current}</p>
                                </div>
                                <div className="h-12 w-12 rounded-full bg-purple-100 flex items-center justify-center">
                                    <Users className="h-6 w-6 text-purple-600" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center">
                                {getChangeIcon(analytics.customers.change)}
                                <span className={`ml-2 text-sm font-medium ${getChangeColor(analytics.customers.change)}`}>
                                    {Math.abs(analytics.customers.change).toFixed(1)}%
                                </span>
                                <span className="ml-2 text-sm text-gray-500">vs last period</span>
                            </div>
                        </div>

                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="flex items-center justify-between">
                                <div>
                                    <p className="text-sm font-medium text-gray-500">Rating</p>
                                    <p className="text-2xl font-bold text-gray-900">{analytics.rating.current}</p>
                                </div>
                                <div className="h-12 w-12 rounded-full bg-yellow-100 flex items-center justify-center">
                                    <Star className="h-6 w-6 text-yellow-600" />
                                </div>
                            </div>
                            <div className="mt-4 flex items-center">
                                {getChangeIcon(analytics.rating.change)}
                                <span className={`ml-2 text-sm font-medium ${getChangeColor(analytics.rating.change)}`}>
                                    {Math.abs(analytics.rating.change).toFixed(1)}%
                                </span>
                                <span className="ml-2 text-sm text-gray-500">vs last period</span>
                            </div>
                        </div>
                    </div>

                    {/* Revenue Trend Chart */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                        <h3 className="text-lg font-semibold text-gray-800 mb-6">Revenue Trend</h3>
                        <div className="h-64 flex items-end justify-between space-x-2">
                            {analytics.monthlyData.map((data, index) => {
                                const maxRevenue = Math.max(...analytics.monthlyData.map(d => d.revenue));
                                const height = (data.revenue / maxRevenue) * 100;
                                
                                return (
                                    <div key={data.month} className="flex flex-col items-center flex-1">
                                        <div 
                                            className="w-full bg-gradient-to-t from-green-500 to-green-400 rounded-t-md transition-all duration-500 hover:from-green-600 hover:to-green-500"
                                            style={{ height: `${height}%` }}
                                        ></div>
                                        <div className="mt-2 text-xs text-gray-600 font-medium">{data.month}</div>
                                        <div className="text-xs text-gray-500">{formatCurrency(data.revenue)}</div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Top Services */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-6">Top Services</h3>
                            <div className="space-y-4">
                                {analytics.topServices.map((service, index) => (
                                    <div key={service.name} className="flex items-center justify-between">
                                        <div className="flex items-center">
                                            <div className="w-8 h-8 rounded-full bg-gray-100 flex items-center justify-center text-sm font-medium text-gray-600 mr-3">
                                                {index + 1}
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-gray-900">{service.name}</p>
                                                <p className="text-xs text-gray-500">{service.bookings} bookings</p>
                                            </div>
                                        </div>
                                        <div className="text-right">
                                            <p className="text-sm font-medium text-gray-900">{formatCurrency(service.revenue)}</p>
                                            <p className="text-xs text-gray-500">{service.percentage}%</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Monthly Breakdown */}
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-6">Monthly Performance</h3>
                            <div className="space-y-4">
                                {analytics.monthlyData.slice(-3).map((data) => (
                                    <div key={data.month} className="border border-gray-200 rounded-lg p-4">
                                        <div className="flex items-center justify-between mb-2">
                                            <h4 className="text-sm font-medium text-gray-900">{data.month} 2024</h4>
                                            <span className="text-sm font-medium text-green-600">{formatCurrency(data.revenue)}</span>
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 text-xs text-gray-500">
                                            <div>
                                                <span className="flex items-center">
                                                    <Calendar className="h-3 w-3 mr-1" />
                                                    {data.appointments} appointments
                                                </span>
                                            </div>
                                            <div>
                                                <span className="flex items-center">
                                                    <Users className="h-3 w-3 mr-1" />
                                                    {data.customers} customers
                                                </span>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
