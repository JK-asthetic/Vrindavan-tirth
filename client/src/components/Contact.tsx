import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Phone, Mail, MapPin, MessageCircle } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    package: "",
    message: ""
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.phone) {
      toast({
        title: "Error",
        description: "Please fill in all required fields.",
        variant: "destructive"
      });
      return;
    }

    // Create WhatsApp message
    const message = `Hi, I'm interested in booking a tour.
    
Name: ${formData.name}
Email: ${formData.email}
Phone: ${formData.phone}
Package: ${formData.package || 'Not specified'}
Message: ${formData.message || 'None'}`;

    const whatsappUrl = `https://api.whatsapp.com/send/?phone=916395809345&text=${encodeURIComponent(message)}&type=phone_number&app_absent=0`;
    window.open(whatsappUrl, '_blank');

    toast({
      title: "Success",
      description: "Redirecting to WhatsApp to send your booking inquiry.",
    });

    // Reset form
    setFormData({
      name: "",
      email: "",
      phone: "",
      package: "",
      message: ""
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      content: "+91 6395809345",
      link: "tel:+916395809345"
    },
    {
      icon: Mail,
      title: "Email",
      content: "vrindavanguides@gmail.com",
      link: "mailto:vrindavanguides@gmail.com"
    },
    {
      icon: MapPin,
      title: "Location",
      content: "Vrindavan Dham, Mathura, Uttar Pradesh",
      link: null
    },
    {
      icon: MessageCircle,
      title: "WhatsApp",
      content: "Chat Now",
      link: "https://api.whatsapp.com/send/?phone=916395809345&text&type=phone_number&app_absent=0"
    }
  ];

  const quickLinks = [
    { name: "Tour Packages", id: "packages" },
    { name: "Our Services", id: "services" },
    { name: "Photo Gallery", id: "gallery" },
    { name: "About Us", id: "about" }
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="contact" className="py-20 bg-gradient-to-br from-dark-brown to-dark-brown/90 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Contact <span className="text-golden">Madhusudhan Sharam</span>
          </h2>
          <p className="text-xl text-white/80 max-w-3xl mx-auto">
            Ready to embark on your spiritual journey? Get in touch with us for bookings and inquiries
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div>
            <h3 className="text-2xl font-bold mb-8">Get in Touch</h3>
            
            <div className="space-y-6 mb-12">
              {contactInfo.map((info, index) => (
                <div key={index} className="flex items-center space-x-4">
                  <div className="bg-gradient-saffron w-12 h-12 rounded-full flex items-center justify-center">
                    <info.icon className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <div className="text-golden font-semibold">{info.title}</div>
                    {info.link ? (
                      <a 
                        href={info.link}
                        target={info.link.startsWith('http') ? '_blank' : undefined}
                        rel={info.link.startsWith('http') ? 'noopener noreferrer' : undefined}
                        className="text-lg hover:text-golden transition-colors"
                      >
                        {info.content}
                      </a>
                    ) : (
                      <div className="text-lg">{info.content}</div>
                    )}
                  </div>
                </div>
              ))}
            </div>

            <div>
              <h4 className="text-xl font-semibold mb-4 text-golden">Quick Links</h4>
              <div className="grid grid-cols-2 gap-4">
                {quickLinks.map((link, index) => (
                  <button 
                    key={index}
                    onClick={() => scrollToSection(link.id)}
                    className="text-left hover:text-golden transition-colors"
                  >
                    {link.name}
                  </button>
                ))}
              </div>
            </div>
          </div>

          <Card className="bg-white/10 backdrop-blur-sm border-white/20">
            <CardHeader>
              <CardTitle className="text-2xl font-bold text-white">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <Label htmlFor="name" className="block text-sm font-semibold mb-2 text-white">
                    Full Name *
                  </Label>
                  <Input
                    id="name"
                    type="text"
                    placeholder="Enter your full name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-golden"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="email" className="block text-sm font-semibold mb-2 text-white">
                    Email Address *
                  </Label>
                  <Input
                    id="email"
                    type="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-golden"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="phone" className="block text-sm font-semibold mb-2 text-white">
                    Phone Number *
                  </Label>
                  <Input
                    id="phone"
                    type="tel"
                    placeholder="Enter your phone number"
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-golden"
                    required
                  />
                </div>
                
                <div>
                  <Label htmlFor="package" className="block text-sm font-semibold mb-2 text-white">
                    Tour Package
                  </Label>
                  <Select value={formData.package} onValueChange={(value) => setFormData({ ...formData, package: value })}>
                    <SelectTrigger className="bg-white/20 border-white/30 text-white focus:border-golden">
                      <SelectValue placeholder="Select a package" />
                    </SelectTrigger>
                    <SelectContent className="bg-white border-gray-200">
                      <SelectItem value="1-day" className="text-dark-brown hover:bg-saffron/10">1 Day Vrindavan Tour</SelectItem>
                      <SelectItem value="3-day" className="text-dark-brown hover:bg-saffron/10">3 Day Vrindavan-Mathura-Barsana Tour</SelectItem>
                      <SelectItem value="84-kos" className="text-dark-brown hover:bg-saffron/10">Braj 84 Kos Yatra</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                
                <div>
                  <Label htmlFor="message" className="block text-sm font-semibold mb-2 text-white">
                    Message
                  </Label>
                  <Textarea
                    id="message"
                    placeholder="Tell us about your spiritual journey requirements"
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="bg-white/20 border-white/30 text-white placeholder-white/60 focus:border-golden"
                  />
                </div>
                
                <Button 
                  type="submit"
                  className="w-full bg-gradient-saffron text-white hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1"
                >
                  Send Booking Inquiry
                </Button>
              </form>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
