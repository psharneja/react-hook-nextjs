import Link from 'next/link';
import  Layout from "../components/Layout";

const About = () => (
  <Layout title="Next About" footer="na na na na batman!">

    <h2>about from next js</h2>
    <Link href="/">
      <a style={{color:'maroon'}}>Index page</a>
    </Link>
    <p>wevwvv wv3vb</p>
    <style jsx>{
    `
    p{color:green; font-size:20px}`
    }</style>
    </Layout>
);

export default About;
