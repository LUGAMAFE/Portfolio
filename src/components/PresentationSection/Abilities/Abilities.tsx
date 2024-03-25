import { useGSAP } from '@gsap/react';
import gsap from 'gsap';
import style from './abilities.module.scss';

export const Abilities = () => {
  useGSAP(() => {
    // Animar líneas
    gsap.to(`.${style.Abilities_text}`, {
      opacity: 1,
      xPercent: 10,
      duration: 1,
      scrollTrigger: {
        // markers: true,
        trigger: `.${style.Abilities_text}`,
        start: "center center", // Empieza la animación cuando el elemento está en la parte superior de la pantalla
        end: "center center", // Termina cuando el elemento está en la parte inferior
      }
    });
  }, []);
  return (
    <div className={style.Abilities}>
      <div className={style.Abilities_svgContainer}>
        <p className={style.Abilities_text} >Diseño UI / UX</p>
        <svg className={style.Abilities_neomorphicSVG} width="656" height="512" viewBox="0 0 656 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dd_78_39)">
            <path d="M192.617 44.9492C-24.5926 -1.82545 73.6225 97.778 63.6816 223.981C46.7819 322.826 23.597 365.629 55.7287 439.321C87.8605 513.013 184.167 435.473 213.99 368.841C252.108 283.676 274.63 263.378 336.264 257.641C378.513 257.641 378.513 264.859 413.804 271.321C493.331 285.883 588.764 252.222 612.422 171.029C642.943 34.3588 611.332 21.2443 507.746 36.1238C465.537 42.1868 417.78 113.787 323.341 89.0762C285.565 79.1918 234.866 54.0472 192.617 44.9492Z" fill="#282A2F" />
          </g>
          <g filter="url(#filter1_dd_78_39)">
            <path d="M208.523 85.1048C34.5561 12.7365 110.604 159.679 89.7284 236.019C79.7875 325.156 48.0126 327.189 77.3022 394.435C106.592 461.681 149.527 417.289 176.712 356.486C211.458 278.77 254.748 226.311 310.915 226.311C349.427 226.311 423.702 236.019 456.55 236.019C524.645 236.019 562.865 191.892 568.882 159.679C585.285 71.8667 570.373 55.0984 505.26 72.7492C467.983 82.8544 441.141 124.378 356.146 124.378C277.767 124.378 247.293 101.233 208.523 85.1048Z" fill="#26292E" />
          </g>
          <g filter="url(#filter2_dd_78_39)">
            <path d="M104.143 372.813C110.891 388.257 139.563 369.579 147.446 340.124C153.103 318.985 150.851 316.077 161.8 293.826C172.315 272.458 181.383 265.25 174.348 247.492C172.051 241.695 168.039 234.774 161.8 225.87C142.854 198.826 107.622 190.568 121.042 265.143C121.042 285 108.894 293.826 101.658 322.949C94.2018 352.956 97.3944 357.368 104.143 372.813Z" fill="#26292E" />
          </g>
          <defs>
            <filter id="filter0_dd_78_39" x="0.657593" y="0.31958" width="654.867" height="510.913" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-12" dy="-4" />
              <feGaussianBlur stdDeviation="13.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.191389 0 0 0 0 0.203167 0 0 0 0 0.220833 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_78_39" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="12" dy="22" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.100781 0 0 0 0 0.104129 0 0 0 0 0.1125 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_78_39" result="effect2_dropShadow_78_39" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_78_39" result="shape" />
            </filter>
            <filter id="filter1_dd_78_39" x="37.1904" y="40.6166" width="567.831" height="427.488" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-8" dy="-5" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.222396 0 0 0 0 0.235104 0 0 0 0 0.254167 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_78_39" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="10" dy="20" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.100781 0 0 0 0 0.104129 0 0 0 0 0.1125 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_78_39" result="effect2_dropShadow_78_39" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_78_39" result="shape" />
            </filter>
            <filter id="filter2_dd_78_39" x="82.3674" y="189.481" width="107.467" height="206.882" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-1" dy="-3" />
              <feGaussianBlur stdDeviation="7" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.222396 0 0 0 0 0.235104 0 0 0 0 0.254167 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_78_39" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="5" dy="10" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.100781 0 0 0 0 0.104129 0 0 0 0 0.1125 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_78_39" result="effect2_dropShadow_78_39" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_78_39" result="shape" />
            </filter>
          </defs>
        </svg>

      </div>
      <div className={style.Abilities_svgContainer}>
        <svg className={style.Abilities_text} width="150" height="150" viewBox="0 0 150 150" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_ii_94_110)">
            <circle cx="75" cy="75" r="75" fill="#E4EBF2" />
          </g>
          <circle cx="75" cy="75" r="74.5" stroke="#D2DAE4" />
          <g clipPath="url(#clip0_94_110)">
            <g filter="url(#filter1_di_94_110)">
              <path d="M44.2127 64.3041C44.441 64.5324 44.7407 64.6472 45.0403 64.6472C45.34 64.6472 45.6397 64.533 45.8686 64.3041C46.3257 63.847 46.3257 63.1054 45.8686 62.6483L43.0256 59.8052L45.8686 56.9628C46.3257 56.505 46.3257 55.7641 45.8686 55.3069C45.4114 54.8498 44.6699 54.8498 44.2127 55.3069L40.542 58.9776C40.3223 59.1973 40.199 59.4952 40.199 59.8052C40.199 60.1159 40.3223 60.4137 40.542 60.6335L44.2127 64.3041Z" fill="url(#paint0_linear_94_110)" />
              <path d="M55.8314 59.8052L52.9883 62.6483C52.5312 63.1054 52.5312 63.847 52.9889 64.3041C53.2172 64.5324 53.5169 64.6472 53.8166 64.6472C54.1163 64.6472 54.4159 64.5324 54.6442 64.3041L58.3155 60.6329C58.7727 60.1757 58.7727 59.4341 58.3155 58.9776L54.6442 55.3063C54.1871 54.8492 53.4461 54.8492 52.9889 55.3063C52.5312 55.7641 52.5312 56.5051 52.9889 56.9622L55.8314 59.8052Z" fill="url(#paint1_linear_94_110)" />
              <path d="M47.6831 64.566C47.8235 64.6209 47.9688 64.6471 48.111 64.6471C48.5785 64.6471 49.0198 64.3652 49.2011 63.9043L52.085 56.5624C52.3218 55.9606 52.0252 55.2812 51.4234 55.0444C50.8222 54.8082 50.1423 55.1042 49.9061 55.7061L47.0215 63.048C46.7853 63.6498 47.0813 64.3298 47.6831 64.566Z" fill="url(#paint2_linear_94_110)" />
              <path d="M42.0325 71.5161H49.9201C50.5665 71.5161 51.0908 70.9918 51.0908 70.3448C51.0908 69.6984 50.5665 69.1741 49.9201 69.1741H42.0325C41.3855 69.1741 40.8618 69.6984 40.8618 70.3448C40.8618 70.9918 41.3855 71.5161 42.0325 71.5161Z" fill="url(#paint3_linear_94_110)" />
              <path d="M68.0867 69.1741H54.2194C53.5731 69.1741 53.0488 69.6984 53.0488 70.3448C53.0488 70.9918 53.5731 71.5161 54.2194 71.5161H68.0867C68.7336 71.5161 69.2579 70.9918 69.2579 70.3448C69.2579 69.6984 68.7336 69.1741 68.0867 69.1741Z" fill="url(#paint4_linear_94_110)" />
              <path d="M42.0325 76.4544H45.3925C46.0389 76.4544 46.5632 75.9302 46.5632 75.2832C46.5632 74.6368 46.0389 74.1125 45.3925 74.1125H42.0325C41.3855 74.1125 40.8618 74.6368 40.8618 75.2832C40.8618 75.9302 41.3855 76.4544 42.0325 76.4544Z" fill="url(#paint5_linear_94_110)" />
              <path d="M63.8032 74.1125C63.1562 74.1125 62.6326 74.6368 62.6326 75.2832C62.6326 75.9302 63.1562 76.4544 63.8032 76.4544H65.8491C66.4961 76.4544 67.0204 75.9302 67.0204 75.2832C67.0204 74.6368 66.4961 74.1125 65.8491 74.1125H63.8032Z" fill="url(#paint6_linear_94_110)" />
              <path d="M60.7215 75.2832C60.7215 74.6368 60.1972 74.1125 59.5509 74.1125H49.5008C48.8538 74.1125 48.3301 74.6368 48.3301 75.2832C48.3301 75.9302 48.8538 76.4544 49.5008 76.4544H59.5509C60.1972 76.4544 60.7215 75.9302 60.7215 75.2832Z" fill="url(#paint7_linear_94_110)" />
              <path d="M68.3913 75.2832C68.3913 75.9302 68.9155 76.4544 69.5619 76.4544H73.3943C74.0413 76.4544 74.5656 75.9302 74.5656 75.2832C74.5656 74.6368 74.0413 74.1125 73.3943 74.1125H69.5619C68.9155 74.1125 68.3913 74.6368 68.3913 75.2832Z" fill="url(#paint8_linear_94_110)" />
              <path d="M62.0149 60.7446H66.0572C66.7042 60.7446 67.2285 60.2203 67.2285 59.5733C67.2285 58.9269 66.7042 58.4026 66.0572 58.4026H62.0149C61.3679 58.4026 60.8436 58.9269 60.8436 59.5733C60.8436 60.2203 61.3679 60.7446 62.0149 60.7446Z" fill="url(#paint9_linear_94_110)" />
              <path d="M70.5849 60.7446H95.2499C95.8969 60.7446 96.4205 60.2203 96.4205 59.5733C96.4205 58.9269 95.8969 58.4026 95.2499 58.4026H70.5849C69.9379 58.4026 69.4136 58.9269 69.4136 59.5733C69.4136 60.2203 69.9379 60.7446 70.5849 60.7446Z" fill="url(#paint10_linear_94_110)" />
              <path d="M91.5035 63.554H81.512C80.8657 63.554 80.3414 64.0783 80.3414 64.7253C80.3414 65.3716 80.8657 65.8959 81.512 65.8959H91.5035C92.1499 65.8959 92.6742 65.3716 92.6742 64.7253C92.6742 64.0783 92.1499 63.554 91.5035 63.554Z" fill="url(#paint11_linear_94_110)" />
              <path d="M77.7657 63.554H74.3312C73.6842 63.554 73.1606 64.0783 73.1606 64.7253C73.1606 65.3716 73.6842 65.8959 74.3312 65.8959H77.7657C78.4127 65.8959 78.9363 65.3716 78.9363 64.7253C78.9363 64.0783 78.4127 63.554 77.7657 63.554Z" fill="url(#paint12_linear_94_110)" />
              <path d="M62.0149 65.8959H70.4286C71.0749 65.8959 71.5992 65.3716 71.5992 64.7253C71.5992 64.0783 71.0749 63.554 70.4286 63.554H62.0149C61.3679 63.554 60.8436 64.0783 60.8436 64.7253C60.8436 65.3716 61.3679 65.8959 62.0149 65.8959Z" fill="url(#paint13_linear_94_110)" />
              <path d="M59.5655 79.0094H51.6785C51.0316 79.0094 50.5073 79.5337 50.5073 80.1801C50.5073 80.8264 51.0316 81.3507 51.6785 81.3507H59.5655C60.2119 81.3507 60.7362 80.8264 60.7362 80.1801C60.7362 79.5337 60.2119 79.0094 59.5655 79.0094Z" fill="url(#paint14_linear_94_110)" />
              <path d="M48.0921 79.0094H42.0325C41.3855 79.0094 40.8618 79.5337 40.8618 80.1801C40.8618 80.8264 41.3855 81.3507 42.0325 81.3507H48.0921C48.7391 81.3507 49.2627 80.8264 49.2627 80.1801C49.2627 79.5337 48.7391 79.0094 48.0921 79.0094Z" fill="url(#paint15_linear_94_110)" />
              <path d="M73.8631 79.0094H63.5597C62.9127 79.0094 62.389 79.5337 62.389 80.1801C62.389 80.8264 62.9127 81.3507 63.5597 81.3507H73.8631C74.5094 81.3507 75.0337 80.8264 75.0337 80.1801C75.0337 79.5337 74.5094 79.0094 73.8631 79.0094Z" fill="url(#paint16_linear_94_110)" />
              <path d="M87.7968 72.995H82.1627C81.5163 72.995 80.992 73.5192 80.992 74.1656C80.992 74.8126 81.5163 75.3369 82.1627 75.3369H87.7968C88.4438 75.3369 88.9675 74.8126 88.9675 74.1656C88.9675 73.5192 88.4438 72.995 87.7968 72.995Z" fill="url(#paint17_linear_94_110)" />
              <path d="M97.5735 75.3369H105.527C106.174 75.3369 106.698 74.8126 106.698 74.1656C106.698 73.5192 106.174 72.995 105.527 72.995H97.5735C96.9265 72.995 96.4028 73.5192 96.4028 74.1656C96.4028 74.8126 96.9271 75.3369 97.5735 75.3369Z" fill="url(#paint18_linear_94_110)" />
              <path d="M93.5964 72.995H91.7739C91.1269 72.995 90.6026 73.5192 90.6026 74.1656C90.6026 74.8126 91.1269 75.3369 91.7739 75.3369H93.5964C94.2434 75.3369 94.7671 74.8126 94.7671 74.1656C94.7671 73.5192 94.2434 72.995 93.5964 72.995Z" fill="url(#paint19_linear_94_110)" />
              <path d="M82.1627 88.0957H87.7968C88.4438 88.0957 88.9675 87.572 88.9675 86.9251C88.9675 86.2787 88.4438 85.7544 87.7968 85.7544H82.1627C81.5163 85.7544 80.992 86.2787 80.992 86.9251C80.992 87.572 81.5163 88.0957 82.1627 88.0957Z" fill="url(#paint20_linear_94_110)" />
              <path d="M97.5735 88.0957H105.527C106.174 88.0957 106.698 87.572 106.698 86.9251C106.698 86.2787 106.174 85.7544 105.527 85.7544H97.5735C96.9265 85.7544 96.4028 86.2787 96.4028 86.9251C96.4028 87.572 96.9271 88.0957 97.5735 88.0957Z" fill="url(#paint21_linear_94_110)" />
              <path d="M91.7739 88.0957H93.5964C94.2434 88.0957 94.7677 87.572 94.7677 86.9251C94.7677 86.2787 94.2434 85.7544 93.5964 85.7544H91.7739C91.1269 85.7544 90.6032 86.2787 90.6032 86.9251C90.6032 87.572 91.1269 88.0957 91.7739 88.0957Z" fill="url(#paint22_linear_94_110)" />
              <path d="M87.7968 98.5139H82.1627C81.5163 98.5139 80.992 99.0382 80.992 99.6845C80.992 100.331 81.5163 100.855 82.1627 100.855H87.7968C88.4438 100.855 88.9675 100.331 88.9675 99.6845C88.9675 99.0382 88.4438 98.5139 87.7968 98.5139Z" fill="url(#paint23_linear_94_110)" />
              <path d="M105.527 98.5139H97.5735C96.9265 98.5139 96.4028 99.0382 96.4028 99.6845C96.4028 100.331 96.9265 100.855 97.5735 100.855H105.527C106.174 100.855 106.698 100.331 106.698 99.6845C106.698 99.0382 106.174 98.5139 105.527 98.5139Z" fill="url(#paint24_linear_94_110)" />
              <path d="M93.5964 98.5139H91.7739C91.1269 98.5139 90.6026 99.0382 90.6026 99.6845C90.6026 100.331 91.1269 100.855 91.7739 100.855H93.5964C94.2434 100.855 94.7671 100.331 94.7671 99.6845C94.7671 99.0382 94.2434 98.5139 93.5964 98.5139Z" fill="url(#paint25_linear_94_110)" />
              <path d="M109.848 35.1561H40.1532C37.312 35.1561 35 37.4675 35 40.3093V96.9605C35 99.8017 37.312 102.113 40.1532 102.113H44.5594C45.2057 102.113 45.73 101.589 45.73 100.942C45.73 100.296 45.2057 99.7718 44.5594 99.7718H40.1532C38.6029 99.7718 37.3419 98.5108 37.3419 96.9605V92.519H79.9977V94.5368H79.0694C77.7992 94.5368 76.7665 95.5695 76.7665 96.8397V99.7718H51.6779C51.0316 99.7718 50.5073 100.296 50.5073 100.942C50.5073 101.589 51.0316 102.113 51.6779 102.113H62.9353V106.312H59.4001C57.0417 106.312 55.1234 108.231 55.1234 110.589V113.118C55.1234 114.194 55.9986 115.07 57.0747 115.07H92.8365C93.9126 115.07 94.7878 114.194 94.7878 113.118V110.589C94.7878 108.231 92.8695 106.312 90.5111 106.312H86.9759V104.832H108.621C109.89 104.832 110.923 103.8 110.923 102.529V101.978C113.205 101.448 114.911 99.4007 114.911 96.9605L115 40.3087C115 37.4675 112.689 35.1561 109.848 35.1561ZM79.1084 89.7315V84.1193H108.582V89.7315H79.1084ZM82.3391 81.7774V79.314H105.351V81.7774H82.3391ZM105.351 92.0728V94.5368H82.3391V92.0728H105.351ZM65.2766 102.113H76.7665V102.53C76.7665 103.8 77.7992 104.832 79.0694 104.832H84.6346V106.312H65.2766V102.113ZM90.5117 108.654C91.5786 108.654 92.4465 109.522 92.4465 110.589V112.728H57.4647V110.589C57.4647 109.522 58.3332 108.654 59.4001 108.654H90.5117ZM108.582 102.49H79.1084V96.8787H108.582V102.49ZM112.57 96.9605C112.57 98.0946 111.894 99.0717 110.924 99.5155V96.8391C110.924 95.5695 109.89 94.5368 108.621 94.5368H107.693V92.519H112.57V96.9605ZM112.57 90.1777H110.885C110.909 90.0452 110.924 84.0802 110.924 84.0802C110.924 82.8101 109.89 81.7774 108.621 81.7774H107.693V79.314H108.621C109.89 79.314 110.924 78.2806 110.924 77.0111V71.3208C110.924 70.0512 109.89 69.0179 108.621 69.0179H102.008C101.361 69.0179 100.837 69.5422 100.837 70.1892C100.837 70.8355 101.361 71.3598 102.008 71.3598H108.582V76.972H79.1084V71.3598H94.7225C95.3695 71.3598 95.8932 70.8355 95.8932 70.1892C95.8932 69.5422 95.3695 69.0179 94.7225 69.0179H79.0694C77.7992 69.0179 76.7665 70.0512 76.7665 71.3208V77.0111C76.7665 78.2806 77.7992 79.314 79.0694 79.314H79.9977V81.7774H79.0694C77.7992 81.7774 76.7665 82.8107 76.7665 84.0802C76.7665 84.0802 76.7812 90.0452 76.805 90.1777H37.3419V51.0826H112.57V90.1777ZM112.57 48.7407H37.428V40.3087C37.428 38.759 38.689 37.498 40.2393 37.498H109.759C111.309 37.498 112.57 38.759 112.57 40.3093V48.7407Z" fill="url(#paint26_linear_94_110)" />
              <path d="M43.6347 39.6501C41.7402 39.6501 40.199 41.1913 40.199 43.0858C40.199 44.9803 41.7402 46.5221 43.6347 46.5221C45.5292 46.5221 47.071 44.9803 47.071 43.0858C47.071 41.1913 45.5292 39.6501 43.6347 39.6501ZM43.6347 44.1802C43.0317 44.1802 42.5403 43.6894 42.5403 43.0858C42.5403 42.4828 43.0317 41.9914 43.6347 41.9914C44.2383 41.9914 44.7291 42.4828 44.7291 43.0858C44.7291 43.6894 44.2383 44.1802 43.6347 44.1802Z" fill="url(#paint27_linear_94_110)" />
              <path d="M52.3829 39.6501C50.4883 39.6501 48.9466 41.1913 48.9466 43.0858C48.9466 44.9803 50.4883 46.5221 52.3829 46.5221C54.2774 46.5221 55.8185 44.9803 55.8185 43.0858C55.8185 41.1913 54.2768 39.6501 52.3829 39.6501ZM52.3829 44.1802C51.7792 44.1802 51.2885 43.6894 51.2885 43.0858C51.2885 42.4828 51.7792 41.9914 52.3829 41.9914C52.9859 41.9914 53.4772 42.4828 53.4772 43.0858C53.4772 43.6894 52.9859 44.1802 52.3829 44.1802Z" fill="url(#paint28_linear_94_110)" />
              <path d="M61.1304 39.6501C59.2359 39.6501 57.6948 41.1913 57.6948 43.0858C57.6948 44.9803 59.2359 46.5221 61.1304 46.5221C63.025 46.5221 64.5667 44.9803 64.5667 43.0858C64.5667 41.1913 63.025 39.6501 61.1304 39.6501ZM61.1304 44.1802C60.5274 44.1802 60.0361 43.6894 60.0361 43.0858C60.0361 42.4828 60.5274 41.9914 61.1304 41.9914C61.7341 41.9914 62.2248 42.4828 62.2248 43.0858C62.2248 43.6894 61.7341 44.1802 61.1304 44.1802Z" fill="url(#paint29_linear_94_110)" />
            </g>
          </g>
          <defs>
            <filter id="filter0_ii_94_110" x="-10" y="-17" width="172" height="187" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-10" dy="-17" />
              <feGaussianBlur stdDeviation="12.5" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.954167 0 0 0 0 0.9725 0 0 0 0 1 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="effect1_innerShadow_94_110" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="12" dy="22" />
              <feGaussianBlur stdDeviation="10" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.504167 0 0 0 0 0.517262 0 0 0 0 0.55 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_innerShadow_94_110" result="effect2_innerShadow_94_110" />
            </filter>
            <filter id="filter1_di_94_110" x="35" y="35.1561" width="81.9997" height="81.9136" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="1" dy="1" />
              <feGaussianBlur stdDeviation="0.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.62 0 0 0 0 0.6975 0 0 0 0 0.775 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_94_110" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect1_dropShadow_94_110" result="shape" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset />
              <feGaussianBlur stdDeviation="0.4" />
              <feComposite in2="hardAlpha" operator="arithmetic" k2="-1" k3="1" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.580122 0 0 0 0 0.722625 0 0 0 0 0.854167 0 0 0 1 0" />
              <feBlend mode="normal" in2="shape" result="effect2_innerShadow_94_110" />
            </filter>
            <linearGradient id="paint0_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint1_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint2_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint3_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint4_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint5_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint6_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint7_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint8_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint9_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint10_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint11_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint12_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint13_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint14_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint15_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint16_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint17_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint18_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint19_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint20_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint21_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint22_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint23_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint24_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint25_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint26_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint27_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint28_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <linearGradient id="paint29_linear_94_110" x1="54.5275" y1="26.814" x2="130.708" y2="98.3389" gradientUnits="userSpaceOnUse">
              <stop stopColor="#353A40" />
              <stop offset="1" stopColor="#16171B" />
            </linearGradient>
            <clipPath id="clip0_94_110">
              <rect width="80" height="80" fill="white" transform="translate(35 35)" />
            </clipPath>
          </defs>
        </svg>
      </div>
      <div className={style.Abilities_svgContainer}>
        <p className={`${style.Abilities_text} ${style.Abilities_text___rotated}`}>FullStack Web </p>
        <svg className={style.Abilities_neomorphicSVG} width="656" height="512" viewBox="0 0 656 512" fill="none" xmlns="http://www.w3.org/2000/svg">
          <g filter="url(#filter0_dd_78_39)">
            <path d="M192.617 44.9492C-24.5926 -1.82545 73.6225 97.778 63.6816 223.981C46.7819 322.826 23.597 365.629 55.7287 439.321C87.8605 513.013 184.167 435.473 213.99 368.841C252.108 283.676 274.63 263.378 336.264 257.641C378.513 257.641 378.513 264.859 413.804 271.321C493.331 285.883 588.764 252.222 612.422 171.029C642.943 34.3588 611.332 21.2443 507.746 36.1238C465.537 42.1868 417.78 113.787 323.341 89.0762C285.565 79.1918 234.866 54.0472 192.617 44.9492Z" fill="#282A2F" />
          </g>
          <g filter="url(#filter1_dd_78_39)">
            <path d="M208.523 85.1048C34.5561 12.7365 110.604 159.679 89.7284 236.019C79.7875 325.156 48.0126 327.189 77.3022 394.435C106.592 461.681 149.527 417.289 176.712 356.486C211.458 278.77 254.748 226.311 310.915 226.311C349.427 226.311 423.702 236.019 456.55 236.019C524.645 236.019 562.865 191.892 568.882 159.679C585.285 71.8667 570.373 55.0984 505.26 72.7492C467.983 82.8544 441.141 124.378 356.146 124.378C277.767 124.378 247.293 101.233 208.523 85.1048Z" fill="#26292E" />
          </g>
          <g filter="url(#filter2_dd_78_39)">
            <path d="M104.143 372.813C110.891 388.257 139.563 369.579 147.446 340.124C153.103 318.985 150.851 316.077 161.8 293.826C172.315 272.458 181.383 265.25 174.348 247.492C172.051 241.695 168.039 234.774 161.8 225.87C142.854 198.826 107.622 190.568 121.042 265.143C121.042 285 108.894 293.826 101.658 322.949C94.2018 352.956 97.3944 357.368 104.143 372.813Z" fill="#26292E" />
          </g>
          <defs>
            <filter id="filter0_dd_78_39" x="0.657593" y="0.31958" width="654.867" height="510.913" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-12" dy="-4" />
              <feGaussianBlur stdDeviation="13.5" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.191389 0 0 0 0 0.203167 0 0 0 0 0.220833 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_78_39" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="12" dy="22" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.100781 0 0 0 0 0.104129 0 0 0 0 0.1125 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_78_39" result="effect2_dropShadow_78_39" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_78_39" result="shape" />
            </filter>
            <filter id="filter1_dd_78_39" x="37.1904" y="40.6166" width="567.831" height="427.488" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-8" dy="-5" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.222396 0 0 0 0 0.235104 0 0 0 0 0.254167 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_78_39" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="10" dy="20" />
              <feGaussianBlur stdDeviation="10" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.100781 0 0 0 0 0.104129 0 0 0 0 0.1125 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_78_39" result="effect2_dropShadow_78_39" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_78_39" result="shape" />
            </filter>
            <filter id="filter2_dd_78_39" x="82.3674" y="189.481" width="107.467" height="206.882" filterUnits="userSpaceOnUse" colorInterpolationFilters="sRGB">
              <feFlood floodOpacity="0" result="BackgroundImageFix" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="-1" dy="-3" />
              <feGaussianBlur stdDeviation="7" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.222396 0 0 0 0 0.235104 0 0 0 0 0.254167 0 0 0 1 0" />
              <feBlend mode="normal" in2="BackgroundImageFix" result="effect1_dropShadow_78_39" />
              <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha" />
              <feOffset dx="5" dy="10" />
              <feGaussianBlur stdDeviation="4" />
              <feColorMatrix type="matrix" values="0 0 0 0 0.100781 0 0 0 0 0.104129 0 0 0 0 0.1125 0 0 0 1 0" />
              <feBlend mode="normal" in2="effect1_dropShadow_78_39" result="effect2_dropShadow_78_39" />
              <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_78_39" result="shape" />
            </filter>
          </defs>
        </svg>
      </div>
    </div>
  );
};
