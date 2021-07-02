<template>
  <div id="config">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
    <hr class="divider" />
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig2"
    ></ckeditor>
    <hr class="divider" />
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig3"
    ></ckeditor>
    <hr class="divider" />
    <ckeditor :editor="editor" v-model="editorData" :disabled="true"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  name: 'Config',
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p>내용을 입력하세요</p>',
      editorConfig: {
        toolbar: {
          items: ['bold', 'italic', 'link', 'undo', 'redo'],
        },
      },
      editorConfig2: {
        toolbar: {
          items: ['bold', 'italic', '|', 'link', '|', 'undo', '|', 'redo'],
        },
      },
      editorConfig3: {
        toolbar: {
          items: ['bold', 'italic'],
        },
      },
    }
  },
}
</script>

<style scoped></style>
