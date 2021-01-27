/**
 *
 * PersonalHeader
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as GithubIcon } from './assets/github-1.svg';
import { ReactComponent as LinkedinIcon } from './assets/linkedin-3.svg';

interface Props {}

export const PersonalHeader = memo((props: Props) => {
  return (
    <Div>
      <MarginDiv>
        <InnerDiv>
          <MarginH1 id="name">Joshua Maldonado</MarginH1>
          <b>
            <i id="tag-line">Creativity meets persistence</i>
          </b>
          <p id="occupation">Software Engineer</p>
        </InnerDiv>
        <span id="socials">
          <span>
            <GithubIcon />
            <a
              href="https://github.com/jmaldon1"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MarginLeftBold>Github</MarginLeftBold>
            </a>
          </span>
          <VerticalLine />
          <span>
            <LinkedinIcon />
            <a
              href="https://www.linkedin.com/in/joshua-maldonado/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <MarginLeftBold>Linkedin</MarginLeftBold>
            </a>
          </span>
        </span>
      </MarginDiv>
    </Div>
  );
});

const Div = styled.div``;

const MarginH1 = styled.h1`
  margin-bottom: 2px;
`;

const MarginDiv = styled.div`
  margin: 2em;
  margin-bottom: 0.5em;
`;

const InnerDiv = styled.div``;

const VerticalLine = styled.span`
  border-left: 1px solid;
  height: 20px;
  margin-left: 10px;
  margin-right: 10px;
`;

const MarginLeftBold = styled.b`
  margin-left: 5px;
`;
