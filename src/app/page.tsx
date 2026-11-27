"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import {
  ArrowRight,
  Backpack,
  CalendarDays,
  ChevronRight,
  CircleHelp,
  Compass,
  Images,
  Languages,
  MapPin,
  Menu,
  Music2,
  Plane,
  Settings2,
  X,
} from "lucide-react";

type ThemeName = "tropical" | "ocean" | "youth" | "pastel";

const navigation = [
  { label: "자세히 보기", description: "선교의 핵심 정보를 확인합니다.", href: "#details", icon: Compass },
  { label: "About 타클로반", description: "우리가 방문할 도시를 알아봅니다.", href: "#about", icon: MapPin },
  { label: "일정", description: "날짜별 선교 일정을 확인합니다.", href: "#schedule", icon: CalendarDays },
  { label: "준비물", description: "출국 전 필요한 준비물을 확인합니다.", href: "#supplies", icon: Backpack },
  { label: "언어 배우기", description: "영어와 와라이어 표현을 익힙니다.", href: "#language", icon: Languages },
  { label: "Q&A", description: "자주 묻는 질문과 답변입니다.", href: "#qa", icon: CircleHelp },
  { label: "선교 갤러리", description: "선교 사진을 모아봅니다.", href: "#gallery", icon: Images },
  { label: "CCM 플리", description: "함께 들을 찬양을 모았습니다.", href: "#music", icon: Music2 },
];

const themeLabels: Record<ThemeName, string> = {
  tropical: "Tropical",
  ocean: "Ocean",
  youth: "Youth",
  pastel: "Pastel",
};

export default function HomePage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [theme, setTheme] = useState<ThemeName>("tropical");
  const departureDate = "";

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
  }, [theme]);

  useEffect(() => {
    const savedTheme = window.localStorage.getItem("tm-theme") as ThemeName | null;
    const validThemes: ThemeName[] = ["tropical", "ocean", "youth", "pastel"];
    if (savedTheme && validThemes.includes(savedTheme)) setTheme(savedTheme);
  }, []);

  const dday = departureDate
    ? Math.ceil(
        (new Date(`${departureDate}T00:00:00+09:00`).getTime() -
          new Date(new Date().toLocaleDateString("en-CA", { timeZone: "Asia/Seoul" }) + "T00:00:00+09:00").getTime()) /
          86_400_000,
      )
    : null;

  function changeTheme(nextTheme: ThemeName) {
    setTheme(nextTheme);
    window.localStorage.setItem("tm-theme", nextTheme);
  }

  return (
    <main className="site-shell">
      <div className="ambient ambient-one" />
      <div className="ambient ambient-two" />

      <header className="topbar">
        <button
          className="icon-button glass-control"
          aria-label="메뉴 열기"
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen(true)}
        >
          <Menu size={21} strokeWidth={1.8} />
        </button>
        <a className="wordmark" href="/" aria-label="Tacloban Mission 홈">
          <span className="wordmark-mark">T</span>
          <span>TACLOBAN <span className="wordmark-light">MISSION</span></span>
        </a>
        <a className="flight-shortcut glass-control" href="#flights">
          <Plane size={17} strokeWidth={1.8} />
          <span>비행 정보</span>
        </a>
      </header>

      <section className="hero" aria-labelledby="hero-title">
        <div className="hero-copy">
          <motion.p
            className="eyebrow"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
          >
            A JOURNEY OF FAITH & SERVICE
          </motion.p>
          <motion.h1
            id="hero-title"
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.08 }}
          >
            함께 떠나는
            <br />
            <span>섬김의 여정.</span>
          </motion.h1>
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.18 }}
          >
            필리핀 타클로반에서 사랑을 나누고,
            <br className="desktop-break" />
            믿음으로 하나 되는 시간을 준비합니다.
          </motion.p>
          <motion.div
            className="hero-actions"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.28 }}
          >
            <a className="button button-primary" href="#details">
              자세히 보기 <ArrowRight size={17} />
            </a>
            <a className="button button-secondary" href="#application">
              선교 신청
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-orbit"
          initial={{ opacity: 0, scale: 0.92 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.1, delay: 0.2 }}
          aria-hidden="true"
        >
          <div className="orbit-ring orbit-ring-one" />
          <div className="orbit-ring orbit-ring-two" />
          <div className="orbit-sun" />
          <div className="orbit-label">LEYTE · PHILIPPINES</div>
          <div className="orbit-coordinate">11°14&apos;N 125°00&apos;E</div>
        </motion.div>
      </section>

      <section className="bottom-content">
        <div className="dday-card glass-panel">
          <div>
            <span className="card-kicker">OUR DEPARTURE</span>
            <h2>출국까지</h2>
            <p className="muted-copy">
              {dday === null
                ? "출국일은 관리자 설정 후 표시됩니다."
                : dday > 0
                  ? "함께 떠날 날을 기다리고 있어요."
                  : dday === 0
                    ? "오늘, 선교의 여정이 시작됩니다."
                    : "타클로반에서의 여정을 이어갑니다."}
            </p>
          </div>
          <div className="dday-value">
            {dday === null ? <span className="dday-pending">D —</span> : dday === 0 ? "D-DAY" : dday > 0 ? `D-${dday}` : `D+${Math.abs(dday)}`}
          </div>
        </div>

        <div className="theme-card glass-panel">
          <div className="theme-card-heading">
            <span className="card-kicker">APPEARANCE</span>
            <span className="muted-copy">미리보기 테마</span>
          </div>
          <div className="theme-options" role="group" aria-label="테마 미리보기">
            {(Object.keys(themeLabels) as ThemeName[]).map((name) => (
              <button
                key={name}
                className={`theme-option ${theme === name ? "active" : ""}`}
                onClick={() => changeTheme(name)}
                aria-pressed={theme === name}
                title={themeLabels[name]}
              >
                <span className={`theme-dot theme-dot-${name}`} />
                <span>{themeLabels[name]}</span>
              </button>
            ))}
          </div>
          <p className="theme-note">현재는 브라우저 미리보기입니다. 전체 사용자 적용은 관리자 기능 연결 후 활성화됩니다.</p>
        </div>
      </section>

      <footer className="site-footer">
        <span>© {new Date().getFullYear()} TACLOBAN MISSION</span>
        <span>FAITH · LOVE · SERVICE</span>
      </footer>

      <AnimatePresence>
        {menuOpen && (
          <>
            <motion.button
              className="menu-backdrop"
              aria-label="메뉴 닫기"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.22 }}
              onClick={() => setMenuOpen(false)}
            />
            <motion.aside
              className="sidebar glass-panel"
              initial={{ x: "-105%", opacity: 0.7 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: "-105%", opacity: 0.7 }}
              transition={{ type: "spring", stiffness: 290, damping: 30 }}
              aria-label="사이트 메뉴"
            >
              <div className="sidebar-header">
                <div>
                  <span className="card-kicker">EXPLORE</span>
                  <h2>메뉴</h2>
                </div>
                <button
                  className="icon-button close-button"
                  onClick={() => setMenuOpen(false)}
                  aria-label="메뉴 닫기"
                >
                  <X size={21} />
                </button>
              </div>
              <nav className="sidebar-nav">
                {navigation.map(({ label, description, href, icon: Icon }, index) => (
                  <motion.a
                    key={label}
                    href={href}
                    className="nav-item"
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.04 * index }}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span className="nav-icon"><Icon size={19} strokeWidth={1.8} /></span>
                    <span className="nav-text">
                      <strong>{label}</strong>
                      <small>{description}</small>
                    </span>
                    <ChevronRight className="nav-chevron" size={17} />
                  </motion.a>
                ))}
              </nav>
              <div className="sidebar-bottom">
                <a className="admin-link" href="#admin">
                  <Settings2 size={17} /> 관리자
                </a>
                <span>TACLOBAN · LEYTE, PHILIPPINES</span>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </main>
  );
}
