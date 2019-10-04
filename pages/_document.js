import Document, { Html, Head, Main, NextScript } from 'next/document'

class MyDocument extends Document {
    static async getInitialProps(ctx) {
        const initialProps = await Document.getInitialProps(ctx)
        return { ...initialProps }
    }

    render() {
        return (
            <Html>
                <Head>

                    <link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css"
                        integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"></link>
                    <link href='https://cdnjs.cloudflare.com/ajax/libs/reactstrap/4.8.0/reactstrap.min.js'></link>

                    <link rel="stylesheet" href="https://use.fontawesome.com/releases/v5.7.0/css/all.css"
                        integrity="sha384-lZN37f5QGtY3VHgisS14W3ExzMWZxybE1SJSEsQp9S+oqd12jhcu+A56Ebc1zFSJ" crossorigin="anonymous"></link>

                    <link href="https://fonts.googleapis.com/css?family=Roboto&display=swap" rel="stylesheet"></link>
                    <link href="https://fonts.googleapis.com/css?family=Oswald&display=swap" rel="stylesheet"></link>

                </Head>
                <body>
                    <Main />
                    <NextScript />

                </body>
            </Html>
        )
    }
}

export default MyDocument