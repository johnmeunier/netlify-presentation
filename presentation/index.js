// Import React
import React from "react";
// Import Spectacle Core tags
import {
  Appear,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  S,
  Slide,
  Table,
  TableHeaderItem,
  TableItem,
  TableRow,
  Link,
  Layout,
  Fit,
  Fill,
  Text
} from "spectacle";

import Profile from "./profiles";
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
  jl: require("../assets/jl.jpg")
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#e74c3c",
    secondary: "#ecf0f1",
    tertiary: "#85144b",
    quaternary: "#001f3f",
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
      <Deck
        transition={["slide"]}
        transitionDuration={500}
        theme={theme}
        progress="bar"
      >
        <Slide bgColor="tertiary">
          <Heading size={5} textColor="secondary">
            Simplify web deployments with
          </Heading>
          <Heading textColor="primary" lineHeight={1} fit>
            Netlify
          </Heading>
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
        <Slide transition={["zoom"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Existing Solutions
          </Heading>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={1} fit caps lineHeight={1} textColor="secondary">
            Deploying by hand
          </Heading>
          <List>
            <ListItem>Build locally</ListItem>
            <ListItem>Deploy via ftp (or something other tool)</ListItem>
            <ListItem>Time consuming &amp; error-prone</ListItem>
          </List>
        </Slide>

        <Slide transition={["slide"]} bgColor="primary">
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
        <Slide transition={["slide"]} bgColor="primary">
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
        <Slide bgColor="primary">
          <Heading size={1} fit textColor="secondary" caps>
            But also...
          </Heading>
        </Slide>
        <Slide bgColor="secondary">
          <Heading size={1} fit textColor="primary" caps>
            Configuration as Code
          </Heading>
          <Image src={images.toml} width={featureImageSize} />
        </Slide>
        <Slide bgColor="secondary" transition={["zoom", "slide"]}>
          <Heading size={1} fill textColor="primary">
            Pricing
          </Heading>
          <Heading size={5} fill>
            Free
          </Heading>
          <List fit textColor="dark">
            <ListItem>1 user</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" transition={["zoom", "slide"]}>
          <Heading size={1} fill textColor="primary">
            Pricing
          </Heading>
          <Heading size={5} fill>
            45$/mo
          </Heading>
          <List fit textColor="dark">
            <ListItem>5 users</ListItem>
            <ListItem>Owner / Collaborator roles</ListItem>
            <ListItem fit>Password Protection</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" transition={["zoom", "slide"]}>
          <Heading size={1} fill textColor="primary">
            Pricing
          </Heading>

          <Heading size={5} fill>
            290$/mo
          </Heading>
          <List fit textColor="dark">
            <ListItem>10 user</ListItem>
            <ListItem>Multiple roles</ListItem>
            <ListItem>Role-based access control</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary" transition={["zoom", "slide"]}>
          <Heading size={1} lineHeight={2} fill textColor="primary">
            Pricing
          </Heading>
          <Table textColor="dark">
            <TableRow>
              <TableHeaderItem>Free</TableHeaderItem>
              <TableHeaderItem textColor="dark">45$/mo</TableHeaderItem>
              <TableHeaderItem textColor="dark">290$/mo</TableHeaderItem>
            </TableRow>
            <TableRow>
              <TableItem>1 User</TableItem>
              <TableItem>5 Users</TableItem>
              <TableItem>10 Users</TableItem>
            </TableRow>
            <TableRow>
              <TableItem />

              <TableItem>Owner / collaborator roles</TableItem>
              <TableItem>Multiple roles</TableItem>
            </TableRow>
            <TableRow>
              <TableItem />
              <TableItem>Password protection</TableItem>
              <TableItem>Role-based access control</TableItem>
            </TableRow>
          </Table>
        </Slide>
        {/* <Slide className="retro">
          <Layout>
            <Appear fid="1">
              <Fill className="retro__fill">
                <Heading
                  className="retro__title"
                  size={4}
                  textColor="secondary"
                  margin={10}
                >
                  Toolkit V1
                </Heading>
                <div className="retro__img-container" />
                <Heading size={6} textColor="secondary" margin={20}>
                  Jquery / CSS / Bootstrap / AngularJs
                </Heading>
                <List className="retro__list">
                  <ListItem>Gain de temps sur les projets</ListItem>
                  <ListItem>
                    Homogénéisation graphiques et fonctionnelle
                  </ListItem>
                </List>
              </Fill>
            </Appear>
            <Appear fid="2">
              <Fill className="retro__fill">
                <Heading
                  className="retro__title"
                  size={4}
                  textColor="secondary"
                  margin={10}
                >
                  Toolkit V2
                </Heading>
                <div className="retro__img-container" />
                <Heading size={6} textColor="secondary" margin={10}>
                  Angularjs / SASS / Bootstrap
                </Heading>
                <List className="retro__list">
                  <ListItem>Fork de AngularStrap</ListItem>
                  <ListItem>Prémisses d'un design system</ListItem>
                  <ListItem>Form Generator</ListItem>
                </List>
              </Fill>
            </Appear>
            <Appear fid="3">
              <Fill className="retro__fill retro__fill--actual">
                <Heading
                  className="retro__title"
                  size={4}
                  textColor="secondary"
                  margin={10}
                >
                  Toolkit V3
                </Heading>
                <div className="retro__fill-part">
                  <Heading size={6} textColor="secondary" margin={10}>
                    React / Angular / Vuejs
                  </Heading>
                </div>
                <div className="retro__fill-part">
                  <Heading size={6} textColor="secondary" margin={10}>
                    HTML / SASS / BEM
                  </Heading>
                </div>
                <List className="retro__list">
                  <ListItem>Framework JS Agnostique</ListItem>
                  <ListItem>Composants</ListItem>
                </List>
              </Fill>
            </Appear>
          </Layout>
        </Slide> */}
        <Slide>
          <Heading textColor="secondary" fit>
            Why use Netlify:
          </Heading>
          <Appear>
            <Heading
              textAlign="left"
              size={3}
              lineHeight={3}
              textColor="secondary"
            >
              &#10003; &nbsp; Automatic build
            </Heading>
          </Appear>
          <Appear>
            <Heading
              textAlign="left"
              size={4}
              lineHeight={1}
              textColor="secondary"
            >
              &#10003; &nbsp;Automatic deployment
            </Heading>
          </Appear>
          <Appear>
            <Heading
              textAlign="left"
              size={3}
              lineHeight={3}
              textColor="secondary"
            >
              &#10003; &nbsp;Previews
            </Heading>
          </Appear>
        </Slide>
        <Slide>
          <Heading textColor="secondary" fit>
            Thanks!
          </Heading>
        </Slide>
      </Deck>
    );
  }
}
