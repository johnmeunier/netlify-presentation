// Import React
import React from "react";
// Import Spectacle Core tags
import { Appear, Deck, Heading, Image, List, ListItem, S, Slide, Table, TableItem, TableRow } from "spectacle";

import Profile from "./profiles";
import Twitter from "./twitter";
import Note from "./notes";
// Import theme
import createTheme from "spectacle/lib/themes/default";
import "./style.css";

const images = {
  netlifyFull: require("../assets/netlify-full.svg"),
  domains: require("../assets/domains.svg"),
  forms: require("../assets/forms.svg"),
  identity: require("../assets/identity.svg"),
  splitTesting: require("../assets/splitTesting.svg"),
  pr: require("../assets/pr.svg"),
  auth: require("../assets/auth.svg"),
  notification: require("../assets/notification.svg"),
  toml: require("../assets/netlifytoml.png"),
  john: require("../assets/john.jpg"),
  jl: require("../assets/jl.jpg"),
  free: require("../assets/free.png"),
  pro: require("../assets/pro.png"),
  business: require("../assets/business.png"),
  jam: require("../assets/jam.png"),
  jamstackLogo: require("../assets/jamstackLogo.png"),
  lwFiles: require("../assets/lwFiles.png"),
  lwNetlifyConf: require("../assets/lwNetlifyConf.png"),
  lw1: require("../assets/lw1.png"),
  lw2: require("../assets/lw2.png"),
  sanFrancisco: require("../assets/sanFrancisco.jpg")
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#e74c3c",
    secondary: "#ecf0f1",
    tertiary: "#85144b",
    quaternary: "#85144b",
    dark: "#080F0F"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

const featureImageSize = 800;

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck transition={["slide"]} transitionDuration={500} theme={theme}>
        <Slide bgColor="tertiary" bgImage={images.sanFrancisco} bgDarken={0.65}>
          <Note presenter="john" notes={[]} />
          <Heading size={5} textColor="secondary">
            This is an awesome PR
          </Heading>
          <Twitter />
        </Slide>
        <Profile
          name="Johnathan MEUNIER"
          job="FullStack Engineer JS"
          website="Johnathan.fr"
          twitter="j7n__"
          github="johnmeunier"
          pic={images.john}
        />
        <Profile
          name="Jean-Lou PIERME"
          job="FullStack Software Engineer"
          website="jlou.fr"
          twitter="jloupiote"
          github="jlou"
          pic={images.jl}
        />
        <Slide bgColor="primary">
          <Note presenter="jl" notes={[]} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Existing Solutions
          </Heading>
        </Slide>
        <Slide bgColor="primary">
          <Note presenter="jl" notes={[]} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Deploying by hand
          </Heading>
          <Heading italic size={5} textColor="tertiary">
            Redundant and error prone
          </Heading>
          <List>
            <Appear>
              <ListItem>Build locally</ListItem>
            </Appear>
            <Appear>
              <ListItem>Deploy via ftp (or something other tool)</ListItem>
            </Appear>
            <Appear>
              <ListItem>Time consuming &amp; error-prone</ListItem>
            </Appear>
          </List>
        </Slide>

        <Slide bgColor="primary">
          <Note presenter="jl" notes={[]} />
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Github Pages
          </Heading>
          <Heading italic size={5} textColor="tertiary">
            Simple, but limited
          </Heading>
          <List>
            <Appear>
              <ListItem>
                <S type="bold">Requires</S> a Github repository
              </ListItem>
            </Appear>
            <Appear>
              <ListItem>Generated code must be checked in</ListItem>
            </Appear>
            <Appear>
              <ListItem>Single version online</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Note presenter="jl" notes={[]} />
          <Heading size={3} caps textColor="secondary">
            Continuous integration tools
          </Heading>
          <Heading italic size={5} textColor="tertiary">
            Travis, Azure pipelines, etc...
          </Heading>
          <List>
            <Appear>
              <ListItem>Can build and deploy automatically</ListItem>
            </Appear>
            <Appear>
              <ListItem>Requires an external hosting solution</ListItem>
            </Appear>
            <Appear>
              <ListItem>Can be complicated to setup</ListItem>
            </Appear>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Note presenter="john" notes={[]} />
          <Image src={images.netlifyFull} width={1000} />
        </Slide>
        <Slide bgColor="secondary">
          <Note presenter="jl" notes={["faire le site et push", "créer le site sur netlify"]} />
          <Heading size={1} textColor="primary">
            First Demo
          </Heading>
          <List textColor="dark">
            <ListItem>Creation of a new project</ListItem>
            <ListItem>Versionning of this new project on GitHub</ListItem>
            <ListItem>Creation of a site on Netlify</ListItem>
            <ListItem>Deployment</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Note presenter="john" notes={[]} />
          <Heading size={2} textColor="primary">
            Custom domains & DNS configuration
          </Heading>
          <Image src={images.domains} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Note presenter="jl" notes={["proposer aux participants d'aller sur chaptersplit.netlify.com"]} />
          <Heading size={2} textColor="primary">
            Split testing
          </Heading>
          <Image src={images.splitTesting} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Note presenter="jl" notes={[]} />
          <Heading size={2} textColor="primary">
            Pull request deployment
          </Heading>
          <Image src={images.pr} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Note presenter="john" notes={[]} />
          <Heading size={2} textColor="primary">
            Notification
          </Heading>
          <Image src={images.notification} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Note presenter="john" notes={[]} />
          <Heading size={2} textColor="primary">
            Forms
          </Heading>
          <Image src={images.forms} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Note presenter="john" notes={["gestion login interne", "oauth", "compte interne", "api netlify"]} />
          <Heading size={2} textColor="primary">
            Identity
          </Heading>
          <Image src={images.identity} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary">
          <Note presenter="john" notes={[]} />
          <Heading size={1} textColor="primary" caps>
            Second Demo
          </Heading>
          <List textColor="dark">
            <ListItem>Domain changing</ListItem>
            <ListItem>Split visit on two branches</ListItem>
            <ListItem>Demonstration of continuous integration</ListItem>
            <ListItem>Form storing</ListItem>
            <ListItem>Notification</ListItem>
          </List>
        </Slide>
        <Slide bgColor="primary">
          <Note presenter="jl" notes={[]} />
          <Heading size={1} fit textColor="secondary" caps>
            But also...
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Note presenter="jl" notes={[]} />
          <Heading size={1} fit textColor="primary" caps>
            Configuration as Code
          </Heading>
          <Image src={images.toml} width={featureImageSize} />
        </Slide>
        <Slide bgColor="#fff">
          <Note
            presenter="jl"
            notes={[
              "pas jam: razor, les CMS, le server side rendering",
              "Tout est prébuild => rapide",
              "Dans git",
              "CMS Headless"
            ]}
          />
          <Image src={images.jamstackLogo} />
          <Image src={images.jam} fit />
        </Slide>
        <Slide bgColor="#fff">
          <Note presenter="jl" notes={[]} />
          <Heading size={1} fit textColor="primary" caps>
            3 ways to publish content
          </Heading>
          <List textColor="dark" ordered type="A">
            <ListItem>Static in sources</ListItem>
            <ListItem>Static on build</ListItem>
            <ListItem>Dynamic with APIs</ListItem>
          </List>
        </Slide>
        <Slide bgColor="#fff">
          <Heading size={1} fill textColor="primary">
            Example
          </Heading>
          <Heading size={5} fill textColor="primary">
            Lille Web - Jekyll build
          </Heading>
          <Image src={images.lwFiles} />
        </Slide>
        <Slide bgColor="#fff">
          <Heading size={1} fill textColor="primary">
            Example
          </Heading>
          <Heading size={5} fill textColor="primary">
            Lille Web - Jekyll build
          </Heading>
          <Image src={images.lwNetlifyConf} />
        </Slide>
        <Slide bgColor="#fff">
          <Heading size={1} fill textColor="primary">
            Example
          </Heading>
          <Heading size={5} fill textColor="primary">
            Lille Web - Jekyll build
          </Heading>
          <Image src={images.lw1} />
        </Slide>
        <Slide bgColor="#fff">
          <Heading size={1} fill textColor="primary">
            Example
          </Heading>
          <Heading size={5} fill textColor="primary">
            Lille Web - Jekyll build
          </Heading>
          <Image src={images.lw2} />
        </Slide>
        <Slide bgColor="#fff">
          <Note presenter="john" notes={[]} />
          <Heading size={1} lineHeight={2} fill textColor="primary">
            Pricing
          </Heading>
          <Table textColor="dark">
            <TableRow>
              <TableItem>
                <Image src={images.free} />
              </TableItem>
              <TableItem>
                <Image src={images.pro} />
              </TableItem>
              <TableItem>
                <Image src={images.business} />
              </TableItem>
            </TableRow>
          </Table>
        </Slide>
        <Slide>
          <Note presenter="john" notes={[]} />
          <Heading textColor="secondary" fit>
            Why use Netlify:
          </Heading>
          <Appear>
            <Heading textAlign="left" size={3} lineHeight={3} textColor="secondary">
              &#10003; &nbsp; Automatic build
            </Heading>
          </Appear>
          <Appear>
            <Heading textAlign="left" size={4} lineHeight={1} textColor="secondary">
              &#10003; &nbsp;Automatic deployment
            </Heading>
          </Appear>
          <Appear>
            <Heading textAlign="left" size={3} lineHeight={3} textColor="secondary">
              &#10003; &nbsp;Previews
            </Heading>
          </Appear>
        </Slide>
        <Slide bgColor="tertiary" bgImage={images.sanFrancisco} bgDarken={0.65}>
          <Heading size={6} textColor="secondary">
            Simplify web deployments with Netlify
          </Heading>
          <Heading textColor="primary" fit>
            Thanks!
          </Heading>
          <Twitter />
        </Slide>
      </Deck>
    );
  }
}
