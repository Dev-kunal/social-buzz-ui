import Image from "next/image";
import Signup from "./signup/page";
import Signin from "./signin/page";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      {/* <Signup /> */}
      <Signin />
    </main>
  );
}
