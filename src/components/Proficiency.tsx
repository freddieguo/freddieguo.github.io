"use client";
import styled from "styled-components";
import { motion } from "framer-motion";
import Reveal from "../animations/Reveal";

const Section = styled.section`
  padding: 120px 10%;
`;

const Title = styled.h2`
  font-size: 3rem;
  font-weight: 900;
  margin: 0 0 40px;
  color: #111;
`;

const Row = styled.div`
  margin: 28px 0 40px;
`;

const Label = styled.div`
  font-size: 0.98rem;
  margin-bottom: 10px;
  color: #222;
  font-weight: 600;
`;

const Track = styled.div`
  height: 18px;
  background: #e6e6e6;
  border-radius: 999px;
  overflow: hidden;
`;

const Fill = styled(motion.div)`
  height: 100%;
  background: #6c5ce7;
  border-radius: 999px;
`;

export default function Proficiency() {
  const bars = [
    { label: "Data Cleaning & Preparation", v: 90 },
    { label: "Exploratory data analysis (EDA)", v: 85 },
    { label: "Business Insight Communication", v: 70 },
  ];

  return (
    <Section id="proficiency">
      <Reveal>
        <Title>Proficiency</Title>
      </Reveal>

      {bars.map((b, i) => (
        <Row key={b.label}>
          <Reveal delay={0.05 * i}>
            <Label>{b.label}</Label>
          </Reveal>

          <Track>
            <Fill
              initial={{ width: "0%" }}
              whileInView={{ width: `${b.v}%` }}
              viewport={{ once: true, amount: 0.5 }}
              transition={{
                duration: 2.0,
                ease: [0.22, 1, 0.36, 1],
                delay: 0.1 * i,
              }}
            />
          </Track>
        </Row>
      ))}
    </Section>
  );
}
