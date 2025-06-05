import { createContext, useContext, useState, type ReactNode } from "react";


type LinkSubmitStatusContextType = {
  status: boolean
  toggleStatus: () => void
  shortenUrl: string
  setShortenUrl: (url: string) => void
}

const LinkSubmitStatusContext = createContext<LinkSubmitStatusContextType | undefined>(undefined);

export const LinkSubmitStatusProvider = ({ children }: { children: ReactNode }) => {
  const [status, setStatus] = useState(false);
  const [shortenUrl, setShortenUrl] = useState('');

  const toggleStatus = () => {
    setStatus(prevStatus => !prevStatus);
  }
  return (
    <LinkSubmitStatusContext.Provider value={{ status, toggleStatus, shortenUrl, setShortenUrl }}>
      {children}
    </LinkSubmitStatusContext.Provider>
  )
}

export const useLinkSubmitStatus = () => {
  const ctx = useContext(LinkSubmitStatusContext);
  if (!ctx) throw new Error("useLinkSubmitStatus must be used within a LinkSubmitStatusProvider");
  return ctx;
}
