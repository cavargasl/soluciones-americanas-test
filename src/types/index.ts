export type User = {
  username: string;
  email: string;
  password: string;
}
export type FullUser = User & {
  id: number;
  first_name: string;
  last_name: string;
  avatar: string;
}
export type ListUsers = {
  page: number;
  per_page: number;
  total: number;
  total_pages: number;
  data: FullUser[];
}

export type Token = string;

export const links: Readonly<{ [key: string]: string }> = {
  login: "/login",
  register: "/register",
  home: "/",
  users: "/users",
}