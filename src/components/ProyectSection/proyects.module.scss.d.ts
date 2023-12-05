import globalClassNames from '..../style.d';
declare const classNames: typeof globalClassNames & {
  readonly projects: 'projects';
  readonly projectsContainer: 'projectsContainer';
};
export = classNames;
