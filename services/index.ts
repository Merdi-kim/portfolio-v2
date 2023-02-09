import { request, gql } from 'graphql-request';

const gqlApi = process.env.NEXT_PUBLIC_GRAPH_CMS_ENDPOINT!;

export const getPosts = async () => {
  const query = gql`
    query MyQuery {
      postsConnection {
        edges {
          node {
            author {
              ... on Author {
                id
                name
                photo {
                  url
                }
              }
            }
            createdAt
            slug
            title
            excerpt
            categories {
              name
              slug
            }
            featuredImage {
              url
            }
          }
        }
      }
    }
  `;

  const result = await request(gqlApi, query);
  return result.postsConnection.edges;
};

export const getRecentPosts = async () => {
  const query = gql`
    query GetPostsDetails() {
      posts( 
        orderBy: createdAt_ASC
        last: 3
      )
      {
        title
        featuredImage{
          url
        }
        createdAt
        slug
      }
    }
  `;

  const result = await request(gqlApi, query);
  return result.posts;
};
