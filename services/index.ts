import { request, gql } from 'graphql-request';

const gqlApi = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT!;

export const getRecentPosts = async () => {
  const query = gql`
    query GetRecentPosts {
      posts(orderBy: createdAt_DESC, first: 2) {
        title
        slug
        excerpt
        featuredImage {
          url
        }
        createdAt
      }
    }
  `;

  const result = await request(gqlApi, query);
  return result.posts;
};
