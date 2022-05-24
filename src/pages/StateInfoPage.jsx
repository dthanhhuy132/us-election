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

const indicators = ['won', 'likely', 'lean', 'toss', 'Lean', 'Likely', 'Won'];

export default function StateInfoPage() {
  return (
    <div className="mx-auto">
      {stateMap.map((state, index) => (
        <StateInfoRow stateInRow={state} key={index} />
      ))}

      <ul className="flex mt-20 justify-between px-[100px]">
        {indicators.map((indicator, index) => (
          <li key={index}>
            <a
              href="#"
              className="capitalize hover:font-bold transition-all duration-200 ease-linear inline-block min-w-[70px]"
            >
              <span className="inline-block border-2 rounded-full w-3 h-3 border-orange-500 mr-1"></span>
              {indicator}
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
