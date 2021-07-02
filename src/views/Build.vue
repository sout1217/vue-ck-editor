<template>
  <div id="build">
    <ckeditor :editor="editor" v-model="editorData" @ready="onReady"></ckeditor>
  </div>
</template>

<script>
import ClassicEditor from '@ckeditor/ckeditor5-build-classic'

export default {
  name: 'Build',
  data() {
    return {
      // editor: DecoupledEditor,
      editor: ClassicEditor,
      editorData: '<p>내용을 입력하세요</p>',
    }
  },
  methods: {
    onReady(editor) {
      // 에디터의 도구들을 설정할 때 이용합니다
      console.log(editor)
    },
  },
}
</script>

<style scoped></style>
