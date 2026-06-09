import type { Metadata } from 'next';
import { PortfolioPage } from '@/components/portfolio-page';
import { portfolioContent } from '@/content/portfolio-content';

export const metadata: Metadata = {
  title: portfolioContent.de.copy.title,
  description: portfolioContent.de.copy.description
};

export default function GermanHome() {
  return <PortfolioPage locale="de" />;
}
