import { Card, CardContent } from "@/components/ui/card";
import { ArrowDown, Linkedin, Twitter, Instagram, TrendingUp, Target, CircleDot, Bot, Zap, Download } from "lucide-react";
import { motion } from "framer-motion";
import heroImage from "@/assets/meher-hero.jpg";
import meherPortrait from "@/assets/meher-portrait.jpeg";
import NewsletterSignup from "./NewsletterSignup";
import RandomActivities from "./RandomActivities";
import ParticleBackground from "./ParticleBackground";
import { Button } from "@/components/ui/button";
const Hero = () => {
  return <section className="min-h-screen flex items-center justify-center bg-gradient-to-br from-gray-900 via-blue-900 to-indigo-900 relative overflow-hidden pt-24">
      {/* Particle Background */}
      <ParticleBackground />
      
      {/* Abstract Background Elements */}
      <div className="absolute inset-0 opacity-20">
        <motion.div 
          className="absolute top-10 left-10 w-48 h-48 bg-gradient-to-r from-purple-500 to-blue-500 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.1, 1],
            opacity: [0.3, 0.5, 0.3],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-10 right-10 w-64 h-64 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full blur-2xl"
          animate={{
            scale: [1, 1.05, 1],
            opacity: [0.3, 0.4, 0.3],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <div className="container mx-auto px-6 relative z-10">
        {/* Marketing Command Center Layout */}
        <motion.div 
          className="max-w-4xl mx-auto relative"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          
          {/* Top: Professional Portrait */}
          <motion.div 
            className="flex justify-center mb-hubspot-lg relative"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <RandomActivities />
            <motion.div
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.3 }}
            >
              <Card className="relative z-30 overflow-hidden backdrop-blur-xl bg-white/15 border border-white/30 shadow-2xl max-w-sm group hover:bg-white/20 transition-all duration-500 hover:shadow-[0_20px_40px_rgba(0,0,0,0.3)]">
              {/* Liquid glass overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/30 via-transparent to-white/10 opacity-80"></div>
              <div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent transform -skew-x-12 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <CardContent className="p-6 relative z-10">
                <div className="relative">
                  <img 
                    src={meherPortrait} 
                    alt="Meher - Digital Marketing Expert" 
                    className="rounded-full w-full object-cover shadow-hubspot" 
                    loading="eager"
                    width={400}
                    height={400}
                  />
                  <div className="absolute bottom-4 left-4 bg-white/20 backdrop-blur-md border border-white/30 text-white px-3 py-1 rounded-full text-sm font-semibold flex items-center gap-2 shadow-lg">
                    <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
                    Accepting New Clients
                  </div>
                </div>
                <div className="mt-hubspot-sm text-center">
                  <h3 className="text-hubspot-h2 text-white font-bold" style={{ color: '#ffffff' }}>Meher</h3>
                  
                  {/* Elegant divider */}
                  <div className="my-4 flex items-center">
                    <div className="flex-1 h-px bg-gradient-to-r from-transparent via-white/30 to-transparent"></div>
                  </div>
                  
                  {/* Social Connect */}
                  <div>
                    <p className="text-hubspot-small mb-hubspot-xs font-medium" style={{ color: '#ffffff' }}>Connect & Grow</p>
                    <div className="flex gap-hubspot-xs justify-center">
                      <a href="#" className="bg-white/15 backdrop-blur-sm p-2 rounded-md hover:bg-hubspot-orange hover:text-white transition-all duration-300 border border-white/30">
                        <Linkedin className="w-4 h-4 text-white" />
                      </a>
                      <a href="#" className="bg-white/15 backdrop-blur-sm p-2 rounded-md hover:bg-hubspot-blue hover:text-white transition-all duration-300 border border-white/30">
                        <Twitter className="w-4 h-4 text-white" />
                      </a>
                      <a href="#" className="bg-white/15 backdrop-blur-sm p-2 rounded-md hover:bg-hubspot-purple hover:text-white transition-all duration-300 border border-white/30">
                        <Instagram className="w-4 h-4 text-white" />
                      </a>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
            </motion.div>
          </motion.div>

          {/* Main Content */}
          <motion.div 
            className="text-center"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          >
            <motion.div 
              className="mb-hubspot-lg"
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
            >
              <motion.h1 
                className="text-hubspot-hero mb-hubspot-sm"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                <motion.span 
                  className="text-hubspot-orange"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.6 }}
                >Demand</motion.span> 
                <motion.span 
                  className="text-hubspot-orange"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.7 }}
                > Generation &</motion.span> 
                <motion.span 
                  className="text-hubspot-orange"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.8 }}
                > Growth</motion.span> 
                <motion.span 
                  className="text-white"
                  initial={{ opacity: 0, x: -20 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.4, delay: 0.9 }}
                > Specialist</motion.span>
              </motion.h1>
              <motion.p 
                className="text-hubspot-body flex items-center justify-center gap-2"
                style={{ color: '#ffffff' }}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 1.4 }}
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: 360 }}
                  transition={{ duration: 1, delay: 1.5 }}
                >
                <Bot className="w-5 h-5 text-primary" />
                </motion.div>
                AI-powered marketing automation expert driving qualified leads and pipeline acceleration
              </motion.p>
            </motion.div>

            {/* Key Metrics */}
            <motion.div 
              className="grid grid-cols-1 md:grid-cols-2 gap-hubspot-sm mb-hubspot-md max-w-2xl mx-auto"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 1.6 }}
            >
              <motion.div
                initial={{ opacity: 0, x: -30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 1.8 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="hubspot-card bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <CardContent className="p-hubspot-md pt-hubspot-lg text-center">
                    <motion.div 
                      className="flex items-center justify-center gap-2 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.0 }}
                    >
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, delay: 2.2 }}
                      >
                    <Target className="h-6 w-6 text-hubspot-orange" />
                      </motion.div>
                      <span className="text-base font-semibold text-professional-navy">Leads Generated</span>
                    </motion.div>
                    <motion.div 
                      className="text-3xl font-bold text-professional-navy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.4, type: "spring", stiffness: 200 }}
                    >
                      85K+
                    </motion.div>
                    <motion.div 
                      className="flex items-center justify-center gap-1 text-sm text-green-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.6 }}
                    >
                    <Zap className="w-3 h-3" />
                    38%+ via Automation
                    </motion.div>
                </CardContent>
              </Card>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, x: 30, scale: 0.9 }}
                animate={{ opacity: 1, x: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 2.0 }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <Card className="hubspot-card bg-white/10 backdrop-blur-xl border border-white/20 shadow-2xl">
                <CardContent className="p-hubspot-md pt-hubspot-lg text-center">
                    <motion.div 
                      className="flex items-center justify-center gap-2 mb-2"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 0.5, delay: 2.2 }}
                    >
                      <motion.div
                        initial={{ rotate: 0 }}
                        animate={{ rotate: 360 }}
                        transition={{ duration: 0.8, delay: 2.4 }}
                      >
                    <TrendingUp className="h-6 w-6 text-growth-teal" />
                      </motion.div>
                      <span className="text-base font-semibold text-professional-navy">Pipeline Value</span>
                    </motion.div>
                    <motion.div 
                      className="text-3xl font-bold text-professional-navy"
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ duration: 0.5, delay: 2.6, type: "spring", stiffness: 200 }}
                    >
                      $42.4M
                    </motion.div>
                    <motion.div 
                      className="flex items-center justify-center gap-1 text-sm text-green-400"
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: 2.8 }}
                    >
                    <Bot className="w-3 h-3" />
                    32% AI-Driven Pipeline
                    </motion.div>
                </CardContent>
              </Card>
              </motion.div>
            </motion.div>

            {/* Newsletter Signup */}
            <motion.div 
              className="mb-hubspot-lg"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 3.0 }}
            >
              <NewsletterSignup />
            </motion.div>
            
          </motion.div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 3.5 }}
      >
        <motion.div
          animate={{ 
            y: [0, 10, 0],
            opacity: [0.7, 1, 0.7]
          }}
          transition={{ 
            duration: 2,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        >
          <ArrowDown className="text-white" size={32} />
        </motion.div>
      </motion.div>
    </section>;
};
export default Hero;