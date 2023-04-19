import { Dispatch, SetStateAction } from 'react';

interface SearchBoxProps {
  label: string;
  placeholder: string;
  queryText: string;
  setQueryText: Dispatch<SetStateAction<string>>;
  onSubmit: Dispatch<React.SetStateAction<boolean>>;
}

const SearchBox: React.FC<SearchBoxProps> = ({
  label,
  placeholder,
  queryText,
  setQueryText,
  onSubmit,
}) => {
  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setQueryText(event.target.value);
  };

  const handleKeyRelease = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key !== 'Enter') return;
    if (queryText) onSubmit((prev) => !!prev);
  };

  return (
    <label htmlFor='search-user'>
      <span>{label}</span>
      <input
        id='search-user'
        type='search'
        placeholder={placeholder}
        onChange={handleChange}
        onKeyUp={handleKeyRelease}
      />
    </label>
  );
};

export default SearchBox;
