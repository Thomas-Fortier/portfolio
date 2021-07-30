import MetatagProps from "../lib/props/MetatagProps";

function Metatags({ title, description, image }: MetatagProps) {
  return (
    <head>
      <title>{title}</title>
      <meta name="twitter:card" content="summary" />
      <meta name="twitter:site" content="@BixbiteMr" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={image} />

      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:image" content={image} />
    </head>
  );
}

export default Metatags;
