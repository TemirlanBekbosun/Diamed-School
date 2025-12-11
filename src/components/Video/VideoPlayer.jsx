import React from "react";
import { Box } from "@mui/material";

export default function VideoPlayer() {
  return (
    <Box
      sx={{
        width: "100%",
        height: 514,
        borderRadius: 3,
        overflow: "hidden",
        bgcolor: "#000",
      }}
    >
      <iframe
        width="100%"
        height="100%"
        src="https://www.youtube.com/embed/crdK9gyQvQM?list=RDTgoErhcbL_g"
        title="TeeMur - Сгораем дотла (Official Audio 2018)"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
    </Box>
  );
}
