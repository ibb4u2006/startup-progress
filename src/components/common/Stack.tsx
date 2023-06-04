import classNames from 'classnames';
import { HTMLAttributes } from 'react';

interface StackProps extends HTMLAttributes<HTMLDivElement> {
  direction?: 'horizontal' | 'vertical';
  children: React.ReactNode;
}

const Stack: React.FC<StackProps> = ({
  direction = 'vertical',
  children,
  className,
  ...props
}) => {
  const isVertical = direction === 'vertical';
  return (
    <div
      className={classNames('flex', { 'flex-col': isVertical }, `${className}`)}
      {...props}
    >
      {children}
    </div>
  );
};

export default Stack;
