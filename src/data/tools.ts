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
  },
  {
    id: "3",
    slug: "mdx-generator",
    title: "MDX Blog Studio",
    shortDescription: "A visual markdown editor to generate perfectly formatted MDX blog posts with rich text, custom colors, and code snippets.",
    fullDescription: "MDX Studio is a web-based utility built directly into yogesh.tech. It acts as a smart editor for your Next.js MDX blog. Write your posts using a rich toolbar, format text with colors and sizes, securely add code blocks, and instantly download the compiled .mdx file ready for deployment. No database required.",
    howItWorks: [
      "Fill in your post metadata (Title, Description, Date).",
      "Use the rich text toolbar to natively format your markdown, add links, and insert code blocks.",
      "Preview the raw MDX output in real-time.",
      "Click Download to get your web-ready .mdx file exactly formatted for the yogesh.tech blog engine."
    ],
    benefits: [
      "Eliminates the need to memorize YAML frontmatter syntax.",
      "Easily apply custom font colors and sizes using generated inline JSX.",
      "Zero-setup visual markdown editing."
    ],
    label: "New",
    installUrl: "/tools/mdx-generator",
    installText: "Launch Studio",
    imageUrl: ""
  }
];

export function getToolBySlug(slug: string): Tool | undefined {
  return tools.find((tool) => tool.slug === slug);
}
