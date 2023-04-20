import { Link } from 'react-router-dom';
import { userCardTexts } from '../data/texts';
import { UserCardProps } from '../interfaces';
import Row from '../layout/Row';
import Avatar from './Avatar';
import Card from './Card';
import IconLink from './LinkWithIcon';

const { getAriaLabel } = userCardTexts;

const UserCard = ({ user, buttonLabel }: UserCardProps) => {
  return (
    <Card className='px-6 py-5 rounded-xl'>
      <Row className='flex-col items-start gap-4 mb-5 sm:flex-row sm:items-center'>
        <Avatar src={user.avatar_url} className='w-16 h-auto' />
        <span className='text-2xl'>{user.login}</span>
      </Row>
      <Row className='justify-between'>
        <IconLink
          icon={'GH'}
          url={user.html_url}
          ariaLabel={getAriaLabel(user.login)}
        />
        <Link to={`users/${user.login}`} className='text-[#31b59f]'>
          {buttonLabel}
        </Link>
      </Row>
    </Card>
  );
};

export default UserCard;
