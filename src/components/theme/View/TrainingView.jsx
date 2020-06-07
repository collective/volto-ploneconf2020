/**
 * Person view.
 * @module components/theme/View/TrainingView
 */

import React from 'react';
import { injectIntl } from 'react-intl';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';
import { Container, Divider, Grid, Card} from 'semantic-ui-react';
import { Helmet } from '@plone/volto/helpers';

function formatInstructors(instructors) {
  return (
    <div>
      {instructors
        .map((e) => {
          return <Link to={e.site_root_relative_url}>{e.title}</Link>;
        })
        .reduce((prev, curr) => [prev, ', ', curr])}
    </div>
  );
}

const TrainingView = (props) => {
  const { content } = props;
  const instructors = formatInstructors(content.instructor);

  return (
    <Container id="training-document">
      <Helmet title={content.title} />
      <h1 className="documentFirstHeading">{content.title}</h1>
      <Grid columns={2} divided>
        <Grid.Row stretched>
          <Grid.Column>
            <Card fluid="true">
              <Card.Content>
                <Card.Description>
                  <p>{content.description}</p>
                </Card.Description>
                <Divider />
                <div dangerouslySetInnerHTML={{__html: content.body.data}} />
              </Card.Content>
            </Card>
          </Grid.Column>
          <Grid.Column>
            <h3>Instructor</h3>
            <p>{instructors}</p>

            <h3>Length</h3>
            <p>{content.duration.title}</p>

            <h3>When</h3>
            <p>{content.start}</p>

            <h3>Target audience</h3>
            <div>{
              content.audience.map((e) => {
                return <p>{e.title}</p>;
              }).reduce((prev, curr) => [prev, ', ', curr])
              }
            </div>

            <h3>Target level</h3>
            <p>{content.level.title}</p>

            <h3>Room</h3>
            <p>{content.location}</p>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </Container>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
TrainingView.propTypes = {
  content: PropTypes.shape({
    title: PropTypes.string,
    description: PropTypes.string,
    audience: PropTypes.array,
    start: PropTypes.string,
    duration: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
      })),
    instructor: PropTypes.arrayOf(
      PropTypes.shape({
        title: PropTypes.string,
        site_root_relative_url : PropTypes.string
      }),
    ),
  }).isRequired,
};

export default injectIntl(TrainingView);
