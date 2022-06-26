interface Props {
  onClick: () => void;
}

const ChildComponent = ({ onClick }: Props) => {
  console.log("子のコンポーネントが描画されました。");
  return (
    <button type="button" onClick={onClick}>
      +2
    </button>
  );
};

export default ChildComponent;
