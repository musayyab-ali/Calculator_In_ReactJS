import React from "react";
import { Link } from "react-router-dom";
import "./about.css";
function About() {
  return (
    <>
      <header className="header">
        <div>
          <p className="header-intro">Hi, I'm</p>
          <h1 className="header-name">Arman</h1>
        </div>
      </header>

      <section className="about">
        <h2>Introduction</h2>
        <p>
          Hi, I'm a freelance Designer who's currently learning to code on{" "}
          <Link to="" target="_blank">
            Thinkful
          </Link>
          . I really want to learn how to implement my own designs in the
          browser and offer a better service to my clients by telling them that
          I can code too!
        </p>

        <p>
          I spend far too much time on the web, keeping one eye on Twitter and
          the other on <Link to="">Product Hunt</Link> to ensure I dont miss out
          on any new products! As well as web design, I have a real desire to
          learn iOS development as well, but all in good time.
        </p>
      </section>

      <section className="questions">
        <h2>More about me</h2>
        <h3>Where am I from?</h3>
        <p>
          I'm originally from a small country called New Zealand where we all
          have pet sheep and watch{" "}
          <Link to="" target="_blank">
            Rugby
          </Link>{" "}
          every day of the week. I grew up in a small town but moved over to the
          UK a few years ago and I'm now living in the countryside in Ireland.
        </p>

        <h3>What is my Dream Job?</h3>
        <p>
          Part of the reason I'm learning to code is because I want to be able
          to put my own ideas into practice. My dream 'job' would be to build my
          own product and be responsbible for the entire experience from design
          through to implementation.{" "}
        </p>

        <h3>What music have you been listening to?</h3>
        <p>
          I only just recently discovered an awesome website called{" "}
          <Link to="" target="_blank">
            Hype Machine
          </Link>{" "}
          which watches popular music blogs and discovers new artists and lets
          you stream all the music completely free. I've been really implressed
          with their breadth and can just hit play and forget about it.
        </p>
      </section>
    </>
  );
}

export default About;
