"use client"

import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { FaTruck, FaBox, FaWarehouse, FaGlobe, FaFileAlt, FaPhone, FaMailBulk, FaMapMarkerAlt, FaFacebook, FaTwitter, FaLinkedin, FaInstagram, FaRobot, FaTimes } from "react-icons/fa"
import { MdMenu } from "react-icons/md"

import Logo from "../images/rise-cargo.png"

export default function RiseCargoLogistics() {
  const [isOpen, setIsOpen] = useState(false)
  const [isAIOpen, setIsAIOpen] = useState(false)
  const [message, setMessage] = useState("")
  const [chatHistory, setChatHistory] = useState<{type: 'user' | 'ai', content: string}[]>([])

  const handleSendMessage = () => {
    if (!message.trim()) return

    // Add user message to chat
    setChatHistory(prev => [...prev, {type: 'user', content: message}])
    
    // Simulate AI response - replace with actual AI integration
    setTimeout(() => {
      setChatHistory(prev => [...prev, {
        type: 'ai', 
        content: "Thanks for your message! I'm a demo AI assistant. In the future, I'll be able to help you with questions about Rise Cargo Logistics."
      }])
    }, 1000)

    setMessage("")
  }

  return (
    <div className="flex flex-col min-h-screen bg-white">
      <header className="bg-white text-gray-800 py-4 sticky top-0 z-20 shadow-sm">
        <div className="container mx-auto px-4 md:px-20 flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <a href="/" className="text-2xl font-bold text-[#e91a34]">
              <img src={Logo.src} alt="Rise Cargo" className="h-8 w-auto" />
            </a>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a href="#about" className="text-sm font-medium hover:text-[#e91a34] transition-colors">About</a>
            <a href="#services" className="text-sm font-medium hover:text-[#e91a34] transition-colors">Services</a>
            <a href="#team" className="text-sm font-medium hover:text-[#e91a34] transition-colors">Our Team</a>
            <a href="#contact" className="text-sm font-medium hover:text-[#e91a34] transition-colors">Contact</a>
          </nav>
          <Sheet open={isOpen} onOpenChange={setIsOpen}>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="md:hidden">
                <MdMenu className="h-6 w-6" />
              </Button>
            </SheetTrigger>
            <SheetContent side="right" className="w-[300px] sm:w-[400px]">
              <nav className="flex flex-col space-y-4 mt-6">
                <a href="#about" className="text-lg" onClick={() => setIsOpen(false)}>About</a>
                <a href="#services" className="text-lg" onClick={() => setIsOpen(false)}>Services</a>
                <a href="#team" className="text-lg" onClick={() => setIsOpen(false)}>Our Team</a>
                <a href="#contact" className="text-lg" onClick={() => setIsOpen(false)}>Contact</a>
              </nav>
            </SheetContent>
          </Sheet>
        </div>
      </header>

      <main className="flex-grow">
      {/* AI Assistant Floating Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {isAIOpen ? (
          <div className="bg-white rounded-lg shadow-xl w-80 h-96 flex flex-col">
            <div className="p-4 bg-[#e91a34] text-white rounded-t-lg flex justify-between items-center">
              <div className="flex items-center">
                <FaRobot className="mr-2" />
                <span>AI Assistant</span>
              </div>
              <Button 
                variant="ghost" 
                size="icon" 
                onClick={() => setIsAIOpen(false)}
                className="text-white hover:text-gray-200"
              >
                <FaTimes />
              </Button>
            </div>
            <div className="flex-1 p-4 overflow-y-auto">
              {chatHistory.map((msg, idx) => (
                <div key={idx} className={`mb-4 ${msg.type === 'user' ? 'text-right' : 'text-left'}`}>
                  <div className={`inline-block p-2 rounded-lg ${
                    msg.type === 'user' ? 'bg-[#e91a34] text-white' : 'bg-gray-100'
                  }`}>
                    {msg.content}
                  </div>
                </div>
              ))}
            </div>
            <div className="p-4 border-t">
              <div className="flex gap-2">
                <Input 
                  value={message}
                  onChange={(e) => setMessage(e.target.value)}
                  placeholder="Type your message..."
                  onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                />
                <Button onClick={handleSendMessage} className="bg-[#e91a34] text-white">
                  Send
                </Button>
              </div>
            </div>
          </div>
        ) : (
          <Button 
            onClick={() => setIsAIOpen(true)}
            className="bg-[#e91a34] text-white rounded-full w-14 h-14 flex items-center justify-center hover:bg-[#a51d34]"
          >
            <FaRobot className="h-6 w-6" />
          </Button>
        )}
      </div>

      <section className="relative overflow-hidden min-h-screen flex items-center">
          <div className="absolute inset-0">
            <img 
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80" 
              alt="Logistics background" 
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-r from-black to-transparent opacity-70"></div>
          </div>
          <div className="container mx-auto px-4 md:px-20 relative z-10">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 leading-tight text-white animate-fade-in-up">
                Your Trusted Logistics Partner
              </h1>
              <p className="text-xl mb-8 text-gray-200 leading-relaxed animate-fade-in-up animation-delay-200">
                Efficient solutions for all your cargo needs, from custom clearing to global distribution
              </p>
              <Button 
                size="lg" 
                className="bg-[#e91a34] text-white hover:bg-[#a51d34] transition-all duration-300 ease-in-out transform hover:scale-105 animate-fade-in-up animation-delay-400" 
                asChild
              >
                <a href="#contact">Get a Quote</a>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-20">
            <div className="grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
              <div>
                <h3 className="text-4xl font-bold mb-2 text-[#e91a34]">200+</h3>
                <p className="text-lg text-gray-600">Clients Worldwide</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2 text-[#e91a34]">50+</h3>
                <p className="text-lg text-gray-600">Countries Served</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2 text-[#e91a34]">1000+</h3>
                <p className="text-lg text-gray-600">Shipments Delivered</p>
              </div>
              <div>
                <h3 className="text-4xl font-bold mb-2 text-[#e91a34]">99%</h3>
                <p className="text-lg text-gray-600">Customer Satisfaction</p>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-20">
            <div className="max-w-3xl mx-auto text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-900">About Rise Cargo Logistics</h2>
              <div className="w-16 h-1 bg-[#e91a34] mx-auto mb-6"></div>
              <p className="text-lg text-gray-600 leading-relaxed mb-8">
                Rise Cargo Logistics is a leading provider of comprehensive logistics solutions. With years of experience and a global network, we specialize in streamlining your supply chain and ensuring your cargo reaches its destination efficiently and securely.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                Our team of experts is dedicated to providing personalized service, innovative solutions, and unparalleled support for businesses of all sizes. From local deliveries to international shipments, we've got you covered.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg shadow-sm">
              <h3 className="text-2xl font-semibold mb-6 text-center text-gray-900">Why Choose Us?</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                <FeatureCard
                  icon={<FaBox className="h-6 w-6 text-[#e91a34]" />}
                  title="Global Network Coverage"
                  description="Extensive reach across continents for seamless logistics."
                />
                <FeatureCard
                  icon={<FaPhone className="h-6 w-6 text-[#e91a34]" />}
                  title="24/7 Customer Support"
                  description="Round-the-clock assistance for all your logistics needs."
                />
                <FeatureCard
                  icon={<FaGlobe className="h-6 w-6 text-[#e91a34]" />}
                  title="Advanced Tracking Technology"
                  description="Real-time updates on your shipments' location and status."
                />
                <FeatureCard
                  icon={<FaFileAlt className="h-6 w-6 text-[#e91a34]" />}
                  title="Customized Logistics Solutions"
                  description="Tailored services to meet your specific business requirements."
                />
                <FeatureCard
                  icon={<FaWarehouse className="h-6 w-6 text-[#e91a34]" />}
                  title="Eco-friendly Shipping Options"
                  description="Sustainable logistics solutions for a greener future."
                />
                <FeatureCard
                  icon={<FaGlobe className="h-6 w-6 text-[#e91a34]" />}
                  title="Competitive Pricing"
                  description="Cost-effective solutions without compromising on quality."
                />
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Services</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <ServiceCard
                icon={<FaFileAlt className="h-10 w-10 text-[#e91a34]" />}
                title="Custom Clearing"
                description="Streamlined customs clearance for smooth import and export processes, ensuring compliance with local regulations."
                image="https://images.unsplash.com/photo-1578575437130-527eed3abbec?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              <ServiceCard
                icon={<FaWarehouse className="h-10 w-10 text-[#e91a34]" />}
                title="Warehousing"
                description="Secure storage solutions for your goods with efficient inventory management and distribution services."
                image="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              <ServiceCard
                icon={<FaTruck className="h-10 w-10 text-[#e91a34]" />}
                title="Freight Forwarding"
                description="Reliable transportation services for domestic and international shipments via air, sea, and land."
                image="https://images.unsplash.com/photo-1501700493788-fa1a4fc9fe62?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              <ServiceCard
                icon={<FaBox className="h-10 w-10 text-[#e91a34]" />}
                title="Package Distribution"
                description="Fast and accurate distribution of packages to their final destinations, with real-time tracking capabilities."
                image="https://images.unsplash.com/photo-1566576912321-d58ddd7a6088?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              <ServiceCard
                icon={<FaBox className="h-10 w-10 text-[#e91a34]" />}
                title="Shipment Consolidation"
                description="Cost-effective solutions for combining multiple shipments into one, optimizing space and reducing expenses."
                image="https://images.unsplash.com/photo-1580674285054-bed31e145f59?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
              <ServiceCard
                icon={<FaGlobe className="h-10 w-10 text-[#e91a34]" />}
                title="Imports and Exports"
                description="Comprehensive support for all your import and export requirements, including documentation and compliance assistance."
                image="https://images.unsplash.com/photo-1494412574643-ff11b0a5c1c3?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80"
              />
            </div>
          </div>
        </section>

        <section id="team" className="py-20 bg-gray-50">
          <div className="container mx-auto px-4 md:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Our Team</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
              <TeamMember
                name="Innocent Kalua"
                position="Director"
                image="https://sas.icta.go.ke/images/user-128.png"
              />
              <TeamMember
                name="Chancy Mkwapatila"
                position="Clearing Agent"
                image="https://sas.icta.go.ke/images/user-128.png"
              />
              <TeamMember
                name="Mary Chikuse"
                position="Clearing Agent"
                image="https://sas.icta.go.ke/images/user-128.png"
              />
             
              <TeamMember
                name="Martha Kalua"
                position="Human Resource"
                image="https://sas.icta.go.ke/images/user-128.png"
              />
              <TeamMember
                name="Wizdom Byson"
                position="Clearing Agent"
                image="https://sas.icta.go.ke/images/user-128.png"
              />
            </div>
          </div>
        </section>

        <section id="contact" className="py-20 bg-white">
          <div className="container mx-auto px-4 md:px-20">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12 text-gray-900">Contact Us</h2>
            <div className="grid md:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="text-gray-900">Get a Quote</CardTitle>
                </CardHeader>
                <CardContent>
                  <form className="space-y-4">
                    <Input placeholder="Your Name" />
                    <Input type="email" placeholder="Your Email" />
                    <Input placeholder="Subject" />
                    <Textarea placeholder="Your Message" />
                    <Button type="submit" className="w-full bg-[#e91a34] text-white hover:bg-[#a51d34]">Send Message</Button>
                  </form>
                </CardContent>
              </Card>
              <div>
                <h3 className="text-2xl font-semibold mb-4 text-gray-900">Our Office</h3>
                <div className="space-y-4">
                  <p className="flex items-center"><FaMapMarkerAlt className="mr-2 h-5 w-5 text-[#e91a34]" /> Kanengo, Tobacco Commision Building, First Floor, First Room </p>
                  <p className="flex items-center"><FaPhone className="mr-2 h-5 w-5 text-[#e91a34]" /> (+265) 884 611 425  | (+265) 997 052  913</p>
                  <p className="flex items-center"><FaMailBulk className="mr-2 h-5 w-5 text-[#e91a34]" /> risecargologistics@gmail.com | innocentkalua94@gmail.com</p>
                </div>
                <div className="mt-8">
                  <h4 className="text-xl font-semibold mb-2 text-gray-900">Business Hours</h4>
                  <p>Monday - Friday: 7:30 AM - 4:30 PM</p>
                  <p>Saturday: 8:00 AM - 12:00 PM</p>
                  <p>Sunday: Closed</p>
                </div>
                <div className="mt-8">
                  <img src="https://images.unsplash.com/photo-1497366216548-37526070297c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80" alt="Office" className="rounded-lg shadow-sm" />
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-gray-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="text-xl font-semibold mb-4">Rise Cargo</h3>
              <p className="text-sm text-gray-400">Rise Cargo Logistics is your trusted partner for all your shipping and logistics needs. We provide efficient, reliable, and innovative solutions worldwide.</p>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Quick Links</h3>
              <ul className="space-y-2">
                <li><a href="#about" className="text-gray-400 hover:text-white transition-colors">About Us</a></li>
                <li><a href="#services" className="text-gray-400 hover:text-white transition-colors">Our Services</a></li>
                <li><a href="#team" className="text-gray-400 hover:text-white transition-colors">Our Team</a></li>
                <li><a href="#contact" className="text-gray-400 hover:text-white transition-colors">Contact Us</a></li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Contact Info</h3>
              <ul className="space-y-2 text-gray-400">
                <li className="flex items-center"><FaMapMarkerAlt className="mr-2 h-4 w-4" /> Kanengo, Tobacco Commision Building, First Floor, First Room</li>
                <li className="flex items-center"><FaPhone className="mr-2 h-4 w-4" /> (+265) 884 611 425 | (+265) 997 052 913</li>
                <li className="flex items-center"><FaMailBulk className="mr-2 h-4 w-4" /> risecargologistics@gmail.com</li>
              </ul>
            </div>
            <div>
              <h3 className="text-xl font-semibold mb-4">Follow Us</h3>
              <div className="flex space-x-4">
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaFacebook /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaTwitter /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaLinkedin /></a>
                <a href="#" className="text-gray-400 hover:text-white transition-colors"><FaInstagram /></a>
              </div>
            </div>
          </div>
          <div className="mt-8 pt-8 border-t border-gray-800 text-center text-gray-400">
            <p>&copy; 2024 Rise Cargo Logistics. All rights reserved.</p>
            <p>Developed by <a href="https://ictaidmalawi.com" className="hover:text-white transition-colors">ICTAID Malawi</a></p>
          </div>
        </div>
      </footer>
    </div>
  )
}

function ServiceCard({ icon, title, description, image }: { icon: React.ReactNode, title: string, description: string, image: string }) {
  return (
    <Card className="overflow-hidden hover:shadow-md transition-shadow">
      <img src={image} alt={title} className="w-full h-48 object-cover" />
      <CardHeader>
        <CardTitle className="flex items-center space-x-2 text-gray-900">
          {icon}
          <span>{title}</span>
        </CardTitle>
      </CardHeader>
      <CardContent>
        <p className="text-gray-600">{description}</p>
      </CardContent>
    </Card>
  )
}

function TeamMember({ name, position, image }: { name: string, position: string, image: string }) {
  return (
    <div className="text-center">
      <img src={image} alt={name} className="w-40 h-40 rounded-full mx-auto mb-4 object-cover" />
      <h3 className="text-xl font-semibold text-gray-900">{name}</h3>
      <p className="text-[#e91a34]">{position}</p>
    </div>
  )
}

function FeatureCard({ icon, title, description }: { icon: React.ReactNode, title: string, description: string }) {
  return (
    <div className="flex items-start">
      <div className="mr-4 flex-shrink-0 mt-1">{icon}</div>
      <div>
        <h4 className="font-semibold mb-2 text-gray-900">{title}</h4>
        <p className="text-gray-600">{description}</p>
      </div>
    </div>
  )
}