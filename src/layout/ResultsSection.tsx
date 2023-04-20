import { ReactNode } from 'react';

interface ResultsSectionProps {
  children: ReactNode;
  className?: string;
}

const ResultsSection = ({ children, className }: ResultsSectionProps) => {
  return <section className={className}>{children}</section>;
};

export default ResultsSection;
