// PUSTAM PAPER PRODUCTS - CENTRAL WEBSITE DATA
// Updated with official company content

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
  regNumber?: string;
  date?: string;
  pdfUrl?: string;
  signatory?: string;
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
    title: "India-made notebooks. Your brand. Shipped worldwide.",
    subtitle: "Your trusted white-label notebook manufacturing partner for customised paper products and international supply.",
    tagline: "White-Label Manufacturer",
    image: "/Infra/factory-ruling-printing-line.jpg",
    ctaText: "Explore Our Products",
    ctaAction: "products",
  },
  {
    id: 2,
    title: "Paper Products With Purpose.",
    subtitle: "Established in 2016, Palghar — manufacturing exercise books, registers, spiral notebooks and drawing books for Indian brands and international buyers.",
    tagline: "Est. 2016, Palghar",
    image: "/Infra/factory-aerial-facility.jpg",
    ctaText: "Partner With Us",
    ctaAction: "contact",
  },
  {
    id: 3,
    title: "25 Metric Tonnes of Paper. Converted Every Day.",
    subtitle: "Our paper conversion capacity supports scalable notebook manufacturing for brands that are ready to grow.",
    tagline: "Manufacturing Capacity",
    image: "/Infra/factory-interior-cutting.jpg",
    ctaText: "Explore Our Products",
    ctaAction: "products",
  },
  {
    id: 4,
    title: "Indian Manufacturing. Global Reach.",
    subtitle: "Supplying export-ready paper products to international buyers across worldwide markets.",
    tagline: "Export & Logistics",
    image: "/Infra/factory-warehouse-reels.jpg",
    ctaText: "Partner With Us",
    ctaAction: "contact",
  },
  {
    id: 5,
    title: "Your Brand. Our Manufacturing Expertise.",
    subtitle: "We manage manufacturing, quality control and export-ready packaging — so your brand can focus on what it does best.",
    tagline: "White-Label Partner",
    image: "/products/handbound-registers.jpg",
    ctaText: "Partner With Us",
    ctaAction: "contact",
  },
];

export interface ProductPlaceholderItem {
  id: string;
  number: string;
  name: string;
  description: string;
  image: string;
  accent: 'yellow' | 'orange';
}

export const PRODUCTS_PLACEHOLDERS: ProductPlaceholderItem[] = [
  {
    id: "prod-01",
    number: "01",
    name: "Center Pinned Exercise Books",
    description: "Staple-bound notebooks with smooth, high-opacity ruled paper for schools and institutions.",
    image: "/products/exercise-books.jpg",
    accent: "yellow",
  },
  {
    id: "prod-02",
    number: "02",
    name: "Counter Books",
    description: "Durable case-bound commercial ledgers available in standard 1 to 4 quire page counts.",
    image: "/products/counter-books.jpg",
    accent: "orange",
  },
  {
    id: "prod-03",
    number: "03",
    name: "Composition Books",
    description: "Classic center-sewn student books with cloth tape binding in college and wide ruling.",
    image: "/products/composition-books.jpg",
    accent: "yellow",
  },
  {
    id: "prod-04",
    number: "04",
    name: "Spiral & Wiro Notebooks",
    description: "360° lay-flat twin-wire and spiral notebooks with clean micro-perforated pages.",
    image: "/products/spiral-notebooks.jpg",
    accent: "orange",
  },
  {
    id: "prod-05",
    number: "05",
    name: "Writing Pads & Legal Pads",
    description: "Top-perforated tear-off writing pads with rigid backing board in yellow and white.",
    image: "/products/notepads.jpg",
    accent: "yellow",
  },
  {
    id: "prod-06",
    number: "06",
    name: "Case Bound Books (Hardbound)",
    description: "180° flat-opening section-sewn hardbound registers with durable greyboard cores.",
    image: "/products/handbound-registers.jpg",
    accent: "orange",
  },
  {
    id: "prod-07",
    number: "07",
    name: "Drawing & Sketch Books",
    description: "Heavy-weight acid-free cartridge paper sketchbooks in spiral, stitched, or glued formats.",
    image: "/products/Sketchbook_.jpg",
    accent: "yellow",
  },
];

export const CLIENT_LOGOS = [
  { name: "Brand Partner 1", label: "Educational Institutions" },
  { name: "Brand Partner 2", label: "Corporate Distributors" },
  { name: "Brand Partner 3", label: "Government Supply" },
  { name: "Brand Partner 4", label: "Wholesale Stationers" },
  { name: "Brand Partner 5", label: "Private Label Brands" },
  { name: "Brand Partner 6", label: "Export Trading Houses" },
];

export const CERTIFICATIONS_DATA: CertificationItem[] = [
  {
    id: "iec",
    code: "IEC",
    title: "Import Export Code (IEC)",
    authority: "Directorate General of Foreign Trade (DGFT), Govt. of India",
    status: "Active & Verified",
    description: "Officially registered for legal commercial export operations and overseas container trade from Indian seaports.",
    iconName: "Globe",
    verified: true,
    regNumber: "BNZPC4332C",
    date: "22/11/2022",
    pdfUrl: "/documents/pustam-iec-certificate.pdf",
    signatory: "Rakesh Ankush Chavan",
  },
  {
    id: "udyam",
    code: "UDYAM",
    title: "MSME UDYAM Registration",
    authority: "Ministry of Micro, Small & Medium Enterprises, Govt. of India",
    status: "Recognized Manufacturer",
    description: "Government recognized paper converting enterprise (NIC 17093 & 18121) adhering to national industrial standards.",
    iconName: "ShieldCheck",
    verified: true,
    regNumber: "UDYAM-MH-17-0069099",
    date: "01/09/2022",
    pdfUrl: "/documents/pustam-udyam-certificate.pdf",
    signatory: "Pustam Paper Products",
  },
  {
    id: "gst",
    code: "GST",
    title: "GST Registration",
    authority: "Goods and Services Tax Network, Govt. of India",
    status: "Tax Compliant Enterprise",
    description: "Fully regularized Indian tax entity enabling compliant interstate commerce and transparent B2B domestic invoicing.",
    iconName: "FileCheck2",
    verified: true,
    regNumber: "27BNZPC4332C1Z1",
    date: "22/07/2022 (Amended 14/08/2024)",
    pdfUrl: "/documents/pustam-gst-certificate.pdf",
    signatory: "Rakesh Ankush Chavan",
  },
];

export const FACTORY_GALLERY: FactoryHighlight[] = [
  {
    id: "f1",
    title: "Multi-Line Flexo Ruling & Converting Floor",
    category: "Ruling & Formatting",
    image: "/Infra/factory-ruling-printing-line.jpg",
    description: "High-speed flexographic ruling lines converting continuous paper webs with uniform line spacing and fast ink drying.",
  },
  {
    id: "f2",
    title: "High-Speed Precision Cutting & Sizing Line",
    category: "Cutting & Precision",
    image: "/Infra/factory-interior-cutting.jpg",
    description: "Heavy-duty paper guillotine cutting machine converting paper blocks into uniform notebook stacks with active quality checks.",
  },
  {
    id: "f3",
    title: "Warehouse Logistics, Reel Staging & Loading Bay",
    category: "Warehousing & Supply Chain",
    image: "/Infra/factory-warehouse-reels.jpg",
    description: "High-ceiling storage holding jumbo raw reels, forklift handling, and palletised finished products staged for container loading.",
  },
  {
    id: "f4",
    title: "Palghar Manufacturing Plant & Logistics Compound",
    category: "Facility & Infrastructure",
    image: "/Infra/factory-aerial-facility.jpg",
    description: "Dedicated manufacturing premises in Palghar Udyog Nagar supporting 25 metric tonnes/day paper conversion.",
  },
  {
    id: "f5",
    title: "Automated Wire-O & Stitching Units",
    category: "Binding Department",
    image: "https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&w=800&q=80",
    description: "Heavy-duty wire binding and wire stitching ensuring maximum page retention and flat lay.",
  },
  {
    id: "f6",
    title: "Moisture-Seal & Export Packaging Line",
    category: "Logistics & Quality",
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80",
    description: "Moisture-sealed bundle wrapping and palletised packing ready for safe national transit and container sea shipments.",
  },
];

export const EXPORT_DESTINATIONS: ExportDestination[] = [
  { region: "Worldwide Shipments", port: "International Markets", transitDays: "By Sea & Air", status: "Active" },
];

export const COMPANY_DETAILS = {
  name: "Pustam Paper Products",
  tagline: "White-Label Notebook Manufacturer",
  shortAbout: "Established in 2016 and based in Palghar, India, we are a dedicated white-label manufacturer of paper notebooks. We partner with recognised Indian brands and merchant exporters to produce notebooks across every category, backed by a conversion capacity of 25 metric tonnes of paper per day.",
  proprietor: "Rakesh Ankush Chavan",
  gstin: "27BNZPC4332C1Z1",
  pan: "BNZPC4332C",
  iec: "BNZPC4332C",
  udyam: "UDYAM-MH-17-0069099",
  address: {
    line1: "Ground Floor, Plot No. 19–20, Dewan & Shah",
    line2: "Palghar Udyog Nagar, Near Jayant Printery",
    city: "Palghar",
    state: "Maharashtra",
    pincode: "401404",
    country: "India",
  },
  contact: {
    phone: "+91 9766191027",
    phoneTel: "tel:+919766191027",
    phoneAlt: "+91 7770011312",
    whatsapp: "https://wa.me/919766191027",
    whatsappDisplay: "+91 9766191027",
    email: "pustamofficial@gmail.com",
    emailMailto: "mailto:pustamofficial@gmail.com",
    exportEmail: "pustamofficial@gmail.com",
    mapsUrl: "https://maps.app.goo.gl/bwigE29JJdmmgDDx8",
    workingHours: "Mon – Sat, 9:00 AM – 6:00 PM IST",
  },
};
