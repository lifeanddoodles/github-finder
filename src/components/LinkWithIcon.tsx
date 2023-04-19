import React from 'react';

interface LinkWithIconProps {
  ariaLabel?: string;
  label?: string;
  icon: string;
  url: string;
}

const LinkWithIcon: React.FC<LinkWithIconProps> = ({
  ariaLabel,
  label,
  icon,
  url,
}) => {
  return (
    <a href={url} aria-label={ariaLabel} target='_blank' rel='noreferrer'>
      {icon}
      {label ? ` ${label}` : ''}
    </a>
  );
};

export default LinkWithIcon;
