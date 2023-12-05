import globalClassNames from '....../style.d';
declare const classNames: typeof globalClassNames & {
  readonly lights: 'lights';
  readonly toggle: 'toggle';
  readonly toggleSwitch: 'toggleSwitch';
  readonly toggleCheckbox: 'toggleCheckbox';
};
export = classNames;
