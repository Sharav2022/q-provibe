import Head from "next/head";
import { COMPANY_NAME } from "../../../globals/mock";

const MetaInfo = (
  title = `${COMPANY_NAME} - Emerging Leader of IT Services`,
  description = `${COMPANY_NAME} offers fully managed IT Services to low end business."`
) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      <link rel="icon" href={`icons/q-provibe.png`} />
      <link href='https://unpkg.com/boxicons@2.1.4/css/boxicons.min.css' rel='stylesheet'></link>
      <meta name="viewport" content="width=device-width, initial-scale=1" />
    </Head>
  );
};

export default MetaInfo;
