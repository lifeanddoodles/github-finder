import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import UserCardDetails from '../components/UserCardDetails';
import { getSingleUser } from '../data/api';
import { userDetailsPageTexts } from '../data/texts';
import { ErrorProps, UserProps } from '../interfaces';
import NotFound from './NotFound';

const { userError, loading } = userDetailsPageTexts;

type Data = UserProps & ErrorProps;

const UserDetails = (): JSX.Element => {
  const { login } = useParams<'login'>();
  const {
    data: user,
    error,
    isLoading,
    isError,
  } = useQuery<Data, ErrorProps>(['user', login], () => getSingleUser(login!));

  if (isError) {
    return (
      <div>
        {userError} {error?.message}
      </div>
    );
  }

  if (isLoading) return <p>{loading}</p>;

  return !user || user.message ? <NotFound /> : <UserCardDetails user={user} />;
};

export default UserDetails;
