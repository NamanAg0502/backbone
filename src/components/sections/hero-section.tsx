"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { Button } from "@/components/ui/button";
import { homeContent } from "@/data/website/site-content";
import { prefersReducedMotion } from "@/lib/utils";
import Link from "next/link";

export const HeroSection: React.FC = () => {
  const { hero } = homeContent;
  const reduceMotion = prefersReducedMotion();

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.5 },
    },
  };

  return (
    <section className="relative py-20 pt-32 md:pt-40 md:pb-28 overflow-hidden">
      {/* Background gradients */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50/50 opacity-70" />
        <div className="absolute inset-0 bg-grid-small bg-primary-100/40" />
      </div>

      {/* Blur blobs */}
      <div className="absolute top-1/4 right-0 -mr-40 w-80 h-80 bg-secondary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/4 left-0 -ml-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />

      <Container className="relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 items-center gap-12">
          {/* Left: Content */}
          <motion.div
            className="max-w-xl"
            variants={reduceMotion ? {} : containerVariants}
            initial="hidden"
            animate="visible"
          >
            {/* Discount badge */}
            {hero.discount && (
              <motion.div
                variants={reduceMotion ? {} : itemVariants}
                className="mb-8 inline-flex items-center gap-2 rounded-full bg-secondary px-4 py-2 text-sm font-medium text-secondary-800"
              >
                <span className="flex h-6 w-6 items-center justify-center rounded-full bg-secondary">
                  %
                </span>
                <span>
                  {hero.referralText} - <strong>{hero.discount}</strong>
                </span>
              </motion.div>
            )}

            {/* Heading */}
            <motion.h1
              variants={reduceMotion ? {} : itemVariants}
              className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight leading-tight"
            >
              <span className="bg-gradient-to-r from-primary/80 to-primary/90 bg-clip-text text-transparent">
                {hero.title}
              </span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              variants={reduceMotion ? {} : itemVariants}
              className="mt-4 text-xl text-gray-600"
            >
              {hero.subtitle}
            </motion.p>

            <motion.p
              variants={reduceMotion ? {} : itemVariants}
              className="mt-4 text-gray-600"
            >
              {hero.description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              variants={reduceMotion ? {} : itemVariants}
              className="mt-8 flex flex-col sm:flex-row gap-4"
            >
              <Button asChild size="lg" variant="default">
                <Link href={hero.ctaLink}>{hero.ctaText}</Link>
              </Button>

              {hero.secondaryCtaText && (
                <Button asChild size="lg" variant="outline">
                  {hero.secondaryCtaLink && (
                    <Link href={hero.secondaryCtaLink}>
                      {hero.secondaryCtaText}
                    </Link>
                  )}
                </Button>
              )}
            </motion.div>
          </motion.div>

          {/* Right: Image Card */}
          <motion.div
            initial={reduceMotion ? {} : { opacity: 0, scale: 0.9 }}
            animate={reduceMotion ? {} : { opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative w-full max-w-md">
              <div className="aspect-square md:aspect-[4/3] rounded-xl bg-gradient-to-r from-primary-500 to-secondary-500 p-1 shadow-2xl rotate-1">
                <div className="h-full w-full rounded-lg bg-white p-4 flex items-center justify-center">
                  <div className="relative w-full h-full rounded-md overflow-hidden bg-gradient-to-b from-gray-100 to-white">
                    <Image
                      src="/hero-student.jpg"
                      alt="JEE Counseling"
                      fill
                      className="object-cover"
                    />
                  </div>
                </div>
              </div>

              {/* Mini Cards */}
              <div className="absolute -right-6 -top-6 h-24 w-24 rounded-xl bg-primary-100 p-1 shadow-lg -rotate-3">
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-white text-center">
                  <div>
                    <div className="text-2xl font-bold text-primary-600">
                      IIT
                    </div>
                    <div className="text-xs text-gray-500">Mentors</div>
                  </div>
                </div>
              </div>

              <div className="absolute -left-6 -bottom-6 h-24 w-24 rounded-xl bg-secondary-100 p-1 shadow-lg rotate-6">
                <div className="flex h-full w-full items-center justify-center rounded-lg bg-white text-center">
                  <div>
                    <div className="text-2xl font-bold text-secondary-600">
                      50%
                    </div>
                    <div className="text-xs text-gray-500">JNV Students</div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </Container>
    </section>
  );
};
