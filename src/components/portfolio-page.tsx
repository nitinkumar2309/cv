import Image from 'next/image';
import { ContactForm } from '@/components/contact-form';
import { ScrollAffordance } from '@/components/scroll-affordance';
import { ScrollMotion } from '@/components/scroll-motion';
import type { LocaleKey } from '@/content/portfolio-content';
import { portfolioContent } from '@/content/portfolio-content';

type PortfolioPageProps = {
  locale: LocaleKey;
};

export function PortfolioPage({ locale }: PortfolioPageProps) {
  const { profile, copy } = portfolioContent[locale];
  const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? '';

  const withBasePath = (path: string) => {
    if (!basePath) {
      return path;
    }

    return `${basePath}${path}`;
  };

  return (
    <main className="page-shell">
      <ScrollAffordance />
      <ScrollMotion />
      <header className="topbar">
        <div className="container topbar-inner">
          <nav className="topnav" aria-label="Primary navigation">
            <a href="#home" className="topnav-link">
              {copy.nav.home}
            </a>
            <a href="#education" className="topnav-link">
              {copy.nav.education}
            </a>
            <a href="#projects" className="topnav-link">
              {copy.nav.projects}
            </a>
            <a href="#work-experience" className="topnav-link">
              {copy.nav.experience}
            </a>
            <a href="#skills" className="topnav-link">
              {copy.nav.skills}
            </a>
            <a href="#contact" className="topnav-link">
              {copy.nav.contact}
            </a>
          </nav>
          <a
            className="language-badge topbar-badge"
            href={withBasePath(copy.hero.languageBadgeHref)}
            aria-label={copy.hero.languageBadgeLabel}
          >
            {copy.hero.languageBadgeLabel}
          </a>
        </div>
      </header>

      <section className="hero" id="home">
        <div className="container hero-shell simple-hero">
          <div className="hero-portrait">
            <div className="hero-portrait-frame">
              <Image src={profile.photo} alt={copy.hero.alt} width={320} height={320} priority />
            </div>
          </div>
          <h1>
            {copy.hero.introPrefix} <span>{profile.name}</span>.
          </h1>
          <p className="hero-lead">{copy.hero.lead}</p>
          <p className="hero-copytext">
            {copy.hero.motivationPrefix} {copy.hero.locationSuffix}
          </p>

          <div className="hero-actions">
            <a className="action-link primary" href="#contact">
              {copy.hero.actions.contact}
            </a>
            <a className="action-link" href={withBasePath('/downloads/nitin-kumar-cv.pdf')} download>
              {copy.hero.actions.primaryDownload}
            </a>
            <a className="action-link" href={withBasePath('/downloads/nitin-kumar-cv-de.pdf')} download>
              {copy.hero.actions.secondaryDownload}
            </a>
          </div>

          <div className="hero-stats" aria-label="Quick facts">
            {copy.quickFacts.map((item) => (
              <article key={item.label} className="stat-card">
                <span className="value">{item.value}</span>
                <span className="label">{item.label}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" aria-label="Overview" data-reveal>
        <div className="container">
          <div className="card-grid four-up overview-grid">
            <article className="panel overview-card">
              <span>{copy.overview.educationLabel}</span>
              <strong>{copy.overview.education}</strong>
            </article>
            <article className="panel overview-card">
              <span>{copy.overview.focusLabel}</span>
              <strong>{copy.overview.focus}</strong>
            </article>
            <article className="panel overview-card">
              <span>{copy.overview.locationLabel}</span>
              <strong>{copy.overview.location}</strong>
            </article>
            <article className="panel overview-card">
              <span>{copy.overview.availabilityLabel}</span>
              <strong>{copy.overview.availability}</strong>
            </article>
            <article className="panel overview-card">
              <span>{copy.overview.languages}</span>
              <strong>{profile.languages.join(' · ')}</strong>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="education" data-reveal>
        <div className="container">
          <div className="section-heading centered">
            <h2>{copy.sections.education}</h2>
          </div>
          <div className="card-grid two-up">
            {profile.education.map((entry) => (
              <article key={entry.title + entry.period} className="panel resume-card">
                <span className="card-tag">{copy.cardTags.education}</span>
                <h3>{entry.title}</h3>
                <p className="subtle">{entry.school}</p>
                <p className="period">{entry.period}</p>
                <p>{entry.details}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="projects" data-reveal>
        <div className="container">
          <div className="section-heading centered">
            <h2>{copy.sections.projects}</h2>
          </div>
          <div className="card-grid two-up">
            {profile.projects.map((project) => (
              <article key={project.title} className="panel resume-card">
                <span className="card-tag">{copy.cardTags.project}</span>
                <h3>{project.title}</h3>
                <p className="subtle">{project.summary}</p>
                <p className="period">{project.period}</p>
                <ul>
                  {project.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="work-experience" data-reveal>
        <div className="container">
          <div className="section-heading centered">
            <h2>{copy.sections.experience}</h2>
          </div>
          <div className="card-grid one-up">
            {profile.experience.map((entry) => (
              <article key={entry.title + entry.period} className="panel resume-card">
                <span className="card-tag">{copy.cardTags.experience}</span>
                <h3>{entry.title}</h3>
                <p className="subtle">{entry.company}</p>
                <p className="period">{entry.period}</p>
                <ul>
                  {entry.bullets.map((bullet) => (
                    <li key={bullet}>{bullet}</li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="skills" data-reveal>
        <div className="container">
          <div className="section-heading centered">
            <h2>{copy.sections.skills}</h2>
          </div>
          <div className="card-grid three-up">
            <article className="panel skill-card">
              <h3>{copy.skills.programming}</h3>
              <ul className="inline-list">
                {profile.skills.programming.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="panel skill-card">
              <h3>{copy.skills.machineLearning}</h3>
              <ul className="inline-list">
                {profile.skills.machineLearning.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
            <article className="panel skill-card">
              <h3>{copy.skills.strengths}</h3>
              <ul className="inline-list">
                {profile.skills.strengths.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </article>
          </div>
        </div>
      </section>

      <section className="section" id="contact" data-reveal>
        <div className="container">
          <div className="section-heading centered">
            <h2>{copy.sections.contact}</h2>
          </div>
          <div className="contact-grid">
            <article className="panel contact-copy">
              <h3>{copy.contact.heading}</h3>
              <p>{copy.contact.body}</p>
              <ul className="contact-list">
                <li>
                  <span>{copy.contact.labels.email}</span>
                  <a href={`mailto:${profile.email}`}>{profile.email}</a>
                </li>
                <li>
                  <span>{copy.contact.labels.phone}</span>
                  <a href={`tel:${profile.phone.replace(/\s+/g, '')}`}>{profile.phone}</a>
                </li>
                <li>
                  <span>{copy.contact.labels.location}</span>
                  <span>{profile.location}</span>
                </li>
              </ul>
            </article>
            <article className="panel contact-form-wrap">
              <ContactForm copy={copy.contact.form} locale={locale} recipientEmail={profile.email} />
            </article>
          </div>
        </div>
      </section>

      <footer className="footer">
        <div className="container">{copy.footer}</div>
      </footer>
    </main>
  );
}
