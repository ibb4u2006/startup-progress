import { HTMLAttributes } from 'react';

interface ContainerProps extends HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
}
const Container: React.FC<ContainerProps> = ({ children, ...props }) => {
  const { className } = props;
  return (
    <div className={`w-full max-w-5xl mx-auto ${className}`}>{children}</div>
  );
};

export default Container;
