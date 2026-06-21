import {
  ArrowUpRight,
  BadgeCheck,
  BrainCircuit,
  Cloud,
  Code2,
  Database,
  Github,
  Layers3,
  Linkedin,
  Mail,
  Menu,
  RadioTower,
  ServerCog,
  ShieldCheck,
  TerminalSquare,
  X,
  type LucideIcon,
} from 'lucide-react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import { PropsWithChildren, useRef, useState } from 'react';

const profile = {
  name: 'Yash Gupta',
  title: 'Software Engineer',
  location: 'Alwar, Rajasthan / Gurugram, Haryana, India',
  email: '2004yggupta@gmail.com',
  github: 'https://github.com/gitsofyash',
  linkedin: 'https://www.linkedin.com/in/yash-gupta2601',
  gssoc: 'https://gssoc.girlscript.org/profile/76a55d02-90b7-43d6-a2cc-9bedf1b445a8',
};

const skillLogos = [
  {
    name: 'Python',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/python/python-original.svg',
  },
  {
    name: 'C++',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/cplusplus/cplusplus-original.svg',
  },
  {
    name: 'JavaScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  },
  {
    name: 'TypeScript',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg',
  },
  {
    name: 'React',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg',
  },
  {
    name: 'AWS',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/amazonwebservices/amazonwebservices-original-wordmark.svg',
  },
  {
    name: 'Docker',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  },
  {
    name: 'Kafka',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apachekafka/apachekafka-original.svg',
  },
  {
    name: 'PostgreSQL',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg',
  },
  {
    name: 'Redis',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg',
  },
  {
    name: 'Flask',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/flask/flask-original.svg',
  },
  {
    name: 'FastAPI',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/fastapi/fastapi-original.svg',
  },
  {
    name: 'Linux',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg',
  },
  {
    name: 'Git',
    src: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/git/git-original.svg',
  },
];

const skills = [
  'Python',
  'C++',
  'JavaScript',
  'TypeScript',
  'SQL',
  'AWS',
  'Docker',
  'Kafka',
  'PostgreSQL',
  'Redis',
  'Flask',
  'FastAPI',
  'LangChain',
  'OpenAI API',
  'Pinecone',
  'CI/CD',
  'Observability',
  'System Design',
];

const stats = [
  { value: '25+', label: 'Open source PRs merged' },
  { value: '10k+', label: 'Telemetry messages/sec designed for' },
  { value: '92%', label: 'Unit test coverage on pipeline work' },
  { value: '60%', label: 'Storage-cost reduction in AWS project' },
];

const experiences = [
  {
    role: 'Software Engineer',
    company: 'Nippon Audiotronix Pvt. Ltd.',
    period: 'Mar 2026 - Present',
    location: 'Gurugram',
    points: [
      'Develop backend services, REST APIs, and data-processing workflows for production applications.',
      'Design containerized services with Docker and contribute to Git-based deployment and code-review practices.',
      'Participate in architecture discussions, reusable service design, and technical documentation.',
    ],
  },
  {
    role: 'Software Engineer Intern',
    company: 'Nippon Audiotronix Pvt. Ltd.',
    period: 'Sept 2025 - Mar 2026',
    location: 'Gurugram',
    points: [
      'Built Python/C++ services for high-frequency telemetry streams with sub-50ms latency targets.',
      'Implemented fault-tolerant message parsing and protocol integration for distributed telemetry workflows.',
      'Improved regression coverage and optimized C++ components, reducing heap allocation by 40%.',
    ],
  },
];

const projects = [
  {
    number: '01',
    name: 'Distributed File Deduplication & Metadata Service',
    category: 'AWS / Serverless Backend',
    summary:
      'A serverless file metadata platform with hash-based deduplication, secure REST APIs, JWT/RBAC, S3 pre-signed URLs, DynamoDB indexes, and CloudWatch/X-Ray diagnostics.',
    impact: ['Reduced duplicate-heavy storage costs by 60%', 'Designed metadata access for 1M+ records', 'Targeted sub-100ms retrieval paths'],
    stack: ['Python', 'AWS Lambda', 'API Gateway', 'S3', 'DynamoDB', 'IAM'],
  },
  {
    number: '02',
    name: 'CloudMon Real-Time AWS Resource Monitor',
    category: 'Cloud Dashboard',
    summary:
      'A resource monitoring dashboard that collects EC2, RDS, and S3 metrics, stores time-series data in PostgreSQL, and surfaces cost-saving recommendations.',
    impact: ['Reduced idle resource costs by 25%', 'Added resilient Boto3 polling with retries', 'Containerized deployment using Docker'],
    stack: ['Python', 'Flask', 'Boto3', 'Docker', 'PostgreSQL', 'AWS'],
  },
  {
    number: '03',
    name: 'Real-Time Sensor Telemetry Pipeline',
    category: 'Event-Driven Systems',
    summary:
      'A Kafka-based ingestion and anomaly-detection pipeline for high-throughput telemetry, alerting, and query-optimized metric storage.',
    impact: ['Processed 10,000+ messages/sec', 'Reduced query latency from 5s to 500ms', 'Built 100+ unit tests'],
    stack: ['Python', 'Kafka', 'PostgreSQL', 'Redis', 'Unit Testing'],
  },
  {
    number: '04',
    name: 'Context-Aware Support Agent with RAG',
    category: 'AI Engineering',
    summary:
      'A retrieval-augmented support agent that grounds LLM answers in technical documentation using embeddings, vector search, and conversation memory.',
    impact: ['Sub-second context retrieval', 'Reduced hallucinations with grounded responses', 'Deployed concurrent Flask API sessions'],
    stack: ['Python', 'LangChain', 'OpenAI API', 'Pinecone', 'Flask', 'AWS EC2'],
  },
];

const capabilities = [
  {
    icon: ServerCog,
    title: 'Backend Engineering',
    text: 'REST APIs, authentication, microservices, async processing, clean service boundaries, and production-focused error handling.',
  },
  {
    icon: Cloud,
    title: 'Cloud Infrastructure',
    text: 'AWS Lambda, EC2, S3, RDS, DynamoDB, API Gateway, IAM, CloudWatch, Docker, and deployment workflows.',
  },
  {
    icon: RadioTower,
    title: 'Real-Time Systems',
    text: 'Kafka consumers, telemetry streams, fault-tolerant parsing, anomaly detection, and low-latency data processing.',
  },
  {
    icon: BrainCircuit,
    title: 'AI Developer Tools',
    text: 'RAG pipelines, document Q&A, LLM-powered code review, log analysis, prompt design, and vector retrieval.',
  },
  {
    icon: Database,
    title: 'Data Platforms',
    text: 'PostgreSQL, DynamoDB, Redis, indexing strategy, schema design, caching, and query optimization.',
  },
  {
    icon: ShieldCheck,
    title: 'Quality & Reliability',
    text: 'Unit testing, CI/CD, observability, debugging workflows, performance tuning, and documentation.',
  },
];

function FadeIn({
  children,
  delay = 0,
  duration = 0.7,
  x = 0,
  y = 30,
  className,
}: PropsWithChildren<{
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  className?: string;
}>) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '40px', amount: 0.1 }}
      transition={{ delay, duration, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </motion.div>
  );
}

function ContactButton({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href={`mailto:${profile.email}`}
      className={`inline-flex min-h-12 items-center justify-center gap-2 rounded-full text-sm font-semibold uppercase tracking-widest text-white outline outline-2 outline-white transition duration-200 hover:scale-[1.03] focus-visible:scale-[1.03] ${
        compact ? 'px-6 py-3' : 'px-7 py-3.5 sm:px-10 sm:py-4'
      }`}
      style={{
        background:
          'linear-gradient(123deg, #18011F 7%, #B600A8 37%, #7621B0 72%, #BE4C00 100%)',
        boxShadow: '0px 4px 4px rgba(181, 1, 167, 0.25), 4px 4px 12px #7721B1 inset',
        outlineOffset: '-3px',
      }}
    >
      Contact Me <Mail size={18} />
    </a>
  );
}

function SectionHeading({
  kicker,
  title,
  align = 'center',
}: {
  kicker: string;
  title: string;
  align?: 'left' | 'center';
}) {
  return (
    <div className={align === 'center' ? 'mx-auto max-w-5xl text-center' : 'max-w-5xl'}>
      <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B600A8]">
        {kicker}
      </p>
      <h2 className="hero-heading text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-none tracking-tight">
        {title}
      </h2>
    </div>
  );
}

function HeroSection() {
  const navItems = ['About', 'Experience', 'Projects', 'Contact'];
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <section
      className="relative min-h-screen overflow-hidden bg-[#0C0C0C] px-4 pb-8 text-[#D7E2EA] sm:px-6 md:px-10"
      id="home"
      aria-label="Hero introduction"
    >
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_78%_24%,rgba(182,0,168,0.28),transparent_32%),radial-gradient(circle_at_28%_82%,rgba(190,76,0,0.14),transparent_30%)]" />

      <FadeIn y={-20} className="relative z-30">
        <nav className="flex items-center justify-between pt-4 md:pt-8" aria-label="Main navigation">
          <a
            href="#home"
            className="inline-flex min-h-11 min-w-11 items-center justify-center text-sm font-bold tracking-widest transition hover:opacity-70 md:text-lg"
            aria-label="Go to top"
          >
            YG
          </a>
          <button
            type="button"
            className="inline-flex min-h-11 min-w-11 items-center justify-center rounded-full border border-[#D7E2EA]/25 bg-[#D7E2EA]/5 text-[#D7E2EA] sm:hidden"
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
            aria-expanded={menuOpen}
            onClick={() => setMenuOpen((open) => !open)}
          >
            {menuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
          <div className="hidden items-center gap-4 sm:flex md:gap-8">
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="inline-flex min-h-11 items-center text-sm font-semibold uppercase tracking-widest transition hover:opacity-70 md:text-lg"
              >
                {item}
              </a>
            ))}
          </div>
        </nav>
        {menuOpen && (
          <motion.div
            className="absolute left-0 right-0 top-20 z-40 rounded-3xl border border-[#D7E2EA]/20 bg-[#121214]/95 p-3 shadow-[0_24px_80px_rgba(0,0,0,0.45)] backdrop-blur sm:hidden"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.22, ease: [0.25, 0.1, 0.25, 1] }}
          >
            {navItems.map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase()}`}
                className="flex min-h-12 items-center rounded-2xl px-4 text-sm font-semibold uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
          </motion.div>
        )}
      </FadeIn>

      <div className="relative z-10 mx-auto grid min-h-[calc(100vh-76px)] max-w-7xl items-center gap-8 py-8 md:grid-cols-[1.05fr_0.95fr] md:gap-10 md:py-14">
        <FadeIn y={40} className="max-w-4xl">
          <p className="mb-5 inline-flex rounded-full border border-[#D7E2EA]/20 px-4 py-2 text-xs font-semibold uppercase tracking-[0.24em] text-[#D7E2EA]/80">
            Backend • Cloud • AI Engineering
          </p>
          <h1 className="hero-heading text-[clamp(4.2rem,12vw,13rem)] font-black uppercase leading-[0.84] tracking-tight">
            Yash Gupta
          </h1>
          <p className="mt-6 max-w-2xl text-lg font-light leading-relaxed text-[#D7E2EA]/82 sm:text-xl md:text-2xl">
            Software Engineer building scalable APIs, event-driven data pipelines, cloud services, and AI-enabled developer tools.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <ContactButton />
            <a
              href={profile.github}
              target="_blank"
              rel="noreferrer"
              className="inline-flex min-h-12 items-center justify-center gap-2 rounded-full border border-[#D7E2EA]/35 px-7 py-3.5 text-sm font-semibold uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10"
            >
              GitHub <Github size={18} />
            </a>
          </div>
        </FadeIn>

        <FadeIn delay={0.18} y={28}>
          <div className="relative mx-auto max-w-[285px] sm:max-w-[360px] md:max-w-[460px]">
            <div className="absolute -inset-5 rounded-[3rem] bg-[#B600A8]/12 blur-3xl" />
            <div className="relative overflow-hidden rounded-[2.3rem] border border-[#D7E2EA]/18 bg-[#101012] shadow-[0_30px_110px_rgba(0,0,0,0.45)]">
              <img
                src="https://api.dicebear.com/9.x/notionists/svg?seed=YashGupta&backgroundColor=0c0c0c&body=variant01&gesture=handUp"
                alt="Yash Gupta professional avatar"
                className="aspect-[0.9] w-full object-cover object-center"
              />
              <div className="absolute inset-x-0 bottom-0 bg-gradient-to-t from-[#0C0C0C] via-[#0C0C0C]/55 to-transparent p-5">
                <p className="text-sm font-semibold uppercase tracking-[0.24em] text-[#D7E2EA]">
                  Available for backend, cloud, platform, and AI roles
                </p>
              </div>
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function SkillShowcaseSection() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const rowOneX = useTransform(scrollYProgress, [0, 1], [-160, 160]);
  const rowTwoX = useTransform(scrollYProgress, [0, 1], [160, -160]);

  return (
    <section
      ref={ref}
      className="overflow-hidden bg-[#0C0C0C] px-4 py-16 sm:px-6 md:px-10"
      aria-label="Technology stack"
    >
      <div className="mx-auto mb-10 max-w-7xl">
        <SectionHeading kicker="Tech Stack" title="Tools I Work With" align="left" />
      </div>
      <LogoRow items={skillLogos.slice(0, 7)} x={rowOneX} />
      <LogoRow items={skillLogos.slice(7)} x={rowTwoX} />
    </section>
  );
}

function LogoRow({
  items,
  x,
}: {
  items: typeof skillLogos;
  x: MotionValue<number>;
}) {
  return (
    <motion.div className="mb-4 flex gap-4" style={{ x }}>
      {[...items, ...items, ...items].map((item, index) => (
        <div
          key={`${item.name}-${index}`}
          className="flex h-28 w-36 shrink-0 flex-col items-center justify-center gap-3 rounded-3xl border border-[#D7E2EA]/14 bg-[#D7E2EA]/5 p-5 text-center shadow-[0_18px_70px_rgba(0,0,0,0.22)] sm:h-32 sm:w-44"
        >
          <img src={item.src} alt={`${item.name} logo`} className="h-10 w-10 object-contain sm:h-12 sm:w-12" />
          <span className="text-xs font-semibold uppercase tracking-[0.18em] text-[#D7E2EA]/80">
            {item.name}
          </span>
        </div>
      ))}
    </motion.div>
  );
}

function AboutSection() {
  return (
    <section
      id="about"
      className="bg-[#0C0C0C] px-4 py-20 text-[#D7E2EA] sm:px-6 md:px-10 md:py-28"
      aria-label="About Yash Gupta"
    >
      <div className="mx-auto grid max-w-7xl gap-10 lg:grid-cols-[0.85fr_1.15fr] lg:items-start">
        <FadeIn>
          <SectionHeading kicker="About" title="Engineer For Reliable Product Systems" align="left" />
        </FadeIn>
        <FadeIn delay={0.1}>
          <div className="space-y-6 text-lg font-light leading-relaxed text-[#D7E2EA]/78 md:text-xl">
            <p>
              I am a Software Engineer focused on backend, cloud, and AI-enabled systems. My work sits close to the parts of a product that must stay dependable: APIs, event pipelines, database access, deployment workflows, and observability.
            </p>
            <p>
              I enjoy turning messy technical requirements into clean services with measurable behavior. Recent work includes telemetry processing, AWS-backed metadata services, cloud monitoring dashboards, RAG systems, and developer automation.
            </p>
          </div>
          <div className="mt-8 grid gap-3 sm:grid-cols-2">
            {stats.map((item) => (
              <div key={item.label} className="rounded-3xl border border-[#D7E2EA]/14 bg-[#D7E2EA]/5 p-5">
                <strong className="block text-3xl font-black text-[#D7E2EA]">{item.value}</strong>
                <span className="mt-2 block text-sm font-medium uppercase tracking-[0.18em] text-[#D7E2EA]/62">
                  {item.label}
                </span>
              </div>
            ))}
          </div>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {skills.slice(0, 12).map((skill) => (
              <span
                key={skill}
                className="rounded-full border border-[#D7E2EA]/20 px-3.5 py-2 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/82"
              >
                {skill}
              </span>
            ))}
          </div>
        </FadeIn>
      </div>
    </section>
  );
}

function ExperienceSection() {
  return (
    <section
      id="experience"
      className="rounded-t-[34px] bg-white px-4 py-18 text-[#0C0C0C] sm:px-6 md:px-10 md:py-28"
      aria-label="Professional experience"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B600A8]">
            Experience
          </p>
          <h2 className="text-[clamp(3rem,10vw,9rem)] font-black uppercase leading-none tracking-tight">
            Work History
          </h2>
        </FadeIn>
        <div className="mt-14 grid gap-5">
          {experiences.map((item, index) => (
            <FadeIn key={`${item.role}-${item.period}`} delay={index * 0.08}>
              <article className="grid gap-6 border-t border-[#0C0C0C]/14 py-8 last:border-b md:grid-cols-[0.42fr_0.58fr]">
                <div>
                  <p className="text-sm font-semibold uppercase tracking-[0.22em] text-[#0C0C0C]/52">
                    {item.period} / {item.location}
                  </p>
                  <h3 className="mt-3 text-3xl font-black uppercase leading-tight md:text-5xl">
                    {item.role}
                  </h3>
                  <p className="mt-2 text-xl font-medium text-[#0C0C0C]/70">{item.company}</p>
                </div>
                <ul className="space-y-3 text-base leading-relaxed text-[#0C0C0C]/68 md:text-lg">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <span className="mt-2 h-2 w-2 shrink-0 rounded-full bg-[#B600A8]" />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectsSection() {
  return (
    <section
      id="projects"
      className="-mt-10 rounded-t-[34px] bg-[#0C0C0C] px-4 py-20 text-[#D7E2EA] sm:px-6 md:px-10 md:py-28"
      aria-label="Featured projects"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading kicker="Projects" title="Selected Engineering Work" align="left" />
        </FadeIn>
        <div className="mt-14 grid gap-5 lg:grid-cols-2">
          {projects.map((project, index) => (
            <FadeIn key={project.name} delay={index * 0.06}>
              <article className="group flex h-full flex-col rounded-[2rem] border border-[#D7E2EA]/16 bg-[#D7E2EA]/5 p-5 transition duration-300 hover:-translate-y-1 hover:border-[#D7E2EA]/35 sm:p-7">
                <div className="mb-8 flex items-start justify-between gap-5">
                  <span className="text-5xl font-black leading-none text-[#D7E2EA]/28">{project.number}</span>
                  <span className="rounded-full border border-[#D7E2EA]/18 px-3 py-1.5 text-xs font-semibold uppercase tracking-[0.18em] text-[#D7E2EA]/70">
                    {project.category}
                  </span>
                </div>
                <h3 className="text-2xl font-black uppercase leading-tight text-[#D7E2EA] md:text-4xl">
                  {project.name}
                </h3>
                <p className="mt-5 text-base font-light leading-relaxed text-[#D7E2EA]/72 md:text-lg">
                  {project.summary}
                </p>
                <div className="mt-6 grid gap-3">
                  {project.impact.map((item) => (
                    <div key={item} className="flex gap-3 text-sm font-medium uppercase tracking-wider text-[#D7E2EA]/76">
                      <BadgeCheck className="mt-0.5 h-4 w-4 shrink-0 text-[#B600A8]" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-auto flex flex-wrap gap-2 pt-8">
                  {project.stack.map((item) => (
                    <span key={item} className="rounded-full bg-[#D7E2EA]/10 px-3 py-1.5 text-xs font-semibold uppercase tracking-wider text-[#D7E2EA]/78">
                      {item}
                    </span>
                  ))}
                </div>
              </article>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilitiesSection() {
  return (
    <section
      id="capabilities"
      className="bg-[#0C0C0C] px-4 pb-20 text-[#D7E2EA] sm:px-6 md:px-10 md:pb-28"
      aria-label="Engineering capabilities"
    >
      <div className="mx-auto max-w-7xl">
        <FadeIn>
          <SectionHeading kicker="Capabilities" title="What I Can Build" align="left" />
        </FadeIn>
        <div className="mt-12 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
          {capabilities.map(({ icon: Icon, title, text }, index) => (
            <FadeIn key={title} delay={index * 0.05}>
              <CapabilityCard icon={Icon} title={title} text={text} />
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}

function CapabilityCard({
  icon: Icon,
  title,
  text,
}: {
  icon: LucideIcon;
  title: string;
  text: string;
}) {
  return (
    <article className="h-full rounded-[1.75rem] border border-[#D7E2EA]/15 bg-[#D7E2EA]/5 p-6">
      <div className="mb-8 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-[#D7E2EA]/10">
        <Icon className="h-6 w-6 text-[#D7E2EA]" strokeWidth={1.6} />
      </div>
      <h3 className="text-xl font-black uppercase tracking-wide text-[#D7E2EA]">{title}</h3>
      <p className="mt-4 text-base font-light leading-relaxed text-[#D7E2EA]/70">{text}</p>
    </article>
  );
}

function ContactSection() {
  return (
    <footer
      id="contact"
      className="bg-[#0C0C0C] px-4 pb-10 text-[#D7E2EA] sm:px-6 md:px-10"
      aria-label="Contact information"
    >
      <div className="mx-auto max-w-7xl border-t border-[#D7E2EA]/18 pt-12">
        <div className="grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <FadeIn>
            <p className="mb-3 text-xs font-semibold uppercase tracking-[0.35em] text-[#B600A8]">
              Contact
            </p>
            <h2 className="hero-heading text-[clamp(3.2rem,10vw,9rem)] font-black uppercase leading-none tracking-tight">
              Let&apos;s Build
            </h2>
            <p className="mt-5 max-w-2xl text-lg font-light leading-relaxed text-[#D7E2EA]/76">
              Open to software engineering, backend, cloud, DevOps, platform, and AI engineering roles.
            </p>
          </FadeIn>
          <FadeIn delay={0.1}>
            <div className="flex flex-wrap gap-3">
              <Social href={`mailto:${profile.email}`} label="Email" icon={Mail} />
              <Social href={profile.github} label="GitHub" icon={Github} />
              <Social href={profile.linkedin} label="LinkedIn" icon={Linkedin} />
              <Social href={profile.gssoc} label="GSSoC" icon={BadgeCheck} />
            </div>
          </FadeIn>
        </div>
        <p className="mt-10 text-xs font-light uppercase leading-relaxed tracking-[0.2em] text-[#D7E2EA]/55 sm:tracking-[0.28em]">
          {profile.location}
        </p>
      </div>
    </footer>
  );
}

function Social({
  href,
  label,
  icon: Icon,
}: {
  href: string;
  label: string;
  icon: LucideIcon;
}) {
  return (
    <a
      href={href}
      target={href.startsWith('mailto:') ? undefined : '_blank'}
      rel={href.startsWith('mailto:') ? undefined : 'noreferrer'}
      className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#D7E2EA]/30 px-5 text-sm font-semibold uppercase tracking-widest text-[#D7E2EA] transition hover:bg-[#D7E2EA]/10"
      aria-label={label}
    >
      <Icon size={18} /> {label}
    </a>
  );
}

function ScrollProgress() {
  const { scrollYProgress } = useScroll();

  return (
    <div className="fixed left-0 top-0 z-50 h-1 w-full origin-left bg-[#D7E2EA]/10" role="progressbar" aria-label="Page scroll progress">
      <motion.div className="h-full origin-left bg-[#B600A8]" style={{ scaleX: scrollYProgress }} />
    </div>
  );
}

export default function App() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#0C0C0C] font-kanit">
      <a href="#about" className="skip-link">
        Skip to content
      </a>
      <ScrollProgress />
      <HeroSection />
      <SkillShowcaseSection />
      <AboutSection />
      <ExperienceSection />
      <ProjectsSection />
      <CapabilitiesSection />
      <ContactSection />
    </main>
  );
}
