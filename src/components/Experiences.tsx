"use client";
import styled from "styled-components";
import Image from "next/image";
import Reveal from "../animations/Reveal";

const Section = styled.section`
  padding: 120px 10%;
  background: #fff;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 900;
  margin-bottom: 48px;
  color: #111;
`;

// 卡片网格
const Grid = styled.div`
  display: grid;
  gap: 32px;

  @media (min-width: 1000px) {
    grid-template-columns: repeat(4, minmax(0, 1fr));
  }

  @media (min-width: 700px) and (max-width: 999px) {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
`;

// 单张卡片
const Card = styled.div`
  border-radius: 24px;
  overflow: hidden;
  background: #f9fafb;
  box-shadow: 0 10px 30px rgba(15, 23, 42, 0.12);
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.25s ease, box-shadow 0.25s ease;

  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 16px 40px rgba(15, 23, 42, 0.16);
  }
`;

// 彩色头部
const CardTop = styled.div<{ $color: string }>`
  background: ${({ $color }) => $color};
  padding: 55px;
  text-align: center;
  color: #fff;
  position: relative;
`;

const CompanyName = styled.div`
  font-weight: 700;
  font-size: 1.1rem;
`;

// 圆形 logo（悬浮在卡片中间）
const LogoCircle = styled.div`
  position: absolute;
  left: 50%;
  bottom: -42px;
  transform: translateX(-50%);
  width: 84px;
  height: 84px;
  border-radius: 50%;
  background: #fff;
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.35);
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
`;

// 卡片主体
const CardBody = styled.div`
  padding: 60px 24px 26px;
  text-align: center;
  display: flex;
  flex-direction: column;
  flex: 1;
`;

const Role = styled.h3`
  font-size: 1.1rem;
  font-weight: 800;
  margin: 0 0 6px;
`;

const Time = styled.div`
  font-size: 0.9rem;
  font-weight: 600;
  color: #374151;
  margin-bottom: 2px;
`;

const Location = styled.div`
  font-size: 0.88rem;
  color: #6b7280;
  margin-bottom: 16px;
`;

const Description = styled.p`
  font-size: 0.9rem;
  color: #4b5563;
  line-height: 1.6;
  margin: 0 0 6px;
`;

type Experience = {
  company: string;
  role: string;
  dates: string;
  location: string;
  intro: string;
  highlight1?: string;
  highlight2?: string;
  logo: string;
  color: string;
};

export default function Experiences() {
  const experiences: Experience[] = [
    {
      company: "Boston University",
      role: "Research Analyst (Faculty-Supervised)",
      dates: "Jan 2023 – Dec 2023",
      location: "Boston, MA",
      intro:
        "Designed and ran econometric studies turning large datasets into insights for urban planning and labor policy.",
      highlight1:
        "Infrastructure & Housing: built staggered DiD models on 600K+ transactions; found +26.5% price lift near subway stations and −35.6% beyond 3km.",
      highlight2:
        "Education & Labor Supply: compared 6 regression specs on 543K+ CPS records to show higher education correlates with longer working hours.",
      logo: "/companies/256px-Boston_University_Square_Logo.png",
      color: "#CC0000",
    },
    {
      company: "Tiger Sugar",
      role: "Assistant Manager",
      dates: "Dec 2020 – May 2022",
      location: "Las Vegas, NV",
      intro:
        "Supported an international bubble-tea brand in a high-volume retail environment with 250+ global stores.",
      highlight1:
        "Led scheduling and performance for 8 staff; introduced cost & waste tracking that cut waste by ~10%.",
      highlight2:
        "Implemented service playbooks that raised customer retention by ~20% (repeat purchase rate).",
      logo: "/companies/tiger-sugar.png",
      color: "#f97316",
    },
    {
      company: "MGM Grand",
      role: "Busperson",
      dates: "Jul 2021 – Nov 2021",
      location: "Las Vegas, NV",
      intro:
        "Worked inside one of the world’s largest hotel & casino resorts, serving thousands of guests.",
      highlight1:
        "Supported dining operations in a high-throughput restaurant, clearing and resetting 100+ tables per shift.",
      highlight2:
        "Kept front-of-house running smoothly during peak hours with fast, reliable teamwork.",
      logo: "/companies/mgm.png",
      color: "#16a34a",
    },
    {
      company: "Caesars Entertainment",
      role: "Tournament Dealer",
      dates: "Summers 2024 & 2025",
      location: "Las Vegas, NV",
      intro:
        "Dealt at the largest poker tournament series in the world, under cameras and high-stakes pressure.",
      highlight1:
        "Delivered precise, error-free dealing across hundreds of hands daily while enforcing rules consistently.",
      highlight2:
        "Maintained calm, professional table dynamics with players from all over the world.",
      logo: "/companies/caesars.png",
      color: "#111827",
    },
  ];

  return (
    <Section id="experience">
      <Reveal>
        <Title>Work Experiences</Title>
      </Reveal>

      <Grid>
        {experiences.map((exp, i) => (
          <Reveal key={exp.company} delay={0.08 * i}>
            <Card>
              <CardTop $color={exp.color}>
                <CompanyName>{exp.company}</CompanyName>
                <LogoCircle>
                  <Image
                    src={exp.logo}
                    alt={exp.company}
                    width={84}
                    height={84}
                    style={{ objectFit: "contain" }}
                  />
                </LogoCircle>
              </CardTop>

              <CardBody>
                <Role>{exp.role}</Role>
                <Time>{exp.dates}</Time>
                <Location>{exp.location}</Location>

                <Description>{exp.intro}</Description>
                {exp.highlight1 && <Description>{exp.highlight1}</Description>}
                {exp.highlight2 && <Description>{exp.highlight2}</Description>}
              </CardBody>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
