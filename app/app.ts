import {App} from 'ionic-angular';
import {TodosPage} from './pages/todos/todos.page';
import {TodoList} from './pages/todos/todos.service';


@App({
  templateUrl: 'build/app.html',
  config: {}, // http://ionicframework.com/docs/v2/api/config/Config/,
  providers: [TodoList]
})
class MyApp {

  // make HelloIonicPage the root (or first) page
  rootPage: any = TodosPage;
}
