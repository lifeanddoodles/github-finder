import { userDetailsTexts } from '../data/texts';
import { UserCardProps } from '../interfaces';
import Column from '../layout/Column';
import Row from '../layout/Row';
import Avatar from './Avatar';
import Card from './Card';
import LinkWithIcon from './LinkWithIcon';

const { repos, followers, following } = userDetailsTexts;

const UserCardDetails = ({ user }: UserCardProps) => {
  const statistics = {
    repos: {
      title: repos,
      value: user.public_repos,
    },
    followers: {
      title: followers,
      value: user.followers,
    },
    following: {
      title: following,
      value: user.following,
    },
  };

  const contactDetails = {
    location: {
      label: user.location,
      url: user.location,
      icon: 'location',
    },
    email: {
      label: user.email,
      url: `mailto=${user.email}`,
      icon: 'email',
    },
    twitter: {
      label: user.twitter_username,
      url: user.twitter_username,
      icon: 'twitter',
    },
    blog: {
      label: user.blog,
      url: user.blog,
      icon: 'blog',
    },
  };

  const contactDetailsNotEmpty =
    Object.values(contactDetails)
      .map((item) => item.label)
      .filter(Boolean).length > 0;

  return (
    <Card className='mx-auto px-9 pt-11 pb-16 rounded-lg max-w-screen-lg'>
      <Row className='flex-col gap-x-6 gap-y-5 lg:flex-row'>
        <Column className='flex-none'>
          <Avatar src={user.avatar_url} className='w-24' />
        </Column>
        <Column className='lg:pt-8'>
          <Row className='flex flex-col gap-4 md:flex-row md:gap-x-6 lg:gap-x-16'>
            <Column className='md:basis-1/2'>
              <h1 className='text-3xl mb-4'>{user.name}</h1>
              <h2 className='text-xl mb-5'>{user.login}</h2>
              <p className='mb-5'>{user.bio}</p>
            </Column>
            <Column className='md:basis-1/2'>
              <LinkWithIcon
                icon='GH'
                url={user.html_url}
                label={user.login}
                className='inline-block mb-6 text-2xl'
              />
              <ul className='rounded-3xl bg-gray-100 mb-11 flex flex-col sm:flex-row sm:justify-center md:flex-wrap lg:flex-nowrap'>
                {Object.values(statistics).map((statistic) => (
                  <li key={statistic.title} className='flex-1'>
                    <Column className='px-8 py-6 items-center'>
                      <h3 className='text-gray-500'>{statistic.title}</h3>
                      <span className='text-3xl'>{statistic.value}</span>
                    </Column>
                  </li>
                ))}
              </ul>
            </Column>
          </Row>
          {contactDetailsNotEmpty && (
            <ul className='md:columns-2 md:gap-4 lg:gap-x-16'>
              {Object.entries(contactDetails).map(([key, value]) => {
                return value.label && value.url ? (
                  <li key={key} className='md:w-full'>
                    <LinkWithIcon
                      icon={value.icon}
                      label={value.label}
                      url={value.url}
                      className='inline-block mb-6 text-2xl'
                    />
                  </li>
                ) : null;
              })}
            </ul>
          )}
        </Column>
      </Row>
    </Card>
  );
};

export default UserCardDetails;
