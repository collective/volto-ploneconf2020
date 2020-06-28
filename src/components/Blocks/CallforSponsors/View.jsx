/**
 * View CallforSponsors block
 * @module components/Blocks/CallforSponsors/View
 */
import Block from '@package/components/Blocks/Block/Block';
import React from 'react';

const Content = {
  title: "Call for sponsors is open!",
  subtitle: "Digital Experience Conference",
  text: `Join the 17th edition of Plone Conference in the amazing Ferrara and
        gain an unparalleled opportunity to discover insights from the inspiring keynote speakers and
        exchange experiences with designers and developers from all over the world.`,
  footer: "Become a sponsor",
  link: "/",
}

const View = () => {
  return (
    <section className="block-img callsponsors">
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
