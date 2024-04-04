import React from "react";
import { HStack, AspectRatio } from "@chakra-ui/react";

export default function Vid() {
  const videoUrl =
    "https://www.youtube.com/embed/HHXecDohQL4?si=fYMTyj_4_JeUWAu5";
  const videoAspectRatio = {
    width: {
      base: "100%",
      xsm: "90%",
      ssm: "90%",
      sm: "90%",
      md: "90%",
      lg: "90%",
      xl: "90%  ",
      xxl: "90%",
    },
    height: {
      base: "300px",
      xsm: "300px",
      ssm: "400px",
      sm: "500px",
      md: "600px",
      lg: "600px",
      xl: "600px",
      xxl: "600px",
    },
  };

  // Usage
  <Vid videoUrl={videoUrl} videoAspectRatio={videoAspectRatio} />;

  return (
    <>
      <HStack justify={"center"} mt={"2%"}>
        <AspectRatio w={videoAspectRatio.width} h={videoAspectRatio.height}>
          <iframe
            style={{ borderRadius: "20px" }}
            width={"100%"}
            height={"100%"}
            src={videoUrl}
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            allowFullScreen
          ></iframe>
        </AspectRatio>
      </HStack>
    </>
  );
}
