
async function handleLogIn() {
    const username = document.getElementById("rtrnUsername").value;
    console.log(username);
    const password = document.getElementById("rtrnPass").value;
    console.log(password);
    try {
        const res = await axios({
            method: "post",
            url: 'https://mealaday.herokuapp.com/account/login',
            data: {
                name: username,
                pass: password,
            }
        })
        const token = res.data.jwt;
        localStorage.setItem('jwt', token);
        console.log(token);
        localStorage.setItem('name', username);
        window.location.replace('quiz.html'); 
        return true;
    } catch (error) {
        alert(error + ": Account not found");
        return false;
    }
}

async function createUser() {
    const first = document.getElementById("firstName").value;
    const last = document.getElementById("lastName").value;
    const favFood = document.getElementById("favFood").value;
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
   
    try {
        const res = await axios({
            method: "post",
            url: 'https://mealaday.herokuapp.com/account/create',
            data: {
                first: first,
                last: last,
                favFood: favFood,
                name: username,
                pass: password,
            }
        })
        window.location.replace('logIn.html');
        console.log(res)
    } catch (error){
        alert(error + ": An account with this name already exists!");
    }
}

function logOut() {
    localStorage.removeItem('jwt');
    localStorage.removeItem('name');
    window.location.replace('index.html');
}
