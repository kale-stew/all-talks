import React from 'react';
import { withStyles } from '@material-ui/core';
import Avatar from '@material-ui/core/Avatar';
import '../app.css';

const images = {
  LogoGithub: require('../logos/github.png'),
  LogoInstagram: require('../logos/instagram.png'),
  LogoLinkedIn: require('../logos/linkedin.png'),
  LogoMail: require('../logos/email.png'),
  LogoTwitter: require('../logos/twitter.png')
};

const KsAvatar = withStyles({
  root: {
    background: 'transparent'
  }
})(Avatar);

export default function Footer() {
  return (
    <footer>
      <a href="https://kyliestewart.tech">
        <KsAvatar>KS</KsAvatar>
      </a>
      <a href="https://twitter.com/kyliestew">
        <Avatar
          alt="Link to Kylie's Twitter account"
          src={images.LogoTwitter}
        />
      </a>
      <a href="https://www.linkedin.com/in/kylieastewart/">
        <Avatar
          alt="Link to Kylie's LinkedIn account"
          src={images.LogoLinkedIn}
        />
      </a>
      <a href="https://instagram.com/kalestews">
        <Avatar
          alt="Link to Kylie's Instagram account"
          src={images.LogoInstagram}
        />
      </a>
      <a href="mailto:kylie@kyliestewart.tech">
        <Avatar alt="Link to email Kylie" src={images.LogoMail} />
      </a>
    </footer>
  );
}
