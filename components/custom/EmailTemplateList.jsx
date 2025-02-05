import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";

function EmailTemplateList() {
  const [emailList, setEmailList] = useState([]);
  return (
    <div className="flex justify-center text-xl text-primary mt-7 flex-col items-center">
      <h2 className="font-bold text-xl text-primary mt-6">Workspace</h2>
      {emailList?.length == 0 && (
        <div>
          <Image
            src={"/images/email.png"}
            alt="email"
            height={250}
            width={250}
          />
          <Button>+ Create New</Button>
        </div>
      )}
    </div>
  );
}

export default EmailTemplateList;
