import { Link } from "react-router";

export default function PetMenu () {
  return (
    <nav className="bg-white p-4 shadow-md rounded-lg mb-4">
      <ul className="flex space-x-4">
        <li>
          <Link to="/" className="text-blue-500 hover:text-blue-700">หน้าแรก</Link>
        </li>
        <li>
          <Link to="/app/petlist" className="text-blue-500 hover:text-blue-700">รายการข้อมูล</Link>
        </li>
        <li>
          <Link to="/app/petform" className="text-blue-500 hover:text-blue-700">เพิ่มข้อมูล</Link>
        </li>
      </ul>
    </nav>
  );
}