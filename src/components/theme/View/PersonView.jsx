/**
 * Person view.
 * @module components/theme/View/PersonView
 */

import React from 'react';
import { defineMessages, injectIntl } from 'react-intl';
import PropTypes from 'prop-types';
import { Container, Divider, Grid } from 'semantic-ui-react';
import { flattenHTMLToAppURL } from '@plone/volto/helpers';
import { Helmet } from '@plone/volto/helpers';

const PersonView = props => {
  const { content } = props;
  return (
    <Container id="person-document">
      <Helmet title={content.title} />
      <h1 className="documentFirstHeading">{content.title}</h1>
      <Grid>
        <Grid.Row stretched>
          <Grid.Column width="4">
            <div className="wrapper">Github</div>
          </Grid.Column>
          <Grid.Column width="8">{content.github_handle}</Grid.Column>
        </Grid.Row>
      </Grid>
      <Divider />
      {content.bio && (
        <div
          dangerouslySetInnerHTML={{
            __html: flattenHTMLToAppURL(content.bio.data),
          }}
        />
      )}
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
PersonView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    github_handle: PropTypes.string,
    bio: PropTypes.shape({
      data: PropTypes.string,
    }),
  }).isRequired,
};

export default injectIntl(PersonView);
