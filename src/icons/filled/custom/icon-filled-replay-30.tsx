import React from 'react';
import {Svg} from '../../svg';
import {customToNewsKitIcon} from '../../custom-to-newskit-icon';

export const IconFilledReplay30 = customToNewsKitIcon(
  'IconFilledReplay30',
  props => (
    <Svg {...props} viewBox="0 0 24 24">
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M8.63899 7.13242H7.63003V8.61644H8.68383C8.93047 8.61644 9.13226 8.6621 9.33405 8.70776C9.53584 8.75343 9.69279 8.84475 9.82732 8.9589C9.96185 9.07306 10.074 9.23288 10.1412 9.41553C10.2085 9.59817 10.2533 9.82648 10.2533 10.0776C10.2533 10.2831 10.2309 10.4658 10.1636 10.6256C10.0964 10.7854 9.98427 10.9224 9.87216 11.0365C9.76006 11.1507 9.60311 11.242 9.42374 11.3105C9.24437 11.379 9.04257 11.4018 8.81836 11.4018C8.61657 11.4018 8.4372 11.3562 8.25783 11.3105C8.07846 11.2648 7.94393 11.1735 7.8094 11.0594C7.67487 10.9452 7.58519 10.8311 7.51792 10.6712C7.45066 10.5114 7.40582 10.3516 7.40582 10.169H5.5C5.5 10.6484 5.58969 11.0822 5.76906 11.4247C5.94843 11.7671 6.21748 12.0411 6.50896 12.2922C6.80044 12.5434 7.15918 12.7032 7.54034 12.8174C7.92151 12.9315 8.32509 12.9772 8.72868 12.9772C9.22195 12.9772 9.64795 12.9087 10.074 12.7945C10.5 12.6804 10.8363 12.4749 11.1502 12.2466C11.4641 12.0183 11.6883 11.6986 11.8677 11.3562C12.047 11.0137 12.1367 10.6027 12.1367 10.1461C12.1367 9.62101 12.0022 9.16438 11.7331 8.75343C11.4641 8.34247 11.0605 8.06849 10.5224 7.86301C10.769 7.74886 10.9708 7.6347 11.1502 7.47489C11.3296 7.31507 11.4641 7.15525 11.5986 6.9726C11.7331 6.78995 11.8228 6.60731 11.8901 6.40183C11.9574 6.19635 11.9798 5.99087 11.9798 5.78539C11.9798 5.32877 11.8901 4.91781 11.7331 4.57534C11.5762 4.23288 11.352 3.93607 11.0605 3.70776C10.769 3.47945 10.4327 3.2968 10.0291 3.18265C9.62553 3.06849 9.1771 3 8.70625 3C8.28025 3 7.87666 3.06849 7.4955 3.18265C7.11434 3.2968 6.80044 3.47945 6.50896 3.70776C6.21748 3.93607 5.99327 4.23288 5.83632 4.55251C5.67937 4.87215 5.58969 5.23744 5.58969 5.6484H7.4955C7.4955 5.48858 7.54034 5.32877 7.60761 5.19178C7.67487 5.05479 7.76456 4.96347 7.87666 4.84932C7.98877 4.73516 8.1233 4.66667 8.28025 4.621C8.4372 4.57534 8.59415 4.55251 8.77352 4.55251C8.97531 4.55251 9.1771 4.59817 9.33405 4.64384C9.491 4.6895 9.62553 4.78082 9.73764 4.89498C9.84974 5.00913 9.91701 5.12329 9.98427 5.28311C10.0515 5.44292 10.074 5.60274 10.074 5.78539C10.074 6.19635 9.96185 6.51598 9.71522 6.76712C9.46858 7.01826 9.10984 7.13242 8.63899 7.13242ZM20.2756 10.7169C20.4325 10.2146 20.4998 9.57534 20.4998 8.84475V7.15525C20.4998 6.42466 20.4101 5.80822 20.2532 5.28311C20.0962 4.75799 19.872 4.3242 19.5805 3.98174C19.289 3.63927 18.9527 3.38813 18.5491 3.22831C18.1455 3.06849 17.7195 3 17.2263 3C16.733 3 16.2846 3.06849 15.9034 3.22831C15.5223 3.38813 15.1635 3.63927 14.8945 3.98174C14.6254 4.3242 14.4012 4.78082 14.2442 5.28311C14.0873 5.78539 14.02 6.42466 14.02 7.15525V8.84475C14.02 9.57534 14.1097 10.1918 14.2667 10.7169C14.4236 11.242 14.6478 11.6758 14.9393 12.0183C15.2308 12.3607 15.5671 12.6119 15.9707 12.7717C16.3743 12.9315 16.8003 13 17.2935 13C17.7868 13 18.2352 12.9315 18.6164 12.7717C18.9976 12.6119 19.3563 12.3607 19.6254 12.0183C19.8944 11.6758 20.1186 11.2192 20.2756 10.7169ZM18.5939 6.88113C18.5939 6.44734 18.5715 6.08204 18.5042 5.78524C18.4369 5.48844 18.3472 5.26013 18.2351 5.07748C18.123 4.89483 17.9885 4.75784 17.8091 4.68935C17.6298 4.62086 17.4504 4.5752 17.2486 4.5752C17.0468 4.5752 16.845 4.62086 16.6881 4.68935C16.5311 4.75784 16.3742 4.89483 16.2621 5.07748C16.15 5.26013 16.0603 5.48844 15.993 5.78524C15.9257 6.08204 15.9033 6.44734 15.9033 6.88113V9.09574C15.9033 9.52953 15.9257 9.89483 15.993 10.1916C16.0603 10.4884 16.15 10.7396 16.2621 10.9222C16.3742 11.1049 16.5087 11.2419 16.6881 11.3104C16.8674 11.3788 17.0468 11.4245 17.2486 11.4245C17.4504 11.4245 17.6522 11.3788 17.8091 11.3104C17.9661 11.2419 18.123 11.1049 18.2351 10.9222C18.3472 10.7396 18.4369 10.4884 18.4818 10.1916C18.549 9.89483 18.5715 9.52953 18.5715 9.09574V6.88113H18.5939ZM16.0001 21L11.6287 18L16.0001 15V21ZM11.3714 21L7 18L11.3714 15V21Z"
      />
    </Svg>
  ),
);
