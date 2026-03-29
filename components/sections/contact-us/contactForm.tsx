"use client";

import { useForm, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { contactFormSchema, type FormFields } from "@/lib/schemas/contact";
import { motion } from "framer-motion";
import { IoChevronDown } from "react-icons/io5";
import { LuSend } from "react-icons/lu";

export default function ContactForm() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    resolver: zodResolver(contactFormSchema),
  });

  const onSubmit: SubmitHandler<FormFields> = async (data) => {
    try {
      console.log("Submitting form:", data);
      const res = await fetch("/api/email", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!res.ok) {
        const errorData = await res.json();
        console.error("Server error:", errorData);
        throw new Error(errorData.error || "Failed to send message");
      }

      const result = await res.json();

      console.log("Success:", result);
      reset();
    } catch (error) {
      console.error("Error:", error);
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="w-full max-w-200 p-10 bg-(--secondary-blue)"
    >
      <form
        className="flex flex-col gap-6"
        noValidate
        onSubmit={handleSubmit(onSubmit)}
      >
        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-6">
          <div className="flex flex-col gap-2">
            <label
              htmlFor="fullName"
              className="text-white text-sm font-medium tracking-wide"
            >
              Full Name
            </label>

            <input
              {...register("fullName")}
              type="text"
              id="fullName"
              placeholder="John Doe"
              className="w-full bg-(--primary-blue) text-white placeholder-white placeholder:text-sm px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors"
            />
            {errors.fullName && (
              <div className="text-[#FF6B6B] text-sm">
                {errors.fullName.message}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="companyName"
              className="text-white text-sm font-medium tracking-wide"
            >
              Company Name
            </label>
            <input
              {...register("companyName")}
              type="text"
              id="companyName"
              placeholder="Acme Inc."
              className="w-full bg-(--primary-blue) text-white placeholder-white placeholder:text-sm px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors"
            />
            {errors.companyName && (
              <div className="text-[#FF6B6B] text-sm">
                {errors.companyName.message}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="email"
              className="text-white text-sm font-medium tracking-wide"
            >
              Email Address
            </label>
            <input
              {...register("email")}
              type="email"
              id="email"
              placeholder="john@example.com"
              className="w-full bg-(--primary-blue) text-white placeholder-white placeholder:text-sm px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors"
            />
            {errors.email && (
              <div className="text-[#FF6B6B] text-sm">
                {errors.email.message}
              </div>
            )}
          </div>

          <div className="flex flex-col gap-2">
            <label
              htmlFor="phone"
              className="text-white text-sm font-medium tracking-wide"
            >
              Phone Number
            </label>
            <input
              {...register("phone")}
              type="tel"
              id="phone"
              placeholder="+1 (555) 123-4567"
              className="w-full bg-(--primary-blue) text-white placeholder-white placeholder:text-sm px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors"
            />
            {errors.phone && (
              <div className="text-[#FF6B6B] text-sm">
                {errors.phone.message}
              </div>
            )}
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
              {...register("helpTopic")}
              defaultValue=""
              id="helpTopic"
              className="w-full appearance-none bg-(--primary-blue) text-white text-sm font-medium px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors cursor-pointer"
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
          {errors.helpTopic && (
            <div className="text-[#FF6B6B] text-sm">
              {errors.helpTopic.message}
            </div>
          )}
        </div>

        <div className="flex flex-col gap-2">
          <label
            htmlFor="message"
            className="text-white text-sm font-medium tracking-wide"
          >
            Message
          </label>
          <textarea
            {...register("message")}
            id="message"
            rows={4}
            placeholder="Tell us more about what you're looking for..."
            className="w-full bg-(--primary-blue) text-white placeholder-white placeholder:text-sm px-4 py-3 outline-none border border-transparent focus:border-white/20 transition-colors resize-none"
          />
          {errors.message && (
            <div className="text-[#FF6B6B] text-sm">
              {errors.message.message}
            </div>
          )}
        </div>

        <motion.button
          whileHover={{ scale: 1.005 }}
          whileTap={{ scale: 0.995 }}
          type="submit"
          disabled={isSubmitting}
          className="mt-2 w-full flex items-center justify-center gap-2.5 bg-(--brand-red) hover:bg-rose-800 text-white py-3.5 text-sm font-medium transition-colors cursor-pointer"
        >
          <LuSend />
          {isSubmitting ? "Sending..." : "Send Message"}
        </motion.button>
      </form>
    </motion.div>
  );
}
