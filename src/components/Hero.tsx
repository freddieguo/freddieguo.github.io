"use client";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import avatar from "../app/favicon.ico";

// Waving Hands
const wave = keyframes`
  0% { transform: rotate(0deg); }
  15% { transform: rotate(14deg); }
  30% { transform: rotate(-8deg); }
  40% { transform: rotate(14deg); }
  50% { transform: rotate(-4deg); }
  60% { transform: rotate(10deg); }
  70% { transform: rotate(0deg); }
  100% { transform: rotate(0deg); }
`;

// Floating
const floatY = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

// Shining button
const shine = keyframes`
  0% { left: -30%; }
  100% { left: 130%; }
`;


const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 120px 10%;
  min-height: 80vh;

  /* In Phone Screen */
  @media (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    padding: 60px 8%;
  }
`;

const Left = styled.div`
  flex: 1;
  min-width: 280px;

  @media (max-width: 768px) {
    order: 2;
  }
`;

const Right = styled.div`
  flex: 1;
  min-width: 240px;
  display: flex;
  justify-content: center;
  animation: ${floatY} 3.6s ease-in-out infinite;

  @media (max-width: 768px) {
    order: 1;
    margin-bottom: 30px;
  }
`;

const Emoji = styled.span`
  display: inline-block;
  transform-origin: 70% 70%;
  animation: ${wave} 2.2s ease-in-out infinite;
`;

const Title = styled.h1`
  font-size: 3.4rem;
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 20px;
  color: #111;

  @media (max-width: 768px) {
    font-size: 3rem;
  }
`;

const Subtitle = styled.p`
  font-size: 1.15rem;
  color: #555;
  max-width: 580px;
  line-height: 1.6;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    
  }
`;

const Buttons = styled.div`
  display: flex;
  gap: 16px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
  }
`;

const Btn = styled.a<{ $primary?: boolean }>`
  position: relative;
  display: inline-block;
  padding: 12px 22px;
  border-radius: 30px;
  font-weight: 700;
  text-decoration: none;
  color: ${({ $primary }) => ($primary ? "#fff" : "#333")};
  background: ${({ $primary }) => ($primary ? "#6C5CE7" : "#eaeaea")};
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-3px);
    box-shadow: 0 6px 16px rgba(108, 92, 231, 0.3);
  }

  /* Shining Effect */
  &::after {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    width: 40%;
    left: -30%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.35),
      transparent
    );
    transform: skewX(-20deg);
    animation: ${shine} 2.6s ease-in-out infinite;
  }

  @media (max-width: 768px) {
    width: 100%;
  }
`;

export default function Hero() {
  return (
    <Section>
      <Left>
        <Title>
          Hi all, I&apos;m Freddie <Emoji>👋</Emoji>
        </Title>
        <Subtitle>
          A Data Analyst who turns messy datasets into clear, decision-ready insights.
          I specialize in Python, SQL, and business analytics to uncover patterns, build dashboards, and support real-world decision-making.
        </Subtitle>
        <Buttons>
          <Btn href="#contact" $primary>
            CONTACT ME
          </Btn>
          <Btn href="papers/resume.pdf">SEE MY RESUME</Btn>
        </Buttons>
      </Left>

      <Right>
        <Image
          src={avatar}
          alt="Freddie Guo avatar"
          width={300}
          height={300}
          style={{ borderRadius: "50%" }}
        />
      </Right>
    </Section>
  );
}
