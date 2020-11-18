![Lifecycle](https://ngrx.io/generated/images/guide/store/state-management-lifecycle.png)

# Action

## Pengenalan 

Actions berisi semua interaksi yang nantinya akan terjadi di dalam aplikasi. Action merupakan awalan dari masukan dan keluaran di sistem NgRx. Action membantu kita untuk memahami interaksi yang ada didalam aplikasi. 

Contoh hasil yang dikirimkan Action : 

```json
    {
        type: '[Login Page] Login',
        username: string;
        password: string;
    }
```

## Menulis Action

Aturan menulis actions : 

+ Upfront
  > menulis actions sebelum mengembangkan fitur untuk memahami dan mendapatkan pengetahuan bersama tentang fitur yang sedang diterapkan.

+ Divide
  > Mengkategorikan tindakan berdasarkan event source

+ Many
  > Semakin banyak tindakan yang Anda tulis, semakin baik Anda mengekspresikan alur dalam aplikasi Anda.

+ Event Driven
  > Memisahkan penanan dan deskripsi dari suatu interaksi

+ Descriptive
  > Menyediakan informasi mendetail tentang suatu interaksi untuk mempermudah dalam debugging

Contoh Action :

```ts
    // login-page.actions.ts
    import { createAction, props } from '@ngrx/store';

    export const login = createAction(
    '[Login Page] Login',
    props<{ username: string; password: string }>()
    );
```

+ *createAction* mengembalikan nilai berupa fungsi, ketika dipanggil akan menghasilkan object dari interface Action. 
+ *props* menentukan metadata yang akan digunakan.

Penggunaan Action diatas :

`store.dispatch(login({ username: username, password: password }));`



# Reducers

## Pengenalan

Reducers bertanggung jawab untuk menangani transitions dari satu state ke state lainnya. Reducers yang akan menentukan yang mana Actions yang akan digunakan berdasarkan dengan action type.

Reducers akan menghasilkan output yang sama dengan input yang diberikan. Reducers transition state secara synchronously. 

Reducers mengambil setiap Action terbaru yang di dispatch dan juga merekam current state. Reducers juga mengembalikan perubahan state terbaru ataupun original state.

## Penulisan

Ketika menulis reducers, perhatikan :

+ Interface atau type yang mendefinisikan bentuk dari state.
+ Arguments, termasuk initial state, current state dan current action
+ Fungsi yang menangani perubahan state yang terkait dengan action


## Membuat Reducers

+ Buatlah action
  ```ts
  // scoreboard-page.actions.ts
  import { createAction, props } from '@ngrx/store';

  export const homeScore = createAction('[Scoreboard Page] Home Score');
  export const awayScore = createAction('[Scoreboard Page] Away Score');
  export const resetScore = createAction('[Scoreboard Page] Score Reset');
  export const setScores = createAction('[Scoreboard Page] Set Scores', props<{game: Game}>());
  ```

+ Buatlah Shape State dari Reducers
  > Setiap reducers adalah listeners dari action.
  ```ts

    import { Action, createReducer, on } from '@ngrx/store';
    import * as ScoreboardPageActions from '../actions/scoreboard-page.actions';
    
    // Buatlah bentuk dari state
    export interface State {
      home: number;
      away: number;
    }
  ```

+ Setting initial state
  > Digunakan untuk memberikan nilai awal pada state ketika state bernilai undefined.

  ```ts
    export const initialState: State = {
      home: 0,
      away: 0,
    };
  ```

+ Membuat fungsi reducer
  > Fungsi reducer menangani state tanpa ada perubahan pada state. Buat fungsi reducer dengan menggunakan createReducer

  ```ts
    const scoreboardReducer = createReducer(
      initialState,
      on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
      on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
      on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
      on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
    );

    export function reducer(state: State | undefined, action: Action) {
      return scoreboardReducer(state, action);
    }
  ```

  > Dari contoh diatas, reducers akan mengangani 4 action. Setiap action akan menangani transisi state tanpa ada perubahan, tapi action akan mengembalikan state berupa object menggunakan spread operator. Spread opertor menyalin setiap fungsi dari state kedalam object dan membuat references baru. 
  
+ 