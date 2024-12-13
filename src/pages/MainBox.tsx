import { FileTree } from "@/components/FileTree";
import Socials from "@/components/Socials";
import React from "react";

const MainBox = () => {
  return (
    <div className="flex flex-col items-center flex-grow">
      <FileTree />
      <Socials />
    </div>
  );
};

export default MainBox;
