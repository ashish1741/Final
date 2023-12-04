import React from 'react';
import './globals.css';
import { ClerkProvider } from "@clerk/nextjs";

type Metadata = {
  title: string;
  description: string;
  keywords: string;
};

const metadata: Metadata = {
  title: 'Pathshala - Online Learning Management System',
  description: 'Upgrade your skills with Pathshala, an online learning platform providing comprehensive learning material to enhance knowledge and expertise in various domains.',
  keywords: 'online learning, learning management system, skill enhancement, education platform, knowledge upgrade, online courses, Pathshala',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const pageTitle = `${metadata.title} - ${metadata.description}`;
  const descriptionContent = metadata.description;
  const keywordsContent = metadata.keywords;

  return (
    <ClerkProvider>
      <html lang="en">
        <head>
          <meta name="description" content={descriptionContent} />
          <meta name="keywords" content={keywordsContent} />
          <title>{pageTitle}</title>
          {/* Other necessary meta tags, styles, or scripts */}
        </head>
        <body >{children}</body>
      </html>
    </ClerkProvider>
  );
}
