const ToggleButtonGroup = ({ selectedMethod, setSelectedMethod }) => {
  return (
    <div className="mb-6 flex justify-center">
      <div
        onClick={() => setSelectedMethod("salaried")}
        className={`w-[150px] cursor-pointer rounded-l-full px-4 py-2 ${
          selectedMethod === "salaried"
            ? "bg-gradient-to-r from-[#6F89D6] to-[#243B81] text-white"
            : "border border-blue-500 bg-white text-blue-900"
        }`}
      >
        Salaried
      </div>
      <div
        onClick={() => setSelectedMethod("selfEmployed")}
        className={`w-[150px] cursor-pointer rounded-r-full px-4 py-2 ${
          selectedMethod === "selfEmployed"
            ? "bg-gradient-to-r from-[#6F89D6] to-[#243B81] text-white"
            : "border border-blue-500 bg-white text-[253C82]"
        }`}
      >
        Self Employed
      </div>
    </div>
  );
};

export default ToggleButtonGroup;
