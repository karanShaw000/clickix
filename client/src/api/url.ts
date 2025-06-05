import axiosInstance, { handleAxiosError } from "@/lib/axiosInstance"
import type { ApiResponse, Url } from "@/lib/types";


export const generateShortUrl = async (url: string) => {
  try {

    const res = await axiosInstance.post<ApiResponse<{ shortenUrl: string }>>("url/", { url });
    return res.data
  } catch (error) {
    handleAxiosError(error);
  }
}

export const getTopClickedLinks = async () => {
  try {

    const res = await axiosInstance.get<ApiResponse<Pick<Url, "_id" | "hashId" | "clickCount">[]>>("url/topClickedLinks");
    return res.data
  } catch (error) {
    handleAxiosError(error);
  }
}

