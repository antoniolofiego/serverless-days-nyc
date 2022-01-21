export const ActiveBreakpoint = ({ children }) => {
  return (
    <>
      <div className='fixed bottom-0 left-0 z-50 flex items-center justify-center w-6 h-6 p-3 m-8 font-mono text-xs text-white bg-gray-700 rounded-full sm:bg-pink-500 md:bg-orange-500 lg:bg-green-500 xl:bg-blue-500 2xl:bg-red-500'>
        <span className='block sm:hidden md:hidden lg:hidden xl:hidden'>
          al
        </span>
        <span className='hidden sm:block md:hidden lg:hidden xl:hidden 2xl:hidden'>
          sm
        </span>
        <span className='hidden sm:hidden md:block lg:hidden xl:hidden 2xl:hidden'>
          md
        </span>
        <span className='hidden sm:hidden md:hidden lg:block xl:hidden 2xl:hidden'>
          lg
        </span>
        <span className='hidden sm:hidden md:hidden lg:hidden xl:block 2xl:hidden'>
          xl
        </span>
        <span className='hidden sm:hidden md:hidden lg:hidden xl:hidden 2xl:block'>
          2xl
        </span>
      </div>
      {children}
    </>
  );
};
