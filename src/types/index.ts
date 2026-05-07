export interface SampleRequest {
  id?: string;
  name: string;
  email: string;
  company: string;
  country: string;
  address: string;
  scene: string[];
  volume: string;
  created_at?: string;
}

export interface QuoteRequest {
  id?: string;
  scene: string;
  product_type: string;
  specs: string;
  file_url: string;
  name: string;
  email: string;
  company: string;
  country: string;
  created_at?: string;
}
