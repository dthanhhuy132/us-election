import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';
import { useEffect, useState } from 'react';

import StateDetailItemPerson from './StateDetailItemPerson';

dayjs.extend(relativeTime);

const stateFlag = [
  '<i class="fa-solid fa-flag-usa"></i>',
  '<i class="fa-solid fa-house-flag"></i>',
  '<i class="fa-solid fa-feather"></i>',
  '<i class="fa-solid fa-snowflake"></i>',
  '<i class="fa-brands fa-canadian-maple-leaf"></i>',
];
export default function StateDetailItem({ stateData, candidates }) {
  const [flag, setFlage] = useState(null);

  useEffect(() => {
    setFlage(stateFlag[Math.floor(Math.random() * 6)]);
  }, [stateData?.stateName]);

  return (
    <div className="flex text-black p-3 whitespace-nowrap flex-column">
      <div className="font-bold text-[1.5rem]">
        {flag && <span className="mr-2" dangerouslySetInnerHTML={{ __html: flag }} />}
        {stateData?.stateName}
      </div>

      <div className="flex mr-3 text-[0.9rem]">
        <p className="mr-5 font-semibold ">Elec. Votes: {stateData?.electoralVotes}</p>
        <p className="mr-5  font-semibold text-orange-600">
          Update: {dayjs().to(dayjs(stateData?.lastUpdated))}
        </p>
        <span>{stateData?.pctIn}% In</span>
      </div>

      <div className="min-w-full">
        {candidates &&
          candidates.map((candidate, index) => (
            <StateDetailItemPerson key={index} candidate={candidate} />
          ))}
      </div>
    </div>
  );
}
