export interface Tool {
  id: string;
  slug: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  howItWorks: string[];
  benefits: string[];
  isComingSoon?: boolean;
  label?: string;
  installUrl?: string;
  installText?: string;
  imageUrl?: string;
}

export const tools: Tool[] = [
  {
    id: "1",
    slug: "reset-site",
    title: "Reset Site Extension",
    shortDescription: "A practical Chrome extension to completely clear local state (cookies, storage, cache) for the current tab.",
    fullDescription: "Reset Site is a developer-focused utility that allows you to start fresh on any domain with a single click. It securely clears localStorage, sessionStorage, cookies, and cache targeting only the active tab's domain.",
    howItWorks: [
      "Download and extract the ZIP file below.",
      "Go to chrome://extensions/ and toggle 'Developer mode' ON.",
      "Click 'Load unpacked' and select the extracted folder.",
      "Pin the extension and click it on any site to clear local data instantly!"
    ],
    benefits: [
      "Faster debugging for frontend applications.",
      "No more digging through DevTools to clear storage.",
      "Safe and domain-isolated."
    ],
    label: "Featured",
    installUrl: "/ResetSite-v1.0.0.zip",
    installText: "Download ZIP (Manual Install)",
    imageUrl: "/reset-site-hero.png",
  },
  {
    id: "2",
    slug: "voice-filler",
    title: "Voice Form Filler",
    shortDescription: "Fill out tedious web forms automatically using voice narration and AI.",
    fullDescription: "An upcoming AI utility that listens to your voice and intelligently maps your dictated information to the correct form fields on any website.",
    howItWorks: [
      "Activate the tool on a page with a complex form.",
      "Speak naturally about the information required.",
      "The tool processes your speech and populates the fields."
    ],
    benefits: [
      "Saves time on repetitive data entry.",
      "Accessibility friendly.",
      "Works across most standardized web forms."
    ],
    isComingSoon: true,
    label: "Beta Coming Soon"
  }
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}
