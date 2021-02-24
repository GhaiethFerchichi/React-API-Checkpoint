import classes from "./Spinner.module.css";
const Spinner = () => {
  return (
    <div>
      <div className={classes.LdsSpinner}>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
        <div></div>
      </div>
      <br />
      <span>Loading ..</span>
    </div>
  );
};

export default Spinner;
