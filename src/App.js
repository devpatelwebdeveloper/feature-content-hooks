import React from "react";
import Features from "./Components/Features";
import "./styles.css";

export default function App() {
  const features = [
    {
      title: "title1",
      content: "content"
    },
    {
      title: "title2",
      content: "content2"
    },
    {
      title: "title3",
      content: "content3"
    },
    {
      title: "title4",
      content: "conten4"
    },
    {
      title: "title5",
      content: "content5"
    },
    {
      title: "title6",
      content: "content6"
    },
    {
      title: "title7",
      content: "conten7"
    },
    {
      title: "title8",
      content: "content8"
    }
  ];
  return (
    <>
      <div className="App">
        <Features featureContents={features} />
      </div>
    </>
  );
}
