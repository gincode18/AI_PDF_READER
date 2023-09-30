import { cn } from "@/lib/Utils"
import { ReactNode } from "react"

function MarginWrapper({className, children }: { className?:string,children: ReactNode}) {
  return (
    <div className={cn("mx-auto  w-full max-w-screen-xl px-2.5 md:px-20",className)} >{children}</div>
  )
}

export default MarginWrapper