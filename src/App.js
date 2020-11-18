import logo from './logo.svg';
import './App.css';
import logo200 from './200x200.gif'
import logo35 from './35X35.gif'
import logo400 from './400x400.gif'
function App() {
  return (
    <div className="App">
      <div>
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
          <a className="navbar-brand" href="#">Navbar</a>
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon" />
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <a className="nav-link" href="#">Home <span className="sr-only">(current)</span></a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="#">Link</a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                  Dropdown
                </a>
                <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a className="dropdown-item" href="#">Action</a>
                  <a className="dropdown-item" href="#">Another action</a>
                  <div className="dropdown-divider" />
                  <a className="dropdown-item" href="#">Something else here</a>
                </div>
              </li>
              <li className="nav-item">
                <a className="nav-link disabled" href="#">Disabled</a>
              </li>
            </ul>
            <form className="form-inline my-2 my-lg-0">
              <input className="form-control mr-sm-2" type="search" placeholder="Search" aria-label="Search" />
              <button className="btn btn-outline-success my-2 my-sm-0" type="submit">Search</button>
            </form>
          </div>
        </nav>
        <section>
          <div className="jumbotron text-center mt-2">
            <div className="container">
              <div className="row">
                <div className="col-12">
                  <h1>Lorem ipsum dolor sit.</h1>
                  <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Eligendi, deleniti, ea nisi suscipit atque tempore aspernatur harum unde veritatis neque rem dolores assumenda. Recusandae facilis dolores cum iste assumenda accusamus.</p>
                  <p><a className="btn btn-primary btn-lg" href="#" role="button">Learn more »</a></p>
                </div>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, magni, doloribus, possimus eum sapiente deleniti doloremque fugit ut expedita molestiae iusto debitis eveniet modi obcaecati ipsam quos quis labore dicta.</p>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container mt-2">
            <div className="row">
              <div className="col-md-4 col-12">
                <ul className="list-unstyled">
                  <li className="media">
                    <img className="mr-3" src={logo35} alt="Generic placeholder image" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-12">
                <ul className="list-unstyled">
                  <li className="media">
                    <img className="mr-3" src={logo35} alt="Generic placeholder image" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    </div>
                  </li>
                </ul>
              </div>
              <div className="col-md-4 col-12">
                <ul className="list-unstyled">
                  <li className="media">
                    <img className="mr-3" src={logo35} alt="Generic placeholder image" />
                    <div className="media-body">
                      <h5 className="mt-0 mb-1">List-based media object</h5>
                      Cras sit amet nibh libero, in gravida nulla. Nulla vel metus scelerisque ante sollicitudin.
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h2>Latest Work</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Officia, et, placeat !</p>
              </div>
            </div>
            <div className="row">
              <div className="col-md-6 col-12 text-center">
                <img className="img-fluid" src={logo400} alt="" />
                <h4>Lorem ipsum dolor sit amet, consectetur elit</h4>
                <h6>Lorem ipsum dolor sit amet, consectetur elit</h6>
              </div>
              <div className="col-md-6 col-12 text-center mt-md-0 mt-2">
                <img className="img-fluid" src={logo400} alt="" />
                <h4>Lorem ipsum dolor sit amet, consectetur elit</h4>
                <h6>Lorem ipsum dolor sit amet, consectetur elit</h6>
              </div>
            </div>
            <div className="row mt-2">
              <div className="col-md-3 col-6"><img className="img-fluid float-right" src={logo200} alt="" /></div>
              <div className="col-md-3 col-6"><img className="img-fluid float-left" src={logo200} alt="" /></div>
              <div className="col-md-3 col-6 mt-md-0 mt-1"><img className="img-fluid float-right" src={logo200} alt="" /></div>
              <div className="col-md-3 col-6 mt-md-0 mt-1"><img className="img-fluid float-left" src={logo200} alt="" /></div>
            </div>
            <hr />
            <div className="row">
              <div className="col-md-3 col-6"><img className="img-fluid float-right" src={logo200} alt="" /></div>
              <div className="col-md-3 col-6"><img className="img-fluid float-left" src={logo200} alt="" /></div>
              <div className="col-md-3 col-6 mt-md-0 mt-1"><img className="img-fluid float-right" src={logo200} alt="" /></div>
              <div className="col-md-3 col-6 mt-md-0 mt-1"><img className="img-fluid float-left" src={logo200} alt="" /></div>
            </div>
          </div>
        </section>
        <hr />
        <section>
          <div className="container">
            <div className="row">
              <div className="col-12 text-center">
                <h1>Lorem ipsum dolor sit amet</h1>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quibusdam, magni, doloribus, possimus eum sapiente deleniti doloremque fugit ut expedita molestiae iusto debitis eveniet modi obcaecati ipsam quos quis labore dicta.</p>
                <button type="button" className="btn btn-success">Get in touch</button>
              </div>
            </div>
          </div>
        </section>
        <hr />
        <div className="section">
          <div className="container">
            <div className="row">
              <div className="col-md-4 col-12">
                <h3 className="text-center">WHO WE ARE</h3>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repellendus, ducimus, sit, quibusdam quidem recusandae veniam eos quod error nisi repellat excepturi laboriosam aspernatur suscipit possimus consectetur dolores nihil labore quas eius illo accusamus nulla sed blanditiis porro accusantium. Perspiciatis, perferendis!</p>
              </div>
              <div className="col-md-4 col-12">
                <h3 className="text-center">GET IN TOUCH</h3>
                <address className="text-center">
                  <strong>MyCompany, Inc.</strong><br />
                  Sunny Autumn Plaza, Grand Coulee,<br />
                  CA, 91308-4075, US<br />
                  <abbr title="Phone">P:</abbr> (123) 456-7890
                </address>
              </div>
              <div className="col-md-4 col-12">
                <h3 className="text-center">NEWSLETTER</h3>
                <form>
                  <div className="form-group col-12">
                    <input type="email" className="form-control" id="exampleInputEmail1" placeholder="Enter email" />
                    <button type="submit" className="btn btn-dark mt-2">Subscribe</button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <hr />
        <footer className="text-center">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <p>Copyright © MyCompany. All rights reserved.</p>
              </div>
            </div>
          </div>
        </footer>
        {/* jQuery (necessary for Bootstrap's JavaScript plugins) */}
        {/* Include all compiled plugins (below), or include individual files as needed */}
      </div>
    </div>
  );
}

export default App;
