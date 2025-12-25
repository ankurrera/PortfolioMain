export interface Service {
  id: string;
  title: string;
  description: string;
}

export interface AboutPage {
  id: string;
  profile_image_url: string | null;
  bio_text: string | null;
  services: Service[];
  created_at: string;
  updated_at: string;
}

export interface AboutPageInsert {
  profile_image_url?: string | null;
  bio_text?: string | null;
  services?: Service[];
}

export interface AboutPageUpdate {
  id: string;
  profile_image_url?: string | null;
  bio_text?: string | null;
  services?: Service[];
}
