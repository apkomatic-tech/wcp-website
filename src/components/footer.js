import React from "react"
import styled from "styled-components"

const FooterStyles = styled.footer`
  background-color: rgba(251, 250, 255, 0.75);
  padding-top: 2.5rem;
  margin-top: 3rem;
  font-size: 1.4rem;
  border-top: 1px solid #eeecf5;
  .footer-container {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 4rem;
    padding: 0 2rem;
    justify-content: space-between;
    margin-bottom: 2.5rem;
  }
  .footer-addresses {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-gap: 2rem;
    address {
      text-align: right;
      font-style: normal;
    }
  }
  .footer-copy {
    text-align: center;
    padding: 2.5rem;
    margin: auto;
    max-width: calc(100% - 4rem);
    border-top: 1px solid #eeecf5;
  }
`

export default function () {
  return (
    <FooterStyles>
      <div className="footer-container">
        <div className="company-text">
          <strong>Work Creation Programs</strong> provide community-based
          Vocational Training and Work Experience, Community Integration, and
          Social Skills Training for Adults with Developmental Disabilities who
          are interested in working and participating in the community in group
          settings.
        </div>
        <div className="footer-addresses">
          <address>
            <strong>South Orange County</strong>
            <br />
            5001 Birch Street
            <br />
            Newport Beach, CA 92660
            <br />
            Phone: (800) 670-9274
          </address>
          <address>
            <strong>North Orange County</strong>
            <br />
            1980 Old Tustin Ave
            <br />
            Santa Ana, CA 92705
            <br />
            Phone: (714) 245-4991
          </address>
        </div>
      </div>
      <div className="footer-copy">
        {new Date().getFullYear()} &copy; Work Creation Program, Inc.
      </div>
    </FooterStyles>
  )
}
