import StateInfoRow from '../components/StateInfoRow';

const stateMap = [
  ['AK', '', '', '', '', '', '', '', '', '', 'ME'],
  ['', '', '', '', '', '', '', '', '', 'VT', 'NH'],
  ['WA', 'ID', 'MT', 'ND', 'MN', '', '', 'OH', 'NY', 'CT', 'MA'],
  ['OR', 'UT', 'WY', 'SD', 'IA', 'WI', 'MI', 'WV', 'PA', 'NJ', 'RI'],
  ['CA', 'NV', 'CO', 'NE', 'MO', 'IL', 'IN', 'NC', 'MD', 'DE', ''],
  ['', 'AZ', 'NM', 'KS', 'AR', 'TN', 'KY', 'SC', 'VA', 'DC', ''],
  ['', '', '', 'OK', 'LA', 'MS', 'AL', 'GA', '', '', ''],
  ['HI', '', '', 'TX', '', '', '', 'FL', '', '', ''],
];

export default function StateInfoPage() {
  return (
    <div className="mx-auto">
      {stateMap.map((state, index) => (
        <StateInfoRow stateInRow={state} key={index} />
      ))}
    </div>
  );
}
