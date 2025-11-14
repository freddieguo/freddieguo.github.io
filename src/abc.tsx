"use client";
import styled from "styled-components";
import Image from "next/image";

const Header = styled.header`
  position: sticky;
  top: 0;
  z-index: 50;
  background: rgba(255, 255, 255, 0.75);
  backdrop-filter: blur(8px);
  border-bottom: 1px solid #eee;
`;

const Bar = styled.nav`
  max-width: 1140px;
  margin: 0 auto;
  padding: 14px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.a`
  font-weight: 800;
  font-size: 18px;
  letter-spacing: 0.3px;
  color: #111827;

  &:hover {
    opacity: 0.85;
  }
`;

const NavRight = styled.div`
  display: flex;
  align-items: center;
  gap: 30px;
`;

const Links = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 28px;
  }

  a {
    font-weight: 500;
    color: #374151;
    opacity: 0.8;
    transition: opacity 0.2s ease, transform 0.2s ease;
  }

  a:hover {
    opacity: 1;
    transform: translateY(-1px);
  }
`;

const ThemeToggle = styled.button`
  width: 34px;
  height: 34px;
  border-radius: 999px;
  border: none;
  background: #f3f4f6;
  cursor: pointer;

  display: flex;
  align-items: center;
  justify-content: center;

  transition: background 0.2s ease, transform 0.2s ease;

  &:hover {
    background: #e5e7eb;
    transform: translateY(-1px);
  }
`;

export default function Nav() {
  return (
    <Header>
      <Bar>
        <Brand href="#top">&lt; Freddie Guo /&gt;</Brand>

        <NavRight>
          <Links>
            <a href="#skills">Skills</a>
            <a href="#experience">Work Experiences</a>
            <a href="#projects">Projects</a>
            <a href="#contact">Contact Me</a>
          </Links>

          <ThemeToggle>
            <span role="img" aria-label="theme">🌙</span>
          </ThemeToggle>
        </NavRight>

      </Bar>
    </Header>
  );
}
