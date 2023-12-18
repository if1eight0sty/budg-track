import { ISelectField } from "./interface";

const SelectField = ({
  id,
  label,
  name,
  value,
  onChange,
  options,
}: ISelectField) => {
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
        <div className="flex mt-2 gap-x-2">
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

export default SelectField;
