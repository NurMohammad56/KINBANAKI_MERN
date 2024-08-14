import React, { useEffect } from "react";
import Layout from "./../component/layout/layout";
import LegalContents from "../component/features/legalContents";
import FeatureStore from "../store/featureStore";
const HowToBuyPage = () => {
  const { LegalDetailsRequest } = FeatureStore();

  useEffect(() => {
    (async () => {
      await LegalDetailsRequest("howToBuy");
    })();
  }, []);

  return (
    <Layout>
      <LegalContents />
    </Layout>
  );
};

export default HowToBuyPage;
