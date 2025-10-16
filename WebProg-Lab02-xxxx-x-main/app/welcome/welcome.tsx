import PetFooter from "../components/footer";
import PetMenu from "../components/menu";

export function Welcome() {
  return (
    <>
      <div className="min-h-screen bg-gray-100 p-8">
        <PetMenu />
        <div className="bg-gray-100">
          <div className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-bold mb-4">ข้อมูลผู้พัฒนาเว็บแอปพลิเคชัน</h2>
            <div className="overflow-x-auto">
              <div className="flex items-center gap-4">
                <img
                  className="w-10 h-10 rounded-full"
                  src="/images/profile-picture.png"
                  title="เปลี่ยนเป็นรูปนักศึกษา"
                  alt="Profile"
                />
                <div className="font-medium dark:text-white">
                  <div>ชื่อ-สกุล: ปารมี เทพมงคล</div>
                  <div>รหัสนักศึกษา: 026730491007-3</div>
                  <div className="text-sm text-gray-500 dark:text-gray-400">
                    อีเมล: karnparamee@gmail.com
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <PetFooter
          stdname="ปารมี เทพมงคล"
          fburl="https://facebook.com/karn.paramee"
        />
      </div>
    </>
  );
}
