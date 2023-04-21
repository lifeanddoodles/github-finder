import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { notFoundPageTexts } from '../data/texts';

const { title, instructions, goBackLabel } = notFoundPageTexts;

const NotFound = (): JSX.Element => {
  return (
    <div className='mx-auto max-w-screen-lg'>
      <h1 className='text-4xl font-normal mb-8'>{title}</h1>
      <p className='mb-8'>{instructions}</p>
      <Link to='/' className='text-[#31b59f] hover:text-gray-500'>
        <FontAwesomeIcon icon={faArrowLeft} /> {goBackLabel}
      </Link>
    </div>
  );
};

export default NotFound;
