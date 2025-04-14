"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Container } from "@/components/ui/container";
import { homeContent } from "@/data/website/site-content";
import { prefersReducedMotion } from "@/lib/utils";

export const AboutSection: React.FC = () => {
  const { about } = homeContent;
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section id="about" className="py-20 bg-white">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Image Side */}
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, x: -30 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="relative flex justify-center"
        >
          <div className="relative w-full">
            <div className="rounded-xl bg-gradient-to-r from-primary-100 to-primary-50 p-2 shadow-xl">
              <div className="aspect-[4/5] relative rounded-lg overflow-hidden">
                <Image
                  src="/about-student.jpg"
                  alt="JEE Counseling"
                  fill
                  className="object-contain grayscale-100"
                />
              </div>
            </div>

            {/* Pattern decoration */}
            <div className="absolute -z-10 inset-0 -m-4 bg-dot-primary-200/50 [mask-image:radial-gradient(ellipse_at_center,white_70%,transparent_100%)]"></div>
          </div>
        </motion.div>

        {/* Content Side */}
        <div className="space-y-6">
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="inline-block rounded-lg bg-secondary-100 px-3 py-1 text-sm font-medium text-secondary-800"
          >
            {about.title}
          </motion.div>

          <motion.h2
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-gray-900"
          >
            {about.intro}
          </motion.h2>

          <div className="space-y-4">
            {about.paragraphs.map((paragraph, index) => (
              <motion.p
                key={index}
                initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
                whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 + index * 0.1 }}
                viewport={{ once: true }}
                className="text-gray-600"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>

          {/* Stats/Features */}
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="grid grid-cols-2 gap-6 mt-8"
          >
            <div className="bg-primary-50 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-primary-600">3+ Years</h3>
              <p className="text-gray-600">Counseling Experience</p>
            </div>
            <div className="bg-secondary-50 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-secondary-600">500+</h3>
              <p className="text-gray-600">Students Guided</p>
            </div>
            <div className="bg-secondary-50 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-secondary-600">100%</h3>
              <p className="text-gray-600">Admission Success</p>
            </div>
            <div className="bg-primary-50 rounded-lg p-4">
              <h3 className="text-2xl font-bold text-primary-600">IITians</h3>
              <p className="text-gray-600">Expert Counselors</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
