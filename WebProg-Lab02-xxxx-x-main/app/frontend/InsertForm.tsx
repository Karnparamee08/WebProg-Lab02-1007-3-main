import PetFooter from "../components/footer";
import PetMenu from "../components/menu";
import { Link } from "react-router-dom";
import { useState } from 'react';

export default function InsertForm() {
  const [formData, setFormData] = useState({
    petName: '',
    petType: 0,
    petSex: '',
    petDesc: '',
    ownerName: '',
    ownerEmail: ''
  });
  const [message, setMessage] = useState('');

  // จัดการการเปลี่ยนแปลงของ Input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage('กำลังเพิ่มข้อมูลสัตว์เลี้ยง...');

    try {
      const response = await fetch('http://localhost:3000/pets', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          ...formData,
          petType: parseInt(formData.petType)
        }),
      });

      if (response.ok) {
        const result = await response.json();
        setMessage(`[INFO] เพิ่มข้อมูลสัตว์เลี้ยงสำเร็จ! รหัส: ${result.addedItem.petId}`);
        console.log('ข้อมูลสัตว์เลี้ยงที่ถูกเพิ่ม:', result.addedItem);

        // เคลียร์ฟอร์ม
        setFormData({
          petName: '',
          petType: 0,
          petSex: '',
          petDesc: '',
          ownerName: '',
          ownerEmail: ''
        });
      } else {
        setMessage('[ERROR] เพิ่มข้อมูลสัตว์เลี้ยงไม่สำเร็จ ;(');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      setMessage('[ERROR] เกิดข้อผิดพลาดในการเชื่อมต่อ APIs ;(');
    }
  };

  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <PetMenu />
        <div className="max-w-md mx-auto bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-bold mb-4">เพิ่มข้อมูลสัตว์เลี้ยงใหม่</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label htmlFor="petName" className="block text-gray-700">ชื่อสัตว์เลี้ยง</label>
              <input
                type="text"
                id="petName"
                name="petName"
                value={formData.petName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="petType" className="block text-gray-700">ประเภทสัตว์เลี้ยง</label>
              <select
                id="petType"
                name="petType"
                value={formData.petType}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
                required
              >
                <option value="" disabled>-ระบุประเภท-</option>
                <option value={10}>สุนัข</option>
                <option value={20}>แมว</option>
                <option value={30}>สิงโต</option>
                <option value={40}>อื่น ๆ</option>
              </select>
            </div>

            {/* เพศ */}
            <div className="mb-4">
              <label className="block text-gray-700">เพศ</label>
              <div className="flex">
                <div className="flex items-center me-4">
                  <input id="petSex1" type="radio" value="M" name="petSex"
                    onChange={handleChange} checked={formData.petSex === 'M'} />
                  <label htmlFor="petSex1" className="ms-2">Male</label>
                </div>
                <div className="flex items-center me-4">
                  <input id="petSex2" type="radio" value="F" name="petSex"
                    onChange={handleChange} checked={formData.petSex === 'F'} />
                  <label htmlFor="petSex2" className="ms-2">Female</label>
                </div>
                <div className="flex items-center me-4">
                  <input id="petSex3" type="radio" value="O" name="petSex"
                    onChange={handleChange} checked={formData.petSex === 'O'} />
                  <label htmlFor="petSex3" className="ms-2">N/A</label>
                </div>
              </div>
            </div>

            {/* รายละเอียด */}
            <div className="mb-4">
              <label htmlFor="petDesc" className="block text-gray-700">รายละเอียด</label>
              <textarea
                id="petDesc"
                name="petDesc"
                value={formData.petDesc}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
                rows="3"
                required
              ></textarea>
            </div>

            {/* ผู้ดูแล */}
            <div className="mb-4">
              <label htmlFor="ownerName" className="block text-gray-700">ผู้ดูแล</label>
              <input
                type="text"
                id="ownerName"
                name="ownerName"
                value={formData.ownerName}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
                required
              />
            </div>

            {/* อีเมลผู้ดูแล */}
            <div className="mb-4">
              <label htmlFor="ownerEmail" className="block text-gray-700">ติดต่อผู้ดูแล</label>
              <input
                type="email"
                id="ownerEmail"
                name="ownerEmail"
                value={formData.ownerEmail}
                onChange={handleChange}
                className="w-full mt-1 p-2 border rounded-md"
                required
              />
            </div>

            <button
              type="submit"
              className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600"
            >
              เพิ่มข้อมูลสัตว์เลี้ยง
            </button>
          </form>

          {message && <p className="mt-4 p-2 bg-yellow-100 rounded">{message}</p>}
        </div>

        <div className="mt-4">
          <Link to="/" className="text-orange-600 hover:text-orange-900 font-semibold">ย้อนกลับ</Link>
        </div>

        <PetFooter stdname="Karn Paramee" fburl="https://facebook.com/yourprofile" />
      </div>
    </>
  );
}
