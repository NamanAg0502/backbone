"use client";

import React from "react";
import { motion } from "framer-motion";
import { FaCheckCircle } from "react-icons/fa";
import { Badge } from "@/components/ui/badge";
import { coverageAreas } from "@/data/static";
import { prefersReducedMotion } from "@/lib/utils";
import { coursesData } from "@/data/courses/courses-data";
import Link from "next/link";

export const CoverageAreas: React.FC = () => {
  const shouldReduceMotion = prefersReducedMotion();
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 10, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { type: "spring", stiffness: 100 },
    },
  };

  return (
    <section className="py-20">
      <div className="text-center mb-16">
        <motion.div
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          className="inline-block rounded-lg bg-primary-100 px-3 py-1 text-sm font-medium text-primary-800 mb-3 uppercase"
        >
          Extensive Coverage
        </motion.div>
        <motion.h2
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 }}
          viewport={{ once: true }}
          className="text-3xl md:text-4xl font-bold text-gray-900"
        >
          Comprehensive Counseling Coverage
        </motion.h2>
        <motion.p
          initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
          whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          viewport={{ once: true }}
          className="mt-4 max-w-2xl mx-auto text-gray-600"
        >
          We provide expert guidance for all major engineering entrance exams
          and counseling processes
        </motion.p>
      </div>

      <motion.div
        className="max-w-4xl mx-auto mt-12 grid grid-cols-1 md:grid-cols-2 gap-6"
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-50px" }}
      >
        {coursesData.map((area) => (
          <Link key={area.id} href={`/courses/${area.slug}`}>
            <motion.div
              variants={itemVariants}
              className="flex items-start gap-4 bg-white dark:bg-gray-700 p-4 rounded-lg shadow-sm"
            >
              <div className="text-primary-500 dark:text-primary-400 mt-1">
                <FaCheckCircle className="h-5 w-5" />
              </div>
              <div>
                <h3 className="font-medium text-gray-900 dark:text-white mb-1">
                  {area.name}
                </h3>
                <p className="text-sm text-gray-600 dark:text-gray-300">
                  {area.shortDescription}
                </p>
              </div>
            </motion.div>
          </Link>
        ))}
      </motion.div>
    </section>
  );
};
