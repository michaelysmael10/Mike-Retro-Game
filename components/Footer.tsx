import { Button } from '@/components/ui/button';
import { Separator } from '@/components/ui/separator';
import { Github, Linkedin, Gamepad2, Mail } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-card/50 backdrop-blur-sm border-t border-border/50">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <Gamepad2 className="h-8 w-8 text-primary" />
              <span className="text-xl font-bold gradient-text">Mike Retro Stream</span>
            </div>
            <p className="text-muted-foreground mb-6 max-w-md">
              Your gateway to classic gaming. Stream retro games from multiple platforms 
              and discover exclusive new titles crafted with modern technology.
            </p>
            <div className="flex items-center space-x-2">
              <span className="text-sm text-muted-foreground">Created by</span>
              <span className="font-semibold text-primary">Michael Ysmael Jr. Fernandez</span>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Platform</h4>
            <div className="space-y-2">
              <div><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Game Library</a></div>
              <div><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Categories</a></div>
              <div><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Coming Soon</a></div>
              <div><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Favorites</a></div>
            </div>
          </div>
          
          {/* Support */}
          <div>
            <h4 className="font-semibold mb-4">Support</h4>
            <div className="space-y-2">
              <div><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Help Center</a></div>
              <div><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Game Controls</a></div>
              <div><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">System Requirements</a></div>
              <div><a href="#" className="text-sm text-muted-foreground hover:text-foreground transition-colors">Contact Us</a></div>
            </div>
          </div>
        </div>
        
        <Separator className="my-8 bg-border/50" />
        
        <div className="flex flex-col md:flex-row items-center justify-between space-y-4 md:space-y-0">
          <div className="text-sm text-muted-foreground">
            © {currentYear} Mike Retro Stream. All rights reserved.
          </div>
          
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://github.com/michaelysmael10" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Github className="h-4 w-4" />
                <span>GitHub</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm" asChild>
              <a 
                href="https://www.linkedin.com/in/michael-ysmael-jr-fernandez-0b4318280/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center space-x-2"
              >
                <Linkedin className="h-4 w-4" />
                <span>LinkedIn</span>
              </a>
            </Button>
            <Button variant="ghost" size="sm">
              <Mail className="h-4 w-4 mr-2" />
              Contact
            </Button>
          </div>
        </div>
      </div>
    </footer>
  );
}