import { Background } from "./components";
import type { DefaultLayoutProps } from "./types";

const DefaultLayout = (props: DefaultLayoutProps) => {
  const { children } = props;

  return (
    <>
      <Background />
      <main>{children}</main>
    </>
  );
};

export default DefaultLayout;
