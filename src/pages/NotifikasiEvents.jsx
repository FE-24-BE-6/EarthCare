import eventSuccess from "../assets/notify events success.svg";
import "../css/detail-events.css";

export function NotifikasiEvents() {
  return (
    <main className="notifikasi container">
      <div className="notifikasi__events d-flex justify-content-center align-items-center flex-column">
        <img
          src={eventSuccess}
          alt="Ilustration events success"
          className="d-flex img-fluid mt-lg-2 mt-sm-0"
        ></img>
        <h1 className="mt-lg-4 mt-sm-3">Anda Berhasil Mendaftarkan ke Acara</h1>
        <p className="mt-lg-2 mt-sm-1">
          Silahkan tunggu konfirmasi email dari kami dan kami akan
          menginformasikan secepat mungkin!
        </p>
        <button type="submit" className="btn btn-success mb-5">
          Back to Home
        </button>
      </div>
    </main>
  );
}