import ReactLoading from "react-loading";

const Loading = () => (
  <div className="mt-12 flex justify-center">
    <ReactLoading type={"spin"} color={"gray"} height={100} width={100} />
  </div>
);

export default Loading;
