// export default function({ store, redirect }) {
//     if (!store.state.auth.login) {
//         return redirect('/account/login');
//     }
// }
export default function({ store, redirect }) {
  if (!store.state.auth.isLoggedIn) {
      return redirect('/account/login');
  }
}

// export default ({ app, redirect }) => {
//     if (app.$auth.withCredentials) {
//       return redirect("/account/login");
//     }
//   };