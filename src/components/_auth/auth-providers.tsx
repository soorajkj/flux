import React from "react";
import Button from "~components/core/button";
import Icon from "~components/core/icon";

export default function AuthProviders() {
  return (
    <div className="flex flex-col gap-4">
      <Button variant="secondary" className="space-x-2" fullWidth>
        <Icon icon="google" width={20} height={20} />
        <span>Continue with Google</span>
      </Button>
      <Button variant="secondary" className="space-x-2" fullWidth>
        <Icon icon="github" width={20} height={20} />
        <span>Continue with Github</span>
      </Button>
    </div>
  );
}
