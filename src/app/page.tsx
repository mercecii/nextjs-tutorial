import Link from "next/link";
import React from "react";
export const metadata = {
  title: "Page Title",
};

const page = () => {
  return (
    <>
      <div>Welcome Home</div>
      <Link href={"/blog"}>Blog</Link>
    </>
  );
};

export default page;
