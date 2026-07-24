/**
 * Site-wide identity, contact details and navigation.
 * Content extracted from the HAS Traders company profile deck.
 */
export const SITE = {
  name: "HAS Traders",
  legalName: "HAS Traders (SMC-Private) Limited",
  tagline: "Delivering Excellence, Every time",
  strapline: "Integrated solutions. Reliable execution. Every time.",
  subStrapline: "One partner. Multiple capabilities.",
  description:
    "HAS Traders supports public and private-sector clients across Pakistan with integrated supply, transport, events, marketing and technology services.",
  established: 2024,
  email: "info@hastraders.com",
  website: "www.hastraders.com",
  phones: [{ number: "+92 314 999 5554", label: null }],
} as const;

export const NAV = [
  { href: "/", label: "Home" },
  { href: "/about/", label: "About" },
  { href: "/clients/", label: "Clients" },
  { href: "/services/", label: "Services" },
  { href: "/projects/", label: "Projects" },
  { href: "/footprint/", label: "Footprint" },
  { href: "/leadership/", label: "Leadership" },
  { href: "/contact/", label: "Contact" },
] as const;
