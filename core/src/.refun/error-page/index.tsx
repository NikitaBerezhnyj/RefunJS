import React, { useState, useEffect } from "react";
import { useRouteError, isRouteErrorResponse, Link } from "react-router-dom";
import { AlertTriangle, Home, Globe, RefreshCw, ChevronRight } from "lucide-react";
import styles from "./error-page.module.css";

interface Particle {
  id: number;
  x: number;
  y: number;
  size: number;
  duration: number;
  delay: number;
}

export default function ErrorPage() {
  const error = useRouteError();
  const [particles, setParticles] = useState<Particle[]>([]);
  const [isRefreshing, setIsRefreshing] = useState(false);

  useEffect(() => {
    const newParticles: Particle[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: Math.random() * 4 + 2,
      duration: Math.random() * 3 + 2,
      delay: Math.random() * 2
    }));
    setParticles(newParticles);
  }, []);

  const handleRefresh = () => {
    setIsRefreshing(true);
    setTimeout(() => window.location.reload(), 600);
  };

  const is404 = isRouteErrorResponse(error) && error.status === 404;
  const statusCode = isRouteErrorResponse(error) ? error.status : null;
  const message = isRouteErrorResponse(error)
    ? error.statusText
    : (error as Error)?.message || "Невідома помилка";

  return (
    <main className={styles["error-container"]}>
      <div className={styles.particles}>
        {particles.map(particle => (
          <div
            key={particle.id}
            className={styles.particle}
            style={{
              left: `${particle.x}%`,
              top: `${particle.y}%`,
              width: `${particle.size}px`,
              height: `${particle.size}px`,
              animationDuration: `${particle.duration}s`,
              animationDelay: `${particle.delay}s`
            }}
          />
        ))}
      </div>

      <div className={styles.content}>
        <div className={styles["icon-wrapper"]}>
          <div className={`${styles["icon-circle"]} ${styles.pulse}`}>
            {is404 ? (
              <Globe className={styles.icon} strokeWidth={1.5} />
            ) : (
              <AlertTriangle className={styles.icon} strokeWidth={1.5} />
            )}
          </div>
          <div className={styles["icon-glow"]} />
        </div>

        <div className={styles["status-wrapper"]}>
          {statusCode ? (
            <h1 className={`${styles.status} ${styles.glitch}`} data-text={statusCode}>
              {statusCode}
            </h1>
          ) : (
            <h1 className={styles["status-text"]}>Упс! Щось пішло не так</h1>
          )}
        </div>

        <p className={`${styles.message} ${styles["fade-in"]}`}>
          {is404 ? "Сторінку не знайдено" : message}
        </p>

        <div className={`${styles.info} ${styles["fade-in-delay"]}`}>
          {is404 ? (
            <p className={styles["info-text"]}>
              Схоже, ця сторінка вирушила у мандрівку або ніколи не існувала 🚀
            </p>
          ) : (
            <p className={styles["info-text"]}>Не хвилюйтесь, наша команда вже працює над цим</p>
          )}
        </div>

        <div className={styles.actions}>
          <Link to="/" className={`${styles.btn} ${styles["btn-primary"]}`}>
            <Home size={20} />
            <span>На головну</span>
            <ChevronRight size={18} className={styles.arrow} />
          </Link>

          <button
            onClick={handleRefresh}
            className={`${styles.btn} ${styles["btn-secondary"]} ${
              isRefreshing ? styles.refreshing : ""
            }`}
            disabled={isRefreshing}
          >
            <RefreshCw size={20} className={isRefreshing ? styles.spin : ""} />
            <span>{isRefreshing ? "Оновлення..." : "Оновити"}</span>
          </button>
        </div>
      </div>
    </main>
  );
}
