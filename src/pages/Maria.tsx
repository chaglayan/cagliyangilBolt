import { ArrowLeft, BarChart3, Briefcase, Globe as Globe2, Linkedin, Mail, MapPin, Sparkles, Users } from 'lucide-react';
import { homeHref, personHref } from '../lib/links';

type Role = {
  title: string;
  company: string;
  type: string;
  period: string;
  location?: string;
  bullets?: string[];
};

const experience: Role[] = [
  {
    title: 'Head of Influencer Marketing',
    company: 'inBeat Agency',
    type: 'Full-time',
    period: 'Nov 2025 — Present',
    location: 'Remote',
  },
  {
    title: 'Influencer Marketing',
    company: 'Recraft',
    type: 'Contract',
    period: 'Oct 2024 — Nov 2025',
    location: 'Remote',
    bullets: [
      'Built the Influencer Marketing function from the ground up',
      'Hired and managed 3 agencies and an in-house Influencer Specialist',
      'Led quarterly feature launch campaigns resulting in >6M impressions across platforms',
    ],
  },
  {
    title: 'Head of Influencer Marketing',
    company: 'Skycop.com',
    type: 'Contract',
    period: 'Oct 2023 — Jul 2025',
    location: 'Remote',
    bullets: [
      'Strategy development and implementation — brand awareness campaigns grew x3 during the upcoming high season',
      'Hired and onboarded team members, built the channel from scratch to 2 full-time specialists and 2 scouts',
      'Aligned Influencer Marketing with UA (Meta & Google Ads), lowering CPA by 70% for some integrations',
      'Launched test campaigns across micro and macro influencers on primary (EU) and new (US) markets',
    ],
  },
  {
    title: 'Influencer Marketing Lead',
    company: 'EBAC — Escola Britânica de Artes Criativas e Tecnologia',
    type: 'Full-time',
    period: 'Feb 2024 — Jun 2024',
    location: 'Remote',
    bullets: [
      'Managed a multi-cultural team of 3, developed OKRs, KPIs and growth tracks',
      'Drove a 200% ROMI and grew it x1.5 later on',
      'Built a PowerBI dashboard covering briefings, platforms and influencer choice',
      'Developed a statistical scaling model predicting revenue and CPL for 6–12 months ahead',
    ],
  },
  {
    title: 'Influencer Marketing Lead',
    company: 'Netology',
    type: 'Full-time',
    period: 'Jan 2022 — Aug 2023',
    bullets: [
      'Developed annual and semi-annual channel growth strategies',
      'Budget distribution, hiring and team onboarding',
      'Crisis management in a fast-paced, ever-changing market',
      'Cross-functional collaboration with other department leads',
    ],
  },
  {
    title: 'Influencer Marketing Manager',
    company: 'HypeFactory',
    type: 'Full-time',
    period: 'Dec 2020 — Jan 2022',
    bullets: [
      'Built and led relationships with top 1M+ follower influencers on 40K€+ campaigns',
      'Launched full-cycle campaigns: briefings, releases, payments and agreements',
      'Worked with top brands: Logitech, Mitsubishi, Embria, Plarium, Wildlife Studios',
    ],
  },
  {
    title: 'Content Specialist',
    company: 'Yandex.Taxi',
    type: 'Full-time',
    period: 'Mar 2019 — Dec 2019',
  },
];

const skills = [
  'Team Leadership',
  'Marketing Strategy',
  'Influencer Marketing',
  'Analytical Skills',
  'Performance Metrics',
  'Forecasting',
  'Budgeting',
  'Agency Relationship Management',
  'People Management',
  'PowerBI',
  'Google Analytics',
  'Cross-channel Collaboration',
];

export default function Maria() {
  return (
    <div className="min-h-screen bg-[#fbf5ec] text-stone-900">
      <nav className="fixed top-0 inset-x-0 z-40 bg-[#fbf5ec]/85 backdrop-blur-md border-b border-stone-200/70">
        <div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
          <a
            href={homeHref()}
            className="flex items-center gap-2 text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            <ArrowLeft size={14} />
            cagliyangil.com
          </a>
          <div className="text-xs uppercase tracking-[0.3em] text-stone-500 hidden sm:block">
            Maria Çağlıyangil
          </div>
          <a
            href={personHref('mehmet')}
            className="text-sm text-stone-600 hover:text-stone-900 transition-colors"
          >
            Mehmet →
          </a>
        </div>
      </nav>

      <section className="relative pt-14 overflow-hidden">
        <div className="relative h-[62vh] md:h-[78vh] overflow-hidden">
          <img
            src="/IMG_4482.jpg"
            alt="Maria Çağlıyangil"
            className="w-full h-full object-cover kenburns"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-stone-900/75 via-stone-900/15 to-transparent" />
          <div className="absolute bottom-0 inset-x-0 p-6 md:p-12">
            <div className="max-w-6xl mx-auto">
              <div className="text-xs uppercase tracking-[0.3em] text-amber-100 animate-fade-up">
                Head of Influencer Marketing · Bodrum, Türkiye
              </div>
              <h1 className="mt-4 font-display text-5xl md:text-7xl text-white drop-shadow animate-fade-up text-balance">
                Maria Çağlıyangil
              </h1>
              <p className="mt-4 max-w-2xl text-stone-100/90 md:text-lg animate-fade-up">
                Scaling brands globally through data-driven strategies and
                cross-channel team leadership.
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
              Building Influencer Marketing functions that move the business.
            </h2>
            <p>
              As Head of Influencer Marketing, I've built the IM channel from
              scratch for EdTech, TravelTech and GenAI brands — hiring and growing
              diverse teams of 2–7 people, and aligning tightly with UA, SMM, CRM,
              Product and partner agencies.
            </p>
            <p>
              I've led campaigns across European, U.S., CIS and LatAm markets.
              My core competencies are team leadership, marketing strategy and
              analytical optimization with tools like PowerBI and Google Analytics.
            </p>
            <p>
              Results I'm proud of include x3 brand awareness growth during peak
              seasons, a 70% reduction in CPA by repurposing influencer content in
              paid ads, and a 50% organic lead surge during influencer activations.
              My focus remains on fostering cross-channel collaboration and
              leveraging data-driven insights to achieve sustainable growth.
            </p>
          </div>

          <aside className="md:col-span-5 space-y-4">
            <Card icon={<Briefcase size={16} />} title="Currently">
              Head of Influencer Marketing at <span className="font-medium text-stone-900">inBeat Agency</span>.
            </Card>
            <Card icon={<MapPin size={16} />} title="Based in">
              Bodrum, Muğla, Türkiye — working remotely with global teams.
            </Card>
            <Card icon={<Globe2 size={16} />} title="Markets">
              Europe · U.S. · CIS · LatAm
            </Card>
            <Card icon={<Users size={16} />} title="Leadership">
              Hiring, onboarding and growing cross-functional teams of 2–7 people.
            </Card>
            <Card icon={<BarChart3 size={16} />} title="Analytics stack">
              PowerBI, Google Analytics, Tableau — translating data into strategy.
            </Card>
          </aside>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-stone-200 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Selected results
              </div>
              <h3 className="mt-3 font-display text-3xl md:text-4xl text-stone-900">
                Impact in numbers.
              </h3>
            </div>
          </div>
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-5">
            <Stat value="×3" label="Brand awareness growth during peak seasons" />
            <Stat value="−70%" label="CPA reduction by repurposing influencer content in paid ads" />
            <Stat value="+50%" label="Organic lead surge during influencer activations" />
            <Stat value="200%" label="ROMI driven as Influencer Marketing Lead at EBAC" />
            <Stat value=">6M" label="Impressions across quarterly feature launches at Recraft" />
            <Stat value="40K€+" label="Campaign budgets managed with 1M+ follower influencers" />
          </div>
        </div>
      </section>

      <section className="py-20 md:py-28">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-end justify-between gap-6 flex-wrap">
            <div>
              <div className="text-xs uppercase tracking-[0.3em] text-stone-500">
                Experience
              </div>
              <h3 className="mt-3 font-display text-3xl md:text-4xl text-stone-900">
                A decade in growth & influencer marketing.
              </h3>
            </div>
          </div>

          <ol className="mt-10 relative border-l border-stone-200 space-y-10">
            {experience.map((role, idx) => (
              <li key={idx} className="pl-6 relative">
                <span className="absolute -left-[7px] top-2 w-3 h-3 rounded-full bg-amber-400 ring-4 ring-[#fbf5ec]" />
                <div className="flex flex-col md:flex-row md:items-baseline md:justify-between gap-1">
                  <div>
                    <h4 className="font-display text-xl md:text-2xl text-stone-900">
                      {role.title}
                    </h4>
                    <div className="text-stone-600 text-sm mt-1">
                      {role.company} · {role.type}
                      {role.location ? ` · ${role.location}` : ''}
                    </div>
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
            ))}
          </ol>
        </div>
      </section>

      <section className="py-16 md:py-20 border-t border-stone-200 bg-white/60">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-stone-500">
            <Sparkles size={14} className="text-amber-600" />
            Skills
          </div>
          <h3 className="mt-3 font-display text-3xl md:text-4xl text-stone-900">
            Where I focus my craft.
          </h3>
          <div className="mt-8 flex flex-wrap gap-2.5">
            {skills.map((skill) => (
              <span
                key={skill}
                className="px-4 py-2 rounded-full border border-stone-300 bg-white text-sm text-stone-800 hover:border-amber-400 hover:text-stone-900 transition-colors"
              >
                {skill}
              </span>
            ))}
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
              Let's build something that scales.
            </h3>
            <p className="mt-3 text-stone-600 max-w-xl">
              Open to leadership roles, advisory work and collaborations in
              influencer and growth marketing.
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <IconLink href="mailto:maria@cagliyangil.com" icon={<Mail size={16} />} label="Email" />
            <IconLink
              href="https://www.linkedin.com/in/maria-cagliyangil/"
              icon={<Linkedin size={16} />}
              label="LinkedIn"
            />
          </div>
        </div>
      </section>

      <footer className="py-10 border-t border-stone-200 text-center text-sm text-stone-500">
        © {new Date().getFullYear()} Maria Çağlıyangil
      </footer>
    </div>
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
    <div className="rounded-2xl border border-stone-200 bg-white p-5 hover:border-amber-300 transition-colors">
      <div className="flex items-center gap-2 text-stone-500 text-xs uppercase tracking-[0.18em]">
        <span className="text-amber-600">{icon}</span>
        {title}
      </div>
      <div className="mt-2 text-stone-800 text-sm leading-relaxed">{children}</div>
    </div>
  );
}

function Stat({ value, label }: { value: string; label: string }) {
  return (
    <div className="rounded-2xl border border-stone-200 bg-white p-6 hover:border-amber-300 transition-colors">
      <div className="font-display text-4xl md:text-5xl text-stone-900 tracking-tight">
        {value}
      </div>
      <div className="mt-3 text-sm text-stone-600 leading-relaxed">{label}</div>
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
