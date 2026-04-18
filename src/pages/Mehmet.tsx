import {
  ArrowLeft,
  Briefcase,
  GraduationCap,
  Globe as Globe2,
  Layers,
  Linkedin,
  Mail,
  MapPin,
  Sparkles,
  Users,
} from 'lucide-react';
import { homeHref, personHref } from '../lib/links';

type Role = {
  title: string;
  company: string;
  type?: string;
  period: string;
  location?: string;
  bullets?: string[];
};

const xcoinsRoles: Role[] = [
  {
    title: 'Senior Product Manager',
    company: 'Xcoins',
    period: 'Jul 2024 — Present',
    bullets: [
      'Driving product strategy for core exchange, payments, and internal admin systems',
      'Improved product stability, performance, and operational efficiency across multiple teams',
    ],
  },
  {
    title: 'Product Manager',
    company: 'Xcoins',
    period: 'Sep 2022 — Jul 2024',
    bullets: [
      'Delivered a full B2B2C crypto exchange product and admin panel from concept to production',
      'Led migration from non-custodial infrastructure to the new product — flows, APIs, admin tools',
    ],
  },
  {
    title: 'Product Owner',
    company: 'Xcoins',
    period: 'Jun 2022 — Sep 2022',
    bullets: [
      'Managed the Non-Custodial Crypto Exchange product: requirements, backlog, sprint planning',
      'Ensured delivery of high-impact improvements through close collaboration with developers',
    ],
  },
  {
    title: 'Business Analyst',
    company: 'Xcoins',
    period: 'Feb 2022 — Jun 2022',
    bullets: [
      'Built the product knowledge base in Confluence to improve onboarding',
      'Developed as-is / to-be process flows in Miro; refined requirements in Jira',
    ],
  },
];

const otherRoles: Role[] = [
  {
    title: 'Business Analyst',
    company: 'Ecospend',
    type: 'Full-time',
    period: 'Jan 2020 — Feb 2022',
    bullets: [
      'Business/Product Analysis, research on Open Banking and Blockchain',
      'Bridged business and developers — and clients and banks',
    ],
  },
  {
    title: 'Research Assistant',
    company: 'Dokuz Eylül University',
    type: 'Full-time',
    period: 'Nov 2012 — Jan 2020',
    location: 'Faculty of Business · Quantitative Methods',
  },
  {
    title: 'Visiting Scholar',
    company: 'Syracuse University — Whitman School of Management',
    period: 'Aug 2018 — Dec 2018',
    location: 'United States',
  },
];

const education = [
  {
    school: 'Middle East Technical University (METU)',
    degree: 'Bachelor of Science, Business Administration',
    note: 'METU Fencing Team · Outdoor Sports Club · Media Club · Management Club',
  },
  {
    school: 'Dokuz Eylül University',
    degree: "Master's degree, Logistics Management",
  },
  {
    school: 'Anadolu University',
    degree: "Bachelor's degree, Economics",
  },
];

const skills = [
  'Product Management',
  'Product Strategy',
  'Product Leadership',
  'Product Planning',
  'Agile Methodologies',
  'Scrum',
  'UML',
  'Business Analysis',
  'Open Banking',
  'Blockchain',
  'Crypto Exchange',
  'Confluence · Jira · Miro',
];

export default function Mehmet() {
  return (
    <div className="min-h-screen bg-[#f6f4ef] text-stone-900">
      <nav className="fixed top-0 inset-x-0 z-40 bg-[#f6f4ef]/85 backdrop-blur-md border-b border-stone-200/70">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href={homeHref()}
            className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft size={14} />
            cagliyangil.com
          </a>
          <div className="text-xs uppercase tracking-[0.3em] text-stone-500 hidden sm:block">
            Mehmet Çağlıyangil
          </div>
          <a
            href={personHref('maria')}
            className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            Maria →
          </a>
        </div>
      </nav>

      <section className="relative pt-14 overflow-hidden">
        <div className="relative h-[85vh] md:h-[78vh] overflow-hidden">
          <img
            src="/IMG_3807.jpg"
            alt="Mehmet Çağlıyangil"
            className="w-full h-full object-cover kenburns object-top md:object-center"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-stone-900/70 to-transparent md:from-stone-900/80 md:via-stone-900/20" />
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-xs uppercase tracking-[0.3em] text-teal-100 animate-fade-up">
                Senior Product Manager · Bodrum · Remote
              </div>
              <h1 className="mt-4 font-display text-5xl md:text-7xl text-white drop-shadow animate-fade-up text-balance">
                Mehmet Çağlıyangil
              </h1>
              <p className="mt-4 max-w-2xl text-stone-100/90 md:text-lg animate-fade-up">
                Building end-to-end crypto, payments and exchange products —
                turning complex systems into reliable, high-impact experiences.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-10">
          <div className="md:col-span-7 space-y-5 text-stone-700 leading-relaxed md:text-lg">
            <div className="text-xs uppercase tracking-[0.3em] text-stone-500">About</div>
            <h2 className="font-display text-3xl md:text-4xl text-stone-900">
              Product leader with roots in analysis and research.
            </h2>
            <p>
              I'm a Senior Product Manager at{' '}
              <span className="font-medium text-stone-900">Xcoins</span>, where
              I've grown from Business Analyst to Product Owner to Senior PM
              over the last four years. My work spans core exchange, payments
              and the internal admin systems that keep the business running.
            </p>
            <p>
              I've delivered a full B2B2C crypto exchange product and admin
              panel from concept to production, led the migration from
              non-custodial infrastructure to the new platform, and continue to
              drive stability, performance and operational efficiency across
              multiple teams.
            </p>
            <p>
              Before Xcoins, I spent two years at Ecospend working on Open
              Banking and Blockchain, and close to a decade in academia at
              Dokuz Eylül University's Quantitative Methods division —
              including a research stay at Syracuse University's Whitman School
              of Management.
            </p>
          </div>

          <aside className="md:col-span-5 space-y-4">
            <Card icon={<Briefcase size={16} />} title="Currently">
              Senior Product Manager at{' '}
              <span className="font-medium text-stone-900">Xcoins</span> —
              driving strategy for exchange, payments and admin systems.
            </Card>
            <Card icon={<MapPin size={16} />} title="Based in">
              Bodrum, Türkiye — working remotely.
            </Card>
            <Card icon={<Layers size={16} />} title="Focus areas">
              Crypto · Payments · B2B2C platforms · Internal tooling
            </Card>
            <Card icon={<Users size={16} />} title="How I work">
              Close collaboration with engineering, hands-on with specs, flows
              and backlog — keeping discovery and delivery tight.
            </Card>
            <Card icon={<Globe2 size={16} />} title="Also">
              Former Visiting Scholar at Syracuse University, long-time mentor
              for young entrepreneurs in Türkiye.
            </Card>
          </aside>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-stone-200 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
            Experience
          </div>
          <h3 className="mt-3 font-display text-3xl md:text-4xl text-stone-900">
            From analyst to product leader.
          </h3>

          <div className="mt-10 rounded-3xl border border-stone-200 bg-white p-6 md:p-8">
            <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
              <div>
                <h4 className="font-display text-2xl text-stone-900">Xcoins</h4>
                <div className="text-stone-600 text-sm mt-1">
                  Full-time · 4 yrs · Bodrum · Remote
                </div>
              </div>
              <div className="text-xs uppercase tracking-[0.2em] text-stone-500">
                Feb 2022 — Present
              </div>
            </div>

            <ol className="mt-6 relative border-l border-stone-200 space-y-8">
              {xcoinsRoles.map((role, idx) => (
                <RoleItem key={idx} role={role} hideCompany />
              ))}
            </ol>
          </div>

          <ol className="mt-10 relative border-l border-stone-200 space-y-10">
            {otherRoles.map((role, idx) => (
              <RoleItem key={idx} role={role} />
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20">
        <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-10">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-stone-500">
              <GraduationCap size={14} className="text-teal-700" />
              Education
            </div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl text-stone-900">
              Academic background.
            </h3>
            <ul className="mt-8 space-y-5">
              {education.map((e) => (
                <li
                  key={e.school}
                  className="rounded-2xl border border-stone-200 bg-white p-5 hover:border-teal-300 transition-colors"
                >
                  <div className="font-display text-lg text-stone-900">
                    {e.school}
                  </div>
                  <div className="text-stone-600 text-sm mt-1">{e.degree}</div>
                  {e.note && (
                    <div className="text-stone-500 text-xs mt-2">{e.note}</div>
                  )}
                </li>
              ))}
            </ul>
          </div>

          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-stone-500">
              <Sparkles size={14} className="text-teal-700" />
              Skills
            </div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl text-stone-900">
              Toolbox & craft.
            </h3>
            <div className="mt-8 flex flex-wrap gap-2.5">
              {skills.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-2 rounded-full border border-stone-300 bg-white text-sm text-stone-800 hover:border-teal-400 hover:text-stone-900 transition-colors"
                >
                  {skill}
                </span>
              ))}
            </div>

            <div className="mt-10 rounded-2xl border border-stone-200 bg-white p-5">
              <div className="text-xs uppercase tracking-[0.18em] text-stone-500">
                Volunteering
              </div>
              <ul className="mt-3 space-y-3 text-sm text-stone-700 leading-relaxed">
                <li>
                  <span className="font-medium text-stone-900">Mentor</span> ·
                  Genç Başarı / Junior Achievement Türkiye · 2019 — 2021
                </li>
                <li>
                  <span className="font-medium text-stone-900">Instructor</span>{' '}
                  · 8Digit Incubation Center · 2017
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-stone-200">
        <div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
          <div>
            <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
              Get in touch
            </div>
            <h3 className="mt-3 font-display text-3xl md:text-4xl text-stone-900">
              Let's talk product.
            </h3>
            <p className="mt-3 text-stone-600 max-w-xl">
              Happy to chat about product leadership, crypto & payments
              platforms, or anything at the intersection of research and
              shipping.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <IconLink
              href="mailto:mehmet@cagliyangil.com"
              icon={<Mail size={16} />}
              label="Email"
            />
            <IconLink
              href="https://www.linkedin.com/in/mehmetcagliyangil/"
              icon={<Linkedin size={16} />}
              label="LinkedIn"
            />
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-stone-200 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Mehmet Çağlıyangil
      </footer>
    </div>
  );
}

function RoleItem({ role, hideCompany }: { role: Role; hideCompany?: boolean }) {
  return (
    <li className="pl-6 relative">
      <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-teal-500 ring-4 ring-white" />
      <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
        <div>
          <h4 className="font-display text-xl md:text-2xl text-stone-900">
            {role.title}
          </h4>
          {!hideCompany && (
            <div className="text-stone-600 text-sm mt-1">
              {role.company}
              {role.type ? ` · ${role.type}` : ''}
              {role.location ? ` · ${role.location}` : ''}
            </div>
          )}
          {hideCompany && role.location && (
            <div className="text-stone-600 text-sm mt-1">{role.location}</div>
          )}
        </div>
        <div className="text-xs uppercase tracking-[0.2em] text-stone-500 whitespace-nowrap">
          {role.period}
        </div>
      </div>
      {role.bullets && (
        <ul className="mt-4 space-y-2 text-stone-700 leading-relaxed">
          {role.bullets.map((b, i) => (
            <li key={i} className="flex gap-3">
              <span className="mt-2 w-1 h-1 rounded-full bg-stone-400 shrink-0" />
              <span>{b}</span>
            </li>
          ))}
        </ul>
      )}
    </li>
  );
}

function Card({
  icon,
  title,
  children,
}: {
  icon: React.ReactNode;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-5 hover:border-teal-300 transition-colors">
      <div className="flex items-center gap-2 text-stone-500 text-xs uppercase tracking-[0.18em]">
        <span className="text-teal-700">{icon}</span>
        {title}
      </div>
      <div className="mt-2 text-stone-800 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function IconLink({
  href,
  icon,
  label,
}: {
  href: string;
  icon: React.ReactNode;
  label: string;
}) {
  return (
    <a
      href={href}
      className="inline-flex items-center gap-2 px-4 py-2.5 rounded-full border border-stone-300 hover:border-stone-900 hover:bg-stone-900 hover:text-white transition-colors text-sm"
    >
      {icon}
      {label}
    </a>
  );
}
