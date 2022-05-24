import { Link } from 'react-router-dom';

const header = [
  { name: 'President', path: 'president' },
  { name: 'States', path: 'state' },
  { name: 'State Details', path: 'state-detail' },
];

export default function Header() {
  return (
    <ul className="nav justify-content-center mt-3">
      {header.map((item, index) => (
        <li className="nav-item px-4" key={index}>
          <Link to={item.path}>{item.name}</Link>
        </li>
      ))}
    </ul>
  );
}
