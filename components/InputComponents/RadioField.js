import PropTypes from "prop-types";

const RadioField = ({ name, label, options, type, onChange }) => {
  return (
    <div
      className={`mx-auto mb-4 ${type == 2 ? "flex w-8/12 items-center justify-center" : "text-center"}`}
    >
      <label className="block text-sm text-[#A8A7A7]">{label}</label>
      <div
        className={`mx-auto flex items-center  space-x-4 ${type == 2 ? "w-50 " : "mt-4 w-8/12 justify-between"}`}
      >
        {options.map((option, index) => (
          <label key={index} className="flex items-center">
            <input
              className="form-radio text-blue-500"
              name={name}
              type="radio"
              value={option.value}
              onChange={onChange}
            />
            <span className="ml-2 text-blue-500">{option.label}</span>
          </label>
        ))}
      </div>
    </div>
  );
};

RadioField.propTypes = {
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(
    PropTypes.shape({
      label: PropTypes.string.isRequired,
      value: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default RadioField;
