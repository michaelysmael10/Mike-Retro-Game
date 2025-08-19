'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const categories = [
  { id: 'all', name: 'All Games', count: 157 },
  { id: 'nes', name: 'NES', count: 42 },
  { id: 'snes', name: 'SNES', count: 38 },
  { id: 'gba', name: 'Game Boy Advance', count: 29 },
  { id: 'ds', name: 'Nintendo DS', count: 24 },
  { id: 'genesis', name: 'Sega Genesis', count: 18 },
  { id: 'psx', name: 'PlayStation', count: 6 },
];

export default function Categories() {
  const [selectedCategory, setSelectedCategory] = useState('all');

  return (
    <section className="py-16 border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between mb-8">
          <h2 className="text-3xl font-bold">Browse by Platform</h2>
        </div>
        
        <ScrollArea className="w-full">
          <div className="flex space-x-4 pb-4">
            {categories.map((category) => (
              <Button
                key={category.id}
                variant={selectedCategory === category.id ? "default" : "outline"}
                className={`shrink-0 ${
                  selectedCategory === category.id 
                    ? "bg-primary hover:bg-primary/90" 
                    : "hover:bg-muted/50"
                }`}
                onClick={() => setSelectedCategory(category.id)}
              >
                {category.name}
                <Badge 
                  variant="secondary" 
                  className="ml-2 text-xs bg-white/10 text-white"
                >
                  {category.count}
                </Badge>
              </Button>
            ))}
          </div>
          <ScrollBar orientation="horizontal" />
        </ScrollArea>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-8">
          {categories.slice(1).map((category) => (
            <div 
              key={category.id}
              className="group relative overflow-hidden rounded-lg glass-effect border hover:border-primary/50 transition-all duration-300 cursor-pointer game-card-hover"
            >
              <div className="aspect-video bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center">
                <span className="text-2xl font-bold text-white/80">
                  {category.name}
                </span>
              </div>
              <div className="p-4">
                <h3 className="font-semibold mb-1">{category.name}</h3>
                <p className="text-sm text-muted-foreground">
                  {category.count} games available
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}