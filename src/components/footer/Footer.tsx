import Features from "./subcomponents/Features";
import Price from "./subcomponents/Price";
import RingsSwitch from "./subcomponents/RingsSwitch";

export default function Footer() {
  return (
    <footer className="fixed bottom-0 grow-0 w-screen flex justify-between">
      <RingsSwitch />
      <Price />
      <Features />
    </footer>
  );
}
