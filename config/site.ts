import { env } from "@/env.mjs";
import { SiteConfig } from "types"

const site_url = env.NEXT_PUBLIC_APP_URL;

export const siteConfig: SiteConfig = {
  name: "Docu Flow",
  description:
    "Build your document workflow using OCR to digitalize, AI to understand, Slack API, X API, etc to notify and retrieve or send data via folder, http(s), ftp, email.",
  url: site_url,
  ogImage: `${site_url}/og.jpg`,
  links: {
    twitter: "https://twitter.com/docudotrun",
    github: "https://github.com/docudotrun/next-saas-stripe-starter",
  },
  mailSupport: "support@docu.run"
}
