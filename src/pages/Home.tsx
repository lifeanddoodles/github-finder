import { useState } from 'react';
import SearchBox from '../components/SearchBox';
import UserCard from '../components/UserCard';
import { dummyUsers } from '../data/api';
import { homePageTexts } from '../data/texts';
import Header from '../layout/Header';
import ResultsSection from '../layout/ResultsSection';

const {
  title,
  buttonLabel,
  totalResults,
  searchBoxLabel,
  searchBoxPlaceholder,
} = homePageTexts;

const Home = (): JSX.Element => {
  const [queryText, setQueryText] = useState<string>('');

  return (
    <>
      <Header>
        <h1>{title}</h1>
        <SearchBox
          label={searchBoxLabel}
          placeholder={searchBoxPlaceholder}
          queryText={queryText}
          setQueryText={setQueryText}
        />
      </Header>
      <ResultsSection>
        {dummyUsers && (
          <>
            <p role='status'>
              {dummyUsers.length} {totalResults}
            </p>
            <ul>
              {dummyUsers.map((item, index) => (
                <li key={index}>
                  <UserCard user={item} buttonLabel={buttonLabel} />
                </li>
              ))}
            </ul>
          </>
        )}
      </ResultsSection>
    </>
  );
};

export default Home;
