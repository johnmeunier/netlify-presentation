// Import React
import React from "react";
// Import Spectacle Core tags
import {
  BlockQuote,
  Cite,
  Deck,
  Heading,
  Image,
  List,
  ListItem,
  Notes,
  Quote,
  Slide,
  Text,
  S
} from "spectacle";
// Import theme
import createTheme from "spectacle/lib/themes/default";

const images = {
  formidagon: require("../assets/formidable-logo.svg"),
  goodWork: require("../assets/good-work.gif")
};

// Require CSS
require("normalize.css");

const theme = createTheme(
  {
    primary: "#e74c3c",
    secondary: "#ecf0f1",
    tertiary: "#85144b",
    quaternary: "#CECECE"
  },
  {
    primary: "Montserrat",
    secondary: "Helvetica"
  }
);

export default class Presentation extends React.Component {
  render() {
    return (
      <Deck
        transition={["zoom", "slide"]}
        transitionDuration={500}
        theme={theme}
      >
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
          <Heading italic={true} size={5} textColor="tertiary">Simple, but limited</Heading>
          <List>
            <ListItem><S type="bold">Requires</S> a Github repository</ListItem>
            <ListItem>Generated code must be checked in</ListItem>
            <ListItem>Single version online</ListItem>
          </List>
        </Slide>
        <Slide transition={["slide"]} bgColor="primary">
          <Heading size={3} caps textColor="secondary">
            Continuous integration tools
          </Heading>
          <Heading italic={true} size={5} textColor="tertiary">
            Travis, Azure pipelines, etc...
          </Heading>
          <List>
            <ListItem>Can build and deploy automatically</ListItem>
            <ListItem>Requires an external hosting solution</ListItem>
            <ListItem>Can be complicated to setup</ListItem>
          </List>
        </Slide>
        <Slide bgColor="secondary">
          <Image src={images.formidagon} width={800} />
        </Slide>
        <Slide transition={["fade"]} bgColor="tertiary">
          <Heading size={6} textColor="primary" caps>
            Typography
          </Heading>
          <Heading size={1} textColor="secondary">
            Heading 1
          </Heading>
          <Heading size={2} textColor="secondary">
            Heading 2
          </Heading>
          <Heading size={3} textColor="secondary">
            Heading 3
          </Heading>
          <Heading size={4} textColor="secondary">
            Heading 4
          </Heading>
          <Heading size={5} textColor="secondary">
            Heading 5
          </Heading>
          <Text size={6} textColor="secondary">
            Standard text
          </Text>
        </Slide>
        <Slide transition={["fade"]} bgColor="primary" textColor="tertiary">
          <Heading size={6} textColor="secondary" caps>
            Standard List
          </Heading>
          <List>
            <ListItem>Item 1</ListItem>
            <ListItem>Item 2</ListItem>
            <ListItem>Item 3</ListItem>
            <ListItem>Item 4</ListItem>
          </List>
        </Slide>
        <Slide transition={["fade"]} bgColor="secondary" textColor="primary">
          <BlockQuote>
            <Quote>Example Quote</Quote>
            <Cite margin="10px 0 0 30px">Author</Cite>
          </BlockQuote>
        </Slide>
        <Slide>
          <Image src={images.goodWork} width={500} />
          <Notes>gifs work too</Notes>
        </Slide>
      </Deck>
    );
  }
}
