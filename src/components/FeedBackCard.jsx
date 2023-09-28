import { quotes } from "../assets";

const FeedBackCard = ({ content, name, title, img }) => (
  <div className="flex justify-between flex-col py-10 px-12 rounded-[20px] max-w-[370px] md:mr-10 sm:mr-5 mr-0 my-5 feedback-card">
    <img src={quotes} alt="double_quotes" className="w-[47px] h-[27px] object-contain" />
    <p className="font-poppins font-normal text-lg text-white leading-[32px] my-10">{content}</p>

    <div className="flex flex-row">
      <img src={img} alt={name} className="w-[48px] h-[48px] rounded-full" />
      <div className="ml-4 flex flex-col">
        <h4 className="font-poppins font-semibold text-xl text-white leading-[32px]">{name}</h4>
        <p className="font-poppins font-normal text-base text-dimWhite leading-[32px]">{title}</p>
      </div>
    </div>
  </div>
);

export default FeedBackCard;
