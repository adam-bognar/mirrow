import { Calendar } from "lucide-react";

export function SignupForm() {
    return (
        <div className="w-full">

            <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
                <div className="absolute top-10 left-10 w-64 h-64 bg-teal-100 rounded-full mix-blend-multiply opacity-20 animate-blob"></div>
                <div className="absolute top-[30%] right-10 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-2000"></div>
                <div className="absolute bottom-10 left-[30%] w-80 h-80 bg-teal-200 rounded-full mix-blend-multiply opacity-20 animate-blob animation-delay-4000"></div>
            </div>

            <div className="flex flex-col w-full bg-white rounded-lg shadow-sm p-6 sm:p-8">
                <div className="flex justify-center mb-6">
                    <div className="flex items-center gap-2">
                        <div className="h-8 w-8 rounded-full bg-teal-500 flex items-center justify-center">
                            <Calendar className="h-4 w-4 text-white" />
                        </div>
                        <span className="text-xl font-bold">Mirrow</span>
                    </div>
                </div>

                <h2 className="text-xl font-bold text-gray-800 mb-6 text-center">Create your account</h2>

                <div className="flex flex-row gap-3 w-full mb-6">
                    <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-2 sm:px-4 py-2 w-1/3 gap-1 text-sm transition-colors duration-200 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M15.545 6.558a9.42 9.42 0 0 1 .139 1.626c0 2.434-.87 4.492-2.384 5.885h.002C11.978 15.292 10.158 16 8 16A8 8 0 1 1 8 0a7.689 7.689 0 0 1 5.352 2.082l-2.284 2.284A4.347 4.347 0 0 0 8 3.166c-2.087 0-3.86 1.408-4.492 3.304a4.792 4.792 0 0 0 0 3.063h.003c.635 1.893 2.405 3.301 4.492 3.301 1.078 0 2.004-.276 2.722-.764h-.003a3.702 3.702 0 0 0 1.599-2.431H8v-3.08h7.545z" />
                        </svg>
                        <span className="hidden sm:inline">Google</span>
                    </button>
                    <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-2 sm:px-4 py-2 w-1/3 gap-1 text-sm transition-colors duration-200 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M8 0C3.58 0 0 3.58 0 8c0 3.54 2.29 6.53 5.47 7.59.4.07.55-.17.55-.38 0-.19-.01-.82-.01-1.49-2.01.37-2.53-.49-2.69-.94-.09-.23-.48-.94-.82-1.13-.28-.15-.68-.52-.01-.53.63-.01 1.08.58 1.23.82.72 1.21 1.87.87 2.33.66.07-.52.28-.87.51-1.07-1.78-.2-3.64-.89-3.64-3.95 0-.87.31-1.59.82-2.15-.08-.2-.36-1.02.08-2.12 0 0 .67-.21 2.2.82.64-.18 1.32-.27 2-.27.68 0 1.36.09 2 .27 1.53-1.04 2.2-.82 2.2-.82.44 1.1.16 1.92.08 2.12.51.56.82 1.27.82 2.15 0 3.07-1.87 3.75-3.65 3.95.29.25.54.73.54 1.48 0 1.07-.01 1.93-.01 2.2 0 .21.15.46.55.38A8.012 8.012 0 0 0 16 8c0-4.42-3.58-8-8-8z" />
                        </svg>
                        <span className="hidden sm:inline">Github</span>
                    </button>
                    <button className="flex items-center justify-center bg-gray-100 hover:bg-gray-200 text-gray-800 rounded-md px-2 sm:px-4 py-2 w-1/3 gap-1 text-sm transition-colors duration-200 border border-gray-200">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 sm:h-5 sm:w-5" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z" />
                        </svg>
                        <span className="hidden sm:inline">Twitter</span>
                    </button>
                </div>

                <div className="flex flex-row items-center gap-4 mb-6 w-full">
                    <div className="w-full h-[1px] bg-gray-200"></div>
                    <span className="text-gray-500 text-sm font-medium whitespace-nowrap">OR</span>
                    <div className="w-full h-[1px] bg-gray-200"></div>
                </div>

                <form className="w-full space-y-4">
                    <div className="space-y-4">
                        <div>
                            <label htmlFor="email" className="text-sm text-gray-700 font-medium">Email</label>
                            <div className="mt-1">
                                <input
                                    type="email"
                                    id="email"
                                    className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    placeholder="name@company.com"
                                />
                            </div>
                        </div>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                                <label htmlFor="firstName" className="text-sm text-gray-700 font-medium">First name</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="firstName"
                                        className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                        placeholder="John"
                                    />
                                </div>
                            </div>
                            <div>
                                <label htmlFor="lastName" className="text-sm text-gray-700 font-medium">Last name</label>
                                <div className="mt-1">
                                    <input
                                        type="text"
                                        id="lastName"
                                        className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                        placeholder="Doe"
                                    />
                                </div>
                            </div>
                        </div>

                        <div>
                            <label htmlFor="password" className="text-sm text-gray-700 font-medium">Password</label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    id="password"
                                    className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    placeholder="Create a password"
                                />
                            </div>
                            <p className="text-xs text-gray-500 mt-1">Must be at least 8 characters with letters and numbers</p>
                        </div>

                        <div>
                            <label htmlFor="confirmPassword" className="text-sm text-gray-700 font-medium">Confirm password</label>
                            <div className="mt-1">
                                <input
                                    type="password"
                                    id="confirmPassword"
                                    className="w-full bg-white border border-gray-300 rounded-md py-2 px-3 text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500"
                                    placeholder="Confirm your password"
                                />
                            </div>
                        </div>

                        <div className="flex items-start pt-2">
                            <div className="flex items-center h-5">
                                <input
                                    id="terms"
                                    type="checkbox"
                                    className="h-4 w-4 text-teal-500 border-gray-300 rounded focus:ring-teal-500"
                                />
                            </div>
                            <div className="ml-3 text-sm">
                                <label htmlFor="terms" className="text-gray-600">
                                    I agree to Mirrow's <a href="#" className="text-teal-600 hover:text-teal-800 underline">Terms</a> and <a href="#" className="text-teal-600 hover:text-teal-800 underline">Privacy Policy</a>
                                </label>
                            </div>
                        </div>
                    </div>

                    <div className="pt-4">
                        <button
                            type="submit"
                            className="w-full py-2.5 rounded-md bg-teal-500 hover:bg-teal-600 text-white font-medium focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-teal-500 transition-colors duration-200"
                        >
                            Create account
                        </button>
                    </div>
                </form>

                <div className="mt-6 text-center">
                    <p className="text-sm text-gray-600">
                        Already have an account? <a href="#" className="text-teal-600 hover:text-teal-800 font-medium">Sign in</a>
                    </p>
                </div>
            </div>
        </div>
    );
}