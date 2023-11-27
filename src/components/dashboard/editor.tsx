"use client";

import * as BNCore from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import "@blocknote/core/style.css";

interface EditorProps
  extends Partial<BNCore.BlockNoteEditorOptions<BNCore.BlockSchema>> {
  onChange?: () => void;
}

export default function Editor(props: EditorProps) {
  const { editable = true, initialContent, ...rest } = props;
  const { theme } = useTheme() as { theme: "light" | "dark" };

  const editor: BNCore.BlockNoteEditor | null = useBlockNote({
    editable: editable,
    initialContent: initialContent as BNCore.PartialBlock[],
    onEditorContentChange(_editor) {},
  });

  return <BlockNoteView editor={editor} theme={theme} {...rest} />;
}
