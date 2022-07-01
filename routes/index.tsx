/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md text-center`}>
      <img
        src="/nomadiclogo.svg"
        alt="nomadic asim logo"
		class={tw`h-20`}
      />
      <p class={tw`mt-20 font-black text-9xl`}>Explore.</p>
      <p class={tw`mt-10 font-black text-9xl`}>Everywhere.</p>
      <p class={tw`mt-20 font-black text-gray-300 text-6xl`}>A seeker, a learner, a long term world traveller</p>
    </div>
  );
}
