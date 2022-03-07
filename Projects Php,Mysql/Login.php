<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Login page</title>
    <link
      href="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/css/bootstrap.min.css"
      rel="stylesheet"
      integrity="sha384-EVSTQN3/azprG1Anm3QDgpJLIm9Nao0Yz1ztcQTwFspd3yD65VohhpuuCOmLASjC"
      crossorigin="anonymous"
    />
    <script
      src="https://cdn.jsdelivr.net/npm/bootstrap@5.0.2/dist/js/bootstrap.bundle.min.js"
      integrity="sha384-MrcW6ZMFYlzcLA8Nl+NtUVF0sA7MsXsP1UyJoMp4YLEuNSfAP+JcXn/tWtIaxVXM"
      crossorigin="anonymous"
    ></script>
    <link
      rel="stylesheet"
      href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css"
    />
    <link href="./Singupstyle.css" rel="stylesheet" />
  </head>
  <body>
   
    <container>
      <row>
        <div
          class="col-11 col-sm-11 col-md-6 col-lg-6 col-xl-6 col-xxl-6 mx-auto mt-4 mb-2 pt-3 pb-3 text-center bg-light divstyle"
        >
          <h1>Sign in</h1>
          <h5 class="pt-2">It's free and harly takes more than 30 seconds.</h5>
          <form method="POST" action="">
            <div class="col-8 mx-auto">
              <div class="input-group mt-4 mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <img src="./Assets/user-solid.svg" alt="" width="17px" />
                </span>
                <input
                  type="text"
                  id="idnam1"
                  class="form-control idname"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="nam1"
                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <img src="./Assets/lock-solid.svg" alt="" width="17px" />
                </span>
                <input
                  type="password"
                  id="idpassword1"
                  class="form-control"
                  placeholder="password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="password1"
                />
              </div>
            <button
              type="submit"
              class="btn btn-outline-dark bg-primary mt-3 mb-3 col-4 color"
              name="login"
            >
              <b>Log in</b>
            </button>
          </form>
            <h6><b>Terms & Condition and Privacy Policy</b></h6>
          <h6>Designed by</h6>
          <h1><b>D.ARUN</b></h1>
        </div>
      </row>
    </container>
  </body>

  <?php 

$con1=mysqli_connect("localhost","root","arun","signuplogin");

if(isset($_POST["login"]))
{
   $nam1=$_POST["nam1"];
   $password1=$_POST["password1"];      
   // echo "ture it";
   $sql="SELECT * from signup where name in ('$nam1')";
  $result=mysqli_query($con1,$sql);
      
  while ($row=$result->fetch_assoc())
    {
       $name=$row["name"];
       $e=$row["email"];
       $pass=$row["password"];              
    }
    if($nam1=="")
    {
      echo '<script> 
        document.getElementById("idnam1").placeholder="PLEASE Enter Your Name";
        document.getElementById("idnam1").style.borderColor="red";
             </script>';
    }
    elseif($password1 == "")
    {
      echo '<script> 
        document.getElementById("idpassword1").placeholder="PLEASE Enter Your Password";
        document.getElementById("idpassword1").style.borderColor="red";
        </script>';
    }
    else{
   if(($nam1==$name) && ($password1==$pass))
     {
        echo '<script>alert("***** LOGIN SUCCESSFULLY ******")</script>';
        echo '<div class="col-12 bg mt-2 pt-3 pb-3 bg-success btn">';
        echo '<h1><b>YOUR ACCOUNT DETAILS</b></h1>';
        echo '<h2>Your Name:',$name,'</h2>';
        echo '<h2>Your Email Address:',$e,'</h2>';
        echo '<h2>Your Password:',$pass,'</h2>';
        echo ' </div>';
       
       echo '
       <div class="col-12 text-center mx-auto  bg-info pt-3 pb-2 btn">
       <h2><b>GO TO SIGNUP PAGE</b></h2>
       <h2><b>Click to SIgn Up BUTTON</b></h2>
       <a href="./Singup.php">
        <button
       type="button"
       class="btn btn-outline-dark bg-primary mt-3 mb-3 col-2 color"  
     >
       <b>SIGN UP</b>
     </button> 
     </a>
     </div>';
     }
   else
    {
       echo '<script>alert("***** WRONG LOGIN DETAILS ******")</script>';
    }
  }
}

?>
  
</html>
