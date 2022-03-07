import React from "react";
import { Container, Row } from "react-bootstrap";
import Servicediv from "./Servicediv";

function Servicecall() {
  return (
    <Container>
      <Row className="mt-3">
        <Servicediv
          head="Custom Application Development Services"
          text=" We rely on our technological expertise and specialized industry
        experience to develop any type of web, mobile, desktop, and hybrid app
        per your business requirements."
        />
        <Servicediv
          head="
          App Maintenance Services"
          text="Our application maintenance and modernization services are designed to ensure
           the scalability, performance, and sustainability of your entire software infrastructure
            as your business grows."
        />
        <Servicediv
          head=" QA and Software Testing Services"
          text="Comprehensive quality assurance is built into our custom software
           service model, but we can also provide on-demand QA and a suite of functional
            and usability software tests upon request."
        />
        <Servicediv
          head=" API Integration Services"
          text="We build and implement custom APIs for all breeds of applications, 
          helping to add functionality to your software systems and facilitate
           communication between your apps and others."
        />
        <Servicediv
          head=" IT Security Services"
          text="Our thorough threat audits help us identify your software infrastructure's most
           pressing vulnerabilities, allowing us to integrate the encryptions, security services 
           and access protocols you require."
        />
        <Servicediv
          head=" Software Deployment Services"
          text="Our implementation specialists will work with your IT team to establish detailed 
          software deployment objectives and timelines, covering configuration, testing, project
           governance, troubleshooting and more."
        />
        <Servicediv
          head=" Data Backup and Recovery Services"
          text="We implement robust data backup and recovery strategies for cloud-based, on-premises 
          and hybrid servers, designed to ensure the integrity of your data and the continuity of your 
          business."
        />
        <Servicediv
          head=" Software Migration Services"
          text="We perform cloud-based migrations, system upgrades and other vital software
           modernization services prioritizing system uptime and data integrity throughout an 
           often daunting IT transition."
        />
      </Row>
    </Container>
  );
}

export default Servicecall;
