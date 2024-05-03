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

<h3>Add Patients</h3>
<h5>all profile</h5>
http://localhost:3000/addPatient/profile : POST 
params:{patient_name,hospital_name,age}
<h5>doctors</h5>
http://localhost:3000/addPatient/doctors : POST 
params:{patient_name,doctor}
<h5>specialists</h5>
http://localhost:3000/addPatient/specialists : POST 
params:{patient_name,specialist}
<h5>insurance</h5>
http://localhost:3000/addPatient/insurance : POST 
params:{patient_name,insurance}
<h5>review</h5>
http://localhost:3000/addPatient/review: POST 
params:{patient_name,reviews}

<h3>Get Data</h3>
<h5>all profile</h5>
http://localhost:3000/getData/institution/profile : GET 
params:{username}
<h5>Hospital_Name</h5>
http://localhost:3000/getData/institution/Hospital_Name : GET 
params:{Username}
<h5>Locations</h5>
http://localhost:3000/getData/institution/Locations : GET 
params:{username}
<h5>Specialists</h5>
http://localhost:3000/getData/institution/Specialists : GET 
params:{username}
<h5>Doctors</h5>
http://localhost:3000/getData/institution/Doctors : GET 
params:{username}
<h5>Reviews</h5>
http://localhost:3000/getData/institution/Reviews : GET 
params:{username}
<h5>Testing_facilities</h5>
http://localhost:3000/getData/institution/Testing_facilities : GET 
params:{username}
<h5>availability</h5>
http://localhost:3000/getData/institution/availability : GET 
params:{username}
<h5>InsuranceAccepted</h5>
http://localhost:3000/getData/institution/InsuranceAccepted : GET 
params:{username}
<br>
<h5>profile</h5>
http://localhost:3000/getData/patient/profile : GET 
params:{username}
<h5>hospital_name</h5>
http://localhost:3000/getData/patient/hospital_name : GET 
params:{username}
<h5>age</h5>
http://localhost:3000/getData/patient/age : GET 
params:{username}
<h5>doctors</h5>
http://localhost:3000/getData/patient/doctors : GET 
params:{username}
<h5>specialists</h5>
http://localhost:3000/getData/patient/specialists : GET 
params:{username}
<h5>reviews</h5>
http://localhost:3000/getData/patient/reviews : GET 
params:{username}
<h5>insurance</h5>
http://localhost:3000/getData/patient/insurance : GET 
params:{username}
