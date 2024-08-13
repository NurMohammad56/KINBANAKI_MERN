import React from "react";
import FeatureStore from "../../store/featureStore";
import LegalContentSkeleton from "../../skeleton/legal-content-skeleton";

const LegalContents = () => {
  const { LegalDetails } = FeatureStore();

  return (
    <div>
      <LegalContentSkeleton />
    </div>
  );
};

export default LegalContents;
