import classNames from "classnames";
import styles from "./NotFound.module.scss";
import { ReactComponent as NotFoundImage } from "assets/img/notfound/not_found.svg";
import { useNavigate } from "react-router-dom";

export default () => {
  const navigate = useNavigate();

  return (
    <div
      className={classNames({
        [styles.container]: true,
      })}
    >
      <div className={styles.back}>
        <button onClick={() => navigate(-1)}>{"< Voltar"}</button>
      </div>
      <NotFoundImage />
    </div>
  );
};
