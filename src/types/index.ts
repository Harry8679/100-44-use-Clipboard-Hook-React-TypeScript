// Types pour clipboard - AUCUN ANY

export interface ClipboardOptions {
  timeout?: number;
  onSuccess?: () => void;
  onError?: (error: Error) => void;
}

export interface CodeSnippet {
  id: string;
  language: string;
  code: string;
  title: string;
}

export interface ContactCard {
  name: string;
  email: string;
  phone: string;
  company: string;
  website: string;
}

export interface ColorInfo {
  name: string;
  hex: string;
  rgb: string;
  hsl: string;
}