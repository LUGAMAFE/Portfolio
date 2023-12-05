import globalClassNames from '......../style.d';
declare const classNames: typeof globalClassNames & {
  readonly lightArrows: 'lightArrows';
  readonly disabled: 'disabled';
  readonly arrow: 'arrow';
  readonly active: 'active';
};
export = classNames;
