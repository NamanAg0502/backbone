"use client";

import React, { useEffect, useState, FC } from "react";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { DynamicIcon } from "@/components/ui/dynamic-icon";

const RazorpayForm: FC = () => {
  const [mounted, setMounted] = useState<boolean>(false);
  const [loading, setLoading] = useState<boolean>(false);
  const [formSubmitted, setFormSubmitted] = useState<boolean>(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (mounted) {
      const script = document.createElement("script");
      const form = document.getElementById("donateForm") as HTMLFormElement;

      script.setAttribute(
        "src",
        "https://checkout.razorpay.com/v1/payment-button.js"
      );
      script.setAttribute("data-payment_button_id", "pl_O021xA8tDEiXlz");

      // Add event listeners to detect form submission
      script.onload = () => {
        setTimeout(() => {
          const paymentButton = form.querySelector("button");
          if (paymentButton) {
            // Style the Razorpay button
            paymentButton.classList.add(
              "w-full",
              "py-2",
              "rounded-lg",
              "font-medium",
              "flex",
              "items-center",
              "justify-center",
              "gap-2",
              "bg-primary",
              "text-white",
              "hover:bg-primary/90",
              "transition-colors",
              "duration-300"
            );

            // Add an icon to the button
            const buttonText = paymentButton.textContent || "Pay Now";
            paymentButton.innerHTML = `
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-credit-card"><rect width="20" height="14" x="2" y="5" rx="2"/><line x1="2" x2="22" y1="10" y2="10"/></svg>
              ${buttonText}
            `;

            // Add click event
            paymentButton.addEventListener("click", () => {
              setLoading(true);
              // This is just for UI feedback, the actual redirection will be handled by Razorpay
              setTimeout(() => {
                setFormSubmitted(true);
              }, 1500);
            });
          }
        }, 1000); // Wait for Razorpay to render their button
      };

      if (form) {
        form.appendChild(script);
      }
    }
  }, [mounted]);

  // Show a loading state while razorpay loads
  if (!mounted) {
    return (
      <div className="flex flex-col items-center justify-center p-6 border border-dashed border-gray-200 rounded-lg bg-gray-50">
        <div className="animate-spin h-8 w-8 border-4 border-primary/20 border-t-primary rounded-full mb-2"></div>
        <p className="text-sm text-gray-500">Loading payment form...</p>
      </div>
    );
  }

  // Show submitted state
  if (formSubmitted) {
    return (
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="flex flex-col items-center justify-center p-6"
      >
        <div className="w-16 h-16 rounded-full bg-green-100 flex items-center justify-center mb-3">
          <DynamicIcon name="Checkbox" size={32} className="text-green-600" />
        </div>
        <h3 className="text-lg font-medium text-gray-900 mb-1">
          Payment Processing
        </h3>
        <p className="text-sm text-gray-500 text-center mb-4">
          Please complete the payment process in the Razorpay window. Do not
          close this page.
        </p>
      </motion.div>
    );
  }

  // Show loading state while initiating payment
  if (loading) {
    return (
      <div className="flex flex-col items-center justify-center p-6">
        <div className="animate-spin h-8 w-8 border-4 border-primary/20 border-t-primary rounded-full mb-2"></div>
        <p className="text-sm text-gray-500">Initiating payment...</p>
      </div>
    );
  }

  // Main form with custom button
  return (
    <div className="payment-form-wrapper w-full">
      <form id="donateForm" className="w-fit mx-auto"></form>
      <p className="text-xs text-center text-gray-400 mt-2">
        By clicking "Pay Now", you agree to our terms and conditions
      </p>
    </div>
  );
};

export default RazorpayForm;
