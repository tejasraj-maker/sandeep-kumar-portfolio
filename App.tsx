import React, { useState, useEffect } from 'react';
import { motion } from 'motion/react';
import { 
  Youtube,
  Facebook,
  MessageCircle,
  Instagram, 
  Mail, 
  MapPin, 
  Phone,
  Briefcase,
  GraduationCap,
  Monitor,
  User,
  CheckCircle2,
  Code2,
  Sun,
  Moon,
  ChevronRight,
  Star,
  Clock,
  Users
} from 'lucide-react';

export default function App() {
  const [isDark, setIsDark] = useState(true);

  useEffect(() => {
    if (isDark) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [isDark]);

  const navLinks = [
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Skills', href: '#skills' },
    { name: 'Status', href: '#status' },
    { name: 'Reviews', href: '#reviews' },
    { name: 'Contact', href: '#contact' },
  ];

  const education = [
    { year: '2025', title: 'B.Com (Bachelor of Commerce)', school: 'DDU Gorakhpur University' },
    { year: '2022', title: 'UP Board Intermediate', school: 'UP Board' },
    { year: '2020', title: 'UP Board High School', school: 'UP Board' },
  ];

  const experience = [
    { 
      title: 'Full-time Editor', 
      company: 'Freelance', 
      location: 'Hotel Renuka Inn, Gorakhpur', 
      locationUrl: 'https://www.google.com/maps/place/HOTEL+RENUKA+INN/@26.4977343,83.7762136,17z/data=!3m1!4b1!4m9!3m8!1s0x3993c54a0fc230b1:0x2f2cc399f7fce96c!5m2!4m1!1i2!8m2!3d26.4977343!4d83.7787885!16s%2Fg%2F11gr1kq1q5?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D',
      desc: 'Video and Photo editing' 
    },
    { title: 'Ads Campaign Manager', company: 'Freelance', location: 'Remote', desc: 'Facebook & Instagram Ads' },
    { title: 'Content Creator', company: 'Self-Employed', location: 'YouTube', desc: 'Managing personal channel' },
  ];

  const skills = {
    professional: ['Video Editing', 'Photo Editing', 'Ads Campaign', 'Freelancing', 'Communication'],
    technical: ['Photoshop', 'Premiere Pro', 'FB Ads Manager', 'IG Ads Manager', 'YouTube Studio', 'MS Office']
  };

  const waitingList = [
    { id: 1, client: 'YouTube Vlog', service: 'Video Editing', status: 'In Progress', progress: 75 },
    { id: 2, client: 'E-commerce Brand', service: 'FB Ads Campaign', status: 'Queued', progress: 0 },
    { id: 3, client: 'Wedding Shoot', service: 'Photo Retouching', status: 'In Progress', progress: 30 },
    { id: 4, client: 'Real Estate Agency', service: 'IG Ads Campaign', status: 'Queued', progress: 0 },
  ];

  const reviews = [
    { name: 'Rahul Sharma', rating: 5, comment: 'Sandeep is an amazing editor. He delivered my YouTube video ahead of schedule and the quality was top-notch!', date: '2 days ago' },
    { name: 'Priya Verma', rating: 5, comment: 'The Facebook ads campaign Sandeep managed for my boutique was very successful. Highly recommended!', date: '1 week ago' },
    { name: 'Amit Gupta', rating: 4, comment: 'Great work on the photo editing. Very professional and easy to communicate with.', date: '2 weeks ago' },
  ];

  return (
    <div className="min-h-screen transition-colors duration-300">
      {/* Navigation */}
      <nav className="fixed top-0 w-full z-50 bg-white/80 dark:bg-[#0a0f1a]/80 backdrop-blur-md border-b border-black/5 dark:border-white/5">
        <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
          <div className="text-2xl font-bold text-blue-500">SK.</div>
          <div className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a 
                key={link.name} 
                href={link.href} 
                className="text-sm font-medium text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition-colors"
              >
                {link.name}
              </a>
            ))}
            <button 
              onClick={() => setIsDark(!isDark)}
              className="p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition-colors rounded-lg bg-black/5 dark:bg-white/5"
            >
              {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
            </button>
          </div>
          {/* Mobile Theme Toggle */}
          <button 
            onClick={() => setIsDark(!isDark)}
            className="lg:hidden p-2 text-gray-600 dark:text-gray-400 hover:text-blue-500 dark:hover:text-white transition-colors rounded-lg bg-black/5 dark:bg-white/5"
          >
            {isDark ? <Sun className="w-5 h-5" /> : <Moon className="w-5 h-5" />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex flex-col items-center justify-center text-center px-6 pt-16">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <h1 className="text-5xl md:text-7xl font-bold mb-4">
            Hi, I'm <span className="text-blue-500">Sandeep Kumar</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 font-medium mb-8">
            Video & Photo Editor | Ads Campaign Expert
          </p>
          <p className="max-w-2xl mx-auto text-gray-500 dark:text-gray-500 mb-12 leading-relaxed">
            Passionate about visual storytelling, technology, and delivering exceptional creative services. 
            Always eager to learn and grow in the digital landscape.
          </p>
          
          <div className="flex flex-wrap justify-center gap-4">
            <motion.a
              href="#contact"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-blue-600 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-blue-600/20"
            >
              <Mail className="w-5 h-5" /> Contact Me
            </motion.a>
            <motion.a
              href="https://www.instagram.com/boldaspires/"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-xl font-bold flex items-center gap-2 hover:bg-black/10 dark:hover:bg-white/10 transition-colors"
            >
              <Instagram className="w-5 h-5" /> Instagram
            </motion.a>
            <motion.a
              href="https://wa.me/917408008252"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 bg-green-600 text-white rounded-xl font-bold flex items-center gap-2 shadow-lg shadow-green-600/20"
            >
              <MessageCircle className="w-5 h-5" /> WhatsApp
            </motion.a>
          </div>
        </motion.div>
      </section>

      {/* About Section */}
      <section id="about" className="section-padding bg-black/5 dark:bg-white/2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Me</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: GraduationCap, title: 'Student', desc: 'Completed B.Com in 2025 from DDU Gorakhpur University, with a strong foundation in commerce.', color: 'text-blue-500', bg: 'bg-blue-500/10' },
              { icon: User, title: 'Professional', desc: 'Experienced in video/photo editing and running ad campaigns for Facebook and Instagram.', color: 'text-purple-500', bg: 'bg-purple-500/10' },
              { icon: Monitor, title: 'Tech Enthusiast', desc: 'Passionate about technology and creative design. Proficient in tools like Photoshop and Premiere Pro.', color: 'text-green-500', bg: 'bg-green-500/10' },
            ].map((item, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 hover:scale-[1.02] transition-all group"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-xl font-bold mb-4">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Experience & Education */}
      <section id="experience" className="section-padding">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16">
          {/* Experience */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-blue-500/10 rounded-xl flex items-center justify-center">
                <Briefcase className="w-6 h-6 text-blue-500" />
              </div>
              <h2 className="text-3xl font-bold">Experience</h2>
            </div>
            <div className="space-y-8 relative before:absolute before:left-6 before:top-0 before:h-full before:w-px before:bg-black/10 dark:before:bg-white/10">
              {experience.map((exp, i) => (
                <motion.div 
                  key={i} 
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="pl-16 relative"
                >
                  <div className="absolute left-4 top-1 w-4 h-4 rounded-full bg-blue-500 border-4 border-white dark:border-[#0a0f1a] z-10"></div>
                  <div className="glass-card p-6">
                    <h3 className="text-lg font-bold text-blue-600 dark:text-blue-400">{exp.title}</h3>
                    <div className="text-sm font-medium mb-2 opacity-80">{exp.company}</div>
                    {exp.locationUrl ? (
                      <a 
                        href={exp.locationUrl} 
                        target="_blank" 
                        rel="noopener noreferrer"
                        className="text-xs text-blue-500 hover:underline flex items-center gap-1 mb-3"
                      >
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </a>
                    ) : (
                      <div className="text-xs text-gray-500 flex items-center gap-1 mb-3">
                        <MapPin className="w-3 h-3" /> {exp.location}
                      </div>
                    )}
                    <p className="text-sm text-gray-600 dark:text-gray-400">{exp.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Education */}
          <div>
            <div className="flex items-center gap-4 mb-12">
              <div className="w-12 h-12 bg-purple-500/10 rounded-xl flex items-center justify-center">
                <GraduationCap className="w-6 h-6 text-purple-500" />
              </div>
              <h2 className="text-3xl font-bold">Education</h2>
            </div>
            <div className="space-y-4">
              {education.map((edu, i) => (
                <motion.div 
                  key={i}
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="glass-card p-6 flex items-center justify-between group hover:scale-[1.02] transition-all"
                >
                  <div className="flex items-center gap-6">
                    <div className="text-xl font-bold text-blue-500">{edu.year}</div>
                    <div>
                      <h3 className="font-bold">{edu.title}</h3>
                      <div className="text-sm text-gray-500">{edu.school}</div>
                    </div>
                  </div>
                  <ChevronRight className="w-5 h-5 text-gray-400 group-hover:text-blue-500 transition-colors" />
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Skills */}
      <section id="skills" className="section-padding bg-black/5 dark:bg-white/2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">My Skills</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Professional Skills */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-8">
                <User className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold">Professional Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.professional.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm flex items-center gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500" /> {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Technical Skills */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-4 mb-8">
                <Code2 className="w-6 h-6 text-blue-500" />
                <h3 className="text-xl font-bold">Technical Skills</h3>
              </div>
              <div className="flex flex-wrap gap-3">
                {skills.technical.map((skill) => (
                  <span key={skill} className="px-4 py-2 bg-black/5 dark:bg-white/5 border border-black/10 dark:border-white/10 rounded-full text-sm flex items-center gap-2">
                    <Monitor className="w-4 h-4 text-blue-500" /> {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Order Waiting List */}
      <section id="status" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between mb-12 gap-6">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 bg-orange-500/10 rounded-xl flex items-center justify-center">
                <Clock className="w-6 h-6 text-orange-500" />
              </div>
              <div>
                <h2 className="text-3xl font-bold">Order Waiting List</h2>
                <p className="text-gray-500 text-sm">Real-time update of current projects</p>
              </div>
            </div>
            <div className="px-4 py-2 bg-green-500/10 text-green-500 rounded-full text-sm font-bold flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              Accepting New Orders
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {waitingList.map((item) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, scale: 0.95 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-6 border-l-4 border-l-blue-500"
              >
                <div className="flex justify-between items-start mb-4">
                  <div className="text-xs font-bold text-blue-500 uppercase tracking-wider">{item.service}</div>
                  <div className={`text-[10px] px-2 py-1 rounded-md font-bold uppercase ${
                    item.status === 'In Progress' ? 'bg-blue-500/10 text-blue-500' : 'bg-orange-500/10 text-orange-500'
                  }`}>
                    {item.status}
                  </div>
                </div>
                <h3 className="font-bold mb-4">{item.client}</h3>
                <div className="w-full bg-black/5 dark:bg-white/5 h-1.5 rounded-full overflow-hidden">
                  <motion.div 
                    initial={{ width: 0 }}
                    whileInView={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-blue-500"
                  ></motion.div>
                </div>
                <div className="flex justify-between mt-2">
                  <span className="text-[10px] text-gray-500">Progress</span>
                  <span className="text-[10px] font-bold">{item.progress}%</span>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Ratings & Reviews */}
      <section id="reviews" className="section-padding bg-black/5 dark:bg-white/2">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Client Reviews</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
            <div className="flex items-center justify-center gap-2 mt-6">
              <div className="flex text-yellow-500">
                {[...Array(5)].map((_, i) => <Star key={i} className="w-5 h-5 fill-current" />)}
              </div>
              <span className="font-bold text-lg">4.9/5.0</span>
              <span className="text-gray-500 text-sm">(Based on 50+ reviews)</span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {reviews.map((review, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="glass-card p-8 relative"
              >
                <div className="flex text-yellow-500 mb-4">
                  {[...Array(5)].map((_, starI) => (
                    <Star key={starI} className={`w-4 h-4 ${starI < review.rating ? 'fill-current' : 'opacity-30'}`} />
                  ))}
                </div>
                <p className="text-gray-600 dark:text-gray-400 italic mb-6 leading-relaxed">
                  "{review.comment}"
                </p>
                <div className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-blue-500/10 rounded-full flex items-center justify-center">
                    <Users className="w-5 h-5 text-blue-500" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">{review.name}</h4>
                    <span className="text-[10px] text-gray-500">{review.date}</span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="section-padding">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Get In Touch</h2>
            <div className="w-20 h-1 bg-blue-500 mx-auto rounded-full"></div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Phone, title: 'Phone', value: '7408008252', color: 'text-blue-500', bg: 'bg-blue-500/10', url: 'tel:7408008252' },
              { icon: Mail, title: 'Email', value: 'sk5149120@gmail.com', color: 'text-purple-500', bg: 'bg-purple-500/10', url: 'mailto:sk5149120@gmail.com' },
              { icon: MapPin, title: 'Location', value: 'Hotel Renuka Inn, Gorakhpur', color: 'text-green-500', bg: 'bg-green-500/10', url: 'https://www.google.com/maps/place/HOTEL+RENUKA+INN/@26.4977343,83.7762136,17z/data=!3m1!4b1!4m9!3m8!1s0x3993c54a0fc230b1:0x2f2cc399f7fce96c!5m2!4m1!1i2!8m2!3d26.4977343!4d83.7787885!16s%2Fg%2F11gr1kq1q5?entry=ttu&g_ep=EgoyMDI2MDQxMy4wIKXMDSoASAFQAw%3D%3D' },
            ].map((item, i) => (
              <motion.a
                key={i}
                href={item.url}
                target={item.title === 'Location' ? '_blank' : undefined}
                rel={item.title === 'Location' ? 'noopener noreferrer' : undefined}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                className="glass-card p-8 text-center hover:scale-[1.05] transition-all cursor-pointer block"
              >
                <div className={`w-12 h-12 ${item.bg} rounded-xl flex items-center justify-center mx-auto mb-6`}>
                  <item.icon className={`w-6 h-6 ${item.color}`} />
                </div>
                <h3 className="text-lg font-bold mb-2">{item.title}</h3>
                <p className="text-gray-600 dark:text-gray-400 font-medium">{item.value}</p>
                {item.title === 'Location' && (
                  <div className="mt-4 text-xs font-bold text-blue-500 uppercase tracking-widest">Open in Maps</div>
                )}
              </motion.a>
            ))}
          </div>

          <div className="mt-16 text-center text-gray-500 text-sm">
            © {new Date().getFullYear()} Sandeep Kumar. All rights reserved.
          </div>
        </div>
      </section>
    </div>
  );
}
