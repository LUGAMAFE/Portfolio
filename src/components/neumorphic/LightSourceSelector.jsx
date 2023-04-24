import style from '../../style/sass/components/neumorphic/configuration.module.scss';

const LightSourceSelector = ({ lightSource, onClick, disabled }) => {
  return (
    <div className={`${style.row} ${style.label}`} style={{ margin: '12px 0px 8px' }}>
      <label>Light Direction:</label>
      <div className={`${style.lightArrows} ${disabled && style.disabled}`}>
        <button className={`${style.arrow} ${lightSource == 1 && style.active}`} onClick={onClick} name="1"></button>
        <button className={`${style.arrow} ${lightSource == 2 && style.active}`} onClick={onClick} name="2"></button>
        <button className={`${style.arrow} ${lightSource == 4 && style.active}`} onClick={onClick} name="4"></button>
        <button className={`${style.arrow} ${lightSource == 3 && style.active}`} onClick={onClick} name="3"></button>
      </div>
    </div>
  );
};

export default LightSourceSelector;
