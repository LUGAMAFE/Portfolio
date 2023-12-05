import globalClassNames from '....../style.d';
declare const classNames: typeof globalClassNames & {
  readonly container: 'container';
  readonly row: 'row';
  readonly label: 'label';
  readonly 'row--checkbox': 'row--checkbox';
  readonly lightArrows: 'lightArrows';
  readonly disabled: 'disabled';
  readonly arrow: 'arrow';
  readonly active: 'active';
  readonly copy: 'copy';
  readonly shapeSwitch: 'shapeSwitch';
};
export = classNames;
