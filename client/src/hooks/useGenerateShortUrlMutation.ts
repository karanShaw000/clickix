import { generateShortUrl } from "@/api/url";
import { useLinkSubmitStatus } from "@/context/LinkSumbitStatus";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { toast } from "sonner";

const useGenerateShortUrlMutation = () => {
  const { toggleStatus, setShortenUrl } = useLinkSubmitStatus();
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (url: string) => generateShortUrl(url),
    onSuccess: (data) => {
      toggleStatus();
      setShortenUrl(data?.data?.shortenUrl as string);
      //queryClient for invalidtion
      queryClient.invalidateQueries({queryKey:["url","topClickedLinks"]});
      toast.success(data?.message);
    },
    onError: (err: Error) => {
      toast.error(err.message);
    }
  });
}

export default useGenerateShortUrlMutation;
