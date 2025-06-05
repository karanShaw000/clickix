import { toast } from "sonner";
import { Button } from "../ui/button";
import { Copy } from "lucide-react";

type CopyButtonProps = {
  url: string;
}
const CopyButton = ({ url }: CopyButtonProps) => {

  const copyHandler = () => {
    window.navigator.clipboard.writeText(url)
      .then(() => {
        toast.success("Copied to clipboard!")
      })
      .catch(() => {
        toast.error("Failed to copy to clipboard");
      })
  }

  return (
    <Button type="button" className="flex gap-2 items-center" onClick={copyHandler}><Copy /> Copy</Button>
  )
}

export default CopyButton
