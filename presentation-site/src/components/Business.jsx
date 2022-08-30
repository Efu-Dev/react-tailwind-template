import {features} from '../constants';
import styles, {layout} from '../style.js';
import Button from './Button.jsx';

const Business = () => {
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
        <Button />
      </div>
    </section>
  );
};

export default Business;