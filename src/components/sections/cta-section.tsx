"use client";

import React from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { prefersReducedMotion } from "@/lib/utils";
import Link from "next/link";

interface CtaSectionProps {
  title?: string;
  description?: string;
  buttonText?: string;
  buttonLink?: string;
  secondaryButtonText?: string;
  secondaryButtonLink?: string;
}

export const CtaSection: React.FC<CtaSectionProps> = ({
  title = "Ready to Begin Your Journey?",
  description = "Let our expert IITian counselors guide you to the best college and branch choices for your career.",
  buttonText = "Register Now",
  buttonLink = "/register",
  secondaryButtonText = "Learn More",
  secondaryButtonLink = "/services",
}) => {
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section className="py-20 my-10 bg-black rounded-4xl">
      <div className="mx-auto max-w-4xl text-center">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="text-3xl font-bold tracking-tight text-gray-100 sm:text-4xl">
            {title}
          </h2>

          <p className="mt-4 text-lg text-gray-400">{description}</p>

          <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
            <Button asChild size="lg" variant="secondary">
              <Link href={buttonLink}>{buttonText}</Link>
            </Button>

            {secondaryButtonText && (
              <Button asChild size="lg" variant="outline">
                <Link href={secondaryButtonLink}>{secondaryButtonText}</Link>
              </Button>
            )}
          </div>
        </motion.div>
      </div>
    </section>
  );
};
