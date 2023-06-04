import { AllHTMLAttributes } from 'react';

type SelectOptions = { id: string; label: string; value: string }[];

interface SelectFieldProps extends AllHTMLAttributes<HTMLSelectElement> {
  options: SelectOptions;
}

const SelectField: React.FC<SelectFieldProps> = ({ options, ...props }) => {
  const { id, className, placeholder = 'Select an option', label } = props;
  return (
    <div className="relative max-w-xs w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900"
      >
        {label}
      </label>
      <select
        {...props}
        id={id}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
      >
        <option>{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </div>
  );
};

export default SelectField;
