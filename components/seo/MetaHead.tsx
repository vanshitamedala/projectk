import Head from 'next/head';

interface MetaHeadProps extends React.MetaHTMLAttributes<HTMLMetaElement> {
  title?: string;
  description?: string;
  embedSource?:
    | 'default'
    | {
        twitter?: string;
        linkedin?: string;
        og?: string;
      };
}

const MetaHead: React.FunctionComponent<MetaHeadProps> = ({
  title = 'Keerti',
  description = 'Hey! I am a Software Developer',
  embedSource = 'default',
  ...attr
}) => {
  return (
    <Head {...attr}>
      <title>{title}</title>
      <link rel="shortcut icon" href="/media/icon.ico" />
      <meta name="title" content="Keerti Hegde" />
      <meta name="description" content={description} />

      <meta property="og:type" content="website" />
      <meta property="og:url" content="https://www.keerti.fun/" />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta
        property="og:image"
        content={
          embedSource === 'default'
            ? 'https://cdn.discordapp.com/attachments/781424763037024256/1153747352620904448/k_banner.png'
            : embedSource?.og
        }
      />

      <meta
        property="twitter:card"
        content={
          embedSource === 'default'
            ? 'https://cdn.discordapp.com/attachments/781424763037024256/1153747352620904448/k_banner.png'
            : embedSource?.twitter
        }
      />
      <meta property="twitter:url" content="https://www.yashsehgal.com/" />
      <meta property="twitter:title" content={title} />
      <meta property="twitter:description" content={description} />
      <meta
        property="twitter:image"
        content={
          embedSource === 'default'
            ? 'https://cdn.discordapp.com/attachments/781424763037024256/1153747352620904448/k_banner.png'
            : embedSource?.twitter
        }
      />
    </Head>
  );
};

export default MetaHead;
