import globalClassNames from '..../style.d';
declare const classNames: typeof globalClassNames & {
  readonly projects: 'projects';
  readonly projectsContainer: 'projectsContainer';
  readonly carrousel: 'carrousel';
  readonly carrouselContainer: 'carrouselContainer';
  readonly textContainer: 'textContainer';
  readonly svgContainer: 'svgContainer';
  readonly snapContainer: 'snapContainer';
  readonly description: 'description';
  readonly softTitle: 'softTitle';
  readonly content: 'content';
  readonly descriptionTextContainer: 'descriptionTextContainer';
  readonly contactButton: 'contactButton';
};
export = classNames;
