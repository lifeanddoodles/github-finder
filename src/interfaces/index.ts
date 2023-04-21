export interface UserProps {
  id?: number;
  login: string;
  avatar_url: string;
  html_url: string;
  name?: string;
  bio?: string;
  public_repos?: number;
  followers?: number;
  following?: number;
  location?: string;
  email?: string;
  twitter_username?: string;
  blog?: string;
}

export interface UserCardProps {
  user: UserProps;
  buttonLabel?: string;
}

export interface PageProps {
  incomplete_results: boolean;
  items: UserProps[];
  total_count: number;
}

export interface DataProps {
  pageParams: number[];
  pages: PageProps[];
}

export interface ErrorProps {
  message: string;
  documentation_url: string;
}
