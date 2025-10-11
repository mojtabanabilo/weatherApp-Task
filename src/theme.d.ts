import "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Palette {
    custom: {
      bgComponents: string;
      bgCards: string;
      bgGradiant: string;
    };
  }

  interface PaletteOptions {
    custom?: {
      bgComponents?: string;
      bgCards?: string;
      bgGradiant?: string;
    };
  }
}
