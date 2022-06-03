import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import React, { useLayoutEffect, useRef } from "react";
import styled from "styled-components";
import Accordion from "../Accordion";

const Section = styled.section`
  min-height: 100vh;
  height: auto;
  width: 100vw;
  background-color: black;
  position: relative;
  color: ${(props) => props.theme.body};
  overflow: hidden;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;
const Title = styled.h1`
  font-size: ${(props) => props.theme.fontxxl};
  text-transform: uppercase;
  color: ${(props) => props.theme.body};

  margin: 1rem auto;
  border-bottom: 2px solid ${(props) => props.theme.carouselColor};
  width: fit-content;

  @media (max-width: 48em) {
    font-size: ${(props) => props.theme.fontxl};
  }
`;

const Container = styled.div`
  width: 75%;
  margin: 2rem auto;

  display: flex;
  justify-content: space-between;
  align-content: center;

  @media (max-width: 64em) {
    width: 80%;
  }
  @media (max-width: 48em) {
    width: 90%;
    flex-direction: column;

    & > *:last-child {
      & > *:first-child {
        margin-top: 0;
      }
    }
  }
`;
const Box = styled.div`
  width: 45%;
  @media (max-width: 64em) {
    width: 90%;
    align-self: center;
  }
`;

const Faq = () => {
  const ref = useRef(null);
  gsap.registerPlugin(ScrollTrigger);
  useLayoutEffect(() => {
    let element = ref.current;

    ScrollTrigger.create({
      trigger: element,
      start: "bottom bottom",
      end: "bottom top",
      pin: true,
      pinSpacing: false,
      scrub: 1,
      // markers:true,
    });

    return () => {
      ScrollTrigger.kill();
    };
  }, []);

  return (
    <Section ref={ref} id="faq">
      <Title>Faq</Title>

      <Container>
        <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHERE CAN I VIEW MY NFTS?"
          >
            Once minted or bought simply open your wallet to view your NFTs.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHAT IS THE METAVERSE?"
          >
            A metaverse is a network of 3D virtual worlds focused on social
            connection. In futurism and science fiction, it is often described
            as a hypothetical iteration of the Internet as a single, universal
            virtual world that is facilitated by the use of virtual and
            augmented reality headsets.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHY DO WE NEED ROYALTIES?"
          >
            The amount of royalties was fixed at 5% to finance the RME Universe
            projects. We have the ambition to organize multiple events around
            the world in order to strengthen the community and build a network
            of food lovers, entertianment enthusiasts and the thrill seekers
            with the same mindset and common interests.
          </Accordion>
        </Box>
        <Box>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="HOW CAN I USE MY NFT?"
          >
            You will be able to use your NFT as an entry in the Metaverse and
            our future events in IRL. Holding also means that you are part of an
            exclusive network of early adopters of this transition.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="WHAT IS THE ORIGINS OF RME UNIVERSE?
"
          >
            We are building the first NFT project on the Middle East, and we
            want to make UAE the hub for great NFT projects in the Middle East.
            We are a team of passionate entrepreneurs, developers, and
            blockchain enthusiasts who want to bring more innovation to our
            region.
          </Accordion>
          <Accordion
            ScrollTrigger={ScrollTrigger}
            title="HOW MANY ROUNDS OF THE NFTs ARE PLANNED?
"
          >
            We are currently launching the first round of NFTs, and we plan to
            launch the second round of NFTs in the coming months.
          </Accordion>
        </Box>
      </Container>
    </Section>
  );
};

export default Faq;
