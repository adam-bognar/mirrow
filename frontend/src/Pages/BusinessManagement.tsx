import { useEffect, useState } from "preact/hooks";
import { Building2, Plus, MapPin, Phone, Calendar, Users, TrendingUp } from "lucide-react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Link, useLocation } from "wouter";
import { Business } from "@/api/models";
import { getBusinesses } from "@/api/api";


export function BusinessManagement() {
    const [, setLocation] = useLocation();
    
    // Mock data - in real app this would come from API
    const [mockBusinesses] = useState<Business[]>([
        {
            id: "1",
            ownerId: "123",
            name: "Elite Hair Salon",
            description: "Your go-to place for the best haircuts and styling in town.",
            address: "123 Main St",
            city: "City Center",
            phoneNumber: "+1 (555) 123-4567",
            email: "info@elitehairsalon.com",
            imageUrl: "https://example.com/business-image.jpg",
            createdAt: "2024-01-15"
        },
        {
            id: "2", 
            ownerId: "456",
            name: "Wellness Spa Center",
            description: "A tranquil spa offering a range of wellness treatments.",
            address: "456 Oak Ave",
            city: "Downtown",
            phoneNumber: "+1 (555) 987-6543",
            email: "info@wellnessspacenter.com",
            imageUrl: "https://example.com/spa-image.jpg",
            createdAt: "2024-02-20"
        }
    ]);

    const [businesses, setBusinesses] = useState<Business[] | null>(null);

    const handleBusinessSelect = (businessId: string) => {
        // Navigate to specific business dashboard
        console.log(`Selected business: ${businessId}`);
        setLocation(`/business-dashboard/${businessId}`);
    };

    useEffect(() => {
        const getBusinessesFromApi = async () => {
            const response = await getBusinesses();

            if(typeof response === 'string') {
                console.error("Error fetching businesses:", response);
            } else {
                setBusinesses(response);
            };
        };
        getBusinessesFromApi();
    }, []);

    return (
        <>
            {/* {businesses ? (
                <div className="flex items-center justify-center h-screen">{businesses.length} businesses found {businesses[0].name}</div>
            ) : (
                <div className="flex items-center justify-center h-screen">No businesses found</div>
            )} */}
            <Navbar />
            <main className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-gray-50 to-white pt-10 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-8">
                        <div className="flex items-center">
                            <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                                <Building2 className="h-5 w-5 text-teal-600" />
                            </div>
                            <h1 className="text-3xl font-bold text-gray-800 ml-3">My Businesses</h1>
                        </div>
                        
                        <Link to="/register-business">
                            <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
                                <Plus className="h-4 w-4" />
                                Add New Business
                            </button>
                        </Link>
                    </div>

                    {mockBusinesses.length === 0 ? (
                        <div className="text-center py-12">
                            <div className="mx-auto h-24 w-24 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                <Building2 className="h-12 w-12 text-gray-400" />
                            </div>
                            <h2 className="text-xl font-semibold text-gray-800 mb-2">No businesses registered</h2>
                            <p className="text-gray-500 mb-6">Get started by registering your first business</p>
                            <Link to="/register-business">
                                <button className="flex items-center gap-2 mx-auto px-6 py-3 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
                                    <Plus className="h-5 w-5" />
                                    Register Your First Business
                                </button>
                            </Link>
                        </div>
                    ) : (
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                            {mockBusinesses.map((business) => (
                                <div 
                                    key={business.id}
                                    className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden hover:shadow-md transition-shadow duration-200 cursor-pointer"
                                    onClick={() => handleBusinessSelect(business.id)}
                                >
                                    <div className="p-6">
                                        <div className="flex items-start justify-between mb-4">
                                            <div className="flex items-center">
                                                <div className="h-12 w-12 rounded-full bg-teal-100 flex items-center justify-center">
                                                    <Building2 className="h-6 w-6 text-teal-600" />
                                                </div>
                                                <div className="ml-3">
                                                    <h3 className="text-lg font-semibold text-gray-800">{business.name}</h3>
                                                    <p className="text-sm text-gray-500">{business.description}</p>
                                                </div>
                                            </div>
                                        </div>
                                        
                                        <div className="space-y-2 mb-4">
                                            <div className="flex items-center text-sm text-gray-600">
                                                <MapPin className="h-4 w-4 mr-2 text-gray-400" />
                                                {business.address}, {business.city}
                                            </div>
                                            {business.phoneNumber && (
                                                <div className="flex items-center text-sm text-gray-600">
                                                    <Phone className="h-4 w-4 mr-2 text-gray-400" />
                                                    {business.phoneNumber}
                                                </div>
                                            )}
                                        </div>

                                        <div className="border-t border-gray-100 pt-4">
                                            <div className="grid grid-cols-3 gap-4 text-center">
                                                <div>
                                                    <div className="flex items-center justify-center mb-1">
                                                        <Calendar className="h-4 w-4 text-teal-500" />
                                                    </div>
                                                    <p className="text-xs text-gray-500">Appointments</p>
                                                    <p className="text-sm font-semibold text-gray-800">12</p>
                                                </div>
                                                <div>
                                                    <div className="flex items-center justify-center mb-1">
                                                        <Users className="h-4 w-4 text-blue-500" />
                                                    </div>
                                                    <p className="text-xs text-gray-500">Customers</p>
                                                    <p className="text-sm font-semibold text-gray-800">48</p>
                                                </div>
                                                <div>
                                                    <div className="flex items-center justify-center mb-1">
                                                        <TrendingUp className="h-4 w-4 text-green-500" />
                                                    </div>
                                                    <p className="text-xs text-gray-500">Rating</p>
                                                    <p className="text-sm font-semibold text-gray-800">4.8</p>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    )}

                    <div className="mt-8 text-center text-sm text-gray-500">
                        Need help? <a href="#" className="text-teal-600 hover:text-teal-800">Contact our support team</a>
                    </div>
                </div>
            </main>
        </>
    );
}