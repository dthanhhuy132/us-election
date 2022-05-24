import PresidentItem from '../components/PresidentItem';
import PresidetnPageHeader from '../components/PresidentPageHeader';

export default function President() {
  const dataFromLocalStorage = JSON.parse(localStorage.getItem('dataUSElection'));
  const lastItem = dataFromLocalStorage[dataFromLocalStorage.length - 1];

  console.log('dataFromLocalStorage', dataFromLocalStorage);

  return (
    <div>
      <PresidetnPageHeader lastItem={lastItem} />
      <div className="flex flex-wrap px-5 mt-5 md:flex-nowrap">
        {lastItem.candidates.map((candidate, index) => (
          <PresidentItem key={index} index={index} candidate={candidate} />
        ))}
      </div>
    </div>
  );
}
