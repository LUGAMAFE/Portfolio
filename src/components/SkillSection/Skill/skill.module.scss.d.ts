import globalClassNames from '....../style.d';
declare const classNames: typeof globalClassNames & {
  readonly skill: 'skill';
  readonly chargeBarContainer: 'chargeBarContainer';
  readonly chargeBar: 'chargeBar';
  readonly nullPart: 'nullPart';
  readonly circleContainer: 'circleContainer';
  readonly neonPart: 'neonPart';
};
export = classNames;
