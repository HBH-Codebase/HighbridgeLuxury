import { Helmet } from "react-helmet-async"

const SEO = ({ title, name, description, type }: { title: string, name: string, description: string, type: string }) => {
  return (
    <Helmet>
      {/** standard  metadata tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      {/** end of standard description */}

      {/** Facebook tags */}
      <meta property="og:type" content={type} />
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      {/** End of Facebook tags */}

      {/** Twitter tags */}
      <meta name="twitter:creator" content={name} />
      <meta name="twitter:card" content={type} />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
    </Helmet>
  )
}

export default SEO
