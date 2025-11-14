"use client";
import styled from "styled-components";
import Reveal from "../animations/Reveal";

const Section = styled.section`
  padding:100px 10%;
  text-align:center;
  background:#fafafa;
`;

const H2 = styled.h2`
  font-size:2.4rem;
  font-weight:900;
  margin:0 0 10px;
`;

const P = styled.p`
  margin:0 auto 16px;
  max-width:640px;
  color:#667085;
  line-height:1.7;
`;

const Info = styled.div`
  font-size:20px;
  font-weight:700;
`;

const Row = styled.div`
  margin-top:14px;
  display:flex;
  gap:10px;
  justify-content:center;
`;

const IconBtn = styled.a`
  width:38px;
  height:38px;
  border-radius:999px;
  background:#111;
  color:#fff;
  display:grid;
  place-items:center;
  font-size:14px;
`;

export default function Contact(){
  return (
    <Section id="contact">
      <Reveal><H2>Contact Me ☎️</H2></Reveal>
      <Reveal delay={0.05}><P>Discuss a project or have a job opening? I’m actively seeking a data/analytics role.</P></Reveal>
      <Reveal delay={0.1}><Info>+1 (XXX) XXX-XXXX · freddieguo@gmail.com</Info></Reveal>
      <Reveal delay={0.16}>
        <Row>
          <IconBtn href="https://github.com/" target="_blank" rel="noreferrer">GH</IconBtn>
          <IconBtn href="https://www.linkedin.com/" target="_blank" rel="noreferrer">in</IconBtn>
          <IconBtn href="mailto:freddieguo@gmail.com">✉️</IconBtn>
        </Row>
      </Reveal>
    </Section>
  );
}
