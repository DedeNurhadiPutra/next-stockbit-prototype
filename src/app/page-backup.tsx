"use client";

import Navbar from "@/components/header/navbar";

export default function Home() {
  // useEffect(() => {
  //   fetch("/api/me")
  //     .then((res) => res.json())
  //     .then((data) => {
  //       console.log("User session:", data);
  //     })
  //     .catch((err) => console.error(err));
  // }, []);

  // const isLoggedIn = true;

  return (
    <div className="flex w-full min-h-20 flex-col items-center justify-center p-24">
      <Navbar />
    </div>
  );
}
