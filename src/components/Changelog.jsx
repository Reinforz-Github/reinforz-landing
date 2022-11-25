import React from 'react';
import { changeLog } from '../constants/changelog.js';

const Changelog = () => {
  return (
    <div class='relative'>
      <div class='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
        <div class='flex'>
          {changeLog.map((log, index) => (
            <div class='pt-28 hidden md:flex flex-col space-y-3'>
              <a
                href={`#${log.sprint}`}
                class='hover:text-primary font-semibold'
              >
                {index + 1}. Sprint: {log.sprint} [ {log.startDate} ]
              </a>
            </div>
          ))}
          <div class='relative md:w-3/4 pt-28 m-auto'>
            <h3 class='text-4xl font-semibold text-primary text-center'>
              Changelog for sprints
            </h3>

            {changeLog.map((log) => (
              <>
                <h4
                  class='text-3xl pt-16 font-bold text-primary'
                  id={`${log.sprint}`}
                >
                  Sprint: {log.sprint} [ {log.startDate} ]
                </h4>

                <p class='font-normal py-2'>Features: </p>

                {log.features.map((feature, index) => (
                  <p class='pt-5'>
                    {index + 1}. {feature}
                  </p>
                ))}

                <p class='font-normal py-2'>Fixes: </p>

                {log.fixes.map((fixe, index) => (
                  <p class='pt-5'>
                    {index + 1}. {fixe}
                  </p>
                ))}

                <p class='font-normal py-2'>Improvements: </p>

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
