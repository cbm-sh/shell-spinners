import type { Metadata } from "next";

export const METADATA: Metadata = {
    title: {
        default: 'cli-loaders',
        template: '%s - cli-loaders',
    },
    metadataBase: new URL('https://cliloaders.com/'),
    description: 'A collection of copy and paste CLI loaders',
    keywords: [
        'cli',
        'loaders',
        'cli-loaders',
        'cli-spinners',
        'cli-progress-bars',
        'cli-animations',
        'cli-loading-indicators',
        'cli-spinner',
        'cli-progress-bar',
        'cli-loading-indicator',
        'spinners',
        'progress-bars',
        'animations',
        'loading-indicators',
        'spinner',
        'progress-bar',
        'loading-indicator',
        'page-loaders',
        'nextjs loaders',
    ],
    authors: [
        {
            name: 'Christian B. Martinez',
            url: 'https://christianbmartinez.com',
        },
    ],
    creator: 'Christian B. Martinez',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://cliloaders.com/',
        title: 'cli-loaders',
        description: 'A collection of copy and paste CLI loaders',
        siteName: 'cli-loaders',
        images: [
            {
                url: 'https://cliloaders.com/og.jpg',
                width: 1200,
                height: 630,
                alt: 'cli-loaders | A collection of copy and paste CLI loaders',
            },
        ],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'cli-loaders',
        description: 'A collection of copy and paste CLI loaders',
        images: ['https://cliloaders.com/og.jpg'],
        creator: 'https://x.com/cbmonx',
    },
    icons: {
        icon: '/favicon.ico',
        shortcut: '/icon.png',
        apple: '/apple-touch-icon.png',
    },
};