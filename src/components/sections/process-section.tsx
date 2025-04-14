"use client";

import React from "react";
import { motion } from "framer-motion";
import { DynamicIcon, IconType } from "@/components/ui/dynamic-icon";
import { homeContent } from "@/data/website";
import { prefersReducedMotion } from "@/lib/utils";

export const ProcessSection: React.FC = () => {
  const { process, conclusion } = homeContent;
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <section id="process" className="py-20">
      <div className="text-center mb-16">
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          How It Works
        </motion.h2>
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl mx-auto text-muted"
        >
          Our streamlined process ensures you get the guidance you need
        </motion.p>
      </div>

      <div className="max-w-5xl mx-auto">
        <div className="relative">
          {/* Main path line */}
          <div className="absolute left-1/2 top-0 bottom-0 w-1 -translate-x-1/2 bg-primary-100 hidden md:block"></div>

          <div className="space-y-12 relative">
            {process.map((step, index) => {
              const isEven = index % 2 === 0;

              return (
                <motion.div
                  key={step.id}
                  initial={
                    shouldReduceMotion
                      ? {}
                      : { opacity: 0, x: isEven ? -20 : 20 }
                  }
                  whileInView={shouldReduceMotion ? {} : { opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="relative h-full"
                >
                  <div
                    className={`md:flex items-center h-full ${
                      isEven ? "md:flex-row" : "md:flex-row-reverse"
                    }`}
                  >
                    {/* Circle on timeline (only visible on md+) */}
                    <div className="absolute left-1/2 -translate-x-1/2 hidden md:flex h-10 w-10 items-center justify-center rounded-full border-4 border-primary-100 bg-white">
                      <span className="font-bold text-primary-600">
                        {index + 1}
                      </span>
                    </div>

                    {/* Content */}
                    <div
                      className={`md:w-1/2 h-full ${
                        isEven ? "md:pr-12 lg:pr-16" : "md:pl-12 lg:pl-16"
                      }`}
                    >
                      <div className="bg-background p-6 rounded-lg shadow-md hover:shadow-sm transition-shadow border border-border">
                        <div className="flex items-start">
                          {/* Icon and step number on mobile */}
                          <div className="mr-4 flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary md:hidden">
                            <span className="font-bold text-primary/60">
                              {index + 1}
                            </span>
                          </div>

                          <div>
                            <h3 className="font-bold text-lg text-foreground mb-1">
                              {step.title}
                            </h3>
                            <p className="text-muted-foreground">
                              {step.description}
                            </p>
                          </div>

                          {/* Step icon - visible on tablets and up */}
                          {step.icon && (
                            <div className="ml-auto hidden md:flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary-50">
                              <DynamicIcon
                                name={step.icon as IconType}
                                className="h-6 w-6 text-primary"
                              />
                            </div>
                          )}
                        </div>
                      </div>
                    </div>

                    {/* Empty div for layout on md+ */}
                    <div className="md:w-1/2 h-full"></div>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Conclusion */}
        {conclusion && (
          <motion.div
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="mt-16 text-center"
          >
            <p className="mx-auto max-w-3xl text-lg font-medium text-muted-foreground italic">
              {conclusion}
            </p>
          </motion.div>
        )}
      </div>
    </section>
  );
};
