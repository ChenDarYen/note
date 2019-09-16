<template>
  <div class="card" :class="{ dark: !getMode, list: getListStyle === 'list' }"
  @click="editNote">
    <div class="title">
      {{ getNote.title }}
    </div>
    <div class="favorite"
    @click="toggleFavorite">
      <StarIcon class="star" v-if="!getNote.favorite"/>
      <StarSolidIcon class="star" v-if="getNote.favorite"/>  
    </div>
  </div>
</template>

<script lang='ts'>
import { Component, Vue, Prop } from 'vue-property-decorator';
import StarIcon from '@/components/svg/star.svg';
import StarSolidIcon from '@/components/svg/star-solid.svg';

interface NoteConfig {
  title: string;
  id: number;
  favorite: boolean;
  style: string;
  htmlContent: string;
}

@Component({
  components: {
    StarIcon,
    StarSolidIcon,
  },
})

export default class Note extends Vue {
  private $store;

  @Prop(Number) private id;

  get getNote (): NoteConfig {
    return this.$store.state.notes[this.id];
  }
  get getMode (): boolean {
    return this.$store.state.mode;
  }
  get getListStyle (): string {
    return this.$store.state.listStyle;
  }

  public toggleFavorite (): void {
    this.$store.toggleNoteFavorite(this.id);
  }
  public editNote (e): void {
    if (e.target.nodeName !== 'svg' && e.target.nodeName !== 'path') {
      this.$router.push({
        name: 'edit',
        params: {
          noteId: this.id,
        },
      });
    }
  }
}
</script>

<style lang='scss' scoped>
.card {
  width: 100%;
  height: 100%;
  padding: 1rem;
  color: #000000;
  fill: #000000;
  border-radius: inherit;
  background-color: #aaa;
  text-align: left;
  display: inline-flex;
  flex-direction: column;
  justify-content: space-between;
}
.star {
  height: 23px;
}
.list.card {
  flex-direction: row;
}
</style>
