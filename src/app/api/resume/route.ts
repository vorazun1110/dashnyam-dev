import { NextResponse } from "next/server";
import { renderToStream } from "@react-pdf/renderer";
import React from "react";
import { ResumePDF } from "@/components/ResumePDF";

const resumeData = {
  name: "Dashnyam",
  title: "Backend & Fullstack Engineer",
  location: "Ulaanbaatar · GMT+8",
  summary: "Five years building resilient services for SaaS and data-heavy products, including leading backend delivery at a venture-backed startup.",
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
      bullets: [
        "Completed one month of Next.js lessons.",
        "Implemented simple ecommerce website.",
      ],
    },
  ],
  projects: [
    {
      name: "sob.mn",
      summary: "Kindergarten system for both teachers and parents that handles kid delivery clock-ins, food information, and study materials.",
      stack: "PHP · Laravel · MySQL",
    },
    {
      name: "ekass.mn",
      summary: "Outfit cloth store shop's container products registry system for managing inventory and product tracking.",
      stack: "Nuxt · MySQL · PHP",
    },
    {
      name: "tm-oil.mn",
      summary: "TES Petroleum LLC fuel delivery system for managing fuel orders, deliveries, and logistics.",
      stack: "Node.js · TypeScript · NextJS · MongoDB",
    },
    {
      name: "ibro.mn",
      summary: "Insurance brokerage system that integrates all insurance companies and delivery services in one platform.",
      stack: "PHP · Laravel · MySQL · API Integration",
    },
  ],
  skills: [
    {
      label: "Frontend",
      items: [
        { name: "Laravel", experience: "1.5 years" },
        { name: "Symfony", experience: "1.5 years" },
        { name: "ReactJS", experience: "6 months" },
        { name: "NextJS", experience: "2 years" },
        { name: "VueJS", experience: "1 year" },
        { name: "Nuxt", experience: "6 months" },
        { name: "AngularJS", experience: "9 months" },
      ],
    },
    {
      label: "Backend",
      items: [
        { name: "PHP", experience: "3 years" },
        { name: "NodeJS", experience: "3 years" },
        { name: "TypeScript", experience: "3 years" },
        { name: "Java SpringBoot", experience: "2 months" },
        { name: "Go Lang", experience: "9 months" },
      ],
    },
    {
      label: "Cloud & Ops",
      items: [
        { name: "AWS", experience: "2 years" },
        { name: "Docker", experience: "6 months" },
        { name: "GitHub", experience: "5 years" },
        { name: "GitLab", experience: "9 months" },
        { name: "Nginx", experience: "3 years" },
      ],
    },
    {
      label: "Data",
      items: [
        { name: "MySQL", experience: "5 years" },
        { name: "MongoDB", experience: "9 months" },
        { name: "Redis", experience: "9 months" },
        { name: "Kafka", experience: "9 months" },
        { name: "DynamoDB", experience: "6 months" },
      ],
    },
    {
      label: "Quality",
      items: [
        { name: "Jest", experience: "3 months" },
        { name: "Datadog", experience: "4 months" },
        { name: "Grafana", experience: "9 months" },
        { name: "Kibana", experience: "2 months" },
      ],
    },
  ],
  contact: {
    email: "dashnyam.dev@gmail.com",
  },
};

export async function GET() {
  try {
    const stream = await renderToStream(React.createElement(ResumePDF, { data: resumeData }));
    
    const chunks: Uint8Array[] = [];
    for await (const chunk of stream) {
      chunks.push(chunk);
    }
    
    const buffer = Buffer.concat(chunks);
    
    return new NextResponse(buffer, {
      headers: {
        "Content-Type": "application/pdf",
        "Content-Disposition": 'attachment; filename="dashnyam-resume.pdf"',
      },
    });
  } catch (error) {
    console.error("Error generating PDF:", error);
    return NextResponse.json({ error: "Failed to generate PDF" }, { status: 500 });
  }
}

