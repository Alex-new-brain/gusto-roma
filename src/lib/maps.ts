export function buildVenueMapsUrl(name: string): string {
  return `https://www.google.com/maps/search/${encodeURIComponent(`${name}, Rome, Italy`)}`;
}
