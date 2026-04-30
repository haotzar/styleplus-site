import Link from "next/link";
import Image from "next/image";
import { ArrowUpRight, Sparkles, Wand2 } from "lucide-react";

import { LandingHeroMotion } from "@/components/landing-hero";
import { SectionReveal } from "@/components/section-reveal";
import { Button } from "@/components/ui/button";

type Lang = "he" | "en";

const copy: Record<Lang, any> = {
  he: {
    heroTitle: "אתר שנראה כמו 2026",
    heroSubtitle:
      "StylePlus — עיצוב אתרים לעסקים שמחפשים נוכחות שאי אפשר להתעלם ממנה. טיפוגרפיה גדולה, תנועה חכמה, ודיוק שמייצר אמון.",
    primaryCta: "בואו נבנה אתר",
    secondaryCta: "ראו עבודות",
    servicesTitle: "מה אני בונה בשבילך",
    services: [
      {
        title: "אתר תדמית פרימיום",
        desc: "עיצוב שמרגיש מותג. אנימציות עדינות. קריאות גבוהה. RTL מושלם.",
      },
      {
        title: "דפי נחיתה ממירים",
        desc: "היררכיית מסר נכונה, CTA חכם, ורכיבי UI שמרגישים יוקרתיים.",
      },
      {
        title: "עיצוב מערכת",
        desc: "שפה ויזואלית עקבית עם קומפוננטות שמאפשרות לגדול מהר.",
      },
    ],
    workTitle: "עבודות נבחרות",
    workSubtitle: "טעימה מהפרויקטים האחרונים — עיצוב נקי, היררכיה חדה, ומיקרו־אינטראקציות שמרגישות יוקרתיות.",
    projects: [
      {
        title: "האוצר",
        href: "https://haotzar.github.io/haotzar-site/",
        imageSrc: "/portfolio/vt.PNG",
      },
      {
        title: "אוצריא",
        href: "https://www.otzaria.org/",
        imageSrc: "/portfolio/otzaria.png",
      },
      {
        title: "שיר חדש — Music",
        href: "https://shir-hadash.github.io/music/index.html",
        imageSrc: "/portfolio/image.png",
      },
      {
        title: "Devform",
        href: "https://mdartyqo.github.io/devform/",
        imageSrc: "/portfolio/devform.PNG",
      },
      {
        title: "מחנה ידידים",
        href: "https://mahaneh-iedidim.github.io/site",
        imageSrc: "/portfolio/knet.PNG",
      },
      {
        title: "StylePlus",
        href: "/he",
        featured: true,
      },
    ],
    contactTitle: "נדבר?",
    contactSubtitle:
      "ספר לי מה המטרה, מה הקהל, ומה אתה רוצה שיקרה אחרי שהגולש נכנס — ואני אחזיר לך מסך ראשון שמוכר.",
    contactCta: "שלחו וואטסאפ",
  },
  en: {
    heroTitle: "A Website That Feels Like 2026",
    heroSubtitle:
      "StylePlus — web design for businesses that want a presence you can trust. Bold typography, purposeful motion, and polished details.",
    primaryCta: "Let’s build your site",
    secondaryCta: "See work",
    servicesTitle: "What I build for you",
    services: [
      {
        title: "Premium business sites",
        desc: "Brand-first design, subtle motion, high readability, and perfect RTL support.",
      },
      {
        title: "High-converting landing pages",
        desc: "Clear message hierarchy, smart CTAs, and luxury-feeling UI components.",
      },
      {
        title: "Design systems",
        desc: "A consistent visual language with reusable components that scale.",
      },
    ],
    workTitle: "Selected work",
    workSubtitle:
      "A selection of recent projects — clean hierarchy, bold typography, and motion that feels premium.",
    projects: [
      {
        title: "HaOtzar",
        href: "https://haotzar.github.io/haotzar-site/",
        imageSrc: "/portfolio/vt.PNG",
      },
      {
        title: "Otzaria",
        href: "https://www.otzaria.org/",
        imageSrc: "/portfolio/otzaria.png",
      },
      {
        title: "Shir Hadash — Music",
        href: "https://shir-hadash.github.io/music/index.html",
        imageSrc: "/portfolio/image.png",
      },
      {
        title: "Devform",
        href: "https://mdartyqo.github.io/devform/",
        imageSrc: "/portfolio/devform.PNG",
      },
      {
        title: "Mahaneh Iedidim",
        href: "https://mahaneh-iedidim.github.io/site",
        imageSrc: "/portfolio/knet.PNG",
      },
      {
        title: "StylePlus",
        href: "/en",
        featured: true,
      },
    ],
    contactTitle: "Want to talk?",
    contactSubtitle:
      "Tell me your goal, your audience, and the action you want users to take — I’ll craft a first screen that converts.",
    contactCta: "WhatsApp me",
  },
};

export default async function Page({
  params,
}: {
  params: Promise<{ lang: Lang }>;
}) {
  const { lang } = await params;
  const t = copy[lang];

  return (
    <main id="top" className="flex-1">
      <section className="relative overflow-hidden">
        <div className="pointer-events-none absolute inset-0 opacity-80">
          <div className="absolute -top-40 left-1/2 h-[38rem] w-[38rem] -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--accent),transparent_65%)] blur-3xl" />
          <div className="absolute -bottom-40 left-1/4 h-[32rem] w-[32rem] rounded-full bg-[radial-gradient(circle_at_center,var(--accent2),transparent_65%)] blur-3xl" />
        </div>

        <div className="mx-auto grid max-w-6xl gap-10 px-4 py-20 md:grid-cols-12 md:items-end md:py-28">
          <LandingHeroMotion className="md:col-span-7">
            <div className="inline-flex items-center gap-2 rounded-full border border-[color:var(--border)] bg-[color:var(--muted)] px-4 py-2 text-xs font-semibold">
              <Sparkles className="h-4 w-4" />
              <span>STYLEPLUS</span>
            </div>

            <h1 className="mt-6 text-balance text-5xl font-black leading-[1.02] tracking-tight md:text-7xl">
              {t.heroTitle}
            </h1>
            <p className="mt-5 max-w-xl text-pretty text-lg leading-8 text-[color:var(--foreground)/0.75]">
              {t.heroSubtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <Link href={`/${lang}#contact`}>
                  {t.primaryCta} <ArrowUpRight className="h-4 w-4" />
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <Link href={`/${lang}#work`}>{t.secondaryCta}</Link>
              </Button>
            </div>
          </LandingHeroMotion>

          <LandingHeroMotion className="md:col-span-5">
            <div className="relative rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 shadow-[0_30px_90px_-60px_rgba(0,0,0,0.8)]">
              <div className="flex items-center gap-3">
                <div className="grid h-12 w-12 place-items-center rounded-2xl bg-[color:var(--accent)] text-black">
                  <Wand2 className="h-6 w-6" />
                </div>
                <div>
                  <p className="text-sm font-semibold">StylePlus</p>
                  <p className="text-xs text-[color:var(--foreground)/0.65]">
                    Web design for business
                  </p>
                </div>
              </div>
              <div className="mt-6 grid gap-3">
                <div className="h-12 rounded-2xl bg-[color:var(--muted)]" />
                <div className="h-12 rounded-2xl bg-[color:var(--muted)]" />
                <div className="h-12 rounded-2xl bg-[color:var(--muted)]" />
              </div>
              <p className="mt-5 text-xs leading-6 text-[color:var(--foreground)/0.65]">
                {lang === "he"
                  ? "מהירות, נגישות ו־SEO — כך שהאתר לא רק ייראה טוב, הוא גם יעבוד טוב."
                  : "Performance, accessibility, and SEO — so it doesn’t just look great, it works."}
              </p>
            </div>
          </LandingHeroMotion>
        </div>
      </section>

      <section id="services" className="mx-auto max-w-6xl px-4 py-16">
        <SectionReveal>
          <div className="flex items-end justify-between gap-6">
            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {t.servicesTitle}
            </h2>
            <div className="hidden h-10 w-10 rounded-full bg-[radial-gradient(circle_at_center,var(--accent2),transparent_60%)] opacity-70 md:block" />
          </div>
        </SectionReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.services.map((s: any, i: number) => (
            <SectionReveal key={s.title} delay={0.05 * i}>
              <div className="group relative overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)] p-6 transition-transform hover:-translate-y-1">
                <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity group-hover:opacity-100">
                  <div className="absolute -top-10 left-1/3 h-40 w-40 rounded-full bg-[radial-gradient(circle_at_center,var(--accent),transparent_60%)] blur-2xl" />
                </div>
                <p className="text-lg font-bold">{s.title}</p>
                <p className="mt-2 text-sm leading-7 text-[color:var(--foreground)/0.7]">
                  {s.desc}
                </p>
              </div>
            </SectionReveal>
          ))}
        </div>
      </section>

      <section id="work" className="mx-auto max-w-6xl px-4 py-16">
        <SectionReveal>
          <div className="flex items-end justify-between gap-6">
            <div>
              <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
                {t.workTitle}
              </h2>
              <p className="mt-2 text-sm text-[color:var(--foreground)/0.7]">
                {t.workSubtitle}
              </p>
            </div>
            <div className="hidden h-10 w-10 rounded-full bg-[radial-gradient(circle_at_center,var(--accent),transparent_60%)] opacity-70 md:block" />
          </div>
        </SectionReveal>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {t.projects.map((project: any, i: number) => (
            <SectionReveal key={`${project.href}-${project.title}`} delay={0.06 * i}>
              {project.featured ? (
                <Link
                  href={project.href}
                  className="group relative block aspect-[4/3] overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--card)]"
                >
                  <div className="pointer-events-none absolute inset-0 opacity-90">
                    <div className="absolute -top-24 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--accent),transparent_60%)] blur-3xl" />
                    <div className="absolute -bottom-24 left-1/3 h-80 w-80 rounded-full bg-[radial-gradient(circle_at_center,var(--accent2),transparent_60%)] blur-3xl" />
                  </div>
                  <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(255,255,255,0.18),transparent_35%,rgba(255,255,255,0.06))] opacity-0 transition-opacity duration-500 group-hover:opacity-100" />
                  <div className="absolute inset-0 p-7">
                    <p className="text-xs font-bold tracking-[0.24em] text-[color:var(--foreground)/0.7]">
                      STYLEPLUS
                    </p>
                    <p className="mt-3 text-2xl font-black leading-tight tracking-tight">
                      {project.title}
                    </p>
                    <p className="mt-3 max-w-[28ch] text-sm leading-7 text-[color:var(--foreground)/0.72]">
                      {lang === "he" ? (
                        <>
                          האתר שלך
                          <br />
                          גם האתר שלך יכול להיות מרשים ומשכנע
                        </>
                      ) : (
                        "Your website can be stunning and persuasive too — built with premium motion and crisp hierarchy."
                      )}
                    </p>
                    <div className="mt-6 inline-flex items-center gap-2 rounded-full bg-[color:var(--foreground)] px-4 py-2 text-xs font-bold text-[color:var(--background)] transition-transform group-hover:scale-[1.02]">
                      {lang === "he" ? "צפייה באתר" : "View site"}
                      <ArrowUpRight className="h-4 w-4" />
                    </div>
                  </div>
                </Link>
              ) : (
                <a
                  href={project.href}
                  target="_blank"
                  rel="noreferrer"
                  className="group relative block aspect-[4/3] overflow-hidden rounded-[2rem] border border-[color:var(--border)] bg-[color:var(--muted)]"
                >
                  <Image
                    src={project.imageSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    priority={i === 0}
                  />
                  <div className="absolute inset-0 bg-[linear-gradient(to_top,rgba(0,0,0,0.75),rgba(0,0,0,0.12),transparent)] opacity-80" />
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.22),transparent_55%)] opacity-0 transition-opacity group-hover:opacity-100" />
                  <div className="pointer-events-none absolute -bottom-24 -right-24 h-64 w-64 rounded-full bg-[radial-gradient(circle_at_center,var(--accent2),transparent_60%)] opacity-50 blur-3xl" />
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between rounded-2xl bg-[color:var(--background)/0.62] px-4 py-3 backdrop-blur">
                    <p className="text-sm font-semibold">{project.title}</p>
                    <ArrowUpRight className="h-4 w-4" />
                  </div>
                </a>
              )}
            </SectionReveal>
          ))}
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-6xl px-4 py-20">
        <SectionReveal>
          <div className="relative overflow-hidden rounded-[2.5rem] border border-[color:var(--border)] bg-[color:var(--card)] p-8 md:p-12">
            <div className="pointer-events-none absolute inset-0">
              <div className="absolute -top-32 left-1/2 h-80 w-80 -translate-x-1/2 rounded-full bg-[radial-gradient(circle_at_center,var(--accent),transparent_60%)] opacity-35 blur-3xl" />
            </div>

            <h2 className="text-3xl font-extrabold tracking-tight md:text-4xl">
              {t.contactTitle}
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-7 text-[color:var(--foreground)/0.7]">
              {t.contactSubtitle}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <Button asChild>
                <a
                  href="https://wa.me/15551234567"
                  target="_blank"
                  rel="noreferrer"
                >
                  {t.contactCta} <ArrowUpRight className="h-4 w-4" />
                </a>
              </Button>
              <Button variant="outline" asChild>
                <a href="mailto:yy581834yy@gmail.com">yy581834yy@gmail.com</a>
              </Button>
            </div>
          </div>
        </SectionReveal>
      </section>
    </main>
  );
}
