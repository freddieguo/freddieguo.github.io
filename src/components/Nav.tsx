"use client";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Header = styled.header<{ $scrolled: boolean }>`
  position: sticky;
  top: 0;
  z-index: 50;
  border-bottom: 1px solid rgba(226, 232, 240, 0.7);
  transition: background 0.25s ease, box-shadow 0.25s ease, border-color 0.25s ease;

  background: ${({ $scrolled }) =>
    $scrolled ? "rgba(255,255,255,0.9)" : "rgba(255,255,255,0.4)"};
  backdrop-filter: blur(10px);
  box-shadow: ${({ $scrolled }) =>
    $scrolled ? "0 8px 18px rgba(15,23,42,0.06)" : "none"};
`;

const Bar = styled.nav`
  max-width: 1140px;
  margin: 0 auto;
  padding: 12px 20px;

  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Brand = styled.a`
  font-weight: 900;
  font-size: 22px;
  letter-spacing: -0.6px;
  color: #111827;
  font-family: "Inter", sans-serif;
  display: flex;
  align-items: center;
  gap: 4px;

  span {
    color: #6c5ce7;
  }

  &:hover {
    opacity: 0.85;
  }
`;

const Right = styled.div`
  display: flex;
  align-items: center;
  gap: 18px;
`;

// 桌面版 links
const Links = styled.div`
  display: none;

  @media (min-width: 768px) {
    display: flex;
    gap: 28px;
  }

  a {
    font-weight: 500;
    color: #6b7280;
    opacity: 0.9;
    transition: opacity 0.2s ease, transform 0.2s ease, color 0.2s ease;
  }

  a.active {
    font-weight: 700;
    color: #6c5ce7;
    opacity: 1;
  }

  a:hover {
    opacity: 1;
    transform: translateY(-1px);
  }
`;

// 汉堡按钮（仅手机）
const MenuButton = styled.button`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 999px;
  border: none;
  background: #f3f4f6;
  cursor: pointer;

  @media (min-width: 768px) {
    display: none;
  }

  span {
    display: block;
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: #111827;
    position: relative;
  }

  span::before,
  span::after {
    content: "";
    position: absolute;
    left: 0;
    width: 18px;
    height: 2px;
    border-radius: 999px;
    background: #111827;
    transition: transform 0.2s ease, opacity 0.2s ease, top 0.2s ease,
      bottom 0.2s ease;
  }

  span::before {
    top: -5px;
  }

  span::after {
    bottom: -5px;
  }

  &.open span {
    background: transparent;
  }

  &.open span::before {
    top: 0;
    transform: rotate(45deg);
  }

  &.open span::after {
    bottom: 0;
    transform: rotate(-45deg);
  }
`;

// 手机下拉菜单
const MobileMenu = styled.div<{ $open: boolean }>`
  display: none;

  @media (max-width: 767px) {
    display: ${({ $open }) => ($open ? "block" : "none")};
    border-top: 1px solid #e5e7eb;
    background: rgba(255, 255, 255, 0.98);
  }

  a {
    display: block;
    padding: 10px 20px;
    font-weight: 500;
    color: #374151;
    border-bottom: 1px solid #f3f4f6;
  }

  a:last-child {
    border-bottom: none;
  }
`;

export default function Nav() {
  const sections = ["skills", "proficiency", "education", "experience", "projects", "contact"];

  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("skills");

  // 监听滚动，控制透明 / 实心导航
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Scroll Spy：根据当前在视口里的 section 设置 active
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActive(entry.target.id);
          }
        });
      },
      {
        threshold: 0.4, // section 出现 40% 视为“当前”
      }
    );

    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const handleNavClick = () => {
    // 点击菜单后关闭手机下拉
    setOpen(false);
  };

  return (
    <Header $scrolled={scrolled}>
      <Bar>
        <Brand href="#top">Freddie<span>Guo</span></Brand>

        <Right>
          <Links>
            <a
              href="#skills"
              className={active === "skills" ? "active" : ""}
              onClick={handleNavClick}
            >
              Skills
            </a>
            <a
              href="#proficiency"
              className={active === "proficiency" ? "active" : ""}
              onClick={handleNavClick}
            >
              Proficiency
            </a>
            <a
              href="#education"
              className={active === "education" ? "active" : ""}
              onClick={handleNavClick}
            >
              Education
            </a>
            <a
              href="#experience"
              className={active === "experience" ? "active" : ""}
              onClick={handleNavClick}
            >
              Work Experiences
            </a>
            <a
              href="#projects"
              className={active === "projects" ? "active" : ""}
              onClick={handleNavClick}
            >
              Projects
            </a>
            <a
              href="#contact"
              className={active === "contact" ? "active" : ""}
              onClick={handleNavClick}
            >
              Contact Me
            </a>
          </Links>

          {/* 手机汉堡按钮 */}
          <MenuButton
            type="button"
            className={open ? "open" : ""}
            onClick={() => setOpen((v) => !v)}
          >
            <span />
          </MenuButton>
        </Right>
      </Bar>

      {/* 手机下拉菜单 */}
      <MobileMenu $open={open}>
        <a href="#skills" onClick={handleNavClick}>
          Skills
        </a>
        <a href="#proficiency" onClick={handleNavClick}>
          Proficiency
        </a>
        <a href="#education" onClick={handleNavClick}>
          Education
        </a>
        <a href="#experience" onClick={handleNavClick}>
          Work Experiences
        </a>
        <a href="#projects" onClick={handleNavClick}>
          Projects
        </a>
        <a href="#contact" onClick={handleNavClick}>
          Contact Me
        </a>
      </MobileMenu>
    </Header>
  );
}