import PetFooter from "../components/footer";
import PetMenu from "../components/menu";
import { useState, useEffect } from 'react';
import { Link, useNavigate } from "react-router";

export default function PetList ()
{
  const [dataList, setDataList] = useState([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = .......... fetch('..........');
        const data = await response.json();
        setDataList(..........);
      } catch (error) {
        console.error('Error fetching data:', error);
      } finally {
        setLoading(false);
      }
    };

    ..........();
  }, []);

  if (loading) {
    return <p className="text-center">กำลังโหลดข้อมูล...</p>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <PetMenu />
        <div className="bg-white p-6 rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-4">ข้อมูลสัตว์เลี้ยงในคลีนิค</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
                <thead className="bg-gray-50">
                <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">รหัส</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ชื่อสัตว์เลี้ยง</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ผู้ดูแล</th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">ดำเนินการ</th>
                </tr>
                </thead>
                <tbody className="bg-white divide-y divide-gray-200">
                {__________.map((item) => (
                <tr key={item.petId}>
                  <td className="px-6 py-4 whitespace-nowrap">{..........}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{..........}</td>
                  <td className="px-6 py-4 whitespace-nowrap">{..........}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                  <Link to={`/app/petview/..........`} className="text-indigo-600 hover:text-indigo-900 font-semibold">
                        รายละเอียด
                   </Link>
                  </td>
                </tr>
                ))}
                </tbody>
                </table>
          </div>
          <div className="mt-4">
            <Link to="/" className="text-orange-600 hover:text-orange-900 font-semibold">ย้อนกลับ</Link>
          </div>
        </div>
        <PetFooter stdname=".........." fburl=".........." />
      </div>
    </>
  );
}