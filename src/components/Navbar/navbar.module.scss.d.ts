import globalClassNames from '..../style.d';
declare const classNames: typeof globalClassNames & {
  readonly myTopNavbar: 'myTopNavbar';
  readonly logo: 'logo';
  readonly menuToggle: 'menuToggle';
};
export = classNames;
