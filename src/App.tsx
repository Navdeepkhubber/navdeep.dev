import { useState, type ReactNode } from 'react';
import {
  ArrowRight, BarChart3, BriefcaseBusiness, CheckCheck, Code2,
  Database, ExternalLink, Factory, Layers3,
  Github, Linkedin, Mail, Menu, Moon, Search, Shield, Sun, Trophy, X,
} from 'lucide-react';
import { personalProjects, profile } from './data';
import { Diagram } from './Diagram';
import { ThemeContext, type Theme } from './theme';

export type Page = 'home' | 'about' | 'security' | 'engineering' | 'contact' | 'projects';

const baseNav: { label: string; href: string; page: Page }[] = [
  { label: 'About', href: '/about/', page: 'about' },
  { label: 'Security', href: '/security/', page: 'security' },
  { label: 'Engineering', href: '/engineering/', page: 'engineering' },
  ...(personalProjects.length ? [{ label: 'Projects', href: '/projects/', page: 'projects' as Page }] : []),
  { label: 'Contact', href: '/contact/', page: 'contact' },
];

function Header({ page, theme, onThemeToggle }: { page: Page; theme: Theme; onThemeToggle: () => void }) {
  const [open, setOpen] = useState(false);
  return <header className={`site-header header-${page}`}><div className="page-shell header-inner">
    <a href="/" className="wordmark" aria-label="navdeep.dev home">navdeep.dev</a>
    <div className="header-controls">
    <nav id="primary-nav" className={open ? 'nav-links is-open' : 'nav-links'} aria-label="Main navigation">
      {baseNav.map(item => <a key={item.page} href={item.href} aria-current={page === item.page ? 'page' : undefined}>{item.label}</a>)}
    </nav>
    <button className="theme-toggle" type="button" onClick={onThemeToggle} aria-label={theme === 'dark' ? 'Switch to light mode' : 'Switch to dark mode'} aria-pressed={theme === 'dark'} title={theme === 'dark' ? 'Light mode' : 'Dark mode'}>{theme === 'dark' ? <Sun size={18} strokeWidth={1.8}/> : <Moon size={18} strokeWidth={1.8}/>}</button>
    <button className="menu-button" type="button" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="primary-nav" onClick={() => setOpen(!open)}>{open ? <X size={25}/> : <Menu size={25}/>}</button>
    </div>
  </div></header>;
}

function Footer({ page }: { page: Page }) {
  return <footer className="footer page-shell"><a className="wordmark" href="/">navdeep.dev</a><nav aria-label="Footer navigation">{baseNav.map(item => <a key={item.page} href={item.href} aria-current={page === item.page ? 'page' : undefined}>{item.label}</a>)}</nav><div className="socials"><a href={profile.github} aria-label="GitHub" target="_blank" rel="noopener noreferrer"><Github size={17}/></a><a href={profile.linkedin} aria-label="LinkedIn"><Linkedin size={17}/></a><a href={`mailto:${profile.email}`} aria-label="Email"><Mail size={17}/></a></div></footer>;
}

function Eyebrow({ children }: { children: ReactNode }) { return <p className="eyebrow">{children}</p>; }
function Action({ href, children, outline = false, arrow = true, download = false }: { href: string; children: ReactNode; outline?: boolean; arrow?: boolean; download?: boolean }) {
  return <a className={`action ${outline ? 'action-outline' : 'action-filled'}`} href={href} download={download || undefined}>{children}{arrow && <ArrowRight size={18} strokeWidth={1.7}/>}</a>;
}
function ArrowLink({ href, children }: { href: string; children: ReactNode }) { return <a className="arrow-link" href={href}>{children}<ArrowRight size={16} strokeWidth={1.7}/></a>; }

function Hero({ page, eyebrow, title, lead, sub, actions, art }: { page: Page; eyebrow: string; title: string; lead: string; sub?: string; actions?: ReactNode; art: ReactNode }) {
  return <section className={`hero hero-${page}`}><div className="hero-copy"><Eyebrow>{eyebrow}</Eyebrow><h1>{title}</h1><p className="hero-lead">{lead}</p>{sub && <p className="hero-sub">{sub}</p>}{actions && <div className="hero-actions">{actions}</div>}</div><div className="hero-art">{art}</div></section>;
}

function Stat({ icon, value, lines }: { icon: ReactNode; value: string; lines: string[] }) { return <div className="stat"><div className="icon-circle">{icon}</div><div><strong>{value}</strong>{lines.map(line => <span key={line}>{line}</span>)}</div></div>; }
function StatStrip({ children }: { children: ReactNode }) { return <section className="stat-strip" aria-label="Highlights">{children}</section>; }

function AboutPage() { return <>
  <Hero page="about" eyebrow="ABOUT" title="About me." lead="I’m Navdeep Singh – a data engineer and cybersecurity researcher." sub="I’m interested in how complex systems work, where they fail, and how to make them more reliable." actions={<><Action href="/contact/">Get in touch</Action><Action href="/engineering/" outline arrow={false}>Explore my work</Action></>} art={<Diagram name="about"/>}/>
  <section className="section journey-section"><Eyebrow>JOURNEY</Eyebrow><h2>The path so far.</h2><p className="section-lead">A few key milestones from my journey.</p><div className="journey-list">
    <div className="journey-item"><time>2021</time><span className="journey-pin"/><div><h3>Cybersecurity research</h3><p>Recognized in the Top 15 at NCIIPC, India for responsible vulnerability research and disclosure across real-world products.</p></div></div>
    <div className="journey-item"><time>2023</time><span className="journey-pin"/><div><h3>Computer Science graduate</h3><p>B.Tech in Computer Science and Engineering from Chandigarh Group of Colleges.</p></div></div>
    <div className="journey-item"><time>2023 – present</time><span className="journey-pin"/><div><h3>Data engineering at ZS</h3><p>Building Finance and Procurement data products that turn complex data into useful outcomes.</p></div></div>
  </div></section>
  <section className="section about-principles"><Eyebrow>APPROACH</Eyebrow><h2>How I work.</h2><p className="section-lead">Principles that guide what I do.</p><div className="principle-grid">
    <article className="principle-card"><div className="icon-circle"><Trophy/></div><h3>Stay curious</h3><p>I ask questions, explore how systems work, and dig into the details.</p></article>
    <article className="principle-card"><div className="icon-circle"><Shield/></div><h3>Build for trust</h3><p>I design and operate reliable systems with security, quality and people in mind.</p></article>
    <article className="principle-card"><div className="icon-circle"><Factory/></div><h3>Share what I learn</h3><p>I write and share insights on data engineering and cybersecurity.</p></article>
  </div></section>
  <section className="about-cta section"><div><Eyebrow>LET’S CONNECT</Eyebrow><h2>Get in touch.</h2><p>I’m always open to discussing interesting problems,<br/> collaborations, or opportunities.</p></div><Action href="/contact/">Send a message</Action></section>
</>; }

const disclosures = [
  { logo: '/disclosures/bls.png', name: 'BLS AG', className: 'bls', text: 'Swiss transport company connecting people by train, bus, boat, and freight.' },
  { logo: '/disclosures/hackerrank.png', name: 'HackerRank', className: 'hackerrank', text: 'U.S. platform for developer skills assessment, hiring, and practice.' },
  { logo: '/disclosures/swiggy-transparent.png', name: 'Swiggy', className: 'swiggy', text: 'Indian platform for food delivery, groceries, and local commerce.' },
  { logo: '/disclosures/tapplock.webp', name: 'Tapplock', className: 'tapplock', text: 'Canadian maker of fingerprint-enabled smart padlocks and access tools.' },
];

function SecurityPage() { return <>
  <Hero page="security" eyebrow="SECURITY RESEARCH" title="Security research." lead="I investigate how real-world applications fail, then report what I find responsibly." actions={<><Action href="#disclosures">See my disclosures</Action><Action href="/contact/" outline arrow={false}>Get in touch</Action></>} art={<Diagram name="security"/>}/>
  <StatStrip><Stat icon={<Trophy/>} value="Top 15" lines={['NCIIPC, India','Q3 2021']}/><Stat icon={<Shield/>} value="51+" lines={['security acknowledgments']}/><Stat icon={<BriefcaseBusiness/>} value="2021" lines={['Gurugram Police','cybercrime internship']}/></StatStrip>
  <section id="disclosures" className="section disclosures-section"><div className="section-head"><div><Eyebrow>DISCLOSURES</Eyebrow><h2>Selected disclosures</h2></div><ArrowLink href={profile.linkedin}>See more on my profile</ArrowLink></div><div className="disclosure-grid">{disclosures.map(item => <article className="disclosure-card" key={item.name}><div className={`brand-logo ${item.className}`}><img src={item.logo} alt="" loading="lazy"/></div><h3>{item.name}</h3><p>{item.text}</p><ExternalLink className="external-glyph" size={16} strokeWidth={1.6} aria-hidden="true"/></article>)}</div></section>
  <section className="section security-approach"><div className="approach-head"><div><Eyebrow>APPROACH</Eyebrow><h2>My approach</h2></div><p>I follow a careful, ethical, and structured process to find and report security issues.</p></div><div className="approach-steps">
    <article><span className="step-number">1</span><Search size={52} strokeWidth={1.4}/><h3>Investigate</h3><p>Explore real-world applications to identify security issues.</p></article>
    <article><span className="step-number">2</span><CheckCheck size={52} strokeWidth={1.4}/><h3>Validate</h3><p>Reproduce and verify the issue to confirm real impact.</p></article>
    <article><span className="step-number">3</span><Shield size={52} strokeWidth={1.4}/><h3>Disclose responsibly</h3><p>Report findings to the right teams with clear, actionable details.</p></article>
  </div></section>
  <section className="security-cta"><div><h2>Interested in working together?</h2><p>I’m open to discussing security research, responsible disclosure, or collaboration opportunities.</p></div><Action href="/contact/">Get in touch</Action><Diagram name="conversation"/></section>
</>; }

function EngineeringPage() { return <>
  <Hero page="engineering" eyebrow="ENGINEERING" title="Data engineering." lead="Building reliable data products that turn complex information into decisions people can trust." actions={<Action href="/contact/">Get in touch</Action>} art={<Diagram name="engineering"/>}/>
  <StatStrip><Stat icon={<Code2/>} value="Python & SQL" lines={['Build, transform, and analyze','data at scale.']}/><Stat icon={<Layers3/>} value="Databricks & AWS" lines={['Develop and operate modern','data platforms.']}/><Stat icon={<Shield/>} value="Data quality & CI/CD" lines={['Reliable, tested pipelines','in production.']}/></StatStrip>
  <section className="section engineering-work"><div className="section-head"><div><Eyebrow>SELECTED WORK</Eyebrow><h2>Selected work</h2></div><ArrowLink href="#experience">More about my work</ArrowLink></div>
    <article className="work-card" id="finance"><div className="work-copy"><span className="work-badge">ZS ASSOCIATES</span><h3>Finance analytics at global scale</h3><p>Unified manufacturing cost calculations across 7+ global sites with reusable transformations, reconciliation, and monitoring.</p><details><summary>Learn more <ArrowRight size={16}/></summary><p>Built SQL and PySpark transformations, data quality checks, and monitoring while migrating the pipeline to Databricks.</p></details></div><Diagram name="finance"/></article>
    <article className="work-card work-card-reverse" id="procurement"><Diagram name="procurement"/><div className="work-copy"><span className="work-badge">ZS ASSOCIATES</span><h3>AI-powered procurement analytics</h3><p>Led two engineers building a multilingual procurement pipeline with translation, classification, validation, and automated deployment.</p><details><summary>Learn more <ArrowRight size={16}/></summary><p>Used the GPT API for classification, built validation and API reliability controls, and automated Databricks deployment through GitLab CI/CD.</p></details></div></article>
  </section>
  <section className="section experience-section" id="experience"><Eyebrow>EXPERIENCE</Eyebrow><h2>Experience</h2><div className="experience-list"><div><span className="experience-dot"/><div><strong>Data Engineer II</strong><span>ZS Associates</span></div><time>2026 – present</time></div><div><span className="experience-dot"/><div><strong>Data Engineer I</strong><span>ZS Associates</span></div><time>2023 – 2025</time></div><div><span className="experience-dot"/><div><strong>Backend Software Engineer</strong><span>Suptho</span></div><time>2023</time></div></div></section>
  <section className="engineering-cta section"><div><h2>Let’s build something reliable.</h2><p>I’m always open to meaningful conversations about data, systems, and real-world impact.</p></div><Action href="/contact/">Get in touch</Action></section>
</>; }

function ContactPage() { return <>
  <Hero page="contact" eyebrow="GET IN TOUCH" title="Let’s connect." lead="I’m open to conversations about security research, data engineering, and thoughtful collaborations." art={<Diagram name="contact"/>}/>
  <section className="contact-cards"><article className="contact-card"><div className="icon-circle"><Mail size={36} strokeWidth={1.5}/></div><Eyebrow>EMAIL</Eyebrow><h2>{profile.email}</h2><Action href={`mailto:${profile.email}`}>Send an email</Action></article><article className="contact-card"><div className="icon-circle linkedin-icon">in</div><Eyebrow>LINKEDIN</Eyebrow><h2>linkedin.com/in/navdeepsk</h2><Action href={profile.linkedin} outline arrow={false}>View profile</Action></article></section>
  <section className="resume-section section"><div><Eyebrow>LOOKING FOR MY EXPERIENCE?</Eyebrow><h2>Explore my work or<br/>download my résumé.</h2><div className="hero-actions"><Action href="/engineering/">Explore my work</Action><Action href={profile.resume} outline arrow={false} download>Download résumé</Action></div></div><Diagram name="resume"/></section>
</>; }

function HomePage() { return <>
  <Hero page="home" eyebrow="DATA ENGINEER · CYBERSECURITY RESEARCHER" title="Hi, I’m Navdeep Singh." lead="I build reliable data systems and research how real-world systems can be made safer." actions={<><Action href="/engineering/">Explore my work</Action><Action href="/contact/" outline arrow={false}>Get in touch</Action></>} art={<Diagram name="home"/>}/>
  <StatStrip><Stat icon={<Trophy/>} value="Top 15" lines={['NCIIPC, India']}/><Stat icon={<Shield/>} value="51+" lines={['security acknowledgments']}/><Stat icon={<Factory/>} value="7+" lines={['global manufacturing sites']}/></StatStrip>
  <section className="home-feature-grid"><article className="home-feature"><Eyebrow>SECURITY RESEARCH</Eyebrow><h2>Security research</h2><p>Responsible vulnerability research and disclosure across real-world products.</p><ArrowLink href="/security/">Explore security work</ArrowLink><Shield className="home-feature-icon" size={77} strokeWidth={1.1}/></article><article className="home-feature"><Eyebrow>DATA ENGINEERING</Eyebrow><h2>Data engineering</h2><p>Designing and operating reliable, scalable data systems that turn complex data into useful outcomes.</p><ArrowLink href="/engineering/">Explore engineering work</ArrowLink><Database className="home-feature-icon" size={77} strokeWidth={1.1}/></article></section>
  <section className="section home-about"><div><Eyebrow>ABOUT</Eyebrow><h2>A little about me</h2><p>I’m drawn to the details behind dependable systems — from data quality to responsible security research.</p><ArrowLink href="/about/">Read my story</ArrowLink></div><Diagram name="homeWork"/></section>
  <section className="section home-work"><Eyebrow>FEATURED WORK</Eyebrow><h2>Selected projects</h2><div className="home-project-grid"><article><Eyebrow>DATA ENGINEERING</Eyebrow><h3>Finance analytics at global scale</h3><p>Building reliable data pipelines and analytics systems for global operations.</p><ArrowLink href="/engineering/#finance">View project</ArrowLink><BarChart3 size={50} strokeWidth={1.2}/></article><article><Eyebrow>DATA & AI</Eyebrow><h3>AI-powered procurement analytics</h3><p>Using AI and data engineering to uncover insights in complex procurement data.</p><ArrowLink href="/engineering/#procurement">View project</ArrowLink><Database size={50} strokeWidth={1.2}/></article></div></section>
  <section className="section home-cta"><Eyebrow>LET’S CONNECT</Eyebrow><h2>Let’s connect.</h2><p>Have a project in mind or just want to say hello?</p><Action href="/contact/">Get in touch</Action></section>
</>; }

function ProjectsPage() { return <section className="section projects-page"><Eyebrow>PERSONAL PROJECTS</Eyebrow><h1>Projects.</h1>{personalProjects.length ? <div className="personal-project-grid">{personalProjects.map(project => <article key={project.title}><h2>{project.title}</h2><p>{project.description}</p><div className="project-tags">{project.tags.map(tag => <span key={tag}>{tag}</span>)}</div><ArrowLink href={project.liveUrl}>View live project</ArrowLink></article>)}</div> : <p>Projects will appear here when I’m ready to share them.</p>}</section>; }

export function App({ page }: { page: Page }) {
  const [theme, setTheme] = useState<Theme>(() => document.documentElement.dataset.theme === 'dark' ? 'dark' : 'light');
  const toggleTheme = () => {
    const next = theme === 'dark' ? 'light' : 'dark';
    document.documentElement.dataset.theme = next;
    document.querySelector('meta[name="theme-color"]')?.setAttribute('content', next === 'dark' ? '#0b192b' : '#f9f9f6');
    try { localStorage.setItem('navdeep-theme', next); } catch { /* Browsers may block storage. */ }
    setTheme(next);
  };
  const content = { home: <HomePage/>, about: <AboutPage/>, security: <SecurityPage/>, engineering: <EngineeringPage/>, contact: <ContactPage/>, projects: <ProjectsPage/> }[page] ?? <HomePage/>;
  return <ThemeContext.Provider value={theme}><a className="skip-link" href="#main">Skip to content</a><Header page={page} theme={theme} onThemeToggle={toggleTheme}/><main className={`page-shell page-${page}`} id="main">{content}</main><Footer page={page}/></ThemeContext.Provider>;
}
