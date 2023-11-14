import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonPB = (props) => (
  <ContentLoader
    speed={2}
    width={300}
    height={464}
    viewBox="0 0 280 464"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="116" y="420" rx="30" ry="30" width="135" height="40" />
    <rect x="11" y="425" rx="0" ry="0" width="81" height="25" />
    <rect x="11" y="270" rx="6" ry="6" width="242" height="20" />
    <circle cx="130" cy="130" r="125" />
    <rect x="9" y="310" rx="12" ry="12" width="242" height="90" />
  </ContentLoader>
);

export default SkeletonPB;
