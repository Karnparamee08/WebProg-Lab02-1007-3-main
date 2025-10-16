import PetFooter from "..........";
import .......... from "../components/menu";
import { useParams, useNavigate, Link } from "react-router"
import React, { useState, useEffect } from 'react';

export default function PetView ()
{
  const { .......... } = useParams();
  const [item, setItem] = useState(null);
  const [loading, setLoading] = ..........(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchItemDetail = async () => {
      try {
        const response = await fetch(`..........`);
        
        if (response.ok) {
          const data = .......... response.json();
          setItem(..........);
        } else {
          setItem(null);
        }
      } catch (error) {
        console.error('Error fetching item detail:', error);
      } finally {
        setLoading(false);
      }
    };

    ..........();
  }, [petId]);

  if (loading) {
    return <p className="text-center">กำลังโหลดรายละเอียด...</p>;
  }

  if (!item) {
    return <p className="text-center text-red-500">[ERROR] ไม่พบข้อมูลสำหรับ ID: {..........}</p>;
  }

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <PetMenu />
          <div className="max-w-xl mx-auto bg-white p-8 rounded-lg shadow-xl">
            <h2 className="text-2xl font-bold mb-6 text-indigo-600">รายละเอียดข้อมูลสัตว์เลี้ยง (รหัส: {..........})</h2>
            <div className="space-y-4">
              <p><strong>ชื่อสัตว์เลี้ยง:</strong> <span className="text-gray-700">{..........}</span></p>
              <p><strong>เพศ:</strong> <span className="text-green-600 font-semibold">{..........}</span></p>
              <p><strong>ประเภทสัตว์เลี้ยง:</strong> <span className="text-green-600 font-semibold">{..........}</span></p>
              <p><strong>รายละเอียด:</strong> <span className="text-gray-700">{..........}</span></p>
              <p><strong>ผู้ดูแล:</strong> <span className="text-gray-700">{..........}</span></p>
              <p><strong>ติดต่อผู้ดูแล:</strong> <span className="text-gray-700">{..........}</span></p>
            </div>
            
            <div className="mt-6">
              <Link to=".........."  
                className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600"
              >
                กลับไปหน้ารายการสัตว์เลี้ยง
              </Link>
            </div>
          </div>
        <.......... stdname=".........." fburl=".........." />
      </div>
    </>
  );
}