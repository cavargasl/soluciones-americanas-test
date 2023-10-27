import { NewUser } from "@/types";
import axios, { AxiosResponse } from "axios";

type response = {
  "name": string
  "job": string
  "id": string
  "createdAt": string
}

export function newUser(user: NewUser): Promise<AxiosResponse<response>> {
  return axios.post(`/users`, user);
}