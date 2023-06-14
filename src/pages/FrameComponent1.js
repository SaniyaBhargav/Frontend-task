import styles from "./FrameComponent1.module.css";
const FrameComponent1 = () => {
  return (
    <div className={styles.mobileParent}>
      <div className={styles.mobile}>Mobile</div>
    </div>
  );
};

export default FrameComponent1;
