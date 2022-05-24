import classNames from 'classnames';
import { useEffect, useState } from 'react';
import StateInfoVoteDetail from './StateInfoVoteDetail';

export default function StateInfoCol({ stateName }) {
  const data = JSON.parse(localStorage.getItem('dataUSElection'));
  const [isShowDetail, setIsShowDetail] = useState(false);
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
    setIsShowDetail(true);
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
    <div
      className={`relative w-1/11 text-black w-[60px] h-[60px] m-1 flex items-center justify-center cursor-pointer rounded-md z-1
      ${isShowDetail && '!z-9'}
      ${voteBg}
    `}
      onMouseOver={(e) => handleShowDetail(e)}
      onMouseLeave={() => setIsShowDetail(false)}
    >
      {stateName}
      {isShowDetail && <StateInfoVoteDetail stateDataFull={stateDataFull} voteBg={voteBg} />}
    </div>
  );
}
