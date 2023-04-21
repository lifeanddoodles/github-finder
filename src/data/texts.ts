export const homePageTexts = {
  title: 'GitHub Users',
  buttonLabel: 'View profile',
  totalResults: (showing: number, total: number) =>
    `Showing ${showing} of ${total} results`,
  searchBoxLabel: 'Search for GitHub user(s)',
  searchBoxPlaceholder: 'Enter username or email',
  searchBoxSubmit: 'Submit',
  loading: 'Loading...',
  loadMore: 'Load more',
  noResultsFound: 'No results found, please try another search.',
  confirmSearch: 'Click the Search icon or press Enter to see the results',
};

export const userCardTexts = {
  getAriaLabel: (login: string) => `Visit ${login}'s GitHub page`,
};

export const userDetailsPageTexts = {
  userError: 'Error loading user data:',
  loading: 'Loading user data',
};

export const userDetailsCardTexts = {
  repos: 'Repos',
  followers: 'Followers',
  following: 'Following',
};

export const notFoundPageTexts = {
  title: 'Not found',
  instructions:
    'It seems there was an error and the page/profile does not exist. You can try another search.',
  goBackLabel: 'Go to homepage',
};
