import ProfileSummaryContainer from "../components/ProfileSummaryContainer";
import styles from "./EditSections.module.css";
const EditSections = () => {
  return (
    <div className={styles.editSections}>
      <div className={styles.large1440dp} />
      <div className={styles.selectYourSectionsParent}>
        <div className={styles.selectYourSections}>Select your sections</div>
        <ProfileSummaryContainer />
        <div className={styles.buttons}>
          <div className={styles.button}>Save and Next</div>
        </div>
      </div>
    </div>
  );
};

export default EditSections;
