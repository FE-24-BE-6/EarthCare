import Carousel from "react-bootstrap/Carousel";
import { Card, Button } from "react-bootstrap";

function Home() {
  return (
    <>
      <main>
        {/* <div
          id="carouselExampleAutoplaying"
          class="carousel slide"
          data-bs-ride="carousel"
        >
          <div class="carousel-inner position-relative">
            <div class="carousel-indicators">
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="0"
                class="active"
                aria-current="true"
                aria-label="Slide 1"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="1"
                aria-label="Slide 2"
              ></button>
              <button
                type="button"
                data-bs-target="#carouselExampleAutoplaying"
                data-bs-slide-to="2"
                aria-label="Slide 3"
              ></button>
            </div>
            <div class="carousel-item active" data-bs-interval="10000">
              <img
                src="assets/images/carousel-image1.png"
                class="d-block w-100"
                alt="menanam pohon"
              />
              <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
                <div class="text-center wrapper-carousel">
                  <h1 class="fw-bold text-wrap">
                    Menanam Pohon Selamatkan Kehidupan
                  </h1>
                  <p class="text-wrap">
                    Gerakan menanam pohon sebagai upaya melakukan penghijauan
                    dan memperbaiki paru-paru kota
                  </p>
                  <button
                    class="btn btn-carousel"
                    onclick="window.location.href='event.html'"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
            <div class="carousel-item" data-bs-interval="2000">
              <img
                src="assets/images/carousel-image2.png"
                class="d-block w-100"
                alt="menanam pohon"
              />
              <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
                <div class="text-center wrapper-carousel">
                  <h1 class="fw-bold">
                    Menanam Pohon <br />
                    Selamatkan Kehidupan
                  </h1>
                  <p class="text-wrap">
                    Gerakan menanam pohon sebagai upaya melakukan penghijauandan
                    memperbaiki paru-paru kota
                  </p>
                  <button
                    class="btn btn-carousel"
                    onclick="window.location.href='event.html'"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
            <div class="carousel-item">
              <img
                src="assets/images/carousel-image3.png"
                class="d-block w-100"
                alt="menanam pohon"
              />
              <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
                <div class="text-center wrapper-carousel">
                  <h1 class="fw-bold">
                    Menanam Pohon <br />
                    Selamatkan Kehidupan
                  </h1>
                  <p class="text-wrap">
                    Gerakan menanam pohon sebagai upaya melakukan penghijauan
                    dan memperbaiki paru-paru kota
                  </p>
                  <button
                    class="btn btn-carousel"
                    onclick="window.location.href='event.html'"
                  >
                    Join Now
                  </button>
                </div>
              </div>
            </div>
          </div>
          <button
            class="carousel-control-prev d-md-block"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Previous</span>
          </button>
          <button
            class="carousel-control-next d-md-block"
            type="button"
            data-bs-target="#carouselExampleAutoplaying"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon" aria-hidden="true"></span>
            <span class="visually-hidden">Next</span>
          </button>
        </div> */}

        <Carousel>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../src/assets/carousel-image1.png"
              alt="First slide"
            />
            <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
              <div class="text-center wrapper-carousel">
                <h1 class="fw-bold text-wrap">
                  Menanam Pohon Selamatkan Kehidupan
                </h1>
                <p class="text-wrap">
                  Gerakan menanam pohon sebagai upaya melakukan penghijauan dan
                  memperbaiki paru-paru kota
                </p>
                <button
                  class="btn-carousel"
                  onclick="window.location.href='event.html'"
                >
                  Join Now
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../src/assets/carousel-image2.png"
              alt="Second slide"
            />

            <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
              <div class="text-center wrapper-carousel">
                <h1 class="fw-bold text-wrap">
                  Menanam Pohon Selamatkan Kehidupan
                </h1>
                <p class="text-wrap">
                  Gerakan menanam pohon sebagai upaya melakukan penghijauan dan
                  memperbaiki paru-paru kota
                </p>
                <button
                  class="btn-carousel"
                  onclick="window.location.href='event.html'"
                >
                  Join Now
                </button>
              </div>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <img
              className="d-block w-100"
              src="../src/assets/carousel-image3.png"
              alt="Third slide"
            />

            <div class="overlay position-absolute top-0 bottom-0 start-0 end-0 w-100 h-100 text-white d-flex justify-content-center align-items-center">
              <div class="text-center wrapper-carousel">
                <h1 class="fw-bold text-wrap">
                  Menanam Pohon Selamatkan Kehidupan
                </h1>
                <p class="text-wrap">
                  Gerakan menanam pohon sebagai upaya melakukan penghijauan dan
                  memperbaiki paru-paru kota
                </p>
                <button
                  class="btn-carousel"
                  onclick="window.location.href='event.html'"
                >
                  Join Now
                </button>
              </div>
            </div>
          </Carousel.Item>
        </Carousel>

        <section>
          <div class="container mt-5">
            <h2 class="text-center fw-bold">Event Terbaru, Yuk Ikutan!</h2>
            <p class="text-center text-black-50">
              Daftarkan diri anda untuk mendapatkan pengalaman baru
            </p>
          </div>

          <hr />

          <div className="d-flex justify-content-center gap-4 flex-wrap">
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Strategi Pengelolaan Sungai</Card.Title>
                <Card.Text>
                  <p className="text-black-50">ecoedu</p>
                  <div class="date mb-2">
                    <i class="fa-solid fa-calendar-days fa-lg"></i>
                    <p class="d-inline text-muted ms-1">14 Mei 2023</p>
                  </div>
                  <div class="location">
                    <i class="fa-solid fa-location-dot fa-lg"></i>
                    <p class="d-inline text-muted ms-1">Online, zoom</p>
                  </div>
                </Card.Text>
                <Button variant="primary" className="btn-event w-100">
                  Join Now
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Gerakan Sedekah Sampah</Card.Title>
                <Card.Text>
                  <p className="text-black-50">tkn_psl</p>
                  <div class="date mb-2">
                    <i class="fa-solid fa-calendar-days fa-lg"></i>
                    <p class="d-inline text-muted ms-1">8 April 2023</p>
                  </div>
                  <div class="location">
                    <i class="fa-solid fa-location-dot fa-lg"></i>
                    <p class="d-inline text-muted ms-1">
                      Halaman Masjid Raya Bintaro Jaya
                    </p>
                  </div>
                </Card.Text>
                <Button variant="primary" className="btn-event w-100">
                  Join Now
                </Button>
              </Card.Body>
            </Card>
            <Card style={{ width: "22rem" }}>
              <Card.Img variant="top" src="holder.js/100px180" />
              <Card.Body>
                <Card.Title>Perhitungan Gas Rumah Kaca</Card.Title>
                <Card.Text>
                  <p className="text-black-50">ecoedu</p>
                  <div class="date mb-2">
                    <i class="fa-solid fa-calendar-days fa-lg"></i>
                    <p class="d-inline text-muted ms-1">16 Maret 2023</p>
                  </div>
                  <div class="location">
                    <i class="fa-solid fa-location-dot fa-lg"></i>
                    <p class="d-inline text-muted ms-1">Online, zoom</p>
                  </div>
                </Card.Text>
                <Button variant="primary" className="btn-event w-100">
                  Join Now
                </Button>
              </Card.Body>
            </Card>
          </div>
        </section>
      </main>
    </>
  );
}

export default Home;
