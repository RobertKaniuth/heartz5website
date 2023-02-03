import React from "react";
import WorkCard from "../components/WorkCard/WorkCard";

const CommissionWork = () => (
  <div>
    <WorkCard
      img={require("../assets/comission_works/drachenhemd.png")}
      title="Drachenhemd"
      description="Singlecover for German Rap Artist Fruity Luke"
    />
    <WorkCard
      img={require("../assets/comission_works/MKWUKM.png")}
      title="Kaputt"
      description="Singlecover for German Rap Artist Fruity Luke"
    />
    <WorkCard
      img={require("../assets/comission_works/KaputtRMX.png")}
      title="Kaputt RMX"
      description="Singlecover for German Rap Artist Fruity Luke"
    />
  </div>
);

export default CommissionWork;
