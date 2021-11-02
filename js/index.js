$(function(){
    let messengerIcon = document.querySelector('.messengers_icon')
    setInterval(() => {
        messengerIcon.classList.toggle('messenger_active')
    }, 2500)
});

AOS.init({disable: 'mobile'});
function show_answer() {
    if (event.target.classList.contains('risk_header')){
        let a = event.target.parentNode;
        a.querySelector('.risk_answer').classList.toggle('show');
        if (a.querySelector('.risk_answer').classList.contains('show')){
            let arrow = event.target.querySelector('.risk_header_arrow div')
            arrow.style.transform = "rotate(90deg)"
            arrow.style.marginLeft = "2px"
        }else{
            let arrow = event.target.querySelector('.risk_header_arrow div')
            arrow.style.transform = "rotate(-90deg)"
        }
    }else{
        let a = event.target.parentNode.parentNode;
        a.querySelector('.risk_answer').classList.toggle('show');
        if (a.querySelector('.risk_answer').classList.contains('show')){
            let arrow = event.target.parentNode.querySelector('.risk_header_arrow div')
            arrow.style.transform = "rotate(90deg)"
        }else{
            let arrow = event.target.parentNode.querySelector('.risk_header_arrow div')
            arrow.style.transform = "rotate(-90deg)"
        }
    }
}


var swiper = new Swiper(".swiper", {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'bullets',
    },
});

var swiper3 = new Swiper(".swiper3", {
    loop: true,
    effect: "",
    navigation: {
        nextEl: ".swiper-button-next3",
        prevEl: ".swiper-button-prev3",
    },
    breakpoints: {
        320: {
            slidesPerView: 1,
            spaceBetween: 15,
        },
        640: {
            slidesPerView: 2,
            spaceBetween: 20,
        },
        768: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        960: {
            slidesPerView: 3,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 4,
            spaceBetween: 30,
        },
    }
});

var swiper2 = new Swiper(".swiper2", {
    loop: true,
    pagination: {
        el: '.swiper-pagination',
        type: 'fraction',
    },
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
});

function showModal() {
    event.preventDefault()
    var modal = document.querySelector('.modal')
    modal.classList.toggle('showmodal');
}
function modal(){
    let e = event.target
    if (e.classList.contains('modal')){
        var modal = document.querySelector('.modal')
        modal.classList.toggle('showmodal');
    }
}
let s1 = 0
let s2 = 0
function grossD(){
    let gross = document.querySelectorAll('.ms-b')
    if (gross.length <=0 ){
        let st = setInterval (function(){
            gross = document.querySelectorAll('.ms-b')
            if (gross.length >= 1) {
                clearInterval(st)
                s2 = gross[2].innerText.split(' ')[0]
                let c = document.querySelector('#ms-hashrate')
                c.setAttribute('value', "13000")
                msRecalc(c)
                let d = document.querySelectorAll('.ms-b')
                s1 = d[2].innerText.split(' ')[0]
                console.log(s1, s2);
                calc()
                calc(large=true, max=false)
                calc(large=false, max=true )
                
            }
        }, 500)
    }
}
let kzt = 0
fetch('https://free.currencyconverterapi.com/api/v5/convert?q=USD_KZT&compact=y&apiKey=34c30a2b1f35585a8b35')
    .then(e => {
        return e.json();
    })
    .then(r=>{
        kzt = Math.round(r.USD_KZT.val * 100)/100;
    })
grossD()
function calc(large=false, max=false) {
    let select1 = document.querySelector('#select1').value
    let a22 = document.querySelector('#'+select1).value
    if (large){
        a22 = 100000
    }
    else if(max){
        a22 = 500000
    }
    let b22 = 200
    let ths = document.querySelector('.ths')
    if (a22 == 10000){
        b22 = 200
    }else if(a22 == 20000){
        b22 = 400
    }
    else if(a22 == 30000){
        b22 = 600
    }
    else if(a22 == 40000){
        b22 = 800
    }
    else if(a22 == 50000){
        b22 = 1000
    }
    else if(a22 == 60000){
        b22 = 1200
    }
    else if(a22 == 70000){
        b22 = 1400
    }
    else if(a22 == 80000){
        b22 = 1600
    }
    else if(a22 == 90000){
        b22 = 1800
    }
    else if(a22 == 100000){
        b22 = 2000
    }
    else if(a22 == 200000){
        b22 = 4000
    }
    else if(a22 == 300000){
        b22 = 6000
    }
    else if(a22 == 400000){
        b22 = 8000
    }
    else if(a22 == 500000){
        b22 = 10000
    }
    let amount1 = 600
    let amount2 = 200
    let amount = amount1 + amount2
    let ths1 = 13
    let ths2 = 30
    let ths1all = 7800
    let ths2all = 6000
    let thsall = ths1all + ths2all
    let elec1 = 1.4
    let elec2 = 2.4
    // let elec = amount1 * elec1 + amount2 * elec2
    let tarif1 = 23.0
    let tarif2 = 23.0
    let tech1 = 7.0
    let tech2 = 7.0

    let chp1 = s1 - (elec1*24*(tarif1/kzt)) - tech1/30
    let chp2 = s2 - (elec2*24*(tarif2/kzt)) - tech2/30
    // let chp = chp1 * amount1 + chp2 * amount2

    let i5 = s1 - (elec1*24*(22/kzt))-(tech1/30)
    let i6 = s2 - (elec2*24*(22/kzt))-(tech2/30)
    let i8 = s1 - (elec1*24*(21/kzt))-(tech1/30)
    let i9 = s2 - (elec2*24*(21/kzt))-(tech2/30)

    let j2 = 500
    let j3 = 1600
    let j4 = j2 * amount1 + j3 * amount2

    let d13 = j4 / thsall
    let d14 = (amount1 * chp1 + amount2 * chp2)/amount
    let d15 = (amount1 * ths1 + amount2 * ths2)/amount
    let d16 = d14 / d15

    let e14 = (i5*amount1+i6*amount2)/amount
    let e16 = e14/d15

    let f14 = (i8*amount1+i9*amount2)/amount
    let f16 = f14/d15

    let h22 = 0.6
    let e22 = 0.7
    
    let c22 = b22 * d16
    let tarifTitle = document.querySelector('.calc_info_title')
    if (a22 < 100000){
        c22 = b22 * d16
    }else if (a22 >= 100000 && a22 < 500000){
        c22 = b22 * e16
        e22 = 0.8
    }
    else{
        c22 = b22 * f16
        e22 = 0.8
        h22 = 0.7
    }
    let d22 = c22 * 30 * e22
    let f22 = a22 / d22
    let g22 = 36 - f22
    let i22 = c22 * 30 * h22
    let j22 = i22 * g22
    let k22 = Math.round(j22) * 100 / a22
    if (large){
        document.querySelector('.large').innerText = new Intl.NumberFormat('ru-RU').format(Math.round(j22))
        document.querySelector('.box_roi_large').innerText = Math.round(k22) + "%"
        console.log('large', Math.round(k22) + "%");
    }
    else if (max){
        document.querySelector('.max').innerText = new Intl.NumberFormat('ru-RU').format(Math.round(j22))
        document.querySelector('.box_roi_max').innerText = Math.round(k22) + "%"
        console.log('max', Math.round(k22) + "%");
    }
    else{
        ths.innerText = b22
        if (a22 < 50000 && k22 > 100){
            tarifTitle.innerHTML = 'Starter'
            document.querySelector('.payback_val').innerText = Math.round(f22) + ' месяцев'
            document.querySelector('.roi_val').innerText = Math.round(k22) + "%"
            document.querySelector('.np_val').innerText =  new Intl.NumberFormat('ru-RU').format(Math.round(j22))
            document.querySelector('.month_val').innerText = new Intl.NumberFormat('ru-RU').format(Math.round(d22))
            document.querySelector('.clean_val').innerText = new Intl.NumberFormat('ru-RU').format(a22) 
            document.querySelector('.year_val').innerText = Math.round(k22/ 3)  + "%"
            document.querySelector('.clean_m_val').innerText = Math.round(f22) *2 + ' месяцев'
        }else if (a22 >= 50000 && a22 < 100000 && k22 > 150){
            tarifTitle.innerHTML = 'Medium'
            document.querySelector('.payback_val').innerText = Math.round(f22) + ' месяцев'
            document.querySelector('.roi_val').innerText = Math.round(k22) + "%"
            document.querySelector('.np_val').innerText =  new Intl.NumberFormat('ru-RU').format(Math.round(j22))
            document.querySelector('.month_val').innerText = new Intl.NumberFormat('ru-RU').format(Math.round(d22))
            document.querySelector('.clean_val').innerText = new Intl.NumberFormat('ru-RU').format(a22*1.5)
            document.querySelector('.year_val').innerText = Math.round(k22/ 3)  + "%"
            document.querySelector('.clean_m_val').innerText = Math.round(f22) *2 + ' месяцев'
        }else{
            tarifTitle.innerHTML = 'Large'
            document.querySelector('.payback_val').innerText = Math.round(f22) + ' месяцев'
            document.querySelector('.roi_val').innerText = Math.round(k22) + "%"
            document.querySelector('.np_val').innerText = new Intl.NumberFormat('ru-RU').format(Math.round(j22))
            document.querySelector('.month_val').innerText = new Intl.NumberFormat('ru-RU').format(Math.round(d22))
            document.querySelector('.clean_val').innerText = new Intl.NumberFormat('ru-RU').format(Math.round(j22)-a22)
            document.querySelector('.year_val').innerText = Math.round(k22/3) + "%"
            document.querySelector('.clean_m_val').innerText = Math.round(f22) *2 + ' месяцев'
        }
        
    }
    // console.log(Math.round(f22) , Math.round(j22 * 100) / 100, Math.round(k22 * 100) / 100, kzt); 
}


function choiceTarif(){
    let select1 = document.querySelector('#select1').value
    let select2 = document.querySelector('#'+select1)
    document.querySelectorAll('.select2').forEach(e=>{
        e.classList.remove('select2show');
    })
    select2.classList.add('select2show');
    if (select1 == 'starter'){
        document.querySelector('.limit').innerText = '100%'
        document.querySelector('.limit_val').innerText = '100%'
    }else if(select1 == 'medium'){
        document.querySelector('.limit').innerText = '150%'
        document.querySelector('.limit_val').innerText = '150%'
    }else{
        document.querySelector('.limit').innerText = 'unlimited'
        document.querySelector('.limit_val').innerText = 'unlimited'
    }
    calc()
}


async function sendForm() {
    event.preventDefault()
    let name = document.querySelector('#name').value
    let email = document.querySelector('#email').value
    let phone = document.querySelector('#phone').value
    if (event.target.classList.contains('button_form') || event.target.parentNode.classList.contains('button_form')){
        name = document.querySelector('#name2').value
        email = document.querySelector('#email2').value
        phone = document.querySelector('#phone2').value
    }
    else{
        var modal = document.querySelector('.modal')
        modal.classList.toggle('showmodal');
    }
    if (name == "" || phone == "" || email == "" || !email.includes('@')){
        let s = document.querySelector('.error')
        s.style.top = '10px'
        setTimeout(() => {
            s.style.top = '-110px'
        }, 1500);
    }else{
        let s = document.querySelector('.success')
        s.style.top = '10px'
        setTimeout(() => {
            s.style.top = '-110px'
        }, 1500);
        
        console.log(name, phone, email);
          fetch('https://api.telegram.org/bot2048192618:AAETES1TloB-FYuEqwXQVZTcMCQoQPA1dNg/sendMessage', {
              method: 'post',
              headers: {
                  'Accept': 'application/json, text/plain, */*',
                  'Content-Type': 'application/json'
              },
              body: JSON.stringify({ chat_id: 468440854, text: `${name} \n ${phone} \n ${email}` })
          })
          .then(res => {
            if(res.status == 200) {
                document.querySelector('#name').value = ""
                document.querySelector('#phone').value = ""
                document.querySelector('#email').value = ""
                document.querySelector('#name2').value = ""
                document.querySelector('#phone2').value = ""
                document.querySelector('#email2').value = ""
            }
          })
    }
}

  