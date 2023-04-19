import { useParams } from 'react-router-dom';
import UserCardDetails from '../components/UserCardDetails';
import { dummyUsers } from '../data/api';

const UserDetails = (): JSX.Element => {
  const { login } = useParams<'login'>();
  const user = dummyUsers.filter((item) => item.login === login)[0];
  return <UserCardDetails user={user} />;
};

export default UserDetails;
