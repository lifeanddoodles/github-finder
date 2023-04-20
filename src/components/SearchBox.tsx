import { Dispatch, SetStateAction } from 'react';

interface SearchBoxProps {
  label: string;
  placeholder: string;
  queryText: string;
  setQueryText: Dispatch<SetStateAction<string>>;
  onSubmit: Dispatch<React.SetStateAction<boolean>>;
  className?: string;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  label,
  placeholder,
  queryText,
  setQueryText,
  onSubmit,
  className,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryText(event.target.value);
  };

  const handleKeyRelease = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    if (queryText) onSubmit((prev) => !!prev);
  };

  return (
    <label htmlFor='search-user' className={className}>
      <span className='sr-only'>{label}</span>
      <input
        id='search-user'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        onKeyUp={handleKeyRelease}
        className='border-2 rounded-md px-2.5 py-3 w-full'
      />
    </label>
  );
};

export default SearchBox;
