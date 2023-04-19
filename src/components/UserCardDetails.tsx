import { userDetailsTexts } from '../data/texts';
import { UserCardProps } from '../interfaces';
import Avatar from './Avatar';
import Card from './Card';

const { repos, followers, following } = userDetailsTexts;

const UserCardDetails = ({ user }: UserCardProps) => {
  return (
    <Card>
      <Avatar src={user.avatar_url} />
      {user.login}
      <ul>
        <li>
          {repos} <span>{user.public_repos}</span>
        </li>
        <li>
          {followers} <span>{user.followers}</span>
        </li>
        <li>
          {following} <span>{user.following}</span>
        </li>
      </ul>
    </Card>
  );
};

export default UserCardDetails;
