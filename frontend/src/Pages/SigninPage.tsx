import { SigninForm } from "../Components/Authentication/Signin/SigninForm";

export function SigninPage() {
  return (
    <div className="w-full min-h-screen bg-gray-50 flex items-center justify-center">
      <div className="w-full max-w-xl mx-auto px-4 sm:px-6">
        <SigninForm />
      </div>
    </div>
  );
}