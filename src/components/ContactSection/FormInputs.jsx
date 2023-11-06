import PropTypes from 'prop-types';
import NeumorphicElement from '../neumorphic/NeumorphicElement';
export const FormInputs = ({ placeHolder }) => {
  return (
    <NeumorphicElement
      neumorphicOptions={{
        form: 'pressed',
        size: '174',
        intensity: '0.55',
        lightSource: 1,
        distance: '13',
        blur: '23',
      }}
      element={'input'}
      type="text"
      placeholder={placeHolder}
    />
  );
};
FormInputs.propTypes = {
  placeHolder: PropTypes.string,
};
