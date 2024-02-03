// This is where the modification of the html has to be done
export default `<!DOCTYPE html>
<html lang="en">
    <head>
        <meta charset="utf-8" />
        <title>Wordlock-og.xyz -Let's do some magic - share your secret and don't worry about any leaks of your information.</title>

        <link rel="apple-touch-icon" sizes="180x180" href="./public/icons/apple-touch-icon.png">
        <link rel="icon" type="image/png" sizes="32x32" href="./public/icons/favicon-32x32.png">
        <link rel="icon" type="image/png" sizes="16x16" href="./public/icons/favicon-16x16.png">
        <link rel="icon" type="image/png" sizes="192x192" href="./public/icons/amdroid-chrome-192x192.png">
        <link rel="icon" type="image/png" sizes="512x512" href="./public/icons/amdroid-chrome-512x512.png">

        <link rel="icon" href="./public/icons/favicon.ico">
        <link rel="manifest" href="/site.webmanifest">
        <!-- Primary Meta Tags -->
        <meta name="title" content="Let's do some magic - share your secret and don't worry about any leaks of your information." />
        <meta
            name="description"
            content="Our server does not collect any information; everything is encrypted on the fly."
        />

        <!-- Open Graph / Facebook -->
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://www.hemmelig.app/" />
        <meta
            property="og:title"
            content="Let's do some magic - share your secret and don't worry about any leaks of your information."
        />
        <meta
            property="og:description"
            content="Our server does not collect any information; everything is encrypted on the fly."
        />
        <meta property="og:image" content="/icons/icon-512x512.png" />

        <!-- Twitter -->
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://www.hemmelig.app/" />
        <meta
            property="twitter:title"
            content="Let's do some magic - share your secret and don't worry about any leaks of your information."
        />
        <meta
            property="twitter:description"
            content="Our server does not collect any information; everything is encrypted on the fly."
        />
        <meta property="twitter:image" content="/icons/icon-512x512.png" />

        <meta name="theme-color" content="#231e23" />

        <meta name="viewport" content="width=device-width,initial-scale=1" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <link rel="apple-touch-icon" href="/icons/maskable-icon-192x192.png" />
        <script id="__secret_config">
            try {
                window.__SECRET_CONFIG = {{config}}
            } catch (e) {
                window.__SECRET_CONFIG = '';
            }
            
        </script>
    </head>
    <body>
        <noscript>You need to enable JavaScript to run this app.</noscript>
        <div id="root"></div>

        <script type="module" src="/src/index.jsx"></script>
    </body>
</html>
`;
