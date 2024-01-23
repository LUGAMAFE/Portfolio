import style from './brandLogo.module.scss';

interface BrandLogoProps {
  imageSource: string;
}
export const BrandLogo = ({ imageSource }: BrandLogoProps) => {
  return <img className={style.BrandLogo} src={imageSource} alt="brand logo" />;
};
