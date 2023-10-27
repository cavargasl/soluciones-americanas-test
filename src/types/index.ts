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
export type NewUser = {
  name: string;
  job: string;
}

export type Token = string;

export enum links {
  login = "/login",
  register = "/register",
  home = "/",
  users = "/users",
  newUser = "/newUser",
}