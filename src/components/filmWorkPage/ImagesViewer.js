import React, { useState } from "react";

const ImagesViewer = ({ images }) => {
  const [currentImage, setCurrentImage] = useState(0);

  const bgImageStyle = {
    backgroundImage:
      "url(" +
      require(`../../images/still_frames/${images[currentImage]}`) +
      ")",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    backgroundSize: "cover",
    width: "100%",
    paddingTop: "56.5%"
  };

  const handleClick = buttonEvent => {
    let newImage = currentImage;

    switch (buttonEvent.target.name) {
      case "next":
        if (currentImage === images.length - 1) {
          setCurrentImage(0);
        } else {
          setCurrentImage(++newImage);
        }
        break;
      case "back":
        if (currentImage === 0) {
          setCurrentImage(images.length - 1);
        } else {
          setCurrentImage(--newImage);
        }

        break;
      default:
        break;
    }
  };

  return (
    <div className="w-full flex justify-center">
      <div className="relative" style={bgImageStyle}>
        <div
          className="absolute flex justify-between items-end"
          style={{
            width: "100%",
            height: "100%",
            top: "0",
            left: "0"
          }}
        >
          <div className=" flex justify-center bgColorTransButton h-full">
            <button
              className="p-2 text-xs md:text-base md:text-2xl"
              name="back"
              onClick={handleClick}
            >
              Back
            </button>
          </div>
          <p className=" p-2 text-xs md:text-base">
            still final images from my work
          </p>
          <div className=" flex justify-center bgColorTransButton h-full">
            <button
              className="p-2 text-xs md:text-2xl"
              name="next"
              onClick={handleClick}
            >
              Next
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImagesViewer;
