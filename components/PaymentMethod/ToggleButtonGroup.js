const ToggleButtonGroup = ({ selectedMethod, setSelectedMethod }) => {
  return (
    <div className="mb-6 flex justify-center">
      <button
        onClick={() => setSelectedMethod("UPI")}
        className={`w-[150px] rounded-l-full px-4 py-2 ${
          selectedMethod === "UPI"
            ? "bg-gradient-to-r from-[#6F89D6] to-[#243B81] text-white"
            : "border border-blue-500 bg-white text-blue-900"
        }`}
      >
        UPI
      </button>
      <button
        onClick={() => setSelectedMethod("Bank")}
        className={`w-[150px] rounded-r-full px-4 py-2 ${
          selectedMethod === "Bank"
            ? "bg-gradient-to-r from-[#6F89D6] to-[#243B81] text-white"
            : "border border-blue-500 bg-white text-[253C82]"
        }`}
      >
        Bank Account
      </button>
    </div>
  );
};

export default ToggleButtonGroup;
