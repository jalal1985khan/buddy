"use client";
import { useState } from "react";
import InputField from "@/components/InputComponents/Input";
import SelectField from "@/components/InputComponents/Select";
import DateField from "@/components/InputComponents/Date";
import ToggleButtonGroup from "@/components/Leads/ToggleButton";
import Salaried from "@/components/Leads/Salaried";
import SelfEmployed from "@/components/Leads/SelfEmployed";
import Loader from "@/components/Loader/Loader";
import Success from "@/components/Submitted/Success";

export default function CreateLead() {
  const [selectedMethod, setSelectedMethod] = useState("salaried");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);

  const [formData, setFormData] = useState({
    loanAmount: "",
    tenure: "",
    firstName: "",
    lastName: "",
    email: "",
    pinCode: "",
    gender: "",
    maritalStatus: "",
    panNumber: "",
    dob: "",
    companyName: "",
    officeEmail: "",
    monthlyIncome: "",
    companyAddress: "",
    companyPinCode: "",
    businessName: "",
    gstNumber: "",
    businessRegistration: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Validate the form
  const validateForm = () => {
    const newErrors = {};

    // Basic fields
    if (!formData.loanAmount) newErrors.loanAmount = "Loan Amount is required";
    if (!formData.tenure) newErrors.tenure = "Tenure is required";
    if (!formData.firstName) newErrors.firstName = "First Name is required";
    if (!formData.lastName) newErrors.lastName = "Last Name is required";
    if (!formData.email) newErrors.email = "Email is required";
    if (
      formData.email &&
      !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(formData.email)
    ) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.pinCode) newErrors.pinCode = "PIN Code is required";
    if (!formData.gender) newErrors.gender = "Gender is required";
    if (!formData.maritalStatus)
      newErrors.maritalStatus = "Marital Status is required";
    if (!formData.panNumber) newErrors.panNumber = "PAN Number is required";
    if (!formData.dob) newErrors.dob = "Date of Birth is required";

    if (formData.pinCode && !/^\d{6}$/.test(formData.pinCode)) {
      newErrors.pinCode = "PIN Code must be 6 digits and numbers only";
    }

    // Conditional fields based on employment type
    if (selectedMethod === "salaried") {
      if (!formData.companyName)
        newErrors.companyName = "Company Name is required";
      if (!formData.officeEmail)
        newErrors.officeEmail = "Office Email ID is required";
      if (
        formData.officeEmail &&
        !/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.test(
          formData.officeEmail,
        )
      ) {
        newErrors.officeEmail = "Please enter a valid Office Email ID";
      }
      if (!formData.monthlyIncome)
        newErrors.monthlyIncome = "Monthly Income is required";
      if (!formData.companyAddress)
        newErrors.companyAddress = "Company Address is required";
      if (!formData.companyPinCode)
        newErrors.companyPinCode = "Company PIN Code is required";
      if (formData.companyPinCode && !/^\d{6}$/.test(formData.companyPinCode)) {
        newErrors.companyPinCode = "Check PinCode";
      }
    }

    if (selectedMethod === "selfEmployed") {
      if (!formData.companyType)
        newErrors.companyType = "Company Type is required";
      if (!formData.annualTurnover)
        newErrors.annualTurnover = "Annual Turnover is required";
      if (!formData.businessAge)
        newErrors.businessAge = "Business Age is required";

      if (!formData.registrationProof)
        newErrors.registrationProof = "Registration Proof is required";
      if (formData.registrationProof === "yes" && !formData.registrationId) {
        newErrors.registrationId = "Registration ID is required";
      }

      if (!formData.gstAvailable)
        newErrors.gstAvailable = "GST Available is required";
      if (formData.gstAvailable === "yes" && !formData.gstNumber) {
        newErrors.gstNumber = "GST Number is required";
      }
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    if (validateForm()) {
      setTimeout(() => {
        console.log("Filtered Form Data Submitted:", formData);
        setLoading(false);
        setSuccess(true);
        setTimeout(() => {
          setSuccess(false);
        }, 3000);
      }, 1000);
    } else {
      setLoading(false);
      console.log("Form has errors:", errors);
    }
  };

  return (
    <div className="">
      <form onSubmit={handleSubmit}>
        <div className="mx-auto mb-4 max-w-lg rounded-lg bg-white p-4 shadow">
          <h2 className="mb-4 text-center text-lg font-medium text-[#A8A7A7]">
            Loan Details
          </h2>
          <div className="space-y-4">
            <InputField
              name="loanAmount"
              placeholder="Loan Amount"
              value={formData.loanAmount}
              onChange={handleChange}
            />
            {errors.loanAmount && (
              <p className="text-red-500">{errors.loanAmount}</p>
            )}
            <SelectField
              name="tenure"
              placeholder="Tenure"
              data={[
                { value: "us", name: "United States" },
                { value: "ca", name: "Canada" },
                { value: "uk", name: "United Kingdom" },
              ]}
              value={formData.tenure}
              onChange={handleChange}
            />
            {errors.tenure && <p className="text-red-500">{errors.tenure}</p>}
          </div>
        </div>

        <div className="mx-auto mb-4 max-w-lg rounded-lg bg-white p-4 shadow">
          <h2 className="mb-4 text-center text-lg font-medium text-[#A8A7A7]">
            Personal Details
          </h2>
          <div className="space-y-4">
            <InputField
              name="firstName"
              placeholder="First Name"
              value={formData.firstName}
              onChange={handleChange}
            />
            {errors.firstName && (
              <p className="text-red-500">{errors.firstName}</p>
            )}
            <InputField
              name="lastName"
              placeholder="Last Name"
              value={formData.lastName}
              onChange={handleChange}
            />
            {errors.lastName && (
              <p className="text-red-500">{errors.lastName}</p>
            )}
            <div className="flex justify-between gap-4">
              <div className="w-full">
                <InputField
                  name="email"
                  placeholder="Email ID"
                  value={formData.email}
                  onChange={handleChange}
                />
                {errors.email && <p className="text-red-500">{errors.email}</p>}
              </div>
              <div className="w-full">
                <InputField
                  name="pinCode"
                  placeholder="PIN Code"
                  value={formData.pinCode}
                  onChange={handleChange}
                  maxLength={6}
                />
                {errors.pinCode && (
                  <p className="text-red-500">{errors.pinCode}</p>
                )}
              </div>
            </div>
            <div className="flex justify-between gap-4">
              <div className="w-full ">
                <SelectField
                  name="gender"
                  placeholder="Gender"
                  data={[
                    { value: "Male", name: "Male" },
                    { value: "Female", name: "Female" },
                  ]}
                  value={formData.gender}
                  onChange={handleChange}
                />
                {errors.gender && (
                  <p className="text-red-500">{errors.gender}</p>
                )}
              </div>
              <div className="w-full">
                <SelectField
                  name="maritalStatus"
                  placeholder="Marital Status"
                  data={[
                    { value: "Single", name: "Single" },
                    { value: "Married", name: "Married" },
                  ]}
                  value={formData.maritalStatus}
                  onChange={handleChange}
                />
                {errors.maritalStatus && (
                  <p className="text-red-500">{errors.maritalStatus}</p>
                )}
              </div>
            </div>
          </div>
        </div>

        <div className="mx-auto mb-4 max-w-lg rounded-lg bg-white p-4 shadow">
          <h2 className="mb-4 text-center text-lg font-medium text-[#A8A7A7]">
            PAN Card Details
          </h2>
          <div className="space-y-4">
            <InputField
              name="panNumber"
              placeholder="PAN Number"
              value={formData.panNumber}
              onChange={handleChange}
            />
            {errors.panNumber && (
              <p className="text-red-500">{errors.panNumber}</p>
            )}
            <DateField
              name="dob"
              placeholder="Date of Birth"
              value={formData.dob}
              onChange={handleChange}
            />
            {errors.dob && <p className="text-red-500">{errors.dob}</p>}
          </div>
        </div>

        <div className="mx-auto mb-4 max-w-lg rounded-lg bg-white p-4 shadow">
          <h2 className="mb-4 text-center text-lg font-medium text-[#A8A7A7]">
            Profession Details
          </h2>
          <div className="space-y-4">
            <ToggleButtonGroup
              selectedMethod={selectedMethod}
              setSelectedMethod={setSelectedMethod}
            />
            {selectedMethod === "salaried" ? (
              <Salaried
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            ) : (
              <SelfEmployed
                formData={formData}
                handleChange={handleChange}
                errors={errors}
              />
            )}
          </div>
        </div>

        <div className="mx-auto flex w-8/12 justify-center py-2">
          <button
            type="submit"
            className="mt-4 rounded-lg bg-[#33B5E5] px-6 py-2 text-white"
            disabled={loading}
          >
            {loading ? "Submitting..." : "Submit"}
          </button>
        </div>
      </form>
      {loading && <Loader />}
      {success && <Success />}
    </div>
  );
}
