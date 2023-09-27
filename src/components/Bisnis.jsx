import { features } from "../constant";
import styles, { layout } from "../style";
import Button from "./Button";

const FeatursCard = ({ title, content, icon, index }) => (
  <div className={`flex flex-row p-6 rounded-[20px] ${index !== features.length - 1 ? "mb-6" : "mb-0"} feature-card`}>
    <div className={`${styles.flexCenter} w-[64px] h-[64px] rounded-full bg-dimBlue`}>
      <img src={icon} alt="icon" className="w-[50%] h-[50%] object-contain" />
    </div>
    <div className="flex-1 flex flex-col ml-3">
      <h4 className="font-poppins text-white leading-[23px] font-semibold text-lg mb-1">{title}</h4>
      <p className="font-poppins text-dimWhite leading-[24px] font-normal text-base mb-1">{content}</p>
    </div>
  </div>
);

const Bisnis = () => {
  return (
    <section id="featurs" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business, <br className="sm:block hidden" /> we’ll handle the money.
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>With the right credit card, you can improve your financial life by building credit, earning rewards and saving money. But with hundreds of credit cards on the market.</p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatursCard key={feature.id} {...feature} index={index} />
        ))}
      </div>
    </section>
  );
};

export default Bisnis;
