import { ReactNode } from 'react';

/***** postCard props *****/

export interface IPostCardProps {
  posts: IArticleProps[];
}

/***** Article props *****/
export interface IArticleProps {
  post: {
    title: string;
    slug: string;
    excerpt: string;
    featuredImage: {
      url: string;
    };
    createdAt: string;
  };
}

/***** socialLinkCard props *****/
export interface ISocialLinkCardProps {
  link: string;
  image: string;
}

/***** titleCard props *****/
export interface ITitleCardProp {
  text: string;
}
