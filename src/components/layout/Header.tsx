const Header = () => {
  return (
    <div className="z-10 w-full max-w-5xl items-center justify-between font-mono text-sm lg:flex">
      <h1 className="left-0 top-0 flex w-full justify-center border-b border-gray-300 static lg:w-auto  lg:rounded-xl lg:border bg-gray-100 p-4">
        Startup Progress App
      </h1>
      <p className="fixed bottom-0 left-0 flex h-48 w-full items-end justify-center bg-gradient-to-t from-white via-white lg:static lg:h-auto lg:w-auto lg:bg-none">
        By Ibrahim Bello
      </p>
    </div>
  );
};

export default Header;
