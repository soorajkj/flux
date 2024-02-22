"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import people from "public/images/dashboard.png";
import Button from "~components/core/button";

export default function Hero() {
  return (
    <section className="relative">
      <div className="container mx-auto w-full max-w-screen-lg px-4">
        <div className="relative mx-auto flex w-full max-w-2xl flex-col items-center pb-24 pt-12">
          <div className="relative z-10 w-full overflow-hidden after:absolute after:bottom-0 after:left-0 after:right-0 after:top-0 after:bg-gradient-to-b after:from-transparent after:via-neutral-900 after:to-neutral-900 after:bg-contain">
            <Image
              src={people.src}
              alt="people rally image"
              height={300}
              width={600}
              priority={true}
              style={{ width: "auto", animationDuration: "60000ms" }}
              className="relative animate-spin"
            ></Image>
          </div>
          <div className="relative z-20 -mt-96 flex flex-col items-center text-center">
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
                <Link href={"/signup"} scroll>
                  Try Tesseract free
                </Link>
              </Button>
              <Button variant="subtile">Request a demo</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
