/**
 *
 * BaseItem
 * This is the place to add elements that will appear on all layout items.
 *
 */
import React, { memo } from 'react';
import styled from 'styled-components/macro';

import { ReactComponent as DragHandleIcon } from './assets/drag-handle.svg';

interface Props {
  children: any;
}

export const BaseItem = memo(({ children }: Props) => {
  return (
    <Div>
      <DragableHandle className="draggable">
        <DragHandleIcon />
      </DragableHandle>
      {children}
    </Div>
  );
});

const Div = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const DragableHandle = styled.div`
  width: 100%;
  height: 20px;
  min-height: 20px;
  border: 1px solid black;
  background-color: white;
  border-style: solid solid none solid;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor: pointer;
  border-radius: 3px;
`;
