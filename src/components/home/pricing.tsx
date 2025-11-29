"use client";
import React from "react";
import { motion } from "framer-motion";
import { Check, CheckCircle } from "lucide-react";
import { Button } from "../ui/button";
import { SectionBadge } from "../ui/SectionBadge";

const pricingPlans = [
  {
    name: "Basic Plan",
    price: "$15",
    features: ["List and calendar views", "5 active projects", "Up to 3 team members", "Basic reporting and analytics", "Email support"],
    isFeatured: false,
  },
  {
    name: "Pro Plan",
    price: "$35",
    features: ["All Basic Plan features", "List, calendar, and Kanban views", "15 active projects", "Priority email and chat support", "Integrations with third-party tools"],
    isFeatured: true,
  },
  {
    name: "Enterprise Plan",
    price: "$50",
    features: ["All Pro Plan features", "Unlimited active projects", "Unlimited team members", "Custom workflows", "AI-powered task automation"],
    isFeatured: false,
  },
];

export const Pricing = () => {
  return (
    <section
      id="pricing"
      className="py-24"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <SectionBadge>Pricing</SectionBadge>
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Flexible pricing for teams of all sizes</h2>
          <p className="text-gray-400 max-w-xl mx-auto">Choose a plan that fits your needs and budget. All plans come with a 7-day free trial.</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {pricingPlans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
              className={`bg-[#131620] border rounded-2xl p-8 flex flex-col ${plan.isFeatured ? "border-purple-500/50 shadow-[0_0_30px_rgba(168,85,247,0.3)]" : "border-white/10"}`}
            >
              <div className="grow">
                <h3 className="text-lg font-semibold text-white/70">{plan.name}</h3>
                <p className="text-4xl font-bold my-4 border-b pb-5 border-purple/30">
                  <span className="text-transparent bg-clip-text bg-linear-to-r from-purple-400 to-pink-500">{plan.price}</span>
                  <span className="text-base font-normal text-white/50">/month</span>
                </p>
                <ul className="space-y-4 mt-8">
                  {plan.features.map((feature, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-white/90"
                    >
                      <CheckCircle className="w-5 h-5 text-purple-400" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="mt-10">
                <Button
                  variant={plan.isFeatured ? "glow" : "outline"}
                  className="w-full rounded-full h-12"
                >
                  Get Started
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
