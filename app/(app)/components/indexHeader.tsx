interface Props {
  isFullScreen: boolean;
}

const IndexHeader = ({ isFullScreen }: Props) => {
  return (
    <div className='header wrapper animate-fadeIn'>
      {/* header content */}
      <header className='header p-8 py-16 mt-8 text-center relative text-white'>
        <div
          className={
            isFullScreen
              ? 'mx-auto py-32 mt-8 md:mt-48'
              : 'mx-auto py-64 mt-8 md:mt-24'
          }
        >
          {/* header content */}
        </div>
      </header>
    </div>
  );
};

export default IndexHeader;
