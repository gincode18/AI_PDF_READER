"use client"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"

export default function TextareaWithLabel() {
  return (
    <div className=" mt-7 flex justify-center items-center flex-col gap-1.5">
      <Label className=" text-3xl" htmlFor="message">Output will be dispalyed here</Label>
      <Textarea className=" w-[40%]" placeholder=" your will be displayed  message here." id="message" />
    </div>
  )
}
