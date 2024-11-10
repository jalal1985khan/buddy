import InputField from "@/components/InputComponents/Input";
import SelectField from "@/components/InputComponents/Select";

const AccountDetailsForm = () => {
  return (
    <>
      <form>
        <div className="space-y-6 rounded-lg bg-white p-6 shadow-md">
          <h3 className="mb-4 text-center text-[#A8A7A7]">
            Enter Account Details
          </h3>

          <InputField placeholder="Beneficiary Name" />
          <SelectField placeholder="Select Your Bank" />
          <InputField placeholder="Account Number" />
          <InputField placeholder="IFSC Number" />
        </div>

        <div className="mx-auto flex w-8/12 justify-center py-8">
          <button className=" w-full rounded-lg bg-[#00A6FF] py-3 text-white">
            Add Payout Method
          </button>
        </div>
      </form>
    </>
  );
};

export default AccountDetailsForm;
