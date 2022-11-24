const sideMenu =document.querySelector("aside")
const menuBtn = document.querySelector("#menu-btn")
const closeBtn = document.querySelector("#close-btn")
const themeToggler=document.querySelector(".theme-toggler")
const serialDiv=document.querySelector(".serial")
const lanDiv=document.querySelector(".lan")
const bottomMenuSerial=document.querySelector(".bottom-menu-serial")
const bottomMenuLan=document.querySelector(".bottom-menu-lan")
const serverConfig=document.querySelector(".server")
const bottomConfigLinks = document.querySelectorAll(".bottom-config-link")
const bottomLanLinks = document.querySelectorAll(".bottom-lan-link")
const title =document.querySelector("main>h1")
var menuLinks=document.querySelectorAll(".sidebar>a")
const form=document.querySelector(".port-form")
const infoMenu = document.querySelector(".infoMenu")

window.onload=function(){
    if(localStorage.getItem('ip')!==null)  
    {
        console.log(localStorage.getItem('ip')) 
        const ip = document.createElement('h1').innerText=`Gönderdiğiniz IP: ${localStorage.getItem('ip').toString()}`
        form.innerHTML=ip
        
    }
    // if(localStorage.getItem('serverIP')!==null)  
    // {
    //     console.log(localStorage.getItem('serverIP')) 
    //     const getServerIp = document.createElement('h1').innerText=`Gönderdiğiniz IP: ${localStorage.getItem('serverIP').toString()}`
    //     form.innerHTML= getServerIp
        
    // }
}


infoMenu.addEventListener('click', () => {
    form.innerHTML = informationPage;
} )

function createSerialConfigForm(num){
    title.innerHTML=`PORT ${num}`
    form.innerHTML=serialConfigForm
    ipFormatter('IP')
    document.getElementById('serial-config-form').addEventListener('submit',(e)=>{
        document.getElementById('defaultPort').value = `PORT${num}`
        localStorage.setItem('ip', document.getElementById('IP').value) //! burası düzenlenecek
    })
}

function createLanConfigForm(num){
    title.innerHTML=`LAN ${num}`
    form.innerHTML=lanConfigForm
    ipFormatter('IP')
    document.getElementById('lan-config-form').addEventListener('submit',(e)=>{
        document.getElementById('defaultLan').value = `LAN${num}`
        localStorage.setItem('ip', document.getElementById('IP').value) //! burası düzenlenecek

    })
}

function createServerConfigForm(){
    title.innerHTML=`SERVER CONFIG`
    form.innerHTML=serverConfigForm
    ipFormatter('serverIP');
    localStorage.setItem('serverIP', document.getElementById('serverIP').value)
}

function ipFormatter(id) {$(document).ready (function () {
    $(`#${id}`).mask('0ZZ.0ZZ.0ZZ.0ZZ', { translation: { 'Z': { pattern: /[0-9]/, optional: true } } });
  }) }

const informationPage = `<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css" integrity="sha384-Vkoo8x4CGsO3+Hhxv8T/Q5PaXtkKtu6ug5TOeNV6gBiFeWPGFN9MuhOf23Q9Ifjh" crossorigin="anonymous">
<div class="container">
<div class="row">
    <div class="col-lg-3">
        <div class="card card-margin" style="width: 18rem;">
            <div class="card-header no-border">
                <h5 class="card-title">MOM</h5>
            </div>
            <div class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                        <div class="widget-49-date-primary">
                            <span class="widget-49-date-day">09</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 DeskOpe. Website</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Expand module is removed</span></li>
                        <li class="widget-49-meeting-item"><span>Data migration is in scope</span></li>
                        <li class="widget-49-meeting-item"><span>Session timeout increase to 30 minutes</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-primary">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card card-margin">
            <div class="card-header no-border">
                <h5 class="card-title">MOM</h5>
            </div>
            <div class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                        <div class="widget-49-date-warning">
                            <span class="widget-49-date-day">13</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-08235 Lexa Corp.</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Scheming module is removed</span></li>
                        <li class="widget-49-meeting-item"><span>App design contract confirmed</span></li>
                        <li class="widget-49-meeting-item"><span>Client request to send invoice</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-warning">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
    <div class="col-lg-4">
        <div class="card card-margin">
            <div class="card-header no-border">
                <h5 class="card-title">MOM</h5>
            </div>
            <div class="card-body pt-0">
                <div class="widget-49">
                    <div class="widget-49-title-wrapper">
                        <div class="widget-49-date-success">
                            <span class="widget-49-date-day">22</span>
                            <span class="widget-49-date-month">apr</span>
                        </div>
                        <div class="widget-49-meeting-info">
                            <span class="widget-49-pro-title">PRO-027865 Opera module</span>
                            <span class="widget-49-meeting-time">12:00 to 13.30 Hrs</span>
                        </div>
                    </div>
                    <ol class="widget-49-meeting-points">
                        <li class="widget-49-meeting-item"><span>Scope is revised and updated</span></li>
                        <li class="widget-49-meeting-item"><span>Time-line has been changed</span></li>
                        <li class="widget-49-meeting-item"><span>Received approval to start wire-frame</span></li>
                    </ol>
                    <div class="widget-49-meeting-action">
                        <a href="#" class="btn btn-sm btn-flash-border-success">View All</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</div>
</div>`

const serialConfigForm=`<form action="/serial-config-form" method="POST" id="serial-config-form" >
                        <label for="deviceName">Cihaz Adı</label>
                        <input type="text" id="deviceName" name="deviceName" placeholder="Cihaz adı giriniz." required 
                        oninvalid="this.setCustomValidity('Cihaz Adı alanı boş bırakılamaz.')"
                        oninput="this.setCustomValidity('')">
                        <label for="bedID">Yatak ID</label>
                        <input type="text" id="bedID" name="bedID" placeholder="Yatak ID giriniz." required
                        oninvalid="this.setCustomValidity('Yatak ID alanı boş bırakılamaz.')"
                        oninput="this.setCustomValidity('')">
                        <label for="IP">IP</label>
                        <input type="text" id="IP" name="IP" placeholder="IP giriniz." required
                        oninvalid="this.setCustomValidity('IP alanı boş bırakılamaz.')"
                        oninput="this.setCustomValidity('')">
                        <label for="port">Port</label>
                        <input type="number" id="port" name="port" placeholder="Port numarası giriniz." required
                        oninvalid="this.setCustomValidity('Port numarası alanı boş bırakılamaz ve sayı olmalı.')"
                        oninput="this.setCustomValidity('')">
                        <input type="hidden" id="defaultPort" name="defaultPort" />
                        <input type="submit" value="Submit">
                    </form>`
const lanConfigForm=`<form action="/lan-config-form" method="POST" id="lan-config-form" >
                    <label for="deviceName">Cihaz Adı</label>
                    <input type="text" id="deviceName" name="deviceName" placeholder="Cihaz adı giriniz." required 
                    oninvalid="this.setCustomValidity('Cihaz Adı alanı boş bırakılamaz.')"
                    oninput="this.setCustomValidity('')">
                    <label for="bedID">Yatak ID</label>
                    <input type="text" id="bedID" name="bedID" placeholder="Yatak ID giriniz." required
                    oninvalid="this.setCustomValidity('Yatak ID alanı boş bırakılamaz.')"
                    oninput="this.setCustomValidity('')">
                    <label for="IP">IP</label>
                    <input type="text" id="IP" name="IP" placeholder="IP giriniz." required
                    oninvalid="this.setCustomValidity('IP alanı boş bırakılamaz.')"
                    oninput="this.setCustomValidity('')">
                    <label for="port">Port</label>
                    <input type="number" id="port" name="port" placeholder="Port numarası giriniz." required
                    oninvalid="this.setCustomValidity('Port numarası alanı boş bırakılamaz.')"
                    oninput="this.setCustomValidity('')">
                    <input type= "hidden" id="defaultLan" name="defaultLan" >          
                   <input type="submit" value="Submit">
                </form>`                    
const serverConfigForm=`<form action="/server-config-form" method="POST" id="server-config-form">
                            <label for="serverIP">Server IP</label>
                            <input type="text" id="serverIP" name="serverIP" placeholder="Server IP giriniz." 
                             required
                            oninvalid="this.setCustomValidity('Server IP alanı boş bırakılamaz.')"
                            oninput="this.setCustomValidity('')">
                            <label for="serverPort">Port</label>
                            <input type="number" id="serverPort" name="serverPort" placeholder="Port numarası giriniz." required "
                            oninvalid="this.setCustomValidity('Port numarası alanı boş bırakılamaz.')"
                            oninput="this.setCustomValidity('')">
                            <input type="submit" value="Submit">
                        </form>`
                
                        
    menuBtn.addEventListener('click',()=>{
        sideMenu.style.display='block'
    })
    closeBtn.addEventListener('click',()=>{
        sideMenu.style.display='none'
    })
    themeToggler.addEventListener('click',()=>{
        document.body.classList.toggle('dark-theme-variables')
        themeToggler.querySelector('span:nth-child(1)').classList.toggle('active')
        themeToggler.querySelector('span:nth-child(2)').classList.toggle('active')
    })
    serialDiv.addEventListener('click',()=>{
        bottomMenuSerial.style.display=bottomMenuSerial.style.display==='inline-block' ? 'none': 'inline-block'
    })
    lanDiv.addEventListener('click',()=>{
        bottomMenuLan.style.display=bottomMenuLan.style.display==='inline-block' ? 'none': 'inline-block'
    })

    bottomConfigLinks.forEach((link,i)=>{
        link.addEventListener('click',()=>{
            createSerialConfigForm(i)
            
        })
    })
    bottomLanLinks.forEach((link,i)=>{
        link.addEventListener('click',()=>{
            createLanConfigForm(i)
            
        })
    })
    serverConfig.addEventListener('click',()=>{
        createServerConfigForm()
    })
    menuLinks.forEach((link)=>{
            link.addEventListener('click',()=>{
                menuLinks.forEach(l => l.classList.remove('active'))
                link.classList.add('active');
            })
    })
