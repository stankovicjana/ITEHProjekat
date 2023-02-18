import React from 'react'

function Footer() {
  return (

    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>O nama</h6>
            <p className="text-justify"> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum..</p>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Mozete nas naci na sledecim lokacijama</h6>
            <ul className="footer-links">
              <li> Glavna, Novi Sad</li>
              <li> Obelicev venac 12</li>
              <li> Kralja Milana 11, Nis</li>


            </ul>
          </div>

          <div className="col-xs-6 col-md-3">
            <h6>Quick Links</h6>
            <ul className="footer-links">
              <li><a href="/">Pocetna</a></li>
              <li><a href="/proizvodi">Ponuda</a></li>
              <li><a href="/korpa">Korpa</a></li>
              <li><a href="/kontakt">Kontakt</a></li>


            </ul>
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by   
         <a href="#"> Zarko @ Jana @ Andrea </a>.
            </p>
          </div>


        </div>
      </div>
</footer>





  )
}

export default Footer