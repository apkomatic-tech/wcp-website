import React from "react"
import styled from "styled-components"

const Footer = styled.footer`
  padding-top: 2.5rem;
  margin-top: 3rem;
  font-size: 1.4rem;
  background-color: var(--white);
  color: rgba(1, 1, 1, 0.8);
`
const FooterContainer = styled.div`
  max-width: var(--pageWidth);
  width: 100%;
  display: grid;
  grid-gap: 3rem;
  padding: 0 1rem;
  margin: 0 auto 2.5rem auto;
  @media screen and (min-width: 767px) {
    grid-template-columns: minmax(200px, 350px) 1fr;
    grid-gap: 6rem;
  }
`
const FooterAddressCols = styled.div`
  display: grid;
  grid-template-columns: repeat(
    ${(props) => (props.cols ? props.cols : 1)},
    minmax(100px, 200px)
  );
  @media screen and (min-width: 767px) {
    grid-template-columns: repeat(
      ${(props) => (props.cols ? props.cols : 1)},
      minmax(150px, 250px)
    );
  }
  grid-gap: 1rem;
`
const FooterAddress = styled.address`
  font-style: normal;
  @media screen and (min-width: 767px) {
    text-align: right;
  }
`
const FooterCopy = styled.div`
  text-align: center;
  padding: 2.5rem;
  margin: auto;
  max-width: calc(100% - 4rem);
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  font-size: 1.1rem;
`

export default function () {
  return (
    <Footer>
      <FooterContainer>
        <div>
          <strong>Work Creation Programs</strong> provide community-based
          Vocational Training and Work Experience, Community Integration, and
          Social Skills Training for Adults with Developmental Disabilities who
          are interested in working and participating in the community in group
          settings.
        </div>
        <FooterAddressCols cols={2}>
          <FooterAddress>
            <strong>South Orange County</strong>
            <br />
            5001 Birch Street
            <br />
            Newport Beach, CA 92660
            <br />
            Phone: (800) 670-9274
          </FooterAddress>
          <FooterAddress>
            <strong>North Orange County</strong>
            <br />
            1980 Old Tustin Ave
            <br />
            Santa Ana, CA 92705
            <br />
            Phone: (714) 245-4991
          </FooterAddress>
        </FooterAddressCols>
      </FooterContainer>
      <FooterCopy>
        {new Date().getFullYear()} &copy; Work Creation Program, Inc.
      </FooterCopy>
    </Footer>
  )
}
