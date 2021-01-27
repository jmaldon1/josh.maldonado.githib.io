/**
 *
 * BasicCard
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import Card from 'react-bootstrap/Card';
import { ItemImage } from '../../types';
import ReactHtmlParser from 'react-html-parser';

interface Props {
  title: string;
  details: string;
  image: ItemImage;
}

export const BasicCard = memo(({ title, details, image }: Props) => {
  return (
    <StyleCard>
      {ShowCardImg(image)}
      <Card.Body>
        <Card.Title>{ReactHtmlParser(title)}</Card.Title>
        {ReactHtmlParser(details)}
      </Card.Body>
    </StyleCard>
  );
});

const ShowCardImg = (image: ItemImage) => {
  if (image.name === null) return null;
  return (
    <CardImg
      variant="top"
      // Need to use .default, something todo with Babel and ES6
      src={require(`app/containers/HomePage/assets/${image.name}`).default}
    />
  );
};

const StyleCard = styled(Card)`
  height: 100%;
  /* width: 100%; */
  overflow: auto;
`;

const CardImg = styled(Card.Img)`
  max-height: 50%;
`;
