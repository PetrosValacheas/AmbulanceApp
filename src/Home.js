import React from 'react';
import { homeArticles } from './data';

/*Home Page Content*/
const Home = () => (
  <main>
    <h1>Health Tips</h1>
    <img
      id="home-splash"
      src={`..${process.env.PUBLIC_URL}/img/mental-health.png`}
      alt="How Ambulance Consulting can help"
    />
    {homeArticles.map(article => (
      <Article key={article.title} {...article} />
    ))}
  </main>
);

const Article = ({ title, content, img }) => (
  <article>
    <img src={`..${process.env.PUBLIC_URL}/img/${img.name}`} alt={img.alt} />
    <div>
      <h2>{title}</h2>
      <p>{content}</p>
    </div>
  </article>
);

export default Home;
