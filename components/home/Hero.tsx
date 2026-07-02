"use client";

import { motion } from "framer-motion";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/common/Container";

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0 },
};

const group = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-[#F7F1E3] via-[#FCFAF5] to-white">
      <div className="absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top_left,_rgba(31,77,58,0.14),_transparent_38%),radial-gradient(circle_at_bottom_right,_rgba(184,137,43,0.12),_transparent_34%)]" />
      <Container className="min-h-screen py-16 sm:py-20 lg:flex lg:items-center lg:py-24">
        <motion.div
          variants={group}
          initial="hidden"
          animate="visible"
          className="grid gap-12 lg:grid-cols-2 lg:items-center"
        >
          <div className="max-w-2xl space-y-6">
            <motion.span
              variants={fadeUp}
              className="inline-flex items-center rounded-full border border-[#1F4D3A]/15 bg-white/80 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#1F4D3A] shadow-sm backdrop-blur"
            >
              Doctor Formulated
            </motion.span>

            <motion.h1
              variants={fadeUp}
              className="max-w-xl text-4xl font-semibold leading-[1.05] tracking-tight text-[#1F4D3A] sm:text-5xl lg:text-7xl"
            >
              Beauty of Herbs.
              <span className="block text-[#B8892B]">Radiance of You.</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="max-w-lg text-base leading-8 text-[#1F1F1F]/75 sm:text-lg"
            >
              Discover elevated herbal skincare crafted to nourish, restore, and reveal a
              natural glow with a premium ritual designed for everyday luxury.
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="flex flex-col gap-3 sm:flex-row sm:items-center"
            >
              <Button type="button" size="lg" className="bg-[#1F4D3A] text-white hover:bg-[#173b2c]">
                Shop Now
              </Button>
              <Button type="button" variant="outline" size="lg" className="border-[#1F4D3A]/20 bg-white/70 text-[#1F4D3A] hover:bg-[#F7F1E3]">
                Explore Products
              </Button>
            </motion.div>
          </div>

          <motion.div
            variants={fadeUp}
            className="relative flex min-h-[420px] items-center justify-center lg:min-h-[640px]"
          >
            <div className="absolute inset-0 rounded-[2rem] border border-white/60 bg-white/40 shadow-[0_24px_80px_rgba(31,77,58,0.12)] backdrop-blur-xl" />
            <div className="absolute inset-6 rounded-[2rem] border border-[#1F4D3A]/10 bg-gradient-to-br from-white/70 via-[#F7F1E3]/80 to-[#F7F1E3]/50" />

            <motion.div
              animate={{ y: [0, -10, 0], rotate: [-1, 1, -1] }}
              transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10 h-[320px] w-[320px] rounded-full bg-[radial-gradient(circle_at_30%_30%,rgba(184,137,43,0.26),transparent_38%),radial-gradient(circle_at_70%_70%,rgba(31,77,58,0.24),transparent_40%),linear-gradient(145deg,rgba(255,255,255,0.92),rgba(247,241,227,0.86))] shadow-[0_28px_70px_rgba(31,77,58,0.18)] sm:h-[420px] sm:w-[420px]"
            >
              <div className="absolute left-1/2 top-10 h-24 w-2 -translate-x-1/2 rounded-full bg-[#1F4D3A]/15" />
              <div className="absolute left-10 top-16 h-28 w-16 rounded-full rounded-br-[70%] rounded-tl-[70%] bg-[#1F4D3A]/20 blur-[1px]" />
              <div className="absolute right-8 top-20 h-20 w-14 rounded-full rounded-bl-[70%] rounded-tr-[70%] bg-[#B8892B]/20 blur-[1px]" />
              <div className="absolute bottom-12 left-14 h-24 w-12 rounded-full rounded-tr-[70%] rounded-bl-[70%] bg-[#1F4D3A]/18 blur-[1px]" />
              <div className="absolute bottom-16 right-16 h-28 w-16 rounded-full rounded-tl-[70%] rounded-br-[70%] bg-[#B8892B]/18 blur-[1px]" />
              <div className="absolute inset-0 rounded-full border border-white/60" />
              <div className="absolute inset-8 rounded-full border border-[#1F4D3A]/10" />
              <div className="absolute inset-16 rounded-full border border-[#B8892B]/10" />
            </motion.div>

            <div className="absolute bottom-6 left-6 rounded-2xl border border-white/70 bg-white/85 px-4 py-3 shadow-lg backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[#1F4D3A]/70">Botanical Blend</p>
              <p className="mt-1 text-sm font-medium text-[#1F1F1F]">Pure ritual, premium care</p>
            </div>

            <div className="absolute right-6 top-6 rounded-2xl border border-[#1F4D3A]/10 bg-[#F7F1E3]/85 px-4 py-3 shadow-lg backdrop-blur-sm">
              <p className="text-xs uppercase tracking-[0.2em] text-[#1F4D3A]/70">Herbal Glow</p>
              <p className="mt-1 text-sm font-medium text-[#1F1F1F]">Elegant daily radiance</p>
            </div>
          </motion.div>
        </motion.div>
      </Container>
    </section>
  );
}