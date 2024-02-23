"use client";

import dynamic from "next/dynamic";
import * as BNCore from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import "@blocknote/core/style.css";

interface BlockEditorProps
  extends Partial<BNCore.BlockNoteEditorOptions<BNCore.BlockSchema>> {
  onChange?: () => void;
}

export function BlockEditor(props: BlockEditorProps) {
  const { editable = true, initialContent, ...rest } = props;
  const { theme } = useTheme() as { theme: "light" | "dark" };

  const editor: BNCore.BlockNoteEditor | null = useBlockNote({
    editable: editable,
    initialContent: initialContent as BNCore.PartialBlock[],
    onEditorContentChange(_editor) {},
    domAttributes: {
      editor: {
        class: "!bg-transparent !font-family-shantell-sans !text-neutral-300",
      },
    },
  });

  return <BlockNoteView editor={editor} theme={theme} {...rest} />;
}

export default dynamic(
  () => import("~components/editor").then(({ BlockEditor }) => BlockEditor),
  { ssr: false }
);
