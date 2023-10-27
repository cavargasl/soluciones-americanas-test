import { User } from "@/types";
import axios from "axios";

export async function LoginApi(data: User) {
  return axios.post("/login", data)
}