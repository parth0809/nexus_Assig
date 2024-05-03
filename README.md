<h2>Start The Server</h2><br>
yarn<br>yarn start<br><br>
Create a .env file with Following data <br>PORT=port_number<br>DB_URI=db_uri<br>DB_NAME=db_name<br>USER_DB_COLLECTION=db_collection_name<br><br>

<h3>AUTHENTICATION APIS</h3>
<h5>Signup</h5>
http://localhost:3000/authentication/signup : POST 
params:{username,password}<br>
<h5>Login</h5>
http://localhost:3000/authentication/login : POST 
params:{username,password}<br><br>

<h3>insert</h3>
<h5>location</h5>
http://localhost:3000/insert/location : POST 
params:{username,location}
<h5>specialist</h5>
http://localhost:3000/insert/specialist : POST 
params:{username,specialist}
<h5>doctors</h5>
http://localhost:3000/insert/doctors : POST 
params:{username,doctors}
<h5>reviews</h5>
http://localhost:3000/insert/reviews : POST 
params:{username,reviews}
<h5>testing</h5>
http://localhost:3000/insert/testing : POST 
params:{username,testing}
<h5>availability</h5>
http://localhost:3000/insert/availability : POST 
params:{username,availability}
<h5>insurance</h5>
http://localhost:3000/insert/insurance : POST 
params:{username,insurance}


<h3>remove</h3>
http://localhost:3000/remove/location : POST 
params:{username,location}
<h5>specialist</h5>
http://localhost:3000/remove/specialist : POST 
params:{username,specialist}
<h5>doctors</h5>
http://localhost:3000/remove/doctors : POST 
params:{username,doctors}
<h5>reviews</h5>
http://localhost:3000/remove/reviews : POST 
params:{username,reviews}
<h5>testing</h5>
http://localhost:3000/remove/testing : POST 
params:{username,testing}
<h5>availability</h5>
http://localhost:3000/remove/availability : POST 
params:{username,availability}
<h5>insurance</h5>
http://localhost:3000/remove/insurance : POST 
params:{username,insurance}
<h5>All Data</h5>
http://localhost:3000/remove/profile : POST 
params:{username,password}
