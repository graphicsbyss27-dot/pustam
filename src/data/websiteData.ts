// PUSTAM PAPER PRODUCTS - CENTRAL WEBSITE DATA
// Strictly follows Brand Guidelines & Editable Placeholders

export interface SlideItem {
  id: number;
  title: string;
  subtitle: string;
  tagline: string;
  image: string;
  ctaText: string;
  ctaAction: 'contact' | 'products';
}

export interface ProductItem {
  id: string;
  name: string;
  category: string;
  image: string;
  description: string;
  specs: string[];
  paperGsm: string;
  rulingType: string;
  isPlaceholder?: boolean;
}

export interface CertificationItem {
  id: string;
  code: string;
  title: string;
  authority: string;
  status: string;
  description: string;
  iconName: string;
  verified: boolean;
}

export interface FactoryHighlight {
  id: string;
  title: string;
  category: string;
  image: string;
  description: string;
}

export interface ExportDestination {
  region: string;
  port: string;
  transitDays: string;
  status: string;
}

export const HERO_SLIDES: SlideItem[] = [
  {
    id: 1,
    title: "Paper Products, Made to Move Businesses.",
    subtitle: "[ADD SHORT SUPPORTING COPY — High-volume precision converting, premium GSM paper, and custom private labeling.]",
    tagline: "B2B Paper Converting",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Request B2B Quote",
    ctaAction: "contact",
  },
  {
    id: 2,
    title: "Designed for Everyday Possibilities.",
    subtitle: "[ADD SHORT SUPPORTING COPY — School exercise notebooks, hardbound registers, spiral pads, and office reams.]",
    tagline: "Stationery & Books",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Explore Products",
    ctaAction: "products",
  },
  {
    id: 3,
    title: "From Paper to Possibility.",
    subtitle: "[ADD SHORT SUPPORTING COPY — Automated reel-to-sheet slitting, multi-color ruling, and automatic binding lines.]",
    tagline: "Modern Converting Plant",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Explore Factory",
    ctaAction: "products",
  },
  {
    id: 4,
    title: "Built for Brands. Made for Business.",
    subtitle: "[ADD SHORT SUPPORTING COPY — Container-load global exports compliant with international shipping and packaging norms.]",
    tagline: "Export & Logistics",
    image: "https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Export Inquiries",
    ctaAction: "contact",
  },
  {
    id: 5,
    title: "Paper Products by Pustam.",
    subtitle: "[ADD SHORT SUPPORTING COPY — Sustainable raw paper sourcing, high opacity, and zero ink-bleeding manufacturing.]",
    tagline: "Direct Manufacturer",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=1600&q=80",
    ctaText: "Contact Us",
    ctaAction: "contact",
  },
];

export interface ProductPlaceholderItem {
  id: string;
  number: string;
  name: string;
  category: string;
  description: string;
  image: string;
  accent: 'yellow' | 'orange';
}

export const PRODUCTS_PLACEHOLDERS: ProductPlaceholderItem[] = [
  {
    id: "prod-01",
    number: "01",
    name: "[PRODUCT CATEGORY 01]",
    category: "[PRODUCT TYPE]",
    description: "[ADD ONE-LINE PRODUCT DESCRIPTION / CONVERTING SPECIFICATION]",
    image: "https://images.unsplash.com/photo-1544716278-ca5e3f4abd8c?auto=format&fit=crop&w=800&q=80",
    accent: "yellow",
  },
  {
    id: "prod-02",
    number: "02",
    name: "[PRODUCT CATEGORY 02]",
    category: "[PRODUCT TYPE]",
    description: "[ADD ONE-LINE PRODUCT DESCRIPTION / CONVERTING SPECIFICATION]",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    accent: "orange",
  },
  {
    id: "prod-03",
    number: "03",
    name: "[PRODUCT CATEGORY 03]",
    category: "[PRODUCT TYPE]",
    description: "[ADD ONE-LINE PRODUCT DESCRIPTION / CONVERTING SPECIFICATION]",
    image: "https://images.unsplash.com/photo-1517842645767-c639042777db?auto=format&fit=crop&w=800&q=80",
    accent: "yellow",
  },
  {
    id: "prod-04",
    number: "04",
    name: "[PRODUCT CATEGORY 04]",
    category: "[PRODUCT TYPE]",
    description: "[ADD ONE-LINE PRODUCT DESCRIPTION / CONVERTING SPECIFICATION]",
    image: "https://images.unsplash.com/photo-1513542789411-b6a5d4f31634?auto=format&fit=crop&w=800&q=80",
    accent: "orange",
  },
  {
    id: "prod-05",
    number: "05",
    name: "[PRODUCT CATEGORY 05]",
    category: "[PRODUCT TYPE]",
    description: "[ADD ONE-LINE PRODUCT DESCRIPTION / CONVERTING SPECIFICATION]",
    image: "https://images.unsplash.com/photo-1589829545856-d10d557cf95f?auto=format&fit=crop&w=800&q=80",
    accent: "yellow",
  },
];

export const CLIENT_LOGOS = [
  { name: "[ADD CLIENT LOGO 1]", label: "Educational Institutions" },
  { name: "[ADD CLIENT LOGO 2]", label: "Corporate Distributors" },
  { name: "[ADD CLIENT LOGO 3]", label: "Government Supply" },
  { name: "[ADD CLIENT LOGO 4]", label: "Wholesale Stationers" },
  { name: "[ADD CLIENT LOGO 5]", label: "Private Label Brands" },
  { name: "[ADD CLIENT LOGO 6]", label: "Export Trading Houses" },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "iec",
    code: "IEC",
    title: "Import Export Code (IEC)",
    authority: "Directorate General of Foreign Trade (DGFT), Govt. of India",
    status: "Active & Verified",
    description: "Officially registered for global commercial exports and container-level international shipments.",
    iconName: "Globe",
    verified: true,
  },
  {
    id: "udyam",
    code: "UDYAM",
    title: "MSME UDYAM Registration",
    authority: "Ministry of Micro, Small & Medium Enterprises, Govt. of India",
    status: "Recognized Manufacturer",
    description: "Certified manufacturing enterprise adhering to national industrial standards and compliance.",
    iconName: "ShieldCheck",
    verified: true,
  },
  {
    id: "gst",
    code: "GST",
    title: "GST Registration",
    authority: "Goods and Services Tax Network, Govt. of India",
    status: "Tax Compliant Enterprise",
    description: "Fully regularized Indian tax entity enabling compliant interstate and B2B domestic invoicing.",
    iconName: "FileCheck2",
    verified: true,
  },
  {
    id: "custom-cert",
    code: "[ADD CERTIFICATION]",
    title: "[ADD QUALITY / FSC / ISO CERTIFICATE]",
    authority: "[ADD ISSUING BODY]",
    status: "[CERTIFICATION STATUS]",
    description: "[ADD CERTIFICATION DETAILS, AUDIT SCOPE AND QUALITY MANAGEMENT STANDARDS]",
    iconName: "Award",
    verified: false,
  }
];

export const FACTORY_GALLERY: FactoryHighlight[] = [
  {
    id: "f1",
    title: "High-Speed Reel-to-Sheet Line",
    category: "Cutting & Precision",
    image: "https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80",
    description: "Automated precision conversion from jumbo paper reels into uniform book sheet blocks.",
  },
  {
    id: "f2",
    title: "Multi-Color Ruling & Flexo Printing",
    category: "Ruling & Formatting",
    image: "https://images.unsplash.com/photo-1563245372-f21724e3856d?auto=format&fit=crop&w=800&q=80",
    description: "Crisp line ruling with quick ink drying, accurate line margins, and clean date/page headers.",
  },
  {
    id: "f3",
    title: "Automated Wire-O & Stitching Units",
    category: "Binding Department",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    description: "Heavy-duty wire binding and wire stitching ensuring maximum page retention and flat lay.",
  },
  {
    id: "f4",
    title: "Shrink-Wrap & Pallet Packaging",
    category: "Logistics & Quality",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    description: "Moisture-sealed bundle wrapping and corrugated outer carton packing ready for container loading.",
  },
  {
    id: "f5",
    title: "[ADD FACTORY IMAGE]",
    category: "[ADD SECTION]",
    image: "https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&fit=crop&w=800&q=80",
    description: "[ADD FACTORY UNIT / MACHINERY DESCRIPTION - High-capacity warehousing, testing lab, or converting floor.]",
  },
];

export const EXPORT_DESTINATIONS: ExportDestination[] = [
  { region: "[EXPORT CORRIDOR 01]", port: "[ADD DESTINATION SEAPORT / REGION]", transitDays: "[ADD TRANSIT TIME]", status: "[ADD CORRIDOR STATUS]" },
  { region: "[EXPORT CORRIDOR 02]", port: "[ADD DESTINATION SEAPORT / REGION]", transitDays: "[ADD TRANSIT TIME]", status: "[ADD CORRIDOR STATUS]" },
  { region: "[EXPORT CORRIDOR 03]", port: "[ADD DESTINATION SEAPORT / REGION]", transitDays: "[ADD TRANSIT TIME]", status: "[ADD CORRIDOR STATUS]" },
  { region: "[EXPORT CORRIDOR 04]", port: "[ADD DESTINATION SEAPORT / REGION]", transitDays: "[ADD TRANSIT TIME]", status: "[ADD CORRIDOR STATUS]" },
  { region: "[ADD EXPORT COUNTRIES]", port: "[ADD TARGET SEAPORT]", transitDays: "[ADD TRANSIT TIME]", status: "[ADD CORRIDOR STATUS]" },
];

export const COMPANY_DETAILS = {
  name: "PUSTAM PAPER PRODUCTS",
  tagline: "Modern Paper Products Manufacturer",
  shortAbout: "[ADD 2–3 SENTENCE OFFICIAL PUSTAM COMPANY DESCRIPTION HERE]",
  placeholderDescription: "[ADD COMPANY DESCRIPTION — Detailed founding story, factory footprint, vision, and manufacturing scale]",
  address: {
    line1: "[ADD FACTORY / OFFICE ADDRESS LINE 1]",
    line2: "[ADD INDUSTRIAL AREA / CITY / STATE]",
    city: "[ADD CITY]",
    state: "[ADD STATE]",
    pincode: "[ADD PINCODE]",
    country: "India",
  },
  contact: {
    phone: "[ADD PHONE NUMBER]",
    whatsapp: "",
    whatsappDisplay: "[ADD WHATSAPP NUMBER]",
    email: "[ADD EMAIL ADDRESS]",
    exportEmail: "[ADD EXPORT EMAIL]",
    workingHours: "[ADD WORKING HOURS]",
  },
};
