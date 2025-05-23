import { css } from "@pandacss/css";

export const homeCss = css({
  pt: 6,
  pb: 16,
  md: {
    py: 10,
  },

  minH: "token(100dvh, 100vh)",

  "& > section": {
    mx: "auto",
    maxW: 980,
  },
});
