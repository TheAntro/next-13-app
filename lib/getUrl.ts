export function getUrl(path: string) {
  const baseUrl = process.env.NEXT_PUBLIC_BASE_URL;

  if (!baseUrl) {
    throw new Error('Failed to resolve base url');
  }

  return `${baseUrl}${path}`;
}
