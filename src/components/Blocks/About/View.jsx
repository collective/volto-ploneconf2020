/**
 * View About block
 * @module components/Blocks/About/View
 */
import Block from '@package/components/Blocks/Block/Block';
import React from 'react';

const Content = {
  title: "About the event",
  subtitle: "Digital Experience Conference",
  text: `Join the 17th edition of Plone Conference in the amazing Ferrara and gain an unparalleled opportunity to discover insights from the inspiring keynote speakers and exchange experiences with designers and developers from all over the world.
  We are building for you a great gathering of the global Plone Community with a lot of networking and growth opportunities. Be a part of the discussion surrounding the latest trends and success stories of Digital Experience Innovation about Plone, Volto, Guillotina, Pyramid, Python and the most celebrated frontend frameworks.`,
  footer: "Read more...",
  link: "/",
}

const View = () => {
  return (
    <section className="block-img about">
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
