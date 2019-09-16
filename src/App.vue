<template>
  <div id="app" :class="{ dark: !this.$store.state.mode }">
    <div class="container">
      <nav class="navbar">
        <div class="user">
          username
        </div>

        <div class="search">
          <input type="text" v-model="keyword"
          @keyup.enter="search">
          <button @click="search">
            <SearchIcon class="icon"/>
          </button>
        </div>

        <div class="mode">
          <BrightnessIcon class="icon"
          @click="toggleMode"/>
        </div>
      </nav>

      <router-view/>   
    </div>
  </div>
</template>

<script lang="ts">
import { Vue, Component } from 'vue-property-decorator';
import BrightnessIcon from '@/components/svg/brightness.svg';
import SearchIcon from '@/components/svg/search.svg';

@Component({
  components: {
    BrightnessIcon,
    SearchIcon,
  },
})

export default class App extends Vue {
  private $store;

  private keyword: string = '';

  public created () {
    if (this.$route.query.q) {
      this.keyword = this.$route.query.q as string;
    }
  }

  public toggleMode (): void {
    this.$store.toggleMode();
  }
  public search (): void {
    const keyword = this.keyword.trim();
    if (keyword
    && keyword !== this.$route.query.q) {
      this.$router.push({
        name: 'home',
        query: {
          q: keyword,
        },
      });   
    } else {
      this.$router.push({
        name: 'home',
      });
    }
  }
} 
</script>

<style lang="scss" scoped>
#app {
  min-height: 100vh;
  padding: 25px;
  background-color: #ffffff;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #000000;
  fill: #000000;
  -webkit-touch-callout: none;
  -webkit-user-select: none;
  -khtml-user-select: none;
  -moz-user-select: none;
  -ms-user-select: none;
  user-select: none;
}
.container {
  max-width: 750px;
  margin: 0 auto;
}
.navbar {
  width: 100%;
  margin-bottom: 30px;
  display: inline-flex;
  justify-content: space-between;
  align-items: center;
}
.search {
  position: relative;
  input {
    width: 220px;
    height: 2.5rem;
    padding: 0 2.5rem 0 1.125rem;
    border-radius: 1.125rem;
    border: solid 1px #000000;
    color: inherit;
  }
  button {
    position: absolute;
    top: 50%;
    right: 1.125rem;
    transform: translateY(-50%);
  }
}
.dark .search input {
  border-color: #ffffff;
}
</style>

<style lang="scss">
@import './assets/reset';
@import './assets/all';

.icon {
  width: auto;
  height: 18px;
}
.mr-auto {
  margin-right: auto;
}
.ml-auto {
  margin-left: auto;
}
.btn {
  color: #000000;
  background-color: $light;
  line-height: 2.5;
  padding: 0 1rem;
  border-radius: 5px;
}
.btn-black {
  color: #ffffff;
  background-color: #000000;
}
.btn-gray {
  color: #ffffff;
  background-color: $gray;
}
.dark {
  background-color: $dark !important;
  color: #ffffff !important;
  fill: #ffffff !important;
}
</style>
