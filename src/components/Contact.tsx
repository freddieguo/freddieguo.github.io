"use client";
import styled from "styled-components";
import Image from "next/image";
import Reveal from "../animations/Reveal";

const Section = styled.section`
  padding: 100px 10%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 60px;
  

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
  font-size: 3rem;
  font-weight: 900;
  margin: 0 0 10px;
`;


const P = styled.p`
  margin: 0 auto 16px;
  max-width: 640px;
  color: #667085;
  line-height: 1.7
`;

const Info = styled.div`
  font-size: 20px;
  font-weight: 700;
`;

const Row = styled.div`
  margin-top: 14px;
  display: flex;
  gap: 10px;
  justify-content: center;

  @media (min-width: 900px) {
    justify-content: flex-start;
  }
`;

const IconBtn = styled.a`
  width: 48px;
  height: 48px;
  display: block;
  position: relative;
  border-radius: 999px;
  overflow: hidden;
  position: relative;

  transition: transform 0.2s ease, box-shadow 0.2s ease;

  &:hover {
    transform: translateY(-2px) scale(1.05);
    box-shadow: 0 8px 16px rgba(0,0,0,0.18);
  }
`;

const IllustrationWrap = styled.div`
  display: grid;
  place-items: center;
`;

const Emoji = styled.span`
  display: inline-block;
  animation: bounce 0.6s infinite alternate;

  @keyframes bounce {
    from { transform: translateY(0); }
    to   { transform: translateY(-10px); }
  }
`;

export default function Contact() {
  return (
    <Section id="contact">
      <Left>
        <Reveal><Title>Contact Me <Emoji>☎️</Emoji></Title></Reveal>
        <Reveal delay={0.05}>
          <P>Discuss a project or have a job opening? I’m actively seeking a data/analytics role.</P>
        </Reveal>
        <Reveal delay={0.1}>
          <Info>+1 (XXX) XXX-XXXX · freddieguo@gmail.com</Info>
        </Reveal>
        <Reveal delay={0.16}>
          <Row>
            <IconBtn href="https://github.com/" target="_blank" rel="noreferrer">
              <Image 
                src="/tech/icons8-github-96.png" 
                alt="GitHub" 
                fill 
                style={{objectFit: "cover", transform: "scale(1.2)"}} 
              />
            </IconBtn>

            <IconBtn href="https://www.linkedin.com/" target="_blank" rel="noreferrer">
              <Image 
                src="/tech/icons8-linkedin-96.png" 
                alt="LinkedIn"
                fill 
                style={{objectFit: "cover", transform: "scale(1.2)"}} 
              />
            </IconBtn>

            <IconBtn href="mailto:freddieguo@gmail.com">
              <Image 
                src="/tech/icons8-email-96.png" 
                alt="Email" 
                fill 
                style={{objectFit: "cover", transform: "scale(1.2)"}} 
              />
            </IconBtn>
          </Row>
        </Reveal>
      </Left>

      <Right>
        {/* 放 SVG，如果是文件放在 public/animations 里 */}
        <IllustrationWrap>
        <Image
          src="/animations/team.svg"
          alt="Contact Illustration"
          width={560}
          height={420}
          style={{ maxWidth: "100%", height: "auto" }}
        />
        </IllustrationWrap>
      </Right>
    </Section>
  );
}
