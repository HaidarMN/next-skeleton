import React, { useState, useEffect } from "react";
import MainLayout from "@/layouts/MainLayout";
import Bar from "@/components/global/bar";
import Button from "@/components/global/Button";

function ProgressBar() {
  const [progress, setProgress] = useState(0);
  const [progressAuto, setProgressAuto] = useState(0);
  const plusProgress = () => {
    if (progress <= 100) {
      setProgress(progress + 10);
    }
  };
  const minProgress = () => {
    if (progress > 0) {
      setProgress(progress - 10);
    }
  };

  useEffect(() => {
    const timer = setInterval(() => {
      setProgressAuto((prevProgress) =>
        prevProgress >= 100 ? 10 : prevProgress + 10,
      );
    }, 800);
    return () => {
      clearInterval(timer);
    };
  }, []);
  return (
    <MainLayout title="Progress Bar">
      <div>
        <Bar value={progress} className="mb-4"></Bar>
        <div className="mb-4 flex flex-row gap-4">
          <Button
            onClick={minProgress}
            text="-"
            size="lg"
            variant="primary"
            type="button"
            customStyle="w-1/2"
          />
          <Button
            onClick={plusProgress}
            text="+"
            size="lg"
            variant="primary"
            type="button"
            customStyle="w-1/2"
          />
        </div>
        <Bar value={progressAuto} className="mb-4"></Bar>
      </div>
    </MainLayout>
  );
}

export default ProgressBar;
