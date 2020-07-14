/**
 * Footer component.
 * @module components/theme/Footer/Footer
 */

import React from 'react';
import { Container, Segment, Image } from 'semantic-ui-react';
import { Link } from 'react-router-dom';
import { FormattedMessage, defineMessages, injectIntl } from 'react-intl';
import LogoImage from '@plone/volto/components/theme/Logo/Logo.svg';
import PloneImage from '@package/assets/images/plone.svg';
import { settings } from '~/config';

const messages = defineMessages({
  copyright: {
    id: 'Copyright',
    defaultMessage: 'Copyright',
  },
  site: {
    id: 'Site',
    defaultMessage: 'Site',
  },
  plonesite: {
    id: 'Plone Site',
    defaultMessage: 'Plone Site',
  },
});

/**
 * Component to display the footer.
 * @function Footer
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component
 */
const Footer = ({ intl }) => (
  <Segment id="footer" role="contentinfo">
    <Container>
      <div className="plone">
        <Image
          src={PloneImage}
          alt={intl.formatMessage(messages.plonesite)}
          title={intl.formatMessage(messages.plonesite)}
          height={40}
        />
        <div className="foundation">
          <FormattedMessage
            id="The {plonecms} is {copyright} 2000-{current_year} by the {plonefoundation} and friends."
            defaultMessage="The {plonecms} is {copyright} 2000-{current_year} by the {plonefoundation} and friends."
            values={{
              plonecms: (
                <FormattedMessage
                  id="Plone{reg} Open Source CMS/WCM"
                  defaultMessage="Plone{reg} Open Source CMS/WCM"
                  values={{ reg: <sup>®</sup> }}
                />
              ),
              copyright: (
                <abbr title={intl.formatMessage(messages.copyright)}>©</abbr>
              ),
              current_year: new Date().getFullYear(),
              plonefoundation: (
                <a className="item" href="http://plone.org/foundation">
                  <FormattedMessage
                    id="Plone Foundation"
                    defaultMessage="Plone Foundation"
                  />
                </a>
              ),
            }}
          />{' '}
        </div>

        <div className="distributed">
          <FormattedMessage
            id="Distributed under the {license}."
            defaultMessage="Distributed under the {license}."
            values={{
              license: (
                <a
                  className="item"
                  href="http://creativecommons.org/licenses/GPL/2.0/"
                >
                  <FormattedMessage
                    id="GNU GPL license"
                    defaultMessage="GNU GPL license"
                  />
                </a>
              ),
            }}
          />
        </div>
      </div>

      <div className="logo">
        <Link
          to={settings.isMultilingual ? `/${lang}` : '/'}
          title={intl.formatMessage(messages.site)}>
          <Image
            src={LogoImage}
            alt={intl.formatMessage(messages.plonesite)}
            title={intl.formatMessage(messages.plonesite)}
          />
        </Link>
      </div>

      <div className="links">
        <Link className="item" to="/">
          <FormattedMessage id="code-of-conduct" defaultMessage="Code of conduct" />
        </Link>
        <Link className="item" to="/">
          <FormattedMessage
            id="pivacy-policy"
            defaultMessage="Privacy policy"
          />
        </Link>
        <Link className="item" to="/sitemap">
          <FormattedMessage id="Site Map" defaultMessage="Site Map" />
        </Link>
        <div className="social-share">
          <Link className="item" to="/contact-form">
            <i className="fas fa-envelope-square"></i>
          </Link>
          <Link className="item" to="/">
            <i className="fab fa-facebook-square"></i>
          </Link>
          <Link className="item" to="/">
            <i className="fab fa-twitter-square"></i>
          </Link>
        </div>
      </div>
    </Container>
  </Segment >
);

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Footer.propTypes = {
  /**
   * i18n object
   */
};

export default injectIntl(Footer);
