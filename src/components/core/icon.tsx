import { forwardRef, Fragment, SVGAttributes } from "react";
import * as VisuallyHiddenPrimitive from "@radix-ui/react-visually-hidden";
import Check from "public/icons/check.svg";
import ChevronRight from "public/icons/chevron-right.svg";
import Close from "public/icons/close.svg";
import Loader from "public/icons/loader.svg";
import Palette from "public/icons/palette.svg";
import Resizable from "public/icons/resizable.svg";

export const icons = {
  check: Check,
  chevronRight: ChevronRight,
  close: Close,
  loader: Loader,
  palette: Palette,
  resizable: Resizable,
};

export interface IconProps extends SVGAttributes<SVGSVGElement> {
  icon: keyof typeof icons;
  label?: string;
}

const Icon = forwardRef<SVGSVGElement, IconProps>((props, ref) => {
  const { icon, width = 16, height = 16, label, ...rest } = props;

  const Comp = icons[icon];

  return (
    <Fragment>
      <Comp ref={ref} width={width} height={height} {...rest} />
      {label && (
        <VisuallyHiddenPrimitive.Root>{label}</VisuallyHiddenPrimitive.Root>
      )}
    </Fragment>
  );
});

Icon.displayName = "Icon";

export default Icon;
