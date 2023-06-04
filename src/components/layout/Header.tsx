import Container from '../common/Container';
import Stack from '../common/Stack';

const Header = () => {
  return (
    <Container>
      <Stack
        direction="horizontal"
        className="justify-between items-center flex-wrap gap-6"
      >
        <h1 className="flex text-heading-1 justify-center border-b border-gray-300 w-auto  rounded-xl border bg-gray-100 p-4">
          Startup Progress App
        </h1>
        <p>By Ibrahim Bello</p>
      </Stack>
    </Container>
  );
};

export default Header;
