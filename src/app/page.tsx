import type { Metadata } from 'next';
import { PortfolioPage } from '@/components/portfolio-page';
import { portfolioContent } from '@/content/portfolio-content';

export const metadata: Metadata = {
  title: portfolioContent.en.copy.title,
  description: portfolioContent.en.copy.description
};

export default function Home() {
  return <PortfolioPage locale="en" />;
}
