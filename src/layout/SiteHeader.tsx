import { Link } from 'react-router-dom';
import Header from './Header';

const SiteHeader = (): JSX.Element => {
  return (
    <Header className='px-10 py-8 shadow-md'>
      <Link to={'/'}>
        <h1>
          <img
            src='/images/Everlance-logo.png'
            alt='Everlance'
            className='h-10'
          />
        </h1>
      </Link>
    </Header>
  );
};

export default SiteHeader;
