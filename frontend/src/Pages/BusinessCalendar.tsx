import { useState, useEffect } from "preact/hooks";
import { Calendar, ArrowLeft, Clock, User, Plus, ChevronLeft, ChevronRight } from "lucide-react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Link, useParams } from "wouter";

interface Appointment {
    id: string;
    customerName: string;
    service: string;
    time: string;
    duration: string;
    status: 'confirmed' | 'pending' | 'completed';
    customerPhone?: string;
}

interface Business {
    id: string;
    name: string;
    type: string;
}

export function BusinessCalendar() {
    const params = useParams();
    const businessId = params.id;
    
    const [business, setBusiness] = useState<Business | null>(null);
    const [selectedDate, setSelectedDate] = useState(new Date());
    const [appointments, setAppointments] = useState<Appointment[]>([]);

    useEffect(() => {
        // Mock business data
        const mockBusiness: Business = {
            id: businessId || "1",
            name: "Elite Hair Salon",
            type: "Hair Salon"
        };
        setBusiness(mockBusiness);

        // Mock appointments data
        const mockAppointments: Appointment[] = [
            {
                id: "1",
                customerName: "Sarah Johnson",
                service: "Hair Cut & Styling",
                time: "09:00",
                duration: "90 min",
                status: "confirmed",
                customerPhone: "+1 (555) 123-4567"
            },
            {
                id: "2",
                customerName: "Mike Davis",
                service: "Hair Wash & Blow Dry",
                time: "11:00",
                duration: "60 min",
                status: "confirmed",
                customerPhone: "+1 (555) 987-6543"
            },
            {
                id: "3",
                customerName: "Emily Chen",
                service: "Hair Coloring",
                time: "14:00",
                duration: "120 min",
                status: "pending",
                customerPhone: "+1 (555) 456-7890"
            },
            {
                id: "4",
                customerName: "David Wilson",
                service: "Beard Trim",
                time: "16:30",
                duration: "30 min",
                status: "confirmed",
                customerPhone: "+1 (555) 321-0987"
            }
        ];
        setAppointments(mockAppointments);
    }, [businessId]);

    const formatDate = (date: Date) => {
        return date.toLocaleDateString('en-US', { 
            weekday: 'long', 
            year: 'numeric', 
            month: 'long', 
            day: 'numeric' 
        });
    };

    const goToPreviousDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() - 1);
        setSelectedDate(newDate);
    };

    const goToNextDay = () => {
        const newDate = new Date(selectedDate);
        newDate.setDate(selectedDate.getDate() + 1);
        setSelectedDate(newDate);
    };

    const getStatusColor = (status: string) => {
        switch (status) {
            case 'confirmed':
                return 'bg-green-100 text-green-800';
            case 'pending':
                return 'bg-yellow-100 text-yellow-800';
            case 'completed':
                return 'bg-blue-100 text-blue-800';
            default:
                return 'bg-gray-100 text-gray-800';
        }
    };

    if (!business) {
        return (
            <>
                <Navbar />
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading calendar...</p>
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
                            <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                                <Calendar className="h-5 w-5 text-teal-600" />
                            </div>
                            <div className="ml-3">
                                <h1 className="text-3xl font-bold text-gray-800">Calendar</h1>
                                <p className="text-gray-500">{business.name}</p>
                            </div>
                        </div>
                        
                        <button className="flex items-center gap-2 px-4 py-2 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200">
                            <Plus className="h-4 w-4" />
                            New Appointment
                        </button>
                    </div>

                    {/* Date Navigation */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                        <div className="flex items-center justify-between">
                            <button 
                                onClick={goToPreviousDay}
                                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                            >
                                <ChevronLeft className="h-5 w-5 text-gray-600" />
                            </button>
                            
                            <div className="text-center">
                                <h2 className="text-xl font-semibold text-gray-800">{formatDate(selectedDate)}</h2>
                                <p className="text-sm text-gray-500">{appointments.length} appointments scheduled</p>
                            </div>
                            
                            <button 
                                onClick={goToNextDay}
                                className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                            >
                                <ChevronRight className="h-5 w-5 text-gray-600" />
                            </button>
                        </div>
                    </div>

                    {/* Appointments List */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-6">Today's Appointments</h3>
                            
                            {appointments.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="mx-auto h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                        <Calendar className="h-8 w-8 text-gray-400" />
                                    </div>
                                    <h4 className="text-lg font-medium text-gray-800 mb-2">No appointments today</h4>
                                    <p className="text-gray-500 mb-4">Your schedule is clear for today</p>
                                    <button className="px-4 py-2 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 transition-colors">
                                        Schedule New Appointment
                                    </button>
                                </div>
                            ) : (
                                <div className="space-y-4">
                                    {appointments.map((appointment) => (
                                        <div key={appointment.id} className="border border-gray-200 rounded-lg p-4 hover:shadow-md transition-shadow">
                                            <div className="flex items-center justify-between">
                                                <div className="flex items-center space-x-4">
                                                    <div className="flex-shrink-0">
                                                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                                                            <User className="h-5 w-5 text-teal-600" />
                                                        </div>
                                                    </div>
                                                    <div>
                                                        <h4 className="text-lg font-medium text-gray-900">{appointment.customerName}</h4>
                                                        <p className="text-sm text-gray-600">{appointment.service}</p>
                                                        {appointment.customerPhone && (
                                                            <p className="text-xs text-gray-500">{appointment.customerPhone}</p>
                                                        )}
                                                    </div>
                                                </div>
                                                
                                                <div className="flex items-center space-x-4">
                                                    <div className="text-right">
                                                        <div className="flex items-center text-sm font-medium text-gray-900">
                                                            <Clock className="h-4 w-4 mr-1 text-gray-400" />
                                                            {appointment.time}
                                                        </div>
                                                        <p className="text-xs text-gray-500">{appointment.duration}</p>
                                                    </div>
                                                    
                                                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(appointment.status)}`}>
                                                        {appointment.status}
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
