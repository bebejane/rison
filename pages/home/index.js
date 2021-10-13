import Home from "../";
import { withGlobalProps } from "/lib/utils";
import { GetHome } from "/graphql";

export default Home;

export const getStaticProps = withGlobalProps({ query: GetHome, model: "home" });
