<template>
<div :class="{ dark: !this.getMode }">
  <nav class="navbar">
    <button class="btn" :class="{ 'btn-gray': !this.getMode }"
    @click="back">
      返回列表
    </button>
    <button class="btn" :class="{ 'btn-black': this.getMode }"
    @click="save">
      儲存進度
    </button>
  </nav>
  <div class="paper">
    <input type="text"  class="title" v-model="noteTitle" placeholder="請輸入標題">
    <div class="basr"></div>
    <Editor id="editor" v-model="noteHTML" :init="editorInit"></Editor>
  </div>
</div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import tinymce from 'tinymce/tinymce';
import Editor from '@tinymce/tinymce-vue';
import 'tinymce/themes/silver/theme';
import 'tinymce/plugins/lists';
import 'tinymce/plugins/image';
import 'tinymce/plugins/table';
import 'tinymce/plugins/code';
import 'tinymce/plugins/codesample';
import 'tinymce/plugins/media';
import 'tinymce/plugins/link';
import 'tinymce/plugins/quickbars';
import 'tinymce/plugins/hr';

@Component({
  components: {
    Editor,
  },
})

export default class Edit extends Vue {
  private $store;

  // data
  private noteId: number = 123;
  private noteTitle: string = 'TITLE';
  private noteHTML: string = '123456789';
  private editorInit: object = {
    plugins: 'lists image table media code codesample link quickbars hr',
    skin_url: this.getMode ? '/tinymce/skins/ui/oxide-black' : '/tinymce/skins/ui/oxide-dark', // neccessary
    auto_focus: true,
    inline: true,
    branding: false,
    menubar: false,
    paste_data_images: true,
    toolbar: 'image media | bullist numlist | table | hr | codesample code',
    quickbars_selection_toolbar: 'bold italic strikethrough forecolor backcolor quicklink | h2 h3 | bullist numlist',
    quickbars_insert_toolbar: false,
  };

  constructor () {
    super();
  }

  // life cycles
  public created () {
    this.noteId = Number(this.$route.params.noteId);
    this.noteTitle = this.$store.state.notes[this.noteId].title;
    this.noteHTML = this.$store.state.notes[this.noteId].htmlContent;
  }
  public mounted () {
    tinymce.init({
    });

    document.addEventListener('selectionchange', () => {
      this.hideToolBar();
    });
  }

  // get
  get getMode (): boolean {
    return this.$store.state.mode;
  }

  // methods
  public save (): void {
    this.$store.updateNoteContent(this.noteTitle, this.noteHTML, this.noteId);
  }
  public back (): void {
    this.save();
    this.$router.push({
      name: 'home',
    });
  }
  public hideToolBar (): void {
    const selection: Selection = document.getSelection() as Selection;
    const toolbar: HTMLElement = document.querySelector('.tox-editor-container') as HTMLElement;

    if ((selection.focusNode as Node).nodeType === 3
    && !selection.isCollapsed) {
      toolbar.style.display = 'none';
    } else {
      toolbar.style.display = 'block';
    }
  }
}
</script>

<style lang='scss' scoped>
@import './../assets/all';

.navbar {
  width: 100%;
  display: inline-flex;
  justify-content: space-between;
  button:hover {
    opacity: .6;
  }
}
.paper {
  min-height: calc(100vh - 200px);
  margin-top: 30px;
  text-align: left;
  background-color: $lightgray;
  border-radius: 5px;
}
.title {
  width: 100%;
  padding: 0 1.25rem;
  line-height: 2;
  font-size: 2.5rem;
  border: none;
  border-bottom: solid 1px #d4d4d4;
}
#editor {
  min-height: calc(100vh - 200px - 5rem);
  padding: 1rem 1.25rem 1rem;
}
.dark .paper {
  background-color: #1A1A25;
}
</style>

<style lang="scss">
.mce-content-body {
  line-height: 1.25;
  outline: none;
  h1, h2, h3, h4 {
    font-weight: bold;
  }
  h1 {
    font-size: 2rem;
    margin-block-start: 0.67em;
    margin-block-end: 0.67em;
  }
  h2 {
    font-size: 1.5rem;
    margin-block-start: 0.83em;
    margin-block-end: 0.83em;
  }
  h3 {
    font-size: 1.17rem;
    margin-block-start: 1em;
    margin-block-end: 1em;
  }
  h4 {
    margin-block-start: 1.33em;
    margin-block-end: 1.33em;
  }
  ul {
    list-style-type: disc;
    padding-inline-start: 40px;
  }
  em {
    font-style: italic;
  }
  a:link {
    color: #0000ff;
  }
}
.tox-editor-container {
  position: fixed !important;
  top: auto !important;
  left: 50% !important;
  bottom: 50px !important;
  transform: translateX(-50%) !important;
}
</style>
