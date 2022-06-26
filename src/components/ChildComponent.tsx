import { memo } from "react";
interface Props {
  onClick: () => void;
}

// メモ化させることで、propsに変更がない時はレンダリングを止めることができる。
const ChildComponent = memo(({ onClick }: Props) => {
  console.log("子のコンポーネントが描画されました。");
  return (
    <button type="button" onClick={onClick}>
      +2
    </button>
  );
});

export default ChildComponent;
