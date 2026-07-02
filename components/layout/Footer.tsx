import type { HTMLAttributes } from "react";
import Link from "next/link";
import {
  Facebook,
  Instagram,
  Mail,
  MapPin,
  MessageCircle,
  Phone,
} from "lucide-react";

import { Container } from "@/components/common/Container";
import { cn } from "@/lib/utils";

const quickLinks = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

const categories = [
  { label: "Soaps", href: "#soaps" },
  { label: "Face Care", href: "#face-care" },
  { label: "Hair Care", href: "#hair-care" },
  { label: "Lip Care", href: "#lip-care" },
] as const;

const contactItems = [
  { icon: Phone, label: "+91 00000 00000", href: "tel:+910000000000" },
  { icon: Mail, label: "hello@al-hayat.com", href: "mailto:hello@al-hayat.com" },
  { icon: MessageCircle, label: "WhatsApp", href: "#whatsapp" },
  { icon: MapPin, label: "Pune, Maharashtra", href: "#location" },
] as const;

const socialLinks = [
  { icon: Instagram, label: "Instagram", href: "#instagram" },
  { icon: Facebook, label: "Facebook", href: "#facebook" },
  { icon: MessageCircle, label: "WhatsApp", href: "#whatsapp" },
] as const;

type FooterProps = HTMLAttributes<HTMLElement>;

export default function Footer({ className, ...props }: FooterProps) {
  return (
    <footer className={cn("border-t border-border bg-background", className)} {...props}>
      <Container className="py-12 sm:py-16">
        <div className="grid gap-10 md:grid-cols-2 xl:grid-cols-4">
          <div className="space-y-4">
            <div className="space-y-2">
              <p className="text-2xl font-semibold tracking-[0.2em] text-foreground">
                AL-HAYAT
              </p>
              <p className="max-w-xs text-sm leading-6 text-muted-foreground">
                Beauty of Herbs. Radiance of You.
              </p>
            </div>
            <p className="max-w-sm text-sm leading-6 text-muted-foreground">
              Premium herbal essentials designed to feel refined, natural, and timeless.
            </p>
          </div>

          <nav className="space-y-4" aria-label="Quick links">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Quick Links
            </h2>
            <ul className="space-y-3">
              {quickLinks.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav className="space-y-4" aria-label="Categories">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Categories
            </h2>
            <ul className="space-y-3">
              {categories.map((item) => (
                <li key={item.label}>
                  <Link
                    href={item.href}
                    className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="space-y-4">
            <h2 className="text-sm font-semibold uppercase tracking-[0.2em] text-foreground">
              Contact
            </h2>

            <ul className="space-y-3">
              {contactItems.map((item) => {
                const Icon = item.icon;

                return (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-foreground"
                    >
                      <Icon className="h-4 w-4 shrink-0" />
                      <span>{item.label}</span>
                    </Link>
                  </li>
                );
              })}
            </ul>

            <div className="pt-2">
              <p className="text-sm font-medium text-foreground">Social</p>
              <div className="mt-3 flex flex-wrap gap-3">
                {socialLinks.map((item) => {
                  const Icon = item.icon;

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      aria-label={item.label}
                      className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border text-foreground transition-colors hover:bg-muted"
                    >
                      <Icon className="h-4 w-4" />
                    </Link>
                  );
                })}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col gap-3 border-t border-border pt-6 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 AL-HAYAT by Dr. Farheen</p>
          <p>Made with 🌿 in Pune</p>
        </div>
      </Container>
    </footer>
  );
}