import React, { useEffect } from "react";

export default function App() {
  useEffect(() => {
    // Redirect to the specified URL
    window.location.href = "https://snapshawt.com";
  }, []);
  return <div></div>;
}
