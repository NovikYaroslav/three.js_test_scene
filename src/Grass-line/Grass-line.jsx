import React from 'react';
import { Grass } from '../Grass/Grass';
import { zAxisMarks } from '../data';

export default function GrassLine() {
  return (
    <React.Fragment>
      {zAxisMarks.map((zMark) => (
        <React.Fragment key={zMark}>
          <Grass position={[-5, -2, zMark]} />
          <Grass position={[-4.5, -2, zMark]} />
          <Grass position={[-4, -2, zMark]} />
          <Grass position={[-3.5, -2, zMark]} />
          <Grass position={[-3, -2, zMark]} />
          <Grass position={[-2.5, -2, zMark]} />
          <Grass position={[-2, -2, zMark]} />
          <Grass position={[-1.5, -2, zMark]} />
          <Grass position={[-1, -2, zMark]} />
          <Grass position={[-0.5, -2, zMark]} />
          <Grass position={[0, -2, zMark]} />
          <Grass position={[0.5, -2, zMark]} />
          <Grass position={[1, -2, zMark]} />
          <Grass position={[1.5, -2, zMark]} />
          <Grass position={[2, -2, zMark]} />
          <Grass position={[2.5, -2, zMark]} />
          <Grass position={[3, -2, zMark]} />
          <Grass position={[3.5, -2, zMark]} />
          <Grass position={[4, -2, zMark]} />
          <Grass position={[4.5, -2, zMark]} />
          <Grass position={[5, -2, zMark]} />
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}
