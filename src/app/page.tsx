"use client";

import Link from "next/link";
import styled from "styled-components";
import Image from "next/image";
import PageNavbar from "@games/components/navbar";

function Page() {
  return (
    <>
      {/* <PageNavbar /> */}
      <StyledWrapper>
        <StyledGameList>
          <li>
            <h2>TikTakToe</h2>
            <Link href="/games/tiktaktoe">
              <Image
                src="/tiktaktoe.jpg"
                width={200}
                height={200}
                alt="picture of tiktaktoe"
              />
            </Link>
          </li>
          <li>
            <h2>Schach</h2>
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
    </>
  );
}

const StyledWrapper = styled.main`
  display: flex;
  align-items: center;
  flex-direction: column;

  h1 {
    color: lightgreen;
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
  margin-top: 50px;

  a {
    text-decoration: none;
  }

  li {
    display: flex;
    align-items: center;
    flex-direction: column;
    color: white;

    :hover {
      transform: scale(1.1);
    }
  }

  img {
    border-radius: 15px;
    border: 4px solid white;
    padding: 1rem;
    border-radius: 25px;
  }
`;

export default Page;
