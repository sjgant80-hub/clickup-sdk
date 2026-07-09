/**
 * clickup-sdk · sovereign wrapper for ClickUp
 * Project Mgmt
 *
 * Auto-generated from target docs · 2026-07-09
 * generic HTTP client
 *
 * Docs (upstream): https://clickup.com/api
 * Homepage: https://clickup.com
 */

export class Clickup {
  constructor({ apiKey, baseURL = 'https://clickup.com', headers = {} } = {}) {
    this.apiKey = apiKey;
    this.baseURL = baseURL;
    this.headers = {
      
      
      ...headers
    };
  }

  /** Not yet implemented — this API's OpenAPI spec was not machine-parseable. Use fetch() directly against https://clickup.com/api. */
  async request(path, opts = {}) {
    const res = await fetch(this.baseURL + path, { ...opts, headers: { ...this.headers, ...opts.headers } });
    if (!res.ok) throw new Error('clickup ' + res.status);
    return res.json();
  }
}

export default Clickup;

// Metadata
export const meta = {
  "name": "ClickUp",
  "category": "Project Mgmt",
  "homepage": "https://clickup.com",
  "docs_url": "https://clickup.com/api",
  "endpoints_count": 0
};
