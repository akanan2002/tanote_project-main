import axios from 'axios';
import { useState } from "react";

export default function About() {
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
      const response = await axios.post('http://localhost:8889/auth/About', input);
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
      <link rel="stylesheet" href="https://cdn.materialdesignicons.com/6.5.95/css/materialdesignicons.min.css" />

      <div className="flex items-center justify-center min-h-screen bg-white py-10">
        <div className="flex flex-col">
          <span className="text-center font-bold ">
            <h1 className="text-blue-900 text-opacity-50 text-5xl font-bold mb-8 h-10">
              About
            </h1>
            <hr className="my-4" />

            {/* <a href="https://egoistdeveloper.github.io/twcss-to-sass-playground/" target="_blank" className="text-blue-600">
                            Convetert to SASS
                        </a> */}
          </span>

          <div className="flex flex-col mt-8">
            <div className="container max-w-7xl px-4">
              <div className="flex flex-wrap justify-center text-center mb-24">
                <div className="w-full lg:w-6/12 px-4">
                  {/* <h1 className="text-gray-900 text-4xl font-bold mb-8 h-10">
                                        About
                                    </h1> */}
                  <h1 className="text-blue-900 text-opacity-50 text-2xl font-bold mb-8">
                    เกี่ยวกับเรา
                  </h1>
                  <p className="text-gray-700 text-lg font-light">
                  บริการเลือกสรรเสื้อผ้าเพื่อคุณโดยเฉพาะ ผ่านการทำงานของเราอย่างมืออาชีพ
                  </p>
                </div>
              </div>

              <div className="flex flex-wrap">
                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634926878768-2a5b3c42f139?fit=clamp&w=400&h=400&q=80" />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        Tranter Jaskulski
                      </h1>
                      <div className="text-gray-700 font-light mb-2">
                        Founder & Specialist
                      </div>
                      <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                                transition-opacity duration-300">
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-500 mx-auto mt-2"></i>
                        </a>
                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-300 mx-auto mt-2"></i>
                        </a>
                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634896941598-b6b500a502a7?fit=clamp&w=400&h=400&q=80" />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        Denice Jagna
                      </h1>
                      <div className="text-gray-700 font-light mb-2">
                        Tired & M. Specialist
                      </div>
                      <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                                transition-opacity duration-300">
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                        </a>
                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                        </a>
                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1634193295627-1cdddf751ebf?fit=clamp&w=400&h=400&q=80" />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        Kenji Milton
                      </h1>
                      <div className="text-gray-700 font-light mb-2">
                        Team Memeber
                      </div>
                      <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                                transition-opacity duration-300">
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                        </a>
                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                        </a>
                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="w-full md:w-6/12 lg:w-3/12 mb-6 px-6 sm:px-6 lg:px-4">
                  <div className="flex flex-col">
                    <a href="#" className="mx-auto">
                      <img className="rounded-2xl drop-shadow-md hover:drop-shadow-xl transition-all duration-200 delay-100"
                        src="https://images.unsplash.com/photo-1635003913011-95971abba560?fit=clamp&w=400&h=400&q=80" />
                    </a>

                    <div className="text-center mt-6">
                      <h1 className="text-gray-900 text-xl font-bold mb-1">
                        Doesn't matter
                      </h1>
                      <div className="text-gray-700 font-light mb-2">
                        Will be fired
                      </div>
                      <div className="flex items-center justify-center opacity-50 hover:opacity-100
                                                transition-opacity duration-300">
                        <a href="#" className="flex rounded-full hover:bg-indigo-50 h-10 w-10">
                          <i className="mdi mdi-linkedin text-indigo-700 mx-auto mt-2"></i>
                        </a>
                        <a href="#" className="flex rounded-full hover:bg-blue-50 h-10 w-10">
                          <i className="mdi mdi-twitter text-blue-400 mx-auto mt-2"></i>
                        </a>
                        <a href="#" className="flex rounded-full hover:bg-orange-50 h-10 w-10">
                          <i className="mdi mdi-instagram text-orange-400 mx-auto mt-2"></i>
                        </a>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
