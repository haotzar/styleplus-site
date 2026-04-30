import { SiteHeader } from "@/components/site-header";

type Lang = "he" | "en";

export function generateStaticParams() {
  return [{ lang: "he" }, { lang: "en" }];
}

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: string }>;
}) {
  const { lang } = await params;
  const isEnglish = lang === "en";

  return (
    <div dir={isEnglish ? "ltr" : "rtl"} className="min-h-dvh">
      <SiteHeader lang={lang as Lang} />
      {children}
    </div>
  );
}
