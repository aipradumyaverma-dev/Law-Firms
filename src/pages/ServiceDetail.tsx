import { useParams } from "react-router-dom";
import TopBar from "@/components/TopBar";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import FloatingButtons from "@/components/FloatingButtons";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { CheckCircle, FileText, Clock, Shield, Phone } from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const serviceDetails: Record<string, { title: string; description: string; price: string; features: string[]; documents: string[]; timeline: string }> = {
  "private-limited-company": {
    title: "Private Limited Company Registration",
    description: "Register your Private Limited Company with Law Firms. A Private Limited Company is the most recommended business structure for startups and growing businesses in India.",
    price: "₹3,999",
    features: ["Limited Liability Protection", "Separate Legal Entity", "Easy to Raise Capital", "Perpetual Succession", "Tax Benefits", "Professional Image"],
    documents: ["PAN Card of Directors", "Aadhaar Card", "Passport Size Photos", "Address Proof", "Registered Office Proof", "No Objection Certificate"],
    timeline: "7-10 Working Days",
  },
  "opc-registration": {
    title: "One Person Company (OPC) Registration",
    description: "Start your One Person Company with complete legal compliance. OPC is ideal for solo entrepreneurs who want the benefits of a private limited company.",
    price: "₹2,999",
    features: ["Single Member Ownership", "Limited Liability", "Separate Legal Entity", "Easy Compliance", "Tax Benefits", "Professional Credibility"],
    documents: ["PAN Card", "Aadhaar Card", "Passport Photos", "Address Proof", "Registered Office Proof", "Nominee Details"],
    timeline: "7-10 Working Days",
  },
  "llp-registration": {
    title: "Limited Liability Partnership (LLP) Registration",
    description: "Register your LLP with expert assistance. LLP combines the benefits of a partnership with limited liability protection for partners.",
    price: "₹4,999",
    features: ["Limited Liability", "Flexible Management", "Lower Compliance", "No Minimum Capital", "Tax Benefits", "Easy to Form"],
    documents: ["PAN Card of Partners", "Aadhaar Card", "Passport Photos", "Address Proof", "Registered Office Proof", "LLP Agreement"],
    timeline: "10-15 Working Days",
  },
  "proprietorship": {
    title: "Sole Proprietorship Registration",
    description: "Start your business as a sole proprietor with minimal compliance. Easiest form of business for individual entrepreneurs.",
    price: "₹999",
    features: ["Easy to Start", "Minimal Compliance", "Complete Control", "Low Cost", "Simple Tax Filing", "Quick Setup"],
    documents: ["PAN Card", "Aadhaar Card", "Bank Account", "Address Proof", "Business Name", "GST Registration (if required)"],
    timeline: "1-3 Working Days",
  },
  "section-8-company": {
    title: "Section 8 Company Registration",
    description: "Register a Non-Profit organization under Section 8 of Companies Act. Ideal for charitable, educational, and social welfare activities.",
    price: "₹9,999",
    features: ["Non-Profit Status", "Tax Exemptions", "Limited Liability", "Credibility", "Government Grants", "CSR Funding"],
    documents: ["PAN Card of Directors", "Aadhaar Card", "MOA & AOA", "Address Proof", "Objects of Company", "INC-12 Declaration"],
    timeline: "30-45 Working Days",
  },
  "gst-registration": {
    title: "GST Registration",
    description: "Get your GST Registration done quickly with our expert assistance. GST is mandatory for businesses with turnover above ₹40 lakhs (₹20 lakhs for service providers).",
    price: "₹1,999",
    features: ["Legal Recognition", "Input Tax Credit", "Interstate Sales", "Government Tenders", "E-commerce Sales", "Business Credibility"],
    documents: ["PAN Card", "Aadhaar Card", "Business Address Proof", "Bank Account Details", "Passport Photos", "Business Registration"],
    timeline: "3-5 Working Days",
  },
  "msme-registration": {
    title: "MSME/Udyam Registration",
    description: "Register your business under MSME for government benefits, subsidies, and priority sector lending at lower interest rates.",
    price: "₹499",
    features: ["Government Subsidies", "Priority Lending", "Tax Benefits", "Protection Against Delayed Payments", "Tender Preference", "Easy Process"],
    documents: ["Aadhaar Card", "PAN Card", "Business Registration", "Bank Account Details", "Business Address", "Nature of Activity"],
    timeline: "1-2 Working Days",
  },
  "fssai-license": {
    title: "FSSAI License",
    description: "Get your FSSAI Food License for starting or running a food business in India. FSSAI registration is mandatory for all food business operators.",
    price: "₹5,999",
    features: ["Legal Compliance", "Consumer Trust", "Quality Assurance", "Business Credibility", "Access to Markets", "Brand Recognition"],
    documents: ["Business Registration", "Owner ID Proof", "Business Address Proof", "Food Category Details", "Equipment List", "Water Test Report"],
    timeline: "30-60 Days",
  },
  "iec-registration": {
    title: "Import Export Code (IEC) Registration",
    description: "Get your IEC code to start importing or exporting goods and services from India. Mandatory for all import-export businesses.",
    price: "₹1,999",
    features: ["Lifetime Validity", "No Renewal Required", "Global Trade Access", "Bank Benefits", "Government Schemes", "Easy Process"],
    documents: ["PAN Card", "Aadhaar Card", "Business Registration", "Bank Account Details", "Address Proof", "Cancelled Cheque"],
    timeline: "3-5 Working Days",
  },
  "shop-establishment": {
    title: "Shop & Establishment Registration",
    description: "Register your shop or commercial establishment under the Shops and Establishments Act for legal compliance.",
    price: "₹1,499",
    features: ["Legal Recognition", "Employee Rights", "Working Hours Regulation", "Business License", "Compliance Certificate", "Bank Account Opening"],
    documents: ["ID Proof", "Address Proof", "Rent Agreement", "Passport Photos", "Business PAN", "Employee Details"],
    timeline: "7-15 Working Days",
  },
  "income-tax-filing": {
    title: "Income Tax Return Filing",
    description: "Expert assistance for hassle-free income tax return filing. Maximize your refunds and ensure complete compliance.",
    price: "₹999",
    features: ["Expert CA Assistance", "Maximum Refund", "Error-Free Filing", "All ITR Forms", "Quick Processing", "Tax Planning Advice"],
    documents: ["PAN Card", "Aadhaar Card", "Form 16/16A", "Bank Statements", "Investment Proofs", "Previous ITR"],
    timeline: "1-3 Working Days",
  },
  "gst-filing": {
    title: "GST Return Filing",
    description: "Timely and accurate GST return filing services. Avoid penalties and maintain compliance with expert assistance.",
    price: "₹499",
    features: ["Monthly/Quarterly Filing", "GSTR-1 & GSTR-3B", "Input Tax Credit", "Error Rectification", "Compliance Reports", "Expert Support"],
    documents: ["GST Login Credentials", "Sales Invoices", "Purchase Invoices", "Bank Statements", "Previous Returns", "Credit Notes"],
    timeline: "1-2 Working Days",
  },
  "tds-returns": {
    title: "TDS Return Filing",
    description: "Accurate and timely TDS return filing to ensure compliance with Income Tax regulations and avoid penalties.",
    price: "₹999",
    features: ["All TDS Forms", "Timely Filing", "TDS Certificates", "Penalty Avoidance", "Compliance Reports", "Expert Assistance"],
    documents: ["TAN Details", "Challan Details", "Deductee Details", "PAN of Deductees", "Previous Returns", "Bank Statements"],
    timeline: "2-3 Working Days",
  },
  "tax-planning": {
    title: "Tax Planning & Advisory",
    description: "Strategic tax planning services to minimize your tax liability legally while maximizing savings and investments.",
    price: "₹2,999",
    features: ["Tax Saving Strategies", "Investment Planning", "Deduction Optimization", "Future Tax Planning", "Compliance Review", "Expert Consultation"],
    documents: ["Income Details", "Investment Documents", "Previous ITRs", "Property Documents", "Loan Details", "Insurance Policies"],
    timeline: "3-5 Working Days",
  },
  "tax-services": {
    title: "Tax Services",
    description: "Comprehensive tax services including income tax filing, GST filing, TDS returns, and tax planning for individuals and businesses.",
    price: "₹999 onwards",
    features: ["Income Tax Filing", "GST Compliance", "TDS Returns", "Tax Planning", "Tax Audit", "Expert CA Support"],
    documents: ["PAN Card", "Income Documents", "Investment Proofs", "Bank Statements", "Previous Returns", "Business Documents"],
    timeline: "1-5 Working Days",
  },
  "trademark-registration": {
    title: "Trademark Registration",
    description: "Protect your brand name, logo, and tagline with Trademark Registration. A registered trademark gives you exclusive rights to use your brand identity.",
    price: "₹1,499 + Govt. Fees",
    features: ["Brand Protection", "Legal Ownership", "10 Years Validity", "Pan India Protection", "Exclusive Rights", "Brand Value Enhancement"],
    documents: ["Trademark Logo/Name", "Business Registration", "Owner ID Proof", "Address Proof", "Power of Attorney", "User Affidavit (if applicable)"],
    timeline: "18-24 Months",
  },
  "trademark-renewal": {
    title: "Trademark Renewal",
    description: "Renew your registered trademark before expiry to maintain protection. Trademarks are valid for 10 years and must be renewed.",
    price: "₹5,999 + Govt. Fees",
    features: ["Continued Protection", "No Re-registration", "Same TM Number", "Pan India Coverage", "Legal Validity", "Brand Security"],
    documents: ["Trademark Certificate", "Owner ID Proof", "Address Proof", "Power of Attorney", "Business Registration", "Previous Renewal Documents"],
    timeline: "3-6 Months",
  },
  "trademark-watch": {
    title: "Trademark Watch Service",
    description: "Monitor your trademark against potential infringements. Get alerts when similar marks are filed in your category.",
    price: "₹4,999/year",
    features: ["Infringement Alerts", "Similar Mark Detection", "Legal Action Support", "Monthly Reports", "Pan India Monitoring", "Expert Analysis"],
    documents: ["Trademark Certificate", "Owner Details", "Category Details", "Contact Information", "Power of Attorney", "Business Documents"],
    timeline: "Ongoing Service",
  },
  "copyright-registration": {
    title: "Copyright Registration",
    description: "Protect your creative works including literary, artistic, musical, and software works with copyright registration.",
    price: "₹4,999",
    features: ["Legal Protection", "Ownership Proof", "Lifetime + 60 Years", "Transferable Rights", "Legal Remedies", "International Protection"],
    documents: ["Work Copies", "Author ID Proof", "NOC from Publisher", "Power of Attorney", "Address Proof", "Work Description"],
    timeline: "2-3 Months",
  },
  "patent-registration": {
    title: "Patent Registration",
    description: "Protect your inventions and innovations with patent registration. Get exclusive rights to manufacture, use, and sell your invention.",
    price: "₹15,999",
    features: ["20 Years Protection", "Exclusive Rights", "Licensing Income", "Legal Monopoly", "Asset Value", "Innovation Protection"],
    documents: ["Invention Description", "Drawings/Diagrams", "Inventor Details", "Priority Documents", "Power of Attorney", "Technical Specifications"],
    timeline: "3-5 Years",
  },
  "trademark": {
    title: "Trademark & IP Services",
    description: "Comprehensive intellectual property services including trademark, copyright, and patent registration to protect your brand and innovations.",
    price: "₹1,499 onwards",
    features: ["Trademark Registration", "Copyright Protection", "Patent Filing", "IP Strategy", "Infringement Action", "Portfolio Management"],
    documents: ["Brand/Logo Details", "Owner ID Proof", "Business Registration", "Work Samples", "Invention Details", "Power of Attorney"],
    timeline: "Varies by Service",
  },
  "annual-compliance": {
    title: "Annual Compliance Package",
    description: "Complete annual compliance package for companies including all statutory filings, ROC returns, and regulatory requirements.",
    price: "₹9,999",
    features: ["All ROC Filings", "Annual Returns", "Board Meetings", "AGM Compliance", "Statutory Registers", "Expert Support"],
    documents: ["Company Documents", "Director Details", "Financial Statements", "Board Resolutions", "Previous Filings", "Shareholder Details"],
    timeline: "Throughout Year",
  },
  "roc-filing": {
    title: "ROC Filing Services",
    description: "Complete ROC filing services for companies including annual returns, event-based filings, and compliance reports.",
    price: "₹1,999",
    features: ["Annual Returns", "Event Filings", "Director Changes", "Share Transfers", "Charge Registration", "Compliance Reports"],
    documents: ["Company Registration", "Director KYC", "Financial Statements", "Board Resolutions", "Event Documents", "Previous Filings"],
    timeline: "5-10 Working Days",
  },
  "director-kyc": {
    title: "Director KYC (DIR-3 KYC)",
    description: "Annual Director KYC filing is mandatory for all directors. Non-compliance results in DIN deactivation and penalties.",
    price: "₹499",
    features: ["DIN Activation", "Penalty Avoidance", "Annual Compliance", "Quick Process", "Expert Filing", "Status Update"],
    documents: ["DIN Number", "PAN Card", "Aadhaar Card", "Mobile Number", "Email ID", "Digital Signature"],
    timeline: "1-2 Working Days",
  },
  "accounting": {
    title: "Accounting & Bookkeeping",
    description: "Professional accounting and bookkeeping services to maintain accurate financial records and ensure compliance.",
    price: "₹2,999/month",
    features: ["Daily Bookkeeping", "Financial Reports", "Bank Reconciliation", "GST Compliance", "Tax Ready Books", "Cloud Accounting"],
    documents: ["Bank Statements", "Purchase Bills", "Sales Invoices", "Expense Vouchers", "Previous Records", "Business Registration"],
    timeline: "Ongoing Service",
  },
  "compliances": {
    title: "Compliance Services",
    description: "Complete compliance management services for businesses including ROC filings, annual returns, and regulatory requirements.",
    price: "₹999 onwards",
    features: ["ROC Filings", "Annual Returns", "Director KYC", "GST Compliance", "Income Tax", "Legal Compliance"],
    documents: ["Company Documents", "Director Details", "Financial Records", "Previous Filings", "Board Resolutions", "Statutory Registers"],
    timeline: "Varies by Service",
  },
  "business-formation": {
    title: "Business Formation Services",
    description: "Start your business with the right legal structure. We help you choose and register the best entity for your needs.",
    price: "₹999 onwards",
    features: ["Expert Guidance", "All Entity Types", "Quick Registration", "Complete Documentation", "Post-Registration Support", "Compliance Setup"],
    documents: ["ID Proof", "Address Proof", "PAN Card", "Business Details", "Partner/Director Details", "Registered Office Proof"],
    timeline: "7-15 Working Days",
  },
  "registration": {
    title: "Business Registration Services",
    description: "Complete registration services including GST, MSME, FSSAI, and other licenses required for your business operations.",
    price: "₹499 onwards",
    features: ["GST Registration", "MSME/Udyam", "FSSAI License", "IEC Code", "Shop License", "Professional Tax"],
    documents: ["Business Registration", "ID Proof", "Address Proof", "Bank Details", "Business Category", "Photos"],
    timeline: "1-30 Days",
  },
  "gst-advisory": {
    title: "GST Advisory Services",
    description: "Expert GST advisory services for compliance, planning, and optimization of your GST structure.",
    price: "₹4,999",
    features: ["GST Planning", "Compliance Review", "ITC Optimization", "Audit Support", "Notice Handling", "Expert Consultation"],
    documents: ["GST Returns", "Business Documents", "Financial Statements", "Previous Notices", "ITC Details", "Compliance Reports"],
    timeline: "Ongoing Service",
  },
  "gst-individuals": {
    title: "GST for Individuals",
    description: "GST registration and filing services for individual professionals, freelancers, and service providers.",
    price: "₹1,499",
    features: ["Easy Registration", "Quarterly Filing", "ITC Claims", "Compliance Support", "Expert Guidance", "Affordable Pricing"],
    documents: ["PAN Card", "Aadhaar Card", "Address Proof", "Bank Details", "Service Details", "Photos"],
    timeline: "3-5 Working Days",
  },
  "compliance-packages": {
    title: "Compliance Packages",
    description: "Comprehensive compliance packages tailored for startups, SMEs, and large enterprises to ensure complete regulatory compliance.",
    price: "₹4,999",
    features: ["All Filings Covered", "Expert Support", "Deadline Tracking", "Penalty Protection", "Audit Support", "Custom Solutions"],
    documents: ["Company Registration", "Financial Statements", "Director Details", "Previous Filings", "Board Minutes", "Shareholder Register"],
    timeline: "Throughout Year",
  },
  "prof-tax": {
    title: "Professional Tax Registration",
    description: "Professional Tax registration and compliance for employers and professionals as per state regulations.",
    price: "₹999",
    features: ["State Compliance", "Employee Coverage", "Monthly Deduction", "Annual Returns", "Expert Filing", "Penalty Avoidance"],
    documents: ["Business Registration", "Employee Details", "Salary Records", "PAN Card", "Address Proof", "Bank Details"],
    timeline: "5-7 Working Days",
  },
};

const ServiceDetail = () => {
  const { slug } = useParams<{ slug: string }>();
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", phone: "", email: "" });

  const service = serviceDetails[slug || ""] || {
    title: "Service",
    description: "Comprehensive legal services for your business needs.",
    price: "Contact Us",
    features: ["Expert Assistance", "Quick Processing", "Affordable Pricing", "Online Process"],
    documents: ["ID Proof", "Address Proof", "Business Documents"],
    timeline: "Varies",
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Request Submitted!",
      description: "Our team will contact you within 24 hours.",
    });
    setFormData({ name: "", phone: "", email: "" });
  };

  return (
    <div className="min-h-screen bg-background">
      <TopBar />
      <Navbar />

      <main>
        {/* Hero */}
        <section className="bg-navy py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-primary-foreground mb-4">
              {service.title}
            </h1>
            <p className="text-gold text-xl font-semibold">
              Starting at {service.price}
            </p>
          </div>
        </section>

        <section className="py-16">
          <div className="container mx-auto px-4">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
              {/* Main Content */}
              <div className="lg:col-span-2">
                <p className="text-muted-foreground text-lg mb-8 leading-relaxed">
                  {service.description}
                </p>

                {/* Features */}
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6">
                    Key Benefits
                  </h2>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {service.features.map((feature) => (
                      <div key={feature} className="flex items-center gap-3 p-4 bg-cream rounded-lg">
                        <CheckCircle className="w-5 h-5 text-gold flex-shrink-0" />
                        <span className="text-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Documents */}
                <div className="mb-12">
                  <h2 className="text-2xl font-serif font-bold text-foreground mb-6 flex items-center gap-3">
                    <FileText className="w-6 h-6 text-navy" />
                    Documents Required
                  </h2>
                  <ul className="space-y-3">
                    {service.documents.map((doc) => (
                      <li key={doc} className="flex items-center gap-3 text-muted-foreground">
                        <div className="w-2 h-2 bg-gold rounded-full" />
                        {doc}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Timeline */}
                <div className="flex items-center gap-4 p-6 bg-navy/5 rounded-xl">
                  <Clock className="w-8 h-8 text-navy" />
                  <div>
                    <h3 className="font-semibold text-foreground">Estimated Timeline</h3>
                    <p className="text-muted-foreground">{service.timeline}</p>
                  </div>
                </div>
              </div>

              {/* Sidebar Form */}
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-card rounded-2xl p-6 shadow-elevated border border-border">
                  <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                    Get Started Today
                  </h3>
                  <p className="text-muted-foreground text-sm mb-6">
                    Fill the form below and our expert will call you back
                  </p>
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <Input
                      placeholder="Your Name"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      required
                    />
                    <Input
                      type="tel"
                      placeholder="Phone Number"
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      required
                    />
                    <Input
                      type="email"
                      placeholder="Email Address"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      required
                    />
                    <Button variant="gold" className="w-full" size="lg">
                      Get Free Consultation
                    </Button>
                  </form>

                  <div className="mt-6 pt-6 border-t border-border">
                    <div className="flex items-center gap-3 text-sm">
                      <Phone className="w-5 h-5 text-gold" />
                      <div>
                        <p className="text-muted-foreground">Or call us directly</p>
                        <a href="tel:+917470672478" className="font-semibold text-navy">
                          +91 7470672478
                        </a>
                      </div>
                    </div>
                  </div>

                  <div className="mt-4 flex items-center gap-2 text-xs text-muted-foreground">
                    <Shield className="w-4 h-4" />
                    <span>Your information is 100% secure</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <FloatingButtons />
    </div>
  );
};

export default ServiceDetail;
