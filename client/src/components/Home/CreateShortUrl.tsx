import { Button } from "@/components/ui/button"
import { Link as LinkIcon, WandSparkles } from "lucide-react"
import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { useLinkSubmitStatus } from "@/context/LinkSumbitStatus"
import { Link } from "react-router"
import useGenerateShortUrlMutation from "@/hooks/useGenerateShortUrlMutation"
import { useRef } from "react"
import CopyButton from "./CopyButton"
import ShareButton from "./ShareButton"

const CreateShortUrl = () => {
  const { toggleStatus, status, shortenUrl, setShortenUrl } = useLinkSubmitStatus();
  const generateShortUrlMutation = useGenerateShortUrlMutation();
  const longUrlRef = useRef<HTMLInputElement>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    generateShortUrlMutation.mutate(longUrlRef.current?.value || "");
  }

  const resetForm = () => {
    if (longUrlRef.current) longUrlRef.current.value = "";
    toggleStatus();
    setShortenUrl("");
  }


  return (
    <div className={"max-w-lg mx-auto md:mx-0 w-full"}>
      <Card >
        <CardContent>
          <form onSubmit={handleSubmit} >
            <div className="flex flex-col gap-6">
              <div className="grid gap-3">
                <div className="flex items-center gap-2">
                  <LinkIcon className="w-5 aspect-square" />
                  <Label htmlFor="longUrl">{!status ? "Shorten a Long URL" : "Your Long URL"}</Label>
                </div>
                <Input
                  id="longUrl"
                  ref={longUrlRef}
                  placeholder="Enter the long URL"
                  readOnly={status}
                  required
                />
                {generateShortUrlMutation.isError && <p className="text-destructive text-sm">{generateShortUrlMutation.error.message}</p>}
              </div>

              {status && <div className="grid gap-3">
                <div className="flex items-center gap-2">
                  <WandSparkles className="w-5 aspect-square" />
                  <Label htmlFor="shortendUrl" >Shorted Url</Label>
                </div>
                <Input
                  id="shortendUrl"
                  value={shortenUrl}
                  readOnly
                />
              </div>}

              <div className="flex flex-col gap-3">
                {!status && <Button type="submit" className="w-full" disabled={generateShortUrlMutation.isPending}>
                  {generateShortUrlMutation.isPending ? "Shortening..." : "Shorten URL"}
                </Button>}
                {status && <div className="flex gap-2 items-center">
                  <CopyButton url={shortenUrl} />
                  <ShareButton url={shortenUrl} />
                </div>
                }
                {status && <div className="grid md:grid-cols-2 gap-3">
                  <Link to={shortenUrl} target="_blank" rel="noopener noreferrer">
                    <Button type="button" variant={"secondary"} className="w-full">Visit Url</Button>
                  </Link>
                  <Button onClick={resetForm}>Shorten Another</Button>
                </div>}
              </div>
            </div>
          </form>
        </CardContent>
      </Card>
    </div >
  )
}

export default CreateShortUrl

