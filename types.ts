import { LucideIcon } from "lucide-react";

export interface Attraction {
  name: string;
  description: string;
  distance?: string;
  type: 'culture' | 'park' | 'food' | 'nightlife' | 'transport';
  image?: string;
  address?: string; // Endereço físico
  mapLink?: string; // Link para o Google Maps
  curiosities?: string[]; // Curiosidades sobre o local
}

export interface Amenity {
  icon: LucideIcon;
  label: string;
  description?: string;
  details?: string; // Texto convidativo e explicativo para o modal
  rules?: string[]; // Lista de regras de uso
  image?: string;   // Imagem específica para o modal
}

export interface Photo {
  src: string;
  alt: string;
  category: 'apartment' | 'building' | 'view';
}

export interface Testimonial {
  name: string;
  comment: string;
  location: string;
  rating: number;
  avatar?: string;
}