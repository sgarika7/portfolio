import React, { useEffect, useState } from "react";
import { DATA } from "./data";

import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import Skills from "./components/Skills";
import Projects from "./components/Projects";
import Experience from "./components/Experience";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";

function useTypewriter(words, speedMs = 48, pauseMs = 1100) {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    const current = words[index] || "";
    const doneTyping = subIndex === current.length && !deleting;

    const t = setTimeout(() => {
      if (!deleting && subIndex < current.length) {
        setSubIndex((v) => v + 1);
        return;
      }
      if (doneTyping) {
        setDeleting(true);
        return;
      }
      if (deleting && subIndex > 0) {
        setSubIndex((v) => v - 1);
        return;
      }
      if (deleting && subIndex === 0) {
        setDeleting(false);
        setIndex((v) => (v + 1) % words.length);
      }
    }, doneTyping ? pauseMs : deleting ? Math.max(22, speedMs * 0.65) : speedMs);

    return () => clearTimeout(t);
  }, [words, index, subIndex, deleting, speedMs, pauseMs]);

  const current = words[index] || "";
  return current.substring(0, subIndex);
}

export default function App() {
  const typed = useTypewriter(DATA.roles);

  const [active, setActive] = useState("about");
  useEffect(() => {
    const onHash = () => {
      const id = window.location.hash.replace("#", "") || "about";
      setActive(id);
    };
    onHash();
    window.addEventListener("hashchange", onHash);
    return () => window.removeEventListener("hashchange", onHash);
  }, []);

  return (
    <div className="page">
      <Navbar name={DATA.name} active={active} />

      <main className="main">
        <Hero data={DATA} typed={typed} />
        <Skills data={DATA} />
        <Experience data={DATA} />
        <Projects data={DATA} />
        <Certifications data={DATA} />
        <Contact data={DATA} />
      </main>
    </div>
  );
}
