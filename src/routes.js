import Dashboard from 'containers/Dashboard/index'
import UsersPage from 'containers/Users/index'
import TrainingsPage from 'containers/Trainings/index'
import TrainingCategoriesPage from 'containers/TrainingCategories/index'
import ExerciseCategoriesPage from 'containers/ExerciseCategories/index'
import ContactMessagesPage from 'containers/ContactMessages/index'
import TokensPage from 'containers/Tokens/index'
import LoginPage from 'containers/Login/index'

const routes = [
  {
    path: "/dashboard",
    name: "Dashboard",
    icon: "ni ni-tv-2 text-primary",
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/users",
    name: "Users",
    icon: "ni ni-single-02 text-yellow",
    component: UsersPage,
    layout: "/admin"
  },
  {
    path: "/trainings",
    name: "Trainings",
    icon: "ni ni-user-run text-info",
    component: TrainingsPage,
    layout: "/admin"
  },
  {
    path: "/trainingCategories",
    name: "Training Categories",
    icon: "ni ni-bullet-list-67 text-red",
    component: TrainingCategoriesPage,
    layout: "/admin"
  },
  {
    path: "/exerciseCategories",
    name: "Exercise Categories",
    icon: "ni ni-bullet-list-67 text-green",
    component: ExerciseCategoriesPage,
    layout: "/admin"
  },
  {
    path: "/contactMessages",
    name: "Contact Messages",
    icon: "ni ni-collection text-info",
    component: ContactMessagesPage,
    layout: "/admin"
  },
  {
    path: "/tokens",
    name: "Tokens",
    icon: "ni ni-collection text-info",
    component: TokensPage,
    layout: "/admin"
  },
  {
    path: "/login",
    name: "Login",
    icon: "ni ni-key-25 text-info",
    component: LoginPage,
    layout: "/auth"
  }
]

export { routes }
