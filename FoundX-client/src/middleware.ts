import { NextResponse } from "next/server";
import { NextRequest } from "next/server";
import { getUser } from "./services/authService";

// This function can be marked `async` if using `await` inside

const AuthRoutes = ["/login", "/register"];

const roleBasedRouters: any = {
  USER: [/^\/profile/],
  ADMIN: [/^\/admin/]
};

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;

  console.log(pathname);

  let user: { name: string; token: string; role: string } | undefined =
    undefined;

  user = await getUser();

  console.log("user", user);

  if (!user) {
    if (AuthRoutes.includes(pathname)) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(
        new URL(`/login?redirect=${pathname}`, request.url)
      );
    }
  }

  if (user?.role && roleBasedRouters[user?.role]) {
    const routes: RegExp[] = roleBasedRouters[user?.role];
    if (routes.some((route) => pathname.match(route))) {
      return NextResponse.next();
    } else {
      return NextResponse.redirect(new URL("/", request.url));
    }
  }

  return NextResponse.redirect(new URL("/", request.url));
}

// See "Matching Paths" below to learn more
export const config = {
  matcher: ["/profile", "/profile/:page*", "/admin", "/login", "/register"]
};
