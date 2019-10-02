import React from "react";

import ContactItem from "../ContactItem";

function Contact(props) {
  return (
    <div className="col-lg-6 col-12">
      <div className="contact">
        <h2 className="display-4 info__title contact__title">Contact</h2>
        <div className="contact__items">
          <ContactItem
            href="mailto:cassidygroenendaal@gmail.com"
            icon="fas fa-envelope"
            text="cassidygroenendaal@gmail.com"
          />
          <ContactItem
            href="https://www.linkedin.com/in/cassidy-groenendaal/"
            icon="fab fa-linkedin-in"
            text="/in/cassidy-groenendaal"
          />
          <ContactItem
            href="https://github.com/cassidygroenendaal"
            icon="fab fa-github"
            text="/cassidygroenendaal"
          />
        </div>
      </div>
    </div>
  );
}

export default Contact;
