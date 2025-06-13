import { Building2, Tag, MapPin, Phone, Mail, FileText, CheckCircle, Save } from "lucide-react";
import { TextField, SelectField } from "../TextField/text-field";
import { useState, useEffect } from "preact/hooks";
import { Business } from "@/api/models";


interface BusinessInformationProps {
    business?: Business;
}

export function BusinessInformation({ business }: BusinessInformationProps) {

    const [formData, setFormData] = useState({
            businessName: "",
            businessType: "",
            address: "",
            city: "",
            phone: "",
            email: "",
            description: ""
        });

    // Initialize form data with business data if provided
    useEffect(() => {
        if (business) {
            setFormData({
                businessName: business.name || "",
                businessType: business.description || "",
                address: business.address || "",
                city: business.city || "",
                phone: business.phoneNumber || "",
                email: business.email || "",
                description: business.description || ""
            });
        }
    }, [business]);

    const handleChange = (field: string) => (e: Event) => {
        const target = e.target as HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement;
        setFormData(prev => ({
            ...prev,
            [field]: target.value
        }));
    };

    const businessTypeOptions = [
        "Hair Salon", "Barbershop", "Spa & Wellness", "Nail Salon",
        "Fitness & Yoga", "Medical Practice", "Dental Clinic",
        "Massage Therapy", "Beauty Salon", "Pet Services",
        "Photography", "Event Planning", "Tutoring & Education",
        "Consulting", "Auto Services", "Other"
    ].map(type => ({ value: type, label: type }));    
    
    const handleSubmit = (e: Event) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        const action = business ? 'updated' : 'registered';
        alert(`Business ${action} successfully!`);
    };
        

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden flex-1">
                            <div className="p-6 sm:p-10">
                                <h2 className="text-xl font-semibold text-gray-800 mb-1">Business Information</h2>
                                <p className="text-gray-500 mb-8">Complete the form below to create your business profile and start accepting appointments.</p>
                                <form className="space-y-6">
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Business Name */}
                                        <TextField
                                            label="Business Name"
                                            placeholder="Your business name"
                                            icon={<Building2 className="h-4 w-4 text-gray-400" />}
                                            value={formData.businessName}
                                            onChange={handleChange('businessName')}
                                        />

                                        {/* Business Type Dropdown */}
                                        <SelectField
                                            label="Business Type"
                                            placeholder="Select business type"
                                            icon={<Tag className="h-4 w-4 text-gray-400" />}
                                            options={businessTypeOptions}
                                            value={formData.businessType}
                                            onChange={handleChange('businessType')}
                                        />
                                    </div>

                                    {/* Address and City */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Address */}
                                        <TextField
                                            label="Address"
                                            placeholder="Street address"
                                            icon={<MapPin className="h-4 w-4 text-gray-400" />}
                                            value={formData.address}
                                            onChange={handleChange('address')}
                                        />

                                        {/* City */}
                                        <TextField
                                            label="City"
                                            placeholder="City"
                                            icon={<MapPin className="h-4 w-4 text-gray-400" />}
                                            value={formData.city}
                                            onChange={handleChange('city')}
                                        />
                                    </div>

                                    {/* Contact Information */}
                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        {/* Phone */}
                                        <TextField
                                            label="Phone Number"
                                            placeholder="Business phone number"
                                            type="tel"
                                            icon={<Phone className="h-4 w-4 text-gray-400" />}
                                            value={formData.phone}
                                            onChange={handleChange('phone')}
                                        />

                                        {/* Email */}
                                        <TextField
                                            label="Email"
                                            placeholder="Business email"
                                            type="email"
                                            icon={<Mail className="h-4 w-4 text-gray-400" />}
                                            value={formData.email}
                                            onChange={handleChange('email')}
                                        />
                                    </div>

                                    {/* Business Description */}
                                    <TextField
                                        label="Business Description"
                                        placeholder="Describe your business, services, expertise, etc."
                                        icon={<FileText className="h-4 w-4 text-gray-400" />}
                                        isTextArea={true}
                                        rows={4}
                                        value={formData.description}
                                        onChange={handleChange('description')}
                                        helpText="This description will be shown to potential customers."
                                    />                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            onClick={handleSubmit}
                                            className="flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-6 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                                        >
                                            {business ? (
                                                <>
                                                    <Save className="h-5 w-5" />
                                                    Save Changes
                                                </>
                                            ) : (
                                                <>
                                                    <CheckCircle className="h-5 w-5" />
                                                    Register Business
                                                </>
                                            )}
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
    )
}