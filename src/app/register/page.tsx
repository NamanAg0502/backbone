"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import RazorpayForm from "@/app/components/RazorpayForm";
import { DynamicIcon, IconType } from "@/components/ui/dynamic-icon";
import { Badge } from "@/components/ui/badge";
import { Container } from "@/components/ui/container";

const features = [
  {
    icon: "LightBulb",
    title: "Expert Guidance",
    description:
      "Get personalized counseling from JEE toppers and experienced mentors",
  },
  {
    icon: "ChartBar",
    title: "Performance Analytics",
    description:
      "Detailed analytics to track your progress and identify improvement areas",
  },
  {
    icon: "Book",
    title: "Curated Resources",
    description: "Access to premium study materials and practice questions",
  },
  {
    icon: "Map",
    title: "College Roadmap",
    description:
      "Comprehensive guidance on college selection and admission process",
  },
];

const testimonials = [
  {
    name: "Rahul Sharma",
    college: "IIT Bombay",
    testimonial:
      "The counseling program helped me understand exactly what I needed to focus on. Couldn't have made it to IIT Bombay without this guidance!",
    rank: "AIR 145",
  },
  {
    name: "Priya Patel",
    college: "IIT Delhi",
    testimonial:
      "The mentors were always available to clear my doubts. Their strategic approach to JEE preparation was game-changing.",
    rank: "AIR 237",
  },
];

export default function RegisterPage() {
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 100,
      },
    },
  };

  return (
    <main className="min-h-screen relative overflow-hidden">
      {/* Background gradients and patterns */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute inset-0 bg-gradient-to-br from-primary-50 via-white to-secondary-50/50 opacity-70" />
        <div className="absolute inset-0 bg-grid-small bg-primary-100/40" />
      </div>
      
      {/* Blur blobs */}
      <div className="absolute top-1/3 right-0 -mr-40 w-80 h-80 bg-secondary-200/30 rounded-full blur-3xl" />
      <div className="absolute bottom-1/3 left-0 -ml-40 w-80 h-80 bg-primary-200/30 rounded-full blur-3xl" />
      <Container className="py-20">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="relative z-10"
        >
          <CardHeader className="text-center">
            <Badge
              variant="outline"
              className="mb-4 py-1 px-4 text-sm bg-gradient-to-r from-primary-100 to-secondary-100 border-0 w-fit mx-auto shadow-sm"
            >
              <span className="bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent font-medium">Limited Time Offer</span>
            </Badge>
            <CardTitle className="text-4xl sm:text-5xl font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              JEE Counseling Program
            </CardTitle>
            <CardDescription className="max-w-2xl mx-auto text-lg">
              Take the first step towards your dream college. Our expert-led
              counseling program provides personalized guidance for JEE
              aspirants.
            </CardDescription>
          </CardHeader>
        </motion.div>

        <div className="mt-16 grid grid-cols-1 lg:grid-cols-5 gap-8">
          {/* Features Card - 3 columns */}
          <motion.div
            className="lg:col-span-3 space-y-8"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
          >
            <motion.h3
              className="text-2xl font-semibold text-gray-800"
              variants={itemVariants}
            >
              What You'll Get
            </motion.h3>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  className="bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md hover:bg-white transition-all duration-300"
                  whileHover={{ y: -3 }}
                >
                  <div className="flex items-center mb-4">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center mr-3">
                      <DynamicIcon
                        name={feature.icon as IconType}
                        size={20}
                        className="text-primary"
                      />
                    </div>
                    <h4 className="font-medium text-gray-900">
                      {feature.title}
                    </h4>
                  </div>
                  <p className="text-gray-600 text-sm">{feature.description}</p>
                </motion.div>
              ))}
            </div>

            <motion.div variants={itemVariants} className="mt-8">
              <h3 className="text-2xl font-semibold text-gray-800 mb-4">
                Success Stories
              </h3>

              <div className="relative bg-white/80 backdrop-blur-sm p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-all duration-300">
                <div className="absolute top-0 right-0 -mt-3 -mr-3">
                  <Badge className="bg-gradient-to-r from-primary-600 to-secondary-500 text-white text-xs shadow-md">
                    {testimonials[activeTestimonial].rank}
                  </Badge>
                </div>
                <motion.p 
                  key={activeTestimonial}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.3 }}
                  className="text-gray-600 italic mb-4"
                >
                  "{testimonials[activeTestimonial].testimonial}"
                </motion.p>
                <div className="flex items-center justify-between">
                  <motion.div
                    key={`${activeTestimonial}-info`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    exit={{ opacity: 0, x: 10 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="font-medium bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
                      {testimonials[activeTestimonial].name}
                    </p>
                    <p className="text-sm text-gray-500">
                      {testimonials[activeTestimonial].college}
                    </p>
                  </motion.div>
                  <div className="flex gap-2">
                    {testimonials.map((_, index) => (
                      <button
                        key={index}
                        className={`h-2 w-2 rounded-full ${
                          index === activeTestimonial
                            ? "bg-primary"
                            : "bg-gray-300"
                        }`}
                        onClick={() => setActiveTestimonial(index)}
                        aria-label={`View testimonial ${index + 1}`}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>

          {/* Registration Card - 2 columns */}
          <motion.div
            className="lg:col-span-2"
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <Card className="sticky top-24 shadow-lg border-primary/10 overflow-hidden backdrop-blur-sm bg-white/80">
              <div className="absolute top-0 right-0 left-0 h-2 bg-gradient-to-r from-primary-600 to-secondary-500" />
              <CardHeader className="pb-4">
                <CardTitle className="text-xl text-center">
                  Register Now
                </CardTitle>
                <CardDescription className="text-center">
                  Complete your registration to start your journey
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-4 mb-6">
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 flex items-center justify-center">
                      <DynamicIcon name="Check" size={12} className="text-white" />
                    </div>
                    <span>One-on-one counseling sessions</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 flex items-center justify-center">
                      <DynamicIcon name="Check" size={12} className="text-white" />
                    </div>
                    <span>Personalized study plan</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 flex items-center justify-center">
                      <DynamicIcon name="Check" size={12} className="text-white" />
                    </div>
                    <span>Mock test analysis</span>
                  </div>
                  <div className="flex items-center gap-2 text-sm">
                    <div className="flex-shrink-0 h-5 w-5 rounded-full bg-gradient-to-r from-primary-600 to-secondary-500 flex items-center justify-center">
                      <DynamicIcon name="Check" size={12} className="text-white" />
                    </div>
                    <span>College selection guidance</span>
                  </div>
                </div>

                <div className="py-2 px-4 bg-gradient-to-r from-primary-100/50 to-secondary-100/50 rounded-lg mb-6">
                  <div className="flex justify-between items-center">
                    <span className="text-sm font-medium">Program Fee</span>
                    <div className="text-right">
                      <span className="text-sm line-through text-gray-500">
                        ₹9,999
                      </span>
                      <span className="text-lg font-bold bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent ml-2">
                        ₹7,999
                      </span>
                    </div>
                  </div>
                  <div className="text-xs text-gray-500 mt-1">
                    20% limited time discount
                  </div>
                </div>

                <RazorpayForm />
              </CardContent>
              <CardFooter className="flex flex-col text-center border-t pt-4 text-xs text-gray-500">
                <p>Secure payment powered by Razorpay</p>
                <p className="mt-1 flex items-center justify-center gap-1">
                  <DynamicIcon name="Lock" size={12} />
                  256-bit encryption for all transactions
                </p>
              </CardFooter>
            </Card>
          </motion.div>
        </div>
      </Container>
    </main>
  );
}
