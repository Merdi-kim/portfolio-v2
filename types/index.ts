import { ReactNode } from 'react';

export interface IPostNode {
  node: IPost;
}

/***** post layout *****/
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

/***** postCard props *****/

export interface IPostCardProps {
  posts: IPostNode[];
}

/***** Article props *****/
export interface IArticleProps {
  post: IPost;
}
/***** Language props *****/
export interface ILanguageProp {
  link: string;
}

/***** Project card props *****/
export interface IProjectCardProps {
  right?: boolean;
}

/***** SkillCard props *****/
export interface ISkillCardProps {
  title: string;
  skillsList: ReactNode;
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

/***** skill bullet point prop *****/
export interface ISkillBulletPointProps {
  text: string;
}
