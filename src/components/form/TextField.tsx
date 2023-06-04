import classNames from 'classnames';
import { AllHTMLAttributes, LegacyRef, forwardRef } from 'react';

interface TextFieldProps extends AllHTMLAttributes<HTMLInputElement> {
  error?: string;
}

const TextField = forwardRef(function TextField(
  { ...props }: TextFieldProps,
  ref: LegacyRef<HTMLInputElement>
) {
  const { id, className, type = 'text', label, error } = props;
  return (
    <div className="relative max-w-xs w-full">
      <label
        htmlFor={id}
        className={classNames('block mb-2 text-sm font-medium text-gray-900', {
          'text-red-700': !!error,
        })}
      >
        {label}
      </label>
      <input
        ref={ref}
        {...props}
        type={type}
        id={id}
        className={classNames(
          `bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 ${className}`,
          {
            'border-red-500 text-red-900 focus:border-red-500 focus:ring-red-500 placeholder-red-700 bg-red-50':
              !!error,
          }
        )}
      />
      {error && <p className="mt-2 text-sm text-red-600">{error}</p>}
    </div>
  );
});

export default TextField;
