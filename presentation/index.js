// Import React
import React from 'react';
// Import Spectacle Core tags
import { BlockQuote, Cite, Deck, Heading, Image, List, ListItem, Notes, Quote, Slide, Text, S } from 'spectacle';
// Import theme
import createTheme from 'spectacle/lib/themes/default';
import heading from 'spectacle/lib/components/heading';

const images = {
  netlifyFull: require('../assets/netlify-full.svg'),
  domains: require('../assets/domains.svg'),
  forms: require('../assets/forms.svg'),
  identity: require('../assets/identity.svg'),
  splitTesting: require('../assets/splitTesting.svg'),
  pr: require('../assets/pr.svg'),
  auth: require('../assets/auth.svg'),
  notification: require('../assets/notification.svg')
};

// Require CSS
require('normalize.css');

const theme = createTheme(
  {
    primary: '#e74c3c',
    secondary: '#ecf0f1',
    tertiary: '#85144b',
    quaternary: '#CECECE',
    dark: '#080F0F'
  },
  {
    primary: 'Montserrat',
    secondary: 'Helvetica'
  }
);

const featureImageSize = 800;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={['slide']} transitionDuration={500} theme={theme}>
        <Slide transition={['zoom']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Existing Solutions
          </Heading>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Deploying by hand
          </Heading>
          <List>
            <ListItem>Build locally</ListItem>
            <ListItem>Deploy via ftp (or something other tool)</ListItem>
            <ListItem>Time consuming &amp; error-prone</ListItem>
          </List>
        </Slide>

        <Slide transition={['slide']} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Github Pages
          </Heading>
          <Heading italic size={5} textColor="tertiary">
            Simple, but limited
          </Heading>
          <List>
            <ListItem>
              <S type="bold">Requires</S> a Github repository
            </ListItem>
            <ListItem>Generated code must be checked in</ListItem>
            <ListItem>Single version online</ListItem>
          </List>
        </Slide>
        <Slide transition={['slide']} bgColor="primary">
          <Heading size={3} caps textColor="secondary">
            Continuous integration tools
          </Heading>
          <Heading italic size={5} textColor="tertiary">
            Travis, Azure pipelines, etc...
          </Heading>
          <List>
            <ListItem>Can build and deploy automatically</ListItem>
            <ListItem>Requires an external hosting solution</ListItem>
            <ListItem>Can be complicated to setup</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.netlifyFull} width={1000} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} textColor="primary">
            Demo 1
          </Heading>
          <List textColor="dark">
            <ListItem>Creation of a new project</ListItem>
            <ListItem>Versionning of this new project on GitHub</ListItem>
            <ListItem>Creation of a site on Netlify</ListItem>
            <ListItem>Deployment</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Custom domains & DNS configuration
          </Heading>
          <Image src={images.domains} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Split testing
          </Heading>
          <Image src={images.splitTesting} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Pull request deployment
          </Heading>
          <Image src={images.pr} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Notification
          </Heading>
          <Image src={images.notification} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Forms
          </Heading>
          <Image src={images.forms} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Identity
          </Heading>
          <Image src={images.identity} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={2} textColor="primary">
            Auth
          </Heading>
          <Image src={images.auth} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} textColor="primary" caps>
            Demo 2
          </Heading>
          <List textColor="dark">
            <ListItem>Domain changing</ListItem>
            <ListItem>Split visit on two branches</ListItem>
            <ListItem>Demonstration of continuous integration</ListItem>
            <ListItem>Form storing</ListItem>
            <ListItem>Notification</ListItem>
          </List>
        </Slide>
      </Deck>
    );
  }
}
