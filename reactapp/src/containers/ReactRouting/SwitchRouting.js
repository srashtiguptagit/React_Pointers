import {Route, Link, Switch} from 'react-router-dom'; 

<Switch>    

<Route path="/" exact component={Posts} />  
<Route path="/new-posts" exact component={NewPosts} />

</Switch>