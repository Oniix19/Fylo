import { ArrowRightCircleFill, EnvelopeFill, Facebook, GeoAltFill, Instagram, Telephone, Twitter } from "react-bootstrap-icons";

function App() {
  return (
    <div className="App">
      <header className="header">
        <img className="headerImg" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041291/fylo/images/logo_kxjixn.svg" alt="img" />
        <div>
          <button className="headerBtn">Features</button>
          <button className="headerBtn">Team</button>
          <button className="headerBtn">Sign In</button>
        </div>
      </header>

      <main className="main">
        <div className="div1">
          <img src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041289/fylo/images/illustration-intro_gn3w56.png" alt="img" />
          <h1 className="div1H1">All your files in one secure location, accessible anywhere.</h1>
          <p className="div1P">Fylo stores all your most important files in one secure location. Access them wherever you need, share and collaborate with friends family, and co-workers.</p>
          <button className="div1Btn">Get Started</button>
        </div>
        <div className="divMain">
          <div className="div2">
            <div className="divCont">
              <div className="divDetail">
                <img className="imgDetail" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041289/fylo/images/icon-access-anywhere_gaus3x.svg" alt="img" />
                <h3 className="h3Detail">Access your files, anywhere</h3>
                <p className="pDetail">The ability to use a smartphone, tablet, or computer to access your account means your files follow you everywhere.</p>
              </div>
              <div className="divDetail">
                <img className="" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041289/fylo/images/icon-security_tehcip.svg" alt="img" />
                <h3 className="">Security you can trust</h3>
                <p className="">2-factor authentication and user-controlled encryption are just a couple of the security features we allow to help secure your files.</p>
              </div>
            </div>
            <div className="divCont">
              <div className="divDetail">
                <img className="" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041290/fylo/images/icon-collaboration_ntxsyw.svg" alt="img" />
                <h3 className="">Real-time collaboration</h3>
                <p className="">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
              </div>
              <div className="divDetail">
                <img className="" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041289/fylo/images/icon-any-file_mnpayu.svg" alt="img" />
                <h3 className="">Store any type of file</h3>
                <p className="">Whether you're sharing holidays photos or work documents, Fylo has you covered allowing for all file types to be securely stored and shared.</p>
              </div>
            </div>
          </div>
          <div className="div3">
            <img className="" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041290/fylo/images/illustration-stay-productive_z8ywdh.png" alt="img" />
            <div>
              <h1 className="">Stay productive, wherever you are</h1>
              <p className="">Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
              <p className="">Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
              <p className="pLink">See how Fylo works <ArrowRightCircleFill /></p>
            </div>
          </div>
          <div className="div4">
            <div className="cont">
              <p className="pCont">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
              <div className="profile">
                <img className="profileImg" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041291/fylo/images/profile-1_qjoqpe.jpg" alt="img" />
                <div className="divProfile">
                  <h5 className="hProfile">Satish Patel</h5>
                  <h6 className="hProfile">Founder & CEO, Huddle</h6>
                </div>
              </div>
            </div>
            <div className="cont">
              <p className="pCont">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
              <div className="profile">
                <img className="profileImg" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041292/fylo/images/profile-2_beijam.jpg" alt="img" />
                <div className="divProfile">
                  <h5 className="hProfile">Bruce McKenzie</h5>
                  <h6 className="hProfile">Founder & CEO, Huddle</h6>
                </div>
              </div>
            </div>
            <div className="cont">
              <p className="pCont">Fylo has improved our team productivity by an order of magnitude. Since making the switch our team has become a well-oiled collaboration machine.</p>
              <div className="profile">
                <img className="profileImg" src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041292/fylo/images/profile-3_auq1lf.jpg" alt="img" />
                <div className="divProfile">
                  <h5 className="hProfile">Iva Boyd</h5>
                  <h6 className="hProfile">Founder & CEO, Huddle</h6>
                </div>
              </div>
            </div>
          </div>
          <div className="div5">
            <h1 className="">Get early access today</h1>
            <p className="pDiv5">It only takes a minute to sign up and our free starter tier is extremely generous. If you have any questions, our support team would be happy to help you.</p>
            <form>
            <input type="email" className="inputdiv5" placeholder="email@example.com" />
            <button type="submit" className="div5Btn">Get Started For Free</button>
            </form>
          </div>
        </div>
      </main>


      <footer>
        <div className="footerImg">
          <img src="https://res.cloudinary.com/dsu0m4sa2/image/upload/v1649041291/fylo/images/logo_kxjixn.svg" alt="img" />
        </div>
        <div className="footerDiv">

          <div className="footerdiv1">
            <GeoAltFill className="icon" />
            <p className="pFooter">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
          </div>

          <div>
            <div className="footerdiv2">
              <Telephone className="icon1" />
              <p className="pFooter">+1-543-123-4567</p>
            </div>
            <div className="footerdiv2">
              <EnvelopeFill className="icon1" />
              <p className="pFooter">example@fylo.com</p>
            </div>
          </div>
          <div className="">
            <p className="pFooter">About Us</p>
            <p className="pFooter">Jobs</p>
            <p className="pFooter">Press</p>
            <p className="pFooter">Blog</p>
          </div>
          <div className="">
            <p className="pFooter">Contact Us</p>
            <p className="pFooter">Terms</p>
            <p className="pFooter">Privacy</p>
          </div>
          <div className="">
            <Facebook className="icon2" />
            <Twitter className="icon2" />
            <Instagram className="icon2" />
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;