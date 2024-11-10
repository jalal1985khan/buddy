export default function InputField({
  name,
  placeholder,
  value,
  onChange,
  maxLength,
}) {
  const handleInputChange = (e) => {
    const { value } = e.target;
    // Ensure that only numbers and max 6 digits are allowed
    if (/^\d{0,6}$/.test(value)) {
      onChange(e); // Trigger the parent onChange handler
    }
  };

  return (
    <div className="relative w-full">
      <input
        type="text"
        name={name}
        className="border-1 peer block w-full appearance-none rounded-lg border-[#00A6FF] bg-transparent bg-white px-2.5 pb-2.5 pt-4 text-sm text-gray-900 focus:border-[#00A6FF] focus:outline-none focus:ring-0 dark:border-gray-600 dark:text-white dark:focus:border-[#00A6FF]"
        placeholder=""
        maxLength={maxLength}
        value={value}
        onChange={onChange}
      />
      <label
        htmlFor="floating_outlined"
        // className="bg-red absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 px-2 text-sm text-[#00A6FF] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#00A6FF] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
        className="absolute -top-2 translate-x-1 bg-white px-1 text-[10px] text-[#00A6FF]"
      >
        {placeholder}
      </label>
    </div>
  );
}
