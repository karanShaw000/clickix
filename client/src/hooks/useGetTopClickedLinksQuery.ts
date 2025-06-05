import { getTopClickedLinks } from "@/api/url"
import { useQuery } from "@tanstack/react-query"

const useGetTopClickedLinksQuery = () => {
  return useQuery({
    queryKey: ["url", "topClickedLinks"],
    queryFn: () => getTopClickedLinks(),
  })
}

export default useGetTopClickedLinksQuery
