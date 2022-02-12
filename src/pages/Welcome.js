import { Route, Switch } from "react-router-dom";

const Welcome = () => {
  return (
    <section>
      <h1>The Welcome Page</h1>
      <Switch>
        <Route path="/welcome/newUser">
          <h1>The Welcome Page New User</h1>
        </Route>
      </Switch>
    </section>
  );
};

export default Welcome;
