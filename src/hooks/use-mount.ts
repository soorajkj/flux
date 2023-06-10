"use client";

import * as React from "react";

export default function useMount() {
  const [mount, setMount] = React.useState(false);

  React.useEffect(() => {
    setMount(true);
  }, []);

  if (!mount) return null;

  return mount;
}
