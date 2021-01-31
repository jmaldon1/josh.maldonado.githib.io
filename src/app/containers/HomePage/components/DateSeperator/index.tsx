/**
 *
 * DateSeperator
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { Layout } from 'react-grid-layout';
import Toast from 'react-bootstrap/Toast';
import _ from 'lodash';

interface Props {
  layout: Layout;
  randomNumber: number;
}

export const DateSeperator = memo(({ layout, randomNumber }: Props) => {
  const date = _.split(layout.i, '_')[0];
  return (
    <CenteredToast
      className="date-seperator"
      randomcolor={generateSemiRandomColor(date, randomNumber)}
    >
      <Toast.Header closeButton={false}>
        <CenteredDiv>
          <strong className="mr-auto">{date}</strong>
        </CenteredDiv>
      </Toast.Header>
    </CenteredToast>
  );
});

const generateSemiRandomColor = (
  date: string,
  randomNumber: number,
): string => {
  // Sum the ASCII of the date string
  const dateAsciiSum = _.reduce(
    _.split(date, ''),
    (acc: number, val: string) => {
      return acc + val.charCodeAt(0);
    },
    0,
  );
  // Adjust the sum to spread the values out from each other better.
  // Ensure we multiply by a random number so that new colors are generated on page load.
  const adjustedDateAscii =
    reverseInt(parseInt(Math.pow(dateAsciiSum, 3).toString().slice(0, -3))) *
    randomNumber;
  // Goldren ratio provides a more even distribution of colors.
  const goldenRatioConjugate = 0.618033988749895;
  const semiRandomNumber = adjustedDateAscii;
  const addGoldRatio = (x: number) => {
    return x + goldenRatioConjugate;
  };
  const moduloOne = (x: number) => {
    return x % 1;
  };
  // Evenly distribute the hue.
  const hue = moduloOne(addGoldRatio(semiRandomNumber));
  const [r, g, b] = hsvTorgb(hue, 0.99, 0.99);
  return `rgb(${[r, g, b]})`;
};

const reverseInt = (x: number) => {
  return parseInt(x.toString().split('').reverse().join(''));
};

type RGBTuple = [number, number, number];
const hsvTorgb = (hue: number, saturation: number, value: number): RGBTuple => {
  // Convert HSV to RGB
  // https://martin.ankerl.com/2009/12/09/how-to-create-random-colors-programmatically/
  const hue_i = Math.floor(hue * 6);
  const f = hue * 6 - hue_i;
  const p = value * (1 - saturation);
  const q = value * (1 - f * saturation);
  const t = value * (1 - (1 - f) * saturation);
  const [r, g, b] = ((): number[] => {
    if (hue_i === 0) return [value, t, p];
    if (hue_i === 1) return [q, value, p];
    if (hue_i === 2) return [p, value, t];
    if (hue_i === 3) return [p, q, value];
    if (hue_i === 4) return [t, p, value];
    return [value, p, q];
  })();
  return [Math.floor(r * 256), Math.floor(g * 256), Math.floor(b * 256)];
};

const CenteredDiv = styled.div`
  margin-left: auto;
  margin-right: auto;
`;

const CenteredToast = styled(Toast)`
  width: 100%;
  height: 100%;
  max-width: none;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  border-bottom-color: ${props => props.randomcolor};
  /* border-bottom-color: ${`#${Math.floor(Math.random() * 16777215).toString(
    16,
  )}`} */
`;
