import React, { useState, useEffect } from "react";
import { Button } from "@/components/Button/Button";
import { Card, CardBody } from "@/components/Card/Card";
import styles from "./home.module.css";
import { Head } from ".refunjs/Head/Head";

const HomePage: React.FC = () => {
  const [activeFeature, setActiveFeature] = useState<number | null>(null);
  const [codeSnippet, setCodeSnippet] = useState(0);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const features = [
    {
      icon: "⚡",
      title: "Quick Start",
      description: "Ready-to-use React + TypeScript with minimal setup",
      color: "--color-warning"
    },
    {
      icon: "🎯",
      title: "File-based Routing",
      description: "Automatic routing based on the pages/ folder structure",
      color: "--color-error"
    },
    {
      icon: "🎨",
      title: "CSS Modules",
      description: "Isolated styles with support for CSS variables and dark mode",
      color: "--color-accent"
    },
    {
      icon: "📦",
      title: "Preinstalled Libraries",
      description: "React Query, Zustand, React Router included and preconfigured",
      color: "--color-primary"
    },
    {
      icon: "🔧",
      title: "TypeScript",
      description: "Full TypeScript support with preconfigured settings",
      color: "--color-secondary"
    },
    {
      icon: "🚀",
      title: "Vite",
      description: "Blazingly fast dev server and optimized build",
      color: "--color-success"
    }
  ];

  const codeExamples = [
    {
      title: "Create a Project",
      code: "npx refunjs create"
    },
    {
      title: "Add a Page",
      code: "npx refunjs add-page about"
    },
    {
      title: "Add a Component",
      code: "npx refunjs add-component Footer"
    }
  ];

  const stats = [
    { value: "1", label: "step", suffix: "" },
    { value: "0", label: "configurations", suffix: "" },
    { value: "100", label: "ready", suffix: "%" }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      setCodeSnippet(prev => (prev + 1) % codeExamples.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <Head title="RefunJS" description="Demo page of RefunJS framework" />

      <div className={styles.container}>
        <section className={`${styles.hero} ${isVisible ? styles.visible : ""}`}>
          <div className={styles.heroBackground}>
            <div className={styles.gradient1}></div>
            <div className={styles.gradient2}></div>
            <div className={styles.gradient3}></div>
          </div>

          <div className={styles.heroContent}>
            <div className={styles.badge}>
              <span className={styles.badgeDot}></span>
              React Framework
            </div>

            <h1 className={styles.title}>
              Build React applications
              <span className={styles.gradient}> faster</span>
            </h1>

            <p className={styles.subtitle}>
              RefunJS is a React-based framework with file-based routing, built-in tools, and modern
              development practices. Start working in seconds, not hours.
            </p>

            <div className={styles.actions}>
              <Button variant="outline" size="lg">
                <span className={styles.terminal}>$</span>
                <code>npx refunjs</code>
              </Button>
            </div>

            <div className={styles.stats}>
              {stats.map((stat, index) => (
                <div key={index} className={styles.stat}>
                  <div className={styles.statValue}>
                    {stat.value}
                    <span className={styles.statSuffix}>{stat.suffix}</span>
                  </div>
                  <div className={styles.statLabel}>{stat.label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className={styles.codePreview}>
          <div className={styles.codeWindow}>
            <div className={styles.codeHeader}>
              <div className={styles.codeDots}>
                <span></span>
                <span></span>
                <span></span>
              </div>
              <div className={styles.codeTitle}>{codeExamples[codeSnippet].title}</div>
              <div className={styles.codeTabs}>
                {codeExamples.map((_, index) => (
                  <button
                    key={index}
                    className={`${styles.codeTab} ${codeSnippet === index ? styles.active : ""}`}
                    onClick={() => setCodeSnippet(index)}
                  />
                ))}
              </div>
            </div>
            <div className={styles.codeBody}>
              <span className={styles.codePrompt}>$</span>
              <span className={styles.codeText}>{codeExamples[codeSnippet].code}</span>
              <span className={styles.codeCursor}></span>
            </div>
          </div>
        </section>

        <section className={styles.features}>
          <h2 className={styles.sectionTitle}>
            Everything you need <span className={styles.gradient}>out of the box</span>
          </h2>
          <p className={styles.sectionSubtitle}>
            Don’t waste time on configuration. Start coding right away.
          </p>

          <div className={styles.grid}>
            {features.map((feature, index) => (
              <div
                key={index}
                className={`${styles.featureCard} ${activeFeature === index ? styles.active : ""}`}
                onMouseEnter={() => setActiveFeature(index)}
                onMouseLeave={() => setActiveFeature(null)}
                style={{
                  animationDelay: `${index * 0.1}s`
                }}
              >
                <Card hoverable>
                  <CardBody>
                    <div
                      className={styles.featureIcon}
                      style={{
                        backgroundColor: `var(${feature.color})`
                      }}
                    >
                      <span>{feature.icon}</span>
                    </div>
                    <h3 className={styles.featureTitle}>{feature.title}</h3>
                    <p className={styles.featureDescription}>{feature.description}</p>
                  </CardBody>
                </Card>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.techStack}>
          <h2 className={styles.sectionTitle}>
            Built on <span className={styles.gradient}>proven technologies</span>
          </h2>

          <div className={styles.techGrid}>
            {[
              { name: "React 18", icon: "⚛️" },
              { name: "TypeScript", icon: "📘" },
              { name: "Vite", icon: "⚡" },
              { name: "React Router", icon: "🛣️" },
              { name: "React Query", icon: "🔄" },
              { name: "Zustand", icon: "🐻" },
              { name: "CSS Modules", icon: "🎨" },
              { name: "Jest", icon: "🃏" }
            ].map((tech, index) => (
              <div key={index} className={styles.techItem}>
                <span className={styles.techIcon}>{tech.icon}</span>
                <span className={styles.techName}>{tech.name}</span>
              </div>
            ))}
          </div>
        </section>

        <section className={styles.cta}>
          <div className={styles.ctaCard}>
            <Card>
              <CardBody>
                <h2 className={styles.ctaTitle}>Ready to get started?</h2>
                <p className={styles.ctaText}>
                  Create your first project with RefunJS in just a few seconds
                </p>

                <div className={styles.ctaCodeWrapper}>
                  <div className={styles.ctaCode}>
                    <code>npx refunjs create my-app</code>
                  </div>
                  <button
                    className={styles.copyButton}
                    onClick={() => {
                      navigator.clipboard.writeText("npx refunjs create my-app");
                    }}
                  >
                    📋
                  </button>
                </div>
              </CardBody>
            </Card>
          </div>
        </section>
      </div>
    </>
  );
};

export default HomePage;
