import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"
import styled from "styled-components"

import SEO from "../../components/seo"

const PageStyles = styled.section``

export default () => {
  return (
    <>
      <SEO title="Programs - Behavior Management System" />
      <h1>
        Programs &gt;{" "}
        <span className="highlight">Behavior Management System</span>
      </h1>
      <PageStyles>
        <h2>Description</h2>
        <p>
          Work Creation Behavior Management Program serves adults with
          developmental disabilities who are 18 years of age and older. Program
          Hours are 8:00 AM to 2:30 PM five days a week. Staff/client ratio is
          one staff member to three clients or is one staff member to four
          clients as needed. Work Creation currently has staff and clients who
          speak English, Spanish, Farsi, Arabic, Korean, Vietnamese, Greek,
          Japanese, Chinese, Portuguese, and Tagalog. Work Creation is vendored
          to provide services to individuals living throughout Orange County as
          well as areas within Los Angeles.
        </p>
        <p>
          Work Creation offers a community based behavior program to individuals
          with maladaptive behaviors which prevent them from participating in
          less restrictive environments. Work [placement is varied to
          accommodate individual abilities and interests. Community skill
          training is done utilizing integrated community resources for work,
          recreation and personal needs. Participants are trained to gain
          sufficient interpersonal and community skills to meet situational
          demands of the business world.
        </p>
        <p>
          Work Creation Program emphasizes the use of positive programming and
          non-punitive behavior modification. It is the goal of the program that
          through behavioral programming, clients will receive sound training
          which will enable them to face life with a strong, positive stance.
          The role of Work Creation behavior change curriculum is two fold.
          Through the use of positive behavior change strategies, staff at Work
          Creation attempt to decrease the occurrence of inappropriate behavior
          pattern. In addition, staff trains more socially acceptable
          alternatives that seen to better meet individual’s needs. The
          following strategies may be used interchangeably throughout the
          participants’ program at work: differential reinforcement of other
          behavior, differential reinforcement of alternative behaviors,
          stimulus control, stimulus change and extinction. Assistance provided
          and level of reinforcement is gradually decreased as the individual
          gains independence and develops a healthy level of self-worth.
        </p>
        <h2>Funding</h2>
        <p>
          The programs and transportation within Orange County are funded by the
          Regional Center of Orange County (RCOC): Behavior Management Vendor #
          H13675; Transportation Vendor #H13685 The programs and transportation
          within Los Angeles are funded by the Westside and North LA Regional
          Centers: Behavior Management Vendor # H66354; Transportation Vendor
          #H13685 Harbor Regional Center: Behavior Management Vendor # H66354;
          Transportation Vendor #H13685
        </p>
      </PageStyles>
    </>
  )
}
