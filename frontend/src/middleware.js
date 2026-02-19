import { NextResponse } from "next/server";

export function middleware(request) {
  const token = request.cookies.get("auth_token");
  const { pathname } = request.nextUrl;

  if (!token && (pathname.startsWith("/dashboard") || pathname.startsWith("/products"))) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

    if (token && pathname === "/login") {
        return NextResponse.redirect(new URL("/dashboard", request.url));
    }

  return NextResponse.next();
}

export const config = {
  matcher: ["/dashboard/:path*", "/products/:path*", "/login"],
};