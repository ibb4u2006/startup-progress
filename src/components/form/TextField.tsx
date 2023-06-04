import { AllHTMLAttributes, LegacyRef, forwardRef } from 'react';

interface TextFieldProps extends AllHTMLAttributes<HTMLInputElement> {}

const TextField = forwardRef(function TextField(
  { ...props }: TextFieldProps,
  ref: LegacyRef<HTMLInputElement>
) {
  const { id, className, type = 'text', label } = props;
  return (
    <div className="relative max-w-xs w-full">
      <label
        htmlFor={id}
        className="block mb-2 text-sm font-medium text-gray-900 "
      >
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        type={type}
        id={id}
        className={`bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`}
      />
    </div>
  );
});

export default TextField;
