import React from 'react';
import { Helmet } from 'react-helmet';

interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
}

export const SEO: React.FC<SEOProps> = ({
  title = 'Andrea Fernandes | Portfolio',
  description = 'Personal portfolio of Andrea Fernandes, a Computer Science student and full stack developer specializing in React, Python, and AI solutions.',
  keywords = [
    'Andrea Fernandes',
    'portfolio',
    'web developer',
    'full stack developer',
    'React',
    'Python',
    'AI projects',
    'St Joseph Engineering College'
  ],
  canonicalUrl = 'http://localhost:3000',
}) => {
  return (
    <Helmet htmlAttributes={{ lang: 'en' }}>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:url" content={canonicalUrl} />
      <link rel="canonical" href={canonicalUrl} />
      <meta name="viewport" content="width=device-width, initial-scale=1" />
      <link rel="icon" href="/favicon.ico" />
    </Helmet>
  );
};
