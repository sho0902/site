import React from "react";
import GenericTemplate from "../templates/GenericTemplate";

const HomePage: React.FC = () => {
  return (
    <GenericTemplate title="ReactHooks">
      <>このサービスはTypeScriptで書かれています。</>
    </GenericTemplate>
  );
};

export default HomePage;