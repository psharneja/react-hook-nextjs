import Layout from "../components/Layout";
import Link from "next/link";
import Head from 'next/head';

const myStyle = {
    color:'green'
}
const Index = () => (
  <Layout title="Next Home" footer={`Copyright ${new Date().getFullYear()}`}>
  <Head>
  <title>Home Page</title>
  <meta name="description" content="My SEO React app with nextjs" />
  <meta name="keywords" content="next react seo" />
  <meta name="author" content="simar" />
  <link rel="stylesheet" href="/static/styles.css" />
  <link rel="stylesheet" href="https://unpkg.com/bootstrap-material-design@4.1.1/dist/css/bootstrap-material-design.min.css" integrity="sha384-wXznGJNEXNG1NFsbm0ugrLFMQPWswR3lds2VeinahP8N0zJw9VWSopbjv2x7WCvX" crossorigin="anonymous" />
  </Head>
    <h2>hello from next js</h2>
    <Link href="/about">
      <a style={myStyle}>about page</a>
    </Link>
  </Layout>
);

export default Index;
