import { ReactNode } from 'react';

interface ResultsSectionProps {
  children: ReactNode;
}

const ResultsSection = ({ children }: ResultsSectionProps) => {
  return <section>{children}</section>;
};

export default ResultsSection;
