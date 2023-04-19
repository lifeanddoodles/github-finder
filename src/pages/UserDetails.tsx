import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import UserCardDetails from '../components/UserCardDetails';
import { getSingleUser } from '../data/api';

const UserDetails = () => {
  const { login } = useParams<'login'>();
  const {
    data: user,
    isLoading,
    isError,
    error,
  } = useQuery(['user', login], () => getSingleUser(login!));

  if (isLoading) return <p>Loading...</p>;

  // if (isError) {
  //   return <div>Error loading user data: {error?.message}</div>;
  // }

  if (!user) {
    return <div>User not found</div>;
  }

  return <UserCardDetails user={user} />;
};

export default UserDetails;
