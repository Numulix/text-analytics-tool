export interface EntityExtractionResponse {
    timestamp: Date;
    annotations: Annotation[]
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