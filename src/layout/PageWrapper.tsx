import { Outlet } from 'react-router-dom';
import Main from '../layout/Main';
import SiteHeader from '../layout/SiteHeader';

const PageWrapper = (): JSX.Element => {
  return (
    <>
      <SiteHeader />
      <Main>
        <Outlet />
      </Main>
    </>
  );
};

export default PageWrapper;
