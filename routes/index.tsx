/** @jsx h */
import { h } from "preact";
import { tw } from "@twind";
import Counter from "../islands/Counter.tsx";

export default function Home() {
  return (
    <div class={tw`p-4 mx-auto max-w-screen-md`}>
      <img
        src="/nomadiclogo.svg"
        alt="nomadic asim logo"
		class={tw`h-20`}
      />
      <p class={tw`mt-20 font-bold text-3xl`}>Hi,</p>
      <p class={tw`mt-10 font-bold text-3xl`}>Welcome to my site</p>
    </div>
  );
}
