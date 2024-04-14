import { useEffect } from "react";

function Error() {
  useEffect(() => {
    document.title = "Error";
  }, []);
  return <h1 className="text-2xl text-center text-white">Page Not Found</h1>;
}

export default Error;
