import styles from '../styles/ContactCode.module.css';

const contactItems = [
  {
    social: 'Email',
    link: 'pengruima@outlook.com',
    href: 'mailto:pengruima@outlook.com',
  },
  {
    social: 'LinkedIn',
    link: 'linkedin.com/in/pengrui-ma-aa2846214/',
    href: 'https://www.linkedin.com/in/pengrui-ma-aa2846214/',
  },
  {
    social: 'GitHub',
    link: 'github.com/PRmars86',
    href: 'https://github.com/PRmars86',
  },
  {
    social: 'Website',
    link: 'pengrui.io',
    href: 'https://pengrui.io',
  },
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        tag: <a>production</a>
      </p>
      <p className={styles.line}>
        <span>kostas</span>&#58;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;&#8212; <span>socials</span>&#58;
      </p>
      {contactItems.slice(0, 8).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
      {contactItems.slice(8, contactItems.length).map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
        </p>
      ))}
    </div>
  );
};

export default ContactCode;
