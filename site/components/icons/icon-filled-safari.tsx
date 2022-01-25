import React from 'react';
import {Svg, SvgProps, toNewsKitIcon, withDefaultProps} from 'newskit';

const FilledSafari: React.FC<SvgProps> = props => (
  <Svg {...props} viewBox="0 0 24 24">
    <path d="M23 12C23 13.491 22.7078 14.9133 22.1277 16.2711C21.5477 17.6289 20.7656 18.802 19.7816 19.7816C18.7977 20.7656 17.6289 21.5434 16.2711 22.1277C14.9133 22.7121 13.491 23 12 23C10.509 23 9.08672 22.7078 7.72891 22.1277C6.37109 21.5477 5.19806 20.7656 4.21836 19.7816C3.23438 18.802 2.45233 17.6289 1.87225 16.2711C1.29217 14.9133 1 13.491 1 12C1 10.509 1.29217 9.08672 1.87225 7.72891C2.45233 6.37109 3.23438 5.19805 4.21836 4.21836C5.20233 3.23867 6.37109 2.45234 7.72891 1.87227C9.08672 1.29219 10.509 1 12 1C13.491 1 14.9133 1.29219 16.2711 1.87227C17.6289 2.45234 18.802 3.23437 19.7816 4.21836C20.7656 5.20234 21.5434 6.37109 22.1277 7.72891C22.7121 9.08672 23 10.509 23 12ZM21.8227 12C21.8227 10.6637 21.5605 9.3918 21.0449 8.18008C20.525 6.96836 19.8289 5.92422 18.9523 5.04766C18.0758 4.17109 17.0316 3.475 15.8199 2.95508C14.6039 2.43945 13.332 2.17734 12 2.17734C10.668 2.17734 9.3918 2.43516 8.18008 2.95508C6.96836 3.475 5.92422 4.17109 5.04767 5.04766C4.17108 5.92422 3.475 6.96836 2.95508 8.18008C2.43516 9.3918 2.17734 10.6637 2.17734 12C2.17734 13.3363 2.43516 14.6082 2.95508 15.8199C3.475 17.0316 4.17108 18.0758 5.04767 18.9523C5.92422 19.8289 6.96836 20.525 8.18008 21.0449C9.3918 21.5648 10.6637 21.8227 12 21.8227C13.3363 21.8227 14.6082 21.5648 15.8199 21.0449C17.0316 20.525 18.0758 19.8289 18.9523 18.9523C19.8289 18.0758 20.525 17.0316 21.0449 15.8199C21.5605 14.6082 21.8227 13.332 21.8227 12ZM20.7785 12C20.7785 13.6457 20.3531 15.1625 19.5023 16.5547C19.4766 16.5375 19.4078 16.4945 19.2918 16.4215C19.1758 16.3484 19.0684 16.2797 18.9652 16.2195C18.8621 16.1594 18.7934 16.125 18.7633 16.1293C18.6559 16.1293 18.6043 16.1809 18.6043 16.2883C18.6043 16.3699 18.8449 16.5504 19.3305 16.8297C18.7246 17.7449 17.9684 18.527 17.066 19.1672C16.1594 19.8074 15.1711 20.2629 14.1012 20.525L13.9035 19.7043C13.8949 19.6227 13.8348 19.5797 13.7188 19.5797L13.6199 19.6484L13.5941 19.7645L13.7918 20.598C13.2031 20.7227 12.6059 20.7828 12 20.7828C10.3715 20.7828 8.85039 20.3531 7.43242 19.4937C7.44102 19.4766 7.49258 19.3949 7.59141 19.2402C7.69023 19.0898 7.77617 18.9523 7.85352 18.8277C7.93086 18.7031 7.96953 18.6258 7.96953 18.5957C7.96953 18.4883 7.91797 18.4367 7.81055 18.4367C7.76328 18.4367 7.69023 18.4969 7.6 18.6129C7.50977 18.7332 7.41523 18.8707 7.325 19.0383C7.23047 19.2016 7.17461 19.2961 7.16172 19.3219C6.23789 18.7074 5.45156 17.9426 4.80273 17.0187C4.1582 16.0949 3.70703 15.0937 3.45352 14.0152L4.29998 13.8305L4.42463 13.6457L4.35586 13.5469L4.22695 13.5211L3.39338 13.7059C3.27734 13.1172 3.2215 12.5457 3.2215 12C3.2215 10.3156 3.66836 8.76445 4.5578 7.34648C4.57502 7.35508 4.64805 7.40234 4.78555 7.49258C4.91877 7.58281 5.04336 7.66016 5.1551 7.72461C5.26678 7.78906 5.33984 7.82344 5.36992 7.82344C5.47734 7.82344 5.52891 7.77617 5.52891 7.67734C5.52891 7.63008 5.47734 7.56562 5.37422 7.48828C5.27109 7.41094 5.13787 7.3207 4.97461 7.22617L4.72967 7.08008C5.36133 6.16484 6.13477 5.39141 7.05 4.75977C7.96523 4.12812 8.96641 3.69414 10.0449 3.44492L10.2297 4.26562C10.2469 4.34727 10.307 4.39023 10.4145 4.39023L10.5133 4.32148L10.5391 4.19258L10.3543 3.38047C10.9344 3.27305 11.4844 3.22148 12 3.22148C13.6715 3.22148 15.2227 3.66836 16.6535 4.55781C16.3355 5.01758 16.1766 5.28398 16.1766 5.35703C16.1766 5.46445 16.2238 5.51602 16.3227 5.51602C16.4129 5.51602 16.6105 5.25391 16.9113 4.72969C17.818 5.34414 18.5871 6.10469 19.2145 7.01133C19.8418 7.91797 20.2801 8.90625 20.5336 9.97187L19.8461 10.118C19.7645 10.1352 19.7215 10.1996 19.7215 10.3156L19.7902 10.4145L19.9063 10.4402L20.6066 10.2812C20.7227 10.8699 20.7785 11.4457 20.7785 12ZM12.8336 12.6746L17.1305 5.5418C17.0574 5.60625 16.7824 5.86406 16.3012 6.30664C15.8242 6.75352 15.3086 7.23047 14.7629 7.7418C14.2129 8.24883 13.6543 8.76875 13.0871 9.30156C12.5199 9.83437 12.0387 10.2855 11.652 10.6594C11.2652 11.0332 11.0547 11.2437 11.0332 11.291L6.74922 18.4109C6.80508 18.3551 7.08008 18.1016 7.56992 17.6504C8.05977 17.1992 8.57539 16.7223 9.1168 16.2195C9.6582 15.7168 10.2125 15.1969 10.7883 14.6598C11.3598 14.1227 11.841 13.6672 12.2234 13.2977C12.6059 12.9238 12.8121 12.7176 12.8336 12.6746ZM12.6488 11.9613C12.6488 12.1719 12.5801 12.3566 12.4469 12.5156C12.3137 12.6703 12.1418 12.7477 11.9355 12.7477C11.725 12.7477 11.5402 12.6789 11.3813 12.5457C11.2266 12.4125 11.1492 12.2406 11.1492 12.0344C11.1492 11.8195 11.218 11.6391 11.3598 11.4801C11.4973 11.3254 11.6691 11.248 11.8754 11.248C12.0816 11.248 12.2578 11.3168 12.4168 11.45C12.5715 11.5875 12.6488 11.7594 12.6488 11.9613Z" />
  </Svg>
);

export const IconFilledSafari = withDefaultProps(
  toNewsKitIcon(FilledSafari),
  {},
);

IconFilledSafari.displayName = 'IconFilledSafari';
