import { Metadata } from "next";
import { ReactNode } from "react";


export const metadata: Metadata = ({
  title: "Add new Project || Opentyped",
  description: "",
  keywords: ["add new project to opentyped", "opentyped", "open source"],
  robots: "index, follow"
})

export default function Layout(
  { children }: { children: ReactNode }
) {
  return (
    <>
      {children}
    </>
  )
}