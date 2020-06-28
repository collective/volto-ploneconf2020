/**
 * View Sponsors block
 * @module components/Blocks/Sponsors/View
 */
import React from 'react';


const View = () => {
  return (
    <section className="sponsors">
      <div class="block-element gold">
        <h2 className="title">
          <span className="primaryColor">Gold </span>
          <span>Sponsor</span>
        </h2>
        <div className="icon"></div>
      </div>
      <div class="block-element silver">
        <h2 className="title">
          <span className="primaryColor">Silver </span>
          <span>Sponsor</span>
        </h2>
        <div className="icon"></div>
      </div>
      <div class="block-element bronze">
        <h2 className="title">
          <span className="primaryColor">Bronze </span>
          <span>Sponsor</span>
        </h2>
        <div className="icon"></div>
      </div>
      <div class="block-element partner">
        <h2 className="title">
          <span className="primaryColor">Technical & Media </span>
          <span>partner</span>
        </h2>
        <div className="icon"></div>
      </div>
      <div class="block-element patronage">
        <h2 className="title">
          <span>Under the patronage </span>
          <span className="primaryColor">patronage </span>
          <span>of</span>
        </h2>
        <div className="icon"></div>
      </div>
    </section>
  );
};

export default View;
