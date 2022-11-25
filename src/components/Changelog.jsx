import React from "react";
import { changeLog } from "../constants/changelog.js";

const Changelog = () => {
  return (
    <div class="relative">
      <div class="max-w-7xl mx-auto px-6 md:px-12 xl:px-6">
        <div class="flex">
          <div class="flex flex-col pt-28 mr-5">
            <h3 class="text-2xl font-semibold text-primary ">Sprint List</h3>
            {changeLog.map((log, index) => (
              <div class="pt-5 hidden md:flex flex-col " key={index}>
                <a
                  href={`#${log.sprint}`}
                  class="hover:text-primary font-semibold"
                >
                  {index + 1}. Sprint {log.sprint}
                </a>
              </div>
            ))}
          </div>
          <div class="relative md:w-3/4 pt-28 m-auto mb-28">
            <h3 class="text-4xl font-bold text-primary ">
              Changelog for sprints
            </h3>

            {changeLog.map((log, ind) => (
              <div key={ind}>
                <h4
                  class="text-2xl pt-16 mb-3 font-bold text-primary"
                  id={`${log.sprint}`}
                >
                  Sprint: {log.sprint} [ {log.startDate} ]
                </h4>

                <h6 class="font-semibold pt-2">Features: </h6>

                {log.features.map((feature, index) => (
                  <p class="pt-1">
                    {index + 1}. {feature}
                  </p>
                ))}

                <h6 class="font-semibold pt-5">Fixes: </h6>

                {log.fixes.map((fixe, index) => (
                  <p class="pt-1">
                    {index + 1}. {fixe}
                  </p>
                ))}

                <h6 class="font-semibold pt-5">Improvements: </h6>

                {log.improvements.map((improvement, index) => (
                  <p class="pt-1">
                    {index + 1}. {improvement}
                  </p>
                ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
