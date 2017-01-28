import { module } from 'angular';

const home = {
  template: `
    <section class="Home">{{$ctrl.title}}Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean elementum pretium massa porta sollicitudin. Etiam suscipit nunc non ante mattis eleifend. Mauris aliquet vestibulum nunc, ut laoreet odio congue ac. Ut non imperdiet massa, non feugiat nunc. Ut porttitor commodo mi in scelerisque. Integer scelerisque placerat imperdiet. Quisque enim lacus, dictum at elit ac, facilisis molestie diam. Etiam laoreet, quam at dapibus viverra, justo sem euismod tellus, at efficitur turpis magna quis justo. Cras elementum gravida suscipit. Donec ullamcorper ligula vel pellentesque semper.

In ut elit vitae diam iaculis hendrerit. Pellentesque semper tellus eget fringilla lobortis. Nam cursus, lectus sed aliquet pretium, lectus nunc congue turpis, nec feugiat orci neque vel justo. Ut nec volutpat elit. Nunc diam felis, condimentum at mollis sed, varius vitae mi. Mauris ante lacus, mattis sed metus sed, tristique finibus leo. Sed dui quam, sagittis blandit ultricies eget, posuere sit amet ligula. Suspendisse non convallis est. Phasellus non ullamcorper odio, non ultrices nibh. Donec cursus dui in nunc lobortis ullamcorper.

Sed consequat diam et mauris pretium, vel ornare sapien vestibulum. Morbi efficitur nibh eget pretium convallis. Phasellus iaculis euismod augue id scelerisque. Curabitur molestie dapibus orci, quis pharetra sapien finibus eget. Duis rutrum consectetur porta. Integer lobortis fringilla eros. Sed in libero faucibus, fermentum quam id, venenatis ligula. Ut sollicitudin egestas nisi, eu congue velit mattis sit amet. Sed at mattis metus, nec pellentesque nulla. Aenean nec libero varius, iaculis nisl a, aliquam lacus. Mauris sodales feugiat lorem ac iaculis. Fusce non imperdiet libero. Fusce non ligula fermentum, sollicitudin tellus eget, aliquam purus. Vivamus accumsan, nibh nec tristique bibendum, est lacus ullamcorper dolor, vitae efficitur ligula dui eu nibh.

Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Nullam non sollicitudin risus. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia Curae; Phasellus turpis augue, rutrum ac purus sit amet, consequat imperdiet risus. Nulla dapibus in libero ornare gravida. Fusce non hendrerit dolor, vitae vestibulum ipsum. Pellentesque sollicitudin, justo sit amet fermentum eleifend, metus elit dapibus dui, a placerat tortor orci sit amet ex. Donec egestas purus massa, vitae mattis lacus facilisis porttitor. Nam quis diam sem. Sed vel molestie ligula, eu laoreet turpis. Duis ultrices volutpat pulvinar. Maecenas sollicitudin risus id mattis tempus. Maecenas quis massa dignissim enim dictum aliquam. Suspendisse arcu metus, gravida quis nibh et, vehicula rhoncus magna. Donec convallis velit a nisl ornare interdum. Donec augue tortor, molestie posuere tortor tempor, congue finibus nunc.

Mauris dolor odio, iaculis sed finibus ut, auctor sed sapien. Curabitur quis felis pharetra, tempor sem at, mattis massa. Cras gravida laoreet viverra. Integer eu eros sed nisl vehicula venenatis. Curabitur dictum et libero id elementum. Nunc risus tortor, porttitor a nibh ac, lobortis porta ipsum. Nullam at massa suscipit, posuere nisl vitae, cursus ipsum. Nullam viverra scelerisque neque non congue. Quisque blandit lorem quis neque congue tristique.</section>
  `,
  controller: class HomeComponent {
    constructor() {
      this.title = 'Mnspcd Angular 1 Boilerplate';
    }
  },
};

export default module('app.home', []).component('home', home).name;
