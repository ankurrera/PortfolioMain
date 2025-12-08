export interface GalleryImage {
  type?: 'image' | 'video';
  src: string;
  videoSrc?: string;
  highResSrc?: string;
  alt: string;
  photographer?: string;
  client?: string;
  location?: string;
  details?: string;
  width?: number;
  height?: number;
}

export interface Portrait {
  src: string;
  alt: string;
  width: number;
  height: number;
}
