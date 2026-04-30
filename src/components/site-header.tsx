"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import { Moon, Sun, Languages } from "lucide-react";
import { useTheme } from "@/components/theme-provider";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

type Lang = "he" | "en";

function replaceLangInPath(pathname: string, nextLang: Lang) {
  const parts = pathname.split("/").filter(Boolean);
  if (parts.length === 0) return `/${nextLang}`;
  if (parts[0] === "he" || parts[0] === "en") parts[0] = nextLang;
  else parts.unshift(nextLang);
  return `/${parts.join("/")}`;
}

export function SiteHeader({ lang }: { lang: Lang }) {
  const pathname = usePathname();
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();

  const t =
    lang === "he"
      ? {
          home: "בית",
          work: "עבודות",
          services: "שירותים",
          contact: "דברו איתי",
        }
      : {
          home: "Home",
          work: "Work",
          services: "Services",
          contact: "Contact",
        };

  const nav = [
    { href: `/${lang}#top`, label: t.home },
    { href: `/${lang}#work`, label: t.work },
    { href: `/${lang}#services`, label: t.services },
  ];

  return (
    <header
      dir="ltr"
      className="sticky top-0 z-50 w-full border-b border-[color:var(--border)] bg-[color:var(--background)/0.75] backdrop-blur-xl"
    >
      <div className="mx-auto grid h-16 max-w-6xl grid-cols-[1fr_auto_1fr] items-center px-4">
        <div className="flex items-center gap-2">
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon" aria-label="Language">
                <Languages className="h-5 w-5" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="start">
              <DropdownMenuItem
                onSelect={() => router.push(replaceLangInPath(pathname, "he"))}
              >
                <span className="w-5 text-center">{lang === "he" ? "✓" : ""}</span>
                עברית
              </DropdownMenuItem>
              <DropdownMenuItem
                onSelect={() => router.push(replaceLangInPath(pathname, "en"))}
              >
                <span className="w-5 text-center">{lang === "en" ? "✓" : ""}</span>
                English
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline"
            size="icon"
            aria-label="Toggle theme"
            onClick={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
          >
            {resolvedTheme === "dark" ? (
              <Sun className="h-5 w-5" />
            ) : (
              <Moon className="h-5 w-5" />
            )}
          </Button>

          <Link
            href={`/${lang}#contact`}
            className="hidden h-11 items-center justify-center rounded-full bg-[color:var(--accent)] px-5 text-sm font-semibold text-black transition-transform hover:scale-[1.02] active:scale-[0.98] md:inline-flex"
          >
            {t.contact}
          </Link>
        </div>

        <nav className="hidden items-center justify-center gap-6 text-sm font-medium md:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-full px-3 py-2 text-[color:var(--foreground)/0.8] transition-colors hover:text-[color:var(--foreground)] hover:bg-[color:var(--muted)]",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className="flex items-center justify-end">
          <Link href={`/${lang}#top`} className="flex items-center gap-3">
            <span className="grid h-9 w-9 place-items-center">
              <Image
                src="/logo.png"
                alt="StylePlus"
                width={34}
                height={34}
                priority
                className="h-auto w-auto dark:invert dark:brightness-110 dark:contrast-110"
              />
            </span>
            <span className="hidden text-sm font-extrabold tracking-tight md:inline">
              StylePlus
            </span>
          </Link>
        </div>
      </div>
    </header>
  );
}
