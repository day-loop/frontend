import React from "react"

interface HomeProps {}

export const Home: React.FC<HomeProps> = () => {
  return (
    <div className="flex flex-col w-full min-h-screen font-sans bg-white">
      <div>
        <div className="px-4 py-4 bg-gray-200">
          <div className="w-full md:max-w-6xl md:mx-auto md:flex md:items-center md:justify-between">
            <div>
              <a href="#" className="inline-block py-2 text-2xl font-bold text-gray-800">
                Stats.
              </a>
            </div>
            <div>
              <div className="hidden md:block">
                <a href="#" className="inline-block py-1 mr-6 font-bold text-gray-600 md:py-4">
                  How it Works
                </a>
                <a
                  href="#"
                  className="inline-block py-1 mr-6 text-gray-500 md:py-4 hover:text-gray-600"
                >
                  Solutions
                </a>
                <a
                  href="#"
                  className="inline-block py-1 mr-6 text-gray-500 md:py-4 hover:text-gray-600"
                >
                  Pricing
                </a>
                <a
                  href="#"
                  className="inline-block py-1 mr-6 text-gray-500 md:py-4 hover:text-gray-600"
                >
                  Desktop
                </a>
              </div>
            </div>
            <div className="hidden md:block">
              <a
                href="#"
                className="inline-block py-1 mr-6 text-gray-500 md:py-4 hover:text-gray-600"
              >
                Login
              </a>
              <a
                href="#"
                className="inline-block px-4 py-2 text-gray-700 bg-white rounded-lg hover:bg-gray-100"
              >
                Start a free trial
              </a>
            </div>
          </div>
        </div>
        <div className="bg-gray-200 md:overflow-hidden">
          <div className="px-4 py-16">
            <div className="relative w-full text-center md:max-w-2xl md:mx-auto">
              <h1 className="mb-6 text-xl font-bold leading-tight text-gray-700 sm:text-2xl md:text-5xl">
                A simple and smart tool that will help grow your business{" "}
              </h1>
              <p className="text-gray-600 md:text-xl md:px-18">
                Lorem ipsum, dolor sit amet consectetur adipisicing elit hello.
              </p>
              <div className="absolute bottom-0 right-0 hidden w-40 h-40 -mb-64 -mr-48 bg-blue-800 rounded-full md:block"></div>
              <div className="absolute top-0 right-0 hidden w-5 h-5 mt-32 -mr-40 bg-yellow-500 rounded-full md:block"></div>
            </div>
          </div>
          <svg
            className="hidden text-white bg-gray-200 fill-current md:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill-opacity="1"
              d="M0,64L120,85.3C240,107,480,149,720,149.3C960,149,1200,107,1320,85.3L1440,64L1440,320L1320,320C1200,320,960,320,720,320C480,320,240,320,120,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div
          className="relative z-20 hidden max-w-4xl mx-auto bg-white shadow-lg md:block"
          style={{
            marginTop: "-320px",
            borderRadius: "20px"
          }}
        >
          <div
            className="absolute top-0 left-0 w-20 h-20 -mt-10 -ml-10 bg-yellow-500 rounded-full"
            style={{
              zIndex: -1
            }}
          ></div>
          <div
            className="absolute top-0 left-0 w-5 h-5 mt-12 -ml-32 bg-blue-500 rounded-full"
            style={{
              zIndex: -1
            }}
          ></div>
          <div className="h-10 bg-white border-b border-gray-100 rounded-t-lg"></div>
          <div
            className="flex"
            style={{
              height: "550px"
            }}
          >
            <div className="w-32 p-6 overflow-hidden bg-gray-200 rounded-bl-lg">
              <div className="mb-10 text-center">
                <div className="w-10 h-10 mx-auto mb-4 bg-blue-800 rounded-full"></div>
                <div className="h-2 bg-blue-800 rounded-full"></div>
              </div>
              <div className="mb-10 text-center">
                <div className="w-10 h-10 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                <div className="h-2 bg-gray-300 rounded-full"></div>
              </div>
              <div className="mb-10 text-center">
                <div className="w-10 h-10 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                <div className="h-2 bg-gray-300 rounded-full"></div>
              </div>
              <div className="text-center">
                <div className="w-10 h-10 mx-auto mb-4 bg-gray-300 rounded-full"></div>
                <div className="h-2 bg-gray-300 rounded-full"></div>
              </div>
            </div>
            <div className="flex-1 px-8 py-6">
              <div className="flex flex-wrap -mx-4">
                <div className="w-2/3 px-4">
                  <div className="flex flex-wrap mb-10 -mx-4">
                    <div className="w-1/4 px-4">
                      <div className="p-6 mb-10 text-center bg-white rounded-lg shadow">
                        <div className="w-10 h-10 mx-auto mb-4 bg-green-600 rounded-full"></div>
                        <div className="h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-1/4 px-4">
                      <div className="p-6 mb-10 text-center bg-white rounded-lg shadow">
                        <div className="w-10 h-10 mx-auto mb-4 bg-blue-600 rounded-full"></div>
                        <div className="h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-1/4 px-4">
                      <div className="p-6 mb-10 text-center bg-white rounded-lg shadow">
                        <div className="w-10 h-10 mx-auto mb-4 bg-orange-400 rounded-full"></div>
                        <div className="h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                    <div className="w-1/4 px-4">
                      <div className="p-6 mb-10 text-center bg-white rounded-lg shadow">
                        <div className="w-10 h-10 mx-auto mb-4 bg-blue-800 rounded-full"></div>
                        <div className="h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="h-32 pt-2 mb-10 percentage">
                    <div className="block w-64 h-4 mb-4 bg-gray-200"></div>
                    <div className="block w-32 h-4 mb-4 bg-gray-200"></div>
                    <div className="block w-40 h-4 mb-4 bg-gray-200"></div>
                    <div className="block w-20 h-4 mb-4 bg-gray-200"></div>
                  </div>
                  <div className="flex flex-wrap w-full mb-6">
                    <div className="w-1/2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 mr-4 bg-gray-200 rounded-full"></div>
                        <div>
                          <div className="w-16 h-2 mb-1 bg-gray-200 rounded-full"></div>
                          <div className="w-10 h-2 bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 mr-4 bg-gray-200 rounded-full"></div>
                        <div>
                          <div className="w-16 h-2 mb-1 bg-gray-200 rounded-full"></div>
                          <div className="w-10 h-2 bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="flex flex-wrap w-full">
                    <div className="w-1/2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 mr-4 bg-gray-200 rounded-full"></div>
                        <div>
                          <div className="w-16 h-2 mb-1 bg-gray-200 rounded-full"></div>
                          <div className="w-10 h-2 bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                    <div className="w-1/2">
                      <div className="flex items-center">
                        <div className="w-8 h-8 mr-4 bg-gray-200 rounded-full"></div>
                        <div>
                          <div className="w-16 h-2 mb-1 bg-gray-200 rounded-full"></div>
                          <div className="w-10 h-2 bg-gray-100 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="w-1/3 px-4">
                  <div className="p-6 rounded-lg shadow-lg">
                    <div className="block w-12 h-2 mb-6 bg-gray-200 rounded-full"></div>
                    <svg height="150" width="150" viewBox="0 0 20 20" className="mx-auto mb-12">
                      <circle r="10" cx="10" cy="10" fill="#4299e1" />
                      <circle
                        r="5"
                        cx="10"
                        cy="10"
                        fill="transparent"
                        stroke="#2b6cb0"
                        stroke-width="10"
                        stroke-dasharray="11 31.4"
                        transform="rotate(-90) translate(-20)"
                      />
                    </svg>
                    <div className="flex flex-wrap mb-10 -mx-2">
                      <div className="w-1/3 px-2">
                        <div className="block h-2 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="block h-2 bg-gray-200 rounded-full"></div>
                      </div>
                      <div className="w-1/3 px-2">
                        <div className="block h-2 bg-gray-200 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="flex justify-between my-10">
                    <div>
                      <div className="w-10 h-2 mb-2 bg-gray-300 rounded-full"></div>
                      <div className="w-16 h-2 mb-2 bg-gray-300 rounded-full"></div>
                      <div className="w-8 h-2 bg-gray-300 rounded-full"></div>
                    </div>
                    <div>
                      <div className="w-5 h-2 mb-2 ml-auto bg-gray-300 rounded-full"></div>
                      <div className="w-6 h-2 mb-2 ml-auto bg-gray-300 rounded-full"></div>
                      <div className="w-8 h-2 ml-auto bg-gray-300 rounded-full"></div>
                    </div>
                  </div>
                  <div className="flex justify-end text-right">
                    <div className="w-20 h-8 px-4 mr-2 bg-gray-200 rounded-lg"></div>
                    <div className="w-20 h-8 px-4 bg-green-400 rounded-lg"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-4 md:hidden">
          <div
            className="relative z-20 max-w-4xl mx-auto -mt-10 bg-white shadow-lg"
            style={{
              borderRadius: "20px"
            }}
          >
            <div className="h-10 bg-white border-b border-gray-100 rounded-t-lg"></div>
            <div className="flex" style={{ height: "340px" }}>
              <div className="w-16 px-2 py-6 overflow-hidden bg-gray-200 rounded-bl-lg">
                <div className="mb-6 text-center">
                  <div className="w-4 h-4 mx-auto mb-2 bg-blue-800 rounded-full"></div>
                  <div className="w-8 h-2 mx-auto bg-blue-800 rounded-full"></div>
                </div>
                <div className="mb-6 text-center">
                  <div className="w-4 h-4 mx-auto mb-2 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-2 mx-auto bg-gray-300 rounded-full"></div>
                </div>
                <div className="mb-6 text-center">
                  <div className="w-4 h-4 mx-auto mb-2 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-2 mx-auto bg-gray-300 rounded-full"></div>
                </div>
                <div className="text-center">
                  <div className="w-4 h-4 mx-auto mb-2 bg-gray-300 rounded-full"></div>
                  <div className="w-8 h-2 mx-auto bg-gray-300 rounded-full"></div>
                </div>
              </div>
              <div className="flex-1 px-4 py-6">
                <div className="flex flex-wrap -mx-2">
                  <div className="w-1/3 px-2">
                    <div className="px-2 py-3 mb-6 text-center bg-white rounded-lg shadow">
                      <div className="w-4 h-4 mx-auto mb-2 bg-green-600 rounded-full"></div>
                      <div className="w-8 h-2 mx-auto bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2">
                    <div className="px-2 py-3 mb-6 text-center bg-white rounded-lg shadow">
                      <div className="w-4 h-4 mx-auto mb-2 bg-blue-600 rounded-full"></div>
                      <div className="w-8 h-2 mx-auto bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                  <div className="w-1/3 px-2">
                    <div className="px-2 py-3 mb-6 text-center bg-white rounded-lg shadow">
                      <div className="w-4 h-4 mx-auto mb-2 bg-orange-600 rounded-full"></div>
                      <div className="w-8 h-2 mx-auto bg-gray-200 rounded-full"></div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap mb-6 -mx-2">
                  <div className="w-1/2 px-2">
                    <div className="h-24 p-2 rounded-lg shadow">
                      <div className="h-20 pt-2 percentage">
                        <div className="block w-24 h-2 mb-2 bg-gray-200"></div>
                        <div className="block w-12 h-2 mb-2 bg-gray-200"></div>
                        <div className="block w-20 h-2 mb-2 bg-gray-200"></div>
                        <div className="block w-8 h-2 mb-2 bg-gray-200"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2 px-2">
                    <div className="px-2 py-2 rounded-lg shadow">
                      <div className="block w-8 h-2 mb-2 bg-gray-200 rounded-full"></div>
                      <div className="mb-2">
                        <svg height="50" width="50" viewBox="0 0 20 20" className="mx-auto">
                          <circle r="10" cx="10" cy="10" fill="#ddd" />
                          <circle
                            r="5"
                            cx="10"
                            cy="10"
                            fill="transparent"
                            stroke="#eee"
                            stroke-width="10"
                            stroke-dasharray="11 31.4"
                            transform="rotate(-90) translate(-20)"
                          />
                        </svg>
                      </div>
                      <div className="flex flex-wrap -mx-2">
                        <div className="w-1/3 px-2">
                          <div className="block h-2 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="w-1/3 px-2">
                          <div className="block h-2 bg-gray-200 rounded-full"></div>
                        </div>
                        <div className="w-1/3 px-2">
                          <div className="block h-2 bg-gray-200 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full mb-2">
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-4 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="w-10 h-2 mb-1 bg-gray-200 rounded-full"></div>
                        <div className="w-6 h-2 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-4 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="w-10 h-2 mb-1 bg-gray-200 rounded-full"></div>
                        <div className="w-6 h-2 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex flex-wrap w-full mb-6">
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-4 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="w-10 h-2 mb-1 bg-gray-200 rounded-full"></div>
                        <div className="w-6 h-2 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                  <div className="w-1/2">
                    <div className="flex items-center">
                      <div className="w-4 h-4 mr-4 bg-gray-200 rounded-full"></div>
                      <div>
                        <div className="w-10 h-2 mb-1 bg-gray-200 rounded-full"></div>
                        <div className="w-6 h-2 bg-gray-100 rounded-full"></div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex justify-end text-right">
                  <div className="w-16 h-6 px-4 mr-2 bg-gray-200 rounded-lg"></div>
                  <div className="w-16 h-6 px-4 bg-green-400 rounded-lg"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <p className="p-4 mt-10 text-center text-gray-600">
          Created by{" "}
          <a
            className="text-blue-500 border-b"
            href="https://twitter.com/mithicher"
            target="_blank"
          >
            @mithicher
          </a>
          . Inspired by dribble shot{" "}
          <a
            href="https://dribbble.com/shots/8807920-Quickpay-Hero-section/attachments/1015863"
            target="_blank"
            className="text-blue-500 border-b"
          >
            https://dribbble.com/vadimdrut
          </a>
        </p>
      </div>
    </div>
  )
}
