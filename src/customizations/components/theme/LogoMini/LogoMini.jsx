/**
 * LogoMini component.
 * @module components/theme/Logo/LogoMini
 */

import React from 'react';
import { Link } from 'react-router-dom';
import { defineMessages, useIntl } from 'react-intl';
import { Image } from 'semantic-ui-react';
import { useSelector } from 'react-redux';
import { settings } from '~/config';

import LogoImage from '@package/customizations/components/theme/LogoMini/LogoMini.svg';

const messages = defineMessages({
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
 * LogoMini component class.
 * @function LogoMini
 * @param {Object} intl Intl object
 * @returns {string} Markup of the component.
 */
const LogoMini = () => {
  const lang = useSelector((state) => state.intl.locale);
  const intl = useIntl();

  return (
    <Link
      to={settings.isMultilingual ? `/${lang}` : '/'}
      title={intl.formatMessage(messages.site)}
    >
      <Image
        src={LogoImage}
        alt={intl.formatMessage(messages.plonesite)}
        title={intl.formatMessage(messages.plonesite)}
        height={128}
      />
    </Link>
  );
};

export default LogoMini;
