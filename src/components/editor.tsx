"use client";

import * as BlockNoteEditorCore from "@blocknote/core";
import { BlockNoteView, useBlockNote } from "@blocknote/react";
import "@blocknote/core/style.css";

interface EditorProps {
  editable?: boolean;
}

export default function Editor(props: EditorProps) {
  const { editable = true } = props;

  const editor: BlockNoteEditorCore.BlockNoteEditor | null = useBlockNote({
    editable: editable,
    onEditorContentChange(editor) {
      JSON.stringify(editor.topLevelBlocks, null, 2);
    },
  });

  return <BlockNoteView editor={editor} theme="dark" />;
}
