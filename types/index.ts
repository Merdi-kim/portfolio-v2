export interface IPostNode {
  node: IPost;
}

/***** post layout *******/
export interface IPost {
  author: {
    id: string;
    name: string;
    photo: {
      url: string;
    };
  };
  createdAt: string;
  slug: string;
  title: string;
  excerpt: string;
  categories: [];
  featuredImage: {
    url: string;
  };
}

/***** postCard props */

export interface IPostCardProps {
  posts: IPostNode[];
}

export interface IArticleProps {
  post: IPost;
}
