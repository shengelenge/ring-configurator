import { NavArray } from "./NavArray";

export default function ConfiguratorNav() {
  return (
    <ul>
      {NavArray.map((item, idx) => (
        <li key={idx}>{item.name}</li>
      ))}
    </ul>
  );
}
