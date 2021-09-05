import Document, {Html, Head, NextScript, Main} from 'next/document';

class MyDocument extends Document {
   render(){
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