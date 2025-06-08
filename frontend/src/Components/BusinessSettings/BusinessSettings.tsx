import { useState } from "preact/hooks";
import { 
    Building2, 
    Save, 
    X, 
    Clock, 
    Bell,
    Shield,
    Trash2
} from "lucide-react";

interface BusinessSettingsProps {
    business: {
        id: string;
        name: string;
        type: string;
        location: string;
        phoneNumber?: string;
        imageUrl?: string;
        createdAt: string;
        email?: string;
        website?: string;
        description?: string;
    };
    isOpen: boolean;
    onClose: () => void;
    onSave: (updatedBusiness: any) => void;
}

export function BusinessSettings({ business, isOpen, onClose, onSave }: BusinessSettingsProps) {
    const [activeTab, setActiveTab] = useState('general');
    const [formData, setFormData] = useState({
        name: business.name,
        type: business.type,
        location: business.location,
        phoneNumber: business.phoneNumber || '',
        email: business.email || '',
        website: business.website || '',
        description: business.description || '',
        imageUrl: business.imageUrl || '',
        // Business hours
        mondayHours: '9:00 AM - 5:00 PM',
        tuesdayHours: '9:00 AM - 5:00 PM',
        wednesdayHours: '9:00 AM - 5:00 PM',
        thursdayHours: '9:00 AM - 5:00 PM',
        fridayHours: '9:00 AM - 5:00 PM',
        saturdayHours: '10:00 AM - 4:00 PM',
        sundayHours: 'Closed',
        // Notification settings
        emailNotifications: true,
        smsNotifications: true,
        appointmentReminders: true,
        marketingEmails: false,
    });

    const [hasChanges, setHasChanges] = useState(false);

    const handleInputChange = (field: string) => (e: Event) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }));
        setHasChanges(true);
    };

    const handleCheckboxChange = (field: string) => (e: Event) => {
        const target = e.target as HTMLInputElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.checked
        }));
        setHasChanges(true);
    };

    const handleSave = () => {
        onSave({
            ...business,
            ...formData
        });
        setHasChanges(false);
        onClose();
    };

    const businessTypeOptions = [
        "Hair Salon", "Barbershop", "Spa & Wellness", "Nail Salon",
        "Fitness & Yoga", "Medical Practice", "Dental Clinic",
        "Massage Therapy", "Beauty Salon", "Pet Services",
        "Photography", "Event Planning", "Tutoring & Education",
        "Consulting", "Auto Services", "Other"
    ];

    const tabs = [
        { id: 'general', label: 'General', icon: Building2 },
        { id: 'hours', label: 'Business Hours', icon: Clock },
        { id: 'notifications', label: 'Notifications', icon: Bell },
        { id: 'advanced', label: 'Advanced', icon: Shield },
    ];

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-xl shadow-2xl max-w-4xl w-full max-h-[90vh] overflow-hidden">
                {/* Header */}
                <div className="flex items-center justify-between p-6 border-b border-gray-200">
                    <div className="flex items-center">
                        <div className="h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center">
                            <Building2 className="h-5 w-5 text-teal-600" />
                        </div>
                        <div className="ml-3">
                            <h2 className="text-xl font-semibold text-gray-800">Business Settings</h2>
                            <p className="text-sm text-gray-500">{business.name}</p>
                        </div>
                    </div>
                    <button
                        onClick={onClose}
                        className="p-2 rounded-md hover:bg-gray-100 transition-colors"
                    >
                        <X className="h-5 w-5 text-gray-600" />
                    </button>
                </div>

                <div className="flex">
                    {/* Sidebar */}
                    <div className="w-64 border-r border-gray-200 bg-gray-50">
                        <nav className="p-4 space-y-2">
                            {tabs.map((tab) => (
                                <button
                                    key={tab.id}
                                    onClick={() => setActiveTab(tab.id)}
                                    className={`w-full flex items-center px-3 py-2 text-sm font-medium rounded-md transition-colors ${
                                        activeTab === tab.id
                                            ? 'bg-teal-100 text-teal-700'
                                            : 'text-gray-600 hover:bg-gray-100'
                                    }`}
                                >
                                    <tab.icon className="h-4 w-4 mr-3" />
                                    {tab.label}
                                </button>
                            ))}
                        </nav>
                    </div>

                    {/* Content */}
                    <div className="flex-1 overflow-y-auto max-h-[calc(90vh-80px)]">
                        <div className="p-6">
                            {activeTab === 'general' && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-medium text-gray-800">General Information</h3>
                                    
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Business Name
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.name}
                                                onChange={handleInputChange('name')}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Business Type
                                            </label>
                                            <select
                                                value={formData.type}
                                                onChange={handleInputChange('type')}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            >
                                                {businessTypeOptions.map(type => (
                                                    <option key={type} value={type}>{type}</option>
                                                ))}
                                            </select>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Location
                                            </label>
                                            <input
                                                type="text"
                                                value={formData.location}
                                                onChange={handleInputChange('location')}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Phone Number
                                            </label>
                                            <input
                                                type="tel"
                                                value={formData.phoneNumber}
                                                onChange={handleInputChange('phoneNumber')}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Email
                                            </label>
                                            <input
                                                type="email"
                                                value={formData.email}
                                                onChange={handleInputChange('email')}
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Website
                                            </label>
                                            <input
                                                type="url"
                                                value={formData.website}
                                                onChange={handleInputChange('website')}
                                                placeholder="https://www.example.com"
                                                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Business Description
                                        </label>
                                        <textarea
                                            value={formData.description}
                                            onChange={handleInputChange('description')}
                                            rows={4}
                                            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            placeholder="Describe your business, services, and what makes you unique..."
                                        />
                                    </div>
                                </div>
                            )}

                            {activeTab === 'hours' && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-medium text-gray-800">Business Hours</h3>
                                    
                                    <div className="space-y-4">
                                        {[
                                            { day: 'Monday', field: 'mondayHours' },
                                            { day: 'Tuesday', field: 'tuesdayHours' },
                                            { day: 'Wednesday', field: 'wednesdayHours' },
                                            { day: 'Thursday', field: 'thursdayHours' },
                                            { day: 'Friday', field: 'fridayHours' },
                                            { day: 'Saturday', field: 'saturdayHours' },
                                            { day: 'Sunday', field: 'sundayHours' },
                                        ].map(({ day, field }) => (
                                            <div key={day} className="flex items-center justify-between">
                                                <label className="text-sm font-medium text-gray-700 w-24">
                                                    {day}
                                                </label>
                                                <input
                                                    type="text"
                                                    value={formData[field as keyof typeof formData] as string}
                                                    onChange={handleInputChange(field)}
                                                    placeholder="9:00 AM - 5:00 PM or Closed"
                                                    className="flex-1 ml-4 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                                />
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}

                            {activeTab === 'notifications' && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-medium text-gray-800">Notification Preferences</h3>
                                    
                                    <div className="space-y-4">
                                        <div className="flex items-center justify-between">
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">Email Notifications</label>
                                                <p className="text-xs text-gray-500">Receive notifications via email</p>
                                            </div>
                                            <input
                                                type="checkbox"
                                                checked={formData.emailNotifications}
                                                onChange={handleCheckboxChange('emailNotifications')}
                                                className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">SMS Notifications</label>
                                                <p className="text-xs text-gray-500">Receive notifications via text message</p>
                                            </div>
                                            <input
                                                type="checkbox"
                                                checked={formData.smsNotifications}
                                                onChange={handleCheckboxChange('smsNotifications')}
                                                className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">Appointment Reminders</label>
                                                <p className="text-xs text-gray-500">Send automatic reminders to customers</p>
                                            </div>
                                            <input
                                                type="checkbox"
                                                checked={formData.appointmentReminders}
                                                onChange={handleCheckboxChange('appointmentReminders')}
                                                className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                                            />
                                        </div>

                                        <div className="flex items-center justify-between">
                                            <div>
                                                <label className="text-sm font-medium text-gray-700">Marketing Emails</label>
                                                <p className="text-xs text-gray-500">Receive promotional emails and updates</p>
                                            </div>
                                            <input
                                                type="checkbox"
                                                checked={formData.marketingEmails}
                                                onChange={handleCheckboxChange('marketingEmails')}
                                                className="h-4 w-4 text-teal-600 border-gray-300 rounded focus:ring-teal-500"
                                            />
                                        </div>
                                    </div>
                                </div>
                            )}

                            {activeTab === 'advanced' && (
                                <div className="space-y-6">
                                    <h3 className="text-lg font-medium text-gray-800">Advanced Settings</h3>
                                    
                                    <div className="space-y-6">
                                        <div className="border border-red-200 rounded-lg p-4">
                                            <h4 className="text-sm font-medium text-red-800 mb-2">Danger Zone</h4>
                                            <p className="text-sm text-red-600 mb-4">
                                                Once you delete your business, there is no going back. Please be certain.
                                            </p>
                                            <button className="flex items-center gap-2 px-4 py-2 bg-red-500 text-white font-medium rounded-md hover:bg-red-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors">
                                                <Trash2 className="h-4 w-4" />
                                                Delete Business
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>

                {/* Footer */}
                <div className="border-t border-gray-200 p-6 bg-gray-50">
                    <div className="flex items-center justify-between">
                        <div className="text-sm text-gray-500">
                            {hasChanges && "You have unsaved changes"}
                        </div>
                        <div className="flex gap-3">
                            <button
                                onClick={onClose}
                                className="px-4 py-2 text-gray-700 font-medium rounded-md hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors"
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleSave}
                                disabled={!hasChanges}
                                className={`flex items-center gap-2 px-4 py-2 font-medium rounded-md transition-colors ${
                                    hasChanges
                                        ? 'bg-teal-500 text-white hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500'
                                        : 'bg-gray-300 text-gray-500 cursor-not-allowed'
                                }`}
                            >
                                <Save className="h-4 w-4" />
                                Save Changes
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}