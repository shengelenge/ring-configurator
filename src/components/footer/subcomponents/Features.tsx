import { FeaturesList } from "./FeaturesList";

export default function Features() {
  return (
    <ul className="flex flex-col gap-[5px] p-[20px]">
      {FeaturesList.map((feature, idx) => (
        <li
          key={idx}
          className="p-[7px] flex justify-start items-center gap-[5px]"
        >
          {feature.icon}
          {feature.name}
        </li>
      ))}
    </ul>
  );
}
