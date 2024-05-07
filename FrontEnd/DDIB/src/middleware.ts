import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export async function middleware(request: NextRequest) {
  if (!request.cookies.has("state")) {
    console.log("ss");
    return NextResponse.redirect(new URL("/products/wait", request.url));
  }
}

export const config = {
  matcher: ["/order"],
};
