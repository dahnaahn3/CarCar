import './MainPage.css'

function MainPage() {
  return (
    <>
    {/* MAIN HEADER */}
      <div id="body">
        <div id="mainpage-header">
            <h1 id="mainpage-logo">Welcome to CarCar</h1>
            <p id="mainpage-descrip"> The premiere solution for automobile dealership management!</p>
        </div>
          <div className="contact-main">
            <p>123 Auto Lane </p>
            <p>Sometown, CA 12345</p>
            <p>📞 (678) 999-8212</p>
          </div>
        </div>


        <div className="imgcontainer">
          <div className="carousel">
            <div className="carousel__face"><span className="abc">EXCELLENCE</span></div>
            <div className="carousel__face"><span className="abc">LUXURY</span></div>
            <div className="carousel__face"><span className="abc">BRILLIANCE</span></div>
            <div className="carousel__face"><span className="abc">VALUE</span></div>
            <div className="carousel__face"><span className="abc">QUALITY</span></div>
            <div className="carousel__face"><span className="abc">MASTERY</span></div>
            <div className="carousel__face"><span className="abc">EXPERTISE</span></div>
            <div className="carousel__face"><span className="abc">SKILL</span></div>
            <div className="carousel__face"><span className="abc">PROFICIENCY</span></div>
          </div>
        </div>


{/* PARTNERSHIPS */}
    <div style={{paddingTop: "28rem"}}>
        <div className="h-100 d-flex align-items-center justify-content-center" > <h1 style={{fontFamily: 'Castoro Titling'}}>CARCAR partnerships</h1></div>
        <div className="h-100 d-flex align-items-center justify-content-center p-4">

            <button className="skills">
            <span className="button_top"><img src="https://i.pinimg.com/originals/a9/40/82/a94082bbe801025466094c16b98d130e.jpg" alt="partner" /></span>
            </button>

            <button className="skills">
            <span className="button_top"><img src="https://i.pinimg.com/originals/a9/40/82/a94082bbe801025466094c16b98d130e.jpg" alt="partner" /></span>
            </button>

            <button className="skills">
            <span className="button_top"><img src="https://i.pinimg.com/originals/a9/40/82/a94082bbe801025466094c16b98d130e.jpg" alt="partner" /></span>
            </button>

            <button className="skills">
            <span className="button_top"><img src="https://i.pinimg.com/originals/a9/40/82/a94082bbe801025466094c16b98d130e.jpg" alt="partner" /></span>
            </button>

            <button className="skills">
            <span className="button_top"><img src="https://i.pinimg.com/originals/a9/40/82/a94082bbe801025466094c16b98d130e.jpg" alt="partner" /></span>
            </button>

            <button className="skills">
            <span className="button_top"><img src="https://i.pinimg.com/originals/a9/40/82/a94082bbe801025466094c16b98d130e.jpg" alt="partner" /></span>
            </button>

            <button className="skills">
            <span className="button_top"><img src="https://i.pinimg.com/originals/a9/40/82/a94082bbe801025466094c16b98d130e.jpg" alt="partner" /></span>
            </button>

        </div>
        </div>

{/* CUSTOMER REVIEWS */}
<div style={{paddingTop: "5rem"}}>
        <div className="h-100 d-flex align-items-center justify-content-center"> <h1 className="review-title">Customer Reviews</h1></div>
        <section className="scrollport">
        <div className="reviews-div">
            <div className="reviews-div">
            <h2 className="review-h">Excellent service! </h2>
            <p className="review-p">-A.B.</p>
            </div>
        </div>
        <div className="reviews-div">
            <div className="col">
            <h2 className="review-h">Superior craftsmanship. Did great work.</h2>
            <p className="review-p">-C.D.</p>
            </div>
        </div>
        <div className="reviews-div">
            <div className="col">
            <h2 className="review-h">★★★★★</h2>
            <p className="review-p">-E.F.</p>
            </div>
        </div>
        <div className="reviews-div">
            <div className="col">
            <h2 className="review-h">One stop shop for all my vehicle needs.</h2>
            <p className="review-p">-G.H.</p>
            </div>
        </div>
        <div className="reviews-div">
            <div className="col">
            <h2 className="review-h">Exceptional.</h2>
            <p className="review-p">-I.J.</p>
            </div>
        </div>
        </section>
        </div>

    </>
  );
}

export default MainPage;
