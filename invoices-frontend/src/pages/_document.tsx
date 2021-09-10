import { ServerStyleSheets } from '@material-ui/core';
import Document, { Html, Head, NextScript, Main, DocumentContext } from 'next/document';
import React from 'react';

class MyDocument extends Document {

   static async getInitialProps(ctx: DocumentContext) {
      const sheets = new ServerStyleSheets()
      const originalRenderPage = ctx.renderPage

      ctx.renderPage = () => originalRenderPage({
         enhanceApp: App => props => {
            return sheets.collect(<App {...props} />)
         },
      })

      const initialProps = await Document.getInitialProps(ctx)

      return {
         ...initialProps,
         styles: [
            ...React.Children.toArray(initialProps.styles),
            sheets.getStyleElement()
         ]
      }
   }

   render() {
      return (
         <Html>
            <Head>
               <meta name="theme-color" content="#000" />
               <link rel="stylesheet" href="https://fonts.googleleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
               <link rel="stylesheet" href="https://fonts.googleleapis.com/css?family=Material+Icons" />
            </Head>
            <body>
               <Main />
               <NextScript />
            </body>
         </Html>
      );
   }
}

export default MyDocument;