"use client";
import styled from "styled-components";

const Header = styled.header`
  position: sticky; top: 0; z-index: 50;
  background: rgba(255,255,255,0.75);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #eee;
`;
const Bar = styled.nav`
  max-width: 1140px; margin: 0 auto; padding: 14px 20px;
  display: flex; align-items: center; justify-content: space-between;
`;
const Brand = styled.a`
  font-weight: 800; font-size: 18px; letter-spacing: .2px;
`;
const Links = styled.div`
  display: none; gap: 28px;
  @media (min-width: 768px){ display: flex; }
  a { opacity: .8; }
  a:hover { opacity: 1; }
`;
const Right = styled.div` display:flex; gap:10px; align-items:center; `;

export default function Nav(){
  return (
    <Header>
      <Bar>
        <Brand href="#top">&lt; Freddie Guo /&gt;</Brand>
        <Links>
          <a href="#skills">Skills</a>
          <a href="#exp">Work Experiences</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact Me</a>
        </Links>
        <Right>
          <span role="img" aria-label="theme">🌙</span>
        </Right>
      </Bar>
    </Header>
  );
}
