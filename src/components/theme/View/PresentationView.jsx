/**
 * Presentation view.
 * @module components/theme/View/PresentationView
 */

import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Container, Divider, Grid } from 'semantic-ui-react';
import { Helmet } from '@plone/volto/helpers';

const PresentationView = props => {
  const { content } = props;
  return (
    <Container id="page-document">
      <Helmet title={content.title} />
      <h1 className="documentFirstHeading">{content.title}</h1>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width="4">
            <div className="wrapper">Speaker</div>
          </Grid.Column>
          <Grid.Column width="8">{content.speaker.title}</Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
      <p>{content.level.title}</p>
      {content.description && (
        <p className="documentDescription">{content.description}</p>
      )}
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
PresentationView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    level: PropTypes.shape({
      token: PropTypes.string,
      title: PropTypes.string,
    }),
  }).isRequired,
};

export default injectIntl(PresentationView);
