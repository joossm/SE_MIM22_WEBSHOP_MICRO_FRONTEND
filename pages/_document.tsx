import {Head, Html, Main, NextScript} from 'next/document'

export default function Document() {
    return (
        <Html lang="en">
            <Head/>
            <link rel="preconnect" href="https://fonts.gstatic.com"/>
            <link href="https://fonts.cdnfonts.com/css/poppins" rel="stylesheet"/>
            <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200"
            />
            <body>
            <Main/>
            <NextScript/>
            </body>
        </Html>
    )
}
