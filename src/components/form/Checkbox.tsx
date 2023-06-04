import { AllHTMLAttributes } from 'react';

interface CheckboxProps extends AllHTMLAttributes<HTMLInputElement> {}

const Checkbox: React.FC<CheckboxProps> = ({ ...props }) => {
  const { id, value, className, type = 'checkbox', label } = props;
  return (
    <div className="flex items-center mr-4">
      <input
        {...props}
        id={id}
        type={type}
        value={value}
        className={`w-6 h-6 text-blue-600 bg-gray-100 border-gray-300 rounded-lg focus:ring-blue-500 focus:ring-2 ${className}`}
      />
      <label htmlFor={id} className="ml-2 text-sm font-medium text-gray-900">
        {label}
      </label>
    </div>
  );
};

export default Checkbox;
