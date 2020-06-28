/**
 * View Party block
 * @module components/Blocks/Party/View
 */
import Block from '@package/components/Blocks/Block/Block';
import React from 'react';

const Content = {
  title: "Plone community Party",
  subtitle: "A cruise to discover",
  text: `Plone community Party for all registered Conference participants will be held on the
  second day of the Conference, near the venue.
  The party is included in the ticket price. The proposed project is a cruise to discover
  Namur and the Meuse Valley (200 attendees).`,
  footer: "Read more...",
  link: "/",
}

const View = () => {
  return (
    <section className="block-img party">
      <Block
        title={Content.title}
        subtitle={Content.subtitle}
        text={Content.text}
        footer={Content.footer}
        link={Content.link}
      />
      <div className="image"></div>
    </section>
  );
};

export default View;
