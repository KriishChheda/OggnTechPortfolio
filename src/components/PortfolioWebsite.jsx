import React, { useState, useEffect } from 'react';
import { Mail, Phone, MapPin, Github, Linkedin, Twitter, ExternalLink, Download, Menu, X, Star, Calendar, ChevronDown,Users, Award } from 'lucide-react';
import { Typewriter } from 'react-simple-typewriter';

const PortfolioWebsite = () => {

// both of these are for the skill section

const [visible, setVisible] = useState(false);
useEffect(() => {
    // Trigger animation after mount
    const timeout = setTimeout(() => {
      setVisible(true);
    }, 100); // short delay for visual effect
    return () => clearTimeout(timeout);
  }, []);


// Configuration object to show/hide sections
  const [sectionConfig] = useState({
    hero: true,
    about: true,
    skills: true,
    experience: true,
    projects: true,
    products: false, 
    services: false, 
    testimonials: true,
    education: true,
    certifications: false,
    contact: true
  });

  // User data - easily customizable
  const userData = {
    name: "Alex Johnson",
    title: "Full Stack Developer & UI/UX Designer",
    tagline: "Creating digital experiences that make a difference",
    bio: "Passionate developer with 5+ years of experience in creating innovative web applications. I specialize in React, Node.js, and modern web technologies. When I'm not coding, you'll find me exploring new design trends or contributing to open-source projects.",
    email: "alex.johnson@email.com",
    phone: "+1 (555) 123-4567",
    location: "San Francisco, CA",
    profileImage: "https://st4.depositphotos.com/3557671/23892/v/450/depositphotos_238923408-stock-illustration-vector-illustration-of-avatar-and.jpg",
    social: {
      github: "https://github.com/alexjohnson",
      linkedin: "https://linkedin.com/in/alexjohnson",
      twitter: "https://twitter.com/alexjohnson"
    }
  };

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  
  // if you have your own skills you can add it here in this array of object
  const skills = [
    { name: "JavaScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "Python", level: 75 },
    { name: "UI/UX Design", level: 85 },
    { name: "MongoDB", level: 70 }
  ];

  const experiences = [
    {
      title: "Senior Full Stack Developer",
      company: "TechCorp Inc.",
      period: "2022 - Present",
      description: "Led development of scalable web applications serving 100k+ users. Implemented microservices architecture and improved system performance by 40%."
    },
    {
      title: "Frontend Developer",
      company: "StartupXYZ",
      period: "2020 - 2022",
      description: "Developed responsive web applications using React and TypeScript. Collaborated with design team to create intuitive user interfaces."
    },
    {
      title: "Junior Developer",
      company: "WebSolutions",
      period: "2019 - 2020",
      description: "Built and maintained client websites using modern web technologies. Gained experience in full-stack development and agile methodologies."
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "A full-featured online store with payment integration, inventory management, and admin dashboard.",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool with real-time updates and team collaboration features.",
      tech: ["Vue.js", "Express", "Socket.io", "PostgreSQL"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop",
      demo: "#",
      github: "#"
    },
    {
      title: "Weather Dashboard",
      description: "Interactive weather application with location-based forecasts and beautiful data visualizations.",
      tech: ["React", "D3.js", "OpenWeather API"],
      image: "https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?w=400&h=250&fit=crop",
      demo: "#",
      github: "#"
    }
  ];

  // For business/seller use case
  const products = [
    {
      title: "Premium Headphones",
      description: "High-quality wireless headphones with noise cancellation and 30-hour battery life.",
      price: "$299",
      image: "https://images.unsplash.com/photo-1505740420928-5e560c06d30e?w=400&h=250&fit=crop",
      rating: 4.8
    },
    {
      title: "Smart Watch",
      description: "Feature-rich smartwatch with health monitoring and GPS tracking capabilities.",
      price: "$399",
      image: "https://images.unsplash.com/photo-1523275335684-37898b6baf30?w=400&h=250&fit=crop",
      rating: 4.6
    },
    {
      title: "Laptop Stand",
      description: "Ergonomic aluminum laptop stand with adjustable height and cooling design.",
      price: "$89",
      image: "https://images.unsplash.com/photo-1527864550417-7fd91fc51a46?w=400&h=250&fit=crop",
      rating: 4.9
    }
  ];

  const services = [
    {
      title: "Web Development",
      description: "Custom website development using modern technologies and best practices.",
      icon: "💻",
      price: "Starting at $2,500"
    },
    {
      title: "UI/UX Design",
      description: "User-centered design solutions that enhance user experience and engagement.",
      icon: "🎨",
      price: "Starting at $1,500"
    },
    {
      title: "Consulting",
      description: "Technical consulting and code review services for your development projects.",
      icon: "🔍",
      price: "Starting at $150/hour"
    }
  ];

  const testimonials = [
    {
      name: "Sarah Chen",
      role: "Product Manager at TechStart",
      content: "Alex delivered exceptional work on our web platform. The attention to detail and technical expertise exceeded our expectations.",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616c669e5e?w=60&h=60&fit=crop&crop=face"
    },
    {
      name: "Michael Rodriguez",
      role: "CEO at InnovateCorp",
      content: "Working with Alex was a game-changer for our business. The solutions provided were both innovative and practical.",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=60&h=60&fit=crop&crop=face"
    }
  ];

  const education = [
    {
      degree: "Bachelor of Computer Science",
      school: "University of California, Berkeley",
      period: "2015 - 2019",
      gpa: "3.8/4.0"
    },
    {
      degree: "Web Development Bootcamp",
      school: "Tech Academy",
      period: "2019",
      gpa: "Certificate"
    }
  ];

  const certifications = [
    {
      name: "AWS Certified Solutions Architect",
      issuer: "Amazon Web Services",
      date: "2023",
      badge: "🏆"
    },
    {
      name: "Google Cloud Professional Developer",
      issuer: "Google Cloud",
      date: "2022",
      badge: "☁️"
    }
  ];

  const scrollToSection = (sectionId) => {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: 'smooth' });
    setIsMenuOpen(false);
  };

  return (
    <div className="min-h-screen bg-gray-50">

      <nav className="fixed top-0 w-full bg-white/95 backdrop-blur-sm z-50 shadow-sm">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div style={{ fontFamily: '"Satisfy", cursive' }} className="text-3xl text-indigo-700">
                {userData.name}
            </div>

            <div className="hidden md:flex space-x-8">
              {sectionConfig.hero && <button onClick={() => scrollToSection('hero')} className="text-gray-600 hover:text-blue-600 transition-colors">Home</button>}
              {sectionConfig.about && <button onClick={() => scrollToSection('about')} className="text-gray-600 hover:text-blue-600 transition-colors">About</button>}
              {sectionConfig.skills && <button onClick={() => scrollToSection('skills')} className="text-gray-600 hover:text-blue-600 transition-colors">Skills</button>}
              {sectionConfig.experience && <button onClick={() => scrollToSection('experience')} className="text-gray-600 hover:text-blue-600 transition-colors">Experience</button>}
              {sectionConfig.projects && <button onClick={() => scrollToSection('projects')} className="text-gray-600 hover:text-blue-600 transition-colors">Projects</button>}
              {sectionConfig.products && <button onClick={() => scrollToSection('products')} className="text-gray-600 hover:text-blue-600 transition-colors">Products</button>}
              {sectionConfig.services && <button onClick={() => scrollToSection('services')} className="text-gray-600 hover:text-blue-600 transition-colors">Services</button>}
              {sectionConfig.contact && <button onClick={() => scrollToSection('contact')} className="text-gray-600 hover:text-blue-600 transition-colors">Contact</button>}
            </div>

            {/* Section config is an object which has several keys , each having either a true or a false as a value. If its true only then the button correspinding to that section will be shown.*/}

            {/* Mobile Menu Button */}
            <button onClick={() => setIsMenuOpen(!isMenuOpen)} className="md:hidden">
              {isMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-2 pt-2 pb-3 space-y-1">
              {sectionConfig.hero && <button onClick={() => scrollToSection('hero')} className="block px-3 py-2 text-gray-600 hover:text-blue-600">Home</button>}
              {sectionConfig.about && <button onClick={() => scrollToSection('about')} className="block px-3 py-2 text-gray-600 hover:text-blue-600">About</button>}
              {sectionConfig.skills && <button onClick={() => scrollToSection('skills')} className="block px-3 py-2 text-gray-600 hover:text-blue-600">Skills</button>}
              {sectionConfig.experience && <button onClick={() => scrollToSection('experience')} className="block px-3 py-2 text-gray-600 hover:text-blue-600">Experience</button>}
              {sectionConfig.projects && <button onClick={() => scrollToSection('projects')} className="block px-3 py-2 text-gray-600 hover:text-blue-600">Projects</button>}
              {sectionConfig.products && <button onClick={() => scrollToSection('products')} className="block px-3 py-2 text-gray-600 hover:text-blue-600">Products</button>}
              {sectionConfig.services && <button onClick={() => scrollToSection('services')} className="block px-3 py-2 text-gray-600 hover:text-blue-600">Services</button>}
              {sectionConfig.contact && <button onClick={() => scrollToSection('contact')} className="block px-3 py-2 text-gray-600 hover:text-blue-600">Contact</button>}
            </div>
          </div>
        )}
      </nav>

      {/* Hero Section */}
    {sectionConfig.hero && (
    <section id="hero" className="relative overflow-hidden min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-50 to-indigo-100 pt-24"
    >
      <div className="max-w-4xl mx-auto px-6 py-20 text-center relative z-10">
        <h1 className="text-5xl sm:text-6xl font-extrabold text-gray-900 mb-6 tracking-tight">
          Hi, I'm <span className="text-blue-600">{userData.name}</span>
        </h1>

        <h2 className="text-xl sm:text-2xl text-gray-600 mb-6">
          <Typewriter
            words={[userData.title, 'Problem Solver', 'React Developer']}
            loop
            cursor
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1500}
          />
        </h2>

        <p className="text-lg text-gray-700 mb-10 max-w-2xl mx-auto">{userData.tagline}</p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button
            onClick={() => scrollToSection('contact')}
            className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-all font-medium"
          >
            Get In Touch
          </button>
          <button className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:bg-gray-50 transition-all font-medium flex items-center justify-center gap-2">
            <Download className="h-4 w-4" />
            Download CV
          </button>
        </div>

        {/* Scroll Down Indicator */}
        <div className="mt-12 flex justify-center animate-bounce">
          <ChevronDown className="h-6 w-6 text-gray-400" />
        </div>
      </div>
    </section>
      )}

      {/* About Section */}
      {sectionConfig.about && (
        <section id="about" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">About Me</h2>
              {/* Blue underline below the About Me, u can change the colour based on your taste */}
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div> 
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <img src={userData.profileImage} alt={userData.name} className="w-full h-96 object-cover rounded-lg shadow-lg" />
              </div>
              <div>
                <p className="text-lg text-gray-700 mb-6">{userData.bio}</p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="flex items-center gap-3">
                    <Mail className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{userData.email}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Phone className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{userData.phone}</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <MapPin className="h-5 w-5 text-blue-600" />
                    <span className="text-gray-700">{userData.location}</span>
                  </div>
                </div>
                <div className="flex gap-4 mt-6">
                  <a href={userData.social.github} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Github className="h-5 w-5 text-gray-700" />
                  </a>
                  <a href={userData.social.linkedin} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Linkedin className="h-5 w-5 text-gray-700" />
                  </a>
                  <a href={userData.social.twitter} className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 transition-colors">
                    <Twitter className="h-5 w-5 text-gray-700" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Skills Section */}
      {sectionConfig.skills && (
        <section id="skills" className="py-20 bg-gray-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Skills</h2>
          <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {skills.map((skill, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-gray-900">{skill.name}</span>
                <span className="text-blue-600 font-medium">{skill.level}%</span>
              </div>

              <div className="w-full bg-gray-200 rounded-full h-2 overflow-hidden">
                <div
                  className="bg-blue-600 h-2 rounded-full transition-all duration-1000 ease-out"
                  style={{
                    width: visible ? `${skill.level}%` : '0%',
                  }}
                ></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
      )}

      {/* Experience Section */}
      {sectionConfig.experience && (
        <section id="experience" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Experience</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="space-y-8">
              {experiences.map((exp, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{exp.title}</h3>
                      <p className="text-blue-600 font-medium">{exp.company}</p>
                    </div>
                    <div className="flex items-center gap-2 text-gray-600 mt-2 sm:mt-0">
                      <Calendar className="h-4 w-4" />
                      <span>{exp.period}</span>
                    </div>
                  </div>
                  <p className="text-gray-700">{exp.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Projects Section */}
      {sectionConfig.projects && (
        <section id="projects" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Projects</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {projects.map((project, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={project.image} alt={project.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{project.title}</h3>
                    <p className="text-gray-700 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm">{tech}</span>
                      ))}
                    </div>
                    <div className="flex gap-4">
                      <a href={project.demo} className="flex items-center gap-1 text-blue-600 hover:text-blue-800 transition-colors">
                        <ExternalLink className="h-4 w-4" />
                        Demo
                      </a>
                      <a href={project.github} className="flex items-center gap-1 text-gray-600 hover:text-gray-800 transition-colors">
                        <Github className="h-4 w-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Products Section (for sellers/businesses) */}
      {sectionConfig.products && (
        <section id="products" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Products</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {products.map((product, index) => (
                <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
                  <img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
                  <div className="p-6">
                    <h3 className="text-xl font-bold text-gray-900 mb-2">{product.title}</h3>
                    <p className="text-gray-700 mb-4">{product.description}</p>
                    <div className="flex items-center justify-between">
                      <span className="text-2xl font-bold text-blue-600">{product.price}</span>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-gray-600">{product.rating}</span>
                      </div>
                    </div>
                    <button className="w-full mt-4 bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
                      Learn More
                    </button>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Services Section */}
      {sectionConfig.services && (
        <section id="services" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Services</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {services.map((service, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-lg text-center hover:shadow-xl transition-shadow">
                  <div className="text-4xl mb-4">{service.icon}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">{service.title}</h3>
                  <p className="text-gray-700 mb-4">{service.description}</p>
                  <p className="text-blue-600 font-medium">{service.price}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Testimonials Section */}
      {sectionConfig.testimonials && (
        <section id="testimonials" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Testimonials</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {testimonials.map((testimonial, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md">
                  <p className="text-gray-700 mb-4 italic">"{testimonial.content}"</p>
                  <div className="flex items-center gap-4">
                    <img src={testimonial.avatar} alt={testimonial.name} className="w-12 h-12 rounded-full object-cover" />
                    <div>
                      <h4 className="font-bold text-gray-900">{testimonial.name}</h4>
                      <p className="text-gray-600 text-sm">{testimonial.role}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Education Section */}
      {sectionConfig.education && (
        <section id="education" className="py-20 bg-gray-50">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Education</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="space-y-6">
              {education.map((edu, index) => (
                <div key={index} className="bg-white p-6 rounded-lg shadow-md">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div>
                      <h3 className="text-xl font-bold text-gray-900">{edu.degree}</h3>
                      <p className="text-blue-600 font-medium">{edu.school}</p>
                    </div>
                    <div className="flex flex-col sm:items-end mt-2 sm:mt-0">
                      <span className="text-gray-600">{edu.period}</span>
                      <span className="text-gray-800 font-medium">{edu.gpa}</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Certifications Section */}
      {sectionConfig.certifications && (
        <section id="certifications" className="py-20 bg-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Certifications</h2>
              <div className="w-20 h-1 bg-blue-600 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {certifications.map((cert, index) => (
                <div key={index} className="bg-gray-50 p-6 rounded-lg shadow-md flex items-center gap-4">
                  <div className="text-3xl">{cert.badge}</div>
                  <div>
                    <h3 className="text-lg font-bold text-gray-900">{cert.name}</h3>
                    <p className="text-blue-600 font-medium">{cert.issuer}</p>
                    <p className="text-gray-600">{cert.date}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Contact Section */}
      {sectionConfig.contact && (
        <section id="contact" className="py-20 bg-gray-900 text-white">
          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16">
              <h2 className="text-3xl sm:text-4xl font-bold mb-4">Get In Touch</h2>
              <div className="w-20 h-1 bg-blue-500 mx-auto"></div>
            </div>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <div>
                <h3 className="text-2xl font-bold mb-6">Let's Work Together</h3>
                <p className="text-gray-300 mb-8">I'm always open to discussing new opportunities and interesting projects. Feel free to reach out!</p>
                <div className="space-y-6">
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Mail className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">Email</h4>
                      <p className="text-gray-300">{userData.email}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <Phone className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">Phone</h4>
                      <p className="text-gray-300">{userData.phone}</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-4">
                    <div className="bg-blue-600 p-3 rounded-lg">
                      <MapPin className="h-6 w-6" />
                    </div>
                    <div>
                      <h4 className="font-medium">Location</h4>
                      <p className="text-gray-300">{userData.location}</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-4 mt-8">
                  <a href={userData.social.github} className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                    <Github className="h-6 w-6" />
                  </a>
                  <a href={userData.social.linkedin} className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                    <Linkedin className="h-6 w-6" />
                  </a>
                  <a href={userData.social.twitter} className="bg-gray-800 p-3 rounded-lg hover:bg-gray-700 transition-colors">
                    <Twitter className="h-6 w-6" />
                  </a>
                </div>
              </div>
              <div>
                <form className="space-y-6">
                  <div>
                    <label className="block text-sm font-medium mb-2">Name</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                      placeholder="Your Name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input 
                      type="email" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Subject</label>
                    <input 
                      type="text" 
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white"
                      placeholder="Project Discussion"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea 
                      rows="5"
                      className="w-full px-4 py-3 bg-gray-800 border border-gray-700 rounded-lg focus:outline-none focus:border-blue-500 text-white resize-none"
                      placeholder="Tell me about your project..."
                    ></textarea>
                  </div>
                  <button 
                    type="submit"
                    className="w-full bg-blue-600 text-white py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
                  >
                    Send Message
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Footer */}
      <footer className="bg-gray-800 text-white py-8">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <p className="text-gray-300">&copy; 2025 {userData.name}. All rights reserved.</p>
            <p className="text-gray-400 mt-2">Built with React & Tailwind CSS</p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PortfolioWebsite;