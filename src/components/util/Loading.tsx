import ReactLoading from "react-loading";

const Loading = () => (
  <div className="mt-12 flex justify-center">
    <ReactLoading type={"spin"} color={"gray"} height={50} width={50} />
  </div>
);

export default Loading;
