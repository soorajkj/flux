"use client";

import { Block } from "@blocknote/core";
import { BlockNoteView } from "@blocknote/mantine";
import { useCreateBlockNote } from "@blocknote/react";
import { useTheme } from "next-themes";
import "@blocknote/mantine/style.css";

interface EditorProps {
  onChange: (_content: Block[]) => void;
  initialContent?: string;
  editable?: boolean;
}

export default function Editor(props: EditorProps) {
  const { editable = true, initialContent, onChange } = props;
  const { resolvedTheme } = useTheme();

  const editor = useCreateBlockNote({
    initialContent: initialContent ? JSON.parse(initialContent) : undefined,
  });

  return (
    <BlockNoteView
      editor={editor}
      editable={editable}
      onChange={() => onChange(editor.document)}
      theme={resolvedTheme as "light" | "dark"}
      className="tailwind-editor"
    />
  );
}
