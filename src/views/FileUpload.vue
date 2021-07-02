<template>
  <div id="file-upload">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
      @ready="upload"
    ></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import UploadAdapter from '@/adaptor/adaptor'

export default {
  name: 'FileUpload',
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p> 내용을 입력하세요 </p>',
      editorConfig: {},
    }
  },
  methods: {
    upload(editor) {
      editor.plugins.get('FileRepository').createUploadAdapter = loader => {
        return new UploadAdapter(loader)
      }
    },
  },
}
</script>

<style scoped></style>
