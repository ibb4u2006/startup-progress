import Button from '../buttons/Button';
import Container from '../common/Container';
import Stack from '../common/Stack';

type FallBackErrorProps = {
  onAction: () => void;
};

const FallBackError: React.FC<FallBackErrorProps> = ({ onAction }) => {
  return (
    <Container className="py-20">
      <Stack className="gap-5 items-center">
        <h1 className="text-heading-1 text-red-500">
          Oops, there is an error!
        </h1>
        <Button
          className="bg-red-700 hover:bg-red-900"
          type="button"
          onClick={onAction}
        >
          Try again?
        </Button>
      </Stack>
    </Container>
  );
};

export default FallBackError;
