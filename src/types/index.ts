export type User = {
  username: string;
  email: string;
  password: string;
}
export type Token = string;

export const links: Readonly<{ [key: string]: string }> = {
  login: "/login",
  register: "/register",
  home: "/",
  users: "/users",
}