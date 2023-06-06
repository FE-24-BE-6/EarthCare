import { useEffect, useState } from "react";
import { Badge, Col, Row } from "react-bootstrap";
import { useParams } from "react-router-dom";
import {
  FaCalendarAlt,
  FaMapMarker,
  FaClock,
  FaTicketAlt,
  FaLink,
} from "react-icons/fa";
import Swal from "sweetalert2";
import withReactContent from "sweetalert2-react-content";

export default function DetailEvents() {
  const { id } = useParams();
  const [detailEvents, setDetailEvents] = useState("");
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    fetchDetailEvents();
  }, []);

  const fetchDetailEvents = async () => {
    try {
      const res = await fetch(
        `https://644dfece4e86e9a4d8ef004c.mockapi.io/detail-events/${id}`
      );
      if (!res.ok) {
        throw new Error("Failed to access data detail events");
      }
      const data = await res.json();
      setDetailEvents(data);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
    }
  };

  if (isLoading) {
    return <p className="loading">Loading....</p>;
  }

  // Test sweet alert
  const MySwal = withReactContent(Swal);
  const handleClick = () => {
    MySwal.fire({
      icon: "error",
      title: "Oops...",
      text: "Something went wrong!",
    });
  };

  return (
    <div className="detail__events d-flex justify-content-center align-items-center">
      <main className="d-flex container mx-5">
        <Row>
          <Col xs={12} lg={8}>
            <div className="card__image">
              <img
                className="img-fluid mt-5"
                src={detailEvents.gambar}
                alt="ilustrasi detail events"
              />
              <h3 className="mt-2">Detail Events</h3>
              <hr color="black" />
              <p style={{ textAlign: "justify" }}>{detailEvents.detail}</p>
            </div>
          </Col>

          <Col xs={12} lg={4}>
            <div className="bg-white shadow card card__detail mt-5">
              <div className="card-body">
                <h4 className="card-title mb-2">{detailEvents.judul}</h4>
                <Badge bg="success me-2 mb-3">Lingkungan</Badge>
                <Badge bg="success">Events</Badge>
                <div className="date-detail mb-3 mt-3">
                  <FaCalendarAlt />
                  <p className="d-inline text-muted ms-3">
                    {detailEvents.tanggal}
                  </p>
                </div>
                <div className="time-detail mb-3">
                  <FaClock />
                  <p className="d-inline text-muted ms-3">
                    {detailEvents.waktu}
                  </p>
                </div>
                <div className="ticket-detail mb-3">
                  <FaTicketAlt />
                  <p className="d-inline text-muted ms-3">
                    {detailEvents.tiket}
                  </p>
                </div>
                <div className="location-detail mb-3">
                  <FaMapMarker />
                  <p className="d-inline text-muted ms-3">
                    {detailEvents.lokasi}
                  </p>
                </div>
                <div className="registration-detail mb-3">
                  <FaLink />
                  <p className="d-inline text-muted ms-3">
                    {detailEvents.pendaftaran}
                  </p>
                </div>
                <div className="d-grid mt-4 btn-detail-event">
                  <button onClick={handleClick} className="btn btn-primary">
                    Daftar Event
                  </button>
                </div>
              </div>
            </div>
          </Col>
        </Row>
      </main>
    </div>
  );
}