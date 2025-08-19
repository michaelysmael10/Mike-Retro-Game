'use client';

import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Clock, Bell } from 'lucide-react';

const upcomingGames = [
  {
    id: 1,
    title: "Mystic Quest Unity",
    description: "A brand new RPG adventure built with Unity/WebGL. Explore mystical lands with modern gameplay mechanics.",
    platform: "WebGL",
    releaseDate: "Q2 2024",
    image: "https://images.pexels.com/photos/1293269/pexels-photo-1293269.jpeg?auto=compress&cs=tinysrgb&w=400",
    isExclusive: true
  },
  {
    id: 2,
    title: "Retro Racer Championship",
    description: "High-speed racing with pixel-perfect graphics and modern physics. Race through nostalgic tracks.",
    platform: "WebGL",
    releaseDate: "Q3 2024",
    image: "https://images.pexels.com/photos/3165335/pexels-photo-3165335.jpeg?auto=compress&cs=tinysrgb&w=400",
    isExclusive: true
  },
  {
    id: 3,
    title: "Space Defender Reborn",
    description: "Classic space shooter reimagined for modern browsers with enhanced graphics and sound.",
    platform: "WebGL",
    releaseDate: "Q4 2024",
    image: "https://images.pexels.com/photos/2166711/pexels-photo-2166711.jpeg?auto=compress&cs=tinysrgb&w=400",
    isExclusive: false
  }
];

export default function ComingSoon() {
  return (
    <section className="py-16 bg-gradient-to-r from-primary/5 to-secondary/5">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <Badge className="mb-4 bg-primary/20 text-primary border-primary/30">
            Exclusive Content
          </Badge>
          <h2 className="text-4xl font-bold mb-4">Coming Soon</h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Get ready for exclusive Unity/WebGL games crafted specifically for Mike Retro Stream. 
            Be the first to experience modern retro gaming.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {upcomingGames.map((game) => (
            <Card 
              key={game.id} 
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 bg-card/30 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="relative aspect-video overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                    <div className="absolute top-3 left-3">
                      {game.isExclusive && (
                        <Badge className="bg-secondary text-black font-semibold">
                          Exclusive
                        </Badge>
                      )}
                    </div>
                    <div className="absolute bottom-0 left-0 right-0 p-6">
                      <div className="flex items-center space-x-2 mb-2">
                        <Clock className="h-4 w-4 text-primary" />
                        <span className="text-sm font-medium text-primary">{game.releaseDate}</span>
                      </div>
                      <h3 className="text-xl font-bold mb-3 text-white">{game.title}</h3>
                      <p className="text-sm text-gray-300 mb-4 line-clamp-3">
                        {game.description}
                      </p>
                    </div>
                  </div>
                </div>
                
                <div className="p-6">
                  <div className="flex items-center justify-between">
                    <Badge variant="outline" className="text-xs">
                      {game.platform}
                    </Badge>
                    <Button 
                      size="sm" 
                      variant="outline" 
                      className="border-primary text-primary hover:bg-primary hover:text-white"
                    >
                      <Bell className="h-4 w-4 mr-2" />
                      Notify Me
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button size="lg" variant="outline" className="border-primary text-primary hover:bg-primary hover:text-white">
            View All Upcoming Games
          </Button>
        </div>
      </div>
    </section>
  );
}