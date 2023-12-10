import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { Button } from "./ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import Image from "next/image";
import { Icons } from "./Icons";
import Link from "next/link";
import { Gem } from "lucide-react";
import { LogoutLink } from "@kinde-oss/kinde-auth-nextjs/server";

interface UserAccountNavProps {
  email: string | undefined;
  name: string;
  imageUrl: string;
}

const UserAccountNav = async ({
  email,
  imageUrl,
  name,
}: UserAccountNavProps) => {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild className="overflow-visible">
        <Avatar className="relative w-12 h-12 rounded-full">
          {imageUrl ? (
            // <div className="relative aspect-square h-full w-full">
            //   <img
            //     src={imageUrl}
            //     alt="profile picture"
            //     className=' rounded-full'
            //     referrerPolicy="no-referrer"
            //   />

            // </div>
            <AvatarImage src="https://github.com/shadcn.png" className=" rounded-full"/>
          ) : (
            <AvatarFallback>
              <span className="sr-only">{name}</span>
              <Icons.user className="h-6 w-6 text-primary" />
            </AvatarFallback>
          )}
        </Avatar>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className="bg-transparent backdrop-blur-md"
        align="end"
      >
        <div className="flex items-center justify-start gap-2 p-2">
          <div className="flex flex-col space-y-0.5 leading-none">
            {name && <p className="font-medium text-sm text-primary">{name}</p>}
            {email && (
              <p className="w-[200px] truncate text-xs text-secondary">
                {email}
              </p>
            )}
          </div>
        </div>

        <DropdownMenuSeparator />

        <DropdownMenuItem asChild>
          <Link href="/dashboard">Dashboard</Link>
        </DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem className="cursor-pointer">
          <LogoutLink>Log out</LogoutLink>
        </DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default UserAccountNav;
