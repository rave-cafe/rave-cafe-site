import fs from "fs";
import path from "path";

import cssnano from "cssnano";
import postcss from "postcss";
import tailwindcss from "@tailwindcss/postcss";

export default function (eleventyConfig) {
  eleventyConfig.on("eleventy.before", async () => {
    const tailwindInputPath = path.resolve("./src/assets/index.css");

    const tailwindOutputPath = "./_site/assets/index.css";

    const cssContent = fs.readFileSync(tailwindInputPath, "utf8");

    const outputDir = path.dirname(tailwindOutputPath);
    if (!fs.existsSync(outputDir)) {
      fs.mkdirSync(outputDir, { recursive: true });
    }

    const result = await processor.process(cssContent, {
      from: tailwindInputPath,
      to: tailwindOutputPath,
    });

    fs.writeFileSync(tailwindOutputPath, result.css);
  });

  const processor = postcss([
    tailwindcss(),

    cssnano({
      preset: "default",
    }),
  ]);

  return {
    dir: { input: "src", output: "_site" },
  };
}
