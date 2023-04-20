import { ReactNode } from 'react';

interface MainProps {
  children: ReactNode;
}

const Main = ({ children }: MainProps) => {
  return <main className='px-10 py-14'>{children}</main>;
};

export default Main;
