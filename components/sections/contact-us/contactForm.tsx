"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: "",
    companyName: "",
    email: "",
    phone: "",
    helpTopic: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement
    >,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Insert the form submission logic here
    console.log("Form submitted:", formData);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-200 p-10 bg-(--secondary-blue)"
    >
      <form onSubmit={handleSubmit} className="flex flex-col gap-6">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="text-white text-sm font-medium tracking-wide"
            >
              Full Name
            </label>
            <input
              type="text"
              id="fullName"
              name="fullName"
              placeholder="John Doe"
              value={formData.fullName}
              onChange={handleChange}
              className="w-full bg-(--primary-blue) text-white placeholder-white placeholder:text-sm px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="companyName"
              className="text-white text-sm font-medium tracking-wide"
            >
              Company Name
            </label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              placeholder="Acme Inc."
              value={formData.companyName}
              onChange={handleChange}
              className="w-full bg-(--primary-blue) text-white placeholder-white placeholder:text-sm px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-white text-sm font-medium tracking-wide"
            >
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              placeholder="john@example.com"
              value={formData.email}
              onChange={handleChange}
              className="w-full bg-(--primary-blue) text-white placeholder-white placeholder:text-sm px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors"
              required
            />
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-white text-sm font-medium tracking-wide"
            >
              Phone Number
            </label>
            <input
              type="tel"
              id="phone"
              name="phone"
              placeholder="+1 (555) 123-4567"
              value={formData.phone}
              onChange={handleChange}
              className="w-full bg-(--primary-blue) text-white placeholder-white placeholder:text-sm px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors"
            />
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="helpTopic"
            className="text-white text-sm font-medium tracking-wide"
          >
            What would you like help with?
          </label>
          <div className="relative">
            <select
              id="helpTopic"
              name="helpTopic"
              value={formData.helpTopic}
              onChange={handleChange}
              className="w-full appearance-none bg-(--primary-blue) text-white text-sm font-medium px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors cursor-pointer"
              required
            >
              <option value="" disabled hidden>
                Select an option
              </option>
              <option value="hr-software">HR Software Inquiry</option>
              <option value="payroll">Payroll Management</option>
              <option value="support">Technical Support</option>
            </select>

            <div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-white">
              <IoChevronDown className="" />
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-white text-sm font-medium tracking-wide"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={4}
            placeholder="Tell us more about what you're looking for..."
            value={formData.message}
            onChange={handleChange}
            className="w-full bg-(--primary-blue) text-white placeholder-white placeholder:text-sm px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors resize-none"
            required
          />
        </div>

        <motion.button
          whileHover={{ scale: 1.005 }}
          whileTap={{ scale: 0.995 }}
          type="submit"
          className="mt-2 w-full flex items-center justify-center gap-2.5 bg-(--brand-red) hover:bg-rose-800 text-white py-3.5 text-sm font-medium transition-colors cursor-pointer"
        >
          <LuSend />
          Send Message
        </motion.button>
      </form>
    </motion.div>
  );
}
