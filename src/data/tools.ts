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
}

export const tools: Tool[] = [
  {
    id: "1",
    slug: "site-reset",
    title: "Site Reset Extension",
    shortDescription: "A practical Chrome extension to completely clear local state (cookies, storage, cache) for the current tab.",
    fullDescription: "Site Reset is a developer-focused utility that allows you to start fresh on any domain with a single click. It securely clears localStorage, sessionStorage, cookies, and cache targeting only the active tab's domain.",
    howItWorks: [
      "Click the extension icon in your toolbar.",
      "Confirm the reset action.",
      "The extension clears all local data and hard reloads the page."
    ],
    benefits: [
      "Faster debugging for frontend applications.",
      "No more digging through DevTools to clear storage.",
      "Safe and domain-isolated."
    ],
    label: "Featured",
    installUrl: "https://chrome.google.com/webstore",
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
