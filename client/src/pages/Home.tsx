import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";
import { UtensilsCrossed, WashingMachine, Thermometer, PawPrint, Lock, Car, Dumbbell, Wifi } from "lucide-react";
import logoCP from "@assets/logoCP_1765576810211.avif";
import backgroundImg from "@assets/IMG_4329_1765578406188.jpg";
import gallery1 from "@assets/IMG_4329_1765578768782.jpg";
import gallery2 from "@assets/IMG_4334_1765578768783.jpg";
import gallery3 from "@assets/IMG_4376_1765578768777.jpg";
import gallery4 from "@assets/IMG_4439_1765578768777.jpg";
import gallery5 from "@assets/IMG_4342_1765578768783.jpg";
import gallery6 from "@assets/IMG_4343_1765578768783.jpg";
import gallery7 from "@assets/IMG_4395_1765578768779.jpg";
import gallery8 from "@assets/IMG_4397_1765578768779.jpg";
import gallery9 from "@assets/IMG_4123_1765578768784.jpg";
import gallery10 from "@assets/IMG_4225_1765578768784.jpg";
import gallery11 from "@assets/IMG_4230_1765578768782.jpg";
import gallery12 from "@assets/IMG_4407_1765578768780.jpg";
import gallery13 from "@assets/IMG_4415_1765578768780.jpg";
import gallery14 from "@assets/IMG_4423_1765578768781.jpg";
import gallery15 from "@assets/IMG_4124_1765578768784.jpg";

const galleryImages = [
  { src: gallery1, alt: "Building Exterior", category: "Exterior" },
  { src: gallery2, alt: "Downtown Temple Street View", category: "Neighborhood" },
  { src: gallery3, alt: "Aerial View of Downtown", category: "Neighborhood" },
  { src: gallery4, alt: "Community Garden with String Lights", category: "Amenities" },
  { src: gallery5, alt: "Open Concept Living Area", category: "Living Space" },
  { src: gallery6, alt: "Modern Kitchen with Island", category: "Kitchen" },
  { src: gallery7, alt: "Kitchen with Stainless Appliances", category: "Kitchen" },
  { src: gallery8, alt: "Full Kitchen with Modern Cabinets", category: "Kitchen" },
  { src: gallery9, alt: "Galley Kitchen with Peninsula", category: "Kitchen" },
  { src: gallery10, alt: "Bedroom with Downtown View", category: "Bedroom" },
  { src: gallery11, alt: "Modern Bedroom with LED Lighting", category: "Bedroom" },
  { src: gallery12, alt: "Bedroom with Large Windows", category: "Bedroom" },
  { src: gallery13, alt: "Bathroom Vanity with LED Mirror", category: "Bathroom" },
  { src: gallery14, alt: "Bathroom with Tile Shower", category: "Bathroom" },
  { src: gallery15, alt: "Living Area with In-Unit Laundry", category: "Living Space" },
];

const amenities = [
  { name: "Modern Kitchens", icon: UtensilsCrossed },
  { name: "In-Unit Laundry", icon: WashingMachine },
  { name: "Central A/C", icon: Thermometer },
  { name: "Pet Friendly", icon: PawPrint },
  { name: "Secure Entry", icon: Lock },
  { name: "On-Site Parking", icon: Car },
  { name: "On-Site Gym", icon: Dumbbell },
  { name: "Free WiFi", icon: Wifi },
];

export default function Home() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    unitType: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const mutation = useMutation({
    mutationFn: async (data: typeof formData) => {
      const res = await apiRequest("POST", "/api/contact", data);
      return res.json();
    },
    onSuccess: () => {
      setSubmitted(true);
      setFormData({ name: "", email: "", phone: "", unitType: "", message: "" });
    },
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    mutation.mutate(formData);
  };

  return (
    <div className="min-h-screen bg-background">
      <nav className="sticky top-0 z-50 bg-white/98 backdrop-blur-md border-b border-border/50">
        <div className="container mx-auto px-6 lg:px-12 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex-shrink-0">
            <img src={logoCP} alt="Central Plaza" className="h-14 md:h-16" />
          </a>
          <div className="hidden lg:flex items-center gap-8">
            <a href="#residences" className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors">Residences</a>
            <a href="#amenities" className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors">Amenities</a>
            <a href="#gallery" className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors">Gallery</a>
            <a href="#neighborhood" className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors">Neighborhood</a>
            <a href="#contact" className="text-sm font-medium tracking-wide text-muted-foreground hover:text-foreground transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://signin.managebuilding.com/Resident/portal/global-login"
              target="_blank"
              rel="noopener noreferrer"
              className="hidden sm:inline-flex px-5 py-2.5 text-sm font-medium text-foreground border border-border rounded-md hover:bg-muted transition-colors"
              data-testid="link-resident-portal"
            >
              Resident Portal
            </a>
            <a 
              href="https://centralplaza.managebuilding.com/Resident/rental-application/new"
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 text-sm font-medium bg-secondary text-secondary-foreground rounded-md hover:bg-secondary/90 transition-colors"
              data-testid="link-apply-online"
            >
              Apply Online
            </a>
          </div>
        </div>
      </nav>

      <section 
        className="relative h-[85vh] flex items-center justify-center text-white"
        style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundColor: '#1a1a1a' }}
      >
        <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/40 to-black/60" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <p className="text-white/90 font-medium tracking-[0.3em] uppercase text-base mb-6">Welcome to Central Plaza</p>
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">Modern Loft Living</h1>
          <p className="text-lg md:text-xl mb-10 text-white/80 font-light max-w-2xl mx-auto leading-relaxed">
            Experience the perfect blend of historic charm and contemporary comfort in downtown Temple, Texas
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a href="#contact" className="inline-block bg-secondary text-secondary-foreground px-8 py-4 rounded-md font-medium hover:bg-secondary/90 transition-all">
              Schedule a Tour
            </a>
            <a href="#residences" className="inline-block border border-white/30 text-white px-8 py-4 rounded-md font-medium hover:bg-white/10 backdrop-blur-sm transition-all">
              View Residences
            </a>
          </div>
        </div>
      </section>

      <section id="residences" className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">Live in Style</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">Our Residences</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              19 thoughtfully designed residential units featuring modern amenities in a beautifully renovated historic building
            </p>
          </div>
          <div className="grid md:grid-cols-3 gap-6 lg:gap-8">
            {[
              { title: "Studio", size: "650 sq ft", price: "$1,250", desc: "Efficient urban living" },
              { title: "2 Bedroom", size: "1,200 sq ft", price: "$1,600", desc: "Spacious and bright" },
              { title: "3 Bedroom", size: "1,250 sq ft", price: "$2,000", desc: "Room for the whole family" },
            ].map((unit) => (
              <div key={unit.title} className="group bg-white border border-border rounded-md p-8 hover:border-secondary/50 hover:shadow-md transition-all duration-300">
                <p className="text-sm text-muted-foreground mb-2">{unit.desc}</p>
                <h3 className="text-2xl font-medium mb-4">{unit.title}</h3>
                <div className="flex items-baseline justify-between pt-4 border-t border-border">
                  <span className="text-muted-foreground text-sm">{unit.size}</span>
                  <div className="text-right">
                    <span className="text-2xl font-medium text-secondary">{unit.price}</span>
                    <span className="text-muted-foreground text-sm">/mo</span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="py-24 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">Everything You Need</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">Amenities</h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 lg:gap-8">
            {amenities.map((amenity) => (
              <div key={amenity.name} className="text-center p-6 rounded-md bg-white/5 hover:bg-white/10 transition-colors">
                <amenity.icon className="w-8 h-8 mx-auto mb-4 text-secondary" />
                <p className="font-medium text-sm">{amenity.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-24 px-6 lg:px-12">
        <div className="container mx-auto max-w-7xl">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">Take a Look</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">Gallery</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Take a closer look at our beautifully renovated spaces
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3 lg:gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-md group aspect-square"
                data-testid={`gallery-image-${index}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex items-end">
                  <div className="p-4 text-white">
                    <p className="font-medium text-sm">{image.alt}</p>
                    <p className="text-xs text-white/70">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="neighborhood" className="py-24 px-6 lg:px-12 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="text-center mb-16">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">Location</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">The Neighborhood</h2>
            <p className="text-muted-foreground max-w-2xl mx-auto leading-relaxed">
              Walk to restaurants, shops, and entertainment in historic downtown Temple
            </p>
          </div>
          <div className="grid md:grid-cols-2 gap-12 lg:gap-16 items-start">
            <div>
              <h3 className="text-2xl font-light mb-6">Walkable Urban Living</h3>
              <ul className="space-y-4">
                {[
                  "Steps from local restaurants and cafes",
                  "Walking distance to Temple Train Station",
                  "Near downtown parks and recreation",
                  "Close to Baylor Scott & White Hospital",
                  "Easy access to I-35"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="w-1.5 h-1.5 rounded-full bg-secondary mt-2 flex-shrink-0"></span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-md h-80 overflow-hidden shadow-lg">
              <iframe 
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3436.5!2d-97.3428!3d31.0984!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8645d3e5f0c7b8e5%3A0x1234567890!2s103+E+Central+Ave%2C+Temple%2C+TX+76501!5e0!3m2!1sen!2sus!4v1702400000000!5m2!1sen!2sus"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Central Plaza Location"
              />
            </div>
          </div>
        </div>
      </section>

      <section id="contact" className="py-24 px-6 lg:px-12 bg-primary text-primary-foreground">
        <div className="container mx-auto max-w-xl">
          <div className="text-center mb-12">
            <p className="text-secondary font-medium tracking-[0.2em] uppercase text-sm mb-4">Contact Us</p>
            <h2 className="text-3xl md:text-4xl font-light mb-6 tracking-tight">Get In Touch</h2>
            <p className="text-primary-foreground/80 leading-relaxed">
              Schedule a tour or ask us any questions about our available units
            </p>
          </div>
          
          {submitted ? (
            <div className="bg-white/10 rounded-md p-10 text-center">
              <p className="text-2xl font-light mb-2">Thank you for your inquiry!</p>
              <p className="text-primary-foreground/80">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-5">
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3.5 rounded-md bg-white/5 border border-white/10 placeholder:text-white/40 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  data-testid="input-name"
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3.5 rounded-md bg-white/5 border border-white/10 placeholder:text-white/40 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  data-testid="input-email"
                />
              </div>
              <div className="grid md:grid-cols-2 gap-5">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3.5 rounded-md bg-white/5 border border-white/10 placeholder:text-white/40 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  data-testid="input-phone"
                />
                <select
                  className="w-full px-4 py-3.5 rounded-md bg-white/5 border border-white/10 text-white/80 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all"
                  value={formData.unitType}
                  onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
                  data-testid="select-unit-type"
                >
                  <option value="" className="text-black">Interested In...</option>
                  <option value="studio" className="text-black">Studio</option>
                  <option value="1bed" className="text-black">1 Bedroom</option>
                  <option value="2bed" className="text-black">2 Bedroom</option>
                  <option value="retail" className="text-black">Retail Space</option>
                </select>
              </div>
              <textarea
                placeholder="Your Message"
                required
                rows={4}
                className="w-full px-4 py-3.5 rounded-md bg-white/5 border border-white/10 placeholder:text-white/40 focus:outline-none focus:border-secondary/50 focus:bg-white/10 transition-all resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                data-testid="input-message"
              />
              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-secondary text-secondary-foreground py-4 rounded-md font-medium hover:bg-secondary/90 transition-all disabled:opacity-50"
                data-testid="button-submit"
              >
                {mutation.isPending ? "Sending..." : "Send Message"}
              </button>
              {mutation.isError && (
                <p className="text-red-300 text-center text-sm">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </section>

      <footer className="bg-foreground text-background py-16 px-6 lg:px-12">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-10 lg:gap-16">
            <div>
              <h4 className="text-lg font-medium mb-4">Central Plaza</h4>
              <p className="text-background/60 text-sm leading-relaxed">103 E Central Ave</p>
              <p className="text-background/60 text-sm">Temple, Texas 76501</p>
            </div>
            <div>
              <h4 className="text-sm font-medium tracking-wide uppercase mb-4">Quick Links</h4>
              <div className="space-y-3 text-background/60 text-sm">
                <a href="#residences" className="block hover:text-background transition-colors">Residences</a>
                <a href="#amenities" className="block hover:text-background transition-colors">Amenities</a>
                <a href="#gallery" className="block hover:text-background transition-colors">Gallery</a>
                <a href="#neighborhood" className="block hover:text-background transition-colors">Neighborhood</a>
              </div>
            </div>
            <div>
              <h4 className="text-sm font-medium tracking-wide uppercase mb-4">Contact</h4>
              <p className="text-background/60 text-sm">velan@vmrpropertiesgroup.com</p>
            </div>
          </div>
          <div className="border-t border-background/10 mt-12 pt-8 text-center text-background/40 text-sm">
            <p>&copy; {new Date().getFullYear()} Central Plaza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
