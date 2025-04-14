"use client";

import React from "react";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { homeContent } from "@/data/website/site-content";
import { prefersReducedMotion } from "@/lib/utils";
import { Container } from "../ui/container";

export const FeaturesSection: React.FC = () => {
  const { features } = homeContent;
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section id="features" className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 mb-3"
        >
          WHY CHOOSE US
        </motion.div>
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Our Unique Advantages
        </motion.h2>
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl mx-auto text-gray-600"
        >
          What sets our counseling program apart from others and ensures you get
          the best guidance for your future.
        </motion.p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {features.map((feature, index) => (
          <motion.div
            key={feature.id}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 30 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-shadow border border-gray-100 group"
          >
            <div className="relative mb-6">
              {/* Icon Background */}
              <div className="w-14 h-14 rounded-lg bg-primary-100 flex items-center justify-center group-hover:bg-primary-200 transition-colors">
                {feature.icon && (
                  <DynamicIcon
                    name={feature.icon as any}
                    size={28}
                    className="text-primary-600"
                  />
                )}
              </div>
              {/* Decorative element */}
              <div className="absolute -z-10 inset-0 w-14 h-14 rounded-lg bg-primary-500/20 blur-[2px] group-hover:blur-[3px] transition-all"></div>
            </div>

            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              {feature.title}
            </h3>
            <p className="text-gray-600">{feature.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
