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

// Cloud configuration remains the same
const cloudProps: Omit<ICloud, "children"> = {
  // ... your existing cloud props
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
    if (!data) return [];  // Return empty array instead of null
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

  // Remove the fragment and directly return the renderedIcons
  return (
    <Cloud {...cloudProps}>
      {renderedIcons}
    </Cloud>
  );
}