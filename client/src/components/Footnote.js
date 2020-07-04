import React from "react";
import { Link } from "react-router-dom";
import { theme, mq } from "constants/theme";

import styled from "styled-components";

const { colors } = theme;

const StyledFooter = styled.footer`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  width: 100%;
  height: 7.1rem;

  background: ${colors.selago};
  line-height: 2rem;
  font-family: Poppins;
  font-size: 1.1rem;

  @media screen and (min-width: ${mq.tablet.wide.minWidth}) {
    font-size: 1.4rem;
    height: 9rem;
  }
`;

const Copyright = styled.div`
  font-weight: 500;
  color: ${colors.darkerGray};
`;

const Policies = styled.div`
  color: ${colors.darkGray};

  @media screen and (min-width: ${mq.tablet.wide.minWidth}) {
    margin-top: 1.2rem;
  }
`;

const FooterLink = styled(Link)`
  color: ${colors.darkGray};
  margin: 0 1rem;
  text-decoration-line: underline;
`;

const FooterALink = styled.a`
  color: ${colors.darkGray};
  margin: 0 1rem;
  text-decoration-line: underline;
`;
const StyledDivTop = styled.div`
  padding-left: 1rem;
  padding-right: 1rem;
`;
const StyledDivBottom = styled.div`
  padding-left: 5rem;
  padding-right: 5rem;
`;

export default () => {
  const currentYear = new Date().getFullYear();
  return (
    <StyledFooter>
      <Copyright>
        Copyright {currentYear} FightPandemics. All rights reserved.
      </Copyright>
      <Policies>
        <StyledDivTop>
        <FooterLink to={"/about-us"}>About Us</FooterLink> |{" "}
        <FooterLink to={"/faq"}>FAQ</FooterLink> |{" "}
        <FooterALink
          href="https://medium.com/@FightPandemics"
          target="_blank"
          alt="FightPandemics Blog Link"
        >
          Blog
        </FooterALink>
        | <FooterLink to={"/terms-conditions"}>Terms & Conditions</FooterLink> 
        </StyledDivTop>
        <StyledDivBottom>
        <FooterLink to={"/privacy-policy"}>Privacy Policy</FooterLink> |{" "}
          <FooterLink to={"/cookies-policy"}>Cookies Policy</FooterLink>
          </StyledDivBottom>
      </Policies>
    </StyledFooter>
  );
};
