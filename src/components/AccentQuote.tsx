import { motion } from "framer-motion";
import { Quote, TrendingUp, Target, BarChart3 } from "lucide-react";

const AccentQuote = () => {
  return (
    <section className="section-spacing bg-pattern-neutral relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-10 left-10 w-32 h-32 bg-gradient-to-br from-hubspot-orange/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-tl from-growth-teal/20 to-transparent rounded-full blur-2xl"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-gradient-to-r from-hubspot-blue/10 to-transparent rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <motion.div 
          className="text-center max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {/* Quote Icon */}
          <motion.div 
            className="flex justify-center mb-8"
            initial={{ scale: 0, rotate: -180 }}
            whileInView={{ scale: 1, rotate: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <div className="p-4 bg-gradient-to-br from-hubspot-orange/20 to-growth-teal/20 rounded-full">
              <Quote className="h-12 w-12 text-hubspot-orange" />
            </div>
          </motion.div>

          {/* Main Quote */}
          <motion.blockquote 
            className="text-h2 text-professional-navy mb-6 leading-tight"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            viewport={{ once: true }}
          >
            "Ignore my accent,{" "}
            <span className="text-gradient bg-gradient-to-r from-hubspot-orange to-growth-teal bg-clip-text text-transparent">
              let the KPIs talk
            </span>
            "
          </motion.blockquote>

          {/* Subtitle */}
          <motion.p 
            className="text-body text-blue-gray mb-8"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
            viewport={{ once: true }}
          >
            Results-driven marketing specialist focused on measurable growth and data-backed strategies
          </motion.p>

          {/* KPI Icons */}
          <motion.div 
            className="flex justify-center items-center gap-8 flex-wrap"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.8 }}
            viewport={{ once: true }}
          >
            <motion.div 
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <Target className="h-5 w-5 text-hubspot-orange" />
              <span className="text-sm font-semibold text-professional-navy">85K+ Leads</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <TrendingUp className="h-5 w-5 text-growth-teal" />
              <span className="text-sm font-semibold text-professional-navy">$42.4M Pipeline</span>
            </motion.div>
            
            <motion.div 
              className="flex items-center gap-2 bg-white/80 backdrop-blur-sm px-4 py-2 rounded-full shadow-lg"
              whileHover={{ scale: 1.05, y: -2 }}
              transition={{ duration: 0.2 }}
            >
              <BarChart3 className="h-5 w-5 text-hubspot-blue" />
              <span className="text-sm font-semibold text-professional-navy">2.88% Conversion</span>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default AccentQuote;
