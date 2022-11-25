import React from 'react';
import { changeLog } from '../constants/changelog.js';

const Changelog = () => {
  return (
    <div class='relative'>
      <div class='max-w-7xl mx-auto px-6 md:px-12 xl:px-6 flex'>
        <div class='flex-col'>
          {changeLog.map((log, index) => (
            <div class='pt-28 hidden md:flex flex-col space-y-1'>
              <a
                href={`#${log.sprint}`}
                class='hover:text-primary font-semibold'
              >
                Sprint: {log.sprint} [{log.startDate}]
              </a>
            </div>
          ))}
        </div>

        <div class='flex-col'>
          <div class='relative md:w-3/4 pt-28 m-auto'>
            <h3 class='text-4xl font-semibold text-primary'>
              Changelog for sprints
            </h3>

            {changeLog.map((log) => (
              <>
                <h4
                  class='text-2xl pt-16 font-bold text-primary'
                  id={`${log.sprint}`}
                >
                  Sprint: {log.sprint} [ {log.startDate} ]
                </h4>

                <h6 class='font-semibold py-2'>Features: </h6>

                {log.features.map((feature, index) => (
                  <p class='pt-5'>
                    {index + 1}. {feature}
                  </p>
                ))}

                <h6 class='font-semibold py-2'>Fixes: </h6>

                {log.fixes.map((fixe, index) => (
                  <p class='pt-5'>
                    {index + 1}. {fixe}
                  </p>
                ))}

                <h6 class='font-semibold py-2'>Improvements: </h6>

                {log.improvements.map((improvement, index) => (
                  <p class='pt-5'>
                    {index + 1}. {improvement}
                  </p>
                ))}
              </>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
