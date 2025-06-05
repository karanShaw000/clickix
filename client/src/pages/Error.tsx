import { Button } from "@/components/ui/button"
import { Link, useSearchParams } from "react-router"

const Error = () => {
  const [searchParams] = useSearchParams()

  return (
    <section className="flex flex-col items-center justify-center gap-4 pt-10 md:pt-5">
      <img src="/error.png" className="max-w-full" />
      <p>{searchParams.get("msg")} </p>
      <Link to={"/"}><Button>Go Home</Button></Link>
    </section>
  )
}

export default Error
