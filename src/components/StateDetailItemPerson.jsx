import classNames from 'classnames';

export default function StateDetailItemPerson(candidate) {
  const bg = classNames({
    'bg-red-700 text-white':
      candidate?.candidate?.isWinner && candidate?.candidate?.lastName === 'Trump',
    'bg-blue-700 text-white':
      candidate?.candidate?.isWinner && candidate?.candidate?.lastName === 'Biden',
  });

  return (
    <div className={`flex border-2 shadow-md ${bg} p-2 my-2 rounded-md`}>
      <div className="mr-4 min-w-[200px] font-bold">
        {candidate?.candidate?.fullName}{' '}
        {candidate.candidate.isWinner && (
          <span className="inline-block mr-2">
            <i class="fa-solid fa-check"></i>
          </span>
        )}
      </div>
      <div className="flex">
        <p className="mr-4 inline-block min-w-[80px]">
          {candidate?.candidate?.vote.toLocaleString('en-EN')}
        </p>
        <p className="inline-block">{candidate?.candidate?.votePct.toLocaleString('en-EN')}%</p>
      </div>
    </div>
  );
}
