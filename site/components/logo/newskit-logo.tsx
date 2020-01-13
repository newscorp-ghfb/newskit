import * as React from 'react';
import {
  ColorKeys,
  withTheme,
  Theme,
  SizingKeys,
  styled,
  getSizingFromTheme,
  getColorFromTheme,
} from 'newskit';

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  width: ${getSizingFromTheme('sizing120')};
  height: ${getSizingFromTheme('sizing070')};
  overflow: hidden;
`;

interface NewsKitLogo {
  viewBox?: string;
  $color: ColorKeys;
  $size: SizingKeys;
}

type LogoWrapperRef = HTMLDivElement;
type LogoWithTheme = NewsKitLogo & {theme: Theme};

const LogoSvg = styled.svg<NewsKitLogo>`
  display: inline-block;
  fill: ${getColorFromTheme('inkBase', '$color')};
  color: ${getColorFromTheme('inkBase', '$color')};
  width: ${getSizingFromTheme(undefined, '$size')};
  height: ${getSizingFromTheme(undefined, '$size')};
`;

const NewsKitLogo = React.forwardRef<LogoWrapperRef, LogoWithTheme>(
  (props, ref) => (
    <LogoWrapper ref={ref}>
      <LogoSvg viewBox="0 0 168 40" {...props}>
        <title>NewsKit Logo</title>
        <path d="M168,0 L168,40 L80,40 L80,0 L168,0 Z M126,8 L122,8 L122,32 L126,32 L126,8 Z M110.017639,8 L104,8 L92,19.999 L92,8 L88,8 L88,32 L92,32 L92,25.996 L96.001,22 L106.004181,32 L112,32 L99.002,19.002 L110.017639,8 Z M156,8 L136,8 L136,12 L144,12 L144,32 L148,32 L148,12 L156,12 L156,8 Z M70.4019404,19.0955247 C70.6680244,19.1357881 70.9353635,19.2344983 71.1788555,19.3552885 C71.7700139,19.6436262 72.0599451,20.1514642 71.9896587,20.7021633 C71.9018008,21.3710548 71.3784186,21.9776031 70.7508619,22.0399463 C70.3768381,22.0763133 69.9940285,21.9866948 69.6137292,21.9594196 C68.9422436,21.9100645 68.2669926,21.7905732 67.6017825,21.8321354 C66.6629577,21.8905822 66.1985658,22.46466 66.3253323,23.430981 C66.3993839,23.9946682 66.5750998,24.611607 66.8938986,25.0584006 C67.7473757,26.2598077 68.6912209,27.3936763 69.6212599,28.534039 C70.3178478,29.3873627 70.4897983,30.1030117 70.1157745,30.8550277 C69.6764849,31.7408219 68.9234169,32.097997 67.8703768,31.9772069 C65.7090716,31.7239372 63.5465113,31.4797594 61.3826959,31.2589602 C59.9832446,31.1147914 59.6192617,30.373166 60.4137484,29.1665636 C60.5944848,28.8925129 60.8492728,28.6587255 61.0990403,28.4457193 C61.4190942,28.1729674 61.7115356,28.1716686 62.1332537,28.3898701 C62.7407286,28.7041842 63.432296,28.8938117 64.107547,29.0029124 C64.9522383,29.1431848 65.8182665,29.1509778 66.6729987,29.2055281 C66.8123162,29.2146199 66.9528889,29.17046 67.2101872,29.1366907 C66.5876509,28.3379174 65.9990028,27.6612329 65.5019779,26.9196075 C64.9509832,26.1026507 64.3661003,25.2740045 64.008393,24.3622339 C63.3193358,22.6101277 63.9707396,20.8606191 65.5710091,19.9514462 C67.0746349,19.0968236 68.703772,18.8370599 70.4019404,19.0955247 Z M30.8967092,18.0019849 C31.8633318,18.0228422 32.7256715,18.3287492 33.1882599,19.2854037 C33.662881,20.2670869 33.3754344,21.1848078 32.7844978,22.0149281 C31.9194842,23.230213 30.7442957,24.0811906 29.5062701,24.8056339 C28.1519289,25.5968206 26.7360875,26.2753778 25.2868221,27.0345833 C25.4151703,28.220668 26.2841948,29.1425604 27.6117968,29.435953 C29.1158776,29.7682792 30.5624691,29.4887914 31.959593,28.9103492 C34.0211864,28.0579811 35.9009532,26.8718964 37.5734911,25.3576569 C38.0721774,24.9057489 38.6403857,24.4468885 38.6176574,23.6195492 C38.6149835,23.5236056 38.800821,23.384557 38.9251583,23.333109 C40.2353798,22.7922099 41.4520141,23.5861775 41.5683297,25.0420166 C41.624482,25.7483835 41.6779605,26.4533601 41.7448085,27.1569461 C41.7595151,27.3154615 41.8116565,27.4739769 41.865135,27.6241494 C42.1766468,28.5098891 42.6325504,28.678138 43.2087805,27.9828949 C44.2569577,26.7147715 45.2463086,25.3896381 46.1888659,24.0325236 C46.6701718,23.338671 46.9723249,23.0675262 47.6448161,23.2024033 C48.2504593,23.3219851 48.6234714,23.7794551 48.6889824,24.5581274 C48.771874,25.5467631 48.7772219,26.5437417 48.9002222,27.5240344 C48.9537007,27.9300564 49.2277776,28.3054877 49.3989086,28.6934333 C49.7558771,28.477908 50.1917263,28.3360784 50.4537706,28.0315619 C51.3468603,26.9886972 52.1837978,25.8943846 53.0300939,24.8111959 C54.1317495,23.3998524 54.5328377,23.2760991 56.1946799,23.8058743 C57.5958147,24.2550014 58.947482,24.1034384 60.2844427,23.4693767 C60.7042484,23.2719276 61.2229892,23.2065748 61.6882515,23.232994 C62.3834711,23.2760991 62.8768096,23.8030934 62.9824295,24.4385455 C63.0800276,25.0253307 62.7685157,25.6413161 62.1107311,25.9360992 C60.3913996,26.7036476 58.5945244,27.0874218 56.7575404,26.5423512 C55.8898529,26.2851112 55.2935684,26.4825603 54.7427406,27.1430412 C54.0274666,27.9981902 53.3509645,28.8964443 52.5675055,29.682069 C51.8455467,30.4051218 51.0607508,31.0989744 50.2037589,31.6329211 C49.1007663,32.3170404 48.0071325,32.0264287 47.2945324,30.9154303 C46.8386288,30.2062823 46.5538562,29.3803335 46.1995616,28.623909 C45.6701251,29.2190371 45.1326669,29.9114992 44.5056324,30.5038464 C44.008283,30.9738307 43.4414116,31.4048814 42.8357684,31.7038359 C41.6739496,32.2781067 40.7781859,32.004181 40.163184,30.8292201 C39.7420413,30.0227381 39.5174319,29.1050172 39.208594,28.2345729 C39.1564525,28.0871813 39.1257024,27.9328374 39.0748979,27.7451217 C38.1082753,28.3499832 37.1951312,28.9590162 36.2458891,29.5054773 C34.2244045,30.6665332 32.129387,31.6426546 29.8017384,31.9193613 C28.454082,32.0806577 27.1144474,32.0097429 25.8135846,31.5717398 C24.0621661,30.9821736 22.9163907,29.8044318 22.5527374,27.8813894 C22.531346,27.7618076 22.4899003,27.6477877 22.4564762,27.5337678 C21.8896049,27.4837103 21.3133748,27.5101296 20.7812645,27.362738 C20.3133282,27.2306418 19.8266745,26.9817448 19.468369,26.6452471 C18.7637908,25.9847662 18.8814433,24.7931195 19.6381631,24.191039 C19.913577,23.9699517 20.1315016,23.9894185 20.5058506,24.1270766 C21.1556135,24.3648498 21.8962897,24.3509449 22.602205,24.3801451 C22.7118357,24.3843166 22.8682601,24.0728477 22.9458039,23.8809606 C23.8281979,21.7020687 25.1330716,19.9152939 27.2240782,18.854353 C28.3805492,18.2661773 29.6078791,17.9727847 30.8967092,18.0019849 Z M25.8751644,8 C27.1226131,8.63939536 27.3171572,9.31932499 26.5350372,10.5157396 C26.1919559,11.04007 25.7897227,11.5304038 25.3756592,12.0037395 C22.967518,14.7548394 21.131179,17.8851308 19.446006,21.092568 C17.8436457,24.1457136 16.4016529,27.2812352 14.916282,30.3945284 C14.3287061,31.6262471 12.9852998,31.968827 11.9455402,31.0548447 C11.7417947,30.8744018 11.5735403,30.5278992 11.5761692,30.25985 C11.5958865,28.4750347 10.9241834,26.8248978 10.6297382,25.106768 C10.235392,22.7845468 10.0040422,20.4348669 9.70828247,18.1544875 C9.72142735,18.1374893 9.62546976,18.2342485 9.56631782,18.3506211 C7.81804942,21.7175803 6.06452308,25.0832319 4.33728648,28.4619592 C3.97580241,29.1693475 3.6826717,29.9055021 3.73919466,30.752799 C3.756283,31.0090802 3.48681306,31.3856566 3.24231838,31.5334105 C2.8506011,31.7700783 2.37607111,31.9779799 1.92783086,31.9962857 C0.104636678,32.0642787 -0.473737829,31.1960608 0.400396369,29.6152244 C1.81084147,27.0615657 3.34616289,24.5772074 4.75923697,22.0248562 C5.86603546,20.0229864 6.91105304,17.9845051 7.89297521,15.9211802 C8.27943454,15.1091873 8.4516324,14.1912823 8.66063592,13.3086813 C8.74081966,12.979177 8.8315193,12.7712754 9.18643093,12.7804283 C9.68199272,12.7948114 10.1854414,12.7699679 10.6691728,12.8575742 C11.5722258,13.0210188 12.0283529,13.542734 12.0940773,14.4697919 C12.2228971,16.3121397 12.3425155,18.1571026 12.4305861,20.0033731 C12.5410031,22.3033658 13.0365649,24.5249051 13.7516461,26.8405885 C13.8817803,26.6130736 13.969851,26.484933 14.0342609,26.3437169 C16.55019,20.8611305 19.446006,15.5812154 22.6467831,10.4634374 C23.2527618,9.49453763 23.8784579,8.53609836 24.9550232,8 L25.8751644,8 Z M30,21.0773007 C29.7385075,21.0608348 29.4256716,20.9304796 29.2262687,21.0498575 C28.4465672,21.5150195 27.6704478,22.0089968 26.9576119,22.5949089 C26.5719403,22.9118777 26.3152239,23.4360425 26,23.8655284 C26.0334328,23.9094375 26.0680597,23.9547187 26.1014925,24 C26.4370149,23.8518068 26.7892537,23.7434062 27.1032836,23.5513039 C27.959403,23.0271391 28.8143284,22.4961134 29.6334328,21.9005963 C29.8292537,21.760636 29.881791,21.3585933 30,21.0773007 Z" />
      </LogoSvg>
    </LogoWrapper>
  ),
);

export default withTheme(NewsKitLogo);
