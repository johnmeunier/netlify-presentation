import React from 'react';
import { Heading, ListItem, List, Slide, Image, Link } from 'spectacle';

const images = {
  github: require('../../assets/github.svg'),
  web: require('../../assets/web.svg'),
  twitter: require('../../assets/twitter.svg'),
  space: require('../../assets/space.jpg')
};

const Profile = ({ name, job, website, github, twitter, pic }) => (
  <Slide bgColor="tertiary" bgImage={images.space} bgDarken={0.4} className="bgDotted">
    <Heading textColor="secondary" size={3}>
      {name}
    </Heading>
    <Heading textColor="primary" size={5}>
      {job}
    </Heading>
    <Image src={pic} className="avatar" />
    <List textAlign="left" className="presentation__list">
      <ListItem>
        <Link href={`http://${website}`}>
          <Image src={images.web} />
          {website}
        </Link>
      </ListItem>
      <ListItem>
        <Link href={`http://twitter.com/${twitter}`}>
          <Image src={images.twitter} />@{twitter}
        </Link>
      </ListItem>
      <ListItem>
        <Link href={`http://github.com/${github}`}>
          <Image src={images.github} />
          {github}
        </Link>
      </ListItem>
    </List>
  </Slide>
);

export default Profile;
