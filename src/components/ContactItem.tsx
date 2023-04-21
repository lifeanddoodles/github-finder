import React from 'react';
import LinkWithIcon from './LinkWithIcon';
import TextWithIcon from './TextWithIcon';

interface ContactItemProps {
  label?: string;
  icon: JSX.Element;
  url?: string | null;
  className?: string;
}

const ContactItem: React.FC<ContactItemProps> = ({
  label,
  icon,
  url,
  className,
}) => {
  return url ? (
    <LinkWithIcon icon={icon} label={label} url={url} className={className} />
  ) : (
    <TextWithIcon icon={icon} label={label} className={className} />
  );
};

export default ContactItem;
