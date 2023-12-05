import globalClassNames from '....../style.d';
declare const classNames: typeof globalClassNames & {
  readonly softShadow: 'softShadow';
  readonly pressed: 'pressed';
  readonly svgInnerShadow: 'svgInnerShadow';
};
export = classNames;
