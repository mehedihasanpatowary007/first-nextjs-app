import { NextResponse } from "next/server";

function middleware(request) {
  return NextResponse.redirect(new URL("/register", request.url));
}

export default middleware;

export const config = {
  matcher: "/services/:path*",
}
