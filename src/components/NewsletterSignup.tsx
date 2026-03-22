"use client";

import { useState } from "react";
import { subscribeAction } from "@/app/actions/subscribe";
import { Button } from "@/components/Button";
import { Send, CheckCircle2, MailPlus } from "lucide-react";

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
      <div className="w-full flex flex-col sm:flex-row items-center justify-between bg-green-500/5 backdrop-blur-xl border border-green-500/20 rounded-[2rem] p-6 md:p-8 transition-all shadow-sm">
        <div className="flex items-center gap-4 mb-4 sm:mb-0">
          <div className="h-12 w-12 bg-green-500/20 rounded-full flex items-center justify-center border border-green-500/30 shrink-0">
            <CheckCircle2 className="h-6 w-6 text-green-600 dark:text-green-400" />
          </div>
          <div className="flex flex-col text-left">
            <h3 className="text-xl font-bold tracking-tight text-foreground">You're officially subscribed!</h3>
            <p className="text-foreground/70 text-sm mt-1">Keep an eye on your inbox for occasional automated updates.</p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="group w-full flex flex-col lg:flex-row bg-background/40 backdrop-blur-xl border border-foreground/10 rounded-[2rem] p-6 md:p-8 transition-all duration-300 hover:bg-background/60 hover:shadow-lg hover:border-foreground/20 relative overflow-hidden items-center justify-between gap-8 h-full min-h-[140px]">
      
      <div className="relative z-10 flex flex-row items-center gap-6 w-full lg:w-1/2">
        <div className="hidden sm:flex h-14 w-14 bg-foreground/5 rounded-2xl items-center justify-center border border-foreground/10 shrink-0 group-hover:scale-105 transition-transform duration-500">
          <MailPlus className="h-6 w-6 text-foreground/60" />
        </div>
        <div className="flex flex-col gap-1.5 justify-center">
          <h2 className="text-2xl font-bold tracking-tight font-sans">
            Never miss an update.
          </h2>
          <p className="text-sm text-foreground/60 leading-relaxed max-w-sm">
            Get early access to my newest tools and utilities before anyone else. No spam, ever.
          </p>
        </div>
      </div>

      <form action={handleSubmit} className="relative z-10 w-full lg:w-1/2 flex flex-col sm:flex-row items-end gap-3 justify-end pt-2 lg:pt-0">
        <div className="flex flex-col w-full gap-1.5">
          <label htmlFor="name" className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest pl-1">Name</label>
          <input
            type="text"
            id="name"
            name="name"
            required
            disabled={status === "loading"}
            placeholder="Rahul"
            className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all disabled:opacity-50 text-foreground text-sm font-medium h-[42px]"
          />
        </div>
        <div className="flex flex-col w-full gap-1.5">
          <label htmlFor="email" className="text-[10px] font-bold text-foreground/50 uppercase tracking-widest pl-1">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            required
            disabled={status === "loading"}
            placeholder="rahul@example.com"
            className="w-full px-4 py-2.5 rounded-xl border border-foreground/10 bg-background/50 backdrop-blur-sm focus:outline-none focus:ring-2 focus:ring-foreground/20 transition-all disabled:opacity-50 text-foreground text-sm font-medium h-[42px]"
          />
        </div>

        <Button 
          type="submit" 
          disabled={status === "loading"}
          className="w-full sm:w-auto justify-center h-[42px] rounded-xl group/btn font-bold shadow-sm hover:shadow-md transition-all px-6 shrink-0"
        >
          {status === "loading" ? "..." : "Subscribe"}
          {status !== "loading" && <Send className="ml-2 h-4 w-4 group-hover/btn:translate-x-1 group-hover/btn:-translate-y-1 transition-transform" />}
        </Button>
      </form>

      {/* Error state */}
      {status === "error" && (
        <p className="absolute bottom-1 left-4 lg:left-auto lg:right-6 text-red-500 text-[10px] font-bold uppercase tracking-wider">{errorMessage}</p>
      )}

      {/* Decorative gradient corner */}
      <div className="absolute -top-32 -right-32 w-64 h-64 bg-foreground/[0.02] rounded-full blur-3xl group-hover:bg-foreground/[0.04] transition-colors duration-700 pointer-events-none" />
    </div>
  );
}
