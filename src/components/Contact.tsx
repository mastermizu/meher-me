import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import { 
  Mail, 
  Phone, 
  MapPin, 
  Linkedin, 
  Twitter, 
  MessageCircle,
  CheckCircle,
  Clock,
  User,
  Building,
  AlertCircle
} from "lucide-react";

const Contact = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [ticketNumber, setTicketNumber] = useState<string>("");
  const [isLoading, setIsLoading] = useState(false);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    projectType: "",
    priority: "medium",
    budget: "",
    description: ""
  });
  const [errors, setErrors] = useState<Record<string, string>>({});
  const { toast } = useToast();

  const validateForm = () => {
    const newErrors: Record<string, string> = {};
    
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required";
    if (!formData.email.trim()) newErrors.email = "Email is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) newErrors.email = "Invalid email format";
    if (!formData.projectType) newErrors.projectType = "Project type is required";
    if (!formData.description.trim()) newErrors.description = "Project description is required";
    
    // Additional security validations
    if (formData.firstName.length > 50) newErrors.firstName = "First name must be less than 50 characters";
    if (formData.lastName.length > 50) newErrors.lastName = "Last name must be less than 50 characters";
    if (formData.company && formData.company.length > 100) newErrors.company = "Company name must be less than 100 characters";
    if (formData.description.length > 2000) newErrors.description = "Description must be less than 2000 characters";
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast({
        title: "Validation Error",
        description: "Please fix the errors in the form",
        variant: "destructive",
      });
      return;
    }

    setIsLoading(true);
    
    try {
      const { data, error } = await supabase.functions.invoke('handle-contact-submission', {
        body: {
          name: `${formData.firstName} ${formData.lastName}`.trim(),
          email: formData.email,
          company: formData.company || null,
          projectType: formData.projectType,
          description: formData.description
        }
      });

      if (error) {
        throw error;
      }

      if (data?.success) {
        setTicketNumber(data.ticketNumber);
        setFormSubmitted(true);
        toast({
          title: "Success",
          description: "Your contact form has been submitted successfully!",
        });
      } else {
        throw new Error(data?.error || "Failed to submit form");
      }
    } catch (error: any) {
      console.error('Contact form error:', error);
      toast({
        title: "Submission Error",
        description: error.message || "Failed to submit contact form. Please try again.",
        variant: "destructive",
      });
    } finally {
      setIsLoading(false);
    }
  };

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: "" }));
    }
  };

  if (formSubmitted) {
    return (
      <section className="py-hubspot-xl bg-gradient-to-br from-light-gray via-clean-white to-light-gray">
        <div className="container mx-auto px-6">
          <div className="max-w-2xl mx-auto">
            <Card className="hubspot-card border-l-4 border-l-green-500">
              <CardHeader>
                <div className="flex items-center gap-hubspot-sm">
                  <CheckCircle className="w-8 h-8 text-green-500" />
                  <div>
                    <CardTitle className="text-hubspot-h2 text-green-700">
                      Support Request Submitted
                    </CardTitle>
                    <p className="text-hubspot-small">Your inquiry has been received and assigned</p>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-hubspot-md">
                <div className="bg-light-gray rounded-lg p-hubspot-md">
                  <div className="grid grid-cols-2 gap-hubspot-md">
                    <div>
                      <span className="text-dashboard-label">Ticket Number</span>
                      <div className="text-dashboard-metric">{ticketNumber}</div>
                    </div>
                    <div>
                      <span className="text-dashboard-label">Priority</span>
                      <Badge className="bg-hubspot-orange text-white">High</Badge>
                    </div>
                    <div>
                      <span className="text-dashboard-label">Status</span>
                      <Badge className="bg-blue-100 text-blue-800">Open</Badge>
                    </div>
                    <div>
                      <span className="text-dashboard-label">Response Time</span>
                      <div className="text-dashboard-metric text-sm">Within 24 hours</div>
                    </div>
                  </div>
                </div>
                
                <div className="space-hubspot-sm">
                  <h4 className="text-hubspot-body font-semibold">What happens next?</h4>
                  <div className="space-y-2">
                    <div className="flex items-center gap-2">
                      <CheckCircle className="w-4 h-4 text-green-500" />
                      <span className="text-hubspot-small">Request received and prioritized</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <Clock className="w-4 h-4 text-yellow-500" />
                      <span className="text-hubspot-small">Initial response within 24 hours</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <MessageCircle className="w-4 h-4 text-blue-500" />
                      <span className="text-hubspot-small">Strategy session scheduled if needed</span>
                    </div>
                  </div>
                </div>

                <Button 
                  onClick={() => {
                    setFormSubmitted(false);
                    setFormData({
                      firstName: "",
                      lastName: "",
                      email: "",
                      company: "",
                      projectType: "",
                      priority: "medium",
                      budget: "",
                      description: ""
                    });
                    setErrors({});
                  }}
                  variant="outline" 
                  className="w-full"
                >
                  Submit Another Request
                </Button>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact" className="py-hubspot-xl bg-gradient-to-br from-light-gray via-clean-white to-light-gray">
      <div className="container mx-auto px-6">
        <div className="text-center mb-hubspot-xl">
          <h2 className="text-hubspot-h1 mb-hubspot-md">
            Marketing Support <span className="text-gradient">Portal</span>
          </h2>
          <p className="text-hubspot-body max-w-3xl mx-auto">
            Submit a support request for your marketing needs. Our team will review your requirements 
            and provide a strategic consultation within 24 hours.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-hubspot-lg max-w-7xl mx-auto">
          {/* Left Column - Contact Information */}
          <div className="space-hubspot-lg">
            <Card className="hubspot-card">
              <CardHeader>
                <CardTitle className="text-hubspot-h2 text-lg flex items-center gap-2">
                  <User className="w-5 h-5 text-hubspot-orange" />
                  Contact Information
                </CardTitle>
              </CardHeader>
              <CardContent className="space-hubspot-sm">
                <div className="flex items-center gap-hubspot-sm p-hubspot-xs rounded-lg bg-light-gray">
                  <Mail className="w-4 h-4 text-hubspot-orange" />
                  <div>
                    <div className="text-hubspot-small font-medium">Email</div>
                    <div className="text-xs text-blue-gray">hello@meher.me</div>
                  </div>
                </div>
                <div className="flex items-center gap-hubspot-sm p-hubspot-xs rounded-lg bg-light-gray">
                  <Phone className="w-4 h-4 text-hubspot-orange" />
                  <div>
                    <div className="text-hubspot-small font-medium">Phone</div>
                    <div className="text-xs text-blue-gray">+1 (555) 123-4567</div>
                  </div>
                </div>
                <div className="flex items-center gap-hubspot-sm p-hubspot-xs rounded-lg bg-light-gray">
                  <MapPin className="w-4 h-4 text-hubspot-orange" />
                  <div>
                    <div className="text-hubspot-small font-medium">Location</div>
                    <div className="text-xs text-blue-gray">Global • Remote Services</div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hubspot-card">
              <CardHeader>
                <CardTitle className="text-hubspot-h2 text-lg flex items-center gap-2">
                  <Clock className="w-5 h-5 text-hubspot-orange" />
                  Response Times
                </CardTitle>
              </CardHeader>
              <CardContent className="space-hubspot-sm">
                <div className="flex justify-between items-center">
                  <span className="text-hubspot-small">Initial Response</span>
                  <Badge className="bg-green-100 text-green-800">24 hours</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-hubspot-small">Strategy Call</span>
                  <Badge className="bg-blue-100 text-blue-800">48 hours</Badge>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-hubspot-small">Proposal Delivery</span>
                  <Badge className="bg-purple-100 text-purple-800">72 hours</Badge>
                </div>
              </CardContent>
            </Card>

            {/* Social Links */}
            <Card className="hubspot-card">
              <CardHeader>
                <CardTitle className="text-hubspot-h2 text-lg">Connect</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="flex gap-hubspot-sm">
                  <a 
                    href="#" 
                    className="flex-1 bg-hubspot-orange text-white p-hubspot-sm rounded-lg text-center hover:bg-hubspot-orange/90 transition-colors duration-300"
                  >
                    <Linkedin className="w-4 h-4 mx-auto mb-1" />
                    <div className="text-xs">LinkedIn</div>
                  </a>
                  <a 
                    href="#" 
                    className="flex-1 bg-hubspot-blue text-white p-hubspot-sm rounded-lg text-center hover:bg-hubspot-blue/90 transition-colors duration-300"
                  >
                    <Twitter className="w-4 h-4 mx-auto mb-1" />
                    <div className="text-xs">Twitter</div>
                  </a>
                  <a 
                    href="#" 
                    className="flex-1 bg-growth-teal text-white p-hubspot-sm rounded-lg text-center hover:bg-growth-teal/90 transition-colors duration-300"
                  >
                    <MessageCircle className="w-4 h-4 mx-auto mb-1" />
                    <div className="text-xs">Chat</div>
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Right Column - Support Request Form */}
          <div className="lg:col-span-2">
            <Card className="hubspot-card">
              <CardHeader>
                <CardTitle className="text-hubspot-h2 flex items-center gap-2">
                  <Building className="w-5 h-5 text-hubspot-orange" />
                  Submit Marketing Support Request
                </CardTitle>
                <p className="text-hubspot-small">
                  Fill out this form to request a consultation or start a new marketing project
                </p>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-hubspot-lg">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-hubspot-md">
                    <div>
                      <label className="text-dashboard-label">
                        First Name *
                      </label>
                      <Input 
                        placeholder="John" 
                        value={formData.firstName}
                        onChange={(e) => handleInputChange('firstName', e.target.value)}
                        className={`mt-2 border-2 focus:border-hubspot-orange ${errors.firstName ? 'border-red-500' : ''}`}
                      />
                      {errors.firstName && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.firstName}
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="text-dashboard-label">
                        Last Name *
                      </label>
                      <Input 
                        placeholder="Doe" 
                        value={formData.lastName}
                        onChange={(e) => handleInputChange('lastName', e.target.value)}
                        className={`mt-2 border-2 focus:border-hubspot-orange ${errors.lastName ? 'border-red-500' : ''}`}
                      />
                      {errors.lastName && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.lastName}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-hubspot-md">
                    <div>
                      <label className="text-dashboard-label">
                        Email Address *
                      </label>
                      <Input 
                        type="email" 
                        placeholder="john@company.com" 
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        className={`mt-2 border-2 focus:border-hubspot-orange ${errors.email ? 'border-red-500' : ''}`}
                      />
                      {errors.email && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.email}
                        </div>
                      )}
                    </div>
                    <div>
                      <label className="text-dashboard-label">
                        Company Name
                      </label>
                      <Input 
                        placeholder="Your Company" 
                        value={formData.company}
                        onChange={(e) => handleInputChange('company', e.target.value)}
                        className={`mt-2 border-2 focus:border-hubspot-orange ${errors.company ? 'border-red-500' : ''}`}
                      />
                      {errors.company && (
                        <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                          <AlertCircle className="w-4 h-4" />
                          {errors.company}
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-dashboard-label">
                      Project Type *
                    </label>
                    <select 
                      value={formData.projectType}
                      onChange={(e) => handleInputChange('projectType', e.target.value)}
                      className={`w-full mt-2 p-3 border-2 border-border rounded-md bg-background focus:border-hubspot-orange transition-colors duration-200 ${errors.projectType ? 'border-red-500' : ''}`}
                    >
                      <option value="">Select your core need</option>
                      <option value="demand-generation">Demand Generation</option>
                      <option value="growth-marketing">Growth Marketing</option>
                      <option value="abm-strategy">ABM Strategy</option>
                      <option value="email-marketing">Email Marketing</option>
                      <option value="campaign-management">360° Campaigns</option>
                      <option value="lifecycle-marketing">Lifecycle Marketing</option>
                      <option value="lead-generation">Lead Generation</option>
                    </select>
                    {errors.projectType && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.projectType}
                      </div>
                    )}
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-hubspot-md">
                    <div>
                      <label className="text-dashboard-label">
                        Priority Level
                      </label>
                      <select 
                        value={formData.priority}
                        onChange={(e) => handleInputChange('priority', e.target.value)}
                        className="w-full mt-2 p-3 border-2 border-border rounded-md bg-background focus:border-hubspot-orange transition-colors duration-200"
                      >
                        <option value="medium">Medium Priority</option>
                        <option value="high">High Priority</option>
                        <option value="urgent">Urgent</option>
                        <option value="low">Low Priority</option>
                      </select>
                    </div>
                    <div>
                      <label className="text-dashboard-label">
                        Budget Range
                      </label>
                      <select 
                        value={formData.budget}
                        onChange={(e) => handleInputChange('budget', e.target.value)}
                        className="w-full mt-2 p-3 border-2 border-border rounded-md bg-background focus:border-hubspot-orange transition-colors duration-200"
                      >
                        <option value="">Select budget range</option>
                        <option value="5k-10k">$5,000 - $10,000</option>
                        <option value="10k-25k">$10,000 - $25,000</option>
                        <option value="25k-50k">$25,000 - $50,000</option>
                        <option value="50k+">$50,000+</option>
                        <option value="consulting">Consultation Only</option>
                      </select>
                    </div>
                  </div>
                  
                  <div>
                    <label className="text-dashboard-label">
                      Project Description *
                    </label>
                    <Textarea 
                      placeholder="Describe your marketing goals, current challenges, and what success looks like for your business..."
                      rows={5}
                      value={formData.description}
                      onChange={(e) => handleInputChange('description', e.target.value)}
                      className={`mt-2 border-2 focus:border-hubspot-orange ${errors.description ? 'border-red-500' : ''}`}
                    />
                    {errors.description && (
                      <div className="flex items-center gap-1 mt-1 text-red-500 text-sm">
                        <AlertCircle className="w-4 h-4" />
                        {errors.description}
                      </div>
                    )}
                  </div>
                  
                  <Button 
                    type="submit"
                    disabled={isLoading}
                    className="hubspot-button-primary w-full text-lg py-hubspot-sm"
                  >
                    {isLoading ? "Submitting..." : "Submit Support Request"}
                  </Button>

                  <p className="text-xs text-blue-gray text-center">
                    By submitting this form, you agree to receive communications about your marketing project. 
                    We typically respond within 24 hours during business days.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;