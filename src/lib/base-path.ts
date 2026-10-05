// next/image and metadata icons don't prefix `basePath` onto string paths.
export function withBasePath(path: string): string {
  return `${process.env.NEXT_PUBLIC_BASE_PATH ?? ""}${path}`;
}
