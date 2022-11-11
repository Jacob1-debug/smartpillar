import Link from 'next/link'
import Layout from '../layout'
import styles from '../styles/Home.module.css'
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import Slider from 'react-slick';
import { FaAngleRight, FaAngleLeft } from "react-icons/fa";

export default function Home() {

  const servicesCard = [
    {image: '/assets/images/service_1.png', title: 'Connect Landlords-Tenants', description: 'This I choose to do. If there is a price, this I choose to pay. If it is my death, then I choose to die. Where this takes me, there I choose to go. I choose. This I choose to do'},
    {image: '/assets/images/service_2.png', title: 'Help Pull Resources', description: 'We ensure that landlords make monthly contributions to run the society and build houses to further resources'},
    {image: '/assets/images/service_3.png', title: 'Advice Landlords and Clients', description: 'Set up a beautiful branded careers page without any tecnical support and have jobs updated automatically every time you create a new position.'},
  ]

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1
  };

  const PrevArrow = ({className, onClick}) => {
    return (
    <div className={`h-[48px] w-[48px]
     border border-[#EDEDED] rounded-full 
     flex justify-center items-center
     absolute -right-14 top-20 cursor-pointer`} 
     onClick={onClick}>
      <FaAngleLeft size={20}/>
    </div>
    )
  }

  const NextArrow = ({className, onClick}) => {
    return (
      <div className={`h-[48px] w-[48px]
      border border-[#EDEDED] rounded-full 
      flex justify-center items-center
      absolute -right-14 bottom-20 cursor-pointer`} 
      onClick={onClick}>
       <FaAngleRight size={20}/>
     </div>
    )
  }

  return (
    <Layout pageTitle='Welcome to SmartPillars'>
      {/* Hero Section */}
      <div className={`${styles.home_hero__root}`}>
        <div className={`${styles.home_hero_contnet} pt-[100px]`}>
          <div className="container">
            <div className="grid grid-cols-12 gap-4">
              <div className="col-span-5 flex items-center">
                <div className="">
                  <h1 className={`${styles.hero__left_title}`}>We connect Landlords to landlords and tenants</h1>
                  <p className={`${styles.hero__left_description}`}>Connect Landlords to Landords? Weird huh? but yes, we connect Landlords to themselves in order to improve apartments servicing and also enable them have a pool of investments.</p>
                  <button className='font-Akaya_Kanadaka
                    text-white
                    font-[26px]
                    leading-[26px]
                    bg-[#6246E4]
                    px-16
                    py-5
                    rounded-[10px]
                    mt-7
                    hover:shadow-xl
                    transition-all duration-150
                  '>Get Started</button>
                </div>
              </div>
              <div className="col-span-7 h-screen flex items-center">
                <div className="relative">
                  <img src="/assets/svgs/kenya.svg" alt="" />
                  <img src="/assets/images/human_networking.png" alt="" className='absolute top-0 left-[300px]'/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Services Section */}
      <div className="container mx-auto mt-[160px]">
        <div className="services__header flex flex-col items-center">
          <h2 className='
            font-Allura 
            text-[60px] 
            leading-[60px] 
            text-[#343333]
            '>Our Services</h2>
          <p className='
            mt-[18px] 
            font-Amatic_SC 
            font-bold 
            text-[28px] 
            leading-[38px]
          '>Welcome to Our services page</p>
        </div>
        {/* Service cards container */}
        <div className="grid grid-cols-3 gap-[20px] mt-[60px]">
          {
            servicesCard?.map((service, index) => (
                <div className="group col-span-1 bg-[#F7FAFD] rounded-[30px] px-[18px] py-[20px] cursor-pointer hover:bg-[#6246E4] transition-all duration-150">
                  <div className="h-[220px] bg-center bg-cover flex justify-center items-center">
                    <img src={service.image} alt="" />
                  </div>
                  <h4 className='font-Allura text-[34px] text-[#2D2D2D] text-center my-[20px] group-hover:text-white'>{service.title}</h4>
                  <p className='font-Amatic_SC text-[20px] leading-[30px] text-[#838383] text-center mx-[6px] group-hover:text-white'>{service.description}</p>
                </div>
            ))
          }          
          </div>
      </div>


      {/* Summary Section */}
      <div className="container mx-auto mt-[180px]">
        <div className="grid grid-cols-12">
            <div className="col-span-6">
              <img src="/assets/images/summary_art.png" alt="" />
            </div>
            <div className="col-span-6">
              <h2 className='font-Allura text-[60px] '>We take care of your business</h2>
              <p className='font-Amatic_SC text-[20px] leading-[30px] text-[#838383] mt-[20px]'>Select your project from here by clicking on projects. Its help us what you need from us.Make your better version of your web,app or video.</p>
              <ul className='space-y-[50px] mt-[60px]'>
                <li>
                  <div className="flex items-center space-x-5">
                    <img src="/assets/svgs/summary_bullet1.svg" alt="" />
                    <p className='font-Akaya_Kanadaka text-[20px] leading-[30px] text-[343333]'>Power your business to new heights with our award-winning </p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-5">
                    <img src="/assets/svgs/summary_bullet2.svg" alt="" />
                    <p className='font-Akaya_Kanadaka text-[20px] leading-[30px] text-[343333]'>Our award-winning digital marketing services and technology platform.</p>
                  </div>
                </li>
                <li>
                  <div className="flex items-center space-x-5">
                    <img src="/assets/svgs/summary_bullet3.svg" alt="" />
                    <p className='font-Akaya_Kanadaka text-[20px] leading-[30px] text-[343333]'>Business to new heights with our award-winning digital marketing.</p>
                  </div>
                </li>
              </ul>
            </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="container mx-auto mt-[180px]">
        <div className="bg-[#FAFAFA] grid grid-cols-12 ">
          <div className="col-span-6 pl-[100px] py-[76px]">
            <h2 className='w-[278px] font-Allura text-[34px] leading-[44px] text-[#343333]'>
              Jersey Electricity are reducing their recuitment costs by 83%
            </h2>
            <p className='mt-5 w-[364px] font-Amatic_SC text-[18px] leading-[28px] text-[#838383]'>They have also attracted 3x more apllicationts and filled
              some very competitive roles useing Digital Agency social
              advertising tools. If this success continues, they will
              achive a 20x ROL on Digital Agency this year.
            </p>
            <div className="flex justify-between items-center mt-[70px] pr-10">
              <button 
                className='font-Akaya_Kanadaka 
                  bg-[#6246E4] rounded-[10px] shadow-md
                  text-white text-[22px] leading-[22px] px-[60px] 
                  py-[20px] hover:shadow-xl transition-all duration-150'>
                    Get Start
              </button>
              <div className="font-Cabin font-bold text-[18px] leading-[28px] text-[#6246E4]">
                or  <Link href={'#'}><span className='underline ml-2'>Get the Case Study</span></Link>
              </div>
            </div>
          </div>
         <div className="col-span-6">
          <div className="grid grid-cols-11 w-full h-full">
            <div className="col-span-5">
              <div className="h-full">
                <div className="bg-[#2A8588] h-[50%] flex justify-center items-center">
                  <div className="">
                    <h4 className='text-white font-ABeeZee text-[84px] italic text-center'>83%</h4>
                    <p className='uppercase font-Cabin font-bold text-white text-[22px] text-center'>Cost savings</p>
                  </div>
                </div>
                <div className="bg-[#F04C4B] h-[50%] flex justify-center items-center">
                  <div className="">
                    <h4 className='text-white font-ABeeZee text-[84px] text-center italic'>20X</h4>
                    <p className='uppercase font-Cabin font-bold text-white text-[22px] text-center'>Rol in year one</p>
                  </div>
                </div>
              </div>
            </div>
            <div style={{backgroundImage: 'url(/assets/images/call_to_action_right.png)'}} className="col-span-6 bg-center bg-no-repeat bg-cover"/>
          </div>
         </div>
        </div>
      </div>

      {/* Testimonial Section */}
      <div className="container mx-auto mt-[160px]">
        <div className="grid grid-cols-3">
          <div className=" pr-20">
            <img src="/assets/svgs/testimonial_image.svg" alt="" />
            <h2 className='my-[8px] font-ABeeZee text-[32px] leading-[62px] text-[#2D2D2D]'>What they say?</h2>
            <p className='font-Amatic_SC text-[18px] leading-[28px] text-[#626262]'>When budgets were being cut and the country was deep in the throes.</p>
          </div>
          
          <div className="col-span-2 h-full mr-12">
            {
              <Slider prevArrow={<PrevArrow/>} nextArrow={<NextArrow/>} {...settings}>
                <div className="h-full border border-[#ECECEC] py-[24px] px-[32px] rounded-[30px] cursor-pointer hover:bg-[#FAFAFA] transition-all duration-150">
                  <div className="flex justify-between">
                    <div className="flex space-x-[14px]">
                      <img src="/assets/images/testimonial_avater1.png" alt="" />
                      <div className="">
                        <h4 className='font-Allura text-[#343333] text-[16px] leading-[22px]'>Adom Shafi</h4>
                        <p className='font-Amatic_SC text-[14px] leading-[22px] text-[#6D6D6D]'>UI/UX Designer</p>
                      </div>
                    </div>
                    <div className="w-[37px] h-[37px] bg-[#F8F4F4] rounded-full flex justify-center items-center">
                      <p className='font-ABeeZee text-[14px] text-[#2D2D2D]'>1</p>
                    </div>
                  </div>
                  <p className='py-[18px] font-Actor text-[#686767]'>We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us.</p>
                </div>
                <div className="col-span-1 border border-[#ECECEC] py-[24px] px-[32px] rounded-[30px] cursor-pointer hover:bg-[#FAFAFA] transition-all duration-150">
                  <div className="flex justify-between">
                    <div className="flex space-x-[14px]">
                      <img src="/assets/images/testimonial_avater1.png" alt="" />
                      <div className="">
                        <h4 className='font-Allura text-[#343333] text-[16px] leading-[22px]'>Adom Shafi</h4>
                        <p className='font-Amatic_SC text-[14px] leading-[22px] text-[#6D6D6D]'>UI/UX Designer</p>
                      </div>
                    </div>
                    <div className="w-[37px] h-[37px] bg-[#F8F4F4] rounded-full flex justify-center items-center">
                      <p className='font-ABeeZee text-[14px] text-[#2D2D2D]'>1</p>
                    </div>
                  </div>
                  <p className='py-[18px] font-Actor text-[#686767]'>We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us.</p>
                </div>
                <div className="col-span-1 border border-[#ECECEC] py-[24px] px-[32px] rounded-[30px] cursor-pointer hover:bg-[#FAFAFA] transition-all duration-150">
                  <div className="flex justify-between">
                    <div className="flex space-x-[14px]">
                      <img src="/assets/images/testimonial_avater1.png" alt="" />
                      <div className="">
                        <h4 className='font-Allura text-[#343333] text-[16px] leading-[22px]'>Adom Shafi</h4>
                        <p className='font-Amatic_SC text-[14px] leading-[22px] text-[#6D6D6D]'>UI/UX Designer</p>
                      </div>
                    </div>
                    <div className="w-[37px] h-[37px] bg-[#F8F4F4] rounded-full flex justify-center items-center">
                      <p className='font-ABeeZee text-[14px] text-[#2D2D2D]'>1</p>
                    </div>
                  </div>
                  <p className='py-[18px] font-Actor text-[#686767]'>We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us.</p>
                </div>
              </Slider>
            }
          </div>

          {/* <div className="col-span-1 border border-[#ECECEC] py-[24px] px-[32px] rounded-[30px] cursor-pointer hover:bg-[#FAFAFA] transition-all duration-150">
            <div className="flex justify-between">
              <div className="flex space-x-[14px]">
                <img src="/assets/images/testimonial_avater1.png" alt="" />
                <div className="">
                  <h4 className='font-Allura text-[#343333] text-[16px] leading-[22px]'>Adom Shafi</h4>
                  <p className='font-Amatic_SC text-[14px] leading-[22px] text-[#6D6D6D]'>UI/UX Designer</p>
                </div>
              </div>
              <div className="w-[37px] h-[37px] bg-[#F8F4F4] rounded-full flex justify-center items-center">
                <p className='font-ABeeZee text-[14px] text-[#2D2D2D]'>1</p>
              </div>
            </div>
            <p className='py-[18px] font-Actor text-[#686767]'>We are happy to hear you had a positive experience at Noren! We value your input and encourage you to let us know more details about your experience with us.</p>
          </div> */}
        </div>
      </div>

      {/* Subscribe */}
      <div className="mt-[264px] container mx-auto">
        <div className="bg-[#6246E4] px-[98px] py-[42px] mx-[60px] rounded-[20px]">
          <div className="grid grid-cols-2 relative">
            <div className="col-span-1">
              <h2 className='font-Allura text-white text-[40px] leading-[50px]'>Sign Up For Free Early Access</h2>
              <form action="#">
                <div className="mt-[30px] flex space-x-[20px]">
                  <input type="email" name="email" id="email" placeholder='Enter your email' className='font-ABeeZee text-[16px] bg-[#ffffff1a] p-[20px] rounded-[15px] w-full focus-within:outline-none text-white' />
                  <button type="submit" className='font-Akaya_Kanadaka text-[18px] text-[#624E4] bg-white px-[40px] py-[20px] rounded-[15px]'>Send</button>
                </div>
              </form>
            </div>
            <div className="col-span-1">
              <img src="/assets/svgs/subscribe_image.svg" alt="" className='absolute bottom-0 -right-[250px]'/>
            </div>
          </div>
        </div>
      </div>

      {/* Action Form */}
      <div className="relative">
        <img className='absolute -left-12 -bottom-5 -z-0' src="/assets/svgs/call_action_form_pattern.svg" alt="" />
        <div className="container mx-auto px-[80px] mt-[180px] pb-20">
          <div className="w-full grid grid-cols-10">
            <div className="col-span-4 mt-[120px]">
              <h2 className='w-[190px] font-Allura text-[42px] leading-[52px] text-[#2D2D2D]'>Get In Touch With Us</h2>
              <p className='mt-[14px] text-[#4F4F4F] font-Amatic_SC text-[16px] leading-[16px]'>Do you have any questions?</p>
            </div>
            <div className="col-span-6 relative">
              <form action='#' className="absolute w-full bg-white p-10 shadow-2xl rounded space-y-[50px]">
                <div className="flex flex-col">
                  <label htmlFor="name" className='font-Akaya_Kanadaka text-[18px] text-[#4F4F4F]'>Name</label>
                  <input type="text" name="name" id="name" className='border-b-[2px] border-[#D7D7D7] font-Akaya_Kanadaka text-[18px] text-[#4F4F4F' placeholder='' />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className='font-Akaya_Kanadaka text-[18px] text-[#4F4F4F]'>Email</label>
                  <input type="text" name="name" id="name" className='border-b-[2px] border-[#D7D7D7] font-Akaya_Kanadaka text-[18px] text-[#4F4F4F' placeholder='' />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="name" className='font-Akaya_Kanadaka text-[18px] text-[#4F4F4F]'>Message</label>
                  <textarea  type="text" name="name" id="name" className='border-b-[2px] border-[#D7D7D7] font-Akaya_Kanadaka text-[18px] text-[#4F4F4F' placeholder='' />
                </div>
                <button className='uppercase font-Cabin font-semibold text-[16px] text-white bg-[#6246E4] px-[44px] py-5 rounded-[10px]'>Send</button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}
