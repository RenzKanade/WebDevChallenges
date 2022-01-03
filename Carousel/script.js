let images = ["./images/pic_01.png","./images/pic_02.png","./images/pic_03.png","./images/pic_04.jpg","./images/pic_05.jpg","./images/pic_06.jpg","./images/pic_07.jpg","./images/pic_08.png","./images/pic_09.jpg"];
let names = ["Kasumi", "Mokuren", "Qu","Menou", "Nekome", "Ran", "Zakuro", "Ginsei"];
let teams = ["Team C", "Team B", "Team P", "Team K", "Team W"];
let descs = ["Lorem ipsum, dolor sit amet consectetur adipisicing elit. Necessitatibus saepe reiciendis ipsa sunt eum ut.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint, facilis.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum maxime non sunt dignissimos autem quae architecto doloremque deserunt cupiditate.","Lorem ipsum dolor sit amet consectetur adipisicing elit. Veniam eum aut, nihil accusantium consequuntur doloribus."];
let staffs = [];
const GenerateStaffOnLoad = () =>{
    let pictureHolder = document.getElementById("staff-pic");
    let nameHolder = document.getElementById("staff-name");
    let teamHolder = document.getElementById("staff-team");
    let descHolder = document.getElementById("staff-desc");
    let image =  images[Math.floor(Math.random()*images.length)];
    let name = names[Math.floor(Math.random()*names.length)];
    let team = teams[Math.floor(Math.random()*teams.length)];
    let desc = descs[Math.floor(Math.random()*descs.length)];
    let staffid = 0;
    let staff = [staffid,image,name,team,desc];
    staffs.push(staff);
    pictureHolder.style.backgroundImage="url("+image+")";
    nameHolder.innerHTML = name;
    teamHolder.innerHTML = team;
    descHolder.innerHTML = desc;
    console.log(staffs);
}

const GenerateStaff = () =>{
    let image =  images[Math.floor(Math.random()*images.length)];
    let name = names[Math.floor(Math.random()*names.length)];
    let team = teams[Math.floor(Math.random()*teams.length)];
    let desc = descs[Math.floor(Math.random()*descs.length)];
    let staffid = staffs.length;
    let staff = [staffid,image,name,team,desc];
    staffs.push(staff);
    console.log(staffs);
}

let i = 0;

const NextStaff = () =>{
    let pictureHolder = document.getElementById("staff-pic");
    let nameHolder = document.getElementById("staff-name");
    let teamHolder = document.getElementById("staff-team");
    let descHolder = document.getElementById("staff-desc");

    if ( i < staffs.length){
        i++;
    } else if ( i == staffs.length){
        i = 0;
    }

    pictureHolder.style.backgroundImage = "url("+staffs[i][1]+")";
    nameHolder.innerHTML = staffs[i][2];
    teamHolder.innerHTML = staffs[i][3];
    descHolder.innerHTML = staffs[i][4];

    console.log(staffs[i]);
}

const PrevStaff = () =>{
    let pictureHolder = document.getElementById("staff-pic");
    let nameHolder = document.getElementById("staff-name");
    let teamHolder = document.getElementById("staff-team");
    let descHolder = document.getElementById("staff-desc");

    if ( i > 0){
        i--;
    } else if ( i == 0){
        i = staffs.length;
    }

    pictureHolder.style.backgroundImage = "url("+staffs[i][1]+")";
    nameHolder.innerHTML = staffs[i][2];
    teamHolder.innerHTML = staffs[i][3];
    descHolder.innerHTML = staffs[i][4];

    console.log(staffs[i]);
}


