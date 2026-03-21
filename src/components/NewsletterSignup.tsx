"use client";

import { useState } from "react";
import { subscribeAction } from "@/app/actions/subscribe";
import { Button } from "@/components/Button";
import { Send, CheckCircle2 } from "lucide-react";

export default function NewsletterSignup() {
  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(formData: FormData) {
    setStatus("loading");
    setErrorMessage("");

    const result = await subscribeAction(formData);

    if (result?.error) {
      setStatus("error");
      setErrorMessage(result.error);
    } else {
      setStatus("success");
    }
  }

  if (status === "success") {
    return (
      <section className="bg-foreground/[0.03] border border-foreground/5 rounded-3xl p-8 md:p-12 text-center flex flex-col items-center justify-center gap-4 mt-6">
        <CheckCircle2 className="h-12 w-12 text-green-500 mb-2" />
        <h3 className="text-2xl font-bold tracking-tight font-sans">You're subscribed!</h3>
        <p className="text-foreground/80">
          Thanks for joining. We'll be in touch occasionally with new updates.
        </p>
      </section>
    );
  }

  return (
    <section className="bg-foreground/[0.03] border border-foreground/5 rounded-3xl p-8 md:p-12 relative overflow-hidden mt-6">
      <div className="relative z-10 flex flex-col md:flex-row gap-12 items-center">
        <div className="flex-1 flex flex-col gap-4">
          <h2 className="text-2xl md:text-3xl font-bold tracking-tight font-sans">
            Newsletter
          </h2>
          <p className="text-lg text-foreground/80 leading-relaxed max-w-md">
            Join the newsletter to receive occasional updates about new tools, utilities, and improvements to yogesh.tech. No spam, ever.
          </p>
        </div>

        <form action={handleSubmit} className="flex-1 w-full flex flex-col gap-4">
          <div className="flex flex-col gap-2">
            <label htmlFor="name" className="text-sm font-medium text-foreground/80 ml-1">
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              required
              disabled={status === "loading"}
              placeholder="Your name"
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all disabled:opacity-50 text-foreground"
            />
          </div>

          <div className="flex flex-col gap-2">
            <label htmlFor="email" className="text-sm font-medium text-foreground/80 ml-1">
              Email Address
            </label>
            <input
              type="email"
              id="email"
              name="email"
              required
              disabled={status === "loading"}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-xl border border-foreground/10 bg-background focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all disabled:opacity-50 text-foreground"
            />
          </div>

          {status === "error" && (
            <p className="text-red-500 text-sm mt-1">{errorMessage}</p>
          )}

          <Button 
            type="submit" 
            disabled={status === "loading"}
            className="w-full justify-center mt-2 group"
          >
            {status === "loading" ? "Subscribing..." : "Subscribe"}
            {status !== "loading" && <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />}
          </Button>
        </form>
      </div>
    </section>
  );
}
