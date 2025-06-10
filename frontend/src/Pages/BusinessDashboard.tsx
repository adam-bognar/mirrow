import { useState, useEffect } from "preact/hooks";
import { Building2, Settings, ArrowLeft } from "lucide-react";
import { Navbar } from "../Components/Navbar/Navbar";
import { BusinessSettings } from "../Components/BusinessSettings/BusinessSettings";
import { TabNavigation } from "../Components/TabNavigation/TabNavigation";
import { Link, useParams } from "wouter";
import { BusinessOverview } from "@/Components/Business/BusinessOverview";
import { BusinessInformation } from "@/Components/Business/BusinessInformation";
import { BusinessHours } from "@/Components/Business/BusinessHours";
import { BusinessNotifications } from "@/Components/Business/BusinessNotifications";
import { BusinessAdvanced } from "@/Components/Business/BusinessAdvanced";
import { Business } from "@/api/models";



export function BusinessDashboard() {
    const params = useParams();
    const businessId = params.id;    // Mock data - in real app this would come from API based on businessId
    const [business, setBusiness] = useState<Business | null>(null);
    const [isSettingsOpen, setIsSettingsOpen] = useState(false);
    const [currentTab, setCurrentTab] = useState('overview');

    const tabs = [
        { id: 'dashboard', label: 'Dashboard' },
        { id: 'settings', label: 'Settings' },
        { id: 'business-hours', label: 'Business Hours' },
        { id: 'notifications', label: 'Notifications' },
        { id: 'advanced', label: 'Advanced' }
    ];

    const handleTabChange = (tabId: string) => {
        setCurrentTab(tabId);
        console.log('Tab changed to:', tabId);
        // You can add logic here to show different content based on the active tab
    };    const renderTabContent = () => {
        switch (currentTab) {
            case 'dashboard':
                return business ? <BusinessOverview business={business} /> : null;
            case 'settings':
                return (
                    business ? <BusinessInformation business={business} /> : null
                );            
            case 'business-hours':
                return <BusinessHours />;
            case 'notifications':
                return <BusinessNotifications />;
            case 'advanced':
                return business ? <BusinessAdvanced business={business} onBusinessDeleted={handleBusinessDeleted} /> : null;
            case 'analytics':
                return (
                    <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                        <h3 className="text-lg font-semibold mb-4">Business Analytics</h3>
                        {/* Analytics content */}
                    </div>
                );
            default:
                return business ? <BusinessOverview business={business} /> : null;

        }
    };    const handleSaveSettings = (updatedBusiness: Business) => {
        setBusiness(updatedBusiness);
        console.log('Business settings updated:', updatedBusiness);
        // In a real app, you would make an API call here to save the changes
    };

    const handleBusinessDeleted = () => {
        console.log('Business deleted, redirecting...');
        // In a real app, you would redirect to business management page
        // For now, we'll just navigate to the business management page
        window.location.href = '/business-management';
    };

    useEffect(() => {
        // Mock API call to get business details
        const mockBusiness: Business = {
            id: businessId || "1",
            ownerId: "owner123",
            name: "Elite Hair Salon",
            description: "Your go-to place for the best haircuts and styling in town.",
            address: "123 Main St",
            city: "City Center",
            phoneNumber: "+1 (555) 123-4567",
            email: "info@elitehairsalon.com",
            imageUrl: "https://example.com/business-image.jpg",
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
                                <p className="text-gray-500">{}</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsSettingsOpen(true)}
                            className="flex items-center gap-2 px-4 py-2 bg-gray-100 text-gray-700 font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                        >
                            <Settings className="h-4 w-4" />
                            Settings
                        </button>                    </div>

                    {/* Navigation Tabs */}
                    <TabNavigation
                        tabs={tabs}
                        defaultActiveTab="dashboard"
                        onTabChange={handleTabChange}
                        className="mb-8"
                    />

                    {/*Overview*/}
                    {renderTabContent()}
                    {/* Some other content */}
                    {/* Some other content */}
                    {/* Some other content */}
                    {/* Some other content */}

                </div>
            </main>

            {/* Business Settings Modal */}
            {business && (
                <BusinessSettings
                    business={business}
                    isOpen={isSettingsOpen}
                    onClose={() => setIsSettingsOpen(false)}
                    onSave={handleSaveSettings}
                />
            )}
        </>
    );
}
