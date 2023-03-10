import Head from "next/head";
import AboutIndex from "./components/about";
import Footer from "./components/home/footer";


export default function About () {
  return (
    <><Head>
      <title>About</title>
      <meta name="description" content="Generated by create next app" />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.png" />
    </Head>
    <AboutIndex/>
    <Footer/>
  </>
  );
};
