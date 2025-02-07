import React from "react";
import {Col, Container, Row } from "react-bootstrap";

const listFeature = [
    {
        icon : "fa-graduation-cap" ,
        hText : "Active Learning",
        background : "bg-darkorange",
        tColor : "text-darkorange",
        pText : " Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after."
    },
    {
        icon : "fa-user" ,
        hText : "Expert Teachers",
        background : "bg-orange",
        tColor : "text-orange",
        pText : " Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after."
    },
    {
        icon : "fa-map" ,
        hText : "Strategi Location",
        background : "bg-pink",
        tColor : "text-pink",
        pText : " Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after."
    },
    {
        icon : "fa-chain" ,
        hText : "Full Day Programs",
        background : "bg-skyblue",
        tColor : "text-skyblue",
        pText : " Uniquely productivate real time collaboration idea-sharing after awesome quality vectors after."
    },
]
function WhyChoose() {
  return (
    <div>
      <section className="feature py-5 my-lg-5">
        <Container>
        <div className="text-center py-5">
            <h1 className="fw-bold text-purple">Why Choose KIdsAcademy</h1>
            <p className="text-center px-sm-5">
              Rapidiously expedite granular imperatives before economically
              sound web services. Credibly actualize pandemic strategic
              themeplatform.
            </p>
          </div>
          <Row>
              {
                listFeature.map((item, index)=>{
                    return(
                        <Col lg={3} sm={6}>
                            <div className="text-center" key="index">
                            <div className={` ${item.background} logo rounded-circle mx-auto d-flex align-items-center justify-content-center`}>
                                <i className={`fa ${item.icon} fw-bold fs-5`}></i>
                            </div>
                            <div className="text-center">
                                <h3 className={`${item.tColor} fw-bold py-3`}>{item.hText}</h3>
                                <p className="text-center">
                                    {item.pText}
                                </p>
                            </div>
                            </div>
                        </Col>
                    )
                })
              }
          </Row>
          <Row>
            <Col className="text-center">
              <img src="./image/feature.jpg" className="img-fluid" alt="" />
            </Col>
          </Row>
        </Container>
      </section>
    </div>
  )
}

export default WhyChoose
