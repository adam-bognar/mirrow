import { Calendar, Search, Shield } from "lucide-react";
import { motion, useInView } from "framer-motion"; // or @motionone/react
import { useRef } from "react";

export function Features() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const featureVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.2,
                duration: 0.5,
                ease: "easeOut"
            }
        }),
    };

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className={"w-full"}
        >
            <div className={"flex flex-col items-center m-10 py-10 sm:px-15 gap-10 sm:gap-15 rounded-2xl sm:shadow-[0_0_15px_rgba(0,0,0,0.1)]"}> 
                <div className={"flex flex-col items-center justify-between gap-5 w-full"}>
                    <h1 className={"text-4xl font-semibold"}>Experience that grows with your scale.</h1>
                    <h2 className={"text-gray-500"}>Design a flexible booking system that works for your business and streamlines your time management</h2>
                </div>

                <div className={"flex flex-col sm:flex-row flex-wrap items-center justify-center gap-10 md:gap-20"}>
                    {[{
                        Icon: Calendar,
                        title: "Easy scheduling",
                        text: "Create a simple booking experience for your customers. Reduce no-shows by sending automatic reminders."
                    }, {
                        Icon: Search,
                        title: "Business discovery",
                        text: "Your business gets found by new customers and generates a loyal client base through our search platform."
                    }, {
                        Icon: Shield,
                        title: "Secure management",
                        text: "Securely manage your business with reliable scheduling, easy booking, and client data privacy."
                    }].map(({ Icon, title, text }, i) => (
                        <motion.div
                            key={title}
                            className={"flex flex-col border p-4 rounded-xl border-gray-200 sm:border-0 items-start gap-2 w-full sm:w-[300px]"}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={featureVariants}
                            custom={i}
                        >
                            <Icon className={"h-8 w-8 text-teal-500"} />
                            <h2 className={"font-semibold text-lg"}>{title}</h2>
                            <h3 className={"text-md text-gray-500"}>{text}</h3>
                        </motion.div>
                    ))}
                </div>
            </div>
        </motion.div>
    );
}
