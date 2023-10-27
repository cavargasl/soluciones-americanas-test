import { ListUsers } from "@/types";
import axios, { AxiosResponse } from "axios";

export function getListUsers(): Promise<ListUsers> {
  return axios.get('/users').then((response: AxiosResponse<ListUsers>) => response.data);
}