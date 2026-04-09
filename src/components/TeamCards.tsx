import type { CSSProperties } from "react";

type Social = { label: string; href: string; icon: string };

type Member = {
  name: string;
  role: string;
  tagline: string;
  initials: string;
  color: string;
  photo?: string;
  skills: string[];
  socials: Social[];
};

const members: Member[] = [
  {
    name: "Abd. Asis",
    role: "Developer",
    tagline:
      "Fullstack engineer yang membangun Skolh dari nol — arsitektur Laravel, API, hingga UI React yang terasa ringan dipakai.",
    initials: "AA",
    color: "#5b6cff",
    photo: "/team/asis.jpg",
    skills: ["Laravel", "React", "TypeScript", "PostgreSQL"],
    socials: [
      {
        label: "GitHub",
        href: "https://github.com/",
        icon: "M12 .5C5.73.5.5 5.74.5 12.02c0 5.08 3.29 9.39 7.86 10.91.58.11.79-.25.79-.56 0-.27-.01-.99-.02-1.95-3.2.7-3.88-1.54-3.88-1.54-.52-1.33-1.28-1.69-1.28-1.69-1.05-.72.08-.71.08-.71 1.16.08 1.77 1.2 1.77 1.2 1.03 1.76 2.7 1.25 3.36.96.11-.75.4-1.25.73-1.54-2.55-.29-5.24-1.28-5.24-5.7 0-1.26.45-2.29 1.19-3.1-.12-.29-.52-1.47.11-3.06 0 0 .98-.31 3.2 1.18a11.1 11.1 0 0 1 5.83 0c2.22-1.49 3.2-1.18 3.2-1.18.63 1.59.23 2.77.11 3.06.74.81 1.19 1.84 1.19 3.1 0 4.43-2.69 5.41-5.25 5.69.41.35.78 1.05.78 2.12 0 1.53-.01 2.76-.01 3.14 0 .31.21.68.8.56A11.52 11.52 0 0 0 23.5 12.02C23.5 5.74 18.27.5 12 .5Z",
      },
      {
        label: "LinkedIn",
        href: "https://linkedin.com/",
        icon: "M4.98 3.5a2.5 2.5 0 1 1 0 5 2.5 2.5 0 0 1 0-5ZM3 9h4v12H3V9Zm7 0h3.8v1.71h.05c.53-.95 1.82-1.95 3.75-1.95 4.01 0 4.75 2.49 4.75 5.73V21h-4v-5.38c0-1.28-.03-2.93-1.9-2.93-1.9 0-2.2 1.37-2.2 2.83V21h-4V9Z",
      },
    ],
  },
  {
    name: "Muhammad Rois",
    role: "Designer",
    tagline:
      "Product designer yang memastikan setiap layar Skolh terasa intuitif — dari flow SPMB hingga detail micro-interaction.",
    initials: "MR",
    color: "#ec4899",
    photo: "/team/rois.jpg",
    skills: ["UI/UX", "Figma", "Design System", "Prototyping"],
    socials: [
      {
        label: "Dribbble",
        href: "https://dribbble.com/",
        icon: "M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20Zm6.62 4.61a8.52 8.52 0 0 1 1.9 5.34c-.28-.06-3.08-.63-5.9-.27-.06-.15-.12-.31-.19-.47-.17-.4-.36-.81-.55-1.2 3.13-1.27 4.56-3.1 4.74-3.4Zm-1.14-1.24c-.15.22-1.42 1.97-4.45 3.09A43.4 43.4 0 0 0 8.86 3.3a8.43 8.43 0 0 1 8.62 2.07ZM7.14 4.11a51.18 51.18 0 0 1 4.1 5.09A17.53 17.53 0 0 1 3.6 11.3a8.43 8.43 0 0 1 3.54-7.19ZM3.44 12.95c.2 0 4.18.06 8.48-1.23.25.49.49.99.71 1.49-.11.03-.22.06-.33.1-4.44 1.43-6.79 5.35-6.99 5.68a8.43 8.43 0 0 1-1.87-6.04Zm3.14 7.26c.14-.24 1.9-3.66 6.77-5.35l.06-.02c1.21 3.13 1.7 5.77 1.83 6.52a8.4 8.4 0 0 1-8.66-1.15Zm10.06.37c-.09-.53-.54-3.05-1.67-6.14 2.66-.42 4.99.27 5.27.36a8.42 8.42 0 0 1-3.6 5.78Z",
      },
      {
        label: "Instagram",
        href: "https://instagram.com/",
        icon: "M12 2.2c3.2 0 3.58.01 4.85.07 1.17.05 1.8.25 2.23.41.56.22.96.48 1.38.9.42.42.68.82.9 1.38.16.42.36 1.06.41 2.23.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.05 1.17-.25 1.8-.41 2.23-.22.56-.48.96-.9 1.38-.42.42-.82.68-1.38.9-.42.16-1.06.36-2.23.41-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-1.17-.05-1.8-.25-2.23-.41a3.7 3.7 0 0 1-1.38-.9 3.7 3.7 0 0 1-.9-1.38c-.16-.42-.36-1.06-.41-2.23C2.21 15.58 2.2 15.2 2.2 12s.01-3.58.07-4.85c.05-1.17.25-1.8.41-2.23.22-.56.48-.96.9-1.38.42-.42.82-.68 1.38-.9.42-.16 1.06-.36 2.23-.41C8.42 2.21 8.8 2.2 12 2.2ZM12 0C8.74 0 8.33.01 7.05.07 5.78.13 4.9.33 4.14.63a5.9 5.9 0 0 0-2.13 1.38A5.9 5.9 0 0 0 .63 4.14C.33 4.9.13 5.78.07 7.05.01 8.33 0 8.74 0 12s.01 3.67.07 4.95c.06 1.27.26 2.15.56 2.91a5.9 5.9 0 0 0 1.38 2.13 5.9 5.9 0 0 0 2.13 1.38c.76.3 1.64.5 2.91.56C8.33 23.99 8.74 24 12 24s3.67-.01 4.95-.07c1.27-.06 2.15-.26 2.91-.56a5.9 5.9 0 0 0 2.13-1.38 5.9 5.9 0 0 0 1.38-2.13c.3-.76.5-1.64.56-2.91.06-1.28.07-1.69.07-4.95s-.01-3.67-.07-4.95c-.06-1.27-.26-2.15-.56-2.91a5.9 5.9 0 0 0-1.38-2.13A5.9 5.9 0 0 0 19.86.63c-.76-.3-1.64-.5-2.91-.56C15.67.01 15.26 0 12 0Zm0 5.84a6.16 6.16 0 1 0 0 12.32 6.16 6.16 0 0 0 0-12.32Zm0 10.16a4 4 0 1 1 0-8 4 4 0 0 1 0 8Zm7.85-10.4a1.44 1.44 0 1 1-2.88 0 1.44 1.44 0 0 1 2.88 0Z",
      },
    ],
  },
];

const TeamCards = () => (
  <div className="team-grid">
    {members.map((m) => (
      <TeamCard key={m.name} member={m} />
    ))}
  </div>
);

const TeamCard = ({ member }: { member: Member }) => (
  <div className="team-card" style={{ "--tc": member.color } as CSSProperties}>
    <div className="tc-top">
      <div className="tc-avatar" style={member.photo ? undefined : { background: member.color }}>
        {member.photo
          ? <img src={member.photo} alt={member.name} />
          : member.initials
        }
      </div>
      <div className="tc-meta">
        <p className="tc-role">{member.role}</p>
        <h3 className="tc-name">{member.name}</h3>
      </div>
    </div>

    <p className="tc-tagline">{member.tagline}</p>

    <div className="tc-skills">
      {member.skills.map((s) => (
        <span key={s} className="tc-skill">{s}</span>
      ))}
    </div>

    <div className="tc-footer">
      {member.socials.map((s) => (
        <a
          key={s.label}
          href={s.href}
          target="_blank"
          rel="noreferrer noopener"
          aria-label={s.label}
          className="tc-social"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="14" height="14" fill="currentColor">
            <path d={s.icon} />
          </svg>
          {s.label}
        </a>
      ))}
    </div>
  </div>
);

export default TeamCards;
