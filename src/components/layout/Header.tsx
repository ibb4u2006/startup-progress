import Container from '../common/Container';
import Stack from '../common/Stack';

const Header = () => {
  return (
    <Container className="py-5">
      <Stack
        direction="horizontal"
        className="justify-between items-center flex-wrap gap-6"
      >
        <h1 className="text-heading-1">Startup Progress App</h1>
        <p>By Ibrahim Bello</p>
      </Stack>
    </Container>
  );
};

export default Header;
