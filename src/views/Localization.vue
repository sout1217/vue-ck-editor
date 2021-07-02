<template>
  <div id="localization">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'
import '@ckeditor/ckeditor5-build-classic/build/translations/ko'

export default {
  name: 'Localization',
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p> 내용을 입력하세요 </p>',
      editorConfig: {
        // 편집기 콘픽
        language: 'ko',
      },
    }
  },
}
</script>

<style scoped></style>
