export interface NoteResponse {
  page: number;
  perPage: number;
  totalItems: number;
  items: INotes[];
}

export interface INotes {
  collectionId: string;
  collectionName: string;
  content: string;
  created: Date;
  id: string;
  title: string;
  updated: Date;
}
