'use client';

import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Play, Star, Bookmark, Info } from 'lucide-react';

export default function Hero() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent z-10"></div>
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-30"
        style={{
          backgroundImage: "url('https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')"
        }}
      ></div>
      
      <div className="container mx-auto px-4 relative z-20">
        <div className="max-w-3xl">
          <div className="mb-6">
            <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
              Featured Game
            </Badge>
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              The Legend of
              <span className="gradient-text block">Zelda: A Link to the Past</span>
            </h1>
          </div>
          
          <div className="flex items-center space-x-4 mb-6">
            <div className="flex items-center space-x-1">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
              <span className="text-lg font-semibold">4.9</span>
            </div>
            <Badge variant="outline">SNES</Badge>
            <Badge variant="outline">Action RPG</Badge>
            <span className="text-muted-foreground">1991</span>
          </div>
          
          <p className="text-lg text-muted-foreground mb-8 leading-relaxed max-w-2xl">
            Embark on an epic adventure in Hyrule as Link battles the forces of darkness. 
            Experience the classic that defined action RPGs with its innovative gameplay, 
            memorable music, and timeless story.
          </p>
          
          <div className="flex flex-wrap items-center gap-4">
            <Button size="lg" className="bg-primary hover:bg-primary/90 text-white px-8">
              <Play className="mr-2 h-5 w-5" />
              Play Now
            </Button>
            <Button size="lg" variant="outline" className="border-white/20 hover:bg-white/10">
              <Info className="mr-2 h-5 w-5" />
              More Info
            </Button>
            <Button size="lg" variant="ghost" className="hover:bg-white/10">
              <Bookmark className="h-5 w-5" />
            </Button>
          </div>
        </div>
      </div>
      
      {/* Floating elements */}
      <div className="absolute top-20 right-20 opacity-20">
        <div className="w-16 h-16 bg-primary/30 rounded-full float-animation"></div>
      </div>
      <div className="absolute bottom-40 left-20 opacity-20">
        <div className="w-12 h-12 bg-secondary/30 rounded-full float-animation" style={{ animationDelay: '2s' }}></div>
      </div>
    </section>
  );
}