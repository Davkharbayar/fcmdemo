    
<html>
    <title>Firebase Messaging Demo</title>
    <body>
        <div id="tokendiv"></div>
        <script src="https://www.gstatic.com/firebasejs/4.6.2/firebase.js"></script>
        <script>
            tokenValue = document.getElementById("tokendiv");
            var config = {
                apiKey: "",
                authDomain: "testfirebase-e9af4.firebaseapp.com",
                databaseURL: "https://testfirebase-e9af4.firebaseio.com",
                projectId: "testfirebase-e9af4",
                storageBucket: "",
                messagingSenderId: "",
                appId: "1:394392062916:web:735867df9fc9ad1c"
            };
            firebase.initializeApp(config);
            const messaging = firebase.messaging();
            messaging
                .requestPermission()
                .then(function () {
                    return messaging.getToken()
                })
                .then(function(token) {
                    tokenValue.innerHTML = "Токен : " + token
                })
        </script>
    
        </body>
    
    </html>
