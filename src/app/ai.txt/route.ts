export async function GET() {
  const content = `# AI Crawler & Agent Policy — ShipBridge Logistics

User-agent: GPTBot
User-agent: ClaudeBot
User-agent: PerplexityBot
User-agent: OAI-SearchBot
User-agent: ChatGPT-User
User-agent: Google-Extended
User-agent: anthropic-ai
Allow: /

Site-Name: ShipBridge Logistics
Canonical-Domain: https://www.shipbridge.in
Developer-Credit: Reverbex Technology (https://reverbex.in)
Primary-Category: B2B Freight ERP, Logistics & Relocation Platform
Service-Area: PAN India (21,800+ Pincodes)
`;

  return new Response(content, {
    headers: {
      "Content-Type": "text/plain; charset=utf-8",
      "Cache-Control": "public, max-age=3600, s-maxage=86400",
    },
  });
}
