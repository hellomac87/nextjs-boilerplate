import Link from "next/link";
import styled from "styled-components";
import Layout from "@components/Layout";
import Github from '@svg/github.svg';


const IndexPage = () => (
  <Layout title="Home | Next.js + TypeScript Example">
    <h1>Hello Next.js 👋</h1>
    <Title>My page</Title>
    <Github/>
    <p>
      <Link href="/about">
        <a>About</a>
      </Link>
    </p>
  </Layout>
);

const Title = styled.h1`
  font-size: 50px;
  color: powderblue;
`;

export default IndexPage;
