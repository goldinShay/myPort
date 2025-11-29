import * as React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { Mail, Phone, MapPin, Send, Github, Linkedin, Twitter } from 'lucide-react';

export function ContactSection() {
  const [formData, setFormData] = React.useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [status, setStatus] = React.useState<'idle' | 'sending' | 'success' | 'error'>('idle');
  const [statusMessage, setStatusMessage] = React.useState('');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus('sending');
    setStatusMessage('');
    
    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (response.ok && result.success) {
        setStatus('success');
        setStatusMessage('Message sent successfully! I\'ll get back to you soon.');
        setFormData({ name: '', email: '', subject: '', message: '' });
      } else {
        setStatus('error');
        setStatusMessage(result.error || 'Failed to send message. Please try again.');
      }
    } catch (error) {
      setStatus('error');
      setStatusMessage('Failed to send message. Please check your connection and try again.');
    }
  };

  return (
    <div className="space-y-8">
      <div className="text-center">
        <h2 className="text-3xl font-bold bg-gradient-to-r from-emerald-700 to-emerald-800 bg-clip-text text-transparent mb-2">
          Let's work together!
        </h2>
        <p className="text-muted-foreground">Let's talk</p>
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        <Card className="hover:shadow-lg hover:shadow-emerald-800/20 transition-all duration-300 border-emerald-800/20">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Mail className="h-5 w-5 text-emerald-700" />
              Get In Touch
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <Label htmlFor="name">Name</Label>
                  <Input
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    placeholder="Your name"
                    className="border-emerald-700/30 focus:border-emerald-700"
                    required
                  />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="email">Email</Label>
                  <Input
                    id="email"
                    name="email"
                    type="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    placeholder="your.email@example.com"
                    className="border-emerald-700/30 focus:border-emerald-700"
                    required
                  />
                </div>
              </div>
              <div className="space-y-2">
                <Label htmlFor="subject">Subject</Label>
                <Input
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleInputChange}
                  placeholder="What would you like to discuss?"
                  className="border-emerald-700/30 focus:border-emerald-700"
                  required
                />
              </div>
              <div className="space-y-2">
                <Label htmlFor="message">Message</Label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  placeholder="Enter your message here..."
                  className="min-h-[120px] border-emerald-700/30 focus:border-emerald-700"
                  required
                />
              </div>
              <Button 
                type="submit" 
                disabled={status === 'sending'}
                className="w-full gap-2 bg-emerald-700 text-white hover:bg-emerald-800 disabled:opacity-50"
              >
                <Send className="h-4 w-4" />
                {status === 'sending' ? 'Sending...' : 'Send Message'}
              </Button>
              
              {statusMessage && (
                <div className={`text-sm text-center p-2 rounded ${
                  status === 'success' 
                    ? 'text-emerald-700 bg-emerald-50 border border-emerald-200' 
                    : 'text-red-700 bg-red-50 border border-red-200'
                }`}>
                  {statusMessage}
                </div>
              )}
            </form>
          </CardContent>
        </Card>
        
        <div className="space-y-6">
          <Card className="hover:shadow-lg hover:shadow-emerald-800/20 transition-all duration-300 border-emerald-800/20">
            <CardHeader>
              <CardTitle>My contact details:</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-700/10 border border-emerald-800/20 rounded-lg flex items-center justify-center">
                  <Mail className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <p className="font-medium">Email</p>
                  <p className="text-sm text-muted-foreground">goldinshay@gmail.com</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-700/10 border border-emerald-800/20 rounded-lg flex items-center justify-center">
                  <Phone className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <p className="font-medium">Phone</p>
                  <p className="text-sm text-muted-foreground">+31 6 39625775</p>
                </div>
              </div>
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 bg-emerald-700/10 border border-emerald-800/20 rounded-lg flex items-center justify-center">
                  <MapPin className="h-5 w-5 text-emerald-700" />
                </div>
                <div>
                  <p className="font-medium">Location</p>
                  <p className="text-sm text-muted-foreground">Leiden, the Netherlands</p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <Card className="hover:shadow-lg hover:shadow-emerald-800/20 transition-all duration-300 border-emerald-800/20">
            <CardHeader>
              <CardTitle>Social Links</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex gap-4">
                {/* GitHub */}
                <a
                  href="https://github.com/goldinshay"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-emerald-700 hover:bg-emerald-700 hover:text-white"
                  >
                    <Github className="h-5 w-5" />
                  </Button>
                </a>

                {/* LinkedIn */}
                <a
                  href="https://www.linkedin.com/in/shay-goldin-a0429a21b/?originalSubdomain=nl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-emerald-700 hover:bg-emerald-700 hover:text-white"
                  >
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>

                {/* Bluesky (replacing Twitter) */}
                <a
                  href="https://bsky.app/profile/shaygoldin.bsky.social"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1"
                >
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full border-emerald-700 hover:bg-emerald-700 hover:text-white"
                  >
                    <Globe className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </CardContent>
          </Card>
          
          <Card className="bg-gradient-to-r from-emerald-700/10 to-emerald-800/10 border-emerald-800/20">
            <CardContent className="p-6 text-center">
              <h3 className="font-semibold mb-2">Available for Work</h3>
              <p className="text-sm text-muted-foreground mb-4">
                I'm currently open to new opportunities and exciting projects.
              </p>
              <div className="flex items-center justify-center gap-2">
                <div className="w-3 h-3 bg-emerald-700 rounded-full animate-pulse"></div>
                <span className="text-sm font-medium text-emerald-700">Available</span>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}