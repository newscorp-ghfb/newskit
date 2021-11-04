import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const DrawerBehavioursContentOverflowIllustration: React.FC = () => {
  const clip0 = getSSRId();
  const clip1 = getSSRId();

  const filter0 = getSSRId();
  const filter1 = getSSRId();

  return (
    <Svg
      width="1491"
      height="839"
      viewBox="0 0 1491 839"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path
          d="M0 4.00001C0 1.79087 1.79086 0 4 0H1486.72C1488.93 0 1490.72 1.79086 1490.72 4V834.004C1490.72 836.213 1488.93 838.004 1486.72 838.004H4.00002C1.79088 838.004 0 836.213 0 834.004V4.00001Z"
          fill="illustrationBackground010"
        />
        <Path
          d="M1012 217.834C1012 214.06 1008.94 211 1005.17 211H485.834C482.06 211 479 214.06 479 217.834V975.166C479 978.94 482.06 982 485.834 982H1005.17C1008.94 982 1012 978.94 1012 975.166V217.834Z"
          fill="illustrationInterface020"
        />
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1005.17 982C1005.9 982 1006.61 981.883 1007.28 981.667C1007.76 981.511 1008.22 981.303 1008.65 981.049C1009.08 980.789 1009.49 980.482 1009.86 980.135C1009.16 978.954 1007.71 978.372 1006.35 978.814C1005.98 978.934 1005.58 979 1005.17 979H997.176C995.519 979 994.176 980.343 994.176 982H1005.17ZM954.227 982C954.227 980.343 955.571 979 957.227 979H973.207C974.864 979 976.207 980.343 976.207 982H954.227ZM914.279 982C914.279 980.343 915.622 979 917.279 979H933.258C934.915 979 936.258 980.343 936.258 982H914.279ZM874.33 982C874.33 980.343 875.673 979 877.33 979H893.31C894.967 979 896.31 980.343 896.31 982H874.33ZM834.382 982C834.382 980.343 835.725 979 837.382 979H853.361C855.018 979 856.361 980.343 856.361 982H834.382ZM794.433 982C794.433 980.343 795.776 979 797.433 979H813.413C815.069 979 816.413 980.343 816.413 982H794.433ZM754.485 982C754.485 980.343 755.828 979 757.485 979H773.464C775.121 979 776.464 980.343 776.464 982H754.485ZM714.536 982C714.536 980.343 715.879 979 717.536 979H733.515C735.172 979 736.515 980.343 736.515 982H714.536ZM674.587 982C674.587 980.343 675.931 979 677.587 979H693.567C695.224 979 696.567 980.343 696.567 982H674.587ZM634.639 982C634.639 980.343 635.982 979 637.639 979H653.618C655.275 979 656.618 980.343 656.618 982H634.639ZM594.69 982C594.69 980.343 596.033 979 597.69 979H613.67C615.327 979 616.67 980.343 616.67 982H594.69ZM554.742 982C554.742 980.343 556.085 979 557.742 979H573.721C575.378 979 576.721 980.343 576.721 982H554.742ZM514.793 982C514.793 980.343 516.136 979 517.793 979H533.773C535.429 979 536.773 980.343 536.773 982H514.793ZM481.142 980.135C481.842 978.954 483.288 978.372 484.648 978.814C485.018 978.934 485.415 979 485.834 979H493.824C495.481 979 496.824 980.343 496.824 982H485.834C485.097 982 484.387 981.883 483.722 981.667C483.24 981.511 482.783 981.303 482.355 981.049C481.917 980.789 481.51 980.482 481.142 980.135ZM479 964.194C480.657 964.194 482 965.537 482 967.194V975.166C482 975.585 482.066 975.982 482.186 976.352C482.628 977.712 482.046 979.158 480.865 979.858C480.518 979.49 480.211 979.083 479.951 978.645C479.697 978.217 479.489 977.76 479.333 977.278C479.117 976.613 479 975.903 479 975.166V964.194ZM479 924.334C480.657 924.334 482 925.677 482 927.334V943.278C482 944.935 480.657 946.278 479 946.278V924.334ZM479 884.475C480.657 884.475 482 885.818 482 887.475V903.418C482 905.075 480.657 906.418 479 906.418V884.475ZM479 844.615C480.657 844.615 482 845.958 482 847.615V863.559C482 865.216 480.657 866.559 479 866.559V844.615ZM479 804.756C480.657 804.756 482 806.099 482 807.756V823.699C482 825.356 480.657 826.699 479 826.699V804.756ZM479 764.896C480.657 764.896 482 766.239 482 767.896V783.84C482 785.497 480.657 786.84 479 786.84V764.896ZM479 725.037C480.657 725.037 482 726.38 482 728.037V743.98C482 745.637 480.657 746.98 479 746.98V725.037ZM479 685.177C480.657 685.177 482 686.52 482 688.177V704.121C482 705.778 480.657 707.121 479 707.121V685.177ZM479 645.317C480.657 645.317 482 646.661 482 648.317V664.261C482 665.918 480.657 667.261 479 667.261V645.317ZM479 605.458C480.657 605.458 482 606.801 482 608.458V624.402C482 626.059 480.657 627.402 479 627.402V605.458ZM479 565.598C480.657 565.598 482 566.941 482 568.598V584.542C482 586.199 480.657 587.542 479 587.542V565.598ZM479 525.739C480.657 525.739 482 527.082 482 528.739V544.683C482 546.339 480.657 547.683 479 547.683V525.739ZM479 485.879C480.657 485.879 482 487.222 482 488.879V504.823C482 506.48 480.657 507.823 479 507.823V485.879ZM479 446.02C480.657 446.02 482 447.363 482 449.02V464.964C482 466.62 480.657 467.964 479 467.964V446.02ZM479 406.16C480.657 406.16 482 407.503 482 409.16V425.104C482 426.761 480.657 428.104 479 428.104V406.16ZM479 366.301C480.657 366.301 482 367.644 482 369.301V385.244C482 386.901 480.657 388.244 479 388.244V366.301ZM479 326.441C480.657 326.441 482 327.784 482 329.441V345.385C482 347.042 480.657 348.385 479 348.385V326.441ZM479 286.582C480.657 286.582 482 287.925 482 289.582V305.525C482 307.182 480.657 308.525 479 308.525V286.582ZM479 246.722C480.657 246.722 482 248.065 482 249.722V265.666C482 267.323 480.657 268.666 479 268.666V246.722ZM480.865 213.142C482.046 213.842 482.628 215.288 482.186 216.648C482.066 217.018 482 217.415 482 217.834V225.806C482 227.463 480.657 228.806 479 228.806V217.834C479 217.097 479.117 216.387 479.333 215.722C479.489 215.24 479.697 214.783 479.951 214.355C480.211 213.917 480.518 213.51 480.865 213.142ZM496.824 211C496.824 212.657 495.481 214 493.824 214H485.834C485.415 214 485.018 214.066 484.648 214.186C483.288 214.628 481.842 214.046 481.142 212.865C481.51 212.518 481.917 212.211 482.355 211.951C482.783 211.697 483.24 211.489 483.722 211.333M496.824 211H495.324H496.824ZM536.773 211C536.773 212.657 535.429 214 533.773 214H517.793C516.136 214 514.793 212.657 514.793 211H536.773ZM576.721 211C576.721 212.657 575.378 214 573.721 214H557.742C556.085 214 554.742 212.657 554.742 211H576.721ZM616.67 211C616.67 212.657 615.327 214 613.67 214H597.69C596.033 214 594.69 212.657 594.69 211H616.67ZM656.618 211C656.618 212.657 655.275 214 653.618 214H637.639C635.982 214 634.639 212.657 634.639 211H656.618ZM696.567 211C696.567 212.657 695.224 214 693.567 214H677.587C675.931 214 674.587 212.657 674.587 211H696.567ZM736.515 211C736.515 212.657 735.172 214 733.515 214H717.536C715.879 214 714.536 212.657 714.536 211H736.515ZM776.464 211C776.464 212.657 775.121 214 773.464 214H757.485C755.828 214 754.485 212.657 754.485 211H776.464ZM816.413 211C816.413 212.657 815.069 214 813.413 214H797.433C795.776 214 794.433 212.657 794.433 211H816.413ZM856.361 211C856.361 212.657 855.018 214 853.361 214H837.382C835.725 214 834.382 212.657 834.382 211H856.361ZM896.31 211C896.31 212.657 894.967 214 893.31 214H877.33C875.673 214 874.33 212.657 874.33 211H896.31ZM936.258 211C936.258 212.657 934.915 214 933.258 214H917.279C915.622 214 914.279 212.657 914.279 211H936.258ZM976.207 211C976.207 212.657 974.864 214 973.207 214H957.227C955.571 214 954.227 212.657 954.227 211H976.207ZM994.176 211C994.176 212.657 995.519 214 997.176 214H1005.17C1005.58 214 1005.98 214.066 1006.35 214.186C1007.71 214.628 1009.16 214.046 1009.86 212.865C1009.49 212.518 1009.08 212.211 1008.65 211.951C1008.22 211.697 1007.76 211.489 1007.28 211.333C1006.61 211.117 1005.9 211 1005.17 211H994.176ZM1012 228.806C1010.34 228.806 1009 227.463 1009 225.806V217.834C1009 217.415 1008.93 217.018 1008.81 216.648C1008.37 215.288 1008.95 213.842 1010.13 213.142C1010.48 213.51 1010.79 213.917 1011.05 214.355C1011.3 214.783 1011.51 215.24 1011.67 215.722C1011.88 216.387 1012 217.097 1012 217.834V228.806ZM1012 268.666C1010.34 268.666 1009 267.323 1009 265.666V249.722C1009 248.065 1010.34 246.722 1012 246.722V268.666ZM1012 308.525C1010.34 308.525 1009 307.182 1009 305.525V289.582C1009 287.925 1010.34 286.582 1012 286.582V308.525ZM1012 348.385C1010.34 348.385 1009 347.042 1009 345.385V329.441C1009 327.784 1010.34 326.441 1012 326.441V348.385ZM1012 388.244C1010.34 388.244 1009 386.901 1009 385.244V369.301C1009 367.644 1010.34 366.301 1012 366.301V388.244ZM1012 428.104C1010.34 428.104 1009 426.761 1009 425.104V409.16C1009 407.503 1010.34 406.16 1012 406.16V428.104ZM1012 467.963C1010.34 467.963 1009 466.62 1009 464.963V449.02C1009 447.363 1010.34 446.02 1012 446.02V467.963ZM1012 507.823C1010.34 507.823 1009 506.48 1009 504.823V488.879C1009 487.222 1010.34 485.879 1012 485.879V507.823ZM1012 547.683C1010.34 547.683 1009 546.339 1009 544.683V528.739C1009 527.082 1010.34 525.739 1012 525.739V547.683ZM1012 587.542C1010.34 587.542 1009 586.199 1009 584.542V568.598C1009 566.941 1010.34 565.598 1012 565.598V587.542ZM1012 627.402C1010.34 627.402 1009 626.059 1009 624.402V608.458C1009 606.801 1010.34 605.458 1012 605.458V627.402ZM1012 667.261C1010.34 667.261 1009 665.918 1009 664.261V648.317C1009 646.661 1010.34 645.317 1012 645.317V667.261ZM1012 707.121C1010.34 707.121 1009 705.778 1009 704.121V688.177C1009 686.52 1010.34 685.177 1012 685.177V707.121ZM1012 746.98C1010.34 746.98 1009 745.637 1009 743.98V728.036C1009 726.38 1010.34 725.036 1012 725.036V746.98ZM1012 786.84C1010.34 786.84 1009 785.497 1009 783.84V767.896C1009 766.239 1010.34 764.896 1012 764.896V786.84ZM1012 826.699C1010.34 826.699 1009 825.356 1009 823.699V807.756C1009 806.099 1010.34 804.756 1012 804.756V826.699ZM1012 866.559C1010.34 866.559 1009 865.216 1009 863.559V847.615C1009 845.958 1010.34 844.615 1012 844.615V866.559ZM1012 906.418C1010.34 906.418 1009 905.075 1009 903.418V887.475C1009 885.818 1010.34 884.475 1012 884.475V906.418ZM1012 946.278C1010.34 946.278 1009 944.935 1009 943.278V927.334C1009 925.677 1010.34 924.334 1012 924.334V946.278Z"
          fill="illustrationInterface030"
        />
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="418.662"
            height="12.9445"
            rx="6.47223"
            transform="matrix(-1 0 0 1 940.662 257.475)"
            fill="illustrationInterface020"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="418.662"
            height="12.9445"
            rx="6.47224"
            transform="matrix(-1 0 0 1 940.662 480.408)"
            fill="illustrationInterface020"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="418.662"
            height="14.3827"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.662 291.994)"
            fill="illustrationInterface020"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="418.662"
            height="14.3828"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.662 327.951)"
            fill="illustrationInterface020"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="418.674"
            height="104.966"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.938 513.26)"
            fill="illustrationInterface020"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="418.662"
            height="14.3827"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.662 634.221)"
            fill="illustrationInterface020"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="418.662"
            height="14.3828"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.938 221.519)"
            fill="illustrationInterface020"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="418.662"
            height="14.3828"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.938 444.451)"
            fill="illustrationInterface020"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="211.377"
            height="12.9445"
            rx="6.47224"
            transform="matrix(-1 0 0 1 733.932 187)"
            fill="illustrationInterface030"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="211.377"
            height="12.9445"
            rx="6.47223"
            transform="matrix(-1 0 0 1 733.932 411.371)"
            fill="illustrationInterface030"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="418.662"
            height="12.9445"
            rx="6.47223"
            transform="matrix(-1 0 0 1 943.724 768.675)"
            fill="illustrationInterface020"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="418.662"
            height="14.3828"
            rx="6.86695"
            transform="matrix(-1 0 0 1 943.724 803.195)"
            fill="illustrationInterface020"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="418.662"
            height="14.3828"
            rx="6.86695"
            transform="matrix(-1 0 0 1 944 732.719)"
            fill="illustrationInterface020"
          />
        </g>
        <g style={{mixBlendMode: 'multiply'}} opacity="0.6">
          <Rect
            width="211.377"
            height="12.9445"
            rx="6.47226"
            transform="matrix(-1 0 0 1 736.994 698.2)"
            fill="illustrationInterface030"
          />
        </g>
        <Rect
          x="479"
          y="-158"
          width="1255.34"
          height="769.852"
          rx="22.1939"
          fill="illustrationInterface020"
        />
        <g clipPath={`url(#${clip1})`}>
          <g filter={`url(#${filter0})`}>
            <Rect
              width="533"
              height="771"
              rx="9.12769"
              transform="matrix(-1 0 0 1 1012 -159)"
              fill="illustrationInterface010"
            />
          </g>
          <Rect
            width="418.662"
            height="12.9445"
            rx="6.47223"
            transform="matrix(-1 0 0 1 940.662 57.4753)"
            fill="illustrationInterface020"
          />
          <Rect
            width="418.662"
            height="12.9445"
            rx="6.47224"
            transform="matrix(-1 0 0 1 940.662 280.408)"
            fill="illustrationInterface020"
          />
          <Rect
            width="418.662"
            height="14.3827"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.662 91.9944)"
            fill="illustrationInterface020"
          />
          <Rect
            width="418.662"
            height="14.3828"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.662 127.951)"
            fill="illustrationInterface020"
          />
          <Rect
            width="418.674"
            height="104.966"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.938 313.26)"
            fill="illustrationInterface020"
          />
          <Rect
            width="418.662"
            height="14.3827"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.662 434.221)"
            fill="illustrationInterface020"
          />
          <Rect
            width="418.662"
            height="14.3828"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.938 21.5186)"
            fill="illustrationInterface020"
          />
          <Rect
            width="418.662"
            height="14.3828"
            rx="6.86695"
            transform="matrix(-1 0 0 1 940.938 244.451)"
            fill="illustrationInterface020"
          />
          <Rect
            width="211.377"
            height="12.9445"
            rx="6.47223"
            transform="matrix(-1 0 0 1 733.932 211.371)"
            fill="illustrationInterface030"
          />
          <Rect
            width="418.662"
            height="12.9445"
            rx="6.47223"
            transform="matrix(-1 0 0 1 943.724 568.675)"
            fill="illustrationInterface020"
          />
          <Rect
            width="418.662"
            height="14.3828"
            rx="6.86695"
            transform="matrix(-1 0 0 1 943.724 603.195)"
            fill="illustrationInterface020"
          />
          <Rect
            width="418.662"
            height="14.3828"
            rx="6.86695"
            transform="matrix(-1 0 0 1 944 532.719)"
            fill="illustrationInterface020"
          />
          <Rect
            width="211.377"
            height="12.9445"
            rx="6.47226"
            transform="matrix(-1 0 0 1 736.994 498.2)"
            fill="illustrationInterface030"
          />
          <Rect
            x="988.45"
            y="407.427"
            width="262"
            height="6.55015"
            rx="3.27508"
            transform="rotate(-90 988.45 407.427)"
            fill="illustrationInterface040"
          />
          <Rect
            x="988.45"
            y="309.175"
            width="65.4954"
            height="6.55015"
            rx="3.27508"
            transform="rotate(-90 988.45 309.175)"
            fill="illustrationInterface100"
          />
        </g>
        <g filter={`url(#${filter1})`}>
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M990.308 314.143L987.418 309.728C985.445 306.714 981.243 305.614 978.028 307.267L978.777 306.882C977.98 307.292 977.597 308.314 977.926 309.164L981.925 319.512C982.559 321.153 984.179 323.473 985.521 324.638C985.521 324.638 993.567 331.298 993.567 333.795V336.956H1006.6H1010.17H1013.12H1016.38V333.795C1016.38 331.298 1021.3 323.433 1021.3 323.433C1022.2 321.905 1022.96 319.212 1022.96 317.424V304.274C1022.9 301.363 1020.42 299.004 1017.37 299.004C1015.84 299.004 1014.6 300.184 1014.6 301.64V302.693C1014.6 299.782 1012.13 297.423 1009.08 297.423C1007.55 297.423 1006.31 298.602 1006.31 300.059V301.112C1006.31 298.201 1003.84 295.841 1000.78 295.841C999.256 295.841 998.018 297.021 998.018 298.477V299.53C998.018 299.063 997.968 298.691 997.872 298.396L997.028 284.817C996.914 282.98 995.367 281.554 993.567 281.554C991.754 281.554 990.308 283.013 990.308 284.812V297.848V314.143Z"
            fill="white"
          />
          <Path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M978.802 306.928C981.389 305.981 984.415 306.637 986.397 308.51C986.78 308.872 987.124 309.279 987.419 309.729L990.308 314.143V284.812C990.308 283.013 991.754 281.554 993.567 281.554C995.367 281.554 996.914 282.98 997.028 284.817L997.872 298.396C997.881 298.423 997.889 298.45 997.897 298.477C997.977 298.758 998.018 299.105 998.018 299.531V298.477C998.018 298.447 998.019 298.417 998.02 298.387C998.021 298.374 998.021 298.36 998.022 298.347C998.093 296.951 999.302 295.841 1000.78 295.841C1001.07 295.841 1001.36 295.863 1001.64 295.904C1002.29 296 1002.91 296.206 1003.46 296.501C1004.85 297.237 1005.88 298.527 1006.2 300.059C1006.27 300.399 1006.31 300.751 1006.31 301.112V300.059C1006.31 298.602 1007.55 297.423 1009.08 297.423C1009.2 297.423 1009.32 297.426 1009.44 297.434C1010.28 297.486 1011.06 297.715 1011.76 298.083C1013.15 298.818 1014.17 300.109 1014.49 301.64C1014.57 301.98 1014.6 302.333 1014.6 302.693V301.64C1014.6 300.184 1015.84 299.004 1017.37 299.004C1017.49 299.004 1017.61 299.008 1017.73 299.015C1020.62 299.195 1022.9 301.48 1022.96 304.275V317.424C1022.96 319.212 1022.2 321.905 1021.3 323.434C1021.3 323.434 1016.38 331.298 1016.38 333.795V336.956H993.567V333.795C993.567 331.298 985.521 324.638 985.521 324.638C984.179 323.473 982.559 321.153 981.925 319.512L977.926 309.164C977.707 308.597 977.804 307.953 978.131 307.465C978.242 307.299 978.38 307.151 978.541 307.03C978.627 306.994 978.714 306.96 978.802 306.928ZM978.029 307.267C978.197 307.18 978.368 307.101 978.541 307.03C978.615 306.974 978.694 306.925 978.778 306.882L978.029 307.267ZM976.269 303.845C974.176 305.356 973.345 308.159 974.278 310.574L978.278 320.922C979.139 323.151 981.128 326.003 982.956 327.591L982.991 327.621L983.026 327.65L983.027 327.651L983.041 327.663L983.099 327.711C983.152 327.755 983.231 327.822 983.334 327.909C983.54 328.084 983.837 328.339 984.195 328.655C984.916 329.288 985.865 330.148 986.803 331.069C987.758 332.008 988.62 332.932 989.216 333.703C989.421 333.968 989.563 334.175 989.656 334.325V340.867H1020.29V333.862C1020.29 333.878 1020.29 333.887 1020.29 333.887C1020.31 333.889 1020.38 333.521 1020.75 332.648C1021.14 331.721 1021.69 330.625 1022.28 329.535C1022.86 328.457 1023.45 327.445 1023.89 326.698C1024.11 326.326 1024.3 326.024 1024.42 325.816C1024.49 325.713 1024.53 325.633 1024.57 325.58L1024.6 325.522L1024.61 325.507L1024.64 325.467L1024.66 325.426C1025.34 324.273 1025.87 322.869 1026.23 321.571C1026.59 320.276 1026.87 318.787 1026.87 317.424V304.235L1026.87 304.195C1026.76 299.03 1022.42 295.093 1017.37 295.093C1016.54 295.093 1015.73 295.247 1014.98 295.531C1013.34 294.257 1011.27 293.512 1009.08 293.512C1008.25 293.512 1007.44 293.665 1006.69 293.95C1005.2 292.794 1003.35 292.073 1001.39 291.95L1000.93 284.574C1000.69 280.662 997.419 277.643 993.567 277.643C989.586 277.643 986.397 280.862 986.397 284.812V303.796C983.518 302.362 980.053 302.158 977.005 303.433M989.789 334.568C989.788 334.567 989.781 334.553 989.771 334.526C989.785 334.555 989.79 334.568 989.789 334.568ZM976.269 303.845L976.241 303.789L976.99 303.404"
            fill="black"
          />
        </g>
        <Path
          fillRule="evenodd"
          clipRule="evenodd"
          d="M1520.5 627L1520.5 -58.2289L510.687 -58.2289C485.456 -58.2289 465.002 -37.7742 465.002 -12.5421L465.001 581.313C465.001 606.545 485.456 627 510.687 627L1520.5 627ZM1505.27 611.771L510.687 611.771C493.866 611.771 480.23 598.135 480.23 581.313L480.23 -12.5421C480.23 -29.3635 493.866 -43 510.687 -43L1505.27 -43L1505.27 611.771Z"
          fill="illustrationInterface030"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="466.83"
          y="-165.085"
          width="557.341"
          height="795.341"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="6.08513" />
          <feGaussianBlur stdDeviation="6.08513" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <filter
          id={filter1}
          x="932"
          y="254"
          width="136.287"
          height="136.287"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="8" />
          <feGaussianBlur stdDeviation="8" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0 0.0392157 0 0 0 0.08 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow"
            result="shape"
          />
        </filter>
        <clipPath id={clip0}>
          <Rect width="1490.72" height="838.004" fill="white" />
        </clipPath>
        <clipPath id={clip1}>
          <Rect
            width="533"
            height="771"
            rx="8"
            transform="matrix(-1 0 0 1 1012 -159)"
            fill="white"
          />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default DrawerBehavioursContentOverflowIllustration;
