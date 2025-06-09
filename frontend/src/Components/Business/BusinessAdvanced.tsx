import { useState } from "preact/hooks";
import { AlertTriangle, Trash2, Download, Archive, Shield, Key } from "lucide-react";

interface Business {
    id: string;
    name: string;
    type: string;
    location: string;
    phoneNumber?: string;
    imageUrl?: string;
    createdAt: string;
}

interface BusinessAdvancedProps {
    business: Business;
    onBusinessDeleted?: () => void;
}

export function BusinessAdvanced({ business, onBusinessDeleted }: BusinessAdvancedProps) {
    const [showDeleteConfirm, setShowDeleteConfirm] = useState(false);
    const [deleteConfirmText, setDeleteConfirmText] = useState("");
    const [isDeleting, setIsDeleting] = useState(false);

    const handleExportData = () => {
        // In a real app, this would make an API call to export business data
        console.log('Exporting business data for:', business.name);
        // Create a mock data export
        const exportData = {
            business: business,
            exportDate: new Date().toISOString(),
            appointments: [], // Would contain actual appointment data
            customers: [], // Would contain actual customer data
            analytics: {} // Would contain actual analytics data
        };
        
        const dataStr = JSON.stringify(exportData, null, 2);
        const dataBlob = new Blob([dataStr], { type: 'application/json' });
        const url = URL.createObjectURL(dataBlob);
        const link = document.createElement('a');
        link.href = url;
        link.download = `${business.name.replace(/\s+/g, '_')}_export_${new Date().toISOString().split('T')[0]}.json`;
        link.click();
        URL.revokeObjectURL(url);
    };

    const handleArchiveBusiness = () => {
        // In a real app, this would make an API call to archive the business
        console.log('Archiving business:', business.name);
        // Show success message
    };

    const handleDeleteBusiness = async () => {
        if (deleteConfirmText !== business.name) {
            return;
        }

        setIsDeleting(true);
        try {
            // In a real app, this would make an API call to delete the business
            console.log('Deleting business:', business.name);
            
            // Simulate API call delay
            await new Promise(resolve => setTimeout(resolve, 2000));
            
            // Call the callback to notify parent component
            if (onBusinessDeleted) {
                onBusinessDeleted();
            }
        } catch (error) {
            console.error('Error deleting business:', error);
        } finally {
            setIsDeleting(false);
            setShowDeleteConfirm(false);
            setDeleteConfirmText("");
        }
    };

    const isDeleteButtonEnabled = deleteConfirmText === business.name;

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center mb-6">
                <Shield className="h-6 w-6 text-orange-600 mr-3" />
                <div>
                    <h3 className="text-lg font-semibold text-gray-800">Advanced Settings</h3>
                    <p className="text-sm text-gray-600">Manage data, security, and business lifecycle options</p>
                </div>
            </div>

            <div className="space-y-6">
                {/* Data Management */}
                <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-gray-800 mb-4 flex items-center">
                        <Download className="h-5 w-5 text-blue-600 mr-2" />
                        Data Management
                    </h4>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-700">Export Business Data</p>
                                <p className="text-xs text-gray-500">Download all your business data including appointments, customers, and analytics</p>
                            </div>
                            <button
                                onClick={handleExportData}
                                className="px-4 py-2 bg-blue-600 text-white text-sm font-medium rounded-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors duration-200"
                            >
                                Export Data
                            </button>
                        </div>
                    </div>
                </div>

                {/* Security Settings */}
                <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-gray-800 mb-4 flex items-center">
                        <Key className="h-5 w-5 text-green-600 mr-2" />
                        Security Settings
                    </h4>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-700">Two-Factor Authentication</p>
                                <p className="text-xs text-gray-500">Add an extra layer of security to your account</p>
                            </div>
                            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
                                Configure
                            </button>
                        </div>
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-700">API Access Keys</p>
                                <p className="text-xs text-gray-500">Manage API keys for third-party integrations</p>
                            </div>
                            <button className="px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200">
                                Manage Keys
                            </button>
                        </div>
                    </div>
                </div>

                {/* Business Lifecycle */}
                <div className="border border-gray-200 rounded-lg p-4">
                    <h4 className="text-md font-semibold text-gray-800 mb-4 flex items-center">
                        <Archive className="h-5 w-5 text-orange-600 mr-2" />
                        Business Lifecycle
                    </h4>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-gray-700">Archive Business</p>
                                <p className="text-xs text-gray-500">Temporarily disable your business while preserving all data</p>
                            </div>
                            <button
                                onClick={handleArchiveBusiness}
                                className="px-4 py-2 bg-orange-100 text-orange-700 text-sm font-medium rounded-md hover:bg-orange-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-orange-500 transition-colors duration-200"
                            >
                                Archive Business
                            </button>
                        </div>
                    </div>
                </div>

                {/* Danger Zone */}
                <div className="border border-red-200 rounded-lg p-4 bg-red-50">
                    <h4 className="text-md font-semibold text-red-800 mb-4 flex items-center">
                        <AlertTriangle className="h-5 w-5 text-red-600 mr-2" />
                        Danger Zone
                    </h4>
                    <div className="space-y-3">
                        <div className="flex items-center justify-between">
                            <div>
                                <p className="text-sm font-medium text-red-700">Delete Business</p>
                                <p className="text-xs text-red-600">Permanently delete this business and all associated data. This action cannot be undone.</p>
                            </div>
                            <button
                                onClick={() => setShowDeleteConfirm(true)}
                                className="px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200"
                            >
                                <Trash2 className="h-4 w-4 inline mr-1" />
                                Delete Business
                            </button>
                        </div>
                    </div>
                </div>
            </div>

            {/* Delete Confirmation Modal */}
            {showDeleteConfirm && (
                <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
                    <div className="bg-white rounded-lg p-6 max-w-md w-full mx-4">
                        <div className="flex items-center mb-4">
                            <AlertTriangle className="h-6 w-6 text-red-600 mr-2" />
                            <h3 className="text-lg font-semibold text-gray-900">Delete Business</h3>
                        </div>
                        
                        <div className="mb-4">
                            <p className="text-sm text-gray-700 mb-3">
                                This action will permanently delete <strong>{business.name}</strong> and all associated data including:
                            </p>
                            <ul className="text-sm text-gray-600 list-disc list-inside space-y-1 mb-4">
                                <li>All appointment history</li>
                                <li>Customer information</li>
                                <li>Business analytics</li>
                                <li>Settings and configurations</li>
                            </ul>
                            <p className="text-sm text-red-600 font-medium">
                                This action cannot be undone. Please be certain.
                            </p>
                        </div>

                        <div className="mb-4">
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                To confirm, type "{business.name}" below:
                            </label>
                            <input
                                type="text"
                                value={deleteConfirmText}
                                onChange={(e) => setDeleteConfirmText((e.target as HTMLInputElement).value)}
                                className="w-full px-3 py-2 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent"
                                placeholder={business.name}
                            />
                        </div>

                        <div className="flex gap-3">
                            <button
                                onClick={() => {
                                    setShowDeleteConfirm(false);
                                    setDeleteConfirmText("");
                                }}
                                className="flex-1 px-4 py-2 bg-gray-100 text-gray-700 text-sm font-medium rounded-md hover:bg-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-500 transition-colors duration-200"
                                disabled={isDeleting}
                            >
                                Cancel
                            </button>
                            <button
                                onClick={handleDeleteBusiness}
                                disabled={!isDeleteButtonEnabled || isDeleting}
                                className="flex-1 px-4 py-2 bg-red-600 text-white text-sm font-medium rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
                            >
                                {isDeleting ? (
                                    <div className="flex items-center justify-center">
                                        <div className="animate-spin rounded-full h-4 w-4 border-b-2 border-white mr-2"></div>
                                        Deleting...
                                    </div>
                                ) : (
                                    'Delete Business'
                                )}
                            </button>
                        </div>
                    </div>
                </div>
            )}

            <div className="mt-6 p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
                <h4 className="text-sm font-medium text-yellow-800 mb-2">Important Notes:</h4>
                <ul className="text-sm text-yellow-700 space-y-1">
                    <li>• Always export your data before making major changes</li>
                    <li>• Archiving preserves your data while temporarily disabling the business</li>
                    <li>• Deletion is permanent - consider archiving first if you might return</li>
                    <li>• Contact support if you need assistance with any of these operations</li>
                </ul>
            </div>
        </div>
    );
}
