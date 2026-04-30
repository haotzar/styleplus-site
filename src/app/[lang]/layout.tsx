import { SiteHeader } from "@/components/site-header";

type Lang = "he" | "en";

export default async function LangLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const isEnglish = lang === "en";

  return (
    <div dir={isEnglish ? "ltr" : "rtl"} className="min-h-dvh">
      <SiteHeader lang={lang} />
      {children}
    </div>
  );
}
