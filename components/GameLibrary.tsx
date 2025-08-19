'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Star, Play, Bookmark, BookmarkCheck, Settings } from 'lucide-react';

const games = [
  {
    id: 1,
    title: "Super Metroid",
    platform: "SNES",
    year: "1994",
    rating: 4.8,
    category: "Action Adventure",
    image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
    isFavorite: false,
    description: "Explore the alien world of Zebes in this atmospheric masterpiece."
  },
  {
    id: 2,
    title: "Super Mario World",
    platform: "SNES",
    year: "1990",
    rating: 4.9,
    category: "Platform",
    image: "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
    isFavorite: true,
    description: "Join Mario and Yoshi on a colorful adventure through Dinosaur Land."
  },
  {
    id: 3,
    title: "Pokémon FireRed",
    platform: "GBA",
    year: "2004",
    rating: 4.7,
    category: "RPG",
    image: "https://images.pexels.com/photos/1637438/pexels-photo-1637438.jpeg?auto=compress&cs=tinysrgb&w=400",
    isFavorite: false,
    description: "Catch 'em all in the enhanced remake of the classic Pokémon adventure."
  },
  {
    id: 4,
    title: "Contra",
    platform: "NES",
    year: "1987",
    rating: 4.6,
    category: "Action",
    image: "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=400",
    isFavorite: false,
    description: "Run and gun through alien territories in this legendary shooter."
  },
  {
    id: 5,
    title: "Final Fantasy VI",
    platform: "SNES",
    year: "1994",
    rating: 4.9,
    category: "RPG",
    image: "https://images.pexels.com/photos/194511/pexels-photo-194511.jpeg?auto=compress&cs=tinysrgb&w=400",
    isFavorite: true,
    description: "Experience one of the greatest JRPGs ever created with an ensemble cast."
  },
  {
    id: 6,
    title: "Sonic the Hedgehog 2",
    platform: "Genesis",
    year: "1992",
    rating: 4.8,
    category: "Platform",
    image: "https://images.pexels.com/photos/4009409/pexels-photo-4009409.jpeg?auto=compress&cs=tinysrgb&w=400",
    isFavorite: false,
    description: "Speed through zones with Sonic and Tails in this classic platformer."
  }
];

export default function GameLibrary() {
  const [favorites, setFavorites] = useState<number[]>([2, 5]);

  const toggleFavorite = (gameId: number) => {
    setFavorites(prev => 
      prev.includes(gameId) 
        ? prev.filter(id => id !== gameId)
        : [...prev, gameId]
    );
  };

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Popular Games</h2>
          <Button variant="outline">View All</Button>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {games.map((game) => (
            <Card 
              key={game.id} 
              className="group overflow-hidden border-border/50 hover:border-primary/50 transition-all duration-300 game-card-hover bg-card/50 backdrop-blur-sm"
            >
              <CardContent className="p-0">
                <div className="relative aspect-[4/3] overflow-hidden">
                  <img 
                    src={game.image} 
                    alt={game.title}
                    className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute bottom-4 left-4 right-4">
                      <div className="flex items-center justify-between mb-3">
                        <div className="flex items-center space-x-2">
                          <Button size="sm" className="bg-primary hover:bg-primary/90">
                            <Play className="h-4 w-4 mr-1" />
                            Play
                          </Button>
                          <Button size="sm" variant="ghost" className="bg-white/10 hover:bg-white/20">
                            <Settings className="h-4 w-4" />
                          </Button>
                        </div>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="bg-white/10 hover:bg-white/20"
                          onClick={() => toggleFavorite(game.id)}
                        >
                          {favorites.includes(game.id) ? (
                            <BookmarkCheck className="h-4 w-4 text-primary" />
                          ) : (
                            <Bookmark className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className="absolute top-3 left-3">
                    <Badge className="bg-black/50 text-white border-0">
                      {game.platform}
                    </Badge>
                  </div>
                </div>
                
                <div className="p-4">
                  <h3 className="font-semibold text-lg mb-2 line-clamp-1">{game.title}</h3>
                  <p className="text-sm text-muted-foreground mb-3 line-clamp-2">
                    {game.description}
                  </p>
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 text-yellow-400 fill-current" />
                        <span className="text-sm font-medium">{game.rating}</span>
                      </div>
                      <Badge variant="outline" className="text-xs">
                        {game.category}
                      </Badge>
                    </div>
                    <span className="text-xs text-muted-foreground">{game.year}</span>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}