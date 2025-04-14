import { Calendar } from "lucide-react";
import { TealButton } from "../Buttons/TealButton";

type Props = {
    title: string;
    date: string;
};

export function AppointmentDetails({title, date}: Props) {
    return(
        <div className={"relative flex flex-col bg-white rounded-xl shadow-lg w-[300px] sm:w-[400px] z-10"}>

                    <div class={"flex flex-row bg-teal-500 rounded-t-xl p-5 items-center "}>
                        <Calendar size={20} className={"text-white"} />
                        <h2 className={"text-white font-semibold text-xl pl-3"}>Appointment Details</h2>
                    </div>
                    <div className={"flex flex-col gap-5 p-5"}>
                        <div className={"flex flex-row items-center gap-4 bg-gray-50 p-2 rounded-xl"}>
                            <div className={"h-10 w-10 rounded-full bg-teal-100 flex items-center justify-center"}>
                                <Calendar className={"h-5 w-5 text-teal-600 bg-teal-100"} />
                            </div>
                            <div className={"flex flex-col"}>
                                <h3 className={"font-semibold"}>{title}</h3>
                                <p className={"text-gray-500 "}>{date}</p>
                            </div>
                        </div>
                        <div className="space-y-2">
                            <div className="h-4 w-3/4 bg-gray-100 rounded"></div>
                            <div className="h-4 w-full bg-gray-100 rounded"></div>
                            <div className="h-4 w-5/6 bg-gray-100 rounded"></div>
                        </div>

                        <TealButton classname="justify-center ">
                            Confirm Booking
                        </TealButton>
                    </div>
                </div>
    )
}