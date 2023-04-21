import { useInfiniteQuery } from '@tanstack/react-query';
import { useCallback, useEffect, useState } from 'react';
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
  searchBoxSubmit,
  loading,
  loadMore,
  noResultsFound,
  confirmSearch,
} = homePageTexts;

interface ResponseDataProps {
  nextPage: number | undefined;
  totalCount: number | null;
}

const Home = (): JSX.Element => {
  const [queryText, setQueryText] = useState<string>('type:user');
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

  /*
   * Reset previous response data (used in the return section)
   * and enable search, which is disabled by default
   * and after each fetch to prevent unnecessary rerenders
   */
  const handleSearchSubmit = useCallback(() => {
    setResponseData((prev) => ({
      ...prev,
      nextPage: undefined,
      totalCount: null,
    }));
    setSearchEnabled(true);
  }, []);

  const setFallbackQuery = useCallback(() => {
    setQueryText('type:user');
  }, []);

  /*
   * Submit initial query (type:user) on mount
   */
  useEffect(() => {
    handleSearchSubmit();
  }, [handleSearchSubmit]);

  /*
   * If there is no query from the searchbox, use fallback query
   */
  useEffect(() => {
    if (!queryText) setFallbackQuery();
  }, [queryText, setFallbackQuery]);

  return (
    <>
      <Header className='flex flex-col md:flex-row gap-x-5 justify-between max-w-screen-lg mx-auto'>
        <h1 className='text-4xl font-normal mb-8'>{title}</h1>
        <SearchBox
          label={searchBoxLabel}
          placeholder={searchBoxPlaceholder}
          submitLabel={searchBoxSubmit}
          queryText={queryText}
          setQueryText={setQueryText}
          onSubmit={handleSearchSubmit}
          className='block mb-8 w-full md:max-w-xs'
        />
      </Header>
      <ResultsSection className='flex flex-col max-w-screen-lg mx-auto'>
        {!data && (
          /*
           * Handle status messages when there is no data
           */
          <>
            {!searchEnabled && status === 'loading' && (
              <h1 role='status' className='text-3xl'>
                {confirmSearch}
              </h1>
            )}
            {searchEnabled && status === 'loading' && (
              <h1 role='status' className='text-3xl'>
                {loading}
              </h1>
            )}
            {status === 'error' && (
              <h1 role='status' className='text-3xl'>
                {JSON.stringify(error)}
              </h1>
            )}
          </>
        )}
        {data && (
          <>
            {/*
             * Handle status messages when there is no data
             */}
            {data!.pages.flatMap((page) => page.items).length > 0 ? (
              <p role='status' className='sr-only'>
                {totalResults(
                  data!.pages.flatMap((page) => page.items).length,
                  responseData.totalCount!,
                )}
              </p>
            ) : (
              <h1 role='status' className='text-3xl'>
                {noResultsFound}
              </h1>
            )}
            {/*
             * Display found search results
             */}
            <ul className='grid gap-x-6 gap-y-5 sm:grid-cols-2 lg:grid-cols-3 mb-8'>
              {data!.pages.flatMap((page) => {
                return page.items.map((item: UserProps) => (
                  <li key={item.id} className='basis-1/3'>
                    <UserCard user={item} buttonLabel={buttonLabel} />
                  </li>
                ));
              })}
            </ul>
            {hasNextPage && (
              /*
               * Show button to load the next page items
               * only if there are still results left.
               */
              <button
                onClick={() => fetchNextPage()}
                className='border px-5 py-3 rounded self-end hover:text-gray-100 hover:bg-[#31b59f] hover:border-[#31b59f]'
              >
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
