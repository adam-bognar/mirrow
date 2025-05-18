import { SignupForm } from "../Components/Authentication/Signup/SignupForm";

export function SignupPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
        <SignupForm />
      </div>
    </div>
  );
}
