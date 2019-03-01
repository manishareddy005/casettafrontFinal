import React from "react";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


class FooterPage extends React.Component {
  render(){
  return (
    <MDBFooter color="none" className="font-small pt-4 mt-4">
     <div className="footer-copyright text-center py-3">
      <MDBContainer fluid className="text-center ">
            <h5 className="title"><center>Casetta </center></h5>
            <p>
              Hotel discovery made easier.......
            </p>
      </MDBContainer>
        <MDBContainer fluid>
          &copy; {new Date().getFullYear()} Copyright: <a href="https://www.MDBootstrap.com"> Casetta.com </a>
        </MDBContainer>
      </div>
    </MDBFooter>
  );
}
}

export default FooterPage;