import style from './brandLogo.module.scss';

interface BrandLogoProps {
  imageSource: string;
}
export const BrandLogo = ({ imageSource }: BrandLogoProps) => {
  return (
    <div className={style.brandLogo}>
      <img src={imageSource} alt="brand logo" />
    </div>
  );
};
