"use client";

import Link from "next/link"
import React from "react";
import { buttonVariants } from "@/components/ui/button"
import { cn } from "@/lib/utils"
import Balancer from "react-wrap-balancer"
import { Icons } from "@/components/shared/icons"
import ExpandingArrow from '@/components/expanding-arrow'
import Uploader from '@/components/uploader'
import { Toaster } from '@/components/toaster'

export default function IndexPage() {

  return (
    <>
      <section className="space-y-6 pb-12 pt-16 lg:py-28">
        <div className="container flex max-w-[64rem] flex-col items-center gap-5 text-center">
          <Link
            href="https://twitter.com/docudotrun"
            className={cn(buttonVariants({ variant: "outline", size: "sm" }), "animate-fade-up opacity-0")}
            style={{ animationDelay: "0.15s", animationFillMode: "forwards" }}
            target="_blank"
          >
            Introducing on <Icons.twitter className="ml-2 h-4 w-4" />
          </Link>

          <h1
            className="animate-fade-up font-urban text-4xl font-extrabold tracking-tight opacity-0 sm:text-5xl md:text-6xl lg:text-7xl"
            style={{ animationDelay: "0.25s", animationFillMode: "forwards" }}
          >
            <Balancer>
              Kick off with a bang with{" "}
              <span className="relative bg-gradient-to-r from-indigo-500 to-purple-500/80 bg-clip-text font-extrabold text-transparent">
                Docu Flow
              </span>
            </Balancer>
          </h1>

          <p
            className="max-w-[42rem] animate-fade-up leading-normal text-muted-foreground opacity-0 sm:text-xl sm:leading-8"
            style={{ animationDelay: "0.35s", animationFillMode: "forwards" }}
          >
            <Balancer>
              Build your document workflow using OCR to digitalize, AI to understand, Slack API, X API, etc to notify and retrieve or send data via folder, http(s), ftp, email.
            </Balancer>
          </p>
          <main className="relative flex min-h-screen flex-col items-center justify-center">
            <Toaster />
            <Link
              href="/blog"
              className="group mt-20 sm:mt-0 rounded-full flex space-x-1 bg-white/30 shadow-sm ring-1 ring-gray-900/5 text-gray-600 text-sm font-medium px-10 py-2 hover:shadow-lg active:shadow-sm transition-all"
            >
              <p>See more case studies</p>
              <ExpandingArrow />
            </Link>
            <h1 className="pt-4 pb-8 bg-gradient-to-br from-black via-[#171717] to-[#575757] bg-clip-text text-center text-4xl font-medium tracking-tight text-transparent md:text-7xl">
              See OCR and AI extract documents
            </h1>
            <div className="bg-white/30 p-12 shadow-xl ring-1 ring-gray-900/5 rounded-lg backdrop-blur-lg max-w-xl mx-auto w-full">
              <Uploader />
            </div>
          </main>
          <div
            className="flex animate-fade-up justify-center space-x-2 opacity-0 md:space-x-4"
            style={{ animationDelay: "0.4s", animationFillMode: "forwards" }}
          >
            <Link href="/pricing" className={cn(buttonVariants({ size: "lg" }))}>
              Go Pricing
            </Link>
            <Link
              href="/docs"
              target="_blank"
              rel="noreferrer"
              className={cn(buttonVariants({ variant: "outline", size: "lg" }), "px-4")}
            >
              <Icons.help className="mr-2 h-4 w-4" />
              <p>
                <span className="hidden sm:inline-block">Lean more</span>
              </p>
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}