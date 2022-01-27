// React
import { Fragment } from "react";

// Next
import Head from "next/head";

// Components
import Home from "../components/Home/Home";

const index = () => {
  return (
    <Fragment>
      <Head>
        <title>The Bored Zillas</title>
        <link rel="icon" href="./static/images/image-3.png" />
      </Head>
      <Home />
    </Fragment>
  );
};

export default index;
