const assetBase =
  "https://arjun-portfolio-assets.s3.us-east-2.amazonaws.com/public".replace(
    /\/$/,
    "",
  );

export function assetUrl(path: string) {
  const normalizedPath = path.startsWith("/") ? path : `/${path}`;
  return assetBase ? `${assetBase}${normalizedPath}` : normalizedPath;
}
