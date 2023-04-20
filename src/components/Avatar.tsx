interface AvatarProps {
  src: string;
  size?: string;
  className?: string;
}

const Avatar = ({ src, className }: AvatarProps) => {
  return <img src={src} alt='' className={`rounded-full ${className}`} />;
};

export default Avatar;
