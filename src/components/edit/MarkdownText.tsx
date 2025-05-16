// MarkdownText.tsx
import { useEditor, EditorContent } from '@tiptap/react'
import StarterKit from '@tiptap/starter-kit'
import Underline from '@tiptap/extension-underline'
import Link from '@tiptap/extension-link'
import Heading from '@tiptap/extension-heading'
import TextAlign from '@tiptap/extension-text-align'

export default function MarkdownText() {
  const editor = useEditor({
    extensions: [
      StarterKit,
      Underline,
      Link,
      Heading.configure({ levels: [1, 2] }),
      TextAlign.configure({ types: ['heading', 'paragraph'] }),
    ],
    content: '<p>Edit your description here...</p>',
  })

  return (
    <div className="editor-container">
      <label className="label">Description</label>
      <div className="toolbar">
        <button onClick={() => editor?.chain().focus().toggleBold().run()} className={editor?.isActive('bold') ? 'active' : ''}>B</button>
        <button onClick={() => editor?.chain().focus().toggleItalic().run()} className={editor?.isActive('italic') ? 'active' : ''}>I</button>
        <button onClick={() => editor?.chain().focus().toggleUnderline().run()} className={editor?.isActive('underline') ? 'active' : ''}>U</button>
        <button onClick={() => editor?.chain().focus().toggleHeading({ level: 1 }).run()}>H1</button>
        <button onClick={() => editor?.chain().focus().toggleHeading({ level: 2 }).run()}>H2</button>
        <button onClick={() => editor?.chain().focus().toggleBulletList().run()}>• List</button>
        <button onClick={() => editor?.chain().focus().toggleOrderedList().run()}>1. List</button>
        <button onClick={() => editor?.chain().focus().setTextAlign('left').run()}>Left</button>
        <button onClick={() => editor?.chain().focus().setTextAlign('center').run()}>Center</button>
        <button onClick={() => editor?.chain().focus().setTextAlign('right').run()}>Right</button>
      </div>
      <div className="editor-box">
        <EditorContent editor={editor} />
      </div>
      <p className="helper-text">Set a description to the product for better visibility.</p>
    </div>
  )
}
