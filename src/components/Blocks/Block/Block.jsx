/**
 * Block component.
 * @module components/Blocks/Block/Block
 */

import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

/**
 * Component to display a block.
 * @function Field
 * @param {Object} props Component properties.
 * @param {string} props.title Block.
 * @returns {string} Markup of the component.
 */

const Block = ({ title, subtitle, text, footer, link }) => {
  return (
    <div class="block-element">
      <Link to={link}>
        <h2 className="title">{title}</h2>
        <h3 className="subtitle">{subtitle}</h3>
        <p className="text">{text}</p>
        <div className="footer">
          <div className="info">{footer}</div>
        </div>
      </Link>
    </div>
  );
};

/**
 * Property types.
 * @property {Object} propTypes Property types.
 * @static
 */
Block.propTypes = {
  title: PropTypes.string.isRequired,
  subtitle: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  footer: PropTypes.string.isRequired,
  link: PropTypes.string.isRequired,
};

export default Block;