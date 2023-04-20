import React from 'react';

interface LinkWithIconProps {
  ariaLabel?: string;
  label?: string;
  icon: string;
  url: string;
  className?: string;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({
  ariaLabel,
  label,
  icon,
  url,
  className,
}) => {
  return (
    <a
      href={url}
      aria-label={ariaLabel}
      target='_blank'
      rel='noreferrer'
      className={className}
    >
      {icon}
      {label ? ` ${label}` : ''}
    </a>
  );
};

export default LinkWithIcon;
