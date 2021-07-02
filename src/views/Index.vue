<template>
  <div id="index">
    <ckeditor
      :editor="editor"
      v-model="editorData"
      :config="editorConfig"
    ></ckeditor>
  </div>
</template>

<script>
import CKEditor from '@ckeditor/ckeditor5-vue2'
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  name: 'IndexPage',
  components: {
    // 이 코드문은 생략가능합니다
    ckeditor: CKEditor.component,
  },
  data() {
    return {
      editor: ClassicEditor,
      editorData: '<p> 내용을 입력하세요 </p>',
      editorConfig: {
        // 편집기 콘픽
      },
    }
  },
}
</script>

<style scoped></style>
