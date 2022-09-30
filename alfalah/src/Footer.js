import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer(props) {
  return (
    <div>
     
    <footer className="site-footer">
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6">
            <h6>About</h6>
            <p className="text-justify">Alfalah youth forum aims to change the way people think in our society. A brief description about us is given in about section in urdu for the sake of simplicity. Join us on social media platforms and stay in touch with forum to grow yourself in a batter way.</p>
          </div>

          <div className="col-xs-6 col-md-3">

           
          </div>

          <div className="col-xs-6 col-md-3">
            
          </div>
        </div>
        <hr/>
      </div>
      <div className="container">
        <div className="row">
          <div className="col-md-8 col-sm-6 col-xs-12">
            <p className="copyright-text">Copyright &copy; 2022 All Rights Reserved by &nbsp; 
          <Link to="#"> Alfalah youth-forum</Link>.
            </p>
          </div>

          <div className="col-md-4 col-sm-6 col-xs-12">
            <ul className="social-icons">
        
              <li><a className="twitter" href="https://twitter.com/alfalah_forum?t=cPEC-al-jUWc5AE9ZGitAQ&s=09" target="_blank"><i className="fa fa-twitter"><img src="/imageslogos/download.jpeg" alt=""  /></i></a></li>
              <li><a className="twitter" href="https://chat.whatsapp.com/FOxOkECY9uXLXZkDmhj9sQ" target="_blank"><i className="fa fa-twitter"><img src="imageslogos/whatsapp.svg" alt="" /></i></a></li>
              <li><a className="twitter" href="https://youtube.com/channel/UCBFb125WQdfLZ3TcHfvJlVA" target="_blank"><i className="fa fa-twitter"><img src="/imageslogos/download (utube).png" alt=""  /></i></a></li>
              <li><a className="twitter" href="https://www.facebook.com/Alfalahyouthforum/" target="_blank"><i className="fa fa-twitter"><img src="/imageslogos/download (fb).png" alt="" width="50" height="40" /></i></a></li>
              <li><Link className="dribbble" to="#"><i className="fa fa-dribbble"></i></Link></li>
              <li><Link className="linkedin" to="#"><i className="fa fa-linkedin"></i></Link></li>   
            </ul>
          </div>
        </div>
      </div>
</footer>
    </div>
  )
}
