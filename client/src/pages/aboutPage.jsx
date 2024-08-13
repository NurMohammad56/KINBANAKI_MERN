import React, { useEffect } from "react";
import Layout from "./../component/layout/layout";
import LegalContents from "../component/features/legalContents";
import FeatureStore from "../store/featureStore";

const AboutPage = () => {
  const { LegalDetailsRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDetailsRequest("about");
    })();
  }, []);

  return (
    <Layout>
      <LegalContents />
    </Layout>
  );
};
export default AboutPage;
