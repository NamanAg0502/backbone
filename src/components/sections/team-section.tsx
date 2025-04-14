import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { homeContent } from "@/data/website";
import { prefersReducedMotion } from "@/lib/utils";

export const TeamSection: React.FC = () => {
  const { team } = homeContent;
  const shouldReduceMotion = prefersReducedMotion();

  return (
    <Card>
      <CardHeader>
        <CardTitle>Our Expert Team</CardTitle>
        <CardDescription>
          Meet our team of experienced IITians who will guide you through your
          college selection journey
        </CardDescription>
      </CardHeader>

      <CardContent className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {team.map((member, index) => (
          <motion.div
            key={member.id}
            initial={shouldReduceMotion ? {} : { opacity: 0, y: 20 }}
            whileInView={shouldReduceMotion ? {} : { opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <Card className="h-full">
              <div className="relative">
                <div className="flex justify-center py-6">
                  {/* <div className="relative h-40 w-40 overflow-hidden rounded-full border-4 border-white shadow-md">
                    {member.imageUrl ? (
                      <Image
                        src={member.imageUrl}
                        alt={member.name}
                        fill
                        className="object-cover"
                      />
                    ) : (
                      <div className="h-full w-full bg-gradient-to-br from-primary-200 to-primary-400 flex items-center justify-center text-white text-4xl font-bold">
                        {member.name.charAt(0)}
                      </div>
                    )}
                  </div> */}
                </div>
              </div>

              <CardContent className="text-center">
                <h3 className="text-xl font-bold text-gray-900">
                  {member.name}
                </h3>

                <div className="mt-2 flex flex-wrap justify-center gap-2">
                  {member.tags.map((tag) => (
                    <span
                      key={tag}
                      className="inline-flex items-center rounded-full bg-primary-50 px-2.5 py-0.5 text-xs font-medium text-primary-700"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <ul className="mt-4 space-y-2 text-gray-600">
                  {member.experience.map((exp, i) => (
                    <li key={i} className="flex items-center justify-center">
                      <span className="mr-2">•</span>
                      {exp}
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </motion.div>
        ))}
      </CardContent>
    </Card>
  );
};
