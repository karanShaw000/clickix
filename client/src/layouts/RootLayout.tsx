import {  Outlet, ScrollRestoration } from "react-router";

export default function RootLayout() {
  return (
    <section className="bg-background min-h-svh flex flex-col">
      <main className=" my-4 px-4 ">
        <Outlet />
      </main>
      <ScrollRestoration />
    </section>
  )
}



