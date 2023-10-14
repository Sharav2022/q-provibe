import Layout from "../src/components/main/Layout";
import { manrope, jost } from "../src/lib/fonts";
import "../src/styles/globals.css";

export default function App({ Component, pageProps }) {
  const layoutProps = Component.getLayoutProps || (() => {});

  return (
    <>
      <style jsx global>{`
        html {
          font-family: ${manrope.style.fontFamily};
        }
      `}</style>
      <Layout {...pageProps} {...layoutProps()}>
        <Component {...pageProps} />
      </Layout>
    </>
  );
}
