import React from 'react';

interface TextWithIconProps {
  label?: string;
  icon: JSX.Element;
  className?: string;
}

const TextWithIcon: React.FC<TextWithIconProps> = ({
  label,
  icon,
  className,
}) => {
  return (
    <span className={`flex ${className}`}>
      <span className='flex items-center w-6 h-auto'>{icon}</span>
      {label ? <span className='inline-block'>{label}</span> : ''}
    </span>
  );
};

export default TextWithIcon;
