"use client";

import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";

function Page() {
  return (
    <StyledWrapper>
      <h1>GameHub</h1>
      <StyledGameList>
        <li>
          <Link href="/games/tiktaktoe">
            <Image
              src="/tiktaktoe.png"
              width={200}
              height={200}
              alt="picture of tiktaktoe"
            />
          </Link>
        </li>
        <li>
          <Link href="/games/schach">
            <Image
              src="/Check.png"
              width={200}
              height={200}
              alt="picture of Check"
            />
          </Link>
        </li>
      </StyledGameList>
    </StyledWrapper>
  );
}

const StyledWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: red;
    font-size: 5rem;
    font-style: italic;
  }
`;
const StyledGameList = styled.ul`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 1fr);
  grid-column-gap: 50px;
  grid-row-gap: 50px;

  a {
    text-decoration: none;
    color: white;
  }

  li {
    border: 4px solid black;
    padding: 1rem;
    border-radius: 25px;

    img {
      border-radius: 15px;
    }

    :hover {
      transform: scale(1.1);
    }
  }
`;

export default Page;
