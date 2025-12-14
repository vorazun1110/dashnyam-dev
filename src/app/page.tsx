"use client";

import Image from "next/image";
import { useMemo, useState } from "react";
import { AnimatedSection } from "@/components/AnimatedSection";

type Language = "en" | "mn";

type TimelineItem = {
  title: string;
  place: string;
  period: string;
  logoPath?: string;
  logoColor?: string;
  bullets: string[];
};

type ProjectItem = { name: string; summary: string; stack: string };

type SkillGroup = {
  label: string;
  items: { name: string; icon: string; experience: string }[];
};

type Content = {
  hero: {
    badge: string;
    name: string;
    role: string;
    greeting: string;
    headline: string;
    contactMe: string;
    availability: string;
    location: string;
    summary: string;
    avatar: { initials: string; bg: string };
  };
  highlights: string[];
  experience: TimelineItem[];
  education: TimelineItem[];
  projects: ProjectItem[];
  skills: SkillGroup[];
  contact: { email: string; line: string; note: string };
  titles: {
    mySkills: string;
    myExperience: string;
    myEducation: string;
    myProjects: string;
    myHobby: string;
    myContact: string;
    mySkillSet: string;
  }
};

const copy: Record<Language, Content> = {
  en: {
    titles: {
      mySkills: "What I can do for you",
      myExperience: "Experience",
      myEducation: "Education",
      myProjects: "Projects",
      myHobby: "Hobby & Interests",
      myContact: "Contact",
      mySkillSet: "Skillset",
    },
    hero: {
      badge: "Backend & Fullstack Engineer",
      name: "Dashnyam",
      role: "Backend · Fullstack · Platform",
      greeting: "Hi, my name is Dashnyam",
      headline:
        "I DEVELOP FOR SCALE",
      contactMe: "Contact me",
      availability: "Open to backend/fullstack roles, remote-friendly.",
      location: "Ulaanbaatar · GMT+8",
      summary:
        "Five years building resilient services for SaaS and data-heavy products, including leading backend delivery at a venture-backed startup.",
      avatar: { initials: "DN", bg: "from-sky-400 to-indigo-500" },
    },
    highlights: [
      "5 years shipping APIs, data workflows, and internal tools",
      "Former senior backend engineer at a fast-moving startup",
      "Delivery focused: observability, SLOs, and lean releases",
    ],
    experience: [
      {
        title: "Backend Developer",
        place: "Unitel / Toki",
        period: "Mar 2025 – Present",
        logoPath: "/logo-toki.svg",
        logoColor: "from-yellow-400 to-orange-500",
        bullets: [
          "Backend development for migrating whole microservices from Node.js to Go lang.",
          "Merging all super app's mini services into one big Admin portal in full stack development.",
          "GPS tracking device integrating with main app system.",
        ],
      },
      {
        title: "Senior Developer",
        place: "Timely LLC",
        period: "Nov 2021 – Mar 2025",
        logoPath: "/logo-timely.svg",
        logoColor: "from-purple-500 to-pink-500",
        bullets: [
          "Employee clock in system backend development.",
          "HR time record and absents managing in admin panel full stack.",
          "API integration with 3rd parties.",
          "Tech leading for 7 developers of team.",
          "Design sprint work for v2.0.",
        ],
      },
      {
        title: "System Engineer",
        place: "Skytel Group",
        period: "Sep 2020 – Nov 2021",
        logoPath: "/logo-skytel.svg",
        logoColor: "from-blue-600 to-orange-500",
        bullets: [
          "Internal HR system support.",
          "User fingerprinting device support software side.",
          "skytel.mn website support.",
          "Coop developing for new skymedia's smart services.",
        ],
      },
    ],
    education: [
      {
        title: "B.S. Computer Science",
        place: "University of the Humanities",
        period: "2016 – 2020",
        bullets: [
          "Learnt all basics of tech, algorithm, API, Django website.",
          "Diploma assignment: Developed vitafit.mn's product selling delivery system using Veritech ERP.",
          "Obtained CISCO networking basic certification during university.",
        ],
      },
      {
        title: "Next.js Course",
        place: "System Center",
        period: "1 month",
        bullets: ["Completed one month of Next.js lessons.", "Implemented simple ecommerce website."],
      },
    ],
    projects: [
      {
        name: "sob.mn",
        summary:
          "Kindergarten system for both teachers and parents that handles kid delivery clock-ins, food information, and study materials.",
        stack: "PHP · Laravel · MySQL",
      },
      {
        name: "ekass.mn",
        summary:
          "Outfit cloth store shop's container products registry system for managing inventory and product tracking.",
        stack: "Nuxt · MySQL · PHP",
      },
      {
        name: "tm-oil.mn",
        summary:
          "TES Petroleum LLC fuel delivery system for managing fuel orders, deliveries, and logistics.",
        stack: "Node.js · TypeScript · NextJS · MongoDB",
      },
      {
        name: "ibro.mn",
        summary:
          "Insurance brokerage system that integrates all insurance companies and delivery services in one platform.",
        stack: "PHP · Laravel · MySQL · API Integration",
      },
    ],
    skills: [
      {
        label: "Frontend",
        items: [
          { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20", experience: "1.5 years" },
          { name: "Symfony", icon: "https://cdn.simpleicons.org/symfony/000000", experience: "1.5 years" },
          { name: "ReactJS", icon: "https://cdn.simpleicons.org/react/61DAFB", experience: "6 months" },
          { name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/000000", experience: "2 years" },
          { name: "VueJS", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D", experience: "1 year" },
          { name: "Nuxt", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nuxtdotjs.svg", experience: "6 months" },
          { name: "AngularJS", icon: "https://cdn.simpleicons.org/angular/DD0031", experience: "9 months" },
        ],
      },
      {
        label: "Backend",
        items: [
          { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4", experience: "3 years" },
          { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs/339933", experience: "3 years" },
          { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", experience: "3 years" },
          { name: "Java SpringBoot", icon: "https://cdn.simpleicons.org/springboot/6DB33F", experience: "2 months" },
          { name: "Go Lang", icon: "https://cdn.simpleicons.org/go/00ADD8", experience: "9 months" },
        ],
      },
      {
        label: "Cloud & Ops",
        items: [
          { name: "AWS", icon: "/logo-aws.svg", experience: "2 years" },
          { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", experience: "6 months" },
          { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717", experience: "5 years" },
          { name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab/FC6D26", experience: "9 months" },
          { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639", experience: "3 years" },
        ],
      },
      {
        label: "Data",
        items: [
          { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", experience: "5 years" },
          { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", experience: "9 months" },
          { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D", experience: "9 months" },
          { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/231F20", experience: "9 months" },
          { name: "DynamoDB", icon: "/logo-aws.svg", experience: "6 months" },
        ],
      },
      {
        label: "Quality",
        items: [
          { name: "Jest", icon: "https://cdn.simpleicons.org/jest/C21325", experience: "3 months" },
          { name: "Datadog", icon: "https://cdn.simpleicons.org/datadog/632CA6", experience: "4 months" },
          { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana/F46800", experience: "9 months" },
          { name: "Kibana", icon: "https://cdn.simpleicons.org/elastic/005571", experience: "2 months" },
        ],
      },
    ],
    contact: {
      email: "mailto:dashnyam.dev@gmail.com",
      line: "Ready for backend or fullstack challenges.",
      note: "Let's talk about the problems you need solved.",
    },
  },
  mn: {
    titles: {
      mySkills: "Би юу хийж чадах вэ?",
      myExperience: "Ажлын туршлага",
      myEducation: "Боловсрол",
      myProjects: "Төслүүд",
      myHobby: "Хобби & Сонирхол",
      myContact: "Холбоо барих",
      mySkillSet: "Ур чадвар & Хэлний мэдлэг",
    },
    hero: {
      badge: "Backend & Fullstack инженер",
      name: "Дашням",
      role: "Backend · Fullstack · Platform",
      greeting: "Сайн уу, намайг Дашням гэдэг",
      headline: "I DEVELOP FOR SCALE",
      contactMe: "Холбоо барих",
      availability: "Backend/fullstack ажлын саналд нээлттэй.",
      location: "Улаанбаатар · GMT+8",
      summary:
        "SaaS ба өгөгдөл ихтэй бүтээгдэхүүнд 5 жил тогтвортой үйлчилгээ хөгжүүлсэн туршлагатай, стартапт ахлах инженерээр ажиллаж байсан.",
      avatar: { initials: "DN", bg: "from-sky-400 to-indigo-500" },
    },
    highlights: [
      "API, өгөгдлийн сан, систем архитектурын 5 жилийн туршлага",
      "Хурдацтай стартапт ахлах инженерээр ажиллаж, голчлон систем удирдсан",
      "Систем архитектур, high level design, системийн доголдолгүй ажиллагааг баримтлан ажилладаг",
    ],
    experience: [
      {
        title: "Бекэнд хөгжүүлэгч",
        place: "Unitel / Toki",
        period: "2025/3 сар – Одоо",
        logoPath: "/logo-toki.svg",
        logoColor: "from-yellow-400 to-orange-500",
        bullets: [
          "Node.js-ээс Go lang руу бүх микросервисүүдийг шилжүүлэх backend хөгжүүлэлт.",
          "Супер апп-ын бүх мини сервисүүдийг нэг том Админ портал болгож нэгтгэх fullstack хөгжүүлэлт.",
          "GPS хяналтын төхөөрөмжийг системтэй интеграци хийх",
        ],
      },
      {
        title: "Ахлах хөгжүүлэгч",
        place: "Timely LLC",
        period: "2021/11 сар – 2025/3 сар",
        logoPath: "/logo-timely.svg",
        logoColor: "from-purple-500 to-pink-500",
        bullets: [
          "Ажилчдын цагийн системийн backend хөгжүүлэлт.",
          "Хүний нөөцийн ашиглах админ портал дээрх fullstack web хөгжүүлэлт.",
          "Гуравдагч талуудтай API integration хийх.",
          "7 хөгжүүлэгчтэй багийн Tech Lead.",
          "v2.0 хөгжүүлэлтийн дизайн спринтийн ажил.",
        ],
      },
      {
        title: "Системийн инженер",
        place: "Skytel Group",
        period: "2020/9 сар – 2021/11 сар",
        logoPath: "/logo-skytel.svg",
        logoColor: "from-blue-600 to-orange-500",
        bullets: [
          "Дотоод системийг хөгжүүлэх арчлан тордох.",
          "Хэрэглэгчийн хурууны хээ мэдрэх төхөөрөмжийн програм хангамжийн талын хөгжүүлэлт.",
          "skytel.mn вэбсайтын засвар хөгжүүлэлтүүд.",
          "skymedia-ийн шинэ ухаалаг үйлчилгээний хөгжүүлэлт.",
        ],
      },
    ],
    education: [
      {
        title: "Програм хангамжийн бакалавр",
        place: "Хүмүүнлэгийн Ухааны Их Сургууль",
        period: "2016 – 2020",
        bullets: [
          "Технологийн үндэс, алгоритм, API, Django вэбсайт",
          "Дипломын ажил: Veritech ERP ашиглан Витафит ХХК-ийн бүтээгдэхүүн борлуулалт, хүргэлтийн систем(DEMO) хөгжүүлсэн.",
          "CISCO Basic Networking сургалтын гэрчилгээ",
        ],
      },
      {
        title: "Next.js Сургалт",
        place: "System Center",
        period: "1 сар",
        bullets: ["Next.js-ийн нэг сарын сургалт дуусгасан.", "Энгийн цахим дэлгүүрийн вэбсайт хөгжүүлсэн."],
      },
    ],
    projects: [
      {
        name: "sob.mn",
        summary:
          "Цэцэрлэгийн систем багш болон эцэг эхэд зориулсан. Хүүхдийн хүлээн авах цагийн бүртгэл, хоолны мэдээлэл, сурах материал зэрэг бүртгэлийн систем",
        stack: "PHP · Laravel · MySQL · React",
      },
      {
        name: "ekass.mn",
        summary:
          "Хувцасны дэлгүүрийн агуулахын бүтээгдэхүүний бүртгэлийн систем.",
        stack: "PHP · Laravel · MySQL · Vue.js",
      },
      {
        name: "tm-oil.mn",
        summary:
          "TES Petroleum LLC түлш хүргэлтийн систем.",
        stack: "Node.js · TypeScript · PostgreSQL · React",
      },
      {
        name: "ibro.mn",
        summary:
          "Даатгалын брокер систем. Бүх даатгалын компани болон даатгалын үйлчилгээг нэг платформд нэтгэсэн систем",
        stack: "PHP · Laravel · MySQL · React · API Integration",
      },
    ],
    skills: [
      {
        label: "Frontend",
        items: [
          { name: "Laravel", icon: "https://cdn.simpleicons.org/laravel/FF2D20", experience: "1.5 жил" },
          { name: "Symfony", icon: "https://cdn.simpleicons.org/symfony/000000", experience: "1.5 жил" },
          { name: "ReactJS", icon: "https://cdn.simpleicons.org/react/61DAFB", experience: "6 сар" },
          { name: "NextJS", icon: "https://cdn.simpleicons.org/nextdotjs/000000", experience: "2 жил" },
          { name: "VueJS", icon: "https://cdn.simpleicons.org/vuedotjs/4FC08D", experience: "1 жил" },
          { name: "Nuxt", icon: "https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/nuxtdotjs.svg", experience: "6 сар" },
          { name: "AngularJS", icon: "https://cdn.simpleicons.org/angular/DD0031", experience: "9 сар" },
        ],
      },
      {
        label: "Backend",
        items: [
          { name: "PHP", icon: "https://cdn.simpleicons.org/php/777BB4", experience: "3 жил" },
          { name: "NodeJS", icon: "https://cdn.simpleicons.org/nodedotjs/339933", experience: "3 жил" },
          { name: "TypeScript", icon: "https://cdn.simpleicons.org/typescript/3178C6", experience: "3 жил" },
          { name: "Java SpringBoot", icon: "https://cdn.simpleicons.org/springboot/6DB33F", experience: "2 сар" },
          { name: "Go Lang", icon: "https://cdn.simpleicons.org/go/00ADD8", experience: "9 сар" },
        ],
      },
      {
        label: "Cloud & Ops",
        items: [
          { name: "AWS", icon: "/logo-aws.svg", experience: "2 жил" },
          { name: "Docker", icon: "https://cdn.simpleicons.org/docker/2496ED", experience: "6 сар" },
          { name: "GitHub", icon: "https://cdn.simpleicons.org/github/181717", experience: "5 жил" },
          { name: "GitLab", icon: "https://cdn.simpleicons.org/gitlab/FC6D26", experience: "9 сар" },
          { name: "Nginx", icon: "https://cdn.simpleicons.org/nginx/009639", experience: "3 жил" },
        ],
      },
      {
        label: "Data",
        items: [
          { name: "MySQL", icon: "https://cdn.simpleicons.org/mysql/4479A1", experience: "5 жил" },
          { name: "MongoDB", icon: "https://cdn.simpleicons.org/mongodb/47A248", experience: "9 сар" },
          { name: "Redis", icon: "https://cdn.simpleicons.org/redis/DC382D", experience: "9 сар" },
          { name: "Kafka", icon: "https://cdn.simpleicons.org/apachekafka/231F20", experience: "9 сар" },
          { name: "DynamoDB", icon: "/logo-aws.svg", experience: "6 сар" },
        ],
      },
      {
        label: "Quality",
        items: [
          { name: "Jest", icon: "https://cdn.simpleicons.org/jest/C21325", experience: "3 сар" },
          { name: "Datadog", icon: "https://cdn.simpleicons.org/datadog/632CA6", experience: "4 сар" },
          { name: "Grafana", icon: "https://cdn.simpleicons.org/grafana/F46800", experience: "9 сар" },
          { name: "Kibana", icon: "https://cdn.simpleicons.org/elastic/005571", experience: "2 сар" },
        ],
      },
    ],
    contact: {
      email: "mailto:dashnyam.dev@gmail.com",
      line: "Backend болон Fullstack ажлын саналд бэлэн.",
      note: "Дэлгэрэнгүй мэдээллийг утсаар авна уу.",
    },
  },
};

const languages: { code: Language; label: string }[] = [
  { code: "en", label: "English" },
  { code: "mn", label: "Монгол" },
];

export default function Home() {
  const [language, setLanguage] = useState<Language>("en");
  const [showContactModal, setShowContactModal] = useState(false);
  const [expandedExperience, setExpandedExperience] = useState<number | null>(null);
  const t = useMemo(() => copy[language], [language]);

  return (
    <div className="min-h-screen bg-yellow-50 text-black relative overflow-hidden">
      {/* Decorative geometric shapes */}
      <div className="fixed inset-0 pointer-events-none z-0">
        <div className="absolute top-20 right-10 w-32 h-32 bg-yellow-300 border-4 border-black transform rotate-12 opacity-20"></div>
        <div className="absolute top-40 left-10 w-24 h-24 bg-blue-300 border-4 border-black transform -rotate-12 opacity-20"></div>
        <div className="absolute bottom-40 right-20 w-40 h-40 bg-pink-300 border-4 border-black transform rotate-45 opacity-20"></div>
        <div className="absolute bottom-20 left-20 w-28 h-28 bg-green-300 border-4 border-black transform -rotate-45 opacity-20"></div>
        <div className="absolute top-1/2 left-1/4 w-20 h-20 bg-purple-300 border-4 border-black transform rotate-12 opacity-20"></div>
      </div>
      <main className="relative mx-auto max-w-6xl px-6 pb-16 pt-12 sm:px-8 md:px-10 z-10">
        <AnimatedSection threshold={0.2} delay={0}>
          <header className="flex flex-col gap-8 pb-10">
          <div className="flex flex-wrap items-center justify-between gap-3">
            <div className="rounded-full bg-yellow-300 px-4 py-2 text-xs font-bold uppercase tracking-wider border-2 border-black">
              {t.hero.badge}
            </div>
            <div className="flex gap-2 rounded-full bg-white border-2 border-black p-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  className={`px-4 py-2 text-sm font-bold transition-all rounded-full cursor-pointer ${
                    language === lang.code
                      ? "bg-yellow-400 text-black"
                      : "bg-white text-black hover:bg-yellow-300"
                  } hover:scale-105`}
                  onClick={() => setLanguage(lang.code)}
                  aria-pressed={language === lang.code}
                >
                  {lang.label}
                </button>
              ))}
            </div>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center sm:items-start">
            <div className="space-y-4">
              <p className="text-base text-gray-700">{t.hero.greeting}</p>
              <div>
                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-black leading-tight">
                  {t.hero.headline}
                </h1>
              </div>
              <p className="text-sm sm:text-base leading-6 text-gray-700">
                {t.hero.summary}
              </p>
              <div className="flex flex-wrap gap-3">
                <button 
                  onClick={() => setShowContactModal(true)}
                  className="rounded-lg bg-yellow-300 border-2 border-black px-5 py-2 text-sm font-bold text-black transition-all shadow-[4px_4px_0_0_black] hover:bg-yellow-400 hover:shadow-none hover:scale-105 cursor-pointer"
                >
                  {t.hero.contactMe}
                </button>
              </div>
            </div>
            
            <div className="relative flex justify-center sm:justify-end">
              <div className="relative h-48 w-48 sm:h-56 sm:w-56 md:h-64 md:w-64 lg:h-72 lg:w-72">
                <div className="absolute inset-0 rounded-2xl bg-pink-300 border-2 border-black transform rotate-3"></div>
                <div className="relative h-full w-full rounded-2xl border-2 border-black overflow-hidden bg-white">
                  <Image
                    src="/me.jpg"
                    alt={t.hero.name}
                    width={288}
                    height={288}
                    className="h-full w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </header>
        </AnimatedSection>

        <AnimatedSection threshold={0.2} delay={100}>
          <div className="mt-16 text-center">
            <h2 className="text-3xl font-black text-black">{t.titles.mySkills}</h2>
          </div>
        </AnimatedSection>
        
        <section className="mt-10 grid gap-6 sm:grid-cols-3">
          {t.highlights.map((item, idx) => (
            <AnimatedSection
              key={item}
              delay={idx * 100}
              threshold={0.1}
            >
              <div className="rounded-2xl border-2 border-black bg-yellow-50 p-6 transition-all shadow-[6px_6px_0_0_black] hover:shadow-none hover:translate-y-0 hover:scale-105">
              <div className={`w-12 h-12 rounded-xl border-2 border-black mb-4 flex items-center justify-center ${
                idx === 0 ? "bg-blue-200" : idx === 1 ? "bg-purple-200" : "bg-pink-200"
              }`}>
                {idx === 0 && (
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 12h14M5 12a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v4a2 2 0 01-2 2M5 12a2 2 0 00-2 2v4a2 2 0 002 2h14a2 2 0 002-2v-4a2 2 0 00-2-2m-2-4h.01M17 16h.01" />
                  </svg>
                )}
                {idx === 1 && (
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
                  </svg>
                )}
                {idx === 2 && (
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z" />
                  </svg>
                )}
              </div>
              <h3 className="text-xl font-black mb-2 text-black">
                {idx === 0 ? "Backend Development" : idx === 1 ? "Full Stack" : "System Design"}
              </h3>
                <p className="text-sm leading-6 text-gray-700">
                  {item}
                </p>
              </div>
            </AnimatedSection>
          ))}
        </section>

        <AnimatedSection threshold={0.1} delay={0}>
          <section className="mt-16 space-y-8">
            <h2 className="text-3xl font-black text-black mb-8">{t.titles.myExperience}</h2>
          <div className="space-y-6">
            {t.experience.map((role, idx) => (
              <AnimatedSection
                key={role.title + role.place}
                delay={idx * 150}
                threshold={0.1}
              >
                <article className={`group flex flex-col sm:flex-row items-start gap-4 sm:gap-6 rounded-2xl border-2 border-black p-4 sm:p-6 transition-all shadow-[6px_6px_0_0_black] hover:shadow-none hover:translate-y-0 ${
                  idx === 0 ? "bg-yellow-400" : idx === 1 ? "bg-orange-400" : "bg-blue-400"
                }`}>
                <div className="flex flex-col items-center gap-2 flex-shrink-0">
                  <div
                    className={`relative flex h-12 w-12 sm:h-16 sm:w-16 items-center justify-center rounded-xl border-2 border-black bg-white p-2 sm:p-3 transition-all hover:scale-110`}
                    aria-hidden
                  >
                    {role.logoPath && (
                      <Image
                        src={role.logoPath}
                        alt={role.place}
                        width={48}
                        height={48}
                        className="h-full w-full object-contain"
                      />
                    )}
                  </div>
                </div>
                <div className="flex-1 space-y-2 min-w-0">
                  <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-center sm:justify-between gap-2 sm:gap-3">
                    <div className="min-w-0">
                      <h3 className="text-lg sm:text-xl font-black text-black">
                        {role.title}
                      </h3>
                      <p className="text-xs sm:text-sm font-black text-black">{role.place}</p>
                    </div>
                    <span className="rounded-full border-2 border-black bg-white px-2 sm:px-3 py-1 text-xs font-bold self-start sm:self-auto">
                      {role.period}
                    </span>
                  </div>
                  <ul className="mt-3 space-y-1.5 sm:space-y-2 text-xs sm:text-sm font-bold text-black">
                    {role.bullets.slice(0, expandedExperience === idx ? undefined : 2).map((point) => (
                      <li key={point} className="leading-5 sm:leading-6">
                        • {point}
                      </li>
                    ))}
                  </ul>
                  {role.bullets.length > 2 && (
                    <button
                      onClick={() => setExpandedExperience(expandedExperience === idx ? null : idx)}
                      className={`mt-3 px-4 py-2 text-xs font-black text-black border-2 border-black rounded-lg hover:opacity-80 hover:scale-105 transition-all cursor-pointer flex items-center gap-2 ${
                        idx === 0 ? "bg-yellow-400" : idx === 1 ? "bg-orange-400" : "bg-blue-400"
                      }`}
                    >
                      {expandedExperience === idx ? (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                          </svg>
                          Fold
                        </>
                      ) : (
                        <>
                          <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                          </svg>
                          View more
                        </>
                      )}
                    </button>
                  )}
                </div>
              </article>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection threshold={0.1} delay={0}>
            <div className="grid gap-8 lg:grid-cols-2 mt-16">
            <div>
              <h2 className="text-3xl font-black text-black mb-6">{t.titles.myProjects}</h2>
              <div className="space-y-4">
                {t.projects.map((project, idx) => (
                  <AnimatedSection
                    key={project.name}
                    delay={idx * 150}
                    threshold={0.1}
                  >
                    <div className="rounded-2xl border-2 border-black bg-yellow-50 p-5 transition-all shadow-[6px_6px_0_0_black] hover:shadow-none hover:translate-y-0 hover:scale-105">
                    <h3 className="text-lg font-black text-black">
                      {project.name}
                    </h3>
                    <p className="mt-2 text-sm leading-6 font-medium text-gray-700">
                      {project.summary}
                    </p>
                      <p className="mt-2 text-xs uppercase tracking-wide font-bold text-gray-600">
                        {project.stack}
                      </p>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>

            <div>
              <h2 className="text-3xl font-black text-black mb-6">{t.titles.myEducation}</h2>
              <div className="space-y-4">
                {t.education.map((item, idx) => (
                  <AnimatedSection
                    key={item.title}
                    delay={idx * 150}
                    threshold={0.1}
                  >
                    <div className="rounded-2xl border-2 border-black bg-yellow-50 p-5 transition-all shadow-[6px_6px_0_0_black] hover:shadow-none hover:translate-y-0 hover:scale-105">
                    <div className="flex items-center justify-between gap-2">
                      <div>
                        <h3 className="text-base font-black text-black">
                          {item.title}
                        </h3>
                        <p className="text-sm font-bold text-gray-700">{item.place}</p>
                      </div>
                      <span className="text-xs font-bold text-gray-600">
                        {item.period}
                      </span>
                    </div>
                    <ul className="mt-2 space-y-1 text-sm font-medium text-gray-700">
                      {item.bullets.map((point) => (
                        <li key={point}>• {point}</li>
                      ))}
                    </ul>
                    </div>
                  </AnimatedSection>
                ))}
              </div>
            </div>
          </div>
          </AnimatedSection>
        </section>
        </AnimatedSection>

        <AnimatedSection threshold={0.1} delay={0}>
          <section className="mt-16">
          <h2 className="text-3xl font-black text-black mb-8">{t.titles.mySkillSet}</h2>
          <div className="grid gap-6 md:grid-cols-2">
            {t.skills.map((group, groupIdx) => {
              // Map labels to colors for skill items (soft colors)
              const getSectionColor = (label: string) => {
                if (label === "Frontend" || label === "Фронтэнд") return "#bfdbfe"; // blue-200
                if (label === "Backend" || label === "Бекэнд") return "#ddd6fe"; // purple-200
                if (label === "Cloud & Ops" || label === "Үүл ба ажиллагаа") return "#fef3c7"; // yellow-100
                if (label === "Data" || label === "Өгөгдөл") return "#fecaca"; // red-200
                if (label === "Quality" || label === "Чанар") return "#bbf7d0"; // green-200
                return "#fefce8"; // default yellow-50
              };
              
              return (
              <AnimatedSection
                key={group.label}
                delay={groupIdx * 150}
                threshold={0.1}
              >
                <div className="rounded-2xl border-2 border-black bg-yellow-50 p-6 transition-all shadow-[6px_6px_0_0_black] hover:shadow-none">
                <p className="text-lg font-black mb-4 text-black">
                  {group.label}
                </p>
                <div className="mt-3 grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {group.items.map((item) => (
                    <div
                      key={item.name}
                      className="group rounded-lg border-2 border-black p-3 text-sm transition-all shadow-[3px_3px_0_0_black] hover:shadow-none hover:translate-y-0 hover:scale-105"
                      style={{ backgroundColor: getSectionColor(group.label) }}
                    >
                      <div className="flex items-center gap-2 sm:gap-3">
                        <span className="flex h-8 w-8 sm:h-10 sm:w-10 items-center justify-center rounded-lg border-2 border-black bg-white flex-shrink-0">
                          <Image
                            src={item.icon}
                            alt={item.name}
                            width={24}
                            height={24}
                            className="h-4 w-4 sm:h-6 sm:w-6 object-contain"
                            unoptimized
                          />
                        </span>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between gap-2">
                            <span className="text-xs sm:text-sm font-bold text-black truncate">
                              {item.name}
                            </span>
                            <span className="text-xs font-bold text-gray-700 flex-shrink-0">
                              {item.experience}
                            </span>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
                </div>
              </AnimatedSection>
              );
            })}
          </div>
          </section>
        </AnimatedSection>

        <AnimatedSection threshold={0.1} delay={0}>
          <section className="mt-16">
            <h2 className="text-3xl font-black text-black mb-8">{t.titles.myHobby}</h2>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              <div className="rounded-2xl border-2 border-black bg-yellow-50 p-6 transition-all shadow-[6px_6px_0_0_black] hover:shadow-none">
                <div className="w-12 h-12 rounded-xl border-2 border-black bg-purple-200 mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                  </svg>
                </div>
                <h3 className="text-lg font-black text-black mb-2">Professional Swimming</h3>
                <p className="text-sm text-gray-800">Competitive swimming enthusiast</p>
              </div>

              <div className="rounded-2xl border-2 border-black bg-yellow-50 p-6 transition-all shadow-[6px_6px_0_0_black] hover:shadow-none">
                <div className="w-12 h-12 rounded-xl border-2 border-black bg-blue-200 mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 15l-2 5L9 9l11 4-5 2zm0 0l5 5M7.188 2.239l.777 2.897M5.136 7.965l-2.898-.777M13.95 4.05l-2.122 2.122m-5.657 5.656l-2.12 2.122" />
                  </svg>
                </div>
                <h3 className="text-lg font-black text-black mb-2">Gaming</h3>
                <p className="text-sm text-gray-800">Valorant, StarCraft & Single-player games</p>
              </div>

              <div className="rounded-2xl border-2 border-black bg-yellow-50 p-6 transition-all shadow-[6px_6px_0_0_black] hover:shadow-none">
                <div className="w-12 h-12 rounded-xl border-2 border-black bg-pink-200 mb-4 flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                  </svg>
                </div>
                <h3 className="text-lg font-black text-black mb-2">Bakery Chef</h3>
                <p className="text-sm text-gray-800">Passionate about baking & pastry arts</p>
              </div>
            </div>
          </section>
        </AnimatedSection>

        <AnimatedSection threshold={0.2} delay={0}>
          <section className="mt-16 flex flex-col gap-6 rounded-2xl border-2 border-black bg-yellow-300 p-8 sm:flex-row sm:items-center sm:justify-between transition-all shadow-[8px_8px_0_0_black] hover:shadow-none">
          <div>
            <p className="text-sm uppercase tracking-wider font-black text-black">
              {t.titles.myContact}
            </p>
            <p className="mt-2 text-xl font-black text-black">{t.contact.line}</p>
            <p className="text-sm font-bold text-black">{t.contact.note}</p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <a
              className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white transition-all shadow-[4px_4px_0_0_black] hover:bg-purple-800 hover:shadow-none hover:scale-110"
              href="https://github.com/vorazun1110"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="https://cdn.simpleicons.org/github/000000" alt="GitHub" width={26} height={26} className="group-hover:invert" />
            </a>
            <a
              className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white transition-all shadow-[4px_4px_0_0_black] hover:bg-blue-500 hover:shadow-none hover:scale-110"
              href="https://www.linkedin.com/in/dashnyam-lhagwasuren-412904227/"
              target="_blank"
              rel="noreferrer"
            >
              <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" width={26} height={26} className="object-contain" unoptimized />
            </a>
            <a
              className="group flex h-12 w-12 items-center justify-center rounded-full border-2 border-black bg-white transition-all shadow-[4px_4px_0_0_black] hover:bg-blue-800 hover:shadow-none hover:scale-110"
              href="https://www.facebook.com/DashkaVorazun/"
            target="_blank"
              rel="noreferrer"
            >
              <Image src="https://cdn.simpleicons.org/facebook/000000" alt="Facebook" width={26} height={26} className="group-hover:invert" />
          </a>
          <a
              className="inline-flex items-center justify-center rounded-lg border-2 border-black bg-red-500 px-6 py-3 text-sm font-black text-white transition-all shadow-[4px_4px_0_0_black] hover:bg-red-600 hover:shadow-none hover:scale-105"
              href={t.contact.email}
            >
              dashnyam.dev@gmail.com
          </a>
        </div>
        </section>
        </AnimatedSection>
      </main>

      {/* Contact Modal */}
      {showContactModal && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/50"
          onClick={() => setShowContactModal(false)}
        >
          <div 
            className="bg-white border-4 border-black rounded-2xl p-8 max-w-md w-full shadow-[12px_12px_0_0_black] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowContactModal(false)}
              className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center rounded-full border-2 border-black bg-red-400 hover:bg-red-500 transition-all cursor-pointer"
            >
              <svg className="w-5 h-5 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            
            <h2 className="text-3xl font-black text-black mb-6">Contact Me</h2>
            
            <div className="space-y-4">
              <a
                href="tel:+97686117185"
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-black bg-green-400 hover:bg-green-500 transition-all hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg border-2 border-black bg-white flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-black">Phone</p>
                  <p className="text-sm text-gray-700">86117185</p>
                </div>
              </a>

              <a
                href={t.contact.email}
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-black bg-red-400 hover:bg-red-500 transition-all hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg border-2 border-black bg-white flex items-center justify-center">
                  <svg className="w-6 h-6 text-black" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                </div>
                <div>
                  <p className="font-black text-black">Email</p>
                  <p className="text-sm text-gray-700">dashnyam.dev@gmail.com</p>
                </div>
              </a>

              <a
                href="https://github.com/vorazun1110"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-black bg-yellow-400 hover:bg-yellow-500 transition-all hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg border-2 border-black bg-white flex items-center justify-center">
                  <Image src="https://cdn.simpleicons.org/github/000000" alt="GitHub" width={24} height={24} />
                </div>
                <div>
                  <p className="font-black text-black">GitHub</p>
                  <p className="text-sm text-gray-700">github.com/vorazun1110</p>
                </div>
              </a>

              <a
                href="https://www.linkedin.com/in/dashnyam-lhagwasuren-412904227/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-black bg-blue-400 hover:bg-blue-500 transition-all hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg border-2 border-black bg-white flex items-center justify-center">
                  <Image src="https://cdn.jsdelivr.net/npm/simple-icons@v11/icons/linkedin.svg" alt="LinkedIn" width={24} height={24} className="object-contain" unoptimized />
                </div>
                <div>
                  <p className="font-black text-black">LinkedIn</p>
                  <p className="text-sm text-gray-700">dashnyam-lhagwasuren</p>
                </div>
              </a>

              <a
                href="https://www.facebook.com/DashkaVorazun/"
                target="_blank"
                rel="noreferrer"
                className="flex items-center gap-4 p-4 rounded-xl border-2 border-black bg-purple-400 hover:bg-purple-500 transition-all hover:scale-105"
              >
                <div className="w-12 h-12 rounded-lg border-2 border-black bg-white flex items-center justify-center">
                  <Image src="https://cdn.simpleicons.org/facebook/1877F2" alt="Facebook" width={24} height={24} />
                </div>
                <div>
                  <p className="font-black text-black">Facebook</p>
                  <p className="text-sm text-gray-700">facebook.com/DashkaVorazun</p>
                </div>
              </a>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
