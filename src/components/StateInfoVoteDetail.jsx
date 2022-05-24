import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import StateDetailItem from './StateDetailItem';

export default function StateInfoVoteDetail({ stateDataFull, voteBg }) {
  const candidates = stateDataFull?.candidateData;
  const stateData = stateDataFull?.stateData;
  const [displayPosition, setDisplayPosition] = useState('top-[110%] left-0');
  const [displayIndicatorPostion, setDisplayIndicatorPostion] = useState('top-[-1px] left-[18px]');

  const voteDetailRef = useRef(null);

  useEffect(() => {
    const stateInfo = voteDetailRef.current;

    const stateInfoReact = stateInfo.getBoundingClientRect();

    const stateInfoRight = stateInfoReact.right;
    const stateInfoBottom = stateInfoReact.bottom;

    if (stateInfoRight >= window.innerWidth - 100) {
      setDisplayPosition('top-[110%] right-0');
      setDisplayIndicatorPostion('top-[-1px] right-[18px]');
    }

    if (stateInfoBottom >= window.innerHeight - 50) {
      setDisplayPosition('bottom-[110%] left-0');
      setDisplayIndicatorPostion('bottom-[-60px] left-[18px] rotate-180');
    }

    if (stateInfoBottom >= window.innerHeight - 50 && stateInfoRight >= window.innerWidth - 100) {
      setDisplayPosition('bottom-[110%]  right-0');
      setDisplayIndicatorPostion('bottom-[-60px] right-[18px] rotate-180');
    }
  }, []);

  return (
    <>
      {/* <div className="fixed top-0 right-0 left-0 bottom-0 bg-[#00000064] z-5 pointer-events-none"></div> */}
      <div
        ref={voteDetailRef}
        className={`absolute bg-white ${displayPosition} border-1 rounded-md z-10
      `}
      >
        <div
          className={`absolute ${displayIndicatorPostion} -translate-y-full  z-1000 w-[20px] h-[20px] border-[10px] border-transparent border-t-[20px] ${
            voteBg === 'bg-red-700 text-white' ? 'border-b-red-600' : 'border-b-blue-500'
          } `}
        ></div>
        <StateDetailItem candidates={candidates} stateData={stateData} />
      </div>
    </>
  );
}
