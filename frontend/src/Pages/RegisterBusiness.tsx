
import { Building2, CheckCircle, Zap, Calendar, TrendingUp, Users } from "lucide-react";
import { Navbar } from "../Components/Navbar/Navbar";
import { BusinessInformation } from "@/Components/Business/BusinessInformation";

export function RegisterBusiness() {
    
    const benefits = [
        {
            icon: <CheckCircle className="h-6 w-6 text-teal-500" />,
            title: "Reach new customers in your area",
            description: "Gain exposure to thousands of potential clients searching for your services."
        },
        {
            icon: <Calendar className="h-6 w-6 text-teal-500" />,
            title: "Manage all your appointments in one place",
            description: "Streamline your booking process with an intuitive calendar system."
        },
        {
            icon: <Zap className="h-6 w-6 text-teal-500" />,
            title: "Reduce no-shows with automated reminders",
            description: "Automate appointment reminders to save time and reduce missed appointments."
        },
        {
            icon: <TrendingUp className="h-6 w-6 text-teal-500" />,
            title: "Get insights with booking analytics",
            description: "Understand your business performance with our analytics tools."
        },
        {
            icon: <Users className="h-6 w-6 text-teal-500" />,
            title: "Build your reputation with customer reviews",
            description: "Showcase your service quality and build trust with client testimonials."
        }
    ];

    return (
        <>
            <Navbar />
            <main className="min-h-[calc(100vh-5rem)] bg-gradient-to-b from-gray-50 to-white pt-10 pb-16">
                <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center mb-6">
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-teal-600" />
                        </div>
                        <h1 className="text-3xl font-bold text-gray-800 ml-3">Register Your Business</h1>
                    </div>

                    <div className="flex flex-row lg:flex-row gap-6">
                        {/* Main Form */}
                        <BusinessInformation/>

                        {/* Benefits Section */}
                            <div className="lg:w-96 xl:w-[420px]">
                                <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden h-full">
                                    <div className="p-6 sm:p-8">
                                        <div className="flex items-center mb-6">
                                            {/* <div className="h-8 w-8 rounded-full bg-teal-100 flex items-center justify-center">
                                            <Check className="h-4 w-4 text-teal-600" />
                                        </div> */}
                                            <h2 className="text-2xl font-semibold text-gray-800">
                                                Benefits
                                            </h2>
                                        </div>
                                        <p className="text-gray-500 mb-8">Why join Mirrow as a business</p>

                                        <div className="space-y-6">
                                            {benefits.map((benefit, index) => (
                                                <div key={index} className="flex">
                                                    <div className="flex-shrink-0 mr-3 mt-1">
                                                        {benefit.icon}
                                                    </div>
                                                    <div>
                                                        <h3 className="font-medium text-gray-800">
                                                            {benefit.title}
                                                        </h3>
                                                        {/* <p className="mt-1 text-sm text-gray-500">
                                                        {benefit.description}
                                                    </p> */}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                    
                                    </div>
                                </div>
                            </div>
                    </div>

                    <div className="mt-6 text-center text-sm text-gray-500">
                        Need help? <a href="#" className="text-teal-600 hover:text-teal-800">Contact our support team</a>
                    </div>
                </div>
            </main>
        </>
    );
}