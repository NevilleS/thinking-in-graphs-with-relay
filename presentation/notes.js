export default {
  title: `
    * Today we're going to talk about the Relay framework<br/>
    * See past the hype surrounding it and think about the problems it solves
  `,
  speakerList: `
    * Imagine an app that lists recent speakers at tech events in NYC
  `,
  speakerDetail: `
    * For each speaker, details view with work history & speaking history
  `,
  speakerData: `
    * Data organized in tables: USERS, COMPANIES, EVENTS<br/>
    * Stitch together the rows based on their relationships and render
  `,
  smashgatherList: `
    * This app lists recent games played at our office, and who won each
  `,
  smashgatherDetail: `
    * View each user's character & win count, arranged in leaderboard
  `,
  smashgatherData: `
    * Similarly, data organized in tables: USERS, CHARACTERS, GAMES<br/>
    * Stitch together the rows based on their relationships and render
  `,
  table: `
    * What's the point? Tables good for storage, bad for UIs<br/>
    * Web apps don't want rows; they want the combined data for rendering
  `,
  newSmashgatherData: `
    * Consider a different model where all data is stored freely<br/>
    * Instead of rows, data is stored on nodes<br/>
    * Still need to combine data for rendering, but resembles how apps are designed
  `,
  introRelay: `
    * This is the type of data model Relay understands
  `,
  aside: `
    * Not going into detail, but lots of setup required to use Relay<br/>
    * Relay frontend, GraphQL backend, and Relay in the middle<br/>
    * Most underestimate the requirements Relay places on your schema; very opinionated about data model!
  `,
  backToRelay: `
    * OK, back to the Relay data model
  `,
  relayAssumes: `
    * Unlike other libraries like Redux, Relay makes a lot of assumptions about how your data behaves<br/>
    * It doesn't have models with has-and-belongs-to-many and joins... it assumes your data is a graph
  `,
  introNodes: `
    * A graph is defined as a bunch of connected NODES<br/>
    * Relay defines a very simple NODE interface that you use<br/>
    * Relay assumes (but can't enforce) your NODES behave in particular ways, let's see
  `,
  nodesStoreData: `
    * Nodes are the building blocks that can store whatever data you need<br/>
    * For example, a Character node has a name, win count, etc.
  `,
  nodesLinkOthers: `
    * Nodes can include other nodes to build more complex models<br/>
    * This is normal GraphQL, except these sub-fields implement Relay's NODE interface
  `,
  nodesHaveIDs: `
    * Importantly all NODES have a unique ID that identifies them<br/>
    * Relay requires a top-level NODE QUERY to fetch any node by ID
  `,
  nodesNeverChange: `
    * Finally, Relay assumes that NODE data never changes<br/>
    * The character linked on this user needs to be the same even when fetched directly<br/>
    * Might seem obvious, but it's tempting to include query-specific data
  `,
  nodesSummary: `
    * NODES are the building blocks and foundation of Relay<br/>
    * Store data, connect to each other, use global IDs for fetching, and never change
  `,
  theRules: `
    * Play by those rules, or...<br/>
    * Cryptic errors, square-peg-round-hole situations, etc.
  `,
  relayPatterns: `
    * Once your data behaves in this way, Relay can work it's magic<br/>
    * Let's look at the patterns implemented by Relay one by one
  `,
  declarativeContainersOne: `
    * Wraps components in Relay containers, similar to Redux<br/>
    * Container declares fragments, like this component wants NAME and WINS from a given CHARACTER NODE<br/>
    * When container renders, Relay does work to send the query and get the response
  `,
  declarativeContainersTwo: `
    * Once data is fetched, inner component is rendered<br/>
    * Relay places the data as a simple Javascript object on the component props<br/>
    * Bonus: when transforming tagged RelayQL templates, Relay VALIDATES the queries
  `,
  composableContainers: `
    * Just like React components compose, Relay containers compose in parallel<br/>
    * Parent container includes fragment from it's children<br/>
    * Via composition, all data for a complex view fetched via a single query
  `,
  nodeBasedCache: `
    * Traditionally, cache data based on the request URL - one record per page<br/>
    * Relay UNDERSTANDS the structure, breaks down responses and stores one record per NODE<br/>
    * When NODES are reused elsewhere, can be served from cache even if query wildly different
  `,
  localGraphOne: `
    * In fact, calling it a CACHE is misleading - implies "dumb"<br/>
    * More accurate: a LOCAL GRAPH
  `,
  localGraphTwo: `
    * Don't think of Relay as a way to fetch GraphQL data from server and cache it<br/>
    * Instead, think of it as a local GraphQL server that communicates with remote graph to fill in blanks
  `,
  queryDiffing: `
    * Relay records data on NODES and GraphQL allows selective fetching, often only need portion of NODE<br/>
    * Example: might already have the user name, and the character name and wins, just need user wins<br/>
    * Relay diffs the query you declare (all fields) vs data in store, only fetches missing fields
  `,
  nodeSummary: `
    * We've covered how Relay's NODE model enables lots of magic<br/>
    * declarative containers, composable containers, a node based cache, and query diffing
  `,
  theBeginning: `
    * NODES are just the beginning, also implements patterns for other common scenarios<br/>
    * CONNECTIONS for lists of NODES, MUTATIONS to modify the graph, SUBSCRIPTIONS for real-time data
  `,
  connections: `
    * Example: Relay's CONNECTION model allows updating a single variable (count) to page through data
  `,
  mutations: `
    * Example: Relay's MUTATION model encapsulates different operations, similar to action creators<br/>
  `,
  mutationsMore: `
    * MUTATIONS need their own talk - automatically refresh data, optimistic updates, etc.<br/>
    * Once you use Relay a bit, check out Pathgather blog for a detailed overview
  `,
  subscriptions: `
    * Part of GraphQL standard is concept of subscriptions for server-published mutations<br/>
    * Interesting idea, not available yet in Relay
  `,
  summary: `
    * Think about data differently in terms of connected nodes<br/>
    * Understand Relay's assumptions and work with it, not against<br/>
    * Encapsulate data requirements in your components, then compose those queries into views
  `,
  thanks: `
    * Questions? Find me on email, twitter, or Reactiflux chat room<br/>
    * Slides on Github
  `,
}
