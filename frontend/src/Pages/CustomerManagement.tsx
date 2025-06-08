import { useState, useEffect } from "preact/hooks";
import { Users, ArrowLeft, Search, Plus, Phone, Mail, Calendar, MoreVertical } from "lucide-react";
import { Navbar } from "../Components/Navbar/Navbar";
import { Link, useParams } from "wouter";

interface Customer {
    id: string;
    name: string;
    email: string;
    phone: string;
    totalAppointments: number;
    lastVisit: string;
    totalSpent: number;
    status: 'active' | 'inactive';
    joinedDate: string;
}

interface Business {
    id: string;
    name: string;
    type: string;
}

export function CustomerManagement() {
    const params = useParams();
    const businessId = params.id;
    
    const [business, setBusiness] = useState<Business | null>(null);
    const [customers, setCustomers] = useState<Customer[]>([]);
    const [searchTerm, setSearchTerm] = useState("");
    const [filterStatus, setFilterStatus] = useState<'all' | 'active' | 'inactive'>('all');

    useEffect(() => {
        // Mock business data
        const mockBusiness: Business = {
            id: businessId || "1",
            name: "Elite Hair Salon",
            type: "Hair Salon"
        };
        setBusiness(mockBusiness);

        // Mock customers data
        const mockCustomers: Customer[] = [
            {
                id: "1",
                name: "Sarah Johnson",
                email: "sarah.johnson@email.com",
                phone: "+1 (555) 123-4567",
                totalAppointments: 12,
                lastVisit: "2024-03-15",
                totalSpent: 1240,
                status: "active",
                joinedDate: "2023-08-15"
            },
            {
                id: "2",
                name: "Mike Davis",
                email: "mike.davis@email.com",
                phone: "+1 (555) 987-6543",
                totalAppointments: 8,
                lastVisit: "2024-03-10",
                totalSpent: 680,
                status: "active",
                joinedDate: "2023-11-22"
            },
            {
                id: "3",
                name: "Emily Chen",
                email: "emily.chen@email.com",
                phone: "+1 (555) 456-7890",
                totalAppointments: 15,
                lastVisit: "2024-03-12",
                totalSpent: 1850,
                status: "active",
                joinedDate: "2023-06-10"
            },
            {
                id: "4",
                name: "David Wilson",
                email: "david.wilson@email.com",
                phone: "+1 (555) 321-0987",
                totalAppointments: 5,
                lastVisit: "2024-01-20",
                totalSpent: 350,
                status: "inactive",
                joinedDate: "2023-12-05"
            },
            {
                id: "5",
                name: "Lisa Brown",
                email: "lisa.brown@email.com",
                phone: "+1 (555) 654-3210",
                totalAppointments: 20,
                lastVisit: "2024-03-14",
                totalSpent: 2100,
                status: "active",
                joinedDate: "2023-04-18"
            }
        ];
        setCustomers(mockCustomers);
    }, [businessId]);

    const filteredCustomers = customers.filter(customer => {
        const matchesSearch = customer.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             customer.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
                             customer.phone.includes(searchTerm);
        
        const matchesFilter = filterStatus === 'all' || customer.status === filterStatus;
        
        return matchesSearch && matchesFilter;
    });

    const formatDate = (dateString: string) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'short',
            day: 'numeric'
        });
    };

    const getStatusColor = (status: string) => {
        return status === 'active' 
            ? 'bg-green-100 text-green-800' 
            : 'bg-gray-100 text-gray-800';
    };

    if (!business) {
        return (
            <>
                <Navbar />
                <div className="flex items-center justify-center h-screen">
                    <div className="text-center">
                        <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-teal-500 mx-auto"></div>
                        <p className="mt-4 text-gray-600">Loading customers...</p>
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
                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                <Users className="h-5 w-5 text-blue-600" />
                            </div>
                            <div className="ml-3">
                                <h1 className="text-3xl font-bold text-gray-800">Customer Management</h1>
                                <p className="text-gray-500">{business.name}</p>
                            </div>
                        </div>
                        
                        <button className="flex items-center gap-2 px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200">
                            <Plus className="h-4 w-4" />
                            Add Customer
                        </button>
                    </div>

                    {/* Stats Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gray-900">{customers.length}</p>
                                <p className="text-sm text-gray-500">Total Customers</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-green-600">{customers.filter(c => c.status === 'active').length}</p>
                                <p className="text-sm text-gray-500">Active Customers</p>
                            </div>
                        </div>
                        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                            <div className="text-center">
                                <p className="text-2xl font-bold text-gray-900">
                                    ${customers.reduce((sum, customer) => sum + customer.totalSpent, 0).toLocaleString()}
                                </p>
                                <p className="text-sm text-gray-500">Total Revenue</p>
                            </div>
                        </div>
                    </div>

                    {/* Search and Filter */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-8">
                        <div className="flex flex-col sm:flex-row gap-4">
                            <div className="flex-1 relative">
                                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
                                <input
                                    type="text"
                                    placeholder="Search customers by name, email, or phone..."
                                    value={searchTerm}
                                    onInput={(e) => setSearchTerm((e.target as HTMLInputElement).value)}
                                    className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                                />
                            </div>
                            
                            <select
                                value={filterStatus}
                                onChange={(e) => setFilterStatus((e.target as HTMLSelectElement).value as 'all' | 'active' | 'inactive')}
                                className="px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                            >
                                <option value="all">All Customers</option>
                                <option value="active">Active</option>
                                <option value="inactive">Inactive</option>
                            </select>
                        </div>
                    </div>

                    {/* Customer List */}
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                        <div className="p-6">
                            <h3 className="text-lg font-semibold text-gray-800 mb-6">
                                Customers ({filteredCustomers.length})
                            </h3>
                            
                            {filteredCustomers.length === 0 ? (
                                <div className="text-center py-12">
                                    <div className="mx-auto h-16 w-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                                        <Users className="h-8 w-8 text-gray-400" />
                                    </div>
                                    <h4 className="text-lg font-medium text-gray-800 mb-2">No customers found</h4>
                                    <p className="text-gray-500 mb-4">
                                        {searchTerm ? "Try adjusting your search criteria" : "Start building your customer base"}
                                    </p>
                                    <button className="px-4 py-2 bg-blue-500 text-white font-medium rounded-md hover:bg-blue-600 transition-colors">
                                        Add First Customer
                                    </button>
                                </div>
                            ) : (
                                <div className="overflow-x-auto">
                                    <table className="min-w-full divide-y divide-gray-200">
                                        <thead className="bg-gray-50">
                                            <tr>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Customer
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Contact
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Appointments
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Last Visit
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Total Spent
                                                </th>
                                                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                                    Status
                                                </th>
                                                <th className="relative px-6 py-3">
                                                    <span className="sr-only">Actions</span>
                                                </th>
                                            </tr>
                                        </thead>
                                        <tbody className="bg-white divide-y divide-gray-200">
                                            {filteredCustomers.map((customer) => (
                                                <tr key={customer.id} className="hover:bg-gray-50">
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="flex items-center">
                                                            <div className="h-10 w-10 rounded-full bg-blue-100 flex items-center justify-center">
                                                                <span className="text-sm font-medium text-blue-600">
                                                                    {customer.name.split(' ').map(n => n[0]).join('')}
                                                                </span>
                                                            </div>
                                                            <div className="ml-4">
                                                                <div className="text-sm font-medium text-gray-900">
                                                                    {customer.name}
                                                                </div>
                                                                <div className="text-sm text-gray-500">
                                                                    Joined {formatDate(customer.joinedDate)}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <div className="text-sm text-gray-900">
                                                            <div className="flex items-center mb-1">
                                                                <Mail className="h-4 w-4 text-gray-400 mr-2" />
                                                                {customer.email}
                                                            </div>
                                                            <div className="flex items-center">
                                                                <Phone className="h-4 w-4 text-gray-400 mr-2" />
                                                                {customer.phone}
                                                            </div>
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        <div className="flex items-center">
                                                            <Calendar className="h-4 w-4 text-gray-400 mr-2" />
                                                            {customer.totalAppointments}
                                                        </div>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                                                        {formatDate(customer.lastVisit)}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">
                                                        ${customer.totalSpent.toLocaleString()}
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap">
                                                        <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${getStatusColor(customer.status)}`}>
                                                            {customer.status}
                                                        </span>
                                                    </td>
                                                    <td className="px-6 py-4 whitespace-nowrap text-right text-sm font-medium">
                                                        <button className="text-gray-400 hover:text-gray-600">
                                                            <MoreVertical className="h-4 w-4" />
                                                        </button>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </table>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </main>
        </>
    );
}
