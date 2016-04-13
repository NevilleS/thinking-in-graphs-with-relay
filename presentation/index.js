// Import React
import React from "react";

// Import Spectacle Core tags
import {
  Appear,
  BlockQuote,
  Cite,
  CodePane,
  Deck,
  Fit,
  Fill,
  Heading,
  Image,
  Layout,
  Link,
  ListItem,
  List,
  Markdown,
  Quote,
  S,
  Slide,
  Spectacle,
  Text
} from "spectacle";

// Import image preloader util
import preloader from "spectacle/lib/utils/preloader";

// Import theme
import createTheme from "spectacle/lib/themes/default";

// Require CSS
require("normalize.css");
require("spectacle/lib/themes/default/index.css");

// Import speaker notes
import notes from "./notes.js"

const images = {
  relay: require("../assets/relay_orange.svg"),
  relayWhite: require("../assets/relay_white.svg"),
  pathgather: require("../assets/pathgather_orange.png"),
  pathgatherWhite: require("../assets/pathgather_white.png"),
  neville: require("../assets/neville.png"),
  cory: require("../assets/cory.jpg"),
  miriam: require("../assets/miriam.jpg"),
  eric: require("../assets/eric.png"),
  jamie: require("../assets/jamie.png"),
  bridgit: require("../assets/bridgit.png"),
  avvasi: require("../assets/avvasi.png"),
  manhattanJS: require("../assets/manhattanjs.png"),
  smashgatherIntro: require("../assets/smashgather_intro.gif"),
  smashgatherGames: require("../assets/smashgather_games.png"),
  smashgatherUsers: require("../assets/smashgather_users.png"),
  smashgatherUser: require("../assets/smashgather_user.png"),
  smashgatherCharacter: require("../assets/smashgather_character.png"),
  ness: require("../assets/ness.png"),
  dk: require("../assets/dk.png"),
  kirby: require("../assets/kirby.png"),
  graph: require("../assets/graph.jpg"),
  judgeJudy: require("../assets/judge_judy.jpg"),
  react: require("../assets/react.png"),
  relaySmall: require("../assets/relay.png"),
  relayGraphql: require("../assets/relay_graphql.png"),
  graphql: require("../assets/graphql.png"),
  twitter: require("../assets/twitter.png"),
  github: require("../assets/github.png"),
  reactiflux: require("../assets/reactiflux.png"),
};

preloader(images);

const theme = createTheme({
  primary: "#f67b45",
  gray: "rgba(0, 0, 0, 0.4)",
});

// Styles
const avatar = {
  borderRadius: "100%",
  display: "inline-block",
  margin: "0",
}

const flexRow = {
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
}

const flexColumn = Object.assign({}, flexRow, {
  flexDirection: "column"
})

const speakerApp = {
  margin: "0 auto",
  width: "70%",
  background: "white",
  padding: "1em 2em",
  borderRadius: "5px",
}

const speakerHeader = Object.assign({}, flexRow, {
  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
  boxShadow: "0px 5px 10px -5px rgba(0, 0, 0, 0.4)",
  justifyContent: "center",
  marginBottom: "1em",
  paddingBottom: "0.5em",
})

const speakerRow = Object.assign({}, flexRow, {
  margin: "0.4em",
  padding: "10px",
  borderBottom: "1px solid rgba(0, 0, 0, 0.2)",
})

const speakerDetails = Object.assign({}, flexRow, {
  justifyContent: "space-between",
  alignItems: "flex-start",
})

const detailsColumn = Object.assign({}, flexColumn, {
  width: "45%",
})

const detailsImage = {
  maxHeight: "3em",
  maxWidth: "100%",
}

const flexRowWrap = Object.assign({}, flexRow, {
  flexWrap: "wrap",
  justifyContent: "center",
})

const speakerCombined = {
  width: "100%",
  display: "flex",
  flexDirection: "row",
  justifyContent: "center",
  alignItems: "center",
  margin: "0.5em",
  borderRadius: "5px",
  boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.2)",
}

const point = {
  display: "inline-block",
  marginLeft: "5px",
  width: "10px",
  height: "10px",
  background: "#f67b45",
  borderRadius: "100%",
}

const smashgatherImage = {
  height: "20%",
  borderRadius: "5px",
}

const relayNode = {
  margin: "10px",
  width: "120px",
  height: "120px",
  borderRadius: "5px",
  boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.2)",
}

const summaryInfo = {
  padding: "1em",
  display: "flex",
  flexWrap: "wrap",
  justifyContent: "center",
}

const summaryItem = Object.assign({}, flexColumn, {
  background: "white",
  justifyContent: "space-between",
  alignItems: "center",
  margin: "0.5em",
  padding: "0.5em",
  borderRadius: "5px",
  boxShadow: "5px 5px 10px 5px rgba(0, 0, 0, 0.2)",
})

const summaryImage = {
  height: "2em",
  margin: 0,
}


// "Speaker App" Data
const speakers = [
  { id: "0", name: "Neville Samuell", avatar: images.neville },
  { id: "1", name: "Cory Forsyth", avatar: images.cory },
  { id: "2", name: "Miriam Nadler", avatar: images.miriam },
]
const companies = [
  { id: "0", name: "Pathgather", image: images.pathgather, speakerId: "0" },
  { id: "1", name: "Bridgit", image: images.bridgit, speakerId: "0" },
  { id: "2", name: "Avvasi", image: images.avvasi, speakerId: "0" },
  { id: "3", name: "201 Created", image: images.avvasi, speakerId: "1" },
  { id: "4", name: "Vox Product", image: images.avvasi, speakerId: "2" },
]
const events = [
  { id: "0", name: "ManhattanJS", image: images.manhattanJS, first: "0", second: "1", third: "2" },
]
const speakersCombined = [
  { id: "0", speaker: speakers[0], companies: companies.slice(0, 3), events: events.slice(0, 1) },
  { id: "1", speaker: speakers[1], companies: companies.slice(3, 4), events: events.slice(0, 1) },
  { id: "2", speaker: speakers[2], companies: companies.slice(4, 5), events: events.slice(0, 1) },
]

// Smashgather Data
const users = [
  { id: "0", name: "Neville", avatar: images.neville, characterId: "0" },
  { id: "1", name: "Eric", avatar: images.eric, characterId: "1" },
  { id: "2", name: "Jamie", avatar: images.jamie, characterId: "2" },
]
const characters = [
  { id: "0", name: "Ness", image: images.ness },
  { id: "1", name: "DK", image: images.dk },
  { id: "2", name: "Kirby", image: images.kirby },
]
const games = [
  { id: "0", createdAt: "...", userId: "1", characterId: "1" },
  { id: "1", createdAt: "...", userId: "0", characterId: "0" },
  { id: "2", createdAt: "...", userId: "0", characterId: "0" },
  { id: "3", createdAt: "...", userId: "1", characterId: "1" },
  { id: "4", createdAt: "...", userId: "2", characterId: "2" },
]
const gamesCombined = [
  { id: "0", createdAt: "...", user: users[1], character: characters[1] },
  { id: "1", createdAt: "...", user: users[0], character: characters[0] },
  { id: "2", createdAt: "...", user: users[0], character: characters[0] },
  { id: "3", createdAt: "...", user: users[1], character: characters[1] },
  { id: "4", createdAt: "...", user: users[2], character: characters[2] },
]

export default class Presentation extends React.Component {
  render() {
    return (
      <Spectacle theme={ theme }>
        <Deck transition={ ["slide"] } progress="none" transitionDuration={ 500 }>
          <Slide transition={ ["fade"] } bgImage={ images.relayWhite } bgColor="primary" notes={ notes.title }>
            <Heading size={ 1 } caps>
              Thinking In Graphs With Relay
            </Heading>
            <Heading size={ 5 } caps>
              Neville Samuell<br/>
              Lead Engineer @
              <Image src={ images.pathgatherWhite } height="1.4em" margin="0 0 -0.5em 0.2em" />
            </Heading>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="white" notes={ notes.speaker }>
            <Heading size={ 1 } fit caps textColor="primary">
              Let's Talk About A Speaker App
            </Heading>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="primary" notes={ notes.speakerList }>
            <Heading size={ 2 } textColor="white" caps>Recent Speakers</Heading>
            <div style={ speakerApp }>
              {
                speakers.map((speaker) =>
                  <div key={ speaker.id } style={ speakerRow }>
                    <Image height="3em" src={ speaker.avatar } style={ avatar }/>
                    <Text margin="0 0 0 0.5em">{ speaker.name }</Text>
                  </div>
                )
              }
            </div>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="primary" notes={ notes.speakerDetail }>
            <Heading size={ 2 } textColor="white" caps>Speaker Detail</Heading>
            <div style={ speakerApp }>
              <div style={ speakerHeader }>
                <Image height="3em" src={ speakers[0].avatar } style={ avatar }/>
                <Text margin="0 0 0 0.5em">{ speakers[0].name }</Text>
              </div>
              <div style={ speakerDetails }>
                <div style={ detailsColumn }>
                  <Text margin="0 0 0.5em 0" textColor="gray">Companies</Text>
                  {
                    companies.slice(0,3).map((company) =>
                      <Image key={ company.id } style={ detailsImage } src={ company.image } />
                    )
                  }
                </div>
                <div style={ detailsColumn }>
                  <Text margin="0 0 0.5em 0" textColor="gray">Events</Text>
                  {
                    events.slice(0,2).map((event) =>
                      <Image key={ event.id } style={ detailsImage } src={ event.image } />
                    )
                  }
                </div>
              </div>
            </div>
          </Slide>
          <Slide transition={ ["fade"] } bgColor="white" notes={ notes.speakerData }>
            <Heading size={ 2 } textColor="primary" fit caps>Speaker App Data Model</Heading>
            <SpeakerDataModel />
          </Slide>
          <Slide transition={ ["fade"] } bgColor="white" notes={ notes.speakerRest }>
            <Heading size={ 2 } textColor="primary" caps>/speakers/0</Heading>
            <Heading size={ 2 } textColor="primary" caps>/speakers/0/companies</Heading>
            <Heading size={ 2 } textColor="primary" caps>/companies/0</Heading>
            <Heading size={ 2 } textColor="primary" caps>/companies/1</Heading>
            <Heading size={ 2 } textColor="primary" caps>/companies/2</Heading>
            <Heading size={ 2 } textColor="primary" caps>/speakers/0/events</Heading>
            <Heading size={ 2 } textColor="primary" caps>/events/0</Heading>
          </Slide>
          <Slide transition={ ["fade"] } bgColor="white" notes={ notes.speakerActualData }>
            <Heading size={ 2 } textColor="primary" fit caps>Speaker App Data Model</Heading>
            <SpeakerCombinedDataModel />
          </Slide>
          <Slide transition={ ["slide"] } bgImage={ images.smashgatherIntro } bgDarken={0.5} notes={ notes.smashgather }>
            <Heading size={ 1 } fit caps textColor="white">
              Let's Talk About Smashgather
            </Heading>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="primary" notes={ notes.smashgatherList }>
            <Heading size={ 2 } textColor="white" caps>Recent Games</Heading>
            <Image src={ images.smashgatherGames } style={ smashgatherImage } />
          </Slide>
          <Slide transition={ ["slide"] } bgColor="primary" notes={ notes.smashgatherDetail }>
            <Heading size={ 2 } textColor="white" caps>User Details</Heading>
            <Image src={ images.smashgatherUsers } />
          </Slide>
          <Slide transition={ ["fade"] } bgColor="white" notes={ notes.smashgatherData }>
            <Heading size={ 2 } textColor="primary" fit caps>Smashgather Data Model</Heading>
            <SmashgatherDataModel />
          </Slide>
          <Slide transition={ ["slide"] } bgColor="primary" notes={ notes.table }>
            <Heading size={ 2 } textColor="white" fit caps>Tables are efficient...</Heading>
            <Heading size={ 2 } textColor="white" fit caps>...but our UI isn't a spreadsheet</Heading>
          </Slide>
          <Slide transition={ ["fade"] } bgColor="white" notes={ notes.newSmashgatherData }>
            <Heading size={ 2 } textColor="primary" fit caps>Smashgather Data Model</Heading>
            <SmashgatherRelayModel />
          </Slide>
          <Slide transition={ ["fade"] } bgColor="white" bgImage={ images.relay } notes={ notes.introRelay }>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="black" notes={ notes.aside }>
            <Heading size={ 2 } textColor="white" caps>(Aside)</Heading>
            <Heading size={ 2 } textColor="white" caps>You'll need:</Heading>
            <div style={ Object.assign({}, flexRow, { justifyContent: "center" }) }>
              <div>
                <Image height="300" src={ images.react } />
                <Text textColor="white">React App</Text>
              </div>
              <div style={{ position: "relative" }}>
                <Image height="300" src={ images.relaySmall } />
                <Text textColor="white" fit>"Relay-compliant" schema</Text>
              </div>
              <div>
                <Image height="300" src={ images.graphql } />
                <Text textColor="white">GraphQL Server</Text>
              </div>
            </div>
          </Slide>
          <Slide transition={ ["fade"] } bgColor="white" bgImage={ images.relay } notes={ notes.backToRelay }>
          </Slide>
          <Slide transition={ ["fade"] } bgImage={ images.relayWhite } notes={ notes.relayAssumes }>
            <Heading size={ 2 } textColor="white" fit caps>Relay assumes</Heading>
            <Heading size={ 2 } textColor="white" fit caps>your data is a graph</Heading>
          </Slide>
          <Slide transition={ ["fade"] } bgImage={ images.graph } bgDarken="0.5" notes={ notes.oneOfThese }>
            <Heading size={ 2 } textColor="white">(one of these)</Heading>
          </Slide>
          <Slide transition={ ["slide"] } notes={ notes.introNodes }>
            <Heading size={ 2 } textColor="white" fit caps>Graphs have Nodes</Heading>
          </Slide>
          <Slide transition={ ["slide"] } notes={ notes.nodesStoreData }>
            <Heading size={ 2 } textColor="white" fit caps>Nodes store data</Heading>
            <CodePane
              textSize="24"
              lang="jsx"
              source={ require("raw!../assets/nodesStoreData.example") }
              margin="20px auto"
            />
          </Slide>
          <Slide transition={ ["slide"] } notes={ notes.nodesLinkOthers }>
            <Heading size={ 2 } textColor="white" fit caps>Nodes link to each other</Heading>
            <CodePane
              textSize="24"
              lang="jsx"
              source={ require("raw!../assets/nodesLinkOthers.example") }
              margin="20px auto"
            />
          </Slide>
          <Slide transition={ ["slide"] } notes={ notes.nodesHaveIDs }>
            <Heading size={ 2 } textColor="white" fit caps>Nodes have global IDs</Heading>
            <Heading size={ 2 } textColor="white" fit caps>and can be fetched directly</Heading>
            <div style={ flexRow}>
              <CodePane
                textSize="24"
                lang="jsx"
                source={ require("raw!../assets/nodesHaveIDs_request.example") }
                style={{ minWidth: "53%" }}
              />
              <CodePane
                textSize="24"
                lang="jsx"
                source={ require("raw!../assets/nodesHaveIDs_response.example") }
                style={{ minWidth: "47%" }}
              />
            </div>
          </Slide>
          <Slide transition={ ["slide"] } notes={ notes.nodesNeverChange }>
            <Heading size={ 2 } textColor="white" fit caps>Nodes never change</Heading>
            <div style={ flexRow}>
              <CodePane
                textSize="24"
                lang="jsx"
                source={ require("raw!../assets/nodesLinkOthers.example") }
                style={{ minWidth: "50%" }}
              />
              <CodePane
                textSize="24"
                lang="jsx"
                source={ require("raw!../assets/character_unchanged.example") }
                style={{ minWidth: "50%" }}
              />
            </div>
          </Slide>
          <Slide transition={ ["slide"] } notes={ notes.unlessTheyDo }>
            <Heading size={ 2 } textColor="white" fit caps>...unless they do</Heading>
            <Heading size={ 2 } textColor="white" fit caps>(via an explicit mutation or query)</Heading>
          </Slide>
          <Slide transition={ ["fade"] } bgColor="primary" bgImage={ images.relayWhite } notes={ notes.nodesSummary }>
            <Heading size={ 2 } textColor="white" fit caps>Relay assumes that your nodes:</Heading>
            <List textColor="white">
              <ListItem textSize="60">store data</ListItem>
              <ListItem textSize="60">link to each other</ListItem>
              <ListItem textSize="60">have global IDs</ListItem>
              <ListItem textSize="60">never change</ListItem>
            </List>
          </Slide>
          <Slide transition={ ["fade"] } bgImage={ images.judgeJudy } notes={ notes.theRules }>
            <Heading size={ 2 } textColor="white" fit caps>Those are the rules</Heading>
          </Slide>
          <Slide transition={ ["fade"] } bgImage={ images.relayWhite } bgColor="primary" notes={ notes.relayPatterns }>
            <Heading size={ 2 } textColor="white" fit caps>From this model, patterns emerge:</Heading>
            <div style={ flexRow }>
              <List style={{ marginRight: "20px" }} textColor="gray">
                <ListItem textSize="50">store data</ListItem>
                <ListItem textSize="50">link to each other</ListItem>
                <ListItem textSize="50">have global IDs</ListItem>
                <ListItem textSize="50">never change</ListItem>
              </List>
              <List textColor="white">
                <ListItem textSize="50">declarative containers</ListItem>
                <ListItem textSize="50">composable containers</ListItem>
                <ListItem textSize="50">node-based cache</ListItem>
                <ListItem textSize="50">query diffing</ListItem>
              </List>
            </div>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="white" notes={ notes.declarativeContainersOne }>
            <Heading size={ 2 } textColor="primary" fit caps>Declarative Containers</Heading>
            <div style={{ position: "relative" }}>
              <CodePane
                textSize="24"
                lang="jsx"
                source={ require("raw!../assets/declarative.example") }
                margin="20px auto"
              />
              <Image src={ images.smashgatherCharacter } height="240px" style={{ position: "absolute", right: "20px", bottom: "20px", borderRadius: "10px" }} />
            </div>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="white" notes={ notes.declarativeContainersTwo }>
            <Heading size={ 2 } textColor="primary" fit caps>Declarative Containers</Heading>
            <div style={{ position: "relative" }}>
              <CodePane
                textSize="24"
                lang="jsx"
                source={ require("raw!../assets/declarative_2.example") }
                margin="20px auto"
              />
              <Image src={ images.smashgatherCharacter } height="240px" style={{ position: "absolute", right: "20px", bottom: "20px", borderRadius: "10px" }} />
            </div>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="white" notes={ notes.composableContainers }>
            <Heading size={ 2 } textColor="primary" fit caps>Composable Containers</Heading>
            <div style={{ position: "relative" }}>
              <CodePane
                textSize="24"
                lang="jsx"
                source={ require("raw!../assets/composable.example") }
                margin="20px auto"
              />
              <Image src={ images.smashgatherUser } height="240px" style={{ position: "absolute", right: "20px", top: "20px", borderRadius: "10px" }} />
            </div>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="white" notes={ notes.nodeBasedCache }>
            <Heading size={ 2 } textColor="primary" caps>Node-Based Cache</Heading>
            <div style={ Object.assign({}, flexRow, { marginTop: "20px", background: "#2d2d2d" }) }>
              <CodePane
                textSize="18"
                lang="jsx"
                source={ require("raw!../assets/store_user.example") }
                margin="0 auto"
                style={{ minWidth: "50%" }}
              />
              <Appear style={{ minWidth: "50%" }}>
                <CodePane
                  textSize="18"
                  lang="jsx"
                  source={ require("raw!../assets/store.example") }
                  margin="0 auto"
                  bgColor="transparent"
                />
              </Appear>
            </div>
          </Slide>
          <Slide transition={ ["fade"] } bgColor="primary" notes={ notes.localGraphOne }>
            <Heading size={ 2 } textColor="white" fit caps><S type="strikethrough">Node-Based Cache</S></Heading>
            <Appear><Heading size={ 2 } textColor="white" fit caps>"Local Graph"</Heading></Appear>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="white" notes={ notes.localGraphTwo }>
            <Heading size={ 2 } textColor="primary" caps>Local Graph</Heading>
            <div style={ Object.assign({}, flexRow, { justifyContent: "center" }) }>
              <div>
                <Image height="300" src={ images.react } />
                <Text>View</Text>
              </div>
              <div style={{ position: "relative" }}>
                <Image height="300" src={ images.relaySmall } />
                <Appear style={{ position: "absolute", top: 0, left: 0 }}>
                  <div>
                    <Image height="300" src={ images.relayGraphql } />
                    <Text>Relay</Text>
                  </div>
                </Appear>
                <Text>Relay</Text>
              </div>
              <div>
                <Image height="300" src={ images.graphql } />
                <Text>Server</Text>
              </div>
            </div>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="white" notes={ notes.queryDiffing }>
            <Heading size={ 2 } textColor="primary" caps>Query Diffing</Heading>
            <div style={ Object.assign({}, flexRow, { marginTop: "20px", background: "#2d2d2d" }) }>
              <CodePane
                textSize="24"
                lang="jsx"
                source={ require("raw!../assets/diffing.example") }
                margin="0 auto"
                style={{ minWidth: "50%" }}
              />
              <Appear style={{ minWidth: "50%" }}>
                <CodePane
                  textSize="24"
                  lang="jsx"
                  source={ require("raw!../assets/diffing_2.example") }
                  margin="0 auto"
                  bgColor="transparent"
                />
              </Appear>
            </div>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="white" notes={ notes.nodeSummary }>
            <div style={ flexRow }>
              <div>
                <Heading size={ 2 } textColor="primary" caps>Nodes require:</Heading>
                <List style={{ marginRight: "20px" }} textColor="primary">
                  <ListItem textSize="50">store data</ListItem>
                  <ListItem textSize="50">link to each other</ListItem>
                  <ListItem textSize="50">have global IDs</ListItem>
                  <ListItem textSize="50">never change</ListItem>
                </List>
              </div>
              <div>
                <Heading size={ 2 } textColor="primary" caps>Nodes enable:</Heading>
                <List textColor="primary">
                  <ListItem textSize="50">declarative containers</ListItem>
                  <ListItem textSize="50">composable containers</ListItem>
                  <ListItem textSize="50">node-based cache</ListItem>
                  <ListItem textSize="50">query diffing</ListItem>
                </List>
              </div>
            </div>
          </Slide>
          <Slide transition={ ["fade"] } bgColor="primary" notes={ notes.theBeginning }>
            <Heading size={ 2 } textColor="white" fit caps>Nodes are just the beginning</Heading>
            <Heading size={ 2 } textColor="white" fit caps>Nodes + Connections + Mutations</Heading>
          </Slide>
          <Slide transition={ ["slide"] } bgColor="white" notes={ notes.connections }>
            <Heading size={ 2 } textColor="primary" fit caps>Paginated Connections</Heading>
            <CodePane
              textSize="24"
              lang="jsx"
              source={ require("raw!../assets/connection_pagination.example") }
              margin="0 auto"
            />
          </Slide>
          <Slide transition={ ["slide"] } bgColor="white" notes={ notes.mutations }>
            <Heading size={ 2 } textColor="primary" fit caps>Declarative Mutations</Heading>
            <CodePane
              textSize="24"
              lang="jsx"
              source={ require("raw!../assets/mutation_declaration.example") }
              margin="0 auto"
            />
          </Slide>
          <Slide transition={ ["fade"] } bgImage={ images.relayWhite } bgColor="primary" notes={ notes.summary }>
            <Heading size={ 1 } textColor="white" caps>Thinking In Graphs With Relay</Heading>
            <List textColor="white">
              <Appear><ListItem textSize="50">model data with nodes, not rows</ListItem></Appear>
              <Appear><ListItem textSize="50">work within the rules</ListItem></Appear>
              <Appear><ListItem textSize="50">write components to render nodes</ListItem></Appear>
              <Appear><ListItem textSize="50">compose nodes into full views</ListItem></Appear>
            </List>
          </Slide>
          <Slide transition={ ["fade"] } bgImage={ images.relayWhite } bgColor="primary">
            <Heading size={ 1 } textColor="white" caps>Thanks!</Heading>
            <div style={ summaryInfo }>
              <div style={ summaryItem }>
                <Image style={ summaryImage } src={ images.pathgather } />
                <Text>neville@pathgather.com</Text>
              </div>
              <div style={ summaryItem }>
                <Image style={ summaryImage } src={ images.twitter } />
                <Text>@nsamuell</Text>
              </div>
              <div style={ summaryItem }>
                <Image style={ summaryImage } src={ images.reactiflux } />
                <Text>#relay</Text>
              </div>
              <div style={ summaryItem }>
                <Image style={ summaryImage } src={ images.github } />
                <Text>github.com/NevilleS/thinking-in-graphs-with-relay</Text>
              </div>
              <div style={ summaryItem }>
                <Image style={ summaryImage } src={ images.github } />
                <Text>github.com/Pathgather/smashgather</Text>
              </div>
            </div>
          </Slide>
        </Deck>
      </Spectacle>
    );
  }
}

// Better versions added in latest Spectacle, use when they release
const Table = ({ children }) =>
  <table style={{ margin: "1em", borderCollapse: "collapse" }}>
    <tbody>
      { children }
    </tbody>
  </table>
const TableHeaderItem = ({ children }) =>
  <th style={{ fontSize: "0.8em", border: "1px solid rgba(0, 0, 0, 0.2)", padding: "0.2em 0.4em" }}>
    { children }
  </th>
const TableItem = ({ children }) =>
  <td style={{ fontSize: "0.8em", border: "1px solid rgba(0, 0, 0, 0.2)", padding: "0.2em 0.4em" }}>
    { children }
  </td>
const TableRow = ({ children }) =>
  <tr style={{}}>
    { children }
  </tr>

// adapted from http://stackoverflow.com/questions/8672369/how-to-draw-a-line-between-two-divs
function getOffset(el, container) {
  let bounds = container.getBoundingClientRect();
  let rect = el.getBoundingClientRect();
  return {
    left: rect.left - bounds.left,
    top: rect.top - bounds.top,
    width: rect.width || el.offsetWidth,
    height: rect.height || el.offsetHeight
  };
}

// adapted from http://stackoverflow.com/questions/8672369/how-to-draw-a-line-between-two-divs
function renderLine(div1, div2, container, key) {
  let color = "#f67b45"
  let thickness = 4
  let off1 = getOffset(div1, container)
  let off2 = getOffset(div2, container)
  // middle of div1
  let x1 = off1.left + off1.width / 2
  let y1 = off1.top + off1.height / 2
  // middle of div2
  let x2 = off2.left + off2.width / 2
  let y2 = off2.top + off2.height / 2
  // distance
  let length = Math.sqrt(((x2-x1) * (x2-x1)) + ((y2-y1) * (y2-y1)))
  // center
  let cx = ((x1 + x2) / 2) - (length / 2)
  let cy = ((y1 + y2) / 2) - (thickness / 2)
  // angle
  let angle = Math.atan2((y1-y2),(x1-x2))*(180/Math.PI)
  // make hr
  return (
    <div key={key} style={{
      padding: "0px",
      margin: "0px",
      height: `${thickness}px`,
      backgroundColor: color,
      lineHeight: "1px",
      position: "absolute",
      left: `${cx}px`,
      top: `${cy}px`,
      width: `${length}px`,
      transform: `rotate(${angle}deg)`,
    }} />
  )
}

// Helper function to create lines between all the connected points, used by the models
function drawLines(pts, fromKey, toKey, container) {
  var lines = []
  for (let fromId in pts[fromKey]) {
    for (let toId in pts[fromKey][fromId]) {
      let start = pts[fromKey][fromId][toId]
      let end = pts[toKey][toId]
      let key = `${fromKey}-${fromId}-${toKey}-${toId}`
      var line = renderLine(start, end, container, key)
      lines.push(line)
    }
  }
  return lines
}

// A waaaaaay too complicated layout of three tables with fancy lines connecting foreign key relationships
class SpeakerDataModel extends React.Component {
  constructor() {
    super()
    this.points = {
      "speaker": {},
      "company": {},
      "event": {},
    }
    companies.forEach((company) => this.points["company"][company.id] = {})
    events.forEach((event) => this.points["event"][event.id] = {})
  }

  render() {
    if (this.container) {
      // Draw lines between ids
      var lines = []
      lines.push(drawLines(this.points, "company", "speaker", this.container))
      lines.push(drawLines(this.points, "event", "speaker", this.container))
    }
    return <div style={{ position: "relative" }} ref={(el) => this.container = el}>
      <div style={ flexRowWrap }>
        <Table>
          <TableRow>
            <TableHeaderItem>id</TableHeaderItem>
            <TableHeaderItem>name</TableHeaderItem>
            <TableHeaderItem>avatar</TableHeaderItem>
          </TableRow>
          {
            speakers.map((speaker) =>
              <TableRow key={ speaker.id }>
                <TableItem>
                  { speaker.id }
                  <div style={point} ref={(el) => this.points["speaker"][speaker.id] = el}></div>
                </TableItem>
                <TableItem>{ speaker.name }</TableItem>
                <TableItem>...</TableItem>
              </TableRow>
            )
          }
        </Table>
        <Table>
          <TableRow>
            <TableHeaderItem>id</TableHeaderItem>
            <TableHeaderItem>name</TableHeaderItem>
            <TableHeaderItem>image</TableHeaderItem>
            <TableHeaderItem>speaker_id</TableHeaderItem>
          </TableRow>
          {
            companies.map((company) =>
              <TableRow key={ company.id }>
                <TableItem>{ company.id }</TableItem>
                <TableItem>{ company.name }</TableItem>
                <TableItem>...</TableItem>
                <TableItem>
                  { company.speakerId }
                  <div style={point} ref={(el) => this.points["company"][company.id][company.speakerId] = el}></div>
                </TableItem>
              </TableRow>
            )
          }
        </Table>
        <Table>
          <TableRow>
            <TableHeaderItem>id</TableHeaderItem>
            <TableHeaderItem>name</TableHeaderItem>
            <TableHeaderItem>image</TableHeaderItem>
            <TableHeaderItem>first</TableHeaderItem>
            <TableHeaderItem>second</TableHeaderItem>
            <TableHeaderItem>third</TableHeaderItem>
          </TableRow>
          {
            events.map((event) =>
              <TableRow key={ event.id }>
                <TableItem>{ event.id }</TableItem>
                <TableItem>{ event.name }</TableItem>
                <TableItem>...</TableItem>
                <TableItem>
                  { event.first }
                  { event.first ? <div style={point} ref={(el) => this.points["event"][event.id][event.first] = el}></div> : "" }
                </TableItem>
                <TableItem>
                  { event.second }
                  { event.second ? <div style={point} ref={(el) => this.points["event"][event.id][event.second] = el}></div> : "" }
                </TableItem>
                <TableItem>
                  { event.third }
                  { event.third ? <div style={point} ref={(el) => this.points["event"][event.id][event.third] = el}></div> : "" }
                </TableItem>
              </TableRow>
            )
          }
        </Table>
      </div>
      <Appear><div>{ lines }</div></Appear>
    </div>
  }
}

class SpeakerCombinedDataModel extends React.Component {
  render() {
    return <div style={{ position: "relative" }}>
      <div style={ flexRowWrap }>
        {
          speakersCombined.map((combined) =>
            <div style={ speakerCombined }>
              <Table>
                <TableRow>
                  <TableHeaderItem>name</TableHeaderItem>
                  <TableHeaderItem>avatar</TableHeaderItem>
                </TableRow>
                <TableRow>
                  <TableItem>{ combined.speaker.name }</TableItem>
                  <TableItem>...</TableItem>
                </TableRow>
              </Table>
              <Table>
                <TableRow>
                  <TableHeaderItem>name</TableHeaderItem>
                  <TableHeaderItem>image</TableHeaderItem>
                </TableRow>
                {
                  combined.companies.map((company) =>
                    <TableRow key={ company.id }>
                      <TableItem>{ company.name }</TableItem>
                      <TableItem>...</TableItem>
                    </TableRow>
                  )
                }
              </Table>
              <Table>
                <TableRow>
                  <TableHeaderItem>name</TableHeaderItem>
                  <TableHeaderItem>image</TableHeaderItem>
                </TableRow>
                {
                  combined.events.map((event) =>
                    <TableRow key={ event.id }>
                      <TableItem>{ event.name }</TableItem>
                      <TableItem>...</TableItem>
                    </TableRow>
                  )
                }
              </Table>
            </div>
          )
        }
      </div>
    </div>
  }
}

// A waaaaaay too complicated copy-paste of the other data model
class SmashgatherDataModel extends React.Component {
  constructor() {
    super()
    this.userPoints = {
      "user": {},
      "character": {},
      "game": {},
    }
    characters.forEach((character) => this.userPoints["character"][character.id] = {})
    games.forEach((game) => this.userPoints["game"][game.id] = {})
    this.charPoints = {
      "character": {},
      "user": {},
      "game": {},
    }
    users.forEach((user) => this.charPoints["user"][user.id] = {})
    games.forEach((game) => this.charPoints["game"][game.id] = {})
  }

  render() {
    if (this.container) {
      // Draw lines between ids
      var lines = []
      lines.push(drawLines(this.userPoints, "character", "user", this.container))
      lines.push(drawLines(this.userPoints, "game", "user", this.container))
      lines.push(drawLines(this.charPoints, "user", "character", this.container))
      lines.push(drawLines(this.charPoints, "game", "character", this.container))
    }
    return <div style={{ position: "relative" }} ref={(el) => this.container = el}>
      <div style={ flexRowWrap }>
        <Table>
          <TableRow>
            <TableHeaderItem>id</TableHeaderItem>
            <TableHeaderItem>name</TableHeaderItem>
            <TableHeaderItem>avatar</TableHeaderItem>
            <TableHeaderItem>char_id</TableHeaderItem>
          </TableRow>
          {
            users.map((user) =>
              <TableRow key={ user.id }>
                <TableItem>
                  { user.id }
                  <div style={point} ref={(el) => this.userPoints["user"][user.id] = el}></div>
                </TableItem>
                <TableItem>{ user.name }</TableItem>
                <TableItem>...</TableItem>
                <TableItem>
                  { user.characterId }
                  <div style={point} ref={(el) => this.charPoints["user"][user.id][user.characterId] = el}></div>
                </TableItem>
              </TableRow>
            )
          }
        </Table>
        <Table>
          <TableRow>
            <TableHeaderItem>id</TableHeaderItem>
            <TableHeaderItem>name</TableHeaderItem>
            <TableHeaderItem>avatar</TableHeaderItem>
          </TableRow>
          {
            characters.map((character) =>
              <TableRow key={ character.id }>
                <TableItem>
                  { character.id }
                  <div style={point} ref={(el) => this.charPoints["character"][character.id] = el}></div>
                </TableItem>
                <TableItem>{ character.name }</TableItem>
                <TableItem>...</TableItem>
              </TableRow>
            )
          }
        </Table>
        <Table>
          <TableRow>
            <TableHeaderItem>id</TableHeaderItem>
            <TableHeaderItem>created_at</TableHeaderItem>
            <TableHeaderItem>char_id</TableHeaderItem>
            <TableHeaderItem>user_id</TableHeaderItem>
          </TableRow>
          {
            games.map((game) =>
              <TableRow key={ game.id }>
                <TableItem>{ game.id }</TableItem>
                <TableItem>...</TableItem>
                <TableItem>
                  { game.characterId }
                  <div style={point} ref={(el) => this.charPoints["game"][game.id][game.characterId] = el}></div>
                </TableItem>
                <TableItem>
                  { game.userId }
                  <div style={point} ref={(el) => this.userPoints["game"][game.id][game.userId] = el}></div>
                </TableItem>
              </TableRow>
            )
          }
        </Table>
      </div>
      <Appear><div>{ lines }</div></Appear>
    </div>
  }
}

// A waaaaaay too complicated remix of the Smashgather data model
class SmashgatherRelayModel extends React.Component {
  constructor() {
    super()
    this.userPoints = {
      "user": {},
      "character": {},
      "game": {},
    }
    characters.forEach((character) => this.userPoints["character"][character.id] = {})
    games.forEach((game) => this.userPoints["game"][game.id] = {})
    this.charPoints = {
      "character": {},
      "user": {},
      "game": {},
    }
    users.forEach((user) => this.charPoints["user"][user.id] = {})
    games.forEach((game) => this.charPoints["game"][game.id] = {})
  }

  render() {
    if (this.container) {
      // Draw lines between ids
      var lines = []
      lines.push(drawLines(this.userPoints, "character", "user", this.container))
      lines.push(drawLines(this.userPoints, "game", "user", this.container))
      lines.push(drawLines(this.charPoints, "user", "character", this.container))
      lines.push(drawLines(this.charPoints, "game", "character", this.container))
    }
    return <div style={{ position: "relative" }} ref={(el) => this.container = el}>
      <div style={ Object.assign({}, flexRow, { justifyContent: "space-between" }) }>
        <div style={ flexColumn }>
          {
            users.map((user) =>
              <div style={ relayNode } key={ "user-" + user.id }>
                <div>{ user.name }</div>
                <div style={point} ref={(el) => this.userPoints["user"][user.id] = el}></div>
                <div style={point} ref={(el) => this.charPoints["user"][user.id][user.characterId] = el}></div>
              </div>
            )
          }
        </div>
        <div style={ flexColumn }>
        {
          characters.map((character) =>
            <div style={ relayNode } key={ "character-" + character.id }>
              <div>{ character.name }</div>
              <div style={point} ref={(el) => this.charPoints["character"][character.id] = el}></div>
            </div>
          )
        }
        </div>
      </div>
      <div style={ flexRowWrap }>
        {
          games.map((game) =>
            <div style={ relayNode } key={ "game" + game.id }>
              <div style={point} ref={(el) => this.charPoints["game"][game.id][game.characterId] = el}></div>
              <div style={point} ref={(el) => this.userPoints["game"][game.id][game.userId] = el}></div>
              <div>Game { game.id }</div>
            </div>
          )
        }
      </div>
      <Appear><div>{ lines }</div></Appear>
    </div>
  }
}
