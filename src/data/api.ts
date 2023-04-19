import { request } from '../utils';

export const dummyUsers = [
  {
    login: 'johnsmith',
    avatar_url: 'https://placehold.co/48',
    html_url: 'https://github.com/johnsmith',
    public_repos: 20,
    followers: 24,
    following: 40,
  },
  {
    login: 'janedoe',
    avatar_url: 'https://placehold.co/48',
    html_url: 'https://github.com/janedoe',
    public_repos: 24,
    followers: 20,
    following: 33,
  },
  {
    login: 'juanperez',
    avatar_url: 'https://placehold.co/48',
    html_url: 'https://github.com/juanperez',
    public_repos: 35,
    followers: 50,
    following: 30,
  },
  {
    login: 'juanaperez',
    avatar_url: 'https://placehold.co/48',
    html_url: 'https://github.com/juanaperez',
    public_repos: 50,
    followers: 78,
    following: 24,
  },
];

interface RequestProps {
  query: string;
  pageParam?: number;
}

export const getUsers = async ({ query, pageParam }: RequestProps) => {
  const perPage = 10;
  const url = `https://api.github.com/search/users?q=${query}&page=${pageParam}&per_page=${perPage}`;

  const response = await request(url).then((result) => {
    const hasNext = pageParam! * perPage < parseInt(result.total_count);
    return {
      nextPage: hasNext ? pageParam! + 1 : undefined,
      items: result.items,
      total_count: result.total_count,
    };
  });
  return response;
};

export const getSingleUser = async (query: string) => {
  const url = `https://api.github.com/users/${query}`;

  const response = await request(url);
  return response;
};
