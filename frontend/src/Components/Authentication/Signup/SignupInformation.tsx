import { CircleX, Calendar, Clock, UserCheck } from "lucide-react"

export function SignupInformation() {
    return (
        <div className={"flex items-center w-full h-full bg-[#023347] p-10"}>
            <div className={"flex h-full flex-col max-w-md mx-auto"}>
                <div className={"flex flex-col gap-6"}>
                    <div>
                        <div className="flex items-center gap-2 mb-2">
                            <div className="h-6 w-6 rounded-full bg-teal-500 flex items-center justify-center">
                                <Calendar className="h-3 w-3 text-white" />
                            </div>
                            <span className="text-teal-500 font-medium">Mirrow</span>
                        </div>
                        <h1 className={"text-2xl font-bold text-white mb-1"}>Streamline your appointments</h1>
                        <p className={"text-sm text-gray-400 flex items-center gap-1"}>
                            <CircleX className={"text-gray-500"} size={16} />
                            <span>No credit card required for free plan</span>
                        </p>
                    </div>

                    <div className="space-y-6 mt-4">
                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="h-10 w-10 rounded-full bg-[#0b3a4f] flex items-center justify-center">
                                    <Calendar size={20} className="text-teal-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Smart scheduling</h3>
                                <p className="text-sm text-gray-400">
                                    Create automatic booking systems that sync with your existing calendars and prevent double-bookings.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="h-10 w-10 rounded-full bg-[#0b3a4f] flex items-center justify-center">
                                    <Clock size={20} className="text-teal-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Automated reminders</h3>
                                <p className="text-sm text-gray-400">
                                    Reduce no-shows with customizable SMS and email reminders sent at your preferred timing intervals.
                                </p>
                            </div>
                        </div>

                        <div className="flex gap-4">
                            <div className="mt-1">
                                <div className="h-10 w-10 rounded-full bg-[#0b3a4f] flex items-center justify-center">
                                    <UserCheck size={20} className="text-teal-500" />
                                </div>
                            </div>
                            <div>
                                <h3 className="text-white font-medium mb-1">Client management</h3>
                                <p className="text-sm text-gray-400">
                                    Build a loyal client base with custom profiles, booking history, and personalized communication.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}