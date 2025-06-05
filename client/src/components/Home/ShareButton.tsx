import { Link } from "react-router"
import { Button } from "../ui/button"
import { Share } from "lucide-react"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

type ShareButtonProps = {
  url: string,
}
const SOCIAL_MEDIA_LINKS = [
  { Facebook: "https://www.facebook.com/sharer/sharer.php?u=",},
  { Twitter: "https://twitter.com/intent/tweet?url=" },
  { Linkedin: "https://www.linkedin.com/sharing/share-offsite/?url=" },
  { Whatsapp: "https://wa.me/?text=" },
]
const ShareButton = ({ url }: ShareButtonProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button type="button" className="flex gap-2"><Share /> Share</Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {
          SOCIAL_MEDIA_LINKS.map((link, idx) => {
            const [name, urlPrefix] = Object.entries(link)[0];
            return (
              <DropdownMenuItem key={idx}>
                <Link to={`${urlPrefix}${encodeURIComponent(url)}`} target="_blank">{name}</Link>
              </DropdownMenuItem>
            )
          })
        }
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default ShareButton
