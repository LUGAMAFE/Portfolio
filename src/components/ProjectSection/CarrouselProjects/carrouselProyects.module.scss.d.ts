import globalClassNames from '....../style.d';
declare const classNames: typeof globalClassNames & {
  readonly carrousel: 'carrousel';
  readonly carrouselContainer: 'carrouselContainer';
  readonly textContainer: 'textContainer';
  readonly svgContainer: 'svgContainer';
  readonly snapContainer: 'snapContainer';
};
export = classNames;
