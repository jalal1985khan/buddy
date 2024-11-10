import InputField from "@/components/InputComponents/Input";

export default function BuddyLoanForm() {
  return (
    <>
      <div className="flex min-h-screen items-center justify-center bg-gradient-to-b from-blue-400 to-blue-200">
        <div className="container mx-auto w-11/12 max-w-md rounded-2xl bg-blue-50 p-8 shadow-lg">
          <div className="mb-6 text-center">
            <img
              src="/images/BL-Logo.svg"
              alt="Buddy Loan Logo"
              className="mx-auto mb-4 w-6/12"
            />
          </div>
          <form className="space-y-6">
            <InputField placeholder="Mobile Number" />
            <InputField placeholder="Enter Your Name" />
            <InputField placeholder="Enter OTP" />
            <button
              type="submit"
              className="submit-button mt-4 w-full rounded-lg bg-gradient-to-b from-blue-400 to-blue-600 py-3 text-xl font-bold text-white hover:from-blue-600 hover:to-blue-400"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
    </>
  );
}
