/**
 *
 * DateSeperator
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { Layout } from 'react-grid-layout';
import Toast from 'react-bootstrap/Toast';

interface Props {
  layout: Layout;
}

export const DateSeperator = memo(({ layout }: Props) => {
  const date = layout.i;
  return (
    <CenteredToast>
      <Toast.Header closeButton={false}>
        <CenteredDiv>
          <strong className="mr-auto">{date}</strong>
        </CenteredDiv>
      </Toast.Header>
    </CenteredToast>
  );
});

const CenteredDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const CenteredToast = styled(Toast)`
  width: 100%;
  height: 100%;
  display: block;
  margin-left: auto;
  margin-right: auto;
`;
