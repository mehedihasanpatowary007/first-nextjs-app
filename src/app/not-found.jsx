import { Home } from "lucide-react";
import Link from "next/link";
import React from "react";

function NotFoundPage() {
  return (
    <div className="min-h-screen flex justify-center items-center relative">
      <Link className="absolute top-4 left-5" href={"/"}>
        <Home />
      </Link>
      <img
        src="https://www.frebers.com/wp-content/uploads/wpdm-cache/Page-Not-Found-Vector-768x0.jpg"
        alt=""
      />
    </div>
  );
}

export default NotFoundPage;
