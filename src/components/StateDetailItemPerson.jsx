import classNames from 'classnames';

export default function StateDetailItemPerson(candidate) {
  const bg = classNames({
    'bg-red-700 text-white':
      candidate?.candidate?.isWinner && candidate?.candidate?.lastName === 'Trump',
    'bg-blue-700 text-white':
      candidate?.candidate?.isWinner && candidate?.candidate?.lastName === 'Biden',
  });

  return (
    <div className={`flex border-1 ${bg} p-2 my-2 rounded-md`}>
      <div className="mr-3 min-w-[200px]">{candidate?.candidate?.fullName}</div>
      <div className="flex">
        <p className="mr-4 inline-block min-w-[80px]">
          {candidate?.candidate?.vote.toLocaleString('en-EN')}
        </p>
        <p className="inline-block">{candidate?.candidate?.votePct.toLocaleString('en-EN')}%</p>
      </div>
    </div>
  );
}
