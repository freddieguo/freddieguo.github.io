"use client";
import styled from "styled-components";
import Image from "next/image";
import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";

const Section = styled.section`
  padding: 120px 10%;
  background: #fff;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin: 0 0 10px;
`;

const Subtitle = styled.p`
  margin: 0 0 40px;
  color: #98a2b3;
  letter-spacing: 1.4px;
  text-transform: uppercase;
  font-weight: 600;
`;

// 卡片网格
const Grid = styled.div`
  display: grid;
  gap: 28px;

  @media (min-width: 1100px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 700px) and (max-width: 1099px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

// 单张卡片
const Card = styled(motion.article)`
  background: #ffffff;
  border-radius: 24px;
  box-shadow: 0 12px 30px rgba(15, 23, 42, 0.12);
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const Cover = styled.div`
  position: relative;
  width: 100%;
  padding-top: 75%; /* 4:3 比例 */
  overflow: hidden;
`;

const Body = styled.div`
  padding: 20px 20px 24px;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const ProjectTitle = styled.h3`
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0 0 10px;
  text-align: center;
`;

const Text = styled.p`
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0 0 18px;
  text-align: center;
`;

// CTA 按钮
const Cta = styled.a`
  align-self: center;
  margin-top: auto;
  display: inline-block;
  padding: 8px 18px;
  border-radius: 999px;
  font-size: 0.85rem;
  font-weight: 600;
  text-decoration: none;
  color: #fff;
  background: #6c5ce7;
  box-shadow: 0 6px 16px rgba(108, 92, 231, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease, background 0.2s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 10px 24px rgba(108, 92, 231, 0.45);
    background: #5a4dd6;
  }
`;

// ------- 类型 & 数据 -------
type ProjectItem = {
  title: string;
  image: string;
  blurb: string;
  cta: string;
  href: string;
};

export default function Projects() {
  const projects: ProjectItem[] = [
    {
      title: "Walmart Sales Analytics",
      image: "/projects/walmart.jpg",
      blurb:
        "Cleaned and modeled Walmart store-level sales to find which stores drive 80% of revenue and how promotions impact weekly demand.",
      cta: "View Case Study",
      href: "https://github.com/freddieguo/walmart-sales-analysis",
    },
    {
      title: "Personal Portfolio Website",
      image: "/projects/portfolio.png",
      blurb:
        "This site itself: a Next.js + styled-components portfolio designed to showcase data projects and real-world impact for recruiters.",
      cta: "View Source Code",
      href: "https://github.com/yourname/portfolio", // TODO
    },
    {
      title: "Urban Housing & Metro Impact",
      image: "/projects/research.png",
      blurb:
        "Staggered Difference-in-Differences models on 600K+ transactions to quantify how new subway lines reshape housing prices.",
      cta: "Read Research Summary",
      href: "#", // 可以先放占位
    },
    {
      title: "Store Ops & Service Playbook",
      image: "/projects/store-ops.png",
      blurb:
        "Designed a cost & service tracking system at Tiger Sugar that cut waste by ~10% and improved customer retention by ~20%.",
      cta: "View Slide Deck",
      href: "#", // 之后可以连到 PDF
    },
  ];

  return (
    <Section id="projects">
      <Reveal>
        <Title>Personal &amp; Academic Projects</Title>
      </Reveal>
      <Reveal delay={0.05}>
        <Subtitle>SOME OF MY DATA & PRODUCT WORK</Subtitle>
      </Reveal>

      <Grid>
        {projects.map((p, i) => (
          <Reveal key={p.title} delay={0.08 * i}>
            <Card
              whileHover={{ y: -6 }}
              transition={{ duration: 0.2 }}
            >
              <Cover>
                <Image
                  src={p.image}
                  alt={p.title}
                  fill
                  style={{ objectFit: "cover" }}
                />
              </Cover>
              <Body>
                <ProjectTitle>{p.title}</ProjectTitle>
                <Text>{p.blurb}</Text>
                <Cta href={p.href} target="_blank" rel="noreferrer">
                  {p.cta}
                </Cta>
              </Body>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
