import {useRouter} from 'next/router';

const About = () => {
  const router = useRouter()
  const id = Number(router.query.id);
  return (
    <>
      <h1>메롱</h1>
      <p>Parameter id : {id}</p>
      <a href="/">pages/about.js</a>
    </>
  );
};

export default About;
