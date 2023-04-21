import { faGithub } from '@fortawesome/free-brands-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
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
        <span className='text-2xl break-all'>{user.login}</span>
      </Row>
      <Row className='justify-between'>
        <IconLink
          icon={
            <FontAwesomeIcon
              icon={faGithub}
              size='lg'
              className='w-full max-h-6'
            />
          }
          url={user.html_url}
          ariaLabel={getAriaLabel(user.login)}
          className='justify-center'
        />
        <Link
          to={`users/${user.login}`}
          className='text-[#31b59f] hover:text-gray-500'
        >
          {buttonLabel}
        </Link>
      </Row>
    </Card>
  );
};

export default UserCard;
