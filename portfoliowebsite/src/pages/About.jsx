import React, { useEffect, useRef } from "react";
import "../styles/About.css";

function About() {
  const timelineRef = useRef(null);
  const aboutRef = useRef(null);

  useEffect(() => {
    const originalOverflow = document.body.style.overflowY;
    document.body.style.overflowY = "hidden";

    const timeline = timelineRef.current;
    const about = aboutRef.current;

    const onWheel = (e) => {
      e.preventDefault();

      timeline.scrollLeft += e.deltaY;

      const scrollProgress =
        timeline.scrollLeft /
        (timeline.scrollWidth - timeline.clientWidth);

      about.style.backgroundPositionX = `${scrollProgress * 100}%`;
    };

    timeline.addEventListener("wheel", onWheel, { passive: false });

    return () => {
      document.body.style.overflowY = originalOverflow;
      timeline.removeEventListener("wheel", onWheel);
    };
  }, []);

  return (
    <section className="about" ref={aboutRef}>
      <h1 className="about-title">
        Benedek <span>Pintér</span>
      </h1>

      <div className="timeline-wrapper" ref={timelineRef}>
        <div className="timeline">

          <div className="timeline-item">
            <h2>Who I Am</h2>
            <p>Passionate developer focused on clean solutions.</p>
          </div>

          <div className="timeline-item">
            <h2>What I Do</h2>
            <p>Full-stack development & UX polish.</p>
          </div>

          <div className="timeline-item">
            <h2>How I Work</h2>
            <p>Scalable architecture and clean code.</p>
          </div>

          <div className="timeline-item">
            <h2>My Goal</h2>
            <p>Memorable digital experiences.</p>
          </div>

        </div>
      </div>
    </section>
  );
}

export default About;
