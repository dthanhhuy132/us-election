import StateInfoCol from './StateInfoCol';

export default function StateInfoRow({ stateInRow = [] }) {
  return (
    <div>
      {stateInRow.length > 0 ? (
        <div className="flex">
          {stateInRow.map((state, index) => (
            <StateInfoCol stateName={state} key={index} />
          ))}
        </div>
      ) : (
        <div>Đang loading</div>
      )}
    </div>
  );
}
