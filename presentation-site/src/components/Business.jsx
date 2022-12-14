import {features} from '../constants';
import styles, {layout} from '../style.js';
import Button from './Button.jsx';
import FeatureCard from './FeatureCard.jsx';

const Business = () => {
  console.log(features);
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={styles.heading2}>
          You do the business,<br className='sm:block hidden' />
          we'll handle the money. 
        </h2>
        <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
          Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu 
          Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu Jammu 
        </p>
        <Button styles="mt-10" />
      </div>

      <div className={`${layout.sectionImg} flex-col`}>
        {features.map((feature, index) => (
          <FeatureCard key={feature.id} index={index} {...feature} />
        ))}
      </div>

    </section>
  );
};

export default Business;