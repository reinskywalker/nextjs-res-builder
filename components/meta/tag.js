import Head from "next/head";

export default function Meta({ title, keywords, description }) {
    const homepage = "https://reinskywalker.tech/next-resumebuilder/";
    const logo = "https://reinskywalker.tech/next-resumebuilder/assets/logo.png";
    const fevicon = "https://reinskywalker.tech/next-resumebuilder/assets/favicon.ico";

    function isiteJsonLd() {
        return {
            __html: `{
                "@context": "https://schema.org",
                "@type": "Organization",
                "url": ${homepage},
                "logo": ${logo},
                "contactPoint": {
                    "@type": "ContactPoint",
                    "telephone": "+62 85156624640",
                    "contactType": "customer service"
                },
                "image": ${logo},
                "description": ${description},
                "founder": "Andre Reynaldi Lusikooy",
                "foundingDate": "2023",
                "foundingLocation": "ID",
                "email": "reynaldi@outlook.jp",
                "telephone": "+62 85156624640",
                "areaServed": "ID",
                "keywords": ${keywords},
                "mainEntityOfPage": ${homepage},
                "knowsAbout": ${keywords},
                "knowsLanguage": "English",
                "memberOf": "Andre Reynaldi Lusikooy",
                "owns": "Andre Reynaldi Lusikooy",
                "publishingPrinciples": ${homepage},
                "slogan": "coba observable next"
            }`
        }
    }

    return (
        <Head>
            <meta name="viewport" content="width=device-width, initial-scale=1" />
            <meta name="keywords" content={keywords} />
            <meta name="description" content={description} />
            <meta charSet="utf-8" />
            <link rel="icon" href={fevicon} />
            <title>{title}</title>
            <meta type="copyright" content="reinskywalker" />
            <meta type="author" content="Andre Reynaldi Lusikooy" />
            <meta property="og:type" content="website" />
            <meta property="og:url" content={homepage} />
            <meta property="og:title" content={title} />
            <meta
                property="og:description"
                content={description} />
            <meta property="twitter:card" content="summary_large_image" />
            <meta property="twitter:url" content={homepage} />
            <meta property="twitter:title" content={title} />
            <meta
                property="twitter:description"
                content={description} />
            <meta property="twitter:image" content={logo} />
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={isiteJsonLd()}
                key="isiteJsonLd"
            />
        </Head>
    );
}