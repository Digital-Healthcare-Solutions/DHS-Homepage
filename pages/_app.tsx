import "../styles/globals.css";
import type { AppProps } from "next/app";
import Layout from "../components/layout";
import { Raleway } from "@next/font/google";
import { ThemeProvider } from "next-themes";
import { MantineProvider } from "@mantine/core";

const raleway = Raleway({ subsets: ["latin"] });

export default function App({ Component, pageProps }: AppProps) {
  return (
    <ThemeProvider attribute="class">
      {" "}
      <MantineProvider withGlobalStyles inherit withNormalizeCSS>
        <div className={raleway.className}>
          <Layout>
            <Component {...pageProps} />
          </Layout>
        </div>
      </MantineProvider>
    </ThemeProvider>
  );
}
