"use client";
import React from "react";
import { notFound } from "next/navigation";
import CourseTemplate from "@/app/components/CourseTemplate";
import { coursesData } from "@/data/courses/courses-data";

export default function CoursePage({
  params: paramsPromise,
}: {
  params: Promise<{ slug: string }>;
}) {
  const params = React.use(paramsPromise); // unwrap the promise using React.use
  const { slug } = params;
  const courseData = coursesData.find((course) => course.slug === slug);

  if (!courseData) {
    return notFound();
  }

  return <CourseTemplate course={courseData} />;
}
