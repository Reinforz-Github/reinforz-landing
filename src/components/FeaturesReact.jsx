import { featureSection } from "../constants/constants.js";

import React from "react";

const FeaturesReact = () => {
  return (
    <div>
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6 mt-48">
        {featureSection.map((feature, index) => {
          return (
            <div class="mb-21 lg:mb-40" key={index}>
              <div
                class={`space-y-7 justify-between text-gray-600 md:flex ${
                  index % 2 == 0 ? "flex-row-reverse" : ""
                } md:gap-6 md:space-y-0 lg:gap-12 lg:items-center`}
              >
                <div class="md:4/12 lg:w-2/3">
                  <img
                    src={feature.image}
                    alt="image"
                    width=""
                    height=""
                    class="w-full"
                  />
                </div>
                <div class="md:6/12 lg:w-1/2">
                  <h1 class="text-3xl text-center sm:text-left font-bold md:text-4xl text-primary">
                    {feature.title}
                  </h1>
                  <p class="my-9 text-gray-300">{feature.description}</p>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default FeaturesReact;
