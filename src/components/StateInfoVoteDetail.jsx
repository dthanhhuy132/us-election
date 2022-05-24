import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import StateDetailItem from './StateDetailItem';

const stateFlag = [
  '<i class="fa-solid fa-flag-usa"></i>',
  '<i class="fa-solid fa-house-flag"></i>',
  '<i class="fa-solid fa-feather"></i>',
  '<i class="fa-solid fa-snowflake"></i>',
  '<i class="fa-brands fa-canadian-maple-leaf"></i>',
];

export default function StateInfoVoteDetail({
  stateDataFull,
  voteBg,
  moustPosition,
  isShowDetail,
}) {
  const candidates = stateDataFull?.candidateData;
  const stateData = stateDataFull?.stateData;
  const [displayPosition, setDisplayPosition] = useState('top-[110%] left-0');
  const [displayIndicatorPostion, setDisplayIndicatorPostion] = useState('top-[-1px] left-[18px]');

  const voteDetailRef = useRef(null);

  useEffect((e) => {
    const stateInfo = voteDetailRef.current;

    const stateInfoReact = stateInfo.getBoundingClientRect();
    const stateInfoBottom = stateInfoReact.bottom;

    if (moustPosition >= window.innerWidth / 2) {
      setDisplayPosition('top-[110%] right-0');
      setDisplayIndicatorPostion('top-[-1px] right-[18px]');
    }

    if (stateInfoBottom > window.innerHeight - 50) {
      setDisplayPosition('bottom-[110%] left-0');
      setDisplayIndicatorPostion('bottom-[-60px] left-[18px] rotate-180');
    }

    if (stateInfoBottom >= window.innerHeight - 50 && moustPosition >= window.innerWidth / 2) {
      setDisplayPosition('bottom-[110%]  right-0');
      setDisplayIndicatorPostion('bottom-[-60px] right-[18px] rotate-180');
    }
  }, []);

  return (
    <div
      ref={voteDetailRef}
      className={`absolute bg-white ${displayPosition} border-1 rounded-md z-10 shadow-[0px_0px_30px_#111] opacity-[90%] transition-all duration-300 ease-out
      `}
    >
      <div
        className={`absolute ${displayIndicatorPostion} -translate-y-full z-[50] w-[20px] h-[20px] border-[10px] border-transparent border-t-[20px] transition-all duration-300 ease-in-out opacity-0 
          ${voteBg === 'bg-red-700 text-white' ? 'border-b-red-500' : 'border-b-blue-400'} 
          ${isShowDetail && '!opacity-100'}
          `}
      ></div>
      <StateDetailItem candidates={candidates} stateData={stateData} />
    </div>
  );
}
