export interface Product {
  id: string;
  name: string;
  nameEn: string;
  category: 'block-machines' | 'central-mixers' | 'block-shapes';
  description: string;
  specs: {
    dimensions: string;
    capacity: string;
    power?: string;
    features?: string[];
  };
  features: string[];
  imageUrl: string;
}

export interface GalleryItemView {
  imageUrl: string;
  title?: string;
  description?: string;
}

export interface GalleryItem {
  id: string;
  title: string;
  category: string;
  imageUrl: string;
  description: string;
  views?: GalleryItemView[];
}

