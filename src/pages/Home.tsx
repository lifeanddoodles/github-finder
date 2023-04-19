import { useInfiniteQuery } from '@tanstack/react-query';
import { useState } from 'react';
import SearchBox from '../components/SearchBox';
import UserCard from '../components/UserCard';
import { getUsers } from '../data/api';
import { homePageTexts } from '../data/texts';
import { PageProps, UserProps } from '../interfaces';
import Header from '../layout/Header';
import ResultsSection from '../layout/ResultsSection';

const {
  title,
  buttonLabel,
  totalResults,
  searchBoxLabel,
  searchBoxPlaceholder,
  loading,
  loadMore,
} = homePageTexts;

interface ResponseDataProps {
  nextPage: number | undefined;
  totalCount: number | null;
}

const Home = (): JSX.Element => {
  const [queryText, setQueryText] = useState<string>('');
  const [searchEnabled, setSearchEnabled] = useState<boolean>(false);
  const [responseData, setResponseData] = useState<ResponseDataProps>({
    nextPage: undefined,
    totalCount: null,
  });
  const {
    status,
    error,
    data,
    isFetchingNextPage,
    hasNextPage,
    fetchNextPage,
  } = useInfiniteQuery<string, Error, PageProps, any>({
    queryKey: ['items', queryText],
    enabled: searchEnabled,
    getNextPageParam: () => responseData.nextPage ?? undefined,
    queryFn: ({ pageParam = 1 }) => {
      return getUsers({ pageParam, query: queryText }).then((response) => {
        setResponseData((prev) => ({
          ...prev,
          nextPage: response.nextPage,
          ...(prev.totalCount === null && { totalCount: response.total_count }),
        }));
        setSearchEnabled(false);
        return response;
      });
    },
  });

  const handleSearchSubmit = () => {
    setResponseData((prev) => ({
      ...prev,
      nextPage: undefined,
      totalCount: null,
    }));
    setSearchEnabled(true);
  };

  return (
    <>
      <Header>
        <h1>{title}</h1>
        <SearchBox
          label={searchBoxLabel}
          placeholder={searchBoxPlaceholder}
          queryText={queryText}
          setQueryText={setQueryText}
          onSubmit={handleSearchSubmit}
        />
      </Header>
      <ResultsSection>
        {!data && (
          <div role='status'>
            {status === 'loading' && <h1>{loading}</h1>}
            {status === 'error' && <h1>{JSON.stringify(error)}</h1>}
          </div>
        )}
        {data && (
          <>
            <p role='status'>
              {data!.pages.flatMap((page) => page.items).length} /{' '}
              {responseData.totalCount} {totalResults}
            </p>
            <ul>
              {data!.pages.flatMap((page) => {
                return page.items.map((item: UserProps) => (
                  <li key={item.id}>
                    <UserCard user={item} buttonLabel={buttonLabel} />
                  </li>
                ));
              })}
            </ul>
            {hasNextPage && (
              <button onClick={() => fetchNextPage()}>
                {isFetchingNextPage ? loading : loadMore}
              </button>
            )}
          </>
        )}
      </ResultsSection>
    </>
  );
};

export default Home;
