'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Avatar, AvatarFallback, AvatarImage } from '@/components/ui/avatar';
import { DropdownMenu, DropdownMenuContent, DropdownMenuItem, DropdownMenuTrigger } from '@/components/ui/dropdown-menu';
import { Search, User, Settings, LogOut, Gamepad2, Bell } from 'lucide-react';

export default function Navigation() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <nav className="fixed top-0 w-full z-50 glass-effect border-b">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <Gamepad2 className="h-8 w-8 text-primary" />
            <span className="text-xl font-bold gradient-text">Mike Retro Stream</span>
          </div>
          
          {/* Search */}
          <div className="hidden md:flex items-center space-x-4 flex-1 max-w-md mx-8">
            <div className="relative w-full">
              <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input 
                placeholder="Search games..." 
                className="pl-10 bg-muted/50 border-muted focus:border-primary transition-colors"
              />
            </div>
          </div>
          
          {/* User Actions */}
          <div className="flex items-center space-x-4">
            {!isLoggedIn ? (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" onClick={() => setIsLoggedIn(true)}>
                  Log In
                </Button>
                <Button className="bg-primary hover:bg-primary/90">
                  Sign Up
                </Button>
              </div>
            ) : (
              <div className="flex items-center space-x-2">
                <Button variant="ghost" size="icon">
                  <Bell className="h-5 w-5" />
                </Button>
                <DropdownMenu>
                  <DropdownMenuTrigger>
                    <Avatar className="h-8 w-8 border-2 border-primary">
                      <AvatarImage src="https://github.com/shadcn.png" />
                      <AvatarFallback>MR</AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent align="end" className="w-48">
                    <DropdownMenuItem>
                      <User className="mr-2 h-4 w-4" />
                      Profile
                    </DropdownMenuItem>
                    <DropdownMenuItem>
                      <Settings className="mr-2 h-4 w-4" />
                      Settings
                    </DropdownMenuItem>
                    <DropdownMenuItem onClick={() => setIsLoggedIn(false)}>
                      <LogOut className="mr-2 h-4 w-4" />
                      Log Out
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
}