import { faGithub, faTwitter } from '@fortawesome/free-brands-svg-icons';
import {
  faEnvelope,
  faLink,
  faLocationDot,
} from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { userDetailsTexts } from '../data/texts';
import { UserCardProps } from '../interfaces';
import Column from '../layout/Column';
import Row from '../layout/Row';
import { formatAmount } from '../utils';
import Avatar from './Avatar';
import Card from './Card';
import ContactItem from './ContactItem';
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
      url: null,
      icon: (
        <FontAwesomeIcon
          icon={faLocationDot}
          size='lg'
          className='w-full max-h-6'
        />
      ),
    },
    email: {
      label: user.email,
      url: `mailto:${user.email}`,
      icon: (
        <FontAwesomeIcon
          icon={faEnvelope}
          size='lg'
          className='w-full max-h-6'
        />
      ),
    },
    twitter: {
      label: user.twitter_username,
      url: `https://twitter.com/${user.twitter_username}`,
      icon: (
        <FontAwesomeIcon
          icon={faTwitter}
          size='lg'
          className='w-full max-h-6'
        />
      ),
    },
    blog: {
      label: user.blog,
      url: user.blog,
      icon: (
        <FontAwesomeIcon icon={faLink} size='lg' className='w-full max-h-6' />
      ),
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
        <Column className='w-full lg:pt-8'>
          <Row className='flex flex-col gap-4 md:flex-row md:gap-x-6 lg:gap-x-16'>
            <Column className='md:basis-1/2'>
              <h1 className='text-3xl mb-4'>{user.name}</h1>
              <h2 className='text-xl mb-5'>{user.login}</h2>
              <p className='mb-5'>{user.bio}</p>
            </Column>
            <Column className='md:basis-1/2'>
              <LinkWithIcon
                icon={
                  <FontAwesomeIcon
                    icon={faGithub}
                    size='lg'
                    className='w-full max-h-6'
                  />
                }
                url={user.html_url}
                label={user.login}
                className='gap-2 mb-6 text-2xl'
              />
              <ul className='rounded-3xl bg-gray-100 mb-11 flex flex-col sm:flex-row sm:justify-center md:flex-wrap lg:flex-nowrap'>
                {Object.values(statistics).map((statistic) => (
                  <li key={statistic.title} className='flex-1'>
                    <Column className='px-8 py-6 items-center'>
                      <h3 className='text-gray-500'>{statistic.title}</h3>
                      <span className='text-3xl'>
                        {formatAmount(statistic.value!)}
                      </span>
                    </Column>
                  </li>
                ))}
              </ul>
            </Column>
          </Row>
          {contactDetailsNotEmpty && (
            <ul className='md:columns-2 md:gap-4 lg:gap-x-16'>
              {Object.entries(contactDetails).map(([key, value]) => {
                return value.label ? (
                  <li key={key} className='md:w-full'>
                    <ContactItem
                      icon={value.icon}
                      label={value.label}
                      url={value?.url}
                      className='gap-2 mb-6 text-2xl'
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
