import { defineConfig } from "vite";
import plainText from "vite-plugin-plain-text";

defineConfig({
  plugins: [plainText(/\.txt$/)],
});
