import createMiddleware from "next-intl/middleware";

export default createMiddleware({
  locales: ["ua", "en"],
  defaultLocale: "en",
});

export const config = {
  matcher: ["/((?!_next|api|favicon.ico|.*\\..*).*)"],
};
