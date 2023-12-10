"use client"
import MarginWrapper from "../components/MarginWrapper";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { buttonVariants } from "@/components/ui/button";
import Image from "next/image";

export default function Home() {


  return (
    <div>
      
      <MarginWrapper className="mb-12 mt-28 sm:mt-40 flex flex-col items-center justify-center text-center">
        <div className="mx-auto mb-4 flex max-w-fit items-center justify-center space-x-2 overflow-hidden rounded-full border border-primary bg-secondary px-7 py-2 shadow-md backdrop-blur transition-all hover:border-secondary hover:bg-primary ">
          <p className="text-sm font-semibold text-accent">
            PaperProphet is now public!
          </p>
        </div>
        <h1 className="max-w-4xl text-5xl font-bold md:text-6xl lg:text-7xl text-secondary">
          Chat with your <span className="text-primary">documents</span> in
          seconds.
        </h1>
        <p className="mt-5 max-w-prose sm:text-lg text-accent">
          Quill allows you to have conversations with any PDF document. Simply
          upload your file and start asking questions right away.
        </p>

        <Link
          className={buttonVariants({
            size: "lg",
            className: "mt-5 text-accent",
          })}
          href="/dashboard"
          target="_blank"
        >
          Get started <ArrowRight className="ml-2 h-5 w-5" />
        </Link>
      </MarginWrapper>

      {/* value proposition section */}
      <div>
        <div className="relative isolate">
          <div
            aria-hidden="true"
            className="blur-3xl pointer-events-none absolute left-[50%] -top-40 -z-10 transform-gpu overflow-hidden  sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-primary to-secondary opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          <div>
            <div className="mx-auto max-w-6xl px-6 lg:px-8">
              <div className="mt-16 flow-root sm:mt-24">
                <div className="-m-2 rounded-xl bg-base-100 p-2 ring-1 ring-inset ring-primary lg:-m-4 lg:rounded-2xl lg:p-4">
                  <Image
                    src="/dashboard-preview.jpg"
                    alt="product preview"
                    width={1364}
                    height={866}
                    quality={100}
                    className="rounded-md bg-transparent backdrop-contrast-75 p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-secondary"
                  />
                </div>
              </div>
            </div>
          </div>

          <div
            aria-hidden="true"
            className="pointer-events-none absolute inset-x-0 -top-40 blur-3xl -z-10 transform-gpu overflow-hidden  sm:-top-80"
          >
            <div
              style={{
                clipPath:
                  "polygon(75% 0%, 100% 50%, 75% 100%, 0% 100%, 25% 50%, 0% 0%)",
              }}
              className="relative left-[calc(50%-13rem)] aspect-[1155/678] w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-secondary to-primary opacity-30 sm:left-[calc(50%-36rem)] sm:w-[72.1875rem]"
            />
          </div>
        </div>
      </div>

      {/* Feature section */}
      <div className="mx-auto mb-32 mt-32 max-w-5xl sm:mt-56">
        <div className="mb-12 px-6 lg:px-8">
          <div className="mx-auto max-w-2xl sm:text-center">
            <h2 className="mt-2 font-bold text-4xl text-primary hover:text-secondary sm:text-5xl">
              Start chatting in minutes
            </h2>
            <p className="mt-4 text-lg text-accent">
              Chatting to your PDF files has never been easier than with Quill.
            </p>
          </div>
        </div>

        {/* steps */}
        <ol className="my-8 space-y-4 pt-8 md:flex md:space-x-12 md:space-y-0">
          <li className="md:flex-1 bg-base-300 rounded-xl border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-2">
            <div className="flex flex-col space-y-2  md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-primary">Step 1</span>
              <span className="text-xl font-semibold text-secondary">
                Sign up for an account
              </span>
              <span className="mt-2 text-accent">
                Starting out for free 
              </span>
            </div>
          </li>
          <li className="md:flex-1 bg-base-300 rounded-xl border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-2">
            <div className="flex flex-col space-y-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-primary">Step 2</span>
              <span className="text-xl font-semibold text-secondary">
                Upload your PDF file
              </span>
              <span className="mt-2 text-accent">
                We&apos;ll process your file and make it ready for you to chat
                with.
              </span>
            </div>
          </li>
          <li className="md:flex-1 bg-base-300 rounded-xl border-l-4 border-primary py-2 pl-4 md:border-l-0 md:border-t-2">
            <div className="flex flex-col space-y-2 md:pb-0 md:pl-0 md:pt-4">
              <span className="text-sm font-medium text-primary">Step 3</span>
              <span className="text-xl font-semibold text-secondary">
                Start asking questions
              </span>
              <span className="mt-2 text-accent">
                It&apos;s that simple. Try out Quill today - it really takes
                less than a minute.
              </span>
            </div>
          </li>
        </ol>

        <div className="mx-auto max-w-6xl px-6 lg:px-8">
          <div className="mt-16 flow-root sm:mt-24">
            <div className="-m-2 rounded-xl bg-base-100 p-2 ring-1 ring-inset ring-primary lg:-m-4 lg:rounded-2xl lg:p-4">
              <Image
                src="/file-upload-preview.jpg"
                alt="uploading preview"
                width={1419}
                height={732}
                quality={100}
                className="rounded-md bg-transparent backdrop-contrast-75 p-2 sm:p-8 md:p-20 shadow-2xl ring-1 ring-secondary"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
