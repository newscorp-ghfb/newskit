import React from 'react';
import {Svg} from '../svg';
import {Path} from '../path';
import {Rect} from '../rect';

export const HeroDrawerIllustration: React.FC = () => (
  <Svg
    width="1344"
    height="759"
    viewBox="0 0 1344 759"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <Rect width="1344" height="759" fill="illustrationBackground020" />
    <Rect
      x="219"
      y="111"
      width="905"
      height="538"
      rx="16"
      fill="illustrationPalette060"
    />
    <Rect
      x="219"
      y="111"
      width="299"
      height="538"
      rx="16"
      fill="illustrationPalette040"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M274 206C268.477 206 264 210.477 264 216C264 221.523 268.477 226 274 226H464C469.523 226 474 221.523 474 216C474 210.477 469.523 206 464 206H274ZM274 249C268.477 249 264 253.477 264 259C264 264.523 268.477 269 274 269H392C397.523 269 402 264.523 402 259C402 253.477 397.523 249 392 249H274ZM264 337.5C264 334.462 266.462 332 269.5 332H468.5C471.538 332 474 334.462 474 337.5C474 340.538 471.538 343 468.5 343H269.5C266.462 343 264 340.538 264 337.5ZM270 359C266.686 359 264 361.686 264 365C264 368.314 266.686 371 270 371H468C471.314 371 474 368.314 474 365C474 361.686 471.314 359 468 359H270ZM264 310C264 306.686 266.686 304 270 304H468C471.314 304 474 306.686 474 310C474 313.314 471.314 316 468 316H270C266.686 316 264 313.314 264 310ZM269.5 387C266.462 387 264 389.462 264 392.5C264 395.538 266.462 398 269.5 398H364.5C367.538 398 370 395.538 370 392.5C370 389.462 367.538 387 364.5 387H269.5Z"
      fill="illustrationInterface020"
    />
  </Svg>
);
export default HeroDrawerIllustration;
