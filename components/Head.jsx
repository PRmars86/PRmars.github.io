import Head from 'next/head';

const CustomHead = ({ title }) => {
  return (
    <Head>
      <title>{title}</title>
      <meta
        name="description"
        content="Pengrui Ma's Profolio."
      />
      <meta
        name="keywords"
        content="Pengrui Ma, data scientist portfolio, machine learning engineer, portfolio, vscode-portfolio"
      />
      <meta property="og:title" content="Pengrui Ma's Portfolio" />
      <meta
        property="og:description"
        content="Pengrui Ma's Profolio."
      />
      <meta property="og:image" content="https://imgur.com/YTNNknY.png" />
      <meta property="og:url" content="" />
      <meta name="twitter:card" content="summary_large_image" />
    </Head>
  );
};

export default CustomHead;

CustomHead.defaultProps = {
  title: 'Pengrui Ma',
};
