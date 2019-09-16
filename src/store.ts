import Vue from 'vue';

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

export const store = {
  debug: true,
  state: Vue.observable({
    mode: true as boolean,
    listStyle: 'block' as string,
    notes: {
      1568451439755: {
        title: '永遠的小馬哥',
        id: 1568451439755,
        favorite: true,
        style: 'gray',
        htmlContent: '<p>周潤發，SBS（Chow Yun Fat，1955年5月18日－），香港著名男演員，出生於南丫島。[3]1970年代於無綫電視參演多套電視劇，後來參演電影。曾三次獲得香港電影金像獎最佳男主角，並兩次獲得臺灣金馬獎最佳男主角。他亦是香港首批到好萊塢參與電影的先頭部隊。1980至1990年代，曾與多位女星合作過多部電視劇和電影，其中與趙雅芝、鄭裕玲和鍾楚紅的螢幕情侶檔令人印象深刻，電影代表作是《英雄本色》、《監獄風雲》和《賭神》，1995年赴美國好萊塢發展。周潤發的電影皆具極高知名度。</p>\n<p>&nbsp;</p>\n<p><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw29rKs0Ins8flOCFOpcJiKwW9V_gLjh72FiNhCRJVUcADEO-REQ\" /></p>',
      },
      1568451968534: {
        title: '永遠的小馬哥2',
        id: 1568451968534,
        favorite: true,
        style: 'gray',
        htmlContent: '<p>周潤發，SBS（Chow Yun Fat，1955年5月18日－），香港著名男演員，出生於南丫島。[3]1970年代於無綫電視參演多套電視劇，後來參演電影。曾三次獲得香港電影金像獎最佳男主角，並兩次獲得臺灣金馬獎最佳男主角。他亦是香港首批到好萊塢參與電影的先頭部隊。1980至1990年代，曾與多位女星合作過多部電視劇和電影，其中與趙雅芝、鄭裕玲和鍾楚紅的螢幕情侶檔令人印象深刻，電影代表作是《英雄本色》、《監獄風雲》和《賭神》，1995年赴美國好萊塢發展。周潤發的電影皆具極高知名度。</p>\n<p>&nbsp;</p>\n<p><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw29rKs0Ins8flOCFOpcJiKwW9V_gLjh72FiNhCRJVUcADEO-REQ\" /></p>',
      },
      1568452002780: {
        title: '永遠的小馬哥3',
        id: 1568452002780,
        favorite: false,
        style: 'gray',
        htmlContent: '<p>周潤發，SBS（Chow Yun Fat，1955年5月18日－），香港著名男演員，出生於南丫島。[3]1970年代於無綫電視參演多套電視劇，後來參演電影。曾三次獲得香港電影金像獎最佳男主角，並兩次獲得臺灣金馬獎最佳男主角。他亦是香港首批到好萊塢參與電影的先頭部隊。1980至1990年代，曾與多位女星合作過多部電視劇和電影，其中與趙雅芝、鄭裕玲和鍾楚紅的螢幕情侶檔令人印象深刻，電影代表作是《英雄本色》、《監獄風雲》和《賭神》，1995年赴美國好萊塢發展。周潤發的電影皆具極高知名度。</p>\n<p>&nbsp;</p>\n<p><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw29rKs0Ins8flOCFOpcJiKwW9V_gLjh72FiNhCRJVUcADEO-REQ\" /></p>',
      },
      1568452025724: {
        title: '永遠的小馬哥4',
        id: 1568452025724,
        favorite: false,
        style: 'gray',
        htmlContent: '<p>周潤發，SBS（Chow Yun Fat，1955年5月18日－），香港著名男演員，出生於南丫島。[3]1970年代於無綫電視參演多套電視劇，後來參演電影。曾三次獲得香港電影金像獎最佳男主角，並兩次獲得臺灣金馬獎最佳男主角。他亦是香港首批到好萊塢參與電影的先頭部隊。1980至1990年代，曾與多位女星合作過多部電視劇和電影，其中與趙雅芝、鄭裕玲和鍾楚紅的螢幕情侶檔令人印象深刻，電影代表作是《英雄本色》、《監獄風雲》和《賭神》，1995年赴美國好萊塢發展。周潤發的電影皆具極高知名度。</p>\n<p>&nbsp;</p>\n<p><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw29rKs0Ins8flOCFOpcJiKwW9V_gLjh72FiNhCRJVUcADEO-REQ\" /></p>',
      },
      1568452042491: {
        title: '永遠的小馬哥5',
        id: 1568452042491,
        favorite: false,
        style: 'gray',
        htmlContent: '<p>周潤發，SBS（Chow Yun Fat，1955年5月18日－），香港著名男演員，出生於南丫島。[3]1970年代於無綫電視參演多套電視劇，後來參演電影。曾三次獲得香港電影金像獎最佳男主角，並兩次獲得臺灣金馬獎最佳男主角。他亦是香港首批到好萊塢參與電影的先頭部隊。1980至1990年代，曾與多位女星合作過多部電視劇和電影，其中與趙雅芝、鄭裕玲和鍾楚紅的螢幕情侶檔令人印象深刻，電影代表作是《英雄本色》、《監獄風雲》和《賭神》，1995年赴美國好萊塢發展。周潤發的電影皆具極高知名度。</p>\n<p>&nbsp;</p>\n<p><img src=\"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQw29rKs0Ins8flOCFOpcJiKwW9V_gLjh72FiNhCRJVUcADEO-REQ\" /></p>',
      },
    } as NotesConfig,
  }),
  toggleMode (): void {
    this.state.mode = !this.state.mode;
  },
  toggleListStyle (): void {
    if (this.state.listStyle === 'list') {
      this.state.listStyle = 'block';
    } else {
      this.state.listStyle = 'list';
    }
  },
  changeNoteStyle (style: string, id: number): void {
    this.state.notes[id].style = style;
  },
  addNote (newNote: NoteConfig, id: number): void {
    this.state.notes[id] = newNote;
  },
  toggleNoteFavorite (id: number): void {
    this.state.notes[id].favorite = !this.state.notes[id].favorite;
  },
  updateNoteContent (title: string, htmlString: string, id: number): void {
    this.state.notes[id].title = title;
    this.state.notes[id].htmlContent = htmlString;
  },
  filtNotes (keyword: string): NotesConfig {
    const filtedNote: NotesConfig = {};
    for (const [key, note] of Object.entries(this.state.notes)) {
      if (note.title.indexOf(keyword) >= 0) {
        filtedNote[key] = note;
      }
    }
    return filtedNote;
  },
};
