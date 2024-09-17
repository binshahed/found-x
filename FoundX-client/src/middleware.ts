import { NextResponse } from "next/server";
import { NextRequest } from "next/server";

// This function can be marked `async` if using `await` inside

const AuthRoutes = ["/login", "/register"];

export function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(pathname);

  let user = undefined;

  user = {
    name: "shahed",
    token: "token",
    role: "admin"
  };

  if (user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  //   if (user?.name) {
  //     return NextResponse.next();
  //   } else {
  //     return NextResponse.redirect(new URL("/login", request.url));
  //   }
  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: "/profile"
};
