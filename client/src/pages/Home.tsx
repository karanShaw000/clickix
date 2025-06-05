import CreateShortUrl from "@/components/Home/CreateShortUrl"
import LinkAnalytics from "@/components/Home/LinkAnalytics"
import { LinkSubmitStatusProvider } from "@/context/LinkSumbitStatus"

const Home = () => {
  return (
    <section className="grid grid-cols-1 gap-10 md:grid-cols-2 ">
      <LinkSubmitStatusProvider>
        <CreateShortUrl />
      </LinkSubmitStatusProvider>
      <LinkAnalytics />
    </section>
  )
}

export default Home
