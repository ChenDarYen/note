<template>
<div id="notebook">

  <nav class="navbar">
    <div class="filter" :class="{ selected: !onlyStar }"
    @click="onlyStar = false">
      全部
    </div>
    <div class="mr-auto filter" :class="{ selected: onlyStar }"
    @click="onlyStar = true">
      已標示星號
    </div>
  
    <div class="ml-auto list-icon" :class="{ selected: getListStyle === 'list' }"
    @click="toggleListStyle">
      <ListIcon class="icon"/>
    </div>
    <div class="list-icon" :class="{ selected: getListStyle === 'block' }"
    @click="toggleListStyle">
      <FourSquaresListIcon class="icon"/>
    </div>
  </nav>

  <ul class="notes" :class="getListStyle">
    <li class="note">
      <div class="note-content add"
      @click="showModal = true">
        <div class="card add-content">
          <PlusIcon height="27px"/>
          <p>新增筆記</p>  
        </div>
      </div>
    </li>

    <template v-for="note in filtedNotes">
      <li class="note"
      v-if="note.favorite || !onlyStar"
      :key="note.id">
        <div class="note-content" :to="{ name: 'edit', params: { noteId: note.id } }">
          <Note class="card" :id="note.id"/>
        </div>
      </li>
    </template>
  </ul>

  <div class="modal" v-if="showModal"
  @click="hideModal">
    <div class="content">
      <h2>建立新的筆記</h2>
      <div class="form">
        <p>名稱：</p>
        <input type="text" v-model="newTitle"
        @keyup.enter="addNote">
        <p class="alarm" v-if="hasErr">
          請輸入您的筆記名稱。
        </p>
        <button class="btn btn-black"
        @click="addNote">
          建立
        </button>
      </div>
    </div>
  </div>
</div>
</template>

<script lang='ts'>
import { Component, Vue, Watch } from 'vue-property-decorator';
import Note from '@/components/note.vue';
import ListIcon from '@/components/svg/list.svg';
import FourSquaresListIcon from '@/components/svg/four-squares-list.svg';
import PlusIcon from '@/components/svg/add.svg';

interface NoteConfig {
  title: string;
  id: number;
  favorite: boolean;
  style: string;
  htmlContent: string;
}
interface NotesConfig {
  [propName: number]: NoteConfig;
}

@Component({
  components: {
    Note,
    ListIcon,
    FourSquaresListIcon,
    PlusIcon,
  },
})

export default class Home extends Vue {
  private $store;
  // data
  private onlyStar: boolean = false;
  private filtedNotes: NotesConfig = this.getNotes;
  private showModal: boolean = false;
  private hasErr: boolean = false;
  private newTitle: string = '';

  // get
  get getNotes (): NotesConfig {
    return this.$store.state.notes;
  }
  get getListStyle (): string {
    return this.$store.state.listStyle;
  }

  // life cycles
  public created () {
    if (this.$route.query.q) {
      this.filtNotes();
    }
  }

  // watch
  @Watch ('$route.query.q') public onQueryChange (val: string): void {
    if (val) {
      this.filtedNotes = this.$store.filtNotes(val);
    } else {
      this.filtedNotes = this.$store.state.notes;
    }
  } 

  // methods
  public toggleListStyle (): void {
    this.$store.toggleListStyle();
  }
  public filtNotes (): void {
    this.filtedNotes = this.$store.filtNotes(this.$route.query.q);
  }
  public addNote (e): void {
    const title: string = this.newTitle;

    if (title) {
      const id: number = new Date().getTime();
      const newNote: NoteConfig = {
        title,
        id,
        favorite: false,
        style: 'gray',
        htmlContent: '',
      };
      this.$store.addNote(newNote, id);
      this.$router.push({
        name: 'edit',
        params: {
          noteId: id.toString(),
        },
      });  
    } else {
      this.hasErr = true;
    }
  }
  private hideModal (e): void {
    if (e.target.className === 'modal') {
      this.showModal = false;
      this.hasErr = false;
      this.newTitle = '';
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
}
.filter {
  padding-right: .5rem;
  margin-right: .5rem;
  &.selected {
    border-bottom: solid 1px #000000;
  }
}
.list-icon {
  padding-left: 1rem;
  fill: #a9a9a9;
  &.selected {
    fill: #000000;
  }
}
.notes {
  width: 100%;
  margin-top: 2rem;
  display: inline-flex;
  flex-wrap: wrap;
  justify-content: flex-start;
}
.note {
  width: 21%;
  padding-bottom: calc(133% * .21);
  position: relative;
  transition: box-shadow .3s;
  .note-content {
    width: 100%;
    height: 100%;
    border-radius: inherit;
    position: absolute;
    top: 0;
    left: 0;
  }
  .card {
    width: 100%;
    height: 100%;
    border-radius: 10px;
    border: solid 1px #000000;
    &:hover {
      box-shadow: 0 0 10px #000000;
    }
  }
}
.block .note {
  margin-bottom: 4rem;
  margin-right: 5.3333%;
  &:nth-child(4n) {
    margin-right: 0;
  }
  .add-content {
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
  }
  p {
    margin-top: 10px;
  }
}
.list {
  .note {
    width: 48%;
    padding-bottom: calc(16.5% * .48);
    margin-bottom: 2rem;
    &:nth-child(even) {
      margin-left: 4%;
    }
  }
  .add-content {
    width: 100%;
    padding: 0 1rem;
    display: inline-flex;
    flex-direction: row-reverse;
    justify-content: space-between;
    align-items: center;
  }
}
.modal {
  width: 100vw;
  height: 100vh;
  background-color: rgba(0, 0, 0, .8);
  position: fixed;
  top: 0;
  left: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  .content {
    width: 400px;
    padding: 1.5rem;
    text-align: left;
    background-color: #ffffff;
    border: solid 1px #000000;
  }
  h2 {
    font-size: 1.375rem;
  }
  .form{
    margin-top: 1.625rem;
    * {
    display: block;
    }
    p {
      font-size: .75rem;
    }
    .alarm {
      margin-top: .25rem;
      color: #ff0000;
    }
    input {
      width: 360px;
      margin-top: .25rem;
      font-size: 1rem;
      padding: .25rem;
      border: 1px solid #cccccc;
    }
    .btn {
      margin-top: 1.625rem;
      margin-left: auto;
    }
  }
}
.dark {
  .filter.selected {
    border-color: #ffffff;
  }
  .list-icon.selected {
    fill: #ffffff;
  }
  .card {
    border-color: #ffffff !important;
    &:hover {
      box-shadow: 0 0 10px #ffffff !important;
    }
  }
  .modal {
    background-color: rgba(0, 0, 0, .6);
    .content {
      background-color: $dark;
    }
  }
}
</style>
