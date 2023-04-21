import React, { useCallback, useMemo } from 'react';

interface LinkWithIconProps {
  ariaLabel?: string;
  label?: string;
  icon: JSX.Element;
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
  const externalPatterns = useMemo(() => ['http', 'mailto:', 'tel:'], []);
  /*
   * Check if URL matches one of the protocol or attributes
   * and return match for further tests.
   */
  const getExternalPatternsMatch = useCallback(() => {
    return externalPatterns
      .map((pattern) => {
        if (url.startsWith(pattern)) {
          return pattern;
        }
        return null;
      })
      .filter(Boolean);
  }, [externalPatterns, url]);

  return (
    <a
      /*
       * Add 'https://' to avoid accidental internal links
       * in case no protocol or attribute matches were found.
       */
      href={!getExternalPatternsMatch()?.[0] ? `https://${url}` : url}
      aria-label={ariaLabel}
      target='_blank'
      rel='noreferrer'
      className={`flex hover:text-[#31b59f] ${className}`}
    >
      <span className='flex items-center w-6 h-auto'>{icon}</span>
      {label ? <span className='inline-block'>{label}</span> : ''}
    </a>
  );
};

export default LinkWithIcon;
