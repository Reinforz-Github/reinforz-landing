import { featureSection } from "../constants/constants";

import React from "react";

const FeaturesReact = () => {
  return (
    <div>
      <div className="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        {featureSection.map((feature) => {
          <div className="mb-21 lg:mb-40">
            <div className="space-y-7 justify-between text-gray-600 md:flex flex-row-reverse md:gap-6 md:space-y-0 lg:gap-12 lg:items-center">
              <div className="md:4/12 lg:w-2/3">
                <img
                  src={feature.image}
                  alt="image"
                  width=""
                  height=""
                  className="w-full"
                />
              </div>
              <div className="md:6/12 lg:w-1/2">
                <h1 className="text-3xl text-center sm:text-left font-bold md:text-4xl text-primary">
                  {feature.title}
                </h1>
                <p className="my-9 text-gray-300">{feature.description}</p>
              </div>
            </div>
          </div>;
        })}
      </div>
    </div>
  );
};

export default FeaturesReact;
