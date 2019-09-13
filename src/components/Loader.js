import React, { Component } from "react";
import Lottie from "react-lottie";
import animationData from "../res/animations/loading.json";

export class Loader extends Component {
  render() {
    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData: animationData,
      rendererSettings: {
        preserveAspectRatio: "xMidYMid slice"
      }
    };

    return <Lottie options={defaultOptions} width={600} />;
  }
}
