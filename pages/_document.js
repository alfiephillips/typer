import Document, { Html, Head, Main, NextScript } from "next";

class _Document extends Document {
  static async getInitialProps(ctx) {
    const initialProps = await Document.getInitialProps();
    return { ...initialProps };
  }

  render() {
    return (
      <Html lang="en-GB">
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" />
        <Head />
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}

export default _Document;
