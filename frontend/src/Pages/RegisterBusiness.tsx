import { useState } from "preact/hooks";
import { Building2, MapPin, Phone, Mail, Tag, FileText, CheckCircle, Check, Zap, Calendar, TrendingUp, Users } from "lucide-react";
import { Navbar } from "../Components/Navbar/Navbar";
import { TextField, SelectField } from "../Components/TextField/text-field";

export function RegisterBusiness() {
    const [formData, setFormData] = useState({
        businessName: "",
        businessType: "",
        address: "",
        city: "",
        phone: "",
        email: "",
        description: ""
    });

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
        alert('Business registration submitted successfully!');
    };

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
                                    />
                                    <div className="pt-4">
                                        <button
                                            type="submit"
                                            onClick={handleSubmit}
                                            className="flex items-center justify-center gap-2 w-full sm:w-auto py-3 px-6 bg-teal-500 text-white font-medium rounded-md hover:bg-teal-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                                        >
                                            <CheckCircle className="h-5 w-5" />
                                            Register Business
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>

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