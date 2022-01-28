import { hook } from "./hookUtil";

export default function Header({ dataHook }) {
  return (
    <>
      <h1 {...hook(dataHook, "text")}>Header component</h1>
      <input {...hook(dataHook, "input")} />
    </>
  );
}
