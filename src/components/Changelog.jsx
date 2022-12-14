import React from 'react';
import changeLog from '../../public/changelog.json';

const Changelog = () => {
  return (
    <div class='relative'>
      <div class='max-w-7xl mx-auto px-6 md:px-12 xl:px-6'>
        <div class='flex'>
          <div class='flex-col pt-28 mr-5'>
            <h3 class='text-2xl md:flex hidden font-semibold text-primary '>
              Sprint List
            </h3>
            {changeLog.map((log, index) => (
              <div class='pt-5 md:flex hidden flex-col ' key={index}>
                <a
                  href={`#sprint-${log.sprint}`}
                  class='hover:text-primary font-semibold'
                >
                  {index + 1}. Sprint {log.sprint}
                </a>
              </div>
            ))}
          </div>
          <div class='relative md:w-3/4 pt-28 m-auto mb-28'>
            <h3 class='text-4xl font-bold text-primary '>
              Changelog for sprints
            </h3>

            {changeLog.map((log, ind) => (
              <div key={ind}>
                <h4
                  class='text-2xl pt-16 mb-3 font-bold text-primary'
                  id={`sprint-${log.sprint}`}
                >
                  Sprint: {log.sprint} [ {log.startDate} ]
                </h4>

                {log.features.length !== 0 ? (
                  <h6 class='font-semibold pt-2'>Features: </h6>
                ) : (
                  ''
                )}

                <ol class='list-decimal pl-4'>
                  {log.features.map((feature, index) => (
                    <li key={index} class='pt-1 my-3 text-justify'>
                      {feature}
                    </li>
                  ))}
                </ol>

                {log.fixes.length !== 0 ? (
                  <h6 class='font-semibold pt-5'>Fixes: </h6>
                ) : (
                  ''
                )}

                <ol class='list-decimal pl-4'>
                  {log.fixes.map((fixe, index) => (
                    <li key={index} class='pt-1 my-3 text-justify'>
                      {fixe}
                    </li>
                  ))}
                </ol>

                {log.improvements.length !== 0 ? (
                  <h6 class='font-semibold pt-5'>Improvements: </h6>
                ) : (
                  ''
                )}

                <ol class='list-decimal pl-4'>
                  {log.improvements.map((improvement, index) => (
                    <li key={index} class='pt-1 my-3 text-justify'>
                      {improvement}
                    </li>
                  ))}
                </ol>

                <div class='flex flex-col items-center py-4'>
                  {log.youtubeLink !== '' ? (
                    <a href={log.youtubeLink} target='_blank'>
                      <button class='bg-primary text-white font-medium pt-1 my-3 py-1 px-6'>
                        Watch Sprint Video
                      </button>
                    </a>
                  ) : (
                    ''
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Changelog;
