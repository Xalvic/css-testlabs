import React, { useState, useEffect, createContext } from "react";

export const GroupContext = createContext();

export const TheProvider = (props) => {
  const [links, setLinks] = useState([
    {
      name: "Weather App",
      src: "/images/weather.png",
      goto: "https://test-weather.netlify.app/",
    },
    {
      name: "Billing App",
      src: "/images/billing.png",
      goto: "https://narrow-bill-app.netlify.app",
    },
    {
      name: "Image Carousel",
      src: "/images/gallery.png",
      goto: "https://xalvic-gallery.netlify.app",
    },
    {
      name: "Engine Start",
      src: "/images/start.png",
      goto: "https://observecss.netlify.app/",
    },
    {
      name: "Longin/ SignUp Component",
      src: "/images/signup.gif",
      goto: "https://sign-login-component.netlify.app/",
    },
    {
      name: "Draggable Blob",
      src: "/images/blob.png",
      goto: "https://cssblob.netlify.app/",
    },
  ]);

  return (
    <GroupContext.Provider value={[links, setLinks]}>
      {props.children}
    </GroupContext.Provider>
  );
};
