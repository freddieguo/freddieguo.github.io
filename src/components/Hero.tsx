"use client";
import styled, { keyframes } from "styled-components";
import Image from "next/image";
import avatar from "../app/favicon.ico"; // 改成你的头像路径

// 👋 挥手动画
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

// 🪄 漂浮动画（头像）
const floatY = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-6px); }
  100% { transform: translateY(0); }
`;

// ✨ 按钮发光动画
const shine = keyframes`
  0% { left: -30%; }
  100% { left: 130%; }
`;

// Hero 容器
const Section = styled.section`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: center;
  padding: 120px 10%;
  min-height: 80vh;
`;

// 左侧内容
const Left = styled.div`
  flex: 1;
  min-width: 280px;
`;

// 右侧头像
const Right = styled.div`
  flex: 1;
  min-width: 240px;
  display: flex;
  justify-content: center;
  animation: ${floatY} 3.6s ease-in-out infinite;
`;

// 👋 emoji
const Emoji = styled.span`
  display: inline-block;
  transform-origin: 70% 70%;
  animation: ${wave} 2.2s ease-in-out infinite;
`;

// 主标题
const Title = styled.h1`
  font-size: 3.4rem;
  font-weight: 900;
  line-height: 1.1;
  margin: 0 0 20px;
  color: #111;
  animation: fadeInUp 1s ease forwards;
`;

// 副标题
const Subtitle = styled.p`
  font-size: 1.15rem;
  color: #555;
  max-width: 580px;
  line-height: 1.6;
  margin-bottom: 40px;
`;

// 按钮区域
const Buttons = styled.div`
  display: flex;
  gap: 16px;
`;

// 通用按钮
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

  /* ✨ 发光扫过 */
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
`;

export default function Hero() {
  return (
    <Section>
      <Left>
        <Title>
          Hi all, I&apos;m Freddie <Emoji>👋</Emoji>
        </Title>
        <Subtitle>
          A data-driven storyteller: I analyze messy datasets and ship clean,
          decision-ready insights with Python, SQL, and modern visualization.
        </Subtitle>
        <Buttons>
          <Btn href="#contact" $primary>
            CONTACT ME
          </Btn>
          <Btn href="/resume.pdf">SEE MY RESUME</Btn>
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
