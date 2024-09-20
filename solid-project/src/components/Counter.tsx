import { createEffect, createSignal } from "solid-js";
import "./Counter.css";

export default function Counter() {
  const [count, setCount] = createSignal(0);
  const [count2, setCount2] = createSignal(0);

  createEffect((prev) => {
    console.log({ prev });
    const sum = count() + count2();

    if (sum !== prev) console.log(sum);

    return sum;
  }, 0);

  return (
    <>
      <button
        class="increment"
        onClick={() => setCount(count() + 1)}
        type="button"
      >
        Clicks: {count()}
      </button>
      <button
        class="increment"
        onClick={() => setCount2(count2() + 1)}
        type="button"
      >
        Clicks 2: {count2()}
      </button>
    </>
  );
}
