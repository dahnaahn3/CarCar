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

{/* IMAGE CAROUSEL */}
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
    <div style={{paddingTop: "35rem"}}>
        <div className="h-100 d-flex align-items-center justify-content-center" > <h1 style={{fontFamily: 'Castoro Titling'}}>CARCAR partnerships</h1></div>
        <div className="h-100 d-flex align-items-center justify-content-center p-4">

            <button className="skills">
            <span className="button_top" style={{width: "200px"}}><img src="https://ww1.prweb.com/prfiles/2013/03/28/11356509/NewRacingLogo12-22.jpg" alt="partner" /></span>
            </button>

            <button className="skills">
            <span className="button_top" style={{width: "250px"}}><img src="https://i.pinimg.com/originals/a9/40/82/a94082bbe801025466094c16b98d130e.jpg" alt="partner" /></span>
            </button>

            <button className="skills">
            <span className="button_top" style={{width: "300px"}}><img src="https://vectorseek.com/wp-content/uploads/2021/01/Amsoil-Logo-Vector-730x730.jpg" alt="partner" /></span>
            </button>

            <button className="skills">
            <span className="button_top" style={{width: "200px"}}><img src="https://images-platform.99static.com/Rge4eQYjaTnIWYBmRve8B6OjAuM=/500x500/top/smart/99designs-contests-attachments/30/30178/attachment_30178162" alt="partner" /></span>
            </button>

            <button className="skills">
            <span className="button_top" style={{width: "200px"}}><img src="https://img.freepik.com/premium-vector/motor-oil-logo-drop-lubricant-gear-vector-illustration_10135-3243.jpg" alt="partner" /></span>
            </button>

            <button className="skills">
            <span className="button_top" style={{width: "150px"}}><img src="https://charlottevehiclewraps.com/wp-content/uploads/2019/08/logo-square.png" alt="partner" /></span>
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

      <footer className="mainpage-footer" style={{marginTop:"5rem"}}>Created by Matthew Huff and Dahna Ahn</footer>
      <footer className="mainpage-footer">EST. 2023</footer>
    </>
  );
}

export default MainPage;
