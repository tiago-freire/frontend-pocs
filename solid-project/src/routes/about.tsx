import { Title } from "@solidjs/meta";
import { createSignal } from "solid-js";

export default function Home() {
  const [show, setShow] = createSignal(false);
  
  console.log('render about')
  return (
    <main>
      <Title>About</Title>
      <h1>About</h1>
    </main>
  );
}
