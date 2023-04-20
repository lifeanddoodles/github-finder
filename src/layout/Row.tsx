interface RowProps {
  children: React.ReactElement | React.ReactFragment | React.ReactPortal;
  className?: string;
}

const Row: React.FC<RowProps> = ({ children, className }) => {
  return <div className={`flex ${className ?? ''}`}>{children}</div>;
};

export default Row;
