import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table"
import useGetTopClickedLinksQuery from "@/hooks/useGetTopClickedLinksQuery"
import { Skeleton } from "../ui/skeleton";
import { Link } from "react-router";


const LinkAnalytics = () => {
  const { data, isLoading, isError } = useGetTopClickedLinksQuery();
  if (isError) {
    return (<div className="flex items-center justify-center p-4 border-white border-2 rounded-lg">
      <p className="text-destructive">Something went wrong</p>
    </div>)
  }
  if (data && data.data?.length === 0) {
    return (<div className="flex items-center justify-center p-4 border-white border-2 rounded-lg">
      <p >No Top Links</p>
    </div>)
  }
  return (
    <div className="p-4 border-white border-2 rounded-lg">
      <Table>
        <TableCaption>A list of Top Clicked Links</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Links</TableHead>
            <TableHead className="text-right">Counts</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {isLoading && <LinkAnalyticsSkeleton />}
          {
            data?.data?.map((link) => (
              <TableRow key={link._id}>
                <TableCell className="underline-offset-2 hover:underline">
                  <Link to={link.hashId} target="_blank" rel="noopener noreferrer">{link.hashId}</Link>
                </TableCell>
                <TableCell className="text-right">{link.clickCount}</TableCell>
              </TableRow>
            ))
          }
        </TableBody>
      </Table>
    </div>
  )
}

export default LinkAnalytics

const LinkAnalyticsSkeleton = () => {
  return (
    <>
      {
        Array.from({ length: 5 }).map((_, idx) => (
          <TableRow key={idx}>
            <TableCell colSpan={2} className="text-center">
              <Skeleton className="h-6 w-full" />
            </TableCell>
          </TableRow>
        ))
      }
    </>
  )
}
