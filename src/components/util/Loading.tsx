import ReactLoading from "react-loading";

const Loading = () => (
  <div className="mt-12 flex justify-center">
    <ReactLoading type={"spin"} color={"gray"} height={60} width={60} />
  </div>
);

export default Loading;
