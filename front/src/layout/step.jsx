import axios from 'axios';
import { useState } from "react";

export default function Step() {
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
        <div>
            <h1 class="mb-4 text-center font-black text-gray-700">STEPS</h1>
            <div class="flex">
                <div class="w-1/3 text-center px-6">
                    <div class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                        <div class="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <image href="https://www.unwrap.in.th/images/theme/default/assets/images/icon-style-talk.svg" width="24" height="24" />
                            </svg>

                        </div>
                        <div class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                            <h2 class="font-bold text-sm">1.บอกสไตล์ของคุณ</h2>
                            <p class="text-xs text-gray-600">
                                กรอกแบบสอบถามประมาณ 8-15 นาที เพื่อบอกสไตล์ ไซส์ ความชอบ และระดับราคาที่ต้องการ
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- ขั้นตอนที่ 2 --> */}
                <div class="flex-1 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" /></svg>
                </div>
                {/* <!-- ขั้นตอนที่ 3 --> */}
                <div class="w-1/3 text-center px-6">
                    <div class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                        <div class="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <image href="https://www.unwrap.in.th/images/theme/default/assets/images/icon-confirm.svg" width="24" height="24" />
                            </svg>

                        </div>
                        <div class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                            <h2 class="font-bold text-sm">2.ยืนยันการสั่งซื้อ</h2>
                            <p class="text-xs text-gray-600">
                                ยืนยันการสั่งซื้อสินค่า
                            </p>
                        </div>
                    </div>
                </div>
                {/* <!-- ขั้นตอนที่ 4 --> */}
                <div class="flex-1 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" /></svg>
                </div>
                <div class="w-1/3 text-center px-6">
                    <div class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                        <div class="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <image href="https://www.unwrap.in.th/images/theme/default/assets/images/icon-pay.svg" width="24" height="24" />
                            </svg>

                        </div>
                        <div class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                            <h2 class="font-bold text-sm">3.ชำระค่าบริการ</h2>
                            <p class="text-xs text-gray-600">
                                ชำระค่าบริการสินค้า และรอการจัดส่ง 3-7 วัน
                            </p>
                        </div>
                    </div>
                </div>
                <div class="flex-1 flex items-center justify-center">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M14 2h-7.229l7.014 7h-13.785v6h13.785l-7.014 7h7.229l10-10z" /></svg>
                </div>
                <div class="w-1/3 text-center px-6">
                    <div class="bg-gray-300 rounded-lg flex items-center justify-center border border-gray-200">
                        <div class="w-1/3 bg-transparent h-20 flex items-center justify-center icon-step">
                            <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
                                <image href="https://www.unwrap.in.th/images/theme/default/assets/images/icon-feedback.svg" width="24" height="24" />
                            </svg>

                        </div>
                        <div class="w-2/3 bg-gray-200 h-24 flex flex-col items-center justify-center px-1 rounded-r-lg body-step">
                            <h2 class="font-bold text-sm">4.แจ้งผลการสั่งซื้อ</h2>
                            <p class="text-xs text-gray-600">
                                ชำระค่าบริการสินค้า และรอการจัดส่ง 3-7 วัน
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    );
}
