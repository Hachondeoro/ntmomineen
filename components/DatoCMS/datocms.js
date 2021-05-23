import { GraphQLClient } from "graphql-request";
export function request({ query, variables }) {
  const endpoint = `https://graphql.datocms.com/`;
  const client = new GraphQLClient(endpoint, {
    headers: {
      authorization: `Bearer 7ab1b80cd0292ba6774f85037b7997`,
    },
  });
  console.log("aheuaheuaheuhz")
  return client.request(query, variables);
}

