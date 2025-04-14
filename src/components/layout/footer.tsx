"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/ui/container";
import { DynamicIcon } from "@/components/ui/dynamic-icon";
import { siteConfig } from "@/data/website/site-content";

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-white border-t">
      <Container className="py-10">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 text-sm text-muted-foreground">
          {/* Logo & Contact */}
          <div className="space-y-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/logo.png"
                alt={siteConfig.name}
                width={40}
                height={40}
                className="h-10 w-10 object-contain rounded-md"
                onError={(e) => {
                  e.currentTarget.src = "/logo-fallback.png";
                }}
              />
              <span className="font-semibold text-base text-primary">
                {siteConfig.logoText}
              </span>
            </Link>
            <p>{siteConfig.tagline}</p>
            <p className="text-xs">{siteConfig.runBy}</p>
            <div className="space-y-1 pt-2">
              <a
                href={`tel:${siteConfig.contactPhone.replace(/\s/g, "")}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <DynamicIcon name="Phone" size={16} />
                <span>{siteConfig.contactPhone}</span>
              </a>
              <a
                href={`mailto:${siteConfig.contactEmail}`}
                className="flex items-center gap-2 hover:text-primary transition-colors"
              >
                <DynamicIcon name="Mail" size={16} />
                <span>{siteConfig.contactEmail}</span>
              </a>
            </div>
            <div className="flex gap-2 pt-4">
              {Object.entries(siteConfig.socialLinks).map(([key, url]) => (
                <a
                  key={key}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 bg-gray-100 rounded-full hover:bg-primary/10 hover:text-primary transition-colors"
                  aria-label={key}
                >
                  <DynamicIcon
                    name={(key.charAt(0).toUpperCase() + key.slice(1)) as any}
                    size={16}
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Quick Links</h4>
            <ul className="space-y-2">
              {siteConfig.headerLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Counseling Areas */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Counseling Areas</h4>
            <ul className="space-y-2">
              {[
                "JoSAA + CSAB",
                "JAC Delhi",
                "UPSEE",
                "GGSIPU",
                "Comedk",
                "MHT CET",
                "MP DTE",
              ].map((area) => (
                <li key={area}>{area}</li>
              ))}
            </ul>
          </div>

          {/* Support Hours */}
          <div className="space-y-3">
            <h4 className="font-medium text-foreground">Support Hours</h4>
            <ul className="space-y-1">
              <li className="flex justify-between">
                <span>Mon - Fri:</span>
                <span>9:00 AM - 8:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday:</span>
                <span>10:00 AM - 6:00 PM</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday:</span>
                <span>Closed</span>
              </li>
            </ul>

            <div className="pt-4 space-y-1">
              <p>🎓 50% off for JNV or BPL students</p>
              <p>🎁 20% off with referral code</p>
            </div>
          </div>
        </div>
      </Container>

      <div className="border-t py-6 text-sm text-muted-foreground">
        <Container className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p>
            © {currentYear} {siteConfig.name}. All rights reserved.
          </p>
          <div className="flex gap-4">
            <Link
              href="/privacy-policy"
              className="hover:text-primary transition-colors"
            >
              Privacy Policy
            </Link>
            <Link
              href="/terms-of-service"
              className="hover:text-primary transition-colors"
            >
              Terms of Service
            </Link>
          </div>
        </Container>
      </div>
    </footer>
  );
};
