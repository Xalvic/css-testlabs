import React, { useContext } from "react";
import { GroupContext } from "./Context";

export default function List() {
  const [links, setLinks] = useContext(GroupContext);

  return (
    <div className='List'>
      {links.map((link) => (
        <a href={link.goto}>
          <div className='box'>
            <h4>{link.name}</h4>
            <img src={link.src} alt='img' />
          </div>
        </a>
      ))}
    </div>
  );
}
