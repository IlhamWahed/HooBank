import styles from "../style";
import { discount, robot } from "../assets";
import GetStarted from "./GetStarted";

const Hero = () => (
  <section id="home" className={`flex md:flex-row flex-col ${styles.paddingY}`}>
    <div className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 px-6`}>
      {/* paragraf */}
      <div className="flex flex-row items-center py-[6px] px-4 bg-discount-gradient rounded-[10px] mb-2">
        <img src={discount} alt="logo" className="w-[32px] h-[32px]" />
        <p className={`${styles.paragraph} ml-2`}>
          <span className="text-white">20%</span> Discount For <span className="text-white">1 Mounth</span> Account
        </p>
      </div>

      {/* Heading */}
      <div className="flex flex-row justify-between items-center w-full">
        <h1 className="text-white flex-1 ss:leading-[100px] leading-[75px] font-poppins font-semibold ss:text-[72px] text-[52px]">
          The Next <br className="sm:block hidden" /> <span className="text-gradient">Generation</span>
        </h1>

        {/* button */}
        <div className="ss:flex hidden md:mr-4 mr-0">
          <GetStarted />
        </div>
      </div>

      {/* Title */}
      <h1 className="text-white ss:leading-[100px] leading-[75px] font-poppins font-semibold ss:text-[68px] text-[52px] w-full">Payment Methode</h1>
      <p className={`${styles.paragraph} max-w-[470px] mt-5`}>Our team of experts uses a methodology to identify the credit cards most likely to fit your needs. We examine annual percentage rates, annual fees.</p>
    </div>

    {/* imageRobot */}
    <div className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 `}>
      <img src={robot} alt="blank" className="w-full h-full z-[5] relative" />
      <div className="absolute z-[0] pink__gradient top-0 w-[40%] h-[35%]" />
      <div className="absolute z-[1] white__gradient bottom-40 w-[60%] h-[60%]" />
      <div className="absolute z-[0] blue__gradient right-20 bottom-20  w-[50%] h-[45%]" />
    </div>

    {/* buttonMobile */}
    <div className={`ss:hidden ${styles.flexCenter}`}>
      <GetStarted />
    </div>
  </section>
);

export default Hero;
