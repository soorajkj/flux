import { forwardRef } from "react";
import { cva, VariantProps } from "class-variance-authority";
import { cx } from "~lib/utils";

interface TitleProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof TitleStyles> {
  level?: 1 | 2 | 3 | 4 | 5 | 6;
}

const Title = forwardRef<HTMLHeadingElement, TitleProps>((props, ref) => {
  const { level = 1, className, ...rest } = props;

  const Comp: any = `h${level}`;

  return (
    <Comp
      ref={ref}
      className={cx(TitleStyles({ level, className }))}
      {...rest}
    />
  );
});

interface TextProps {}

const Text = (props: TextProps) => {
  const { ...rest } = props;

  const Comp = "p";

  return <Comp {...rest} />;
};

const Link = () => {
  return <p></p>;
};

Title.displayName = "Title";
// Text.displayName = "Text";

const Typography = { Title, Text, Link };

export default Typography;

const TitleStyles = cva(["tessract-title font-family-outfit"], {
  variants: {
    level: {
      1: "text-5xl",
      2: "text-4xl",
      3: "text-2xl",
      4: "text-xl",
      5: "text-lg",
      6: "text-base",
    },
  },
});
