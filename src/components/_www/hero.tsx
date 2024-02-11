import React from "react";
import Image from "next/image";
import people from "public/images/people.webp";
import Button from "~components/core/button";

export default function Hero() {
  return (
    <section>
      <div className="container mx-auto w-full max-w-screen-lg px-4">
        <div className="mx-auto flex w-full max-w-2xl flex-col items-center pb-24 pt-12 text-center">
          <div className="relative w-full overflow-hidden">
            <Image
              src={people.src}
              alt="people rally image"
              height={400}
              width={600}
              priority={true}
              style={{ width: "auto" }}
            ></Image>
          </div>
          <h1 className="my-8 font-family-caprasimo text-4xl text-zinc-950 md:text-5xl">
            Organize, prioritize, and get things done.
          </h1>
          <p className="text-base text-zinc-900">
            Tesseract is the personalized and flexible writing / todo app that
            adapts to the way you think. Streamline your work by doing it, and
            seeing it, in one place.
          </p>
          <div className="mt-8 flex items-center gap-4">
            <Button>Try Tesseract free</Button>
            <Button variant="link">Request a demo</Button>
          </div>
        </div>
      </div>
    </section>
  );
}
