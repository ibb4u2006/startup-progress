import classNames from 'classnames';
import Stack from './Stack';

type AlertProps = {
  variant: 'success' | 'error';
  children: React.ReactNode;
};

const Alert: React.FC<AlertProps> = ({ variant = 'error', children }) => {
  const isSuccess = variant === 'success';
  return (
    <Stack
      direction="horizontal"
      className={classNames(`bg-red-400 p-5 rounded-md text-black`, {
        'bg-green-500': isSuccess,
      })}
    >
      {children}
    </Stack>
  );
};

export default Alert;
