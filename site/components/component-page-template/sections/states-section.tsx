import React from 'react';
import {MediaList, MediaListProps} from '../../media-list';
import {IntroductionText} from './types';
import {CommonSection} from './common-section';

export type StatesSectionProps = MediaListProps & IntroductionText;

export const StatesSection: React.FC<StatesSectionProps> = ({
  introduction,
  ...states
}) => (
  <CommonSection title="States" id="states" introduction={introduction}>
    <MediaList {...states} layout="2-span" />
  </CommonSection>
);
