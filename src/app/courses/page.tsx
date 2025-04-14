"use client";

import React from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { coursesData } from "@/data/courses/courses-data";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { siteConfig } from "@/data/website/site-content";
import { Button } from "@/components/ui/button";

export default function CoursesPage() {
  return (
    <div className="bg-background text-foreground min-h-screen flex flex-col px-4 py-20 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-3xl md:text-4xl font-bold mb-4">
            Expert Counseling for Engineering Entrances
          </h1>
          <p className="text-gray-400 max-w-3xl mx-auto">
            Connect with top IITians and NITians for personalized guidance on
            college selection, branch preferences, and admission processes for
            various engineering entrance exams.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {coursesData.map((course, index) => (
            <motion.div
              key={course.id}
              className="bg-gradient-to-br from-background/90 to-background p-6 rounded-xl border border-border hover:border-primary/30 transition-all"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{
                y: -5,
              }}
            >
              <div className="flex justify-between items-start mb-4">
                <h2 className="text-xl font-bold">{course.name}</h2>
                {course.isFeatured && (
                  <span className="bg-primary/10 text-primary text-xs px-2 py-1 rounded-full flex items-center">
                    <DynamicIcon name="Star" size={12} className="mr-1" />
                    Featured
                  </span>
                )}
              </div>

              <p className="text-muted-foreground text-sm mb-6">
                {course.shortDescription}
              </p>

              <div className="space-y-3 mb-6">
                <div className="flex items-center text-muted-foreground text-xs">
                  <DynamicIcon name="Checkbox" size={14} className=" mr-2" />
                  <span>One-on-one counseling sessions</span>
                </div>
                <div className="flex items-center text-muted-foreground text-xs">
                  <DynamicIcon name="Checkbox" size={14} className=" mr-2" />
                  <span>Personalized PDF based on your rank</span>
                </div>
                <div className="flex items-center text-muted-foreground text-xs">
                  <DynamicIcon name="Checkbox" size={14} className=" mr-2" />
                  <span>Unlimited WhatsApp support</span>
                </div>
              </div>

              <Button asChild size="sm" variant="default" className="w-full">
                <Link href={`/courses/${course.slug}`}>View Details</Link>
              </Button>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="mt-16 text-center"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.8, duration: 0.6 }}
        >
          <h3 className="text-xl font-bold mb-4">
            Need Personalized Assistance?
          </h3>
          <p className="text-gray-400 max-w-2xl mx-auto mb-6">
            Our team of expert counselors is ready to help you make the best
            decision for your engineering journey. Contact us for personalized
            guidance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/register">
              <motion.button
                className="px-6 py-3 bg-primary text-white rounded-md font-medium"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                Register for Counseling
              </motion.button>
            </Link>
            <a
              href={`tel:${
                (typeof window !== "undefined" && siteConfig?.contactPhone) ||
                "+91 1234567890"
              }`}
            >
              <motion.button
                className="px-6 py-3 bg-transparent border border-primary/30 text-primary rounded-md font-medium flex items-center justify-center"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
              >
                <DynamicIcon name="Phone" size={16} className="mr-2" />
                Contact Us
              </motion.button>
            </a>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
