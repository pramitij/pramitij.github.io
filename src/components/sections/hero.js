import React, { useState, useEffect, useRef } from 'react';
import { CSSTransition, TransitionGroup } from 'react-transition-group';
import styled from 'styled-components';
import { navDelay, loaderDelay } from '@utils';
import { usePrefersReducedMotion } from '@hooks';
import Typewriter from 'typewriter-effect/dist/core';
import { About, Projects } from '@components';



const StyledHeroSection = styled.section`
  ${({ theme }) => theme.mixins.flexCenter};
  flex-direction: column;
  align-items: flex-start;
  min-height: 100vh;
  height: 100vh;
  padding: 0;

  @media (max-height: 700px) and (min-width: 700px), (max-width: 360px) {
    height: auto;
    padding-top: var(--nav-height);
  }

  h1 {
    margin: 0 0 30px 4px;
    color: var(--green);
    font-family: var(--font-mono);
    font-size: clamp(var(--fz-sm), 5vw, var(--fz-md));
    font-weight: 400;

    @media (max-width: 480px) {
      margin: 0 0 20px 2px;
    }
  }

  h3 {
    margin-top: 5px;
    color: var(--green);
    line-height: 0.9;
  }

  p {
    margin: 20px 0 0;
    max-width: 540px;
  }

  .email-link {
    ${({ theme }) => theme.mixins.bigButton};
    margin-top: 50px;
  }
`;

const Hero = () => {
  const [isMounted, setIsMounted] = useState(false);
  const prefersReducedMotion = usePrefersReducedMotion();
  const typewriterRef = useRef(null); // 1. PramUpdate

  useEffect(() => {
    if (prefersReducedMotion) {
      return;
    }
    let typewriter;
    if (typewriterRef.current) {
      typewriter = new Typewriter(typewriterRef.current, {
      loop: true,
      delay: 80,
      deleteSpeed: 10,
    });

    typewriter
      .typeString('I\'m a Software Engineer specializing in: <strong> Machine Learning </strong>')
      .pauseFor(800)
      .deleteChars(18)
      .typeString('<strong> User Experience </strong>')
      .pauseFor(800)
      .deleteChars(17)
      .typeString('<strong> Cloud Infrastructure </strong>')
      .pauseFor(800)
      .start();

  }
    const timeout = setTimeout(() => setIsMounted(true), navDelay);
     return () => {
        if (typewriter) {
          typewriter.stop();
        }
        clearTimeout(timeout);
      };
  }, [typewriterRef.current, prefersReducedMotion]);


  const one = <h2>Hi, my name is</h2>;
  const two = <h2 className="big-heading">Pramithi Jagdish.</h2>;
//  const three = <h3  ref={typewriterRef}>Tech Alchemist: I am a Full-stack Software Engineer </h3>; // PramUpdate
  const three = <h3> Tech Alchemist: Engineering Tomorrow's Code with Creativity </h3>; // PramUpdate
  const four  = (
    <>
      <p>
          I'm a Full-Stack Software Engineer with an eye for integrating Machine Learning and robust Cloud Infrastructure
          to build solutions that drive efficiency, scalability, and stability. Fueled by a relentless drive for innovation,
          I am gearing up to bring resilient engineering to a team that can shape the technology of tomorrow.
      </p>
    </>
//      Discover the multiplicity of my journey — where every line of code tells a story of possibility.

//        {' '}<a href="https://www.northeastern.edu/" target="_blank" rel="noreferrer">
//          Northeastern University
//        </a>


  );
//  const five = (
//    <a
//      className="email-link"
////      href=About //PICK UP HERE
////      target="_blank"
//      rel="noreferrer">
//      Learn more about me!
//    </a>
//
//   );
//   const six = (
//    <a
//      className="email-link"
//      href="https://www.newline.co/courses/build-a-spotify-connected-app"
//      target="_blank"
//      rel="noreferrer">
//      Jump to my project
//    </a>
//  );
  const ButtonGroup = (
    <div style={{
      display: 'flex', // Make the container a flex container
      justifyContent: 'space-around', // Adjust the space between the buttons
      paddingTop: '30px',
      paddingLeft: '-10px',
      padding: '10px',
      width: '100%', // Optional: Set a specific width if needed
      maxWidth: '600px', // Optional: Set a maximum width if needed
    }}>
      <a
        className="email-link"
        href="/#about"
//        target="_blank"
        style={{ margin: '0 10px', textDecoration: 'none' }}
//        rel="noreferrer"
        >

        Learn more about me!
      </a>
      <a
        className="email-link"
        href="/#projects"
//        target="_blank"
        style={{ margin: '0 10px', textDecoration: 'none' }}
//        rel="noreferrer"
        >
        Jump to my project
      </a>
    </div>
  );


  const items = [one, two, three, four, ButtonGroup];

  return (
    <StyledHeroSection>
      {prefersReducedMotion ? (
        <>
          {items.map((item, i) => (
            <div key={i}>{item}</div>
          ))}
        </>
      ) : (
        <TransitionGroup component={null}>
          {isMounted &&
            items.map((item, i) => (
              <CSSTransition key={i} classNames="fadeup" timeout={loaderDelay}>
                <div style={{ transitionDelay: `${i + 1}00ms` }}>{item}</div>
              </CSSTransition>
            ))}
        </TransitionGroup>
      )}
    </StyledHeroSection>
  );
};

export default Hero;
