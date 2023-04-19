import { Link } from 'react-router-dom';
import { userCardTexts } from '../data/texts';
import { UserCardProps } from '../interfaces';
import Avatar from './Avatar';
import Card from './Card';
import IconLink from './LinkWithIcon';

const { getAriaLabel } = userCardTexts;

const UserCard = ({ user, buttonLabel }: UserCardProps) => {
  return (
    <Card>
      <Avatar src={user.avatar_url} />
      {user.login}
      <IconLink
        icon={'GH'}
        url={user.html_url}
        ariaLabel={getAriaLabel(user.login)}
      />
      <Link to={`users/${user.login}`}>{buttonLabel}</Link>
    </Card>
  );
};

export default UserCard;
