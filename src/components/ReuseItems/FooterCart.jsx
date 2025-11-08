import React from "react";

const FooterCart = ({
  section = "",
  linkone,
  linktwo,
  linkthree,
  linkfour,
  linkfive
}) => {
  return (
    <div className="rounded-md">
      <h2 className="font-bold tracking-tighter text-md mb-4">{section}</h2>
      <div className="space-y-2 text-[#a19a9a]">
        <p className="hover:text-white">{linkone}</p>
        <p className="hover:text-white">{linktwo}</p>
        <p className="hover:text-white">{linkthree}</p>
        <p className="hover:text-white">{linkfour}</p>
        <p className="hover:text-white">{linkfive}</p>
      </div>
    </div>
  );
};

export default FooterCart;
