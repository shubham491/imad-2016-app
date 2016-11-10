 var submit1 = document.getElementById('submit_btn');
    submit1.onclick = function () {
        var request = new XMLHttpRequest();
        
        // Capture the response and store it in a variable
        request.onreadystatechange = function () {
          if (request.readyState === XMLHttpRequest.DONE) {
              // Take some action
              if (request.status === 200) {
                  submit1.value = 'Sucess!';
              } else if (request.status === 403) {
                  submit1.value = 'Invalid credentials. Try again?';
              } else if (request.status === 500) {
                  alert('Something went wrong on the server');
                  submit1.value = 'Login';
              } else {
                  alert('Something went wrong on the server');
                  submit1.value = 'Login';
              }
             
          }  
          // Not done yet
        };
 var username = document.getElementById('username').value;
        var password = document.getElementById('password').value;
        console.log(username);
        console.log(password);
        request.open('POST', 'http://shubham491.imad.hasura-app.io/create-user', true);
        request.setRequestHeader('Content-Type', 'application/json');
        request.send(JSON.stringify({username: username, password: password}));  
};