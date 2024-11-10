import Image from "next/image";

export default function FileField({
  name,
  placeholder,
  onChange,
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
      <input
        type="file"
        name={name}
        id={name}
        className="hidden"
        onChange={handleInputChange}
      />

      <div
        className="flex cursor-pointer items-center justify-center"
        onClick={triggerFileInput}
      >
        <div className="mx-auto flex w-5/12 flex-col items-center justify-center rounded-lg border border-[#00A6FF] p-4">
          <Image
            src="/images/capture.svg"
            alt={altText}
            width={50}
            height={50}
          />
          <p className="pt-4 text-sm text-[#00A6FF]">PAN Card Front</p>
        </div>
      </div>
    </div>
  );
}
