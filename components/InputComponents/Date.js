export default function DateField({ name, placeholder, value, onChange }) {
  return (
    <div className="relative w-full">
      <div className="relative">
        <input
          datepicker
          id="default-datepicker"
          type="date"
          name={name}
          value={value}
          onChange={onChange}
          className="block w-full appearance-none rounded-lg border border-[#00A6FF] bg-white p-3 text-sm text-gray-900 focus:border-blue-500 focus:ring-blue-500 dark:border-gray-600 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 dark:focus:border-blue-500 dark:focus:ring-blue-500"
          placeholder="Select date"
        />
        <div className="pointer-events-none absolute inset-y-0 end-3 flex items-center ps-3.5">
          <svg
            className="size-6 bg-white text-[#00A6FF]"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            enableBackground={true}
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M8 7V3m8 4V3m-9 8h10m-9 4h4M3 5h18a2 2 0 012 2v12a2 2 0 01-2 2H3a2 2 0 01-2-2V7a2 2 0 012-2z"
            />
          </svg>
        </div>
      </div>

      <label
        htmlFor={name}
        className="absolute left-2 top-2 z-10 origin-[0] -translate-y-4 scale-75 transform bg-white px-1 text-sm text-[#00A6FF] transition-all duration-200 
                   peer-placeholder-shown:top-4 peer-placeholder-shown:translate-y-0 peer-placeholder-shown:scale-100 
                   peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:text-blue-600 
                   dark:bg-gray-700 dark:text-gray-400"
      >
        {placeholder}
      </label>
    </div>
  );
}
