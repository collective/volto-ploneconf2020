/**
 * View Schedule block
 * @module components/Blocks/Schedule/View
 */
import Block from '@package/components/Blocks/Block/Block';
import React from 'react';

const Training = {
  title: "Training",
  subtitle: "Come and learn from the source",
  text: `A wide range of training classes – taught by the  experts – is included in the conference ticket price.`,
  footer: "Nov 16|17",
  link: "/",
}

const Talks = {
  title: "Talks",
  subtitle: "The heartbeat of every Plone conference",
  text: `Choose from three tracks: Plone, Python web technologies, and modern JavaScript frontends.`,
  footer: "Nov 18|19|20",
  link: "/",
}

const Sprints = {
  title: "Sprints",
  subtitle: "Get involved – help improve the projects",
  text: `Join us and work side by side with core contributors to improve the Plone ecosystem
         or your favourite Python or JavaScript framework.`,
  footer: "Nov 21|22",
  link: "/",
}

const View = () => {
  return (
    <section className="title-block schedule">
      <aside className="title">
        <div>Schedule</div>
      </aside>
      <article>
        <Block
          title={Training.title}
          subtitle={Training.subtitle}
          text={Training.text}
          footer={Training.footer}
          link={Training.link}
        />
        <Block
          title={Talks.title}
          subtitle={Talks.subtitle}
          text={Talks.text}
          footer={Talks.footer}
          link={Talks.link}
        />
        <Block
          title={Sprints.title}
          subtitle={Sprints.subtitle}
          text={Sprints.text}
          footer={Sprints.footer}
          link={Sprints.link}
        />
      </article>
    </section>
  );
};

export default View;
