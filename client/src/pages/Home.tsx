import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { apiRequest } from "../lib/queryClient";
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
    <div className="min-h-screen bg-white">
      <nav className="sticky top-0 z-50 bg-white/95 backdrop-blur border-b">
        <div className="container mx-auto px-6 py-4 flex items-center justify-between gap-4">
          <a href="/" className="flex-shrink-0">
            <img src={logoCP} alt="Central Plaza" className="h-16 md:h-20" />
          </a>
          <div className="hidden md:flex items-center gap-6">
            <a href="#residences" className="hover:text-primary transition-colors">Residences</a>
            <a href="#amenities" className="hover:text-primary transition-colors">Amenities</a>
            <a href="#gallery" className="hover:text-primary transition-colors">Gallery</a>
            <a href="#neighborhood" className="hover:text-primary transition-colors">Neighborhood</a>
            <a href="#contact" className="hover:text-primary transition-colors">Contact</a>
          </div>
          <div className="flex items-center gap-3">
            <a 
              href="https://signin.managebuilding.com/Resident/portal/global-login"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 border border-primary text-primary rounded font-medium hover:bg-primary/10 transition-colors"
              data-testid="link-resident-portal"
            >
              Resident Portal
            </a>
            <a 
              href="https://centralplaza.managebuilding.com/Resident/rental-application/new"
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-primary text-white rounded font-medium hover:bg-primary/90 transition-colors"
              data-testid="link-apply-online"
            >
              Apply Online
            </a>
          </div>
        </div>
      </nav>

      <section 
        className="relative h-[80vh] flex items-center justify-center text-white bg-center"
        style={{ backgroundImage: `url(${backgroundImg})`, backgroundSize: '100% auto', backgroundRepeat: 'no-repeat', backgroundColor: '#1a1a1a' }}
      >
        <div className="absolute inset-0 bg-black/40" />
        <div className="relative z-10 text-center max-w-4xl px-6">
          <h2 className="text-5xl md:text-7xl font-bold mb-6">Modern Loft Living</h2>
          <p className="text-xl md:text-2xl mb-8 opacity-90">
            Experience the perfect blend of historic charm and contemporary comfort in downtown Temple, Texas
          </p>
          <a href="#contact" className="inline-block bg-secondary text-black px-8 py-4 rounded font-semibold hover:bg-secondary/90 transition-colors">
            Schedule a Tour
          </a>
        </div>
      </section>

      <section id="residences" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Our Residences</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            19 thoughtfully designed residential units featuring modern amenities in a beautifully renovated historic building
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {[
              { title: "Studio", size: "650 sq ft", price: "$1,250/mo" },
              { title: "2 Bedroom", size: "1,200 sq ft", price: "$1,600/mo" },
              { title: "3 Bedroom", size: "1,250 sq ft", price: "$2,000/mo" },
            ].map((unit) => (
              <div key={unit.title} className="bg-muted/30 rounded-lg p-8 hover:shadow-lg transition-shadow">
                <h4 className="text-2xl font-semibold mb-2">{unit.title}</h4>
                <p className="text-muted-foreground mb-4">{unit.size}</p>
                <p className="text-primary font-bold text-xl">{unit.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="amenities" className="py-20 px-6 bg-muted/30">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-12">Amenities</h3>
          <div className="grid md:grid-cols-4 gap-6">
            {[
              "Modern Kitchens",
              "In-Unit Laundry",
              "Central A/C",
              "Pet Friendly",
              "Secure Entry",
              "On-Site Parking",
              "On-Site Gym",
              "Free WiFi",
            ].map((amenity) => (
              <div key={amenity} className="bg-white rounded-lg p-6 text-center shadow-sm">
                <p className="font-medium">{amenity}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="gallery" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">Gallery</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Take a closer look at our beautifully renovated spaces
          </p>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
            {galleryImages.map((image, index) => (
              <div 
                key={index} 
                className="relative overflow-hidden rounded-lg group"
                data-testid={`gallery-image-${index}`}
              >
                <img 
                  src={image.src} 
                  alt={image.alt}
                  className="w-full h-48 md:h-64 object-cover transition-transform duration-300 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end">
                  <div className="p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <p className="font-medium text-sm">{image.alt}</p>
                    <p className="text-xs text-white/70">{image.category}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="neighborhood" className="py-20 px-6">
        <div className="container mx-auto">
          <h3 className="text-4xl font-bold text-center mb-4">The Neighborhood</h3>
          <p className="text-center text-muted-foreground mb-12 max-w-2xl mx-auto">
            Walk to restaurants, shops, and entertainment in historic downtown Temple
          </p>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h4 className="text-2xl font-semibold mb-4">Walkable Urban Living</h4>
              <ul className="space-y-3 text-muted-foreground">
                <li>• Steps from local restaurants and cafes</li>
                <li>• Walking distance to Temple Train Station</li>
                <li>• Near downtown parks and recreation</li>
                <li>• Close to Baylor Scott & White Hospital</li>
                <li>• Easy access to I-35</li>
              </ul>
            </div>
            <div className="rounded-lg h-64 overflow-hidden">
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

      <section id="contact" className="py-20 px-6 bg-primary text-white">
        <div className="container mx-auto max-w-2xl">
          <h3 className="text-4xl font-bold text-center mb-4">Get In Touch</h3>
          <p className="text-center opacity-90 mb-12">
            Schedule a tour or ask us any questions about our available units
          </p>
          
          {submitted ? (
            <div className="bg-white/10 rounded-lg p-8 text-center">
              <p className="text-xl font-semibold">Thank you for your inquiry!</p>
              <p className="mt-2 opacity-90">We'll get back to you within 24 hours.</p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="text"
                  placeholder="Your Name"
                  required
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
                <input
                  type="email"
                  placeholder="Email Address"
                  required
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
              <div className="grid md:grid-cols-2 gap-6">
                <input
                  type="tel"
                  placeholder="Phone Number"
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                />
                <select
                  className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 text-white focus:outline-none focus:ring-2 focus:ring-secondary"
                  value={formData.unitType}
                  onChange={(e) => setFormData({ ...formData, unitType: e.target.value })}
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
                className="w-full px-4 py-3 rounded bg-white/10 border border-white/20 placeholder:text-white/60 focus:outline-none focus:ring-2 focus:ring-secondary resize-none"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
              <button
                type="submit"
                disabled={mutation.isPending}
                className="w-full bg-secondary text-black py-4 rounded font-semibold hover:bg-secondary/90 transition-colors disabled:opacity-50"
              >
                {mutation.isPending ? "Sending..." : "Send Message"}
              </button>
              {mutation.isError && (
                <p className="text-red-300 text-center">Something went wrong. Please try again.</p>
              )}
            </form>
          )}
        </div>
      </section>

      <footer className="bg-black text-white py-12 px-6">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            <div>
              <h4 className="text-xl font-bold mb-4">Central Plaza</h4>
              <p className="text-white/70">103 E Central Ave</p>
              <p className="text-white/70">Temple, Texas 76501</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2 text-white/70">
                <a href="#residences" className="block hover:text-white">Residences</a>
                <a href="#amenities" className="block hover:text-white">Amenities</a>
                <a href="#neighborhood" className="block hover:text-white">Neighborhood</a>
              </div>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-white/70">velan@vmrpropertiesgroup.com</p>
            </div>
          </div>
          <div className="border-t border-white/20 mt-8 pt-8 text-center text-white/50">
            <p>&copy; {new Date().getFullYear()} Central Plaza. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
