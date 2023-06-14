import styles from "./FrameComponent.module.css";
const FrameComponent = () => {
  return (
    <div className={styles.groupParent}>
      <div className={styles.infoParent}>
        <img className={styles.infoIcon} alt="" src="/info.svg" />
        <div className={styles.switchDark}>
          <div className={styles.track} />
          <div className={styles.handleContainer}>
            <div className={styles.handle} />
            <img
              className={styles.iconscheck24px}
              alt=""
              src="/iconscheck-24px.svg"
            />
          </div>
        </div>
        <img className={styles.icon} alt="" src="/icon.svg" />
        <div className={styles.theScreensBelowContainer}>
          <p className={styles.theScreensBelow}>
            The screens below are part of a resume builder tool. The user can
            manage the names, order and presence of sections on their resume
            using this page.
          </p>
          <p className={styles.theScreensBelow}>&nbsp;</p>
          <p className={styles.theScreensBelow}>
            There is a master list of sections allowed on the resume. This list
            is shown in the design. The user can perform the following actions:
          </p>
          <ul className={styles.dragDropTheSectionToIndic}>
            <li className={styles.dragDropThe}>
              Drag drop the section to indicate the order in which the sections
              should be shown on their resumes. Animation is required to show
              the user which section is being moved where. button should be used
              to drag drop
            </li>
            <li className={styles.dragDropThe}>
              An edit button allows the user to change the name of the section
            </li>
            <li className={styles.dragDropThe}>
              The toggle button allows the user to switch a section on or off
              enabling the user display/ not display that section on the resume
            </li>
            <li className={styles.dragDropThe}>
              The save button should be enabled only if the user has changed
              something
            </li>
            <li className={styles.dragDropThe}>
              Clicking on button shows a description of the section
            </li>
          </ul>
          <p className={styles.theScreensBelow}>&nbsp;</p>
          <p className={styles.theScreensBelow}>
            The same view should be built for mobile if you are working on react
            native
          </p>
        </div>
        <img className={styles.icon1} alt="" src="/icon1.svg" />
      </div>
    </div>
  );
};

export default FrameComponent;
