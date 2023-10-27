import { User } from "@/types";
import axios from "axios";

export function registerUser(user: User) {
  return axios.post(`/register`, user)
}