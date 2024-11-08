export default function BuddyLoanForm() {
  function InputField({ placeholder }) {
    return (
      <div className="relative py-4">
        <input
          type="text"
          id="floating_outlined"
          className="border-1 peer block w-full appearance-none rounded-lg border-gray-300 bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-blue-600 focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-blue-500"
          placeholder=""
        />
        <label
          htmlFor="floating_outlined"
          className="bg-red absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 px-2 text-sm text-gray-500 duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-blue-600 dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        >
          {placeholder}
        </label>
      </div>
    );
  }

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
          <form>
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
