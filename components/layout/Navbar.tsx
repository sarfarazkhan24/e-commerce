"use client";

import { useEffect, useState, type HTMLAttributes } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import {
  CartShopping,
  ChevronRight,
  Heart,
  Menu,
  Search,
  User,
  X,
} from "lucide-react";

import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navigationItems = [
  { label: "Home", href: "#home" },
  { label: "Shop", href: "#shop" },
  { label: "About", href: "#about" },
  { label: "Contact", href: "#contact" },
] as const;

type NavbarProps = HTMLAttributes<HTMLElement>;

export default function Navbar({ className, ...props }: NavbarProps) {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 80);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = isDrawerOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isDrawerOpen]);

  return (
    <>
      <header
        className={cn(
          "sticky top-0 z-50 w-full transition-all duration-300",
          isScrolled ? "bg-white/95 shadow-sm backdrop-blur-md" : "bg-transparent",
          className
        )}
        {...props}
      >
        <div className="mx-auto flex h-16 w-full max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8 lg:h-20">
          <Link
            href="#"
            aria-label="AL-HAYAT home"
            className="text-lg font-semibold tracking-[0.2em] text-foreground sm:text-xl"
          >
            AL-HAYAT
          </Link>

          <nav className="hidden items-center gap-8 lg:flex" aria-label="Primary">
            {navigationItems.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-foreground/80 transition-colors hover:text-foreground"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <div className="hidden items-center gap-2 lg:flex">
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-10 w-10 rounded-full px-0"
              aria-label="Search"
            >
              <Search className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-10 w-10 rounded-full px-0"
              aria-label="Wishlist"
            >
              <Heart className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-10 w-10 rounded-full px-0"
              aria-label="Cart"
            >
              <CartShopping className="h-4 w-4" />
            </Button>
            <Button
              type="button"
              variant="ghost"
              size="sm"
              className="h-10 w-10 rounded-full px-0"
              aria-label="Account"
            >
              <User className="h-4 w-4" />
            </Button>
          </div>

          <Button
            type="button"
            variant="ghost"
            size="sm"
            className="h-10 w-10 rounded-full px-0 lg:hidden"
            onClick={() => setIsDrawerOpen(true)}
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" />
          </Button>
        </div>
      </header>

      <AnimatePresence>
        {isDrawerOpen ? (
          <>
            <motion.button
              type="button"
              aria-label="Close menu overlay"
              className="fixed inset-0 z-50 cursor-default bg-black/40 lg:hidden"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.25 }}
              onClick={() => setIsDrawerOpen(false)}
            />

            <motion.aside
              className="fixed right-0 top-0 z-50 h-full w-[88vw] max-w-sm bg-white shadow-2xl lg:hidden"
              initial={{ x: "100%" }}
              animate={{ x: 0 }}
              exit={{ x: "100%" }}
              transition={{ type: "spring", stiffness: 320, damping: 32 }}
              role="dialog"
              aria-modal="true"
              aria-label="Mobile navigation"
            >
              <div className="flex h-16 items-center justify-between border-b border-border px-4">
                <span className="text-sm font-semibold tracking-[0.2em] text-foreground">
                  AL-HAYAT
                </span>
                <Button
                  type="button"
                  variant="ghost"
                  size="sm"
                  className="h-10 w-10 rounded-full px-0"
                  onClick={() => setIsDrawerOpen(false)}
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" />
                </Button>
              </div>

              <div className="flex h-[calc(100%-4rem)] flex-col justify-between p-4">
                <nav className="space-y-2" aria-label="Mobile primary">
                  {navigationItems.map((item, index) => (
                    <motion.div
                      key={item.label}
                      initial={{ opacity: 0, x: 16 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.05 * index }}
                    >
                      <Link
                        href={item.href}
                        className="flex items-center justify-between rounded-xl border border-border px-4 py-4 text-base font-medium text-foreground transition-colors hover:bg-muted"
                        onClick={() => setIsDrawerOpen(false)}
                      >
                        {item.label}
                        <ChevronRight className="h-4 w-4 text-muted-foreground" />
                      </Link>
                    </motion.div>
                  ))}
                </nav>

                <div className="grid grid-cols-2 gap-3 border-t border-border pt-4">
                  <Button type="button" variant="outline" className="justify-start gap-2">
                    <Search className="h-4 w-4" />
                    Search
                  </Button>
                  <Button type="button" variant="outline" className="justify-start gap-2">
                    <Heart className="h-4 w-4" />
                    Wishlist
                  </Button>
                  <Button type="button" variant="outline" className="justify-start gap-2">
                    <CartShopping className="h-4 w-4" />
                    Cart
                  </Button>
                  <Button type="button" variant="outline" className="justify-start gap-2">
                    <User className="h-4 w-4" />
                    Account
                  </Button>
                </div>
              </div>
            </motion.aside>
          </>
        ) : null}
      </AnimatePresence>
    </>
  );
}