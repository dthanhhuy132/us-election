export default function PresidentPageProgress() {
  return (
    <div className="inline-block w-[800px] text-center ">
      <div className="progress mt-[30px] color-progress">
        <span className="fixed z-50 bg-white max-w-[1px] ml-[400px]">1</span>
        <div className="progress-bar w-[60%] color-progress-bar" role="progressbar"></div>
      </div>
    </div>
  );
}
