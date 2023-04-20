import { ReactNode } from 'react';

interface CardProps {
  children: ReactNode;
  className?: string;
}

const Card = ({ children, className }: CardProps) => {
  return <article className={`border-2 ${className}`}>{children}</article>;
};

export default Card;
