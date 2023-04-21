import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Dispatch, SetStateAction, useCallback } from 'react';

interface SearchBoxProps {
  label: string;
  placeholder: string;
  submitLabel: string;
  queryText: string;
  setQueryText: Dispatch<SetStateAction<string>>;
  onSubmit: Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  label,
  placeholder,
  submitLabel,
  queryText,
  setQueryText,
  onSubmit,
  className,
}) => {
  const handleChange = useCallback(
    (event: React.ChangeEvent<HTMLInputElement>) => {
      setQueryText(event.target.value);
    },
    [setQueryText],
  );

  /*
   * User must submit the form to enable the search
   * and trigger the fetch request.
   */
  const handleSubmit = useCallback(
    (event: React.FormEvent<HTMLFormElement>) => {
      event.preventDefault();

      if (queryText) onSubmit((prev) => !!prev);
    },
    [onSubmit, queryText],
  );

  return (
    <form
      onSubmit={handleSubmit}
      className={`flex flex-row-reverse border-2 rounded-md focus-within:outline focus-within:outline-blue-600 ${className}`}
    >
      <label htmlFor='search-user' className='flex-1'>
        <span className='sr-only'>{label}</span>
        <input
          id='search-user'
          type='search'
          placeholder={placeholder}
          onChange={handleChange}
          className='px-2.5 py-3 w-full focus:outline-none'
        />
      </label>
      <button
        type='submit'
        className='w-8 text-gray-300 rounded-tl-md rounded-bl-md hover:text-gray-100 hover:bg-[#31b59f]'
      >
        <span className='sr-only'>{submitLabel}</span>
        <FontAwesomeIcon icon={faSearch} />
      </button>
    </form>
  );
};

export default SearchBox;
