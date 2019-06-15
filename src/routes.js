import Dashboard from './containers/Dashboard/index'
import UsersPage from './containers/Users/index'
import TrainingsPage from './containers/Trainings/index'
import TrainingCategoriesPage from './containers/TrainingCategories/index'
import ExerciseCategoriesPage from './containers/ExerciseCategories/index'
import LoginPage from './containers/Login/index'

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
    icon: "ni ni-tv-2 text-primary",
    component: UsersPage,
    layout: "/admin"
  },
  {
    path: "/trainings",
    name: "Trainings",
    icon: "ni ni-tv-2 text-primary",
    component: TrainingsPage,
    layout: "/admin"
  },
  {
    path: "/trainingCategories",
    name: "Training Categories",
    icon: "ni ni-tv-2 text-primary",
    component: TrainingCategoriesPage,
    layout: "/admin"
  },
  {
    path: "/exerciseCategories",
    name: "Exercise Categories",
    icon: "ni ni-tv-2 text-primary",
    component: ExerciseCategoriesPage,
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
