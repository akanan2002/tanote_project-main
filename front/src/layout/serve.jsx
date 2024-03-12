import axios from 'axios';
import { useState } from "react";

export default function Serve() {
    const [input, setInput] = useState({
        username: '',
        email: '',
        password: '',
        confirmPassword: '',
    });

    const handleChange = e => {
        setInput(prevState => ({ ...prevState, [e.target.name]: e.target.value }));
    };

    const handleSubmit = async e => {
        try {
            e.preventDefault();
            // validation
            if (input.password !== input.confirmPassword) {
                return alert('Please check confirm password');
            }
            const response = await axios.post('http://localhost:8889/auth/register', input);
            console.log(response);
            if (response.status === 200) {
                alert('Register Successful');
            }
        } catch (error) {
            console.log(error.message);
        }
    };

    return (
        <section className="body-font h-screen bg-gray-100 pt-10 text-gray-600">
            <div className="container mx-auto mt-10 flex max-w-3xl flex-wrap justify-center rounded-lg bg-white px-5 py-24">
                {/* QR Code Number Account & Uploadfile */}
                <div className="flex-wrap md:flex">
                    <div className="mx-auto">
                        <img className="mx-auto mt-12 h-52 w-52 rounded-lg border p-2 md:mt-0" src="https://i.imgur.com/FQS7fFC.png" alt="step" />
                        <div>
                            <h1 className="font-laonoto mt-4 text-center text-xl font-bold">โอนตามหมายเลขบัญชี</h1>
                            <p className="mt-2 text-center font-semibold text-gray-600">เอกอนันต์ โล่ห์คำ</p>
                            <p className="mt-1 text-center font-medium text-red-500">040-12-00-01166166-001</p>
                        </div>
                        {/* Upload file */}
                        <div className="mx-auto w-52">
                            <div className="m-4">
                                <div className="flex w-full items-center justify-center">
                                    <label className="flex h-14 w-full cursor-pointer flex-col border-4 border-dashed border-gray-200 hover:border-gray-300 hover:bg-gray-100">
                                        <div className="mt-4 flex items-center justify-center space-x-1">
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="h-6 w-6 text-gray-400">
                                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 16.5V9.75m0 0l3 3m-3-3l-3 3M6.75 19.5a4.5 4.5 0 01-1.41-8.775 5.25 5.25 0 0110.233-2.33 3 3 0 013.758 3.848A3.752 3.752 0 0118 19.5H6.75z" />
                                            </svg>
                                            <p className="font-laonoto text-sm tracking-wider text-gray-400 group-hover:text-gray-600">อัปโหลดภาพหลักฐาน</p>
                                        </div>
                                        <input type="file" className="opacity-0" />
                                    </label>
                                </div>
                            </div>
                        </div>
                        <button className="mx-auto block rounded-md border bg-blue-500 px-6 py-2 text-white outline-none">ส่งหลักฐานการโอนเงิน</button>
                    </div>
                    {/* Step Checkout */}
                    <div className="mt-8 max-w-sm md:mt-0 md:ml-10 md:w-2/3">
                        <div className="relative flex pb-12">
                            <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                            </div>
                            <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                                    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 1</h2>
                                <p className="font-laonoto leading-relaxed">
                                    1.บอกสไตล์ของคุณ <br />
                                    {/* <b>QR CODE </b>ຫຼື ໂອນຈ່າຍຜ່ານເລກບັນຊີ */}
                                </p>
                            </div>
                        </div>
                        <div className="relative flex pb-12">
                            <div className="absolute inset-0 flex h-full w-10 items-center justify-center">
                                <div className="pointer-events-none h-full w-1 bg-gray-200"></div>
                            </div>
                            <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                                    <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 2</h2>
                                <p className="font-laonoto leading-relaxed">ยืนยันการสั่ง <b>หลักฐาน</b><b>สลิปการโอนรูปถ่าย</b>.</p>
                            </div>
                        </div>
                        <div className="relative flex pb-12">
                            <div className="relative z-10 inline-flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-blue-500 text-white">
                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="h-5 w-5" viewBox="0 0 24 24">
                                    <circle cx="12" cy="5" r="3"></circle>
                                    <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
                                </svg>
                            </div>
                            <div className="flex-grow pl-4">
                                <h2 className="title-font mb-1 text-sm font-medium tracking-wider text-gray-900">STEP 3</h2>
                                <p className="font-laonoto leading-relaxed">ชำระค่าสินค้าโอนเงินเรียบร้อยแล้ว กรุณารอเจ้าหน้าที่ตรวจสอบ สามารถตรวจสอบสถานะการชำระเงินได้สำเร็จ ไปที่หน้า <span> <b>Payments</b></span>.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
