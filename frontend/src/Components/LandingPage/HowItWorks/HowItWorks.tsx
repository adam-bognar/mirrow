import { motion, useInView } from "motion/react";
import { useRef } from "preact/hooks";

export function HowItWorks() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    const featureVariants = {
        hidden: { opacity: 0, y: 30 },
        visible: (i: number) => ({
            opacity: 1,
            y: 0,
            transition: {
                delay: i * 0.3,
                duration: 0.5,
                ease: "easeOut"
            }
        }),
    };

    const steps = [
        {
            number: "1",
            title: "Register your business",
            description: "Sign up, create your profile, and set your availability in just minutes."
        },
        {
            number: "2",
            title: "Customize your services",
            description: "Add your services, prices, duration, and special offers to attract customers."
        },
        {
            number: "3", 
            title: "Watch your bookings grow",
            description: "Receive notifications for new bookings and manage your schedule efficiently."
        }
    ];

    return (
        <div className={"w-full bg-[#023347] py-16 px-4 md:p-20"}>
            <div ref={ref} className={"max-w-7xl mx-auto"}>
                <h1 className={"text-white text-2xl md:text-3xl font-bold mb-12 max-w-xl"}>
                Maximize your bookings with a platform that works for you.
                </h1>

                <div className={"flex flex-col md:flex-row items-stretch justify-between gap-6 md:gap-10"}>
                    {steps.map(({ number, title, description }, i) => (
                        <motion.div
                            key={number}
                            className={"relative flex flex-col rounded-lg shadow-[0_0_15px_rgba(0,0,0,0.1)] items-start p-6 w-full md:w-[31%] bg-[#0b3a4f] group "}
                            initial="hidden"
                            animate={isInView ? "visible" : "hidden"}
                            variants={featureVariants}
                            custom={i}
                        >
                            <div 
                                className="absolute text-[120px] font-bold leading-none"
                                style={{
                                    top: '-10px',
                                    left: '10px',
                                    background: 'linear-gradient(to bottom, rgba(164, 182, 195, 0.9) 0%, rgba(13, 148, 136, 0) 80%)',
                                    WebkitBackgroundClip: 'text',
                                    WebkitTextFillColor: 'transparent',
                                    zIndex: '0'
                                }}
                            >
                                {number}
                            </div>
                            
                            <div className="relative z-10 mt-14">
                                <h2 className={"font-semibold text-lg text-white mb-2"}>
                                    {title}
                                </h2>
                                <p className={"text-gray-300 text-sm"}>
                                    {description}
                                </p>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </div>
    )
}