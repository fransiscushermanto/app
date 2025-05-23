import { cx } from "@pandacss/css";

import { Profile } from "./sections";
import { homeCss } from "./styles";

const Home = () => {
  return (
    <div className={cx("home-page", "container", homeCss)}>
      <Profile />
    </div>
  );
};

export default Home;
