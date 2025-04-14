"use client";

import React from "react";
import { motion } from "framer-motion";
import RazorpayForm from "./RazorpayForm";
import { CourseData } from "@/data/courses/courses-data";
import { Container } from "@/components/ui/container";

interface CourseTemplateProps {
  course: CourseData;
}

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

const CourseTemplate: React.FC<CourseTemplateProps> = ({ course }) => {
  return (
    <div className="bg-background min-h-screen flex flex-col justify-center py-12 px-4 sm:px-6 lg:px-8">
      <Container>
        <motion.div
          className="bg-gradient-to-b from-background to-background/90 shadow-sm overflow-hidden sm:rounded-xl"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <div className="px-4 py-5 sm:px-6 mt-12">
            <motion.h3
              className="text-2xl font-bold leading-6 text-center mb-5"
              {...fadeIn}
              transition={{ delay: 0.1, duration: 0.5 }}
            >
              {course.name}
            </motion.h3>

            <motion.div
              className="mt-4 max-w-4xl mx-auto text-sm text-left"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2, duration: 0.7 }}
            >
              {course.fullDescription.map((paragraph, index) => (
                <React.Fragment key={index}>
                  <p className="mb-2">{paragraph}</p>
                  {index < course.fullDescription.length - 1 &&
                    index % 3 === 2 && <br />}
                </React.Fragment>
              ))}

              {course.specializedContent && (
                <motion.div
                  className="mt-4 text-sm border-l-2 border-border pl-4"
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4, duration: 0.5 }}
                >
                  {course.specializedContent.map((paragraph, index) => (
                    <p key={index} className="mb-2 text-muted-foreground">
                      {paragraph}
                    </p>
                  ))}
                </motion.div>
              )}
            </motion.div>
          </div>

          <motion.div
            className="px-4 py-8 sm:px-6 flex flex-col items-center"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.5 }}
          >
            <motion.div
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <RazorpayForm />
            </motion.div>

            <motion.p
              className="mt-10 max-w-2xl text-sm text-muted-foreground text-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.5 }}
            >
              Our team will contact you within 12 hours. Wish you all the best
              in this exciting phase of your academic journey! Unlock benefits:
              Connect with experienced IITians & NITians for personalized
              guidance. Enjoy unlimited WhatsApp support. Sign up now & embark
              on your academic journey confidently!
            </motion.p>
          </motion.div>
        </motion.div>
      </Container>
    </div>
  );
};

export default CourseTemplate;
