import globalClassNames from '..../style.d';
declare const classNames: typeof globalClassNames & {
  readonly skills: 'skills';
  readonly skillsContainer: 'skillsContainer';
};
export = classNames;
