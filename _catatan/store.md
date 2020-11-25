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
      // ...state adalah spread variabel. Untuk memberikan data berupa array
      on(ScoreboardPageActions.homeScore, state => ({ ...state, home: state.home + 1 })),
      on(ScoreboardPageActions.awayScore, state => ({ ...state, away: state.away + 1 })),
      on(ScoreboardPageActions.resetScore, state => ({ home: 0, away: 0 })),
      on(ScoreboardPageActions.setScores, (state, { game }) => ({ home: game.home, away: game.away }))
    );

    export function reducer(state: State | undefined, action: Action) {
      return scoreboardReducer(state, action);
    }
  ```

  > Dari contoh diatas, reducers akan mengangani 4 action. Setiap action akan menangani transisi state tanpa ada perubahan, tapi action akan mengembalikan state berupa object menggunakan spread operator. Spread opertor menyalin setiap fungsi dari state kedalam object dan membuat references baru. Setiap perubahan yang terjadi pada state akan disimpan dan referensi lama akan dihapus.

  > Saat action diterima maka reducer akan menerima action tersebut dan menjalankan fungsi didalam on berdasarkan action yang diterima

+ Mendaftarkan root State didalam Module
  > Untuk mendaftarkan Global Store kita dapat menggunakan method StoreModule.forRoot () didalam imports
  
  `StoreModule.forRoot({ game: fromScoreboard.reducer })`
  
+ Register Feature State
  > Feature states berperilaku dengan cara yang sama seperti Root states. Perbedaannya adalah, feature state dikhususkan untuk area tertentu dan biasanya diletakan pada common module. Sedangkan root state diletakan pada app.module atau root module dan berlaku untuk global.

  ```ts
    // scoreboard.reducer.ts

    export const scoreboardFeatureKey = 'game';
  ```

  ```ts
    // scoreboard.module.ts (common module)

    import { NgModule } from '@angular/core';
    import { StoreModule } from '@ngrx/store';
    import * as fromScoreboard from './reducers/scoreboard.reducer';

    @NgModule({
      imports: [
        StoreModule.forFeature(fromScoreboard.scoreboardFeatureKey, fromScoreboard.reducer)
      ],
    })
    export class ScoreboardModule {}
  ```

  ```ts
    // app.module.ts (root module)

    import { NgModule } from '@angular/core';
    import { StoreModule } from '@ngrx/store';
    import { ScoreboardModule } from './scoreboard/scoreboard.module';

    @NgModule({
      imports: [
        StoreModule.forRoot({}),
        // Import common module
        ScoreboardModule
      ],
    })
    export class AppModule {}
  ```

  Hasilnya :
  ```json
    {
      game: { home: 0, away: 0 }
    }
  ```

# Effects


# Selector

Merupakan fungsi yang digunakan untuk memilih bagian data dari seluruh data yanda ada di state/ Selector menyediakan banyak fitur untuk mendorong hal tersebut, yaitu :

1. Probability
2. Memoization
3. Composition
4. Testability
5. Type Safety

Contoh selector dengan 1 state: 

```ts
    // selector/index.ts

    import { createSelector } from '@ngrx/store';
    
    export interface FeatureState {
      counter: number;
    }
    
    export interface AppState {
      feature: FeatureState;
    }
    
    export const selectFeature = (state: AppState) => state.feature;
    
    export const selectFeatureCount = createSelector(
      selectFeature,
      (state: FeatureState) => state.counter
    );
```

Contoh selector 2 state :

```ts
    // selector/index.ts
    import { createSelector } from '@ngrx/store';

    export interface User {
      id: number;
      name: string;
    }

    export interface Book {
      id: number;
      userId: number;
      name: string;
    }

    export interface AppState {
      selectedUser: User;
      allBooks: Book[];
    }

    export const selectUser = (state: AppState) => state.selectedUser;
    export const selectAllBooks = (state: AppState) => state.allBooks;

    export const selectVisibleBooks = createSelector(
      selectUser,
      selectAllBooks,
      (selectedUser: User, allBooks: Book[]) => {
        if (selectedUser && allBooks) {
          return allBooks.filter((book: Book) => book.userId === selectedUser.id);
        } else {
          return allBooks;
        }
      }
    );
```

***Catatan : ***

1. Ketika anda menggunakan fungsi *createSelector* dan *createFeatureSelector* maka ngrx/store akan merecord setiap argument terbaru yang dipanggil.
2. *createSelector* dapat digunakan untuk memilih data dari state based pada state yang sama
3. *createSelector* dapat manangani 8 selector function
4. 

## props

Kita bisa mengunakan props untuk memilih bagian dari state berdasarkan data yang tidak tersedia didalam store. props dapat diteruskan pada selector function. Contoh : 

```ts
    // selector/index.ts
    export const getCount = createSelector(
      getCounterValue,
      (counter, props) => counter * props.multiply
    );
```

```ts
    // app.component.ts
    ngOnInit() {
      this.counter = this.store.select(fromRoot.getCount, { multiply: 2 })
    }
```

Selector menyimpan argument input di cache-nya. Jika ada data baru yang masuk kemungkina selector juga akan menimpanya. Nahh, kita dapat mengakalinya dengan kode dibawah : 

```ts
    // index.ts
    export const getCount = () =>
      createSelector(
        (state, props) => state.counter[props.id],
        (counter, props) => counter * props.multiply
      );
```

Fungsi diatas sekarang kita panggil sebagai Factory Function untuk membuat selector function yang berbeda : 

```ts
    // app.component.ts
    ngOnInit() {
      this.counter2 = this.store.select(fromRoot.getCount(), { id: 'counter2', multiply: 2 });
      this.counter4 = this.store.select(fromRoot.getCount(), { id: 'counter4', multiply: 4 });
      this.counter6 = this.store.select(fromRoot.getCount(), { id: 'counter6', multiply: 6 });
    }
```