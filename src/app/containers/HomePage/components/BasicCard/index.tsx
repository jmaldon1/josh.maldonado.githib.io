/**
 *
 * BasicCard
 *
 */
import React, { memo } from 'react';
// import styled from 'styled-components/macro';

import Card from 'react-bootstrap/Card';
import { ItemImage } from '../../types';
import testing from 'app/containers/HomePage/assets/audio_waves.jpg';

interface Props {
  title: string;
  image: ItemImage;
}

export const BasicCard = memo(({ title, image }: Props) => {
  return (
    // <img src={testing}></img>
    <Card
      style={{
        width: '100%',
        height: '100%',
        //  Scroll bar only when needed
        overflow: 'auto',
      }}
    >
      <Card.Img variant="top" src={testing} />
      <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content. Some quick example text to build on the
          card title and make up the bulk of the card's content. Some quick
          example text to build on the card title and make up the bulk of the
          card's content.
        </Card.Text>
      </Card.Body>
    </Card>
  );
});

// const Div = styled.div``;
