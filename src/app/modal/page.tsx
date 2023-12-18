import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Button } from "@/components/ui/button";

import TextareaWithLabel from "@/components/TextareaWithLabel";
export default function InputFile() {
  return (
    <div className=" flex items-center justify-center flex-col mt-24">
      <div className="grid w-full max-w-sm items-center gap-1.5">
        <Label className=" text-3xl" htmlFor="picture">Upload a Zip File</Label>
        <Input id="picture" type="file" />
      </div>
      <div className="grid mt-7 w-full max-w-sm items-center gap-1.5">
      <Label className=" text-3xl" htmlFor="picture">Upload a PDf File</Label>
        <Input id="picture" type="file" />
      </div>
      <div className=" flex gap-3 mt-5">
        <Button>Submit</Button>
        <Button>Reset</Button>
      </div>
      <div className="grid w-full gap-1.5">
        <TextareaWithLabel></TextareaWithLabel>
      </div>
    </div>
  );
}
