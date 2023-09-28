import { feedback } from "../constant";
import styles from "../style";
import FeedBackCard from "./FeedBackCard";

const Testimonial = () => (
  <section id="client" className={`${styles.paddingY} ${styles.flexCenter} flex-col relative`}>
    {/* TODO */}
    <div className="absolute w-[60%] h-[60%] z-0 rounded-full -right-[50%] blue__gradient" />

    <div className="w-full relative mb-6 flex justify-between items-center sm:mb-16 md:flex-row flex-col z-[1]">
      <h2 className={styles.heading2}>
        What people are <br className="sm:block hidden" /> saying about us
      </h2>
      <div className="w-full md:mt-0 mt-6">
        <p className={`${styles.paragraph} text-left max-w-[450px]`}>Everything you need to accept card payments and grow your business anywhere on the planet.</p>
      </div>
    </div>

    <div className="flex flex-wrap justify-center sm:justify-start w-full feedback-container relative z-[1]">
      {feedback.map((card) => (
        <FeedBackCard key={card.id} {...card} />
      ))}
    </div>
  </section>
);

export default Testimonial;
