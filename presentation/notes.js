export default {
  title: `
    * Today we're going to talk about Relay.<br/>
    * By now you've all heard of it, all the hype at React Conf 2015 & 2016...<br/>
    * We're using it, so I want to look past the hype and talk about the problems it solves.<br/>
    * First, we need to talk about some examples of apps that don't use Relay.<br/>
  `,
  speaker: `
    * No one wants to talk about a theoretical ToDo app.<br/>
    * Let's talk about a theoretical app that lists recent speakers at tech events.<br/>
  `,
  speakerList: `
    * Tonight, we've got a great lineup: me, Cory, and Miriam<br/>
  `,
  speakerDetail: `
    * For each speaker, probably see a details view.<br/>
    * Here, you'd see that I'm working on social learning platform at Pathgather.<br/>
    * Also show that this is my first tech talk but I organize a local HackerNest meetup.<br/>
    * We can all imagine how to deconstruct these views into React components.<br/>
    * What does the data model look like?<br/>
  `,
  speakerData: `
    * Like most apps, this would be organized into database tables.<br/>
    * We'd have one table for each type of data: USERS, COMPANIES, and EVENTS.<br/>
    * To render a given view, we'd stitch together rows into models.<br/>
    * Even though this is an imaginary app, we know exposing this model is crazy<br/>
  `,
  speakerRest: `
    * Unless you want the network tab to look like this
  `,
  speakerActualData: `
    * Realistically, we'd do all the joining on the backend, and provide a model like this.<br/>
    * Nothing fancy, but it'd pay the bills.<br/>
    * Now let's talk about a real app.<br/>
  `,
  smashgather: `
    * Smashgather is an app I built during my open-source time at Pathgather.<br/>
    * Automatically records our weekly Smash games at the office.<br/>
  `,
  smashgatherList: `
    * Much like speaker app, Smashgather has recent games view, which shows who won each with what character.<br/>
  `,
  smashgatherDetail: `
    * Smashgather also has a user view that shows the win count for each user, arranged in a leaderboard.<br/>
  `,
  smashgatherData: `
    * Smashgather's data is stored in a database, with tables for USERS, CHARACTERS, and GAMES.<br/>
    * To render a view like the recent games, we need to stitch together rows to build models for rendering.<br/>
    * Two different apps, but very similar data models. Neither of which are very convenient for the front-end.<br/>
  `,
  table: `
    * The problem here is that tables are good for storage, but they don't match the products we make.<br/>
    * Web apps don't care about rows, they want to combine different pieces of data together into a view.<br/>
  `,
  newSmashgatherData: `
    * Let's talk about the model that the Smashgather client actually uses.<br/>
    * Instead of tables of users, characters, and games, all data is accessed freely.<br/>
    * From a given GAME, fetch the connected USER and CHARACTER for rendering together.<br/>
    * Still need to combine data, but it more closely mimics how apps are designed.<br/>
  `,
  introRelay: `
    * As you have probably guessed, Smashgather is using Relay.<br/>
  `,
  aside: `
    * Before we go further, need to set some expectations.<br/>
    * Relay is a framework for getting data from GraphQL server to your React components.<br/>
    * React is a library for building user interfaces - it has no real opinions about data<br/>
    * GraphQL itself is just a query language, so you'll need some kind of database.<br/>
    * For this talk, I'm going to focus on Relay, but let's take a quick detour to GraphQL<br/>
  `,
  graphql: `
    * GraphQL is a query language, defined by a spec written by Facebook<br/>
    * Was developed to allow the client to request exactly the data it needs<br/>
    * Highly composable and flexible, but also strongly typed to ensure correctness<br/>
    * But it's not a database - just a way to ask for data, not store it<br/>
    * Can be used independent of Relay, very flexible<br/>
  `,
  graphqlExample: `
    * In this example, we're sending a query to get a particular User<br/>
    * Note that the query is just a string, sent along as part of a POST<br/>
    * We've requested some fields from the User type, like name, etc.</br>
    * You'll notice that the shape of the response data matches the shape of the query<br/>
  `,
  graphqlDemo: `
    * Let's take a moment to play around with some GraphQL queries<br/>
    * You can login to play around with the Smashgather schema<br/>
  `,
  asideTwo: `
    * Now we can focus on the part in the middle, Relay<br/>
    * Most people think Relay is a generic framework, but it's not.<br/>
    * It is very opinionated and places specific restrictions on your schema.<br/>
  `,
  backToRelay: `
    * Let's get back to it.<br/>
  `,
  relayAssumes: `
    * Unlike generic libraries like Redux, Relay makes a lot of assumptions about how your data behaves.<br/>
    * It doesn't have a "model layer" with "has many" or "belong to many" type associations.<br/>
    * Fundamentally assumes that your data is a graph.<br/>
  `,
  oneOfThese: `
    * I don't mean a line graph - a connected graph.<br/>
  `,
  introNodes: `
    * Basic definition of a graph is a bunch of connected nodes.<br/>
    * Relay defines a "node" interface that you use in your GraphQL schema.<br/>
    * It then makes a bunch of assumptions about your nodes.<br/>
  `,
  nodesStoreData: `
    * First, it assumes you use nodes to store pretty much all your data.<br/>
    * Character? Game? User? Node, node, node.<br/>
    * Win count, however, is a number, so that is a regular field.<br/>
    * This is an example GraphQL response that shows a Smashgather User node.<br/>
    * You use nodes as the building blocks for all your views.<br/>
  `,
  nodesLinkOthers: `
    * Standalone rows aren't very convenient - standalone nodes aren't that much better.<br/>
    * Relay assumes your nodes will include other nodes, to build more complex models.<br/>
    * This is a more complex example User response, includes a character node as a sub-field.<br/>
    * This is regular GraphQL, except these sub-fields implement node interface.<br/>
  `,
  nodesHaveIDs: `
    * Importantly, node interface requires that nodes have a unique ID.<br/>
    * Isn't a type-specific row ID - a GUID.<br/>
    * Relay requires that your schema defines a "node" query to fetch individual nodes by ID.<br/>
    * This example shows node query and the resulting Character node.<br/>
  `,
  nodesNeverChange: `
    * Finally, Relay assumes your node data never changes.<br/>
    * Once you fetch a character node once, don't need to fetch it again.<br/>
    * This means you get same data when you fetch a node directly or via a linked field.<br/>
    * Might seem obvious, but it's tempting to include query-specific data.<br/>
    * But Relay won't like that... because nodes never change!<br/>
  `,
  unlessTheyDo: `
    * Obviously, completely unchanging data is ridiculous<br/>
    * Relay has a very detailed mutation model, and allows explicit refetching.<br/>
    * Otherwise, nodes never change.<br/>
  `,
  nodesSummary: `
    * These are the basic assumptions that Relay makes about your app.<br/>
    * Nodes are your building blocks to store data and link data together<br/>
    * Give each one a global ID for fetching and identification<br/>
    * None of it ever changes.<br/>
  `,
  theRules: `
    * When you use Relay, you play by those rules.<br/>
    * Otherwise, you'll get frustrated!<br/>
  `,
  relayPatterns: `
    * Based on that node model, Relay implements patterns.<br/>
    * Let's look at what Relay gives to make building apps on top of that model pretty magical.<br/>
  `,
  declarativeContainersOne: `
    * Like Redux, Relay wraps components in containers that manage the data fetching.<br/>
    * On container, declare data requirements via GraphQL fragments.<br/>
    * For example: Character container declares "name" and "wins" fields.<br/>
    * When container mounts, Relay sends request, receives response, and renders the inner component.<br/>
  `,
  declarativeContainersTwo: `
    * Once Relay gets the data, it gives exactly the data to the inner component as props.<br/>
  `,
  composableContainers: `
    * Like how React components compose, Relay containers compose in parallel.<br/>
    * Parent container includes child container's fragment in it's own.<br/>
    * This composition rolls up to a top-level container.<br/>
    * Means you fetch exactly the data you need for all the components in a single query.<br/>
  `,
  nodeBasedCache: `
    * Relay optimizes all fetching via a detailed cache.<br/>
    * Traditionally caches are based on request URL - one record per page.<br/>
    * However, Relay understands GraphQL responses, so it stores one record per node.<br/>
    * Containers subscribe to node records, and render whenever updated.<br/>
    * Works is because of Relay's node model with global IDs which act as keys.<br/>
  `,
  localGraphOne: `
    * Calling the Relay store a "cache" is misleading, since it's not dumb!<br/>
    * Refer to it as a "local graph".<br/>
  `,
  localGraphTwo: `
    * Not simply a way to fetch GraphQL data from a remote server.<br/>
    * A local GraphQL server that stores data in memory, talks to remote graph to fill in the blanks.<br/>
  `,
  queryDiffing: `
    * Since Relay parses GraphQL queries, it can add optimizations like query diffing.<br/>
    * For example, a User might request these fields.<br/>
    * Relay compares against the data it currently has in the store, creates a new query that is sent.<br/>
    * Often, it can perform the query completely locally, or at least very minimal.<br/>
    * Predicated on the assumption that nodes never change.<br/>
  `,
  nodeSummary: `
    * So far, I've shown how Relay's node model enables a lot of things.<br/>
    * Declare data fragments for components next to where you use them.<br/>
    * Combine fragments together to perform efficient data fetching.<br/>
    * Relay store implements cache with optimizations like query diffing to ensure you only fetch the data you need.<br/>
  `,
  theBeginning: `
    * Just the beginning!<br/>
    * Relay also implements patterns for other common scenarios.<br/>
    * Connections for lists of nodes, mutations to encapsulate actions.<br/>
    * Don't have time to cover these, except for a brief teaser.<br/>
  `,
  connections: `
    * Relay's connection model allows efficient paginated lists of nodes.<br/>
    * Simply incrementing a count variable, Relay forms the minimal query to get remaining items.<br/>
  `,
  mutations: `
    * Mutations encapsulate all the behaviour of an operation into an object you dispatch.<br/>
    * Relay handles forming query to refetch changed data and updating views.<br/>
    * Lots of optimizations here like cancelation and optimistic updates.<br/>
  `,
  mutationsMore: `
    * MUTATIONS need their own talk - automatically refresh data, optimistic updates, etc.<br/>
    * Once you use Relay a bit, check out Pathgather blog for a detailed overview
  `,
  summary: `
    * To use Relay effectively, you need to think about things differently.<br/>
    * Model your data as nodes, not rows.<br/>
    * Understand Relay's assumptions and work with them, not against them.<br/>
    * Allows components that declaratively render data and compose into full views.<br/>
    * Relay handles the rest.<br/>
  `,
}
