import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const ToastOptionsPersistIllustration: React.FC = () => {
  const clip0 = getSSRId();

  const filter0 = getSSRId();
  const filter1 = getSSRId();
  const filter2 = getSSRId();
  const filter3 = getSSRId();

  return (
    <Svg
      width="1490"
      height="838"
      viewBox="0 0 1490 838"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <g clipPath={`url(#${clip0})`}>
        <Path
          d="M0 4.00001C0 1.79087 1.79086 0 4 0H1486.72C1488.93 0 1490.72 1.79086 1490.72 4V834.004C1490.72 836.213 1488.93 838.004 1486.72 838.004H4.00002C1.79088 838.004 0 836.213 0 834.004V4.00001Z"
          fill="illustrationBackground010"
        />
        <g filter={`url(#${filter0})`}>
          <Rect
            x="193"
            y="230"
            width="1105"
            height="301"
            rx="24"
            fill="illustrationBackground010"
          />
          <Rect
            x="197"
            y="234"
            width="1097"
            height="293"
            rx="20"
            stroke="#87A4FC"
            stroke-width="8"
          />
        </g>
        <g filter={`url(#${filter1})`}>
          <Rect
            x="224.891"
            y="260.999"
            width="1039.5"
            height="236.999"
            rx="14.7076"
            fill="illustrationInterface010"
          />
          <Rect
            x="929.57"
            y="367.466"
            width="271.707"
            height="83.8616"
            rx="41.9308"
            fill="illustrationHighlight010"
          />
          <Path
            d="M1033.03 400.046V412.4C1033.03 413.636 1033.34 414.587 1033.94 415.253C1034.55 415.92 1035.44 416.254 1036.62 416.254C1037.8 416.254 1038.7 415.92 1039.33 415.253C1039.95 414.587 1040.27 413.636 1040.27 412.4V400.046H1045.3V412.371C1045.3 414.214 1044.91 415.773 1044.12 417.048C1043.34 418.322 1042.28 419.283 1040.94 419.931C1039.63 420.578 1038.16 420.901 1036.53 420.901C1034.9 420.901 1033.44 420.587 1032.15 419.96C1030.87 419.313 1029.86 418.352 1029.12 417.077C1028.37 415.783 1028 414.214 1028 412.371V400.046H1033.03ZM1058.83 404.105C1060.75 404.105 1062.28 404.733 1063.42 405.988C1064.58 407.223 1065.16 408.929 1065.16 411.106V420.695H1060.16V411.782C1060.16 410.684 1059.87 409.831 1059.3 409.223C1058.73 408.615 1057.97 408.311 1057.01 408.311C1056.05 408.311 1055.28 408.615 1054.71 409.223C1054.14 409.831 1053.86 410.684 1053.86 411.782V420.695H1048.83V404.282H1053.86V406.458C1054.37 405.733 1055.06 405.164 1055.92 404.752C1056.78 404.321 1057.75 404.105 1058.83 404.105ZM1067.65 412.459C1067.65 410.773 1067.96 409.292 1068.59 408.017C1069.24 406.743 1070.11 405.762 1071.21 405.076C1072.31 404.389 1073.53 404.046 1074.89 404.046C1075.97 404.046 1076.95 404.272 1077.83 404.723C1078.73 405.174 1079.44 405.782 1079.95 406.547V398.928H1084.98V420.695H1079.95V418.342C1079.48 419.126 1078.8 419.754 1077.92 420.225C1077.05 420.695 1076.04 420.931 1074.89 420.931C1073.53 420.931 1072.31 420.587 1071.21 419.901C1070.11 419.195 1069.24 418.205 1068.59 416.93C1067.96 415.636 1067.65 414.146 1067.65 412.459ZM1079.95 412.488C1079.95 411.233 1079.59 410.243 1078.89 409.518C1078.2 408.792 1077.36 408.429 1076.36 408.429C1075.36 408.429 1074.5 408.792 1073.8 409.518C1073.11 410.223 1072.77 411.204 1072.77 412.459C1072.77 413.714 1073.11 414.714 1073.8 415.459C1074.5 416.185 1075.36 416.548 1076.36 416.548C1077.36 416.548 1078.2 416.185 1078.89 415.459C1079.59 414.734 1079.95 413.744 1079.95 412.488ZM1096.09 420.931C1094.48 420.931 1093.03 420.587 1091.73 419.901C1090.46 419.215 1089.45 418.234 1088.7 416.96C1087.98 415.685 1087.62 414.195 1087.62 412.488C1087.62 410.802 1087.99 409.321 1088.73 408.047C1089.48 406.752 1090.5 405.762 1091.79 405.076C1093.09 404.389 1094.54 404.046 1096.15 404.046C1097.75 404.046 1099.21 404.389 1100.5 405.076C1101.79 405.762 1102.81 406.752 1103.56 408.047C1104.3 409.321 1104.68 410.802 1104.68 412.488C1104.68 414.175 1104.29 415.665 1103.53 416.96C1102.78 418.234 1101.75 419.215 1100.44 419.901C1099.15 420.587 1097.7 420.931 1096.09 420.931ZM1096.09 416.577C1097.05 416.577 1097.86 416.224 1098.53 415.518C1099.21 414.812 1099.56 413.802 1099.56 412.488C1099.56 411.175 1099.22 410.165 1098.56 409.459C1097.91 408.753 1097.11 408.4 1096.15 408.4C1095.17 408.4 1094.35 408.753 1093.7 409.459C1093.06 410.145 1092.73 411.155 1092.73 412.488C1092.73 413.802 1093.05 414.812 1093.67 415.518C1094.32 416.224 1095.13 416.577 1096.09 416.577Z"
            fill="illustrationInterface010"
          />
        </g>
        <g filter={`url(#${filter2})`}>
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M818.626 506L815.578 501.343C813.497 498.164 809.065 497.004 805.674 498.747L806.464 498.341C805.623 498.773 805.219 499.852 805.566 500.748L809.784 511.663C810.453 513.393 812.161 515.841 813.577 517.07C813.577 517.07 822.064 524.095 822.064 526.728V530.062H835.814H839.574H842.689H846.126V526.728C846.126 524.095 851.313 515.799 851.313 515.799C852.268 514.187 853.063 511.346 853.063 509.46V495.591C853.001 492.52 850.391 490.031 847.17 490.031C845.559 490.031 844.254 491.276 844.254 492.812V493.923C844.254 490.852 841.644 488.363 838.423 488.363C836.812 488.363 835.506 489.608 835.506 491.144V492.255C835.506 489.184 832.896 486.695 829.675 486.695C828.064 486.695 826.759 487.94 826.759 489.476V490.587C826.759 490.093 826.706 489.701 826.604 489.39L825.715 475.067C825.595 473.13 823.962 471.625 822.064 471.625C820.152 471.625 818.626 473.164 818.626 475.062V488.812V506Z"
            fill="white"
          />
          <Path
            d="M853.062 516.893L853.061 516.893L853.059 516.897L853.049 516.912L853.008 516.978C852.972 517.037 852.918 517.124 852.85 517.237C852.712 517.462 852.514 517.789 852.276 518.19C851.799 518.993 851.165 520.086 850.535 521.255C849.9 522.431 849.286 523.651 848.836 524.714C848.611 525.246 848.439 525.709 848.327 526.088C848.271 526.276 848.234 526.429 848.212 526.547C848.202 526.605 848.196 526.649 848.192 526.682C848.189 526.715 848.189 526.729 848.189 526.728V530.062V532.125H846.126H842.689H839.574H835.814H822.064H820.001V530.062V526.806C819.99 526.77 819.956 526.676 819.871 526.512C819.716 526.216 819.463 525.832 819.106 525.37C818.394 524.449 817.408 523.399 816.374 522.382C815.349 521.375 814.319 520.442 813.541 519.757C813.153 519.416 812.83 519.139 812.606 518.948C812.493 518.853 812.406 518.779 812.347 518.73L812.281 518.675L812.265 518.662L812.262 518.659L812.262 518.659L853.062 516.893ZM853.062 516.893L853.062 516.893L853.062 516.892L853.075 516.871L853.087 516.85C853.686 515.839 854.185 514.541 854.534 513.284C854.882 512.027 855.126 510.651 855.126 509.46V495.591V495.57L855.125 495.549C855.039 491.289 851.446 487.969 847.17 487.969C846.126 487.969 845.134 488.289 844.313 488.847C842.853 487.273 840.731 486.301 838.423 486.301C837.379 486.301 836.386 486.621 835.566 487.179C834.105 485.605 831.984 484.633 829.675 484.633C829.233 484.633 828.8 484.69 828.386 484.799L827.773 474.939C827.585 471.907 825.044 469.562 822.064 469.562C819.008 469.562 816.564 472.029 816.564 475.062V488.812V499.233C813.892 496.146 809.35 495.029 805.541 496.544L805.521 496.506C805.521 496.507 805.52 496.507 805.519 496.507L804.733 496.911C804.732 496.912 804.732 496.912 804.731 496.912L804.779 497.005C803.516 498.086 803.031 499.912 803.642 501.492L805.566 500.748L803.642 501.492L807.861 512.407C808.649 514.447 810.552 517.175 812.224 518.627L812.243 518.643L812.261 518.659L853.062 516.893Z"
            stroke="black"
            stroke-width="4.125"
          />
        </g>
        <g filter={`url(#${filter3})`}>
          <Rect
            x="536"
            y="609"
            width="411"
            height="143"
            rx="71.5"
            fill="illustrationInterface010"
          />
        </g>
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M740.691 659.5V641.5H745.191C767.556 641.5 785.691 659.635 785.691 682C785.691 704.365 767.556 722.5 745.191 722.5C722.781 722.5 704.691 704.365 704.691 682C704.691 668.725 711.081 657.025 720.936 649.645V649.555L751.536 680.155L745.191 686.5L720.801 662.11C716.346 667.51 713.691 674.44 713.691 682C713.691 699.415 727.776 713.5 745.191 713.5C762.606 713.5 776.691 699.415 776.691 682C776.691 666.115 764.946 653.065 749.691 650.86V659.5H740.691ZM745.191 709C742.716 709 740.691 706.975 740.691 704.5C740.691 702.025 742.716 700 745.191 700C747.666 700 749.691 702.025 749.691 704.5C749.691 706.975 747.666 709 745.191 709ZM772.191 682C772.191 679.525 770.166 677.5 767.691 677.5C765.216 677.5 763.191 679.525 763.191 682C763.191 684.475 765.216 686.5 767.691 686.5C770.166 686.5 772.191 684.475 772.191 682ZM722.691 686.5C720.216 686.5 718.191 684.475 718.191 682C718.191 679.525 720.216 677.5 722.691 677.5C725.166 677.5 727.191 679.525 727.191 682C727.191 684.475 725.166 686.5 722.691 686.5Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M633.62 661.164C634.277 660.263 633.633 658.997 632.518 658.997L606.073 658.997C604.958 658.997 604.314 660.263 604.971 661.164L618.194 679.307C618.738 680.054 619.852 680.054 620.396 679.307L633.62 661.164Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M633.62 685.712C634.277 684.811 633.633 683.545 632.518 683.545L606.073 683.545C604.958 683.545 604.314 684.811 604.971 685.712L618.194 703.855C618.738 704.602 619.852 704.602 620.396 703.855L633.62 685.712Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M884.69 661.164C885.347 660.263 884.704 658.997 883.589 658.997L857.143 658.997C856.028 658.997 855.385 660.263 856.041 661.164L869.264 679.307C869.808 680.054 870.922 680.054 871.467 679.307L884.69 661.164Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M884.69 685.712C885.347 684.811 884.704 683.545 883.589 683.545L857.143 683.545C856.028 683.545 855.385 684.811 856.041 685.712L869.264 703.855C869.808 704.602 870.922 704.602 871.467 703.855L884.69 685.712Z"
          fill="illustrationHighlight010"
        />
        <Rect
          x="294.857"
          y="328.999"
          width="420.426"
          height="20"
          rx="10"
          fill="illustrationInterface030"
        />
        <Rect
          x="294.857"
          y="373.606"
          width="560.729"
          height="20"
          rx="10"
          fill="illustrationInterface020"
        />
        <Rect
          x="294.857"
          y="417.606"
          width="560.729"
          height="20"
          rx="10"
          fill="illustrationInterface020"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="169"
          y="206"
          width="1153"
          height="349"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset />
          <feGaussianBlur stdDeviation="12" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0.529412 0 0 0 0 0.63549 0 0 0 0 0.988235 0 0 0 0.6 0"
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
          x="215.086"
          y="256.096"
          width="1059.11"
          height="256.609"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="4.90254" />
          <feGaussianBlur stdDeviation="4.90254" />
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
          id={filter2}
          x="791.004"
          y="460.625"
          width="76.4962"
          height="87.3125"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          />
          <feOffset dy="3.4375" />
          <feGaussianBlur stdDeviation="5.15625" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.2 0"
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
          id={filter3}
          x="520"
          y="601"
          width="443"
          height="175"
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
          <Rect width="1490" height="838" fill="white" />
        </clipPath>
      </defs>
    </Svg>
  );
};
export default ToastOptionsPersistIllustration;
