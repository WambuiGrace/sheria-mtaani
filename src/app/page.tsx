import Link from "next/link"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Users, TrendingUp, School, Handshake, Lightbulb, Heart, Check, MapPin, Mail, Phone } from 'lucide-react'

export default function Component() {
  return (
    <div className="min-h-screen bg-white">
      <div className="max-w-7xl mx-auto px-2 sm:px-6 lg:px-8">
        <header className="nax-w-5xl mx-auto px-4 py-6">
          <nav className="flex items-center justify-between">
            <Link href="/" className="text-2xl font-semibold text-green-600">
              Sheria Mtaani
            </Link>
            <div className="flex items-center gap-8">
              <Link href="#services" className="text-gray-600 hover:text-gray-900">
                Services
              </Link>
              <Link href="#portfolio" className="text-gray-600 hover:text-gray-900">
                Portfolio
              </Link>
              <Link href="#about" className="text-gray-600 hover:text-gray-900">
                About
              </Link>
              <Link href="#contact" className="text-gray-600 hover:text-gray-900">
                Contact
              </Link>
              {/* <Button className="bg-green-600 text-white hover:bg-green-700">
                CONTACT US
              </Button> */}
            </div>
          </nav>
        </header>
                {/* Home */}
        <main className="container mx-auto px-4">
          <section className="py-12">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h1 className="text-5xl font-bold leading-tight text-black">
                    <span className="block">Empower</span>
                    <span className="block">Communities</span>
                    <span className="block text-green-600">Foster Education</span>
                    <span className="block">Drive Change</span>
                  </h1>
                  <p className="text-gray-600 text-lg max-w-md">
                    Providing civic education, economic empowerment, and educational resources
                    to uplift communities nationwide.
                  </p>
                </div>
                <Button className="bg-green-600 text-white hover:bg-green-700 px-8 py-6 text-lg">
                  Join Us
                </Button>
              </div>

              <div className="relative">
                <div className="absolute -right-4 top-4 w-24 h-24 bg-green-100 rounded-full opacity-50" />
                <div className="absolute -left-4 bottom-4 w-32 h-32 bg-green-50 rounded-full opacity-50" />
                <div className="relative">
                  <Image
                    src="/images/image.png"
                    alt="Classical building with columns"
                    width={600}
                    height={800}
                    className="rounded-lg object-cover"
                    priority
                  />
                  <div className="absolute -bottom-2 -right-2 w-full h-full border-4 border-green-600 rounded-lg -z-10" />
                </div>
              </div>
            </div>
          </section>
                {/* Services */}
          <section id="services" className="py-20">
            <div className="text-center mb-16 space-y-4">
              <h2 className="text-4xl font-bold text-black">Our Core Services</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                At Sheria Mtaani, we are committed to creating lasting change through our comprehensive services designed to
                educate, empower, and enable. Join us in building a better society through the following initiatives:
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <Image
                src="/images/image.png"
                alt="Historical building facade"
                width={600}
                height={800}
                className="rounded-lg object-cover"
              />

              <div className="grid sm:grid-cols-2 gap-8">
                <div className="text-center space-y-4">
                  <div className="bg-blue-100 w-16 h-16 rounded-2xl mx-auto flex items-center justify-center">
                    <Users className="h-8 w-8 text-blue-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-black">Civic Education</h3>
                  <p className="text-gray-600">
                    We offer detailed civic education programs to enhance citizens' understanding of their rights and responsibilities within
                    the community.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="bg-orange-100 w-16 h-16 rounded-2xl mx-auto flex items-center justify-center">
                    <TrendingUp className="h-8 w-8 text-orange-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-black">Economic Empowerment</h3>
                  <p className="text-gray-600">
                    Our initiatives aim to boost economic independence by providing essential training and resources for
                    community development.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="bg-red-100 w-16 h-16 rounded-2xl mx-auto flex items-center justify-center">
                    <School className="h-8 w-8 text-red-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-black">Educational Support</h3>
                  <p className="text-gray-600">
                    We supply school equipment and resources tailored to the unique needs of students, ensuring they have the tools
                    required for academic success.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="bg-green-100 w-16 h-16 rounded-2xl mx-auto flex items-center justify-center">
                    <Handshake className="h-8 w-8 text-green-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-black">Partnerships</h3>
                  <p className="text-gray-600">
                    Collaborating with like-minded organizations and individuals to maximize our impact and foster societal
                    transformation.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="bg-gray-100 w-16 h-16 rounded-2xl mx-auto flex items-center justify-center">
                    <Lightbulb className="h-8 w-8 text-gray-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-black">Awareness Campaigns</h3>
                  <p className="text-gray-600">
                    We conduct awareness campaigns on various social issues to educate and inform the public, promoting a more
                    enlightened society.
                  </p>
                </div>

                <div className="text-center space-y-4">
                  <div className="bg-purple-100 w-16 h-16 rounded-2xl mx-auto flex items-center justify-center">
                    <Heart className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="font-semibold text-xl text-black">Community Outreach</h3>
                  <p className="text-gray-600">
                    Engaging with communities directly to understand their needs and deliver targeted support where it's most
                    needed.
                  </p>
                </div>
              </div>
            </div>
          </section>
                {/* Mission */}
          <section className="py-20">
            <div className="relative bg-green-600 rounded-3xl overflow-hidden">
              <div className="absolute inset-0">
                <div className="absolute inset-0 bg-green-600 mix-blend-multiply" />
                <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-green-900/50" />
                <div className="absolute top-0 right-0 w-96 h-96 bg-green-500 rounded-full -translate-y-1/2 translate-x-1/2 opacity-50" />
                <div className="absolute bottom-0 left-0 w-96 h-96 bg-green-500 rounded-full translate-y-1/2 -translate-x-1/2 opacity-50" />
              </div>
              
              <div className="relative grid lg:grid-cols-2 gap-8 items-center p-8 lg:p-12">
                <div className="space-y-6">
                  <p className="text-green-100 text-lg font-medium">Take Action</p>
                  <h2 className="text-4xl lg:text-5xl font-bold text-white">Join Our Mission</h2>
                  <p className="text-green-100 text-lg max-w-md">
                    Become a part of our journey to educate, empower, and elevate communities. Your support can make a
                    significant difference in the lives of many.
                  </p>
                  <Button className="bg-white text-green-600 hover:bg-green-50">
                    Get Involved
                  </Button>
                </div>
                <div className="relative h-[400px] lg:h-[500px]">
                  <Image
                    src="/images/image.png"
                    alt="Professional in business attire"
                    fill
                    className="object-cover object-center rounded-xl"
                  />
                </div>
              </div>
            </div>
          </section>
                  {/* Projects */}
          <section id="portfolio" className="py-20">
            <div className="space-y-4 mb-16">
              {/* <p className="text-green-600">Portfolio</p> */}
              <h2 className="text-4xl font-bold text-black">Our Impactful Projects</h2>
              <p className="text-gray-600 max-w-3xl">
                Discover some of the transformative projects we have implemented to support communities and drive meaningful change.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/images/image.png"
                    alt="Classical building with columns"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-black">Civic Education Workshops</h3>
                  <p className="text-gray-600">
                    Conducted multiple workshops teaching citizens their civic rights and responsibilities.
                  </p>
                </div>
              </div>

              <div className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/images/image.png"
                    alt="Historical government building"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-black">Community Business Training</h3>
                  <p className="text-gray-600">
                    Organized training sessions to empower community members with business skills.
                  </p>
                </div>
              </div>

              <div className="group rounded-xl overflow-hidden bg-white shadow-lg hover:shadow-xl transition-shadow">
                <div className="aspect-video relative overflow-hidden">
                  <Image
                    src="/images/image.png"
                    alt="Educational institution building"
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                </div>
                <div className="p-6 space-y-2">
                  <h3 className="text-xl font-semibold text-black">School Equipment Donation</h3>
                  <p className="text-gray-600">
                    Distributed essential school equipment to underprivileged students across various regions.
                  </p>
                </div>
              </div>
            </div>
          </section>
                  {/* Testimonials */}
          <section className="py-20">
            <div className="text-center space-y-4 mb-16">
              <h2 className="text-4xl font-bold text-black">Customer Testimonials</h2>
              <p className="text-gray-600 max-w-3xl mx-auto">
                See what our partners and community members are saying about our initiatives and services.
              </p>
            </div>

            <div className="relative max-w-4xl mx-auto">
              <div className="absolute -top-8 left-0 text-green-200 text-[150px] font-serif"></div>
              <div className="absolute -bottom-8 right-0 text-green-200 text-[150px] font-serif rotate-180"></div>
              
              <div className="relative bg-white rounded-2xl p-8 md:p-12 shadow-lg">
                <div className="grid md:grid-cols-[1fr,2fr] gap-8 items-center">
                  <div className="relative">
                    <div className="aspect-square rounded-2xl overflow-hidden">
                      <Image
                        src="/images/image.png"
                        alt="Community member portrait"
                        fill
                        className="object-cover"
                      />
                    </div>
                    <div className="absolute inset-0 border-2 border-green-600 rounded-2xl -rotate-6 -z-10" />
                  </div>
                  
                  <div className="space-y-4">
                    <h3 className="text-2xl font-bold text-black">Invaluable Support</h3>
                    <blockquote className="text-gray-600 text-lg">
                      "Sheria Mtaani has provided invaluable support to our community, significantly impacting
                      our quality of life."
                    </blockquote>
                    <footer className="font-medium">
                      - John Smith
                    </footer>
                  </div>
                </div>
              </div>
            </div>
          </section>
                {/* About Us */}
          <section id="about" className="py-20">
            <div className="grid lg:grid-cols-2 gap-12 items-start">
              <div className="space-y-8">
                <div className="space-y-4">
                  <h2 className="text-4xl font-bold text-black">About Us</h2>
                  <p className="text-gray-600">
                    Founded in November 2023, Sheria Mtaani Na Joseph Sila is a non-governmental
                    organization dedicated to providing civic education, economic empowerment,
                    and educational resources throughout the country. Our mission is to create a
                    knowledgeable and economically empowered community capable of driving
                    positive societal changes.
                  </p>
                </div>

                <div className="space-y-4">
                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-600">
                      Our organization offers comprehensive civic education programs helping
                      citizens become informed and active participants in their communities.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-600">
                      We are focused on economic empowerment by providing training and
                      resources that enable communities to achieve economic independence.
                    </p>
                  </div>

                  <div className="flex items-start gap-3">
                    <div className="flex-shrink-0 w-6 h-6 rounded-full bg-green-100 flex items-center justify-center mt-1">
                      <Check className="w-4 h-4 text-green-600" />
                    </div>
                    <p className="text-gray-600">
                      Through our educational support services, we ensure students have the
                      necessary equipment to succeed academically and build a better future.
                    </p>
                  </div>
                </div>

                <p className="text-gray-600">
                  Choosing Sheria Mtaani means contributing to a cause that aims to uplift and
                  transform communities. Our dedicated team and partners work tirelessly to
                  ensure our programs reach those who need them the most. By collaborating
                  with us, you become a vital part of a movement dedicated to fostering long-term
                  societal change.
                </p>

                {/* <Button className="bg-green-600 text-white hover:bg-green-700">
                  Learn More
                </Button> */}
              </div>

              <div className="relative">
                <div className="relative">
                  <Image
                    src="/images/image.png"
                    alt="Historical building facade"
                    width={600}
                    height={400}
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute bottom-4 right-4 w-48 h-48">
                    <Image
                      src="/images/image.png"
                      alt="Classical building detail"
                      width={200}
                      height={200}
                      className="rounded-lg object-cover border-4 border-white shadow-lg"
                    />
                  </div>
                </div>
                <div className="absolute top-4 right-4 w-24 h-24 bg-green-100 rounded-full opacity-50" />
                <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-green-50 rounded-full opacity-50" />
              </div>
            </div>
          </section>
                {/* Contact Us */}
          <section id="contact" className="py-20">
            <div className="bg-white rounded-3xl shadow-2xl overflow-hidden">
              <div className="grid lg:grid-cols-[2fr,3fr]">
                <div className="bg-green-600 p-8 lg:p-12 text-white">
                  <h2 className="text-3xl font-bold mb-6">CONTACT US</h2>
                  <h3 className="text-2xl font-semibold mb-6">Let's talk</h3>
                  <div className="space-y-4">
                    <div className="flex items-center gap-4">
                      <MapPin className="w-6 h-6" />
                      <div>
                        <h4 className="font-semibold">Our Location</h4>
                        <p>Nairobi, Kenya</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Mail className="w-6 h-6" />
                      <div>
                        <h4 className="font-semibold">Email Address</h4>
                        <p>info@sheriamtaani.org</p>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <Phone className="w-6 h-6" />
                      <div>
                        <h4 className="font-semibold">Telephone</h4>
                        <p>+254 700 000 000</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="p-8 lg:p-12">
                  <form className="space-y-6">
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">
                          First Name
                        </label>
                        <Input id="first-name" placeholder="First Name" />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">
                          Last Name
                        </label>
                        <Input id="last-name" placeholder="Last Name" />
                      </div>
                    </div>
                    <div className="grid sm:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <Input id="email" type="email" placeholder="Email Address" />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone
                        </label>
                        <Input id="phone" type="tel" placeholder="Phone" />
                      </div>
                    </div>
                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Message
                      </label>
                      <Textarea id="message" placeholder="Message" rows={4} />
                    </div>
                    <Button type="submit" className="w-full bg-green-600 text-white hover:bg-green-700">
                      SEND MESSAGE
                    </Button>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
                {/* Footer */}
        <footer className="bg-green-50 py-20">
            <div className="container mx-auto px-4">
              <div className="content-container">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                <div>
                  <h3 className="text-2xl font-bold text-green-600 mb-4">Sheria Mtaani</h3>
                  <p className="text-gray-600">
                    Dedicated to educating, empowering, and equipping communities for a better tomorrow.
                  </p>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-black">Navigation</h4>
                  <ul className="space-y-2">
                    <li><Link href="/" className="text-gray-600 hover:text-gray-900">Home</Link></li>
                    <li><Link href="#services" className="text-gray-600 hover:text-gray-900">Services</Link></li>
                    <li><Link href="#portfolio" className="text-gray-600 hover:text-gray-900">Portfolio</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Pricing</Link></li>
                    <li><Link href="#contact" className="text-gray-600 hover:text-gray-900">Contact</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-black">Services</h4>
                  <ul className="space-y-2">
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Civic Education</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Economic Empowerment</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Educational Support</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Partnerships</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Awareness Campaigns</Link></li>
                    <li><Link href="#" className="text-gray-600 hover:text-gray-900">Community Outreach</Link></li>
                  </ul>
                </div>
                <div>
                  <h4 className="text-lg font-semibold mb-4 text-black">Contact Us</h4>
                  <ul className="space-y-2">
                    <li className="flex items-center gap-2 text-black">
                      <Phone className="w-5 h-5 text-green-600" />
                      <span>+254 700 000 000</span>
                    </li>
                    <li className="flex items-center gap-2 text-black">
                      <Mail className="w-5 h-5 text-green-600" />
                      <span>info@sheriamtaani.org</span>
                    </li>
                    <li className="flex items-center gap-2 text-black">
                      <MapPin className="w-5 h-5 text-green-600" />
                      <span>Nairobi, Kenya</span>
                    </li>
                  </ul>
                </div>
                </div>
              </div>
            </div>
        </footer>
      </div>
    </div>
  )
}