import Image from 'next/image'

export default function Home() {
  return (
    <div className=' w-screen h-screen  flex justify-center items-center'>
      <div className=' md:w-auto w-11/12 flex md:space-y-0 space-y-5 flex-col md:flex-row md:space-x-5'>
        <div className=' w-full md:w-64 lg:w-80  p-7 rounded-tr-[100px] rounded-lg  space-y-10 py-10 bg-custom-300 flex flex-col'>
          <div>
            <Image
            src={"/images/logo.svg"}
            width={135}
            height={40}
            alt='logo'/>
          </div>
          <div className=' flex flex-row space-x-5'>
            <button className=' flex justify-center items-center bg-custom-400 p-3 rounded-lg'>
              <Image
              src={"/images/icon-document.svg"}
              width={20}
              height={24}
              alt='document'/>
            </button>
            <button className=' flex justify-center items-center bg-custom-400 p-3 rounded-lg'>
              <Image
              src={"/images/icon-folder.svg"}
              width={20}
              height={24}
              alt='folder'/>
            </button>
            <button className=' flex justify-center items-center bg-custom-400 p-3 rounded-lg'>
              <Image
              src={"/images/icon-upload.svg"}
              width={20}
              height={24}
              alt='upload'/>
            </button>

          </div>
        </div>
        <div className=' w-full md:w-[400px] lg:w-[600px]   flex  items-end'>
          <div className=' w-full h-[170px]  relative  p-7 bg-custom-300 justify-center flex rounded-lg flex-col '>
            <div className=' text-custom-100'>
              You’ve used <span className=' font-semibold'>815 GB</span>  of your storage
            </div>
            <div className=' mt-3 flex flex-col'>
              <div className=' w-full bg-custom-400 bg-opacity-50 rounded-full p-1 '>
                <div className=' w-[81.5%] bg-gradient-to-r flex justify-end rounded-full p-1 from-custom-500 to-custom-600'>
                  <div className=' w-3 h-3 bg-white rounded-full'>

                  </div>
                </div>
              </div>
              <div className= ' mt-1 text-custom-100  font-semibold flex flex-row justify-between'>
                <div>
                  0 GB
                </div>
                <div>
                  1000 GB
                </div>
              </div>
            </div>
            <div className=' absolute hidden md:flex -top-10 right-10 '>
              <div className=' flex relative   space-x-3 text-custom-400 text-3xl  justify-center items-center p-5 rounded-lg font-semibold bg-white'>
                <div>
                  185
                </div>
                <div className=' text-custom-200  flex justify-center items-center text-sm'>
                  GB LEFT
                </div>
                <div className="right-0 absolute -bottom-3 w-1 h-1 z-10 border-r-[0px] border-l-transparent
  border-t-[30px] border-t-white

  border-l-[30px] border-r-transparent"
                ></div>
              </div>
            </div>
            <div className=' md:hidden flex absolute -bottom-10 left-[calc(50%_-_76px)] space-x-3 text-custom-400 text-3xl  justify-center items-center p-5 rounded-lg font-semibold bg-white'>
              <div>
                185
              </div>
              <div className=' text-custom-200  flex justify-center items-center text-sm'>
                 GB LEFT
              </div>
            </div>
            <div className=' hidden md:flex absolute -top-10 right-10 space-x-3 text-custom-400 text-3xl  justify-center items-center p-5 rounded-lg font-semibold bg-white'>
              <div>
                185
              </div>
              <div className=' text-custom-200  flex justify-center items-center text-sm'>
                 GB LEFT
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )}