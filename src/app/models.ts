export interface EntityExtractionResponse {
  timestamp: Date;
  annotations: Annotation[];
}

export interface Annotation {
  label: string;
  categories?: string[];
  abstract?: string;
  confidence: number;
  image?: {
    thumbnail: string;
  };
}

export interface TextSimilarityResponse {
  timestamp: Date;
  similarity: number;
}

export interface LanguageDetectionResponse {
  timestamp: Date;
  detectedLangs: DetectedLanguages[];
}

export interface DetectedLanguages {
  lang: string;
  confidence: number;
}

export interface SentimentAnalysisResponse {
  timestamp: Date;
  sentiment: {
    score: number;
    type: string;
  };
}

export interface Log {
  timestamp: Date;
  endpoint: string;
}