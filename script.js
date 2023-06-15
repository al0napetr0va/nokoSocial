//SIDEBAR
const menuItems = document.querySelectorAll('.menu-item');

//MESSAGES
const messagesNotification = document.querySelector('#messages-notifications');
const messages = document.querySelector(".messages");
const message = messages.querySelectorAll('.message');
const messageSearch = document.querySelector('#message-search');

//THEME
const theme = document.querySelector('#theme');
const themeModal = document.querySelector('.customize-theme');

const fontSizes = document.querySelectorAll('.choose-size span');
var root = document.querySelector(':root');

const primaryColors = document.querySelectorAll('.choose-color span');

const Bg1 = document.querySelector('.bg-1');
const Bg2 = document.querySelector('.bg-2');
const Bg3 = document.querySelector('.bg-3');


// ---------------------SIDEBAR--------------------

//remove active class from all menu-items
const changeActiveItem = () => {
    menuItems.forEach(item => {
        item.classList.remove('active');
    })
}

menuItems.forEach(item => {
    item.addEventListener('click', () => {
        changeActiveItem();
        item.classList.add('active');
        if(item.id != 'notifications'){
            document.querySelector('.notifications-popup').
            style.display = 'none';
        } else{
            document.querySelector('.notifications-popup').
            style.display = 'block';
            document.querySelector('#notifications .notification-count').
            style.display = 'none';
        }
    })
})

// --------------------MESSAGES---------------------
//searches chats
const searchMessage = () => {
    const val = messageSearch.value.toLowerCase();
    message.forEach(user => {
        let name = user.querySelector('h6').textContent.toLowerCase();
        if(name.indexOf(val) != -1){
            user.style.display = 'flex';
        } else{
            user.style.display = 'none';
        }
    })
}

//search chat
messageSearch.addEventListener('keyup', searchMessage);

//highlight messages card when messages menu item is clicked
messagesNotification.addEventListener('click', () => {
    messages.style.boxShadow = '0px 0px 35px -5px hsl(var(--primary-color-hue), 75%, 30%)';
    messages.style.webkitBoxShadow = '0px 0px 35px -5px hsl(var(--primary-color-hue), 75%, 30%)';
    messages.style.MozBoxShadow = '0px 0px 35px -5px hsl(var(--primary-color-hue), 75%, 30%)';
    
    messagesNotification.querySelector('.notification-count').style.display = 'none';
    setTimeout(() => {
        messages.style.boxShadow = 'none';
        messages.style.webkitBoxShadow = 'none';
        messages.style.MozBoxShadow = 'none';
    }, 2000);
})


//  -----------------THEME CUSTOMIZATION-------------------

//  open modal
const openThemeModal = () => {
    themeModal.style.display = 'grid';
}

// closed modal
const closedThemeModal = (e) => {
    if(e.target.classList.contains('customize-theme')){
        themeModal.style.display = 'none';
    }
}

themeModal.addEventListener('click', closedThemeModal);
theme.addEventListener('click', openThemeModal);

//Fonts

//remove active class from spans or font size selectors
const removeSizeSelector = () => {
    fontSizes.forEach(size => {
        size.classList.remove('active');
    })
}

fontSizes.forEach(size => {

    size.addEventListener('click', () => {
        removeSizeSelector();
        let fontSize;
        size.classList.toggle('active');

        if(size.classList.contains('font-size-1')){
            fontSize = '10px';
            root.style.setProperty('--1sticky-top-left', '5.4rem');
            root.style.setProperty('--1sticky-top-right', '5.4rem');
        } else if(size.classList.contains('font-size-2')){
            fontSize = '13px';
            root.style.setProperty('--2sticky-top-left', '5.4rem');
            root.style.setProperty('--2sticky-top-right', '-7rem');
        } else if(size.classList.contains('font-size-3')){
            fontSize = '16px';
            root.style.setProperty('--3sticky-top-left', '-2rem');
            root.style.setProperty('--3sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-4')){
            fontSize = '19px';
            root.style.setProperty('--4sticky-top-left', '-5rem');
            root.style.setProperty('--4sticky-top-right', '-25rem');
        } else if(size.classList.contains('font-size-5')){
            fontSize = '22px';
            root.style.setProperty('--5sticky-top-left', '-12rem');
            root.style.setProperty('--5sticky-top-right', '-35rem');
        }

        //change font-size of the root html element
        document.querySelector('html').style.fontSize = fontSize;
    })
    
})

// change primary colors

//remove active class from colors selectors
const removeColorSelector = () => {
    primaryColors.forEach(color => {
        color.classList.remove('active');
    })
}

primaryColors.forEach(color => {

    color.addEventListener('click', () => {
        removeColorSelector();
        let primary;
        color.classList.toggle('active');

        if(color.classList.contains('color-1')){
            primaryHue = 252;
        } else if(color.classList.contains('color-2')){
            primaryHue = 52;
        } else if(color.classList.contains('color-3')){
            primaryHue = 352;
        } else if(color.classList.contains('color-4')){
            primaryHue = 152;
        } else if(color.classList.contains('color-5')){
            primaryHue = 202;
        }

        root.style.setProperty('--primary-color-hue', primaryHue);
    })
    
})

//BACKGROUND
let lightColorLightness;
let whiteColorLightness;
let darkColorLightness;

// function which changes bg-color]
const changeBg = () => {
    root.style.setProperty('--light-color-lightness', lightColorLightness);
    root.style.setProperty('--white-color-lightness', whiteColorLightness);
    root.style.setProperty('--dark-color-lightness', darkColorLightness);

}
Bg1.addEventListener('click', () => {
    darkColorLightness ='17%';
    whiteColorLightness = '100%';
    lightColorLightness = '95%';
    //add active class
    Bg1.classList.add('active');
    //remove active class from others
    Bg2.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})

Bg2.addEventListener('click', () => {
    darkColorLightness ='95%';
    whiteColorLightness = '20%';
    lightColorLightness = '15%';
    //add active class
    Bg2.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg3.classList.remove('active');
    changeBg();
})

Bg3.addEventListener('click', () => {
    darkColorLightness ='95%';
    whiteColorLightness = '10%';
    lightColorLightness = '0%';
    //add active class
    Bg3.classList.add('active');
    //remove active class from others
    Bg1.classList.remove('active');
    Bg2.classList.remove('active');
    changeBg();
})







