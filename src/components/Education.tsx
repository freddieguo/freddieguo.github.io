"use client";
import styled from "styled-components";
import Image from "next/image";
import Reveal from "../animations/Reveal";


const Section = styled.section`
  padding: 100px 10%;
  background: #fff;
  display: flex;
  justify-content: space-between;
  gap: 60px;
  align-items: flex-start;

  @media (max-width: 900px) {
    flex-direction: column;
    text-align: center;
  }
`;

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
`;

const Title = styled.h2`
  font-size: 2.8rem;
  font-weight: 800;
  margin-bottom: 40px;
`;

const Item = styled.div`
  margin-bottom: 36px;
  line-height: 1.6;
  display: flex;
  align-items: center;
  gap: 18px;

  h3 {
    font-size: 1.4rem;
    font-weight: 700;
  }
`;

// --- Logo 区块 ---
const LogoBox = styled.div`
  width: 70px;
  height: 70px;
  flex-shrink: 0;
  border-radius: 12px;
  overflow: hidden;
  background: #f5f5f5;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;   
`;

// --- 文本区块 ---
const Info = styled.div`
  line-height: 1.6;

  h3 {
    font-size: 1.3rem;
    font-weight: 800;
    margin: 0 0 6px;
  }

  p {
    margin: 4px 0;
    color: #444;
  }
`;

export default function Education() {
  return (
    <Section id="education">
    <Left>
      <Reveal>
        <Title>Education</Title>
      </Reveal>

      {/* --- Boston University --- */}
      <Reveal delay={0.1}>
        <Item>
          <LogoBox>
            <Image
              src="/school/256px-Boston_University_Square_Logo.png"
              alt="Boston University"
              width={70}
              height={70}
            />
          </LogoBox>

          <Info>
            <h3>Boston University</h3>
            <p>B.A. in Computer Science & Economics</p>
            <p>Econometrics research; Data visualization; Algorithms.</p>
          </Info>
        </Item>
      </Reveal>
    </Left>

    <Right>
        {/* 这里就是 Storyset SVG 动画 */}
        <Reveal delay={0.15}>
          <Image
            src="/animations/graduation.svg"
            alt="Graduation animation"
            width={420}
            height={420}
          />
        </Reveal>
    </Right>

    </Section>
  );
}
