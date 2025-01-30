"use client";

import { useTheme } from "next-themes";
import { useEffect, useMemo, useState } from "react";
import {
  Cloud,
  fetchSimpleIcons,
  ICloud,
  renderSimpleIcon,
  SimpleIcon,
} from "react-icon-cloud";
import Image from "next/image";

// Cloud configuration
const cloudProps: Omit<ICloud, "children"> = {
  containerProps: {
    style: {
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      width: "100%",
      paddingTop: 40,
    },
  },
  options: {
    reverse: true,
    depth: 2,
    wheelZoom: false,
    imageScale: 2,
    activeCursor: "default",
    tooltip: "native",
    initial: [0.1, -0.1],
    clickToFront: 500,
    tooltipDelay: 0,
    outlineColour: "#ffffff",
    maxSpeed: 0.05,
    minSpeed: 0.01,
    radiusX: 0.7,
    radiusY: 0.7,
    radiusZ: 0.7,
    shuffleTags: true,
  },
};

export type DynamicCloudProps = {
  iconSlugs: string[];
};

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>;

export default function IconCloud({ iconSlugs }: DynamicCloudProps) {
  const [data, setData] = useState<IconData | null>(null);
  const { theme } = useTheme();

  useEffect(() => {
    fetchSimpleIcons({ slugs: iconSlugs }).then(setData);
  }, [iconSlugs]);

  const renderedIcons = useMemo(() => {
    if (!data) return null;
    return Object.values(data.simpleIcons).map((icon) =>
      renderSimpleIcon({
        icon,
        bgHex: theme === "light" ? "#f3f2ef" : "#080510",
        fallbackHex: theme === "light" ? "#6e6e73" : "#ffffff",
        minContrastRatio: theme === "dark" ? 2 : 1.2,
        size: 42,
        aProps: {
          href: undefined,
          target: undefined,
          rel: undefined,
          onClick: (e: React.MouseEvent) => e.preventDefault(),
        },
      })
    );
  }, [data, theme]);

  return (
    <Cloud {...cloudProps}>
      <>
        {renderedIcons}
      </>
    </Cloud>
  );
}