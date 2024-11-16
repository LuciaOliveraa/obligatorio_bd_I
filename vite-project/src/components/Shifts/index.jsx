import style from "./Shifts.module.css";
import Shift from "../Shift";
import { IoMdAdd as Add } from "react-icons/io";

export default function Shifts({ setVisibleShifts }) {
  return (
    <div>
      <div className={style.shiftsAndAdd}>
        <p className={style.shiftsTitle}>Turnos</p>
        <button className={style.addButton}>
          <Add className={style.add}></Add>{" "}
        </button>
      </div>
      <div className={style.allShifts}>
        <Shift
          startsAt="9:00"
          endsAt="11:00"
          setVisibleShifts={setVisibleShifts}
        />
        <Shift
          startsAt="12:00"
          endsAt="14:00"
          setVisibleShifts={setVisibleShifts}
        />
        <Shift
          startsAt="16:00"
          endsAt="18:00"
          setVisibleShifts={setVisibleShifts}
        />
      </div>
    </div>
  );
}
