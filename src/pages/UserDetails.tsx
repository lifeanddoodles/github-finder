import { useQuery } from '@tanstack/react-query';
import { useParams } from 'react-router-dom';
import UserCardDetails from '../components/UserCardDetails';
import { getSingleUser } from '../data/api';
import { userDetailsPageTexts } from '../data/texts';
import { GetUserResponse } from '../interfaces';
import NotFound from './NotFound';

const { userError, loading } = userDetailsPageTexts;

type Data = GetUserResponse & Error;

const UserDetails = (): JSX.Element => {
  const { login } = useParams<'login'>();
  const {
    data: user,
    error,
    isLoading,
    isError,
  } = useQuery<Data, Error>(['user', login], () => getSingleUser(login!));

  /*
   * If there is an error, display error message
   */
  if (isError) {
    return (
      <div>
        {userError} {error?.message}
      </div>
    );
  }

  /*
   * Show loading message while user data is loaded
   */
  if (isLoading) return <h1 className='mx-auto max-w-screen-lg'>{loading}</h1>;

  /*
   * If there is an error in the user data show Not Found page,
   * otherwise display data in a card.
   */
  return !user || user.message ? <NotFound /> : <UserCardDetails user={user} />;
};

export default UserDetails;
