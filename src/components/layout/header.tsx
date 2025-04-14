"use client";

import * as React from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence, useSpring } from "framer-motion";
import { siteConfig } from "@/data/website/site-content";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "@/components/ui/container";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { coursesData } from "@/data/courses/courses-data";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";

export const Header = () => {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [hoveredItem, setHoveredItem] = React.useState<string | null>(null);
  const pathname = usePathname();

  React.useEffect(() => {
    const onScroll = () => setIsScrolled(window.scrollY > 10);
    window.addEventListener("scroll", onScroll);
    // Check initial scroll position
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const headerVariants = {
    initial: {
      height: "5rem",
      boxShadow: "none",
      backgroundColor: "rgba(255, 255, 255, 0.5)",
    },
    scrolled: {
      backgroundColor: "rgba(255, 255, 255, 0.85)",
      height: "4rem",
      boxShadow: "0 2px 10px rgba(0,0,0,0.03), 0 1px 4px rgba(0,0,0,0.04)",
    },
  };

  return (
    <motion.header
      className="fixed inset-x-0 top-0 z-50 transition-all backdrop-blur-md border-b border-border/50"
      variants={headerVariants}
      initial="initial"
      animate={isScrolled ? "scrolled" : "initial"}
    >
      <Container className="flex h-full items-center justify-between px-4">
        <motion.div
          initial={{ opacity: 0, x: -10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3 }}
        >
          <Link href="/" className="flex items-center gap-2">
            <Image
              src="/logo.png"
              alt={siteConfig.name}
              width={36}
              height={36}
              className="object-contain rounded-md"
              onError={(e) => {
                e.currentTarget.src = "/logo-fallback.png";
              }}
            />
            <span className="font-semibold text-lg bg-gradient-to-r from-primary-600 to-secondary-500 bg-clip-text text-transparent">
              {siteConfig.logoText}
            </span>
          </Link>
        </motion.div>

        {/* Desktop Navigation */}
        <motion.div
          className="flex items-center justify-center gap-2"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
        >
          <NavigationMenu className="hidden md:flex">
            <NavigationMenuList className="flex items-center gap-1">
              <NavigationMenuItem>
                <NavigationMenuTrigger className="text-sm font-medium text-muted-foreground hover:text-primary transition-colors group">
                  <span className="flex items-center gap-1">
                    <DynamicIcon
                      name="GraduationCap"
                      size={16}
                      className="opacity-70 group-hover:text-primary transition-colors"
                    />
                    <span>Courses</span>
                  </span>
                </NavigationMenuTrigger>
                <NavigationMenuContent>
                  <div className="p-4">
                    <div className="grid w-[400px] gap-3 p-2 md:w-[500px] md:grid-cols-2 lg:w-[600px]">
                      <div className="col-span-full mb-2 pb-2 border-b">
                        <h3 className="text-sm font-medium mb-1 text-primary">
                          Explore Our Courses
                        </h3>
                        <p className="text-xs text-muted-foreground">
                          Comprehensive programs designed to help you excel in
                          competitive exams
                        </p>
                      </div>
                      {coursesData.map((course, index) => (
                        <motion.div
                          key={course.slug}
                          initial={{ opacity: 0, y: 10 }}
                          animate={{ opacity: 1, y: 0 }}
                          transition={{
                            type: "spring",
                            stiffness: 300,
                            damping: 10,
                            delay: index * 0.05 + 0.1,
                          }}
                          whileHover={{ scale: 1.02, y: -2 }}
                        >
                          <NavigationMenuLink asChild>
                            <Link
                              href={`/courses/${course.slug}`}
                              className="flex flex-col h-full select-none rounded-md p-3 no-underline outline-none transition-all hover:bg-primary/5 focus:bg-primary/5 border border-transparent hover:border-primary/10"
                            >
                              <div className="flex items-center gap-2 mb-2">
                                <div className="w-8 h-8 rounded-full bg-gradient-to-br from-primary-100 to-secondary-100 flex items-center justify-center">
                                  <DynamicIcon
                                    name={"Book"}
                                    size={16}
                                    className="text-primary"
                                  />
                                </div>
                                <div className="text-sm font-medium leading-none text-primary">
                                  {course.name}
                                </div>
                              </div>
                              <p className="line-clamp-2 text-xs leading-snug text-muted-foreground">
                                {course.shortDescription}
                              </p>
                            </Link>
                          </NavigationMenuLink>
                        </motion.div>
                      ))}
                      <div className="col-span-full mt-2 pt-2 border-t">
                        <Link
                          href="/courses"
                          className="flex items-center justify-between text-sm text-primary hover:underline"
                        >
                          <span>View all courses</span>
                          <DynamicIcon name="ArrowRight" size={14} />
                        </Link>
                      </div>
                    </div>
                  </div>
                </NavigationMenuContent>
              </NavigationMenuItem>
            </NavigationMenuList>
          </NavigationMenu>
          <Button
            size={"sm"}
            className="text-xs bg-primary/10 text-foreground hover:text-primary-foreground hover:opacity-90 hover:shadow-md transition-all"
            asChild
          >
            <Link href="/register">Register Now</Link>
          </Button>
        </motion.div>

        {/* Contact Info (Desktop) */}
        <motion.div
          className="hidden md:flex items-center gap-2 text-sm text-primary"
          initial={{ opacity: 0, x: 10 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <DynamicIcon name="Phone" size={18} />
          <a
            href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
            className="hover:underline"
          >
            {siteConfig.contactPhone}
          </a>
        </motion.div>

        {/* Mobile Menu */}
        <Sheet>
          <SheetTrigger asChild>
            <Button
              variant="ghost"
              size="icon"
              className="md:hidden"
              aria-label="Toggle menu"
            >
              <DynamicIcon name="Menu" size={22} />
            </Button>
          </SheetTrigger>
          <SheetContent side="top" className="pt-16">
            <nav className="flex flex-col gap-3">
              <div key="courses-menu" className="flex flex-col">
                <div className="text-base font-medium rounded-md px-4 py-2 bg-primary/5 text-primary mb-1">
                  Courses
                </div>
                <div className="pl-4 flex flex-col gap-1 border-l border-primary/20 ml-4">
                  {coursesData.map((course) => (
                    <Link
                      key={course.slug}
                      href={`/courses/${course.slug}`}
                      className="text-sm text-muted-foreground hover:text-primary py-1 transition-colors"
                    >
                      {course.name}
                    </Link>
                  ))}
                </div>
              </div>
            </nav>

            {/* Mobile Contact Info */}
            <div className="mt-6 border-t pt-4 text-sm text-primary flex items-center gap-2">
              <DynamicIcon name="Phone" size={18} />
              <a
                href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                className="hover:underline"
              >
                {siteConfig.contactPhone}
              </a>
            </div>
          </SheetContent>
        </Sheet>
      </Container>
    </motion.header>
  );
};
