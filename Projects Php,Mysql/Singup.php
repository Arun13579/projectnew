<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Sing up page</title>
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
          <h1>Create Account</h1>
          <h5 class="pt-2">It's free and harly takes more than 30 seconds.</h5>
          <form action=""  method="post">
            <div class="col-8 mx-auto">
              <div class="input-group mt-4 mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <img src="./Assets/user-solid.svg" alt="" width="17px" />
                </span>
                <input
                  type="text"
                  class="form-control"
                  placeholder="Username"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="nam"
                  id="idname"

                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <img
                    src="./Assets/location-arrow-solid.svg"
                    alt=""
                    width="17px"
                  />
                </span>
                <input
                  type="email"
                  class="form-control"
                  placeholder="E-mail Address"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="email"
                  id="idemail"

                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <img src="./Assets/lock-solid.svg" alt="" width="17px" />
                </span>
                <input
                  type="password"
                  class="form-control"
                  placeholder="password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="password"
                  id="idpassword"

                />
              </div>
              <div class="input-group mb-3">
                <span class="input-group-text" id="basic-addon1">
                  <img src="./Assets/lock-solid.svg" alt="" width="17px" />
                </span>
                <input
                  type="password"
                  class="form-control"
                  placeholder="Confirm Password"
                  aria-label="Username"
                  aria-describedby="basic-addon1"
                  name="confirmpassword"
                  id="idconfirm"
                />
              </div>
            </div>
            <button
              type="submit"
              class="btn btn-outline-dark bg-primary mt-3 mb-3 col-3 color"
              name="signup"
            >
              <b>Sign up</b>
            </button>
            </form>

            <div class="col-12">

            <?php

$con=mysqli_connect("localhost","root","arun","signuplogin");

if(isset($_POST["signup"]))
 {
  $n=$_POST["nam"];
  $email=$_POST["email"];
  $password=$_POST["password"];
  $confirm=$_POST["confirmpassword"];

   if($n == "")
   {
        echo '<script> 
       document.getElementById("idname").placeholder="PLEASE Enter Your Name";
       document.getElementById("idname").style.borderColor="red";
       </script>';
   }
   else if($email == "")
   {
    echo '<script> 
    document.getElementById("idemail").placeholder="PLEASE Enter Your Email ";
    document.getElementById("idemail").style.borderColor="red";
     </script>';
   }
  else if($password == "")
   {
    echo '<script> 
       document.getElementById("idpassword").placeholder="PLEASE Enter Your Password ";
       document.getElementById("idpassword").style.borderColor="red";
     </script>';
   }
   else if($confirm == "")
   {
    echo '<script>   
       document.getElementById("idconfirm").placeholder="PLEASE Enter Your Confirm Password ";
       document.getElementById("idconfirm").style.borderColor="red";
         </script>';
   }

   else
   {
 
  if($_POST["password"]==$_POST["confirmpassword"])
  {
     mysqli_query($con,"INSERT INTO signup(name,email,password) VALUES('$n','$email','$password')");
         
  $sql="SELECT * from signup where email in ('$email')";
  $result=mysqli_query($con,$sql);   
  $e="";
while ($row=$result->fetch_assoc())
 {
    $e=$row["email"];                
 }
 
      if($e==$email){
        echo '<script> 
        document.getElementById("idemail").placeholder="PLEASE Enter Your Another Email ";
        document.getElementById("idemail").style.borderColor="red";
         </script>';
      }   
      else{  
        $sql1="SELECT * from signup where password in ('$password')";
 $result=mysqli_query($con,$sql1);   
 $pass="";
while ($row=$result->fetch_assoc())
{
   $pass=$row["password"];                
}
     
       if($pass==$password){
        echo '<script> 
        document.getElementById("idpassword").placeholder="Please Enter Another Password";
        document.getElementById("idpassword").style.borderColor="red";
         </script>';
       }
       else{
        echo '<script>alert("..... ACCOUNT SUCCESSFULLY  CREATED .....")</script>';  
  
      //  echo "ture it";
    echo '
    <div class="col-12 text-center mx-auto  bg-warning pt-3 pb-2 btn">
    <h2><b>GO TO LOGIN PAGE</b></h2>
    <h2><b>Click to LOGIN BUTTON</b></h2>
    <a href="./Login.php">
     <button
    type="button"
    class="btn btn-outline-dark bg-primary mt-3 mb-3 col-2 color"  
  >
    <b>Log in</b>
  </button> 
  </a>
  </div>';
  }
     }
     echo '<script> 
     document.getElementById("idemail").placeholder="Please Enter Another Email Adderss";
     document.getElementById("idemail").style.borderColor="red";
      </script>';
    
              
  }
  else
  {
   echo '<script>alert(".....Enter SAME PASSWORD.....")</script>';
  }
}
 
}
?>

                
            </div>
         
          <h6 class="mt-3">By clicking the Singup button you agree to our</h6>
          <h6><b>Terms & Condition and Privacy Policy</b></h6>
          <h6>Designed by</h6>
          <h1><b>D.ARUN</b></h1>
        </div>
      </row>     
    </container>


   

  <!-- <?php
  $con=mysqli_connect("localhost","root","arun","signuplogin");
  if($con){
      echo "connect";
  }
  else{
      echo "not connect";
  }
  ?> -->
  
  
</body>  
</html>
