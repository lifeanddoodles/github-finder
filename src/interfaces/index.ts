export interface UserProps {
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
