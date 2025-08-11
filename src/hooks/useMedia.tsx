import React from "react";

const useMedia = (media: string) => {
  const [mobile, setMobile] = React.useState<boolean>(false);

  React.useEffect(() => {
    function mediaMatch() {
      const math = window.matchMedia(media);
      setMobile(math.matches);
    }
    mediaMatch();

    window.addEventListener("resize", mediaMatch);
    return () => window.removeEventListener("resize", mediaMatch);
  }, [media]);

  return {
    mobile,
  };
};

export default useMedia;
