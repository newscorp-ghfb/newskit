import React from 'react';
import {getSSRId} from 'newskit';
import {Svg} from '../../svg';
import {Path} from '../../path';
import {Rect} from '../../rect';

export const ToastDo3Illustration: React.FC = () => {
  const clip0 = getSSRId();

  const filter0 = getSSRId();

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
            x="228.889"
            y="300.999"
            width="1030.5"
            height="234.999"
            rx="17.3496"
            fill="illustrationInterface010"
          />
          <Rect
            x="933.549"
            y="393.998"
            width="269.356"
            height="83.1535"
            rx="41.5768"
            fill="illustrationHighlight010"
          />
          <Path
            d="M1029.87 423.639V438.213C1029.87 439.67 1030.23 440.792 1030.95 441.579C1031.66 442.365 1032.72 442.758 1034.1 442.758C1035.49 442.758 1036.56 442.365 1037.3 441.579C1038.04 440.792 1038.41 439.67 1038.41 438.213V423.639H1044.34V438.178C1044.34 440.353 1043.88 442.192 1042.95 443.695C1042.03 445.199 1040.78 446.332 1039.2 447.096C1037.65 447.859 1035.92 448.241 1034 448.241C1032.08 448.241 1030.36 447.871 1028.83 447.131C1027.33 446.367 1026.13 445.234 1025.26 443.73C1024.38 442.203 1023.94 440.353 1023.94 438.178V423.639H1029.87ZM1060.3 428.428C1062.57 428.428 1064.38 429.168 1065.72 430.648C1067.08 432.106 1067.76 434.118 1067.76 436.686V447.998H1061.87V437.484C1061.87 436.189 1061.53 435.182 1060.86 434.465C1060.19 433.748 1059.29 433.39 1058.15 433.39C1057.02 433.39 1056.12 433.748 1055.45 434.465C1054.78 435.182 1054.44 436.189 1054.44 437.484V447.998H1048.51V428.636H1054.44V431.204C1055.04 430.348 1055.85 429.677 1056.87 429.191C1057.89 428.682 1059.03 428.428 1060.3 428.428ZM1070.71 438.282C1070.71 436.293 1071.08 434.546 1071.82 433.043C1072.58 431.539 1073.61 430.382 1074.91 429.573C1076.2 428.763 1077.65 428.358 1079.24 428.358C1080.52 428.358 1081.67 428.624 1082.71 429.156C1083.78 429.688 1084.61 430.406 1085.21 431.308V422.321H1091.15V447.998H1085.21V445.222C1084.66 446.147 1083.86 446.888 1082.82 447.443C1081.8 447.998 1080.61 448.276 1079.24 448.276C1077.65 448.276 1076.2 447.871 1074.91 447.061C1073.61 446.228 1072.58 445.06 1071.82 443.557C1071.08 442.03 1070.71 440.272 1070.71 438.282ZM1085.21 438.317C1085.21 436.836 1084.8 435.668 1083.96 434.812C1083.15 433.956 1082.16 433.528 1080.98 433.528C1079.8 433.528 1078.79 433.956 1077.96 434.812C1077.15 435.645 1076.75 436.802 1076.75 438.282C1076.75 439.763 1077.15 440.943 1077.96 441.822C1078.79 442.678 1079.8 443.105 1080.98 443.105C1082.16 443.105 1083.15 442.678 1083.96 441.822C1084.8 440.966 1085.21 439.797 1085.21 438.317ZM1104.25 448.276C1102.36 448.276 1100.64 447.871 1099.12 447.061C1097.61 446.252 1096.42 445.095 1095.54 443.591C1094.69 442.088 1094.26 440.33 1094.26 438.317C1094.26 436.328 1094.7 434.581 1095.58 433.077C1096.46 431.551 1097.66 430.382 1099.19 429.573C1100.71 428.763 1102.42 428.358 1104.32 428.358C1106.22 428.358 1107.93 428.763 1109.46 429.573C1110.98 430.382 1112.19 431.551 1113.07 433.077C1113.94 434.581 1114.38 436.328 1114.38 438.317C1114.38 440.306 1113.93 442.064 1113.03 443.591C1112.15 445.095 1110.94 446.252 1109.39 447.061C1107.86 447.871 1106.15 448.276 1104.25 448.276ZM1104.25 443.14C1105.39 443.14 1106.35 442.724 1107.13 441.891C1107.94 441.058 1108.35 439.867 1108.35 438.317C1108.35 436.767 1107.95 435.576 1107.17 434.743C1106.4 433.91 1105.46 433.494 1104.32 433.494C1103.17 433.494 1102.21 433.91 1101.44 434.743C1100.68 435.553 1100.3 436.744 1100.3 438.317C1100.3 439.867 1100.67 441.058 1101.41 441.891C1102.17 442.724 1103.12 443.14 1104.25 443.14Z"
            fill="illustrationInterface010"
          />
          <Path
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M294.857 369.97C294.857 364.462 299.322 359.998 304.829 359.998H724.048C729.555 359.998 734.019 364.462 734.019 369.97C734.019 375.477 729.555 379.941 724.048 379.941H304.829C299.322 379.941 294.857 375.477 294.857 369.97ZM294.857 418.368C294.857 413.062 299.158 408.761 304.464 408.761H870.968C876.273 408.761 880.574 413.062 880.574 418.368C880.574 423.673 876.273 427.974 870.968 427.974H304.464C299.158 427.974 294.857 423.673 294.857 418.368ZM305.064 456.794C299.427 456.794 294.857 461.364 294.857 467.001C294.857 472.638 299.427 477.208 305.064 477.208H870.367C876.005 477.208 880.574 472.638 880.574 467.001C880.574 461.364 876.005 456.794 870.367 456.794H305.064Z"
            fill="illustrationInterface020"
          />
        </g>
        <Path
          d="M482.368 706.924C477.364 706.924 472.765 705.763 468.57 703.439C464.426 701.116 461.115 697.884 458.639 693.742C456.213 689.55 455 684.854 455 679.652C455 674.449 456.213 669.778 458.639 665.636C461.115 661.495 464.426 658.263 468.57 655.939C472.765 653.616 477.364 652.455 482.368 652.455C487.371 652.455 491.945 653.616 496.09 655.939C500.285 658.263 503.57 661.495 505.945 665.636C508.371 669.778 509.584 674.449 509.584 679.652C509.584 684.854 508.371 689.55 505.945 693.742C503.519 697.884 500.234 701.116 496.09 703.439C491.945 705.763 487.371 706.924 482.368 706.924ZM482.368 695.106C486.613 695.106 489.999 693.692 492.527 690.864C495.104 688.035 496.393 684.298 496.393 679.652C496.393 674.955 495.104 671.217 492.527 668.439C489.999 665.611 486.613 664.197 482.368 664.197C478.072 664.197 474.635 665.586 472.058 668.364C469.53 671.141 468.267 674.904 468.267 679.652C468.267 684.348 469.53 688.111 472.058 690.939C474.635 693.717 478.072 695.106 482.368 695.106Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M538.023 674.879H531.049V706.394H518.085V674.879H513.385V664.121H518.085V662.909C518.085 657.707 519.576 653.768 522.558 651.091C525.54 648.364 529.911 647 535.673 647C536.633 647 537.341 647.025 537.796 647.076V658.061C535.319 657.909 533.576 658.263 532.565 659.121C531.554 659.98 531.049 661.52 531.049 663.742V664.121H538.023V674.879Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M565.342 674.879H558.367V706.394H545.404V674.879H540.703V664.121H545.404V662.909C545.404 657.707 546.895 653.768 549.876 651.091C552.858 648.364 557.23 647 562.992 647C563.952 647 564.66 647.025 565.115 647.076V658.061C562.638 657.909 560.894 658.263 559.884 659.121C558.873 659.98 558.367 661.52 558.367 663.742V664.121H565.342V674.879Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M588.643 707C584.953 707 581.668 706.369 578.787 705.106C575.906 703.843 573.632 702.126 571.964 699.955C570.296 697.732 569.361 695.258 569.159 692.53H581.971C582.123 693.995 582.805 695.182 584.018 696.091C585.231 697 586.722 697.455 588.491 697.455C590.108 697.455 591.347 697.152 592.206 696.545C593.115 695.889 593.57 695.056 593.57 694.045C593.57 692.833 592.939 691.949 591.675 691.394C590.412 690.788 588.365 690.131 585.534 689.424C582.502 688.717 579.975 687.985 577.953 687.227C575.932 686.419 574.188 685.182 572.722 683.515C571.257 681.798 570.524 679.5 570.524 676.621C570.524 674.197 571.181 672 572.495 670.03C573.859 668.01 575.831 666.419 578.408 665.258C581.036 664.096 584.144 663.515 587.733 663.515C593.04 663.515 597.209 664.828 600.242 667.455C603.325 670.081 605.094 673.566 605.548 677.909H593.57C593.368 676.444 592.711 675.283 591.599 674.424C590.538 673.566 589.123 673.136 587.354 673.136C585.838 673.136 584.675 673.439 583.867 674.045C583.058 674.601 582.654 675.384 582.654 676.394C582.654 677.606 583.285 678.515 584.549 679.121C585.863 679.727 587.884 680.333 590.614 680.939C593.747 681.747 596.3 682.556 598.271 683.364C600.242 684.121 601.96 685.384 603.426 687.152C604.942 688.869 605.725 691.192 605.776 694.121C605.776 696.596 605.068 698.818 603.653 700.788C602.289 702.707 600.292 704.222 597.664 705.333C595.087 706.444 592.079 707 588.643 707Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M653.584 684.576C653.584 685.788 653.508 687.051 653.356 688.364H624.017C624.22 690.99 625.053 693.01 626.519 694.424C628.035 695.788 629.88 696.47 632.053 696.47C635.288 696.47 637.537 695.106 638.801 692.379H652.598C651.891 695.157 650.602 697.657 648.732 699.879C646.912 702.101 644.613 703.843 641.833 705.106C639.053 706.369 635.945 707 632.508 707C628.364 707 624.674 706.116 621.44 704.348C618.205 702.581 615.678 700.056 613.859 696.773C612.039 693.49 611.129 689.652 611.129 685.258C611.129 680.864 612.014 677.025 613.783 673.742C615.602 670.46 618.129 667.934 621.364 666.167C624.599 664.399 628.313 663.515 632.508 663.515C636.602 663.515 640.241 664.374 643.425 666.091C646.609 667.808 649.086 670.258 650.855 673.439C652.674 676.621 653.584 680.333 653.584 684.576ZM640.317 681.167C640.317 678.944 639.559 677.177 638.042 675.864C636.526 674.551 634.631 673.894 632.357 673.894C630.183 673.894 628.339 674.525 626.822 675.788C625.357 677.051 624.447 678.843 624.093 681.167H640.317Z"
          fill="illustrationHighlight010"
        />
        <Path
          d="M684 695.409V706.394H677.404C672.704 706.394 669.04 705.258 666.412 702.985C663.784 700.662 662.47 696.899 662.47 691.697V674.879H657.314V664.121H662.47V653.818H675.433V664.121H683.924V674.879H675.433V691.848C675.433 693.111 675.737 694.02 676.343 694.576C676.95 695.131 677.96 695.409 679.376 695.409H684Z"
          fill="illustrationHighlight010"
        />
        <Path
          fill-rule="evenodd"
          clip-rule="evenodd"
          d="M736 558H803V564H773V815H803V821H736V815H766V564H736V558Z"
          fill="illustrationHighlight010"
        />
      </g>
      <defs>
        <filter
          id={filter0}
          x="212.889"
          y="292.999"
          width="1062.5"
          height="266.999"
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
export default ToastDo3Illustration;
