'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import { Separator } from '@/components/ui/separator';
import { 
  Play, 
  Star, 
  Bookmark, 
  BookmarkCheck, 
  Settings, 
  Volume2, 
  VolumeX,
  Maximize,
  ArrowLeft,
  Share,
  Download
} from 'lucide-react';
import Link from 'next/link';

// Mock game data
const gameData = {
  id: 1,
  title: "The Legend of Zelda: A Link to the Past",
  platform: "SNES",
  year: "1991",
  rating: 4.9,
  category: "Action RPG",
  publisher: "Nintendo",
  developer: "Nintendo EAD",
  image: "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=800",
  description: "Embark on an epic adventure in Hyrule as Link battles the forces of darkness. Experience the classic that defined action RPGs with its innovative gameplay, memorable music, and timeless story. Travel between the Light World and Dark World to save Princess Zelda and defeat the evil wizard Agahnim.",
  features: [
    "Classic 16-bit graphics and sound",
    "Dual-world exploration mechanics",
    "Memorable soundtrack by Koji Kondo",
    "Multiple dungeons and boss battles",
    "Weapon and item progression system"
  ],
  screenshots: [
    "https://images.pexels.com/photos/442576/pexels-photo-442576.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/163064/play-stone-network-networked-interactive-163064.jpeg?auto=compress&cs=tinysrgb&w=400",
    "https://images.pexels.com/photos/275033/pexels-photo-275033.jpeg?auto=compress&cs=tinysrgb&w=400"
  ]
};

export default function GameDetailPage() {
  const [isFavorite, setIsFavorite] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [isMuted, setIsMuted] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-background via-background to-muted">
      {/* Header */}
      <div className="glass-effect border-b sticky top-0 z-40">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between h-16">
            <Link href="/" className="flex items-center space-x-2 text-primary hover:text-primary/80">
              <ArrowLeft className="h-5 w-5" />
              <span>Back to Games</span>
            </Link>
            <div className="flex items-center space-x-2">
              <Button variant="ghost" size="icon">
                <Share className="h-5 w-5" />
              </Button>
              <Button variant="ghost" size="icon">
                <Download className="h-5 w-5" />
              </Button>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 py-8">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Game Player */}
          <div className="lg:col-span-2">
            <Card className="overflow-hidden border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-0">
                <div className="relative aspect-video bg-black">
                  {!isPlaying ? (
                    <>
                      <img 
                        src={gameData.image} 
                        alt={gameData.title}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                        <Button 
                          size="lg" 
                          className="bg-primary hover:bg-primary/90 text-white px-8"
                          onClick={() => setIsPlaying(true)}
                        >
                          <Play className="mr-2 h-6 w-6" />
                          Play Game
                        </Button>
                      </div>
                    </>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                      <div className="text-center">
                        <div className="mb-4 pulse-glow w-16 h-16 bg-primary/20 rounded-full mx-auto flex items-center justify-center">
                          <Play className="h-8 w-8 text-primary" />
                        </div>
                        <p className="text-lg font-medium">Game is loading...</p>
                        <p className="text-sm text-muted-foreground">Initializing emulator</p>
                      </div>
                    </div>
                  )}
                  
                  {/* Game Controls Overlay */}
                  {isPlaying && (
                    <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                      <div className="flex items-center space-x-2">
                        <Button size="sm" variant="ghost" className="bg-black/50 hover:bg-black/70">
                          <Settings className="h-4 w-4" />
                        </Button>
                        <Button 
                          size="sm" 
                          variant="ghost" 
                          className="bg-black/50 hover:bg-black/70"
                          onClick={() => setIsMuted(!isMuted)}
                        >
                          {isMuted ? <VolumeX className="h-4 w-4" /> : <Volume2 className="h-4 w-4" />}
                        </Button>
                      </div>
                      <Button size="sm" variant="ghost" className="bg-black/50 hover:bg-black/70">
                        <Maximize className="h-4 w-4" />
                      </Button>
                    </div>
                  )}
                </div>
              </CardContent>
            </Card>

            {/* Screenshots */}
            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-4">Screenshots</h3>
              <div className="grid grid-cols-3 gap-4">
                {gameData.screenshots.map((screenshot, index) => (
                  <div key={index} className="aspect-video rounded-lg overflow-hidden border border-border/50">
                    <img 
                      src={screenshot} 
                      alt={`Screenshot ${index + 1}`}
                      className="w-full h-full object-cover hover:scale-105 transition-transform duration-300 cursor-pointer"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Game Info */}
          <div className="space-y-6">
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <div className="mb-4">
                  <Badge className="mb-2 bg-primary/20 text-primary border-primary/30">
                    {gameData.platform}
                  </Badge>
                  <h1 className="text-2xl font-bold mb-2">{gameData.title}</h1>
                  <div className="flex items-center space-x-4 text-sm text-muted-foreground">
                    <span>{gameData.year}</span>
                    <span>•</span>
                    <span>{gameData.category}</span>
                  </div>
                </div>

                <div className="flex items-center space-x-4 mb-6">
                  <div className="flex items-center space-x-1">
                    <Star className="h-5 w-5 text-yellow-400 fill-current" />
                    <span className="font-semibold">{gameData.rating}</span>
                    <span className="text-sm text-muted-foreground">/5</span>
                  </div>
                  <Button 
                    variant="ghost" 
                    size="sm"
                    onClick={() => setIsFavorite(!isFavorite)}
                    className="hover:bg-muted/50"
                  >
                    {isFavorite ? (
                      <BookmarkCheck className="h-5 w-5 text-primary mr-2" />
                    ) : (
                      <Bookmark className="h-5 w-5 mr-2" />
                    )}
                    {isFavorite ? 'Saved' : 'Save'}
                  </Button>
                </div>

                <Separator className="my-4 bg-border/50" />

                <div className="space-y-3">
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Developer</span>
                    <span className="text-sm font-medium">{gameData.developer}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Publisher</span>
                    <span className="text-sm font-medium">{gameData.publisher}</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-sm text-muted-foreground">Platform</span>
                    <Badge variant="outline">{gameData.platform}</Badge>
                  </div>
                </div>
              </CardContent>
            </Card>

            {/* Description & Features */}
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <Tabs defaultValue="description" className="w-full">
                  <TabsList className="grid w-full grid-cols-2">
                    <TabsTrigger value="description">About</TabsTrigger>
                    <TabsTrigger value="features">Features</TabsTrigger>
                  </TabsList>
                  <TabsContent value="description" className="mt-4">
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {gameData.description}
                    </p>
                  </TabsContent>
                  <TabsContent value="features" className="mt-4">
                    <ul className="space-y-2">
                      {gameData.features.map((feature, index) => (
                        <li key={index} className="text-sm text-muted-foreground flex items-start">
                          <span className="inline-block w-2 h-2 bg-primary rounded-full mt-2 mr-3 shrink-0"></span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </TabsContent>
                </Tabs>
              </CardContent>
            </Card>

            {/* Game Settings */}
            <Card className="border-border/50 bg-card/30 backdrop-blur-sm">
              <CardContent className="p-6">
                <h3 className="font-semibold mb-4">Game Settings</h3>
                <div className="space-y-4">
                  <Button variant="outline" className="w-full justify-start">
                    <Settings className="mr-2 h-4 w-4" />
                    Controller Configuration
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Maximize className="mr-2 h-4 w-4" />
                    Display Settings
                  </Button>
                  <Button variant="outline" className="w-full justify-start">
                    <Volume2 className="mr-2 h-4 w-4" />
                    Audio Settings
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </div>
  );
}