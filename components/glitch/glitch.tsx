import style from "./glitch.module.scss";
const Glitch = ({ children }: { children: React.ReactNode }) => {
  return <div className={style.glitch}>{children}</div>;
};

export default Glitch;
