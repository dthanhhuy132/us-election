import dayjs from 'dayjs';
import relativeTime from 'dayjs/plugin/relativeTime';

dayjs.extend(relativeTime);

export default function PresidetnPageHeader({ lastItem }) {
  return (
    <div className="text-center">
      <h3 className="text-[44px] font-semiboldd">President Result</h3>
      <div className="mt-2">
        <p>
          <span className="text-red-500">Update: </span>
          <span className="text-red-600 font-bold pr-3">
            {dayjs().to(dayjs(lastItem?.lastUpdated))}
          </span>
          Exit Poll +
        </p>
      </div>
    </div>
  );
}
