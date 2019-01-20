import React from 'react';
import { Heading, Layout, Fill, Fit, Link } from 'spectacle';

const Twitter = () => (
  <Layout>
    <Fill>
      <Heading textColor="secondary" size={6}>
        Johnathan
        <br />
        MEUNIER
      </Heading>
      <Link head="http://twitter.com/J7N__">@J7N__</Link>
    </Fill>
    <Fit>
      <Heading textColor="primary" size={3}>
        &
      </Heading>
    </Fit>
    <Fill>
      <Heading textColor="secondary" size={6}>
        Jean-Lou
        <br />
        PIERMÉ
      </Heading>
      <Link head="http://twitter.com/jloupiote">@jloupiote</Link>
    </Fill>
  </Layout>
);

export default Twitter;
