/**
 * View Venue block
 * @module components/Blocks/Venue/View
 */
import Block from '@package/components/Blocks/Block/Block';
import React from 'react';

const Venue = {
  title: "Visit Namur",
  subtitle: "Digital Experience Conference",
  text: `Join the 17th edition of Plone Conference in the amazing Ferrara and gain an unparalleled
  opportunity to discover insights from the inspiring keynote speakers and exchange experiences with designers and developers from all over the world.`,
  footer: "Read more...",
  link: "/",
}

const View = () => {
  return (
    <section className="title-block venue">
      <aside class="title">
        <div>Venue</div>
      </aside>
      <article>
        <aside className="square"> 
          <div></div>
          <div></div>
          <div></div>
        </aside>
        <Block
          title={Venue.title}
          subtitle={Venue.subtitle}
          text={Venue.text}
          footer={Venue.footer}
          link={Venue.link}
        />
      </article>
    </section>
  );
};

export default View;
