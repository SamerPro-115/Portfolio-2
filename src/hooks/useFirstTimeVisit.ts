import { useEffect, useState } from "react";

export function useFirstTimeVisit(): number {
  const [loadingTime, setLoadingTime] = useState(0);

  useEffect(() => {
    const firstTime = localStorage.getItem("first-visit");

    if (firstTime !== "false") {
      localStorage.setItem("first-visit", "false");
      setLoadingTime(5000);
    } else {
      setLoadingTime(2500);
    }
  }, []);

  return loadingTime;
}