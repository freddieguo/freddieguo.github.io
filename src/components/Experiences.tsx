"use client";
import styled from "styled-components";
import Image from "next/image";
import Reveal from "../animations/Reveal";

const Section = styled.section`
  padding: 120px 10%;
  background: #fff;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin-bottom: 48px;
  color: #111;
`;

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
      company: "Handshake AI",
      role: "Data Annotation Specialist",
      dates: "Oct 2025 - Present",
      location: "Remote",
      intro:
        "I annotate and quality-check large datasets used for training AI models. My work focuses on ensuring accurate labeling, spotting inconsistencies, and improving the clarity and reliability of data used in machine learning workflows.",
      logo: "/companies/handshake-ai.png",
      color: "#8ab24b",
    },
    {
      company: "Boston University",
      role: "Research Analyst",
      dates: "Jan 2023 - Dec 2023",
      location: "Boston, MA",
      intro:
        "I conducted econometric research using large datasets to generate insights for urban planning and labor policy decisions. I built DID models and regression specifications to measure causal impacts and translate statistical results into actionable findings.",
      logo: "/companies/256px-Boston_University_Square_Logo.png",
      color: "#b22319",
    },
    {
      company: "Tiger Sugar",
      role: "Assistant Manager",
      dates: "Dec 2020 - May 2022",
      location: "Las Vegas, NV",
      intro:
        "I managed daily operations for a high-volume retail store, supervising staff, improving workflow, and reducing waste through cost tracking. I introduced service and efficiency processes that increased repeat customers and improved overall store performance.",
      logo: "/companies/tiger-sugar.png",
      color: "#a8955c",
    },
    {
      company: "MGM Grand",
      role: "Busperson",
      dates: "Jul 2021 - Nov 2021",
      location: "Las Vegas, NV",
      intro:
        "I supported fast-paced restaurant operations at one of the world’s largest resorts, maintaining high service standards while coordinating with back-of-house teams to handle large guest volumes efficiently.",
      logo: "/companies/mgm.png",
      color: "#a57b36",
    },
    // {
    //   company: "Caesars Entertainment",
    //   role: "Tournament Dealer",
    //   dates: "Summers 2024 & 2025",
    //   location: "Las Vegas, NV",
    //   intro:
    //     "I dealt hands accurately and efficiently in a high-pressure tournament environment, ensuring fairness and smooth gameplay during events attended by thousands of players.",
    //   logo: "/companies/caesars.png",
    //   color: "#363636",
    // },
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
              </CardBody>
            </Card>
          </Reveal>
        ))}
      </Grid>
    </Section>
  );
}
