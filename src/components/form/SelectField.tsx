import classNames from 'classnames';
import { AllHTMLAttributes, LegacyRef, forwardRef } from 'react';

type SelectOptions = { id: string; label: string; value: string }[];

interface SelectFieldProps extends AllHTMLAttributes<HTMLSelectElement> {
  options: SelectOptions;
  error?: string;
}

const SelectField = forwardRef(function SelectField(
  { options, error, ...props }: SelectFieldProps,
  ref: LegacyRef<HTMLSelectElement>
) {
  const { id, className, placeholder = 'Select an option', label } = props;
  return (
    <div className="relative max-w-220 w-full">
      <label
        htmlFor={id}
        className={classNames('block mb-2 text-sm font-medium text-gray-900', {
          'text-red-700': !!error,
        })}
      >
        {label}
      </label>
      <select
        ref={ref}
        {...props}
        id={id}
        className={classNames(
          `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`,
          {
            'border-red-500 text-red-900 focus:border-red-500 focus:ring-red-500 placeholder-red-700 bg-red-50':
              !!error,
          }
        )}
      >
        <option value="">{placeholder}</option>
        {options.map((option) => (
          <option key={option.id} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
});

export default SelectField;
