"use client";
import { useState, useEffect } from "react";
import InputField from "@/components/InputComponents/Input";
import ImageFileField from "@/components/InputComponents/ImageFileUpload";
import Loader from "@/components/Loader/Loader";
import Success from "@/components/Submitted/Success";
import SelectField from "@/components/InputComponents/Select";
import DateField from "@/components/InputComponents/Date";

export default function KycForm() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});
  const [otpVisible, setOtpVisible] = useState(false);
  const [timer, setTimer] = useState(0);
  const [imagePreview, setImagePreview] = useState(null);

  const [formData, setFormData] = useState({
    name: "",
    panCard: "",
    uploadFile: null,
    email: "",
    pincode: "",
    state: "",
    city: "",
    emailOtp: "",
  });

  useEffect(() => {
    if (timer > 0) {
      const interval = setInterval(() => {
        setTimer((prev) => prev - 1);
      }, 1000);
      return () => clearInterval(interval);
    }
  }, [timer]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
    if (name === "email") {
      validateEmail(value);
    }
  };

  const handleFileChange = (file) => {
    setFormData((prevData) => ({
      ...prevData,
      uploadFile: file,
    }));

    const reader = new FileReader();
    reader.onloadend = () => {
      setImagePreview(reader.result);
    };
    if (file) {
      reader.readAsDataURL(file);
    }
  };

  const validateEmail = (email) => {
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    if (!email || !emailRegex.test(email)) {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: "Please enter a valid email address",
      }));
      setOtpVisible(false);
      return false;
    } else {
      setErrors((prevErrors) => ({
        ...prevErrors,
        email: null,
      }));
      setOtpVisible(true);
      setTimer(10); // Start the 10-second timer
      return true;
    }
  };

  const validateForm = () => {
    let newErrors = {};

    if (!formData.name) {
      newErrors.name = "Name is required";
    }
    if (!formData.panCard) {
      newErrors.panCard = "PAN number is required";
    }
    if (!formData.uploadFile) newErrors.uploadFile = "Document is required";
    // Adjusted the email validation to check for valid email before proceeding
    if (!formData.email || !validateEmail(formData.email)) {
      newErrors.email = "Please enter a valid email address";
    }
    if (!formData.pincode || formData.pincode.length !== 6) {
      newErrors.pincode = "Pincode must be 6 digits";
    }
    if (!formData.state) {
      newErrors.state = "State is required";
    }
    if (!formData.city) {
      newErrors.city = "City is required";
    }
    if (!formData.emailOtp) {
      newErrors.emailOtp = "Email OTP is required";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    validateForm();

    if (Object.keys(errors).length === 0 && otpVisible) {
      setTimeout(() => {
        console.log("Form submitted with data:", formData);
        setLoading(false);
        setSuccess(true);
        setTimeout(() => setSuccess(false), 5000);
      }, 3000);
    } else {
      setLoading(false);
      console.log("Validation errors:", errors);
    }
  };

  return (
    <div className="py-8">
      <h1 className="mb-4 text-center text-2xl font-semibold text-blue-700">
        Update KYC
      </h1>
      <main className="flex items-center justify-center">
        <div className="w-full max-w-lg rounded-lg border border-gray-200 bg-white p-8 shadow-lg">
          <p className="mb-6 text-center text-lg text-[#A8A7A7]">
            Enter Your Details
          </p>
          <form className="space-y-4" onSubmit={handleSubmit}>
            <InputField
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
            />
            {errors.name && <p className="text-red-500">{errors.name}</p>}

            <InputField
              name="panCard"
              placeholder="PAN Number"
              value={formData.panCard}
              onChange={handleChange}
            />
            {errors.panCard && <p className="text-red-500">{errors.panCard}</p>}

            {imagePreview ? (
              <div className="relative mt-4">
                <img
                  src={imagePreview}
                  alt="Image Preview"
                  className="h-auto w-full rounded-md"
                />
                <button
                  className="absolute right-2 top-2 mt-2 rounded-full bg-red-500 px-2 text-white"
                  onClick={() => setImagePreview(null)}
                >
                  X
                </button>
              </div>
            ) : (
              <>
                <ImageFileField
                  name="uploadFile"
                  placeholder="Upload Document"
                  type="file"
                  onChange={handleFileChange}
                />
                {errors.uploadFile && (
                  <p className="text-red-500">{errors.uploadFile}</p>
                )}
              </>
            )}

            <InputField
              name="pincode"
              placeholder="Pincode"
              value={formData.pincode}
              onChange={handleChange}
              maxLength={6}
            />
            {errors.pincode && <p className="text-red-500">{errors.pincode}</p>}

            <div className="flex flex-row justify-between gap-4">
              <div className="w-full">
                <InputField
                  name="state"
                  placeholder="State"
                  value={formData.state}
                  onChange={handleChange}
                />
                {errors.state && <p className="text-red-500">{errors.state}</p>}
              </div>
              <div className="w-full">
                <InputField
                  name="city"
                  placeholder="City"
                  value={formData.city}
                  onChange={handleChange}
                />
                {errors.city && <p className="text-red-500">{errors.city}</p>}
              </div>
            </div>

            <InputField
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
            />
            {errors.email && <p className="text-red-500">{errors.email}</p>}
            {otpVisible && (
              <>
                <div className="mb-4 flex flex-col items-center justify-between">
                  <div className="w-full text-end">
                    <p className="text-sm text-gray-400">Re-Send Email OTP</p>
                    <p className="text-sm text-blue-700">{timer} sec</p>
                  </div>
                  <div className="w-full">
                    <InputField
                      name="emailOtp"
                      placeholder="Email OTP"
                      value={formData.emailOtp}
                      onChange={handleChange}
                    />
                  </div>
                </div>
                {errors.emailOtp && (
                  <p className="text-red-500">{errors.emailOtp}</p>
                )}
              </>
            )}

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
        </div>
      </main>
    </div>
  );
}
