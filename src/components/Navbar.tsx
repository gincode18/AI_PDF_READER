import Link from "next/link";
import MarginWrapper from "./MarginWrapper";
import { buttonVariants } from "./ui/button";
import {
  LoginLink,
  RegisterLink,
  getKindeServerSession,
} from "@kinde-oss/kinde-auth-nextjs/server";
import { ArrowRight } from "lucide-react";
import Logo from "./Logo";

const Navbar = () => {
  const { getUser } = getKindeServerSession();
  const user = getUser();

  return (
    <nav className="sticky h-16 inset-x-0 top-0 z-30 w-full border-b   backdrop-blur-lg transition-all pt-1">
      <MarginWrapper>
        <div className="flex h-14 items-center justify-between ">
          <div className=" flex flex-row">
            <Link href="/" className="flex z-40  ">
              <Logo></Logo>
            </Link>
            <span className="font-semibold mt-6 bg-gradient-to-r  from-primary via-accent to-secondary inline-block text-transparent bg-clip-text ">PaperProphet.</span>
          </div>

          <div className="hidden items-center space-x-4 sm:flex">
            {!user ? (
              <>
                <Link
                  href="/pricing"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Pricing
                </Link>
                <LoginLink
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Sign in
                </LoginLink>
                <RegisterLink
                  className={buttonVariants({
                    size: "sm",
                  })}
                >
                  Get started <ArrowRight className="ml-1.5 h-5 w-5" />
                </RegisterLink>
              </>
            ) : (
              <>
                <Link
                  href="/dashboard"
                  className={buttonVariants({
                    variant: "ghost",
                    size: "sm",
                  })}
                >
                  Dashboard
                </Link>
              </>
            )}
          </div>
        </div>
      </MarginWrapper>
    </nav>
  );
};

export default Navbar;
