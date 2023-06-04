import { AllHTMLAttributes } from 'react';

type ButtonTypeAttr = 'button' | 'submit' | 'reset' | undefined;

interface ButtonProps extends AllHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
}
const Button: React.FC<ButtonProps> = ({ children, ...props }) => {
  const { type, className } = props;
  return (
    <button
      {...props}
      type={type as ButtonTypeAttr}
      className={`text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 mr-2 mb-2 focus:outline-none ${className}`}
    >
      {children}
    </button>
  );
};

export default Button;
