/**
 * clickup-sdk TypeScript declarations
 */
export interface ClickupOptions {
  apiKey?: string;
  baseURL?: string;
  headers?: Record<string, string>;
}

export class Clickup {
  constructor(options?: ClickupOptions);
  request(path: string, opts?: RequestInit): Promise<any>;
}

export default Clickup;

export const meta: {
  name: string;
  category: string;
  homepage: string;
  docs_url: string;
  endpoints_count: number;
};
