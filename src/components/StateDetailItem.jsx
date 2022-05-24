import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

import StateDetailItemPerson from './StateDetailItemPerson';

dayjs.extend(relativeTime);

export default function StateDetailItem({ stateData, candidates }) {
  // console.log(stateData);
  return (
    <div className="flex text-black p-3 whitespace-nowrap flex-column">
      <div className="font-bold text-[1.2rem]">{stateData?.stateName}</div>

      <div className="flex mr-3">
        <p className="mr-5">Elec. Votes: {stateData?.electoralVotes}</p>
        <p className="mr-5">Update: {dayjs().to(dayjs(stateData?.lastUpdated))}</p>
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
