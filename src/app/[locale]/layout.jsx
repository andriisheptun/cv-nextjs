// import { NextIntlClientProvider } from "next-intl";
// import { notFound } from "next/navigation";

// export default async function LocaleLayout({ children, params }) {
//   const { locale } = params;

//   let messages;
//   try {
//     messages = (await import(`../../messages/${locale}.json`)).default;
//   } catch (error) {
//     notFound();
//   }

//   return (
//     <NextIntlClientProvider locale={locale} messages={messages}>
//       {children}
//     </NextIntlClientProvider>
//   );
// }

// import { NextIntlClientProvider } from "next-intl";

// export async function generateStaticParams() {
//   return [{ lang: "en" }, { lang: "ua" }];
// }

// export default async function RootLayout({
//   children,
//   params,
// }: Readonly<{
//   children: React.ReactNode;
//   params: Promise<{ lang: "en" | "ua" }>;
// }>) {
//   return (
//     <html lang={(await params).lang}>
//       <NextIntlClientProvider locale={locale} messages={messages}>
//         <body>{children}</body>
//       </NextIntlClientProvider>
//     </html>
//   );
// }

import { NextIntlClientProvider } from "next-intl";
import { getMessages } from "next-intl/server";

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;
  const messages = await getMessages();

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
