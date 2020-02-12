import React from 'react';
import styled from 'styled-components';

const PageDiv = styled.div`
  padding: 0 10%;
`;

const Image = styled.div`
  padding-top: 50%;
  background: pink;
  background: url(/image-${({ id }) => id}.jpg) no-repeat center / cover;
`;

const LOREM =
  'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

const random = (min, max) => Math.round(min + Math.random() * (max - min));

const RandomLorem = ({ minP, maxP, minM, maxM }) =>
  Array(random(minP, maxP))
    .fill()
    .map(() => (
      <p>
        {Array(random(minM, maxM))
          .fill(LOREM)
          .join(' ')}
      </p>
    ));

const Page = ({ id, title }) => (
  <PageDiv>
    <Image id={id} />
    <h1>{title}</h1>
    <RandomLorem minP={4} maxP={8} minM={2} maxM={6} />
  </PageDiv>
);

export default Page;
