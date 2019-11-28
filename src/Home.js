import React from 'react';
import { homeArticles } from './data';

/*Home Page Content*/
const Home = () => (
  <main>
    <h1>YourHealth Ltd.</h1>
    <img
      id="home-splash"
      src={`..${process.env.PUBLIC_URL}/img/mental-health.png`}
      alt="How YourHealth can help"
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
