import { Plugin } from "vite";

export function headCheckerPlugin(): Plugin {
  return {
    name: "refunjs-head-checker",
    enforce: "pre",

    transform(code, id) {
      if (!id.includes("/pages/")) return;

      const headRegex = /<Head[\s>]/g;
      const positions: number[] = [];
      let match;

      while ((match = headRegex.exec(code)) !== null) {
        positions.push(match.index);
      }

      if (positions.length > 1) {
        const errorIndex = positions[positions.length - 1];

        const before = code.slice(0, errorIndex);
        const lines = before.split("\n");
        const line = lines.length;
        const column = lines[lines.length - 1].length;

        const message =
          `[RefunJS Head Error] Multiple <Head> components detected (${positions.length}).\n` +
          `\nOnly one <Head> component is allowed per page.\n\n` +
          `Fix: Remove extra <Head> components. Keep only one at the top level of your page component.\n\n`;

        this.error({
          id,
          message,
          loc: { line, column }
        });
      }
    }
  };
}
