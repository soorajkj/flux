"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import people from "public/images/people.webp";
import Button from "~components/core/button";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container mx-auto w-full max-w-screen-lg px-4">
        <div className="relative z-20 mx-auto flex w-full max-w-2xl flex-col items-center pb-24 pt-12 text-center">
          <div className="relative hidden w-full overflow-hidden">
            <Image
              src={people.src}
              alt="people rally image"
              height={400}
              width={600}
              priority={true}
              style={{ width: "auto" }}
            ></Image>
          </div>
          <h1 className="my-8 font-family-caprasimo text-4xl text-neutral-300 md:text-5xl md:leading-tight">
            Organize, prioritize, and get things done.
          </h1>
          <p className="text-base">
            Tesseract is the personalized and flexible writing / todo app that
            adapts to the way you think. Streamline your work by doing it, and
            seeing it, in one place.
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button variant="default" asChild>
              <Link href={"/signup"} scroll={true}>
                Try Tesseract free
              </Link>
            </Button>
            <Button variant="ghots">Request a demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
