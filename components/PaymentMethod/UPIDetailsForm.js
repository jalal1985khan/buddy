import InputField from "@/components/InputComponents/Input";

const UPIDetailsForm = () => {
  return (
    <>
      <div className="rounded-lg bg-white p-6 shadow-md">
        <h3 className="mb-4 text-center text-[#A8A7A7]">Enter UPI Details</h3>
        <div className="mb-4 space-y-6">
          <InputField placeholder="UPI ID" />
          <InputField placeholder="Mobile Number" />
        </div>
      </div>
      <div className="mx-auto flex w-8/12 justify-center py-8">
        <button className=" w-full rounded-lg bg-[#00A6FF] py-3 text-white">
          Add Payout Method
        </button>
      </div>
    </>
  );
};

export default UPIDetailsForm;
