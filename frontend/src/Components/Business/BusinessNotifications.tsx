import { useState } from "preact/hooks";
import { Bell, Mail, MessageSquare, Calendar, Save } from "lucide-react";

interface NotificationSettings {
    email: {
        newBookings: boolean;
        cancellations: boolean;
        reminders: boolean;
        reviews: boolean;
        promotions: boolean;
    };
    sms: {
        newBookings: boolean;
        cancellations: boolean;
        reminders: boolean;
        urgentUpdates: boolean;
    };
    push: {
        newBookings: boolean;
        cancellations: boolean;
        reminders: boolean;
        messages: boolean;
    };
    reminderTiming: {
        customerReminder: string;
        businessReminder: string;
    };
}

const initialSettings: NotificationSettings = {
    email: {
        newBookings: true,
        cancellations: true,
        reminders: true,
        reviews: true,
        promotions: false
    },
    sms: {
        newBookings: true,
        cancellations: true,
        reminders: false,
        urgentUpdates: true
    },
    push: {
        newBookings: true,
        cancellations: true,
        reminders: true,
        messages: true
    },
    reminderTiming: {
        customerReminder: "24",
        businessReminder: "2"
    }
};

export function BusinessNotifications() {
    const [settings, setSettings] = useState<NotificationSettings>(initialSettings);
    const [hasChanges, setHasChanges] = useState(false);

    const handleSettingChange = (category: keyof NotificationSettings, setting: string, value: boolean | string) => {
        setSettings(prev => ({
            ...prev,
            [category]: {
                ...prev[category],
                [setting]: value
            }
        }));
        setHasChanges(true);
    };

    const handleSave = () => {
        // Here you would typically make an API call to save the notification settings
        console.log('Saving notification settings:', settings);
        setHasChanges(false);
        // Show success message or toast
    };

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <Bell className="h-6 w-6 text-teal-600 mr-3" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Notification Settings</h3>
                        <p className="text-sm text-gray-600">Manage how you receive notifications about your business</p>
                    </div>
                </div>
                {hasChanges && (
                    <button
                        onClick={handleSave}
                        className="flex items-center gap-2 px-4 py-2 bg-teal-600 text-white font-medium rounded-md hover:bg-teal-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                    >
                        <Save className="h-4 w-4" />
                        Save Changes
                    </button>
                )}
            </div>

            <div className="space-y-8">
                {/* Email Notifications */}
                <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-4">
                        <Mail className="h-5 w-5 text-blue-600 mr-2" />
                        <h4 className="text-md font-semibold text-gray-800">Email Notifications</h4>
                    </div>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">New booking confirmations</span>
                            <input
                                type="checkbox"
                                checked={settings.email.newBookings}
                                onChange={(e) => handleSettingChange('email', 'newBookings', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Booking cancellations</span>
                            <input
                                type="checkbox"
                                checked={settings.email.cancellations}
                                onChange={(e) => handleSettingChange('email', 'cancellations', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Appointment reminders</span>
                            <input
                                type="checkbox"
                                checked={settings.email.reminders}
                                onChange={(e) => handleSettingChange('email', 'reminders', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Customer reviews</span>
                            <input
                                type="checkbox"
                                checked={settings.email.reviews}
                                onChange={(e) => handleSettingChange('email', 'reviews', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Promotional emails</span>
                            <input
                                type="checkbox"
                                checked={settings.email.promotions}
                                onChange={(e) => handleSettingChange('email', 'promotions', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                    </div>
                </div>

                {/* SMS Notifications */}
                <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-4">
                        <MessageSquare className="h-5 w-5 text-green-600 mr-2" />
                        <h4 className="text-md font-semibold text-gray-800">SMS Notifications</h4>
                    </div>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">New booking confirmations</span>
                            <input
                                type="checkbox"
                                checked={settings.sms.newBookings}
                                onChange={(e) => handleSettingChange('sms', 'newBookings', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Booking cancellations</span>
                            <input
                                type="checkbox"
                                checked={settings.sms.cancellations}
                                onChange={(e) => handleSettingChange('sms', 'cancellations', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Appointment reminders</span>
                            <input
                                type="checkbox"
                                checked={settings.sms.reminders}
                                onChange={(e) => handleSettingChange('sms', 'reminders', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Urgent updates</span>
                            <input
                                type="checkbox"
                                checked={settings.sms.urgentUpdates}
                                onChange={(e) => handleSettingChange('sms', 'urgentUpdates', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                    </div>
                </div>

                {/* Push Notifications */}
                <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-4">
                        <Bell className="h-5 w-5 text-purple-600 mr-2" />
                        <h4 className="text-md font-semibold text-gray-800">Push Notifications</h4>
                    </div>
                    <div className="space-y-3">
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">New booking confirmations</span>
                            <input
                                type="checkbox"
                                checked={settings.push.newBookings}
                                onChange={(e) => handleSettingChange('push', 'newBookings', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Booking cancellations</span>
                            <input
                                type="checkbox"
                                checked={settings.push.cancellations}
                                onChange={(e) => handleSettingChange('push', 'cancellations', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Appointment reminders</span>
                            <input
                                type="checkbox"
                                checked={settings.push.reminders}
                                onChange={(e) => handleSettingChange('push', 'reminders', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                        <label className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Customer messages</span>
                            <input
                                type="checkbox"
                                checked={settings.push.messages}
                                onChange={(e) => handleSettingChange('push', 'messages', (e.target as HTMLInputElement).checked)}
                                className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                            />
                        </label>
                    </div>
                </div>

                {/* Reminder Timing */}
                <div className="border border-gray-200 rounded-lg p-4">
                    <div className="flex items-center mb-4">
                        <Calendar className="h-5 w-5 text-orange-600 mr-2" />
                        <h4 className="text-md font-semibold text-gray-800">Reminder Timing</h4>
                    </div>
                    <div className="space-y-4">
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Send customer reminders</span>
                            <div className="flex items-center gap-2">
                                <select
                                    value={settings.reminderTiming.customerReminder}
                                    onChange={(e) => handleSettingChange('reminderTiming', 'customerReminder', (e.target as HTMLSelectElement).value)}
                                    className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                >
                                    <option value="2">2 hours</option>
                                    <option value="4">4 hours</option>
                                    <option value="12">12 hours</option>
                                    <option value="24">24 hours</option>
                                    <option value="48">48 hours</option>
                                </select>
                                <span className="text-sm text-gray-500">before appointment</span>
                            </div>
                        </div>
                        <div className="flex items-center justify-between">
                            <span className="text-sm text-gray-700">Business preparation reminder</span>
                            <div className="flex items-center gap-2">
                                <select
                                    value={settings.reminderTiming.businessReminder}
                                    onChange={(e) => handleSettingChange('reminderTiming', 'businessReminder', (e.target as HTMLSelectElement).value)}
                                    className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                >
                                    <option value="1">1 hour</option>
                                    <option value="2">2 hours</option>
                                    <option value="4">4 hours</option>
                                    <option value="12">12 hours</option>
                                </select>
                                <span className="text-sm text-gray-500">before appointment</span>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-sm font-medium text-blue-800 mb-2">Notification Tips:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                    <li>• Enable notifications that are most important for your business operations</li>
                    <li>• SMS notifications are great for urgent updates but may incur charges</li>
                    <li>• Customer reminders help reduce no-shows significantly</li>
                    <li>• You can always adjust these settings based on your preferences</li>
                </ul>
            </div>
        </div>
    );
}
