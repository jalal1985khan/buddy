import { useState, useEffect } from "react";
import InputField from "@/components/InputComponents/Input";
import SelectField from "@/components/InputComponents/Select";
import RadioField from "@/components/InputComponents/RadioField";

export default function SelfEmployed({ formData, handleChange, errors }) {
  const [hasRegistrationProof, setHasRegistrationProof] = useState(
    formData.registrationProof === "yes",
  );
  const [hasGstNumber, setHasGstNumber] = useState(
    formData.gstAvailable === "yes",
  );

  // Handle changes for the radio fields
  const handleRegistrationProofChange = (e) => {
    const value = e.target.value;
    setHasRegistrationProof(value === "yes");
    handleChange({
      target: { name: "registrationProof", value },
    });
  };

  const handleGstNumberChange = (e) => {
    const value = e.target.value;
    setHasGstNumber(value === "yes");
    handleChange({
      target: { name: "gstAvailable", value },
    });
  };

  // Validation for radio buttons (this could also be part of form validation on submit)
  useEffect(() => {
    if (!formData.registrationProof) {
      errors.registrationProof = "This field is required.";
    } else {
      delete errors.registrationProof;
    }

    if (!formData.gstAvailable) {
      errors.gstAvailable = "This field is required.";
    } else {
      delete errors.gstAvailable;
    }
  }, [formData.registrationProof, formData.gstAvailable, errors]);

  return (
    <div className="space-y-4">
      {/* Company Type */}
      <SelectField
        name="companyType"
        placeholder="Company Type"
        data={[
          { value: "Sole Proprietorship", name: "Sole Proprietorship" },
          { value: "Partnership", name: "Partnership" },
          { value: "Pvt. Ltd", name: "Pvt. Ltd" },
          { value: "Freelancer", name: "Freelancer" },
        ]}
        value={formData.companyType}
        onChange={handleChange}
      />
      {errors.companyType && (
        <p className="text-red-500">{errors.companyType}</p>
      )}

      {/* Registration Proof */}
      <RadioField
        name="registrationProof"
        label="Do you have business registration proof?"
        options={[
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ]}
        onChange={handleRegistrationProofChange}
        value={formData.registrationProof}
      />
      {errors.registrationProof && (
        <p className="text-red-500">{errors.registrationProof}</p>
      )}
      {hasRegistrationProof && (
        <>
          <InputField
            name="registrationId"
            placeholder="Registration ID"
            value={formData.registrationId}
            onChange={handleChange}
          />
          {errors.registrationId && (
            <p className="text-red-500">{errors.registrationId}</p>
          )}
        </>
      )}

      {/* Annual Turnover */}
      <InputField
        name="annualTurnover"
        placeholder="Annual Turnover"
        value={formData.annualTurnover}
        onChange={handleChange}
      />
      {errors.annualTurnover && (
        <p className="text-red-500">{errors.annualTurnover}</p>
      )}

      {/* Business Age */}
      <SelectField
        name="businessAge"
        placeholder="How old is your business?"
        data={[
          { value: "<2 years", name: "<2 years" },
          { value: "2-5 years", name: "2-5 years" },
          { value: ">5 years", name: ">5 years" },
        ]}
        value={formData.businessAge}
        onChange={handleChange}
      />
      {errors.businessAge && (
        <p className="text-red-500">{errors.businessAge}</p>
      )}

      {/* GST Number */}
      <RadioField
        name="gstAvailable"
        label="GST Available?"
        options={[
          { label: "Yes", value: "yes" },
          { label: "No", value: "no" },
        ]}
        onChange={handleGstNumberChange}
        value={formData.gstAvailable}
      />
      {errors.gstAvailable && (
        <p className="text-red-500">{errors.gstAvailable}</p>
      )}
      {hasGstNumber && (
        <>
          <InputField
            name="gstNumber"
            placeholder="GST Number"
            value={formData.gstNumber}
            onChange={handleChange}
          />
          {errors.gstNumber && (
            <p className="text-red-500">{errors.gstNumber}</p>
          )}
        </>
      )}
    </div>
  );
}
