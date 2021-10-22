// / <reference types="Cypress" />

import siteRoutes from '../../../site/routes.json';
import {flatRoutes} from '../../support/commands';

const pages = flatRoutes(siteRoutes, 'id');

describe('Page accessibility', () => {
  pages.forEach(path => {
    it(`should pass basic a11y test for ${Cypress.config(
      'baseUrl',
    )}${path}`, () => {
      cy.mockConsentAndVisit(path);
      cy.injectAxe();
      if (
        path === `/foundations/presets/typography-presets` ||
        path === `/pages/article` ||
        path === `/components/card`
      ) {
        // The typography page is a showcase so we have disabled the heading order rule for this page.
        // More info on the rule here: https://www.w3.org/WAI/tutorials/page-structure/headings/
        // TODO: Need to revisit the below color contrast rule while working on the newskit site remake project
        cy.checkA11y(null, {
          rules: {
            'heading-order': {enabled: false},
            'color-contrast': {enabled: false},
          },
        });
      } else if (path === `/components/tabs` || `/components/banner`) {
        cy.checkA11y(null, {
          rules: {
            'scrollable-region-focusable': {enabled: false},
            'color-contrast': {enabled: false},
          },
        });
      } else {
        // TODO: Need to revisit this rule while working on the newskit site remake project
        cy.checkA11y(null, {
          rules: {
            'color-contrast': {enabled: false},
          },
        });
      }
    });
  });
});
