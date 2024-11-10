"use client";
import InputField from "@/components/InputComponents/Input";
import SelectField from "@/components/InputComponents/Select";
import DateField from "@/components/InputComponents/Date";

export default function Salaried({ formData, handleChange, errors }) {
  return (
    <div className="space-y-4">
      <InputField
        name="companyName"
        placeholder="Company Name"
        value={formData.companyName}
        onChange={handleChange}
      />
      {errors.companyName && (
        <p className="text-red-500">{errors.companyName}</p>
      )}

      <InputField
        name="officeEmail"
        placeholder="Office Email ID"
        value={formData.officeEmail}
        onChange={handleChange}
      />
      {errors.officeEmail && (
        <p className="text-red-500">{errors.officeEmail}</p>
      )}

      <InputField
        name="monthlyIncome"
        placeholder="Monthly Income"
        value={formData.monthlyIncome}
        onChange={handleChange}
      />
      {errors.monthlyIncome && (
        <p className="text-red-500">{errors.monthlyIncome}</p>
      )}

      <InputField
        name="companyAddress"
        placeholder="Company Address"
        value={formData.companyAddress}
        onChange={handleChange}
      />
      {errors.companyAddress && (
        <p className="text-red-500">{errors.companyAddress}</p>
      )}

      <InputField
        name="companyPinCode"
        placeholder="Company PIN Code"
        value={formData.companyPinCode}
        onChange={handleChange}
        maxLength={6}
      />
      {errors.companyPinCode && (
        <p className="text-red-500">{errors.companyPinCode}</p>
      )}
    </div>
  );
}
