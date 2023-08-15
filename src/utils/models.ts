export interface UserModel {
  name: string;
  bio: string;
  type: string;
  login: string;
  html_url: string;
  avatar_url: string;
  followers: number;
}

export interface PostModel {
  number: number;
  title: string;
  body: string;
  html_url: string;
  user: {
    login: string;
  };
  comments: number;
  created_at: string;
}
