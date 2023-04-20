import Header from './Header';

const SiteHeader = (): JSX.Element => {
  return (
    <Header className='px-10 py-8 shadow-md'>
      <h1>
        <img
          src='/images/Everlance-logo.png'
          alt='Everlance'
          className='h-10'
        />
      </h1>
    </Header>
  );
};

export default SiteHeader;
