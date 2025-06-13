import { useState } from "preact/hooks";
import { Clock, Plus, Trash2, Save } from "lucide-react";
import { Switch } from "../ui/switch";

interface TimeSlot {
    start: string;
    end: string;
}

interface DaySchedule {
    isOpen: boolean;
    timeSlots: TimeSlot[];
}

interface BusinessHoursData {
    monday: DaySchedule;
    tuesday: DaySchedule;
    wednesday: DaySchedule;
    thursday: DaySchedule;
    friday: DaySchedule;
    saturday: DaySchedule;
    sunday: DaySchedule;
}

const defaultTimeSlot: TimeSlot = { start: "09:00", end: "17:00" };

const initialBusinessHours: BusinessHoursData = {
    monday: { isOpen: true, timeSlots: [{ ...defaultTimeSlot }] },
    tuesday: { isOpen: true, timeSlots: [{ ...defaultTimeSlot }] },
    wednesday: { isOpen: true, timeSlots: [{ ...defaultTimeSlot }] },
    thursday: { isOpen: true, timeSlots: [{ ...defaultTimeSlot }] },
    friday: { isOpen: true, timeSlots: [{ ...defaultTimeSlot }] },
    saturday: { isOpen: false, timeSlots: [] },
    sunday: { isOpen: false, timeSlots: [] }
};

const dayNames = {
    monday: "Monday",
    tuesday: "Tuesday",
    wednesday: "Wednesday",
    thursday: "Thursday",
    friday: "Friday",
    saturday: "Saturday",
    sunday: "Sunday"
};

export function BusinessHours() {
    const [businessHours, setBusinessHours] = useState<BusinessHoursData>(initialBusinessHours);
    const [hasChanges, setHasChanges] = useState(false);

    const handleDayToggle = (day: keyof BusinessHoursData) => {
        setBusinessHours(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                isOpen: !prev[day].isOpen,
                timeSlots: !prev[day].isOpen ? [{ ...defaultTimeSlot }] : []
            }
        }));
        setHasChanges(true);
    };

    const handleTimeSlotChange = (day: keyof BusinessHoursData, slotIndex: number, field: 'start' | 'end', value: string) => {
        setBusinessHours(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                timeSlots: prev[day].timeSlots.map((slot, index) =>
                    index === slotIndex ? { ...slot, [field]: value } : slot
                )
            }
        }));
        setHasChanges(true);
    };

    const addTimeSlot = (day: keyof BusinessHoursData) => {
        setBusinessHours(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                timeSlots: [...prev[day].timeSlots, { ...defaultTimeSlot }]
            }
        }));
        setHasChanges(true);
    };

    const removeTimeSlot = (day: keyof BusinessHoursData, slotIndex: number) => {
        setBusinessHours(prev => ({
            ...prev,
            [day]: {
                ...prev[day],
                timeSlots: prev[day].timeSlots.filter((_, index) => index !== slotIndex)
            }
        }));
        setHasChanges(true);
    };

    const handleSave = () => {
        // Here you would typically make an API call to save the business hours
        console.log('Saving business hours:', businessHours);
        setHasChanges(false);
        // Show success message or toast
    };

    const generateTimeOptions = () => {
        const options = [];
        for (let hour = 0; hour < 24; hour++) {
            for (let minute = 0; minute < 60; minute += 30) {
                const time = `${hour.toString().padStart(2, '0')}:${minute.toString().padStart(2, '0')}`;
                options.push(time);
            }
        }
        return options;
    };

    const timeOptions = generateTimeOptions();

    return (
        <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
            <div className="flex items-center justify-between mb-6">
                <div className="flex items-center">
                    <Clock className="h-6 w-6 text-teal-600 mr-3" />
                    <div>
                        <h3 className="text-lg font-semibold text-gray-800">Business Hours</h3>
                        <p className="text-sm text-gray-600">Set your available appointment times for each day</p>
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

            <div className="space-y-4">
                {Object.entries(businessHours).map(([day, schedule]) => (
                    <div key={day} className="border border-gray-200 rounded-lg p-4">
                        <div className="flex items-center justify-between mb-3">
                            <div className="flex items-center">
                                <label className="flex items-center cursor-pointer">
                                    {/* <input
                                        type="checkbox"
                                        checked={schedule.isOpen}
                                        onChange={() => handleDayToggle(day as keyof BusinessHoursData)}
                                        className="w-4 h-4 text-teal-600 bg-gray-100 border-gray-300 rounded focus:ring-teal-500 focus:ring-2"
                                    /> */}
                                    <Switch
                                        checked={schedule.isOpen}
                                        onCheckedChange={() => handleDayToggle(day as keyof BusinessHoursData)}
                                        className="data-[state=checked]:bg-teal-600 scale-115"
                                    />
                                    <span className="ml-3 text-base font-medium text-gray-700">
                                        {dayNames[day as keyof typeof dayNames]}
                                    </span>
                                </label>
                            </div>
                            {!schedule.isOpen && (
                                <span className="text-sm text-gray-500 italic">Closed</span>
                            )}
                        </div>

                        {schedule.isOpen && (
                            <div className="space-y-3">
                                {schedule.timeSlots.map((slot: TimeSlot, slotIndex: number) => (
                                    <div key={slotIndex} className="flex items-center gap-3 bg-gray-50 p-3 rounded-md">
                                        <div className="flex items-center gap-2">
                                            <select
                                                value={slot.start}
                                                onChange={(e) => handleTimeSlotChange(day as keyof BusinessHoursData, slotIndex, 'start', (e.target as HTMLSelectElement).value)}
                                                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            >
                                                {timeOptions.map(time => (
                                                    <option key={time} value={time}>{time}</option>
                                                ))}
                                            </select>
                                            <span className="text-gray-500 text-sm">to</span>
                                            <select
                                                value={slot.end}
                                                onChange={(e) => handleTimeSlotChange(day as keyof BusinessHoursData, slotIndex, 'end', (e.target as HTMLSelectElement).value)}
                                                className="px-3 py-1 border border-gray-300 rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-transparent"
                                            >
                                                {timeOptions.map(time => (
                                                    <option key={time} value={time}>{time}</option>
                                                ))}
                                            </select>
                                        </div>
                                        {schedule.timeSlots.length > 1 && (
                                            <button
                                                onClick={() => removeTimeSlot(day as keyof BusinessHoursData, slotIndex)}
                                                className="p-1 text-red-500 hover:text-red-700 hover:bg-red-50 rounded-md transition-colors"
                                                title="Remove time slot"
                                            >
                                                <Trash2 className="h-4 w-4" />
                                            </button>
                                        )}
                                    </div>
                                ))}
                                <button
                                    onClick={() => addTimeSlot(day as keyof BusinessHoursData)}
                                    className="flex items-center gap-2 px-3 py-2 text-sm text-teal-600 hover:text-teal-700 hover:bg-teal-50 rounded-md transition-colors"
                                >
                                    <Plus className="h-4 w-4" />
                                    Add another time slot
                                </button>
                            </div>
                        )}
                    </div>
                ))}
            </div>

            <div className="mt-6 p-4 bg-blue-50 border border-blue-200 rounded-lg">
                <h4 className="text-sm font-medium text-blue-800 mb-2">Tips for setting business hours:</h4>
                <ul className="text-sm text-blue-700 space-y-1">
                    <li>• You can add multiple time slots per day (e.g., 9:00-12:00 and 14:00-17:00 for lunch breaks)</li>
                    <li>• Time slots are available in 30-minute intervals</li>
                    <li>• Customers will only be able to book appointments during these specified hours</li>
                    <li>• You can always update your hours later as your business needs change</li>
                </ul>
            </div>
        </div>
    );
}
