import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab } from '@fortawesome/free-brands-svg-icons';

library.add(fab);

function SocialMediaIcons() {
  return (
    <div className="contacts">
      <ul className="social-media-icons">
        <li>
          <a
            href="https://twitter.com/shelf_mohamed"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'twitter']} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.facebook.com/mohamed.shelf.73/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'facebook']} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://api.whatsapp.com/send?phone=+201096787085"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'whatsapp']} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.instagram.com/mohamed__shelf/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'instagram']} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://www.linkedin.com/in/mohamed-shelf/"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'linkedin']} size="2x" />
          </a>
        </li>
        <li>
          <a
            href="https://github.com/MohamedSaid7102"
            target="_blank"
            rel="noreferrer"
          >
            <FontAwesomeIcon icon={['fab', 'github']} size="2x" />
          </a>
        </li>
      </ul>
      <h3 className="contacts__info">
        MY Name Is Mohamed Said Shelf
        <br /><br />
        I'm A Front-end Developer
        <br />
        &
        <br />
        A Computer Science Student
      </h3>
    </div>
  );
}

export default SocialMediaIcons;
