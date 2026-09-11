import { existsSync } from "fs";
import { join } from "path";

// Checks whether a file has actually been added under /public, so components
// can fall back to ImagePlaceholder until the real asset is dropped in.
export function publicImageExists(publicPath: string): boolean {
  return existsSync(join(process.cwd(), "public", publicPath.replace(/^\//, "")));
}
