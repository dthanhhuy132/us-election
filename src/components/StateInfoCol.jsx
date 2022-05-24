import classNames from 'classnames';
import { useEffect, useRef, useState } from 'react';
import StateInfoVoteDetail from './StateInfoVoteDetail';

export default function StateInfoCol({ stateName, index }) {
  const data = JSON.parse(localStorage.getItem('dataUSElection'));
  const [isShowDetail, setIsShowDetail] = useState(false);
  const [moustPosition, setMoustPosition] = useState(400);
  const [stateDataFull, setStateDataFull] = useState({
    stateData: null,
    candidateData: null,
  });

  const [vote, setVote] = useState({
    trumpVote: null,
    bidenVote: null,
  });

  function handleShowDetail(e) {
    if (e.target.innerText === '') {
      e.target.style.cursor = 'default';
      return;
    }
    e.target.style.zIndex = 50;
    setMoustPosition(e.clientX);
    setIsShowDetail(true);
  }

  function handleTurnOffShowDetail(e) {
    setIsShowDetail(false);
    document.querySelectorAll('.state-name').forEach((x) => {
      x.style.zIndex = 1;
    });
    setMoustPosition(e.clientX);
  }

  useEffect(() => {
    const stateData = data.filter((x) => x.stateCode === stateName)[0];
    const candidates = stateData?.candidates;
    setStateDataFull({
      stateData: stateData,
      candidateData: candidates,
    });

    function getVote(name) {
      let vote = 0;

      candidates?.forEach((x) => {
        if (x.lastName === name) {
          vote = x.vote;
        }
      });
      return vote;
    }
    setVote({ trumpVote: getVote('Trump'), bidenVote: getVote('Biden') });
  }, [stateName]);

  const voteBg = classNames({
    'bg-red-700 text-white': vote.trumpVote > vote.bidenVote,
    'bg-blue-700 text-white': vote.trumpVote < vote.bidenVote,
  });

  return (
    <>
      <div
        className={`relative w-1/11 text-black w-[60px] h-[60px] m-1 flex items-center justify-center cursor-pointer rounded-sm z-1 state-name
      ${voteBg}
    `}
        onMouseOver={(e) => handleShowDetail(e)}
        onMouseLeave={(e) => handleTurnOffShowDetail(e)}
      >
        {stateName}
        {isShowDetail && (
          <StateInfoVoteDetail
            stateDataFull={stateDataFull}
            voteBg={voteBg}
            moustPosition={moustPosition}
            isShowDetail={isShowDetail}
          />
        )}
      </div>

      {
        <div
          className={`fixed top-0 right-0 left-0 bottom-0 bg-[#00000097] z-[-1] pointer-events-none opacity-0 ${
            isShowDetail && '!z-[2] opacity-100 transition-all duration-300 ease-out'
          }`}
        ></div>
      }
    </>
  );
}
