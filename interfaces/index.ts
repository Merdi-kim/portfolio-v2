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
/***** Language props *****/
export interface ILanguageProp {
  link: string;
}

/***** Project card props *****/
export interface IProjectCardProps {
  right?: boolean;
  project: {
    name: string;
    description: string;
    website: string;
    github: string;
  };
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
