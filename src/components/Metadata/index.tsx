import { Helmet } from 'react-helmet';

interface MetadataProps {
  title: string;
  overview: string;
  genres: string;
}

const Metadata = ({ title, overview, genres }: MetadataProps) => (
  <Helmet>
    <title>{title} &#8212; Poodle Movies</title>
    <meta name="description" content={overview} />
    <meta name="keyword" content={genres} />
  </Helmet>
);

export default Metadata;
