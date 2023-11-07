import style from '../../style/sass/brands.module.scss';

interface BrandLogoProps {
  imageSource: string;
}
export const BrandLogo = ({ imageSource }: BrandLogoProps) => {
  return (
    <div className={style.brand}>
      <img src={imageSource} alt="brand logo" />
    </div>
  );
};
