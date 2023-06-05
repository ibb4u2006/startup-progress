import classNames from 'classnames';
import Stack from './Stack';
import Container from './Container';

type AlertProps = {
  variant: 'success' | 'error';
  children: React.ReactNode;
};

const Alert: React.FC<AlertProps> = ({ variant = 'error', children }) => {
  const isSuccess = variant === 'success';
  const isError = variant === 'error';
  return (
    <Container>
      <p
        className={classNames(
          'p-5 font-medium rounded-md text-black w-fit',
          {
            'bg-green-400': isSuccess,
          },
          { 'bg-red-400': isError }
        )}
      >
        {children}
      </p>
    </Container>
  );
};

export default Alert;
