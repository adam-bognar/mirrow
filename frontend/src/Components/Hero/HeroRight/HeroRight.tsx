import { AppointmentDetails } from "../../AppointmentDetails/AppointmentDetails";
import { Calendar, Star, Users } from "lucide-react";
import { inView } from "motion";
import { useEffect, useRef } from "react";

export function HeroRight(){
    const calendarRef = useRef<HTMLDivElement>(null);
    const starRef = useRef<HTMLDivElement>(null);
    const notificationRef = useRef<HTMLDivElement>(null);
    const mainCardRef = useRef<HTMLDivElement>(null);
    const card1Ref = useRef<HTMLDivElement>(null);
    const card2Ref = useRef<HTMLDivElement>(null);
    const card3Ref = useRef<HTMLDivElement>(null);
    const pulseRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (calendarRef.current) {
            calendarRef.current.style.transition = "transform 2s ease-in-out";
            calendarRef.current.classList.add("animate-float");
        }

        if (starRef.current) {
            starRef.current.style.transition = "transform 3s ease-in-out";
            starRef.current.classList.add("animate-float-delay");
        }

        if (notificationRef.current) {
            inView(notificationRef.current, () => {
                notificationRef.current!.style.opacity = "1";
                notificationRef.current!.style.transform = "translateY(0)";
            });
        }

        if (mainCardRef.current) {
            inView(mainCardRef.current, () => {
                mainCardRef.current!.style.opacity = "1";
                mainCardRef.current!.style.transform = "translateY(0)";
            });
        }

        const cards = [card1Ref, card2Ref, card3Ref];
        cards.forEach((cardRef, index) => {
            if (cardRef.current) {
                cardRef.current.style.transition = `opacity 0.5s ease-out ${0.2 + index * 0.1}s, transform 0.5s ease-out ${0.2 + index * 0.1}s`;
                
                inView(cardRef.current, () => {
                    cardRef.current!.style.opacity = "1";
                    cardRef.current!.style.transform = "translateX(0)";
                });
            }
        });

        if (pulseRef.current) {
            pulseRef.current.classList.add("animate-pulse");
        }
    }, []);

    return (
        <div className={"flex w-full items-center justify-center"}>
            <div className="relative max-w-sm mx-auto">
                <div ref={calendarRef} className="absolute -top-12 -right-10 h-16 w-16 bg-teal-100 rounded-full flex items-center justify-center border border-teal-200 shadow-sm">
                    <Calendar className="h-6 w-6 text-teal-600" />
                </div>
                <div ref={starRef} className="absolute -bottom-10 -left-16 h-20 w-20 bg-teal-50 rounded-full flex items-center justify-center border border-teal-100 shadow-sm">
                    <Star className="h-8 w-8 text-yellow-400" />
                </div>

                <div ref={notificationRef} className="absolute -top-16 left-20 bg-white rounded-lg border shadow-md p-2 z-20 opacity-0 translate-y-4 transition-all duration-500">
                    <div className="flex items-center gap-2">
                        <div className="h-6 w-6 rounded-full bg-green-100 flex items-center justify-center">
                            <div ref={pulseRef} className="h-3 w-3 rounded-full bg-green-500"></div>
                        </div>
                        <p className="text-xs font-medium">New booking confirmed!</p>
                    </div>
                </div>

                <div ref={mainCardRef} className="transition-all hover:scale-105 hover:shadow-lg opacity-0 translate-y-8 duration-500">
                    <AppointmentDetails 
                        title="Hair styling"
                        date="Today, 2:00 PM"
                    />
                </div>

                <div ref={card1Ref} className="absolute top-16 -right-32 w-64 bg-white rounded-lg border shadow-lg p-3 -rotate-6 z-0 transition-all hover:rotate-0 hover:-translate-y-1 hover:shadow-xl opacity-0 translate-x-8">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-purple-100 flex items-center justify-center">
                            <Users className="h-4 w-4 text-purple-600" />
                        </div>
                        <div>
                            <p className="font-medium text-sm">Spa Treatment</p>
                            <p className="text-xs text-muted-foreground">Tomorrow, 10:00 AM</p>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="h-3 w-full bg-gray-100 rounded"></div>
                        <div className="h-3 w-5/6 bg-gray-100 rounded"></div>
                    </div>
                </div>

                <div ref={card2Ref} className="absolute -bottom-16 -right-20 w-56 bg-white rounded-lg border shadow-lg p-3 rotate-12 z-0 transition-all hover:rotate-0 hover:-translate-y-1 hover:shadow-xl opacity-0 translate-x-8">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                            <Calendar className="h-4 w-4 text-blue-600" />
                        </div>
                        <div>
                            <p className="font-medium text-sm">Dental Checkup</p>
                            <p className="text-xs text-muted-foreground">Friday, 9:30 AM</p>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="h-3 w-full bg-gray-100 rounded"></div>
                        <div className="h-3 w-4/6 bg-gray-100 rounded"></div>
                    </div>
                </div>

                <div ref={card3Ref} className="absolute top-32 -left-24 w-52 bg-white rounded-lg border shadow-lg p-3 rotate-[-8deg] z-0 transition-all hover:rotate-0 hover:-translate-y-1 hover:shadow-xl opacity-0 translate-x-8">
                    <div className="flex items-center gap-2 mb-2">
                        <div className="h-8 w-8 rounded-full bg-green-100 flex items-center justify-center">
                            <Users className="h-4 w-4 text-green-600" />
                        </div>
                        <div>
                            <p className="font-medium text-sm">Fitness Session</p>
                            <p className="text-xs text-muted-foreground">Saturday, 3:00 PM</p>
                        </div>
                    </div>
                    <div className="space-y-1.5">
                        <div className="h-3 w-full bg-gray-100 rounded"></div>
                        <div className="h-3 w-3/4 bg-gray-100 rounded"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}