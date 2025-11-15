"use client";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";

const Section = styled.section`
  padding: 100px 10%;
`;

const Grid = styled.div`
  display: grid;
  gap: 40px;
  align-items: center;
  grid-template-columns: 1fr;

  @media (min-width: 1100px) {
    grid-template-columns: 1.1fr 1fr;
    gap: 64px;
  }
`;

const IllustrationWrap = styled.div`
  display: grid;
  place-items: center;
`;

const Right = styled.div`

`;


const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin: 0 0 12px;
`;

const Subtitle = styled.p`
  margin: 0 0 28px;
  color: #98a2b3;
  letter-spacing: 1.2px;
  font-weight: 700;
  text-transform: uppercase;
`;

const IconGrid = styled(motion.div)`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  gap: 18px 22px;
  margin-bottom: 28px;

  @media (min-width: 900px) {
    grid-template-columns: repeat(6, minmax(0, 1fr));
  }
`;

// Icon
const IconItem = styled(motion.div)`
  display: grid;
  place-items: center;
  row-gap: 6px;
  opacity: 0.7;
  transition: opacity 0.2s ease, transform 0.2s ease;

  img {
    transition: filter 0.25s ease, transform 0.25s ease;
  }

  &:hover {
    opacity: 1;
    transform: translateY(-3px);
  }

  &:hover img {
    transform: translateY(-3px);
  }

  span {
    font-size: 12px;
    color: #98a2b3;
  }
`;

// Bullet Points
const Bullets = styled.div`
  display: grid;
  row-gap: 16px;
`;

const Bullet = styled(motion.div)`
  display: grid;
  grid-template-columns: 24px 1fr;
  column-gap: 12px;
  align-items: start;
  color: #667085;
  line-height: 1.6;

  .icon {
    font-size: 20px;
    line-height: 1;
    color: #f59e0b;
  }
`;

// Framer-motion
const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.08,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 10 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
    },
  },
};

export default function Skills() {
  const tech = [
    { icon: "/tech/icons8-html-5-96.png", label: "HTML5" },
    { icon: "/tech/icons8-css3-96.png", label: "CSS3" },
    { icon: "/tech/icons8-javascript-96.png", label: "JavaScript" },
    { icon: "/tech/icons8-typescript-96.png", label: "TypeScript" },
    { icon: "/tech/icons8-python-96.png", label: "Python" },
    { icon: "/tech/icons8-java-96.png", label: "Java" },
    { icon: "/tech/icons8-sql-96.png", label: "SQL" },
    { icon: "/tech/icons8-microsoft-excel-2019-96.png", label: "Excel" },
    { icon: "/tech/icons8-power-bi-2021-96.png", label: "Power BI" },
    { icon: "/tech/icons8-node-js-96.png", label: "Node.js" },
    { icon: "/tech/icons8-next-js-96.png", label: "Next.js" },
    { icon: "/tech/icons8-github-96.png", label: "GitHub" },
  ];

  const bullets = [
    "Turn messy datasets into clear, decision-ready insights with Python / SQL / Excel.",
    "Build dashboards and data stories using Power BI and advanced visualization methods.",
    "Build full-stack projects with React / Next.js and Node.js.",
    "Use analytical thinking to support real-world decision-making in business settings.",
  ];

  return (
    <Section id="skills">
      <Grid>
        {/* Left */}
        <Reveal>
          <IllustrationWrap>
            <Image
              src="/animations/computer.svg"
              alt="Data and coding illustration"
              width={560}
              height={420}
              style={{ maxWidth: "100%", height: "auto" }}
              priority
            />
          </IllustrationWrap>
        </Reveal>

        {/* Right */}
        <Right>
          <Reveal>
            <Title>What I do</Title>
          </Reveal>
          <Reveal delay={0.05}>
            <Subtitle>Tools I use to ship real-world data stories</Subtitle>
          </Reveal>

          {/* Icon */}
          <IconGrid
            variants={container}
            initial="hidden"
            whileInView="show"
            viewport={{ once: true, amount: 0.2 }}
          >
            {tech.map((t) => (
              <IconItem key={t.label} variants={item}>
                <Image
                  src={t.icon}
                  alt={t.label}
                  width={48}
                  height={48}
                  style={{ borderRadius: 12 }}
                />
                <span>{t.label}</span>
              </IconItem>
            ))}
          </IconGrid>

          {/* Bullet Points */}
          <Bullets>
            {bullets.map((b, i) => (
              <Bullet
                key={b}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.05 * i }}
                viewport={{ once: true, amount: 0.2 }}
              >
                <div className="icon">⚡</div>
                <div>{b}</div>
              </Bullet>
            ))}
          </Bullets>
        </Right>
      </Grid>
    </Section>
  );
}
