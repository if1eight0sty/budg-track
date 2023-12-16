import PropTypes from "prop-types";
const SelectField = ({ id, label, name, value, onChange, options }) => {
  return (
    <>
      <div className="flex flex-col w-full text-[#2e2e2e]/80">
        <label
          htmlFor={id}
          className="mb-1 text-[.95rem] font-semibold min-[650px]:text-[1rem] min-[650px]:mb-[0.3rem] capitalize"
          aria-label="input-field-label"
        >
          {label}
        </label>
        <div className="flex gap-x-2 mt-2">
          <select
            name={name}
            value={value}
            onChange={onChange}
            className="border py-[.3rem] px-[.4rem] rounded border-[#2e2e2e]/50 outline-none w-full"
          >
            <option value="">Select one</option>
            {Array.isArray(options) &&
              options.map((option) => (
                <option value={option.value} key={option.value}>
                  {option.label}
                </option>
              ))}
          </select>
        </div>
      </div>
    </>
  );
};

SelectField.propTypes = {
  id: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  options: PropTypes.array.isRequired,
};

export default SelectField;