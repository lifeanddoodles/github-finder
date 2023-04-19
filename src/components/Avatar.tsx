interface AvatarProps {
  src: string;
  size?: string;
}

const Avatar = ({ src }: AvatarProps) => {
  return <img src={src} alt='' />;
};

export default Avatar;
