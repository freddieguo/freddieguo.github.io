"use client";
import styled from "styled-components";
import Image from "next/image";
import Reveal from "../animations/Reveal";

const Section = styled.section`
  padding: 80px 10% 35px;
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

const Left = styled.div`
  flex: 1;
`;

const Right = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  padding-top: 62px;
`;

const Title = styled.h2`
  font-size: 3rem;
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
  box-shadow: 0 10px 25px rgba(15, 23, 42, 0.35);
`;

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

const IllustrationWrap = styled.div`
  display: grid;
  place-items: center;
`;


export default function Education() {
  return (
    <Section id="education">
    <Grid>
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
            <p><b>B.A. in Computer Science & Economics</b></p>
            <p>September 2022 - January 2025</p>
            <p>Relevant Coursework: Behavioral Economics, Econometrics, Database Systems, Algorithm, Web Development.</p>
          </Info>
        </Item>
      </Reveal>
    </Left>

    <Right>
        {/* SVG animation from Storyset*/}
        <Reveal delay={0.15}>
          <IllustrationWrap>
          <Image
            src="/animations/graduation.svg"
            alt="Graduation animation"
            width={560}
            height={420}
            style={{ maxWidth: "100%", height: "auto" }}
          />
          </IllustrationWrap>
        </Reveal>
    </Right>
    </Grid>
    </Section>
  );
}
