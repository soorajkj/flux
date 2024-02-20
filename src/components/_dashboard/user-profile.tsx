"use client";

import React from "react";
import { handleSignout } from "~app/(auth)/action";
import { cx } from "~lib/utils";
import Button, { ButtonStyles } from "~components/core/button";
import Icon from "~components/core/icon";

export default function UserProfile() {
  return (
    <Button
      variant="outline"
      className={cx(
        ButtonStyles({ variant: "outline" }),
        "fixed bottom-8 right-20 h-10 w-10 rounded-full px-0 py-0"
      )}
      onClick={handleSignout}
    >
      <Icon icon="logout" width={18} height={18}></Icon>
    </Button>
  );
}
