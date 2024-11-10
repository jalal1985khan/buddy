import Image from "next/image";

export default function FileField({
  name,
  placeholder,
  onChange,
  imageSrc, // Pass the image URL for the custom upload button
  altText = "Upload File", // Alt text for the image
}) {
  const handleInputChange = (e) => {
    const { files } = e.target;
    if (files && files.length > 0) {
      onChange(files[0]); // Trigger the parent onChange handler with the selected file
    }
  };

  const triggerFileInput = () => {
    document.getElementById(name).click(); // Programmatically trigger the hidden file input
  };

  return (
    <div className="relative w-full">
      {/* Hidden File Input */}
      <input
        type="file"
        name={name}
        id={name}
        className="hidden" // Hide the actual file input
        onChange={handleInputChange} // Set the change handler
      />

      {/* Custom Image Trigger */}
      <div
        className="flex cursor-pointer items-center justify-center"
        onClick={triggerFileInput} // Trigger file input click when image is clicked
      >
        <Image src={imageSrc} alt={altText} width={50} height={50} />
      </div>

      {/* Label */}
      <label
        htmlFor={name}
        className="absolute start-1 top-2 z-10 origin-[0] -translate-y-4 scale-75 px-2 text-sm text-[#00A6FF] duration-300 peer-placeholder-shown:top-1/2 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:scale-100 peer-focus:top-2 peer-focus:-translate-y-4 peer-focus:scale-75 peer-focus:px-2 peer-focus:text-[#00A6FF] dark:bg-gray-900 dark:text-gray-400 peer-focus:dark:text-blue-500 rtl:peer-focus:left-auto rtl:peer-focus:translate-x-1/4"
      >
        {placeholder}
      </label>
    </div>
  );
}
