import { IoIosPrint, IoIosListBox } from "react-icons/io";

type FeaturesListType = {
  name: string;
  icon: JSX.Element;
};

export const FeaturesList: FeaturesListType[] = [
  {
    name: "Szczegóły konfiguracji",
    icon: <IoIosListBox />,
  },
  { name: "Wydrukuj", icon: <IoIosPrint /> },
];
