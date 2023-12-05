import globalClassNames from '....../style.d';
declare const classNames: typeof globalClassNames & {
  readonly description: 'description';
  readonly softTitle: 'softTitle';
  readonly content: 'content';
  readonly descriptionTextContainer: 'descriptionTextContainer';
  readonly svgContainer: 'svgContainer';
  readonly contactButton: 'contactButton';
};
export = classNames;
