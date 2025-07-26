"use client";

import type React from "react";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

export function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    address: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log("Form submitted:", formData);
  };

  return (
    <section className="py-20 bg-[#140921] relative -mt-32">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-[#26123C] rounded-[35px] p-12">
            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Name and Phone Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="text"
                    name="name"
                    placeholder="name"
                    value={formData.name}
                    onChange={handleChange}
                    className="bg-transparent border-0 border-b border-white/20 rounded-none text-white placeholder:text-white/70 placeholder:capitalize focus:border-white/40 h-12 px-0"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="tel"
                    name="phone"
                    placeholder="phone number"
                    value={formData.phone}
                    onChange={handleChange}
                    className="bg-transparent border-0 border-b border-white/20 rounded-none text-white placeholder:text-white/70 placeholder:capitalize focus:border-white/40 h-12 px-0"
                    required
                  />
                </div>
              </div>

              {/* Email and Address Row */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <Input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleChange}
                    className="bg-transparent border-0 border-b border-white/20 rounded-none text-white placeholder:text-white/70 placeholder:capitalize focus:border-white/40 h-12 px-0"
                    required
                  />
                </div>
                <div>
                  <Input
                    type="text"
                    name="address"
                    placeholder="address"
                    value={formData.address}
                    onChange={handleChange}
                    className="bg-transparent border-0 border-b border-white/20 rounded-none text-white placeholder:text-white/70 placeholder:capitalize focus:border-white/40 h-12 px-0"
                  />
                </div>
              </div>

              {/* Message */}
              <div>
                <Textarea
                  name="message"
                  placeholder="Message"
                  value={formData.message}
                  onChange={handleChange}
                  rows={5}
                  className="bg-transparent border border-white/20 text-white placeholder:text-white/70 placeholder:capitalize focus:border-white/40 resize-none"
                  required
                />
              </div>

              {/* Submit Button */}
              <div>
                <Button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#7436BB] to-[#B520A3] hover:from-[#7436BB]/90 hover:to-[#B520A3]/90 text-white py-6 rounded-full text-lg font-medium uppercase tracking-wide"
                >
                  Send Message
                </Button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
